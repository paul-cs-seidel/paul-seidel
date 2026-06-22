/*
 * [app-shared #28298] Modul mit 1 Export(en)
 * Exporte: useRouterBFCache
 * Requires: #71645
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 28298.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
28298,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useRouterBFCache', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(71645);
    function a(e, t, r) {
      let [a, o] = (0, n.useState)(() => ({ tree: e, cacheNode: t, stateKey: r, next: null }));
      if (a.tree === e) return a;
      let i = { tree: e, cacheNode: t, stateKey: r, next: null },
        s = 1,
        l = a,
        c = i;
      for (; null !== l && s < 1; ) {
        if (l.stateKey === r) {
          c.next = l.next;
          break;
        }
        {
          s++;
          let e = { tree: l.tree, cacheNode: l.cacheNode, stateKey: l.stateKey, next: null };
          ((c.next = e), (c = e));
        }
        l = l.next;
      }
      return (o(i), i);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  