-- Anestezjologia: konta pracowników + wspólna baza pacjentów
-- Uruchom w Supabase → SQL Editor → New query → Run

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  role text not null default 'pracownik' check (role in ('admin', 'pracownik', 'podglad')),
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

-- Porządki, gdyby odpalać skrypt ponownie jak człowiek walczący z panelem administracyjnym.
drop policy if exists "profiles_select_authenticated" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own_or_admin" on public.profiles;
drop policy if exists "patients_select_authenticated" on public.patients;
drop policy if exists "patients_insert_authenticated" on public.patients;
drop policy if exists "patients_update_authenticated" on public.patients;
drop policy if exists "patients_delete_admin" on public.patients;

create policy "profiles_select_authenticated"
on public.profiles
for select
to authenticated
using (true);

create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = id);

create policy "profiles_update_own_or_admin"
on public.profiles
for update
to authenticated
using (
  (select auth.uid()) = id
  or exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role = 'admin'
  )
)
with check (
  (select auth.uid()) = id
  or exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role = 'admin'
  )
);

-- Wspólna baza kliniki: każdy zalogowany pracownik widzi pacjentów.
create policy "patients_select_authenticated"
on public.patients
for select
to authenticated
using (true);

-- Pracownik i admin mogą dodawać. Podgląd nie może.
create policy "patients_insert_authenticated"
on public.patients
for insert
to authenticated
with check (
  (select auth.uid()) = created_by
  and exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role in ('admin', 'pracownik')
  )
);

-- Pracownik i admin mogą edytować. Podgląd nie może.
create policy "patients_update_authenticated"
on public.patients
for update
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role in ('admin', 'pracownik')
  )
)
with check (
  updated_by = (select auth.uid())
  and exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role in ('admin', 'pracownik')
  )
);

-- Usuwanie tylko dla admina.
create policy "patients_delete_admin"
on public.patients
for delete
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role = 'admin'
  )
);

create index if not exists patients_updated_at_idx on public.patients(updated_at desc);
create index if not exists patients_animal_name_idx on public.patients(animal_name);
create index if not exists patients_owner_name_idx on public.patients(owner_name);

-- Po utworzeniu pierwszego konta możesz zrobić je adminem:
-- update public.profiles set role = 'admin' where username = 'twoj_login_z_maila';
