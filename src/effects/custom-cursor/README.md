# custom-cursor

Der `.mouse`-SplitType-Cursor, getrennt in **Engine** (`custom-cursor.js`) +
**Einstellungen** (`custom-cursor.config.js`). Stilfläche/Maße liegen in
`../../styles/ui/cursor.css`.

> Hinweis: Die ursprüngliche Stalker-Pille und die Sticker-Preview wurden
> entfernt — übrig ist nur der `.mouse`-Cursor unten.

| Teil        | Klasse   | Verhalten                                                                                                                                                                                                                          |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| split-mouse | `.mouse` | Folgt dem Zeiger; öffnet beim Hovern eines Triggers (`[data-cursor-split-label]`, `[data-cursor-arrow-only]`, `.MW[data-tt]`, `a[target="_blank"]`) einen animierten SplitType-Label-Kasten und feuert den `.Oi`-Fractal-Hover an. |

## API

```js
import { mount } from './custom-cursor.js';
const cursor = mount(document.body); // baut .mouse, verdrahtet GSAP + Events
cursor.destroy(); // Listener (AbortController) + Tweens + DOM weg
```

- Nur `pointer: fine` (Touch/Stift bleiben unberührt); CSS setzt `pointer-events: none`.
- Antrieb: **GSAP** (`gsap`, Projekt-Abhängigkeit) + **SplitType** (`split-type`).
- Default-Label, wenn kein Attribut/aria/Text greift: `Open`.

## Events

| Event                                          | Richtung  | Wirkung                                                                  |
| ---------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| `signal-pole:cursor-reset`                     | eingehend | Label-Kasten zurücksetzen/ausblenden.                                    |
| `signal-pole:fractal-hover-enter` `{ target }` | ausgehend | Vom `.mouse`-Cursor für `.Oi`-Hosts ausgesendet (steuert fractalEffect). |
| `signal-pole:fractal-hover-leave` `{ target }` | ausgehend | Gegenstück zum Enter.                                                    |

## Herkunft

Rekonstruiert aus dem ursprünglichen Paul-Seidel-Portfolio-Bundle (nicht im
Repo): `.mouse`/`.mouse_el`/`.Awrite`-Markup und die Schreib-Animation
(`writeFn`). Jeder Wert in `custom-cursor.config.js` ist dort verortet.
