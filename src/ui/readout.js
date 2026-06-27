// ── Hover-Readout (Kategorie / Rolle + Titel des gehoverten Projekts) ─────────
// Festes Overlay unten links; wird von der Gallery beim Hover gespeist.
import { byId } from '../data/projects.js';

export function createReadout(getLang) {
  const el = document.createElement('div');
  el.className = 'project-readout';
  el.innerHTML = '<span></span><strong></strong>';
  document.body.append(el);

  const labelEl = el.querySelector('span');
  const titleEl = el.querySelector('strong');
  let hoveredId = null;

  function show(id) {
    const p = byId.get(id);
    if (!p) return hide();
    hoveredId = id;
    const lang = getLang();
    labelEl.textContent = `${p.category[lang]} / ${p.role[lang]}`.toUpperCase();
    titleEl.textContent = p.title;
    el.classList.add('is-visible');
  }

  function hide() {
    hoveredId = null;
    el.classList.remove('is-visible');
  }

  // Bei Sprachwechsel den aktuell gehoverten Eintrag neu befüllen.
  function refresh() {
    if (hoveredId) show(hoveredId);
  }

  return { show, hide, refresh };
}
