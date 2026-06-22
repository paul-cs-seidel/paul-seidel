/*
 * [app-react-dom #67287] Modul mit 1 Export(en)
 * Exporte: isPostpone
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 67287.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
67287,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isPostpone', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = Symbol.for('react.postpone');
    function a(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === n;
    }
  },
  