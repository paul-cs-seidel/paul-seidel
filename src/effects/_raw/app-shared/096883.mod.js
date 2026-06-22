/*
 * [app-shared #96883] Modul (ohne erkannte Exporte)
 * Requires: #28649
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 96883.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
96883,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      RequestCookies: function () {
        return o.RequestCookies;
      },
      ResponseCookies: function () {
        return o.ResponseCookies;
      },
      stringifyCookie: function () {
        return o.stringifyCookie;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(28649);
  },
  