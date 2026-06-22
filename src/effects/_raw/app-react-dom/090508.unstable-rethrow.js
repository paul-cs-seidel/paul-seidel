/*
 * [app-react-dom #90508] Modul mit 1 Export(en)
 * Exporte: unstable_rethrow
 * Requires: #91414, #15507
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 90508.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
90508,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'unstable_rethrow', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = 'u' < typeof window ? e.r(91414).unstable_rethrow : e.r(15507).unstable_rethrow;
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  