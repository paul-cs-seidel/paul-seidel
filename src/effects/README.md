# effects/ — Hirotos Effekte, dekomponiert

Zwei Schichten:

## 1. Lesbare Effekt-Module (eine Mappe = ein Effekt)

Jeder Effekt nach Sinn benannt und getrennt in **Code** (`<name>.js`, lesbare
Engine) + **Einstellungen** (`<name>.config.js`, jede Zahl/Easing mit
Original-Zeilennummer). Verhaltenstreu zum Original, framework-frei (Antrieb:
**GSAP**, wie im Original).

| Mappe | Effekt | GSAP-Plugins |
| --- | --- | --- |
| `custom-cursor/` | mouse-stalker (Label-Pille + Pfeil) + sticker-preview | — |
| `preloader/` | Scramble-Text-Loop + drainende Wellen-SVG | ScrambleText, CustomEase |
| `page-transition/` | Clip-Path-Wellen-Übergang zwischen Seiten | CustomEase |
| `text-reveal/` | Headings → Zeilen, Stagger-Fade-Up bei „entered" | SplitText |
| `projects-gallery/` | Endlos-Marquee (3 Sets) mit Wheel-Inertia + Pause | ticker/quickSetter |
| `fractalEffect/` | `.Oi` WebGL-Bildhover aus Paul-Seidel-Portfolio-main.zip | — |

Details + Herkunft/Abweichungen je Effekt in dessen `README.md`.

## 2. `_raw/` — byte-genaue Grundwahrheit

Die Original-Chunks (`site/_next/static/chunks/*.js`) **verlustfrei** in 194
Einzeldateien zerlegt (ein Turbopack-Modul = eine Datei), reassemblierbar zum
**byte-identischen** Original. Erzeugt + selbst verifiziert von
`tools/split-js.mjs`:

```bash
node reference/hiroto/tools/split-js.mjs   # → „✅ VERLUSTFREI: byte-identisch"
```

`_raw/INDEX.md` kartiert Effekt-Gruppen auf Modul-Zeilen. Das gesamte App-/
Effekt-Geflecht liegt scope-gehoisted in `_raw/vendor/050096.app-bundle.js` —
daraus sind die lesbaren Module oben rekonstruiert (jede Config-Zahl referenziert
ihre Zeile dort).

> Gemeinsame App-Konvention: Effekte kommunizieren über `signal-pole:*`-Events
> und CustomEases der `signal-pole-transition-*`-Familie (s. page-transition).
