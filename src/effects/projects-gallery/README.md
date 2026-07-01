# projects-gallery

Hirotos Endlos-Projekt-Marquee, getrennt in **Engine** (`projects-gallery.js`) +
**Einstellungen** (`projects-gallery.config.js`). Stilfläche:
`../../styles/pages/projects.css`.

Ein Track aus **3 identischen Sets** scrollt endlos: ein GSAP-Ticker schiebt den
Offset (Basis-Autoscroll `48 px/s` + Wheel-Velocity mit Reibung `0.018`, Clamp
`±2800`) und wickelt ihn modulo Set-Breite um. Zeiger über einer Karte pausiert
sanft (`speedScale`-Rampe). Bei `signal-pole:entered` fahren die Karten
gestaffelt ein (`expo.out`, `stagger 0.085`).

## API

```js
import { mount } from './projects-gallery.js';

// a) auf bestehendes Markup (.projects-marquee__track im Container):
const gallery = mount(document.querySelector('.projects-page'));

// b) oder Markup aus Daten bauen:
const gallery = mount(container, {
  projects: [{ id: 'demo', image: '/demo.png' } /* … */],
  onSelect: (index, el) => openDetail(index), // Item-Klick
});

gallery.freeze(true); // Route-Freeze (Autoscroll stoppen)
gallery.destroy();
```

Antrieb: **GSAP** (`gsap.ticker`, `gsap.quickSetter`). Listener via `AbortController`.

## Herkunft & Abweichungen

Original-App-Bundle (nicht im Repo) — Helfer `sn/si/so` (Z6327–6368), Komponente
`sl` (ab Z6369). Jeder Wert in der Config trägt seine Zeilennummer.

- **FLIP-Zoom abstrahiert:** Das Original zoomt eine Karte per GSAP-**Flip** in
  die Detail-Ansicht `.projects-zoom` (FLIP-State, Projektdaten, Route-State).
  Diese App-Maschinerie entfällt; ein Item-Klick meldet stattdessen
  `onSelect(index, element)`. Marquee-Scroll, Wrap, Inertia, Pause und
  Enter-Stagger sind 1:1.
- **Wheel-Faktor `se`** (Z6147) im Bundle nicht lokalisiert → Default `1`
  (in der Config justierbar).
