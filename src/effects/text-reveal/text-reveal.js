/*
 * text-reveal — Hirotos Text-Einblendung, framework-frei nachgebaut.
 *
 * Headings innerhalb eines Containers werden per GSAP-SplitText in Zeilen
 * zerlegt (`.split-heading__line`), alle Ziele starten ausgeblendet (y:16) und
 * fahren beim Ereignis `signal-pole:entered` gestaffelt nach oben ein. Ist die
 * Seite schon „betreten" (`is-entered`), läuft der Reveal sofort.
 *
 * Original: Hook `sR` (_raw/vendor/050096.app-bundle.js ab Z6940), Antrieb GSAP
 * + SplitText (im Original `sB`/`sD`, v3.15.0). Werte: ./text-reveal.config.js.
 */
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

import {
  DEFAULT_TEXT_REVEAL_OPTIONS,
  TEXT_REVEAL_SELECTORS,
  TEXT_REVEAL_SPLIT,
  TEXT_REVEAL_TRIGGER,
} from './text-reveal.config.js';

gsap.registerPlugin(SplitText);

const uniqueElements = (list) => [...new Set(list)];

/**
 * Text-Reveal auf einen Container anwenden. Liefert `{ destroy() }`.
 * `options`: { delay, from, to, selectors }.
 */
export function mount(container, options = {}) {
  if (!container) return { destroy() {} };
  const cfg = { ...DEFAULT_TEXT_REVEAL_OPTIONS, ...options };
  const sel = { ...TEXT_REVEAL_SELECTORS, ...(options.selectors || {}) };
  const doc = container.ownerDocument;
  const win = doc.defaultView ?? globalThis;

  const headings = uniqueElements(container.querySelectorAll(sel.heading));
  const targets = uniqueElements(container.querySelectorAll(`${sel.body},${sel.heading}`));
  if (targets.length === 0) return { destroy() {} };

  // Headings in Zeilen splitten; Map heading → seine Zeilen.
  const split = headings.length > 0 ? new SplitText(headings, { ...TEXT_REVEAL_SPLIT }) : null;
  const lines = (split?.lines ?? []).filter((node) => node instanceof win.HTMLElement);
  const headingLines = new Map(
    headings.map((heading) => {
      const own = lines.filter((line) => heading.contains(line));
      return [heading, own.length > 0 ? own : [heading]];
    }),
  );
  const headingSet = new Set(headings);

  // Animationsziele: Headings → ihre Zeilen, sonst das Element selbst.
  const items = targets.flatMap((el) => (headingSet.has(el) ? (headingLines.get(el) ?? [el]) : [el]));
  gsap.set(items, { ...cfg.from, force3D: true });

  let timeline = null;
  let raf = 0;
  let destroyed = false;
  const controller = new AbortController();

  const reveal = () => {
    if (destroyed) return;
    timeline?.kill();
    timeline = gsap.timeline({
      delay: cfg.delay,
      defaults: { overwrite: true },
      onComplete: () => {
        raf = win.requestAnimationFrame(() => {
          gsap.set(items, { clearProps: 'opacity,transform,visibility,y' });
          split?.revert();
        });
        timeline = null;
      },
    });
    timeline.to(items, { ...cfg.to });
  };

  // autoplay=false: Ziele bleiben verborgen, bis `reveal()` manuell läuft
  // (z. B. erst NACH einem Seitenübergang, damit der Effekt sichtbar ist).
  if (options.autoplay !== false) {
    if (doc.documentElement.classList.contains(TEXT_REVEAL_TRIGGER.enteredClass)) reveal();
    else win.addEventListener(TEXT_REVEAL_TRIGGER.event, reveal, { once: true, signal: controller.signal });
  }

  return {
    reveal,
    destroy() {
      destroyed = true;
      controller.abort();
      win.cancelAnimationFrame(raf);
      timeline?.kill();
      gsap.killTweensOf(items);
      gsap.set(items, { clearProps: 'opacity,transform,visibility,y' });
      split?.revert();
    },
  };
}
