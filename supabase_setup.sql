begin;

-- Anestezjologia: konta pracowników + wspólna baza pacjentów
-- Uruchom w Supabase → SQL Editor → New query → Run

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  role text not null default 'oczekuje' check (role in ('admin', 'pracownik', 'podglad', 'oczekuje')),
  created_at timestamptz not null default timezone('utc'::text, now())
);

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references public.profiles(id),
  updated_by uuid references public.profiles(id),
  animal_name text,
  owner_name text,
  species text,
  data_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

alter table public.profiles enable row level security;
alter table public.patients enable row level security;

-- Nowy profil czeka na zatwierdzenie. Istniejące konta zachowują role.
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('admin', 'pracownik', 'podglad', 'oczekuje'));
alter table public.profiles alter column role set default 'oczekuje';

-- Rola pochodzi z profilu zalogowanego użytkownika. Funkcja omija RLS profili,
-- dzięki czemu polityka odczytu profili nie odwołuje się rekurencyjnie do siebie.
create or replace function public.current_staff_role()
returns text
language sql stable security definer
set search_path = ''
as $$
  select role from public.profiles where id = (select auth.uid());
$$;

revoke all on function public.current_staff_role() from public, anon, authenticated;
grant execute on function public.current_staff_role() to authenticated;

-- Role zmienia opiekun projektu w panelu Supabase. Klient może wpisać
-- tylko swoje dane kontaktowe, a rola nowego profilu pochodzi z DEFAULT.
revoke all on public.profiles from public, anon, authenticated;
grant select on public.profiles to authenticated;
grant insert (id, username, full_name), update (username, full_name)
  on public.profiles to authenticated;

revoke all on public.patients from public, anon, authenticated;
grant select, delete on public.patients to authenticated;
revoke insert (id, created_by, updated_by, animal_name, owner_name, species, data_json, updated_at),
       update (updated_by, animal_name, owner_name, species, data_json, updated_at)
  on public.patients from authenticated, anon, public;

drop policy if exists profiles_select_authenticated on public.profiles;
drop policy if exists profiles_insert_own on public.profiles;
drop policy if exists profiles_update_own_or_admin on public.profiles;
drop policy if exists profiles_update_own on public.profiles;
drop policy if exists patients_select_authenticated on public.patients;
drop policy if exists patients_insert_authenticated on public.patients;
drop policy if exists patients_update_authenticated on public.patients;
drop policy if exists patients_delete_admin on public.patients;

create policy profiles_select_authenticated on public.profiles
for select to authenticated
using (
  id = (select auth.uid())
  or (role in ('admin', 'pracownik', 'podglad')
      and (select public.current_staff_role()) in ('admin', 'pracownik', 'podglad'))
);

create policy profiles_insert_own on public.profiles
for insert to authenticated
with check (id = (select auth.uid()) and role = 'oczekuje');

create policy profiles_update_own on public.profiles
for update to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()));

create policy patients_select_authenticated on public.patients
for select to authenticated
using ((select public.current_staff_role()) in ('admin', 'pracownik', 'podglad'));

create policy patients_insert_authenticated on public.patients
for insert to authenticated
with check (
  (select public.current_staff_role()) in ('admin', 'pracownik')
  and created_by = (select auth.uid())
  and updated_by = (select auth.uid())
);

create policy patients_update_authenticated on public.patients
for update to authenticated
using ((select public.current_staff_role()) in ('admin', 'pracownik'))
with check (
  (select public.current_staff_role()) in ('admin', 'pracownik')
  and updated_by = (select auth.uid())
);

create policy patients_delete_admin on public.patients
for delete to authenticated
using ((select public.current_staff_role()) = 'admin');

create index if not exists patients_updated_at_idx on public.patients(updated_at desc);
create index if not exists patients_animal_name_idx on public.patients(animal_name);
create index if not exists patients_owner_name_idx on public.patients(owner_name);

create or replace function public.list_clinic_staff()
returns table (id uuid, full_name text, email text, role text)
language plpgsql stable security definer
set search_path = ''
as $$
begin
  if public.current_staff_role() is distinct from 'admin' then
    raise exception 'Brak uprawnień do listy personelu' using errcode = '42501';
  end if;
  return query
    select p.id, p.full_name, u.email::text, p.role
    from public.profiles p
    join auth.users u on u.id = p.id
    order by (p.role = 'oczekuje') desc, p.full_name nulls last, u.email, p.id;
end;
$$;

create or replace function public.set_clinic_staff_role(target_id uuid, expected_role text, new_role text)
returns text
language plpgsql volatile security definer
set search_path = ''
as $$
declare
  saved_role text;
begin
  if public.current_staff_role() is distinct from 'admin'
     or target_id is null or target_id = auth.uid() then
    raise exception 'Brak uprawnień do zmiany tej roli' using errcode = '42501';
  end if;
  if new_role is null or new_role not in ('admin', 'pracownik', 'podglad', 'oczekuje') then
    raise exception 'Nieprawidłowa rola' using errcode = '22023';
  end if;

  -- Serialize changes made through the panel before rechecking the actor.
  perform pg_catalog.pg_advisory_xact_lock(1248202107, 1);
  if public.current_staff_role() is distinct from 'admin' then
    raise exception 'Brak uprawnień do zmiany roli' using errcode = '42501';
  end if;
  update public.profiles p
  set role = new_role
  where p.id = target_id and p.role = expected_role
  returning p.role into saved_role;
  if not found then
    raise exception 'Rola została zmieniona od wczytania listy' using errcode = '40001';
  end if;
  return saved_role;
end;
$$;

revoke all on function public.list_clinic_staff() from public, anon, authenticated;
revoke all on function public.set_clinic_staff_role(uuid, text, text) from public, anon, authenticated;
grant execute on function public.list_clinic_staff() to authenticated;
grant execute on function public.set_clinic_staff_role(uuid, text, text) to authenticated;

-- Wersjonowanie kart i identyfikator ostatniego żądania zapisu.
alter table public.patients add column if not exists revision bigint not null default 1;
alter table public.patients add column if not exists save_request_id uuid;
revoke insert (save_request_id), update (save_request_id)
  on public.patients from authenticated, anon, public;

create table if not exists public.patient_card_history (
  patient_id uuid not null references public.patients(id) on delete cascade,
  revision bigint not null,
  changed_at timestamptz not null,
  changed_by uuid references public.profiles(id) on delete set null,
  primary key (patient_id, revision)
);
alter table public.patient_card_history enable row level security;
revoke all on public.patient_card_history from public, anon, authenticated;
grant select on public.patient_card_history to authenticated;

drop policy if exists patient_history_read on public.patient_card_history;
create policy patient_history_read on public.patient_card_history
for select to authenticated
using (exists (select 1 from public.patients p where p.id = patient_card_history.patient_id));

create or replace function public.advance_patient_revision()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.revision := old.revision + 1;
  new.updated_at := pg_catalog.clock_timestamp();
  if new.save_request_id is not distinct from old.save_request_id then
    new.save_request_id := null;
  end if;
  return new;
end;
$$;

create or replace function public.log_patient_revision()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
begin
  insert into public.patient_card_history (patient_id, revision, changed_at, changed_by)
  values (new.id, new.revision, new.updated_at, new.updated_by);
  return new;
end;
$$;

revoke all on function public.advance_patient_revision() from public, anon, authenticated;
revoke all on function public.log_patient_revision() from public, anon, authenticated;

drop trigger if exists advance_patient_revision on public.patients;
create trigger advance_patient_revision before update on public.patients
for each row execute function public.advance_patient_revision();

drop trigger if exists log_patient_revision on public.patients;
create trigger log_patient_revision after insert or update on public.patients
for each row execute function public.log_patient_revision();

-- Zapis z aplikacji przechodzi przez kontrolę roli i wersji w tej funkcji.
create or replace function public.save_patient_card(
  card_id uuid, expected_revision bigint, request_id uuid, card_data jsonb
)
returns table (id uuid, revision bigint, created_at timestamptz, updated_at timestamptz)
language plpgsql security definer
set search_path = ''
as $$
declare
  actor uuid := auth.uid();
  saved public.patients%rowtype;
begin
  if coalesce(public.current_staff_role(), '') not in ('admin', 'pracownik') then
    raise exception 'Brak uprawnień do zapisu karty' using errcode = '42501';
  end if;
  if card_id is null or request_id is null or jsonb_typeof(card_data) is distinct from 'object'
     or (expected_revision is not null and expected_revision < 1) then
    raise exception 'Nieprawidłowe dane karty' using errcode = '22023';
  end if;

  if expected_revision is null then
    insert into public.patients (
      id, created_by, updated_by, animal_name, owner_name, species, data_json, save_request_id
    )
    values (card_id, actor, actor, card_data->>'animalName', card_data->>'ownerName',
            card_data->>'species', card_data, request_id)
    on conflict on constraint patients_pkey do nothing
    returning * into saved;
  else
    update public.patients p
    set animal_name = card_data->>'animalName', owner_name = card_data->>'ownerName',
        species = card_data->>'species', data_json = card_data,
        updated_by = actor, save_request_id = request_id
    where p.id = card_id and p.revision = expected_revision
    returning p.* into saved;
  end if;

  if not found then
    -- Po utracie odpowiedzi ponowienie tego samego zapisu zwraca poprzedni wynik.
    select p.* into saved from public.patients p
    where p.id = card_id and p.save_request_id = request_id
          and p.updated_by = actor and p.data_json = card_data;
    if not found then
      raise exception 'Aktualna wersja karty różni się od edytowanej' using errcode = '40001';
    end if;
  end if;
  return query select saved.id, saved.revision, saved.created_at, saved.updated_at;
end;
$$;

revoke all on function public.save_patient_card(uuid, bigint, uuid, jsonb) from public, anon, authenticated;
grant execute on function public.save_patient_card(uuid, bigint, uuid, jsonb) to authenticated;

notify pgrst, 'reload schema';

commit;

-- Zatwierdzanie po zweryfikowaniu konta (osobne polecenie w SQL Editor):
-- update public.profiles set role = 'pracownik' where id = 'UUID_Z_AUTHENTICATION_USERS';
-- Dostępne role: admin, pracownik, podglad, oczekuje.
