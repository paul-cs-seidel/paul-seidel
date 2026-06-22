/*
 * [app-react-dom #15507] Modul mit 1 Export(en)
 * Exporte: unstable_rethrow
 * Requires: #32061, #65713
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 15507.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
15507,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'unstable_rethrow', {
        enumerable: !0,
        get: function () {
          return function e(t) {
            if ((0, a.isNextRouterError)(t) || (0, n.isBailoutToCSRError)(t)) throw t;
            t instanceof Error && 'cause' in t && e(t.cause);
          };
        },
      }));
    let n = e.r(32061),
      a = e.r(65713);
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  