/*
 * [app-react-dom #22783] Modul mit 1 Export(en)
 * Exporte: notFound
 * Requires: #54394
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 22783.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
22783,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'notFound', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(54394),
      a = `${n.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
    function i() {
      let e = Object.defineProperty(Error(a), '__NEXT_ERROR_CODE', {
        value: 'E1041',
        enumerable: !1,
        configurable: !0,
      });
      throw ((e.digest = a), e);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  