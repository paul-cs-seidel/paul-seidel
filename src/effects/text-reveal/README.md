# text-reveal

Hirotos Text-Einblendung, getrennt in **Engine** (`text-reveal.js`) +
**Einstellungen** (`text-reveal.config.js`). Stilfläche:
`../../styles/ui/split-text.css`.

Headings werden per **GSAP-SplitText** in Zeilen zerlegt (`.split-heading__line`);
alle Ziele starten ausgeblendet und fahren beim Ereignis `signal-pole:entered`
gestaffelt nach oben ein (`y 16→0`, `autoAlpha 0→1`, `duration 1.02`,
`power2.out`, `stagger 0.075`).

## API

```js
import { mount } from './text-reveal.js';
const reveal = mount(document.querySelector('.experience-page')); // Container
reveal.destroy();
```

- Auslöser: `signal-pole:entered` (oder sofort, wenn `<html>` schon `is-entered`).
- Nach Abschluss: `clearProps` + SplitText-`revert()` (Markup wird sauber zurückgesetzt).
- Antrieb: **GSAP** + **SplitText** (`gsap/SplitText`).

## Herkunft

`_raw/vendor/050096.app-bundle.js` — Hook `sR` (ab Z6940). Selektoren (Z6945/6948),
SplitText-Optionen (Z6970), Reveal-Tween (Z7001) — jeder Wert mit Zeilennummer in
der Config. Headings → Zeilen, übrige Ziele als Ganzes (1:1 zum Original).
