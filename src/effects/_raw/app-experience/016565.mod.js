/*
 * [app-experience #16565] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 16565.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
16565,
  (e, t, n) => {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = {
      getObjectClassLabel: function () {
        return a;
      },
      isPlainObject: function () {
        return o;
      },
    };
    for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
    function a(e) {
      return Object.prototype.toString.call(e);
    }
    function o(e) {
      if ('[object Object]' !== a(e)) return !1;
      let t = Object.getPrototypeOf(e);
      return null === t || t.hasOwnProperty('isPrototypeOf');
    }
  },
  