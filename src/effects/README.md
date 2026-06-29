# effects/ — Effekte, dekomponiert

Jeder Effekt ist eine eigene Mappe, nach Sinn benannt und getrennt in **Code**
(`<name>.js`, lesbare Engine) + **Einstellungen** (`<name>.config.js`, jede
Zahl/Easing mit ihrer Herkunft als Notiz). Verhaltenstreu zum ursprünglichen
Paul-Seidel-/Hiroto-Portfolio, aber framework-frei — Antrieb ist durchgängig
**GSAP**. Jeder Effekt exportiert eine `mount(...)`-Funktion, die einen Controller
mit `destroy()` liefert (Listener via `AbortController`).

| Mappe               | Effekt                                              | GSAP-Plugins             |
| ------------------- | --------------------------------------------------- | ------------------------ |
| `custom-cursor/`    | `.mouse`-SplitType-Cursor (animierter Label-Kasten) | — (SplitType)            |
| `preloader/`        | Scramble-Text-Loop + drainende Wellen-SVG           | ScrambleText, CustomEase |
| `page-transition/`  | Clip-Path-Wellen-Übergang zwischen Seiten           | CustomEase               |
| `text-reveal/`      | Headings → Zeilen, Stagger-Fade-Up bei „entered"    | SplitText                |
| `projects-gallery/` | Endlos-Marquee (3 Sets) mit Wheel-Inertia + Pause   | ticker/quickSetter       |
| `fractal-effect/`   | `.Oi` natives WebGL-Bildhover                       | — (raw WebGL)            |

Details + Herkunft/Abweichungen je Effekt in dessen `README.md`. Die in den
Configs/READMEs genannten Zeilennummern beziehen sich auf das **ursprüngliche
App-Bundle, das nicht Teil dieses Repos ist** — sie dokumentieren nur die
Herkunft der übernommenen Werte.

> Gemeinsame Konvention: Effekte kommunizieren über `signal-pole:*`-Events
> (z. B. `signal-pole:entered`, `signal-pole:fractal-hover-enter`) und die
> CustomEases der `signal-pole-transition-*`-Familie (s. page-transition).
