# JavaScript — ściągawka

Krótki opis słów i wzorców, których używasz w projekcie.

## Zmienne

| Słowo | Znaczenie |
|--------|-----------|
| `const` | Tworzy zmienną, której **nie przypiszesz ponownie** innej wartości (np. element DOM). Obiekt/tablica wewnątrz nadal może się zmieniać. |
| `let` | Tworzy zmienną, którą **możesz później zmienić** (np. `count`, `tasks`, `posts`). |
| `=` | Przypisanie: lewa strona dostaje wartość z prawej. |

```javascript
const listElement = document.querySelector("#post-list");
let posts = [];
posts = data; // OK przy let
```

## Typy (w skrócie)

| Pojęcie | Przykład |
|---------|----------|
| Liczba | `0`, `10`, `posts[i].id` |
| Napis (string) | `"Ładowanie..."`, `'hello'` |
| Boolean | `true` / `false` (np. `done`, `response.ok`) |
| Tablica | `[...]` — lista elementów, indeks od `0` |
| Obiekt | `{ text: "...", done: false }` — paczka pól |
| `null` | „nic” (np. `localStorage.getItem` gdy brak zapisu) |
| `undefined` | brak wartości (np. indeks poza tablicą) |

## Tablice

| Słowo / wzorzec | Znaczenie |
|-----------------|-----------|
| `tasks[0]` | Element o indeksie 0 (pierwszy) |
| `tasks.length` | Ile elementów |
| `tasks.push(x)` | Dodaj na koniec |
| `tasks.splice(i, 1)` | Usuń 1 element od indeksu `i` |
| `tasks = []` | Wyczyść całą listę |
| `data.slice(0, 10)` | Nowa tablica z pierwszych 10 elementów |
| `arr.join(", ")` | Sklej elementy w jeden napis |

## Obiekty

```javascript
const task = { text: "Kup chleb", done: false };
task.text;           // odczyt pola
task.done = true;    // zmiana pola
task.done = !task.done; // odwrotność true/false
```

## Warunki

| Słowo | Znaczenie |
|--------|-----------|
| `if (...)` | Wykonaj blok tylko gdy warunek prawdziwy |
| `else` | Gdy `if` fałszywy (opcjonalne) |
| `===` | Czy równe (ściśle) |
| `!==` | Czy różne |
| `>` `<` | Większe / mniejsze |
| `!` | Negacja (`!true` → `false`) |
| `&&` | I (oba prawdziwe) |
| `\|\|` | Lub (choć jedno prawdziwe) |

```javascript
if (newTask !== "") {
  tasks.push({ text: newTask, done: false });
}
```

## Pętle

| Słowo | Znaczenie |
|--------|-----------|
| `for` | Powtarzaj z licznikiem `i` od 0 do `length - 1` |
| `i` / `j` / `k` | Indeks aktualnego elementu |

```javascript
for (let i = 0; i < posts.length; i = i + 1) {
  // posts[i]
}
```

`forEach` — też przechodzi po tablicy; `for` wygodniejszy, gdy potrzebujesz indeksu.

## Funkcje

| Pojęcie | Znaczenie |
|---------|-----------|
| `function name() { }` | Definicja (przepis) — sam się nie uruchamia |
| `name()` | Wywołanie — uruchamia przepis |
| argument (`postId`) | Wartość wkładana przy wywołaniu, używana w środku |
| `return` | Zwróć wynik i zakończ funkcję (później częściej) |
| `async function` | Funkcja, w której wolno użyć `await` |
| `await` | Poczekaj na wynik (np. sieć) |

```javascript
async function loadComments(postId) {
  const response = await fetch(".../posts/" + postId + "/comments");
}
loadComments(posts[i].id); // wywołanie z argumentem
```

## DOM (strona)

| Słowo | Znaczenie |
|--------|-----------|
| `document` | Cały dokument HTML w JS |
| `querySelector("#id")` | Znajdź **pierwszy** pasujący element |
| `querySelectorAll(".klasa")` | Znajdź **wszystkie** pasujące |
| `createElement("li")` | Stwórz nowy element |
| `textContent` | Tekst wewnątrz elementu (odczyt/zapis) |
| `appendChild(el)` | Dołącz element jako dziecko |
| `classList.add("x")` | Dodaj klasę CSS |
| `classList.remove("x")` | Usuń klasę |
| `value` | Tekst z `<input>` (`inputElement.value`) |

## Zdarzenia

| Słowo | Znaczenie |
|--------|-----------|
| `addEventListener("click", fn)` | Po kliknięciu uruchom funkcję |
| `"click"` | Nazwa zdarzenia |

```javascript
button.addEventListener("click", function () {
  // co zrobić po kliknięciu
});
```

## localStorage

| Słowo | Znaczenie |
|--------|-----------|
| `localStorage` | Pamięć przeglądarki (zostaje po odświeżeniu) |
| `setItem(klucz, napis)` | Zapisz |
| `getItem(klucz)` | Odczytaj (lub `null`) |
| `JSON.stringify(x)` | Obiekt/tablica → napis |
| `JSON.parse(napis)` | Napis → obiekt/tablica |

## fetch / API

| Słowo | Znaczenie |
|--------|-----------|
| `fetch(url)` | Pobierz dane z adresu (endpoint) |
| endpoint | Konkretny URL w API (`/posts`, `/posts/5/comments`) |
| `response.ok` | Czy odpowiedź sukcesem |
| `response.json()` | Odpowiedź → dane JS |
| `try { } catch (error) { }` | Spróbuj; gdy błąd → `catch` |
| `throw new Error("...")` | Rzuć błąd (łapie go `catch`) |
| `console.log(x)` | Pokaż w konsoli F12 (debug) |

## Rytm aplikacji (zapamiętaj)

1. Zmień **dane** (`posts`, `tasks`, `count`).
2. Odśwież **widok** (`showPosts`, `showTasks`, `showCount`).
3. Przy API: najpierw `fetch`, potem dane, potem widok.
