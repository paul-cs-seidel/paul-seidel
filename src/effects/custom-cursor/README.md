# custom-cursor

Hirotos Cursor plus Paul-Seidels `.mouse`-Split-Stalker, framework-frei aus den
Vendor-Bundles rekonstruiert
und in **Engine** (`custom-cursor.js`) + **Einstellungen** (`custom-cursor.config.js`)
getrennt. Stilfläche/Maße liegen in `../../styles/ui/cursor.css`.

| Teil | Klasse | Verhalten |
| --- | --- | --- |
| mouse-stalker | `.mouse-stalker` | Folgt dem Zeiger; klappt beim Hovern von `[data-cursor-stalker-label]` zu einer Label-Pille mit Pfeil auf. |
| split-mouse | `.mouse` | Folgt `.MW[data-tt]`/`[data-cursor-split-label]`; zeigt den SplitType-Kasten aus `Paul-Seidel-Portfolio-main.zip` und feuert den `.Oi`-Hover an. |
| sticker-preview | `.sticker-cursor-preview` | Großes Vorschaubild, per Event ein-/ausgeblendet. |

## API

```js
import { mount } from './custom-cursor.js';
const cursor = mount(document.body);        // baut beide Elemente, verdrahtet GSAP + Events
cursor.destroy();                           // Listener (AbortController) + Tweens + DOM weg
```

- Nur `pointer: fine` (Touch/Stift bleiben unberührt); CSS setzt `pointer-events: none`.
- Antrieb: **GSAP** (`gsap`, Projekt-Abhängigkeit) — exakt wie im Original.

## Fernsteuerung (Events)

| Event | Wirkung |
| --- | --- |
| `signal-pole:cursor-enter` `{label, showArrow?}` | Pille mit Label erzwingen. |
| `signal-pole:cursor-leave` / `:cursor-reset` | Pille zurücksetzen. |
| `signal-pole:sticker-preview-enter` `{url}` | Vorschaubild zeigen. |
| `signal-pole:sticker-preview-leave` | Vorschaubild ausblenden. |
| `signal-pole:fractal-hover-enter` / `:fractal-hover-leave` `{target}` | Wird vom `.mouse`-Cursor fuer `.Oi`-Hosts ausgesendet. |

## Herkunft (Original)

`_raw/vendor/050096.app-bundle.js` — React-Komponenten `wu` (mouse-stalker, ab Z59465)
und `wh` (sticker-cursor-preview, ab Z59666). Jeder Wert in `custom-cursor.config.js`
trägt seine Original-Zeilennummer. Default-Label `wl = 'Open'` (Z59464).

`/Users/paulseidel/Downloads/Paul-Seidel-Portfolio-main.zip` —
`vendor/split/runtime-page-base.js` (`Hs`) und `vendor/split/main-app.js`
(`writeFn`) fuer `.mouse`, `.mouse_el`, `.Awrite-inv`, `.Ms`.
