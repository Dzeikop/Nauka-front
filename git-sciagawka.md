# Git — ściągawka

Najważniejsze komendy, których używasz w projekcie.

## Po co Git?

Git trzyma **historię wersji** projektu.  
Commit = zapisany stan plików z krótkim opisem.  
Możesz wracać, porównywać i wrzucać kod na GitHub.

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
| branch | Gałąź historii (osobny tor commitów) |
| `master` / `main` | Główna gałąź projektu |
| hash | Krótki identyfikator commita (np. `0aae115`) |
| remote | Repo online (np. na GitHubie) |
| `origin` | Domyślna nazwa remote |
| `push` | Wyślij lokalne commity na remote |
| `pull` | Pobierz zmiany z remote do siebie |

## Codzienny cykl lokalny

```bash
git status          # co się zmieniło?
git diff            # jaka dokładnie różnica? (przed add)
git add style.css   # wrzuć plik na stage (albo: git add .)
git commit -m "Opis zmian"
git log -5 --oneline
```

### `git status`
Pokazuje: które pliki zmienione, które na stage, czy drzewo czyste.

### `git diff`
Porównuje dysk z ostatnim commitem.  
`-` było, `+` jest teraz.  
Działa najlepiej **przed** `git add`.

### `git add`
- `git add plik.css` — jeden plik  
- `git add .` — wszystko w folderze  

### `git commit -m "..."`
Zapisuje to, co jest na stage.  
Wiadomość: krótko, po co ta zmiana.

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
Najpierw `git diff` / `status`, potem restore.

## Gałęzie (branch)

Gałąź = osobny tor na eksperyment, bez psucia `master`.

```bash
git branch                      # lista gałęzi (* = aktualna)
git branch eksperyment-css      # utwórz gałąź
git checkout eksperyment-css    # przełącz się na nią
# ... praca, add, commit ...
git checkout master             # wróć na główną
```

### Wciągnąć zmiany do master (zostawiasz eksperyment w historii głównej)

```bash
git checkout master
git merge eksperyment-css
```

### Wyrzucić gałąź bez merge

```bash
git checkout master
git branch -d nazwa    # bezpiecznie, jeśli już zmergowana
git branch -D nazwa    # na siłę (gdy nie było merge)
```

`-D` użyliśmy przy wyrzucaniu `eksperyment-css` z czerwonym nagłówkiem.

## GitHub (remote)

Twoje repo: `https://github.com/Dzeikop/Nauka-front`

```bash
git remote add origin https://github.com/Dzeikop/Nauka-front.git
git remote -v
git push -u origin master    # pierwszy push (+ zapamiętaj upstream)
git push                     # kolejne pushe (gdy upstream już jest)
```

### Logowanie

GitHub **nie przyjmuje** zwykłego hasła przy `git push`.  
Użyj: okna Git Credential Manager / logowania w przeglądarce, albo **Personal Access Token** jako hasła.

### Po lokalnym commicie — aktualizacja GitHuba

```bash
git add .
git commit -m "Opis"
git push
```

## Czego jeszcze warto się nauczyć

| Temat | Po co |
|-------|-------|
| `git pull` | Pobierz zmiany z GitHuba (np. z innego komputera) |
| `.gitignore` | Pliki, których Git ma nie śledzić (np. tajemnice, `node_modules`) |
| Pull Request | Propozycja merge na GitHubie (praca zespołowa) |

## Mini-ściąga kolejności

1. Pracujesz w plikach.  
2. `git status` / `git diff` — sprawdź.  
3. `git add ...` — przygotuj.  
4. `git commit -m "..."` — zapisz lokalnie.  
5. `git push` — wyślij na GitHub.  
6. `git log --oneline` — potwierdź historię.
