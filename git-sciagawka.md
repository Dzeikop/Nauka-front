# Git — ściągawka

Najważniejsze komendy, których używasz lokalnie.

## Po co Git?

Git trzyma **historię wersji** projektu.  
Commit = zapisany stan plików z krótkim opisem.  
Możesz wracać, porównywać i (później) wrzucać kod na GitHub.

## Pierwsze uruchomienie (raz na komputer)

```bash
git --version
```

Jeśli trzeba ustawić autora commitów (Git sam nie zawsze pyta — czasem ma już zapisane):

```bash
git config --global user.name "Twoje Imię"
git config --global user.email "twoj@email.pl"
```

## Słówka

| Słowo | Znaczenie |
|--------|-----------|
| repozytorium (repo) | Projekt śledzony przez Git (folder z `.git`) |
| `git init` | Załóż repo w bieżącym folderze |
| working tree | Pliki, które edytujesz na dysku |
| stage (poczekalnia) | Pliki przygotowane do commita (`git add`) |
| commit | Trwały zapis wersji w historii |
| untracked | Plik nowy — Git go widzi, ale jeszcze nie śledzi |
| modified | Plik śledzony, który się zmienił od ostatniego commita |
| clean | Brak zmian do zapisu (*nothing to commit*) |
| branch | Gałąź historii (u Ciebie startowo `master`) |
| hash | Krótki identyfikator commita (np. `0aae115`) |

## Codzienny cykl

```bash
git status          # co się zmieniło?
git diff            # jaka dokładnie różnica? (przed add)
git add styl.css    # wrzuć plik na stage (albo: git add .)
git commit -m "Opis zmian"
git log -5 --oneline
```

### `git status`
Pokazuje: które pliki zmienione, które na stage, czy drzewo czyste.

### `git diff`
Porównuje dysk z ostatnim commitem.  
`-` było, `+` jest teraz.  
Działa najlepiej **przed** `git add` (potem różnica „zniknie” ze zwykłego `diff` — jest już na stage).

### `git add`
- `git add plik.css` — jeden plik  
- `git add .` — wszystko w folderze  

### `git commit -m "..."`
Zapisuje to, co jest na stage.  
Wiadomość: krótko, po co ta zmiana (np. `"Większy padding przycisku Odśwież"`).

### `git log`
Historia commitów.

| Flaga | Znaczenie |
|-------|-----------|
| `-2` / `-5` | Tylko ostatnie 2 / 5 |
| `--oneline` | Jedna linia na commit (hash + opis) |

## Cofanie (ostrożnie)

| Komenda | Co robi |
|---------|---------|
| `git restore plik.css` | Odrzuć **niezcommitowane** zmiany w pliku (wraca do ostatniego commita) |

**Nie** kasuje commitów.  
**Nie** używaj na ślepo, jeśli chcesz zachować swoją pracę — najpierw `git diff` / `status`.

## Czego jeszcze nie robiliśmy (na później)

| Temat | Po co |
|-------|-------|
| `git push` | Wyślij commity na GitHub |
| `git pull` | Pobierz zmiany z remote |
| `remote` / `origin` | Adres repo online |
| `branch` / `checkout` | Osobna gałąź na eksperyment |
| `.gitignore` | Pliki, których Git ma nie śledzić |

## Mini-ściąga kolejności

1. Pracujesz w plikach.  
2. `git status` / `git diff` — sprawdź.  
3. `git add ...` — przygotuj.  
4. `git commit -m "..."` — zapisz.  
5. `git log --oneline` — potwierdź historię.
