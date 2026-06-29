// ── EN / DE ───────────────────────────────────────────────────────────────────
// Ein einziger delegierter Listener bedient alle [data-lang]-Buttons —
// auch die, die der Zoom-Overlay erst zur Laufzeit ins DOM hängt.
// Die zuletzt gewählte Sprache wird in localStorage gemerkt und beim Start
// wiederhergestellt (Fallback: 'en').
const STORAGE_KEY = 'ps-lang';
const SUPPORTED = new Set(['en', 'de']);

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.has(value) ? value : 'en';
  } catch {
    return 'en'; // Privatmodus / blockierter Storage
  }
}

function writeStored(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* Storage nicht verfügbar — Sprache bleibt nur für diese Sitzung gesetzt. */
  }
}

export function createLanguage() {
  let lang = readStored();
  let onChangeCb = null;

  function apply(next) {
    if (!SUPPORTED.has(next)) return;
    lang = next;
    writeStored(next);
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

  // Gespeicherte Sprache initial auf das bereits vorhandene DOM anwenden.
  apply(lang);

  return {
    apply,
    get lang() {
      return lang;
    },
    onChange(cb) {
      onChangeCb = cb;
    },
  };
}
