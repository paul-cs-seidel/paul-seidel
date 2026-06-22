/*
 * [app-react-dom #65713] Modul mit 1 Export(en)
 * Exporte: isNextRouterError
 * Requires: #54394, #68391
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 65713.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
65713,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isNextRouterError', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(54394),
      a = e.r(68391);
    function i(e) {
      return (0, a.isRedirectError)(e) || (0, n.isHTTPAccessFallbackError)(e);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  