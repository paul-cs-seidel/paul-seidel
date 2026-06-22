/*
 * [app-animation #41858] Modul mit 1 Export(en)
 * Exporte: addPathPrefix
 * Requires: #72463
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 41858.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
41858,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'addPathPrefix', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(72463);
    function a(e, t) {
      if (!e.startsWith('/') || !t) return e;
      let { pathname: r, query: a, hash: l } = (0, n.parsePath)(e);
      return `${t}${r}${a}${l}`;
    }
  },
  