/*
 * [app-animation #3372] Modul mit 1 Export(en)
 * Exporte: ensureLeadingSlash
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 3372.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
3372,
  (e, t, r) => {
    'use strict';
    function n(e) {
      return e.startsWith('/') ? e : `/${e}`;
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'ensureLeadingSlash', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  