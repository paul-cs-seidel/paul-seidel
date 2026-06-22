/*
 * [app-react-dom #32061] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 32061.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
32061,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      BailoutToCSRError: function () {
        return o;
      },
      isBailoutToCSRError: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
    class o extends Error {
      constructor(e) {
        (super(`Bail out to client-side rendering: ${e}`), (this.reason = e), (this.digest = i));
      }
    }
    function s(e) {
      return 'object' == typeof e && null !== e && 'digest' in e && e.digest === i;
    }
  },
  