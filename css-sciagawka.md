# CSS — ściągawka

Słowa i właściwości, których używasz w `style.css`.

## Podstawowa reguła

```css
selektor {
  właściwość: wartość;
}
```

## Selektory

| Selektor | Znaczenie |
|----------|-----------|
| `button` | Wszystkie elementy `<button>` |
| `#value` | Element z `id="value"` (`#` = id) |
| `.action` | Elementy z `class="action"` (`.` = klasa) |
| `#post-list li` | `li` **wewnątrz** `#post-list` |
| `#post-list li.selected` | `li` w liście, który ma też klasę `selected` |
| `h1` | Nagłówki `<h1>` |
| `body` | Całe ciało strony |

**HTML:** `id="task-input"` (bez `#`).  
**CSS/JS:** `#task-input` (z `#` przy szukaniu).

## Kolory

| Zapis | Znaczenie |
|-------|-----------|
| `red`, `lightblue` | Nazwa koloru |
| `#0b3d2e` | Hex — zawsze z `#` |
| `#ffffff` | Biały |
| `#333333` | Ciemnoszary tekst |

```css
color: #ffffff;           /* kolor tekstu */
background-color: #0b3d2e; /* kolor tła */
```

## Tekst i czcionka

| Właściwość | Znaczenie |
|------------|-----------|
| `font-size` | Rozmiar tekstu (`14px`, `32px`) |
| `font-weight` | Grubość (`bold`, `normal`) |
| `font-family` | Rodzina czcionki (`Georgia, serif`) |
| `line-height` | Odstęp między liniami (`1.4`, `1.5`) |
| `text-decoration` | np. `line-through` (przekreślenie) |
| `cursor` | Wygląd kursora (`pointer` = ręka) |

## Odstępy i pudełko

| Właściwość | Znaczenie |
|------------|-----------|
| `margin` | Odstęp **na zewnątrz** elementu |
| `margin-top` / `margin-bottom` | Odstęp góra / dół |
| `margin: 0 auto` | Przy `max-width` — wycentrowanie w poziomie |
| `padding` | Odstęp **wewnątrz** (od ramki do treści) |
| `padding: 8px 14px` | góra/dół \| lewo/prawo |
| `max-width` | Maksymalna szerokość (nie rozciągaj się w nieskończoność) |
| `border` | Ramka (`none` = bez ramki) |
| `border-radius` | Zaokrąglenie rogów |

## Flexbox (układ)

| Właściwość | Znaczenie |
|------------|-----------|
| `display: flex` | Dzieci układają się w flexie |
| `flex-direction: row` | W rzędzie (domyślnie) |
| `flex-direction: column` | W kolumnie (jeden pod drugim) |
| `gap` | Odstęp między dziećmi |
| `align-items: center` | Wyrównanie w poprzek osi |

Flex działa na **rodzicu** i układa **jego dzieci**.  
Flex na `li` ≠ ustawianie całych wierszy listy w poziomie — układa zawartość **tego** wiersza.

## Responsywność

```css
@media (min-width: 600px) {
  .toolbar {
    flex-direction: row;
  }
}
```

| Pojęcie | Znaczenie |
|---------|-----------|
| `@media` | Reguły tylko gdy warunek o ekranie jest spełniony |
| `min-width: 600px` | Od szerokości 600px w górę |

Bez `@media` układ sam się nie przełączy przy zmianie szerokości okna.

## Kolejność i nadpisywanie

- Wiele reguł może dotyczyć jednego elementu — style się **łączą**.
- Gdy ta sama właściwość jest dwa razy, wygrywa zwykle **bardziej precyzyjny** selektor (`#reset` nad `button`) albo reguła **późniejsza** w pliku.

## Co CSS robi, a czego nie

- CSS zmienia **wygląd**.
- CSS **nie** zmienia tablic, `fetch`, ani logiki kliknięć — to JavaScript.
