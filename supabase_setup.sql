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

commit;

-- Zatwierdzanie po zweryfikowaniu konta (osobne polecenie w SQL Editor):
-- update public.profiles set role = 'pracownik' where id = 'UUID_Z_AUTHENTICATION_USERS';
-- Dostępne role: admin, pracownik, podglad, oczekuje.
