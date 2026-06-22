/*
 * [app-react-dom #12718] Modul mit 1 Export(en)
 * Exporte: InvariantError
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 12718.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
12718,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'InvariantError', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    class n extends Error {
      constructor(e, t) {
        (super(`Invariant: ${e.endsWith('.') ? e : e + '.'} This is a bug in Next.js.`, t),
          (this.name = 'InvariantError'));
      }
    }
  },
  