/*
 * [app-experience #94553] Modul (ohne erkannte Exporte)
 * Requires: #23755, #96517, #97238, #5526, #98569
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 94553.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
94553,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }), e.r(23755));
    let r = e.r(96517);
    (e.r(97238), (window.next.turbopack = !0), (self.__webpack_hash__ = ''));
    let l = e.r(5526);
    ((0, r.appBootstrap)((t) => {
      let { hydrate: n } = e.r(98569);
      n(l, t);
    }),
      ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, '__esModule', { value: !0 }),
        Object.assign(n.default, n),
        (t.exports = n.default)));
  }