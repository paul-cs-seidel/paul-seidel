/*
 * [app-animation #32120] Modul mit 1 Export(en)
 * Exporte: callServer
 * Requires: #71645, #88540, #41538
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 32120.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
32120,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'callServer', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let n = e.r(71645),
      a = e.r(88540),
      l = e.r(41538);
    async function u(e, t) {
      return new Promise((r, u) => {
        (0, n.startTransition)(() => {
          (0, l.dispatchAppRouterAction)({
            type: a.ACTION_SERVER_ACTION,
            actionId: e,
            actionArgs: t,
            resolve: r,
            reject: u,
          });
        });
      });
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  