/*
 * [app-shared #13770] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 13770.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
13770,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      InstantValidationError: function () {
        return s;
      },
      isInstantValidationError: function () {
        return i;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = 'INSTANT_VALIDATION_ERROR';
    function i(e) {
      return !!(e && 'object' == typeof e && e instanceof Error && e.digest === o);
    }
    class s extends Error {
      constructor(...e) {
        (super(...e), (this.digest = o));
      }
    }
  },
  