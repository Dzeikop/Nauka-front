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

## git pull

`git pull` = pobierz nowe commity z GitHuba i wlej je do swojej lokalnej gałęzi.

Kiedy: pracowałeś na innym PC, ktoś wypchnął zmiany, albo sam edytowałeś coś na GitHubie w przeglądarce.

```bash
git pull
```

Często to skrót od: `git fetch` (pobierz) + `git merge` (wlej do bieżącej gałęzi).

Jeśli lokalnie i na GitHubie jest to samo, zobaczysz np. *Already up to date*.

**Kolejność przy pracy na dwóch miejscach:** przed nową pracą warto `git pull`, potem kodujesz, potem `commit` + `push`.

## .gitignore

Plik `.gitignore` w rootcie projektu mówi Gitowi: **tych plików / folderów nie śledź**.

Po co:
- nie wrzucać haseł (`.env`),
- nie wrzucać ogromnego `node_modules/`,
- nie śledzić śmieci systemu (`Thumbs.db`, `.DS_Store`).

Przykład linii w `.gitignore`:

```
node_modules/
.env
Thumbs.db
```

Uwaga: jeśli plik **już był zcommitowany**, samo dopisanie do `.gitignore` go nie „wyrzuci” z historii śledzenia — trzeba by osobno `git rm --cached`. Na nowe pliki działa od razu.

Po utworzeniu `.gitignore`: `git add .gitignore` → `commit` → `push`.

## Na później

| Temat | Po co |
|-------|-------|
| Pull Request | Propozycja merge na GitHubie (praca zespołowa) |
| `git fetch` osobno | Zobacz remote bez od razu merge |

## Mini-ściąga kolejności

1. (Opcjonalnie) `git pull` — zsynchronizuj z GitHubem.  
2. Pracujesz w plikach.  
3. `git status` / `git diff` — sprawdź.  
4. `git add ...` — przygotuj (`.gitignore` pilnuje, czego nie brać).  
5. `git commit -m "..."` — zapisz lokalnie.  
6. `git push` — wyślij na GitHub.  
7. `git log --oneline` — potwierdź historię.
