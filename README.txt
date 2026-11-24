AKTUALIZACJA PWA - ANESTEZJOLOGIA

Co zmieniono:
- gatunek jako wybor: Pies / Kot / Krolik
- usuniety widoczny znak wodny z ekranu
- autorstwo tylko do odczytu
- wiek i waga jako pola numeryczne
- drogi podania lekow: SC / IM / IV
- godzina w lekach srodzabiegowych jako pole numeryczne
- rozpoczecie i zakonczenie zabiegu jako pola numeryczne
- parametry podczas zabiegu jako pola numeryczne

Jak zaktualizowac:
1. Otworz repozytorium GitHub "anestezjologia"
2. Podmien pliki na te z tej paczki
3. Zrob Commit changes
4. Vercel sam opublikuje aktualizacje
5. Na telefonie odswiez aplikacje lub zamknij i otworz ponownie

UPRAWNIENIA PERSONELU

- Administrator aplikacji: odczyt, zapis i usuwanie kart.
- Pracownik: odczyt i zapis kart.
- Podgląd: odczyt kart.
- Oczekuje: brak dostępu do kart do czasu zatwierdzenia.

Przed wdrożeniem sprawdź aktualne konta w Supabase → Authentication → Users
oraz role w Table Editor → profiles. Skrypt zachowuje istniejące role; zweryfikuj,
czy każda z nich odpowiada rzeczywistym uprawnieniom. Sprawdź też dodatkowe
polityki RLS, jeśli były dodawane ręcznie poza skryptem w repozytorium.

Po sprawdzeniu na bazie testowej uruchom supabase_setup.sql w SQL Editor
w odpowiednim projekcie i wdróż wersję aplikacji obsługującą nowe role.
Nowy użytkownik loguje się po potwierdzeniu e-maila. Przy pierwszym logowaniu
aplikacja tworzy profil w stanie „oczekuje”. Administrator otwiera moduł Personel i wybiera rolę przy właściwym adresie
e-mail. Zmiana zapisuje się od razu w Supabase. Własną rolą może zarządzać
opiekun projektu w panelu Supabase. Zaakceptowana osoba może kliknąć
„Sprawdź ponownie” na ekranie dostępu.

ODZYSKIWANIE HASŁA I ZAPIS KART

W Supabase → Authentication → URL Configuration dodaj do Redirect URLs:
https://anestezjologia.vercel.app/?odzyskiwanie=1
Ustaw Site URL na https://anestezjologia.vercel.app, jeśli jest to adres
produkcyjny. Do testowania na innym adresie dodaj jego dokładny odpowiednik.
Sprawdź wysyłkę wiadomości do skrzynki testowej po wdrożeniu aplikacji.

Przed wdrożeniem uruchom zaktualizowany supabase_setup.sql. Zapis kart
odbywa się teraz przez funkcję save_patient_card, dlatego po uruchomieniu
skryptu odśwież aplikację po zakończeniu wdrożenia nowej wersji w Vercel.
Historia zaczyna się od pierwszego zapisu po włączeniu tej funkcji.
W przypadku konfliktu aplikacja zachowuje szkic. Starsze szkice bez numeru
wersji odczytują się, ale do zapisu trzeba użyć aktualnej karty z bazy.
