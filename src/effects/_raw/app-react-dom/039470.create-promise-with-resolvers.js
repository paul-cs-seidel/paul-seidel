/*
 * [app-react-dom #39470] Modul mit 1 Export(en)
 * Exporte: createPromiseWithResolvers
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 39470.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
39470,
  (e, t, r) => {
    'use strict';
    function n() {
      let e,
        t,
        r = new Promise((r, n) => {
          ((e = r), (t = n));
        });
      return { resolve: e, reject: t, promise: r };
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'createPromiseWithResolvers', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  