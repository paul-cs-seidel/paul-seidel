/*
 * [app-shared #6831] Modul mit 1 Export(en)
 * Exporte: createRenderParamsFromClient
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 6831.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
6831,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'createRenderParamsFromClient', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = new WeakMap();
    function a(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return (n.set(e, r), r);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  