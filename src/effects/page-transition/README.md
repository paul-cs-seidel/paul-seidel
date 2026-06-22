# page-transition

Hirotos Clip-Path-Seitenübergang, getrennt in **Engine** (`page-transition.js`)
+ **Einstellungen** (`page-transition.config.js`). Stilfläche:
`../../styles/ui/page-transition.css`.

Eine vollflächige Fläche wird eingeblendet; ihr SVG-`clipPath` (Wellen-Pfad)
morpht **covered → mid → revealed** und wischt die einlaufende Seite von unten
auf. Parallel dimmt die Helligkeit kurz auf `0.32`.

## API

```js
import { mount } from './page-transition.js';
const pt = mount(document.body);
await pt.transition({
  onReveal: () => swapPageDom(),   // feuert am Start (Swap-Punkt)
  onComplete: () => {},            // Ende
  snapshot: outgoingPageNode,      // optional: Schnappschuss der alten Seite
});
pt.destroy();
```

Antrieb: **GSAP** + **CustomEase** (`gsap/CustomEase`). Eases = die Signatur-
Kurven der App (`signal-pole-transition-*`). Dauer gesamt `1.95 s`.

## Herkunft & Abweichungen

`_raw/vendor/050096.app-bundle.js` — Eases/Geometrie `s1–s9` (Z7513–7520),
Komponente `s7` (ab Z7521), Geometrie-Helfer `ot/oi/on/or` (Z7783–7807),
Timeline (Z7698). Jeder Wert in der Config trägt seine Zeilennummer.

- **Snapshot abstrahiert:** Das Original klont die alte Seite, rastert ihre
  Bilder auf Canvas und schnappschießt die WebGL-Hero in
  `.page-transition__source-snapshot`. Diese React/App-Maschinerie entfällt;
  `transition({ snapshot })` nimmt optional ein fertiges Element. Der
  Clip-Morph (Geometrie, Eases, Dauern, Helligkeit) ist 1:1.
