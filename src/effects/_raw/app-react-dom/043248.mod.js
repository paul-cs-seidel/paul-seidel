/*
 * [app-react-dom #43248] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 43248.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
43248,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      StaticGenBailoutError: function () {
        return o;
      },
      isStaticGenBailoutError: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = 'NEXT_STATIC_GEN_BAILOUT';
    class o extends Error {
      constructor(...e) {
        (super(...e), (this.code = i));
      }
    }
    function s(e) {
      return 'object' == typeof e && null !== e && 'code' in e && e.code === i;
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  