/*
 * [app-react-dom #92838] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 92838.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
92838,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      UnrecognizedActionError: function () {
        return i;
      },
      unstable_isUnrecognizedActionError: function () {
        return o;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    class i extends Error {
      constructor(...e) {
        (super(...e), (this.name = 'UnrecognizedActionError'));
      }
    }
    function o(e) {
      return !!(e && 'object' == typeof e && e instanceof i);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  