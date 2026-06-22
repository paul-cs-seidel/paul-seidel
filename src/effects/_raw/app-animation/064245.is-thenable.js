/*
 * [app-animation #64245] Modul mit 1 Export(en)
 * Exporte: isThenable
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 64245.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
64245,
  (e, t, r) => {
    'use strict';
    function n(e) {
      return null !== e && 'object' == typeof e && 'then' in e && 'function' == typeof e.then;
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isThenable', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  