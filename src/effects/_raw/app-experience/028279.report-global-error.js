/*
 * [app-experience #28279] Modul mit 1 Export(en)
 * Exporte: reportGlobalError
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 28279.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
28279,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'reportGlobalError', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r =
      'function' == typeof reportError
        ? reportError
        : (e) => {
            globalThis.console.error(e);
          };
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  