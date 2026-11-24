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
grant insert (created_by, updated_by, animal_name, owner_name, species, data_json, updated_at),
      update (updated_by, animal_name, owner_name, species, data_json, updated_at)
  on public.patients to authenticated;

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

commit;

-- Zatwierdzanie po zweryfikowaniu konta (osobne polecenie w SQL Editor):
-- update public.profiles set role = 'pracownik' where id = 'UUID_Z_AUTHENTICATION_USERS';
-- Dostępne role: admin, pracownik, podglad, oczekuje.
