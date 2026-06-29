# paul-seidel.com

Persönliches Portfolio von Paul Seidel — eine animierte Single-Page-Experience,
framework-frei in **Vanilla JS** gebaut, mit **Vite** als Build-Tool und **GSAP**
für sämtliche Animationen.

## Schnellstart

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal testen
```

### Code-Qualität

```bash
npm run lint          # ESLint
npm run format        # Prettier (schreibt)
npm run format:check  # Prettier (nur prüfen)
```

## Struktur

```
index.html              Markup aller vier Panels (Home / Projects / About / Contact)
public/                 statische Assets (1:1 ins Build kopiert): Bilder, Icon, Manifest
src/
  main.js               Bootstrap: mountet Effekte, verdrahtet Sprache, Zoom, Router
  core/
    router.js           Panel-Navigation mit Clip-Path-Übergang
    language.js         EN/DE-Umschaltung (persistiert in localStorage)
    zoom.js             Projekt-Detail-Overlay (GSAP Flip + Fractal-Hover)
  data/
    projects.js         Projektdaten (Titel, Kategorie, Rolle, Summary EN/DE, Link, Bild)
  ui/
    readout.js          Hover-Readout unten links
  effects/              je Effekt eine Mappe (siehe effects/README.md)
styles/                 modulares CSS, gebündelt über styles/main.css (@import-Kaskade)
```

## Architektur in Kürze

- **Persistente Experience, vier Panels.** Alle Seiten liegen in `index.html`; der
  Router (`src/core/router.js`) blendet Panels per Clip-Path-Wellen-Übergang um,
  statt Seiten neu zu laden.
- **Effekt-Registry über einen `mount()`-Vertrag.** Jeder Effekt unter
  `src/effects/` exportiert `mount(root, options)` und liefert einen Controller mit
  `destroy()` (Cleanup via `AbortController`). Siehe
  [`src/effects/README.md`](src/effects/README.md).
- **Lose Kopplung über `signal-pole:*`-Events.** Preloader, Cursor und Effekte
  kommunizieren über Custom-Events statt über direkte Referenzen.
- **Antrieb GSAP.** Genutzte Plugins (Flip, SplitText, ScrambleText, CustomEase)
  sind ab GSAP 3.13 frei verfügbar.

## Tech-Stack

- [Vite](https://vitejs.dev/) — Dev-Server & Build
- [GSAP](https://gsap.com/) — Animationen
- [SplitType](https://github.com/lukePeavey/SplitType) — Text-Splitting für den Cursor
- ESLint + Prettier — Linting & Formatierung
