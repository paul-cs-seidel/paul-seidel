# fractalEffect

Nativer WebGL-Port des `.Oi`-Bild-Hovers aus dem ursprünglichen Paul-Seidel-
Portfolio. Getrennt in **Engine** (`fractal-effect.js`) + **Einstellungen**
(`fractal-effect.config.js`).

Herkunft (Original-Bundle, nicht im Repo): Klasse `Xt` für den Bild-Hover,
Shader `th` (Fragment) / `eh` (Vertex). Die Uniform-Werte in der Config tragen
ihre Original-Herkunft als Notiz.

Dieses Modul nutzt keinen Vendor-Runtime-Bootstrap. Es mountet pro `.Oi`-Host ein
kleines natives WebGL-Canvas über dem vorhandenen Bild, übernimmt die
Original-Uniforms (`uStart`, `uStart1`, `uMouse`, `uCover`, `uTextureSize`) und
rendert nur bei Hover/Resize. Schlägt die WebGL-Initialisierung fehl, wird das
Canvas entfernt und das Bild bleibt unverändert sichtbar (graceful fallback).

## API

```js
import { mount } from './fractal-effect.js';
const fx = mount(container, { lazy: true }); // lazy: Kontext erst bei Interaktion
fx.destroy(); // Ticker/Listener/WebGL-Kontext freigeben
```

- `lazy: true` — erzeugt den WebGL-Kontext erst beim ersten Hover/Touch eines
  `.Oi`-Hosts und begrenzt die gleichzeitig aktiven Kontexte (`maxInstances`).
- Antrieb: **GSAP** (`gsap.ticker`) für die gedämpfte Maus-Interpolation.
