# preloader

Hirotos Lade-Overlay (Scramble-Text-Loop + drainende Wellen-SVG), getrennt in
**Engine** (`preloader.js`) + **Einstellungen** (`preloader.config.js`).
Stilfläche: `../../styles/ui/preloader.css`.

## Ablauf

1. **Loop** — scrambelt die Nachrichten (`Loading… / Almost there… / Just a moment…`).
2. **Abschied** — nach `3.5 s` (oder `finish()`): „Thanks for waiting - all set.".
3. **Drain** — die Wellen-SVG läuft von voll auf leer; unter Schwelle `bottomY ≤ 26`
   gilt die Seite als betreten → Klassen `is-page-ready`/`is-entered` + Event
   `signal-pole:entered`. Harter Abbruch nach `6.2 s`.

## API

```js
import { mount } from './preloader.js';
const pre = mount(document.body);
pre.finish();   // Abschied vorzeitig auslösen (= Hero-Readiness im Original)
pre.destroy();  // Timelines/delayedCalls killen + DOM entfernen
```

Antrieb: **GSAP** + **ScrambleTextPlugin** (`gsap/ScrambleTextPlugin`; im Original
als Plugin `AG` gebündelt) + **CustomEase** (für den Wellen-Drain).

## Herkunft & Abweichungen

`_raw/vendor/050096.app-bundle.js` — Konstanten `AH/Az/AV/Aj/AW` (Z51021–51025),
Komponente `AY` (ab Z51027). Jeder Wert in der Config trägt seine Zeilennummer.

- **Timer statt Hero-Readiness:** das Original startet den Abschied, sobald die
  3D-Hero bereit ist (`isTransitionReady`). Da die Hero entfällt, läuft der
  Preloader auf Timer; `finish()` bildet die Readiness nach.
- **Eases `s1`/`s3`** des Drains sind die modulweiten App-CustomEases
  (definiert Z7513/7515, im selben Modul wie der Preloader) — exakt übernommen.
