// ── EN / DE ───────────────────────────────────────────────────────────────────
// Ein einziger delegierter Listener bedient alle [data-lang]-Buttons —
// auch die, die der Zoom-Overlay erst zur Laufzeit ins DOM hängt.
export function createLanguage() {
  let lang = 'en';
  let onChangeCb = null;

  function apply(next) {
    lang = next;
    document.documentElement.lang = next;
    for (const el of document.querySelectorAll('[data-en]')) {
      const val = el.getAttribute(`data-${next}`);
      if (val != null) el.textContent = val;
    }
    for (const btn of document.querySelectorAll('[data-lang]')) {
      btn.setAttribute('aria-pressed', btn.dataset.lang === next ? 'true' : 'false');
    }
    onChangeCb?.(next);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang]');
    if (btn) apply(btn.dataset.lang);
  });

  return {
    apply,
    get lang() { return lang; },
    onChange(cb) { onChangeCb = cb; },
  };
}
