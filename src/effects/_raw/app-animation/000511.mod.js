/*
 * [app-animation #511] Modul (ohne erkannte Exporte)
 * Requires: #73861
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 511.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
511,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      Fallback: function () {
        return u;
      },
      createCacheMap: function () {
        return o;
      },
      deleteFromCacheMap: function () {
        return h;
      },
      deleteMapEntry: function () {
        return p;
      },
      getFromCacheMap: function () {
        return s;
      },
      isValueExpired: function () {
        return c;
      },
      setInCacheMap: function () {
        return f;
      },
      setSizeInCacheMap: function () {
        return y;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(73861),
      u = {},
      i = {};
    function o() {
      return { parent: null, key: null, value: null, map: null, prev: null, next: null, size: 0 };
    }
    function s(e, t, r, n, a) {
      let o = (function e(t, r, n, a, l, o) {
        let s, f;
        if (null !== a) ((s = a.value), (f = a.parent));
        else if (l && o !== i) ((s = i), (f = null));
        else return null === n.value ? n : c(t, r, n.value) ? (p(n), null) : n;
        let d = n.map;
        if (null !== d) {
          let n = d.get(s);
          if (void 0 !== n) {
            let a = e(t, r, n, f, l, s);
            if (null !== a) return a;
          }
          let a = d.get(u);
          if (void 0 !== a) return e(t, r, a, f, l, s);
        }
        return null;
      })(e, t, r, n, a, 0);
      return null === o || null === o.value ? null : ((0, l.lruPut)(o), o.value);
    }
    function c(e, t, r) {
      return r.staleAt <= e || r.version < t;
    }
    function f(e, t, r, n) {
      let a = (function (e, t, r) {
        let n = e,
          a = t,
          l = null;
        for (;;) {
          let e = l;
          if (null !== a) ((l = a.value), (a = a.parent));
          else if (r && e !== i) {
            if (null === n.value) return n;
            l = i;
          } else break;
          let t = n.map;
          if (null !== t) {
            let e = t.get(l);
            if (void 0 !== e) {
              n = e;
              continue;
            }
          } else ((t = new Map()), (n.map = t));
          let u = { parent: n, key: l, value: null, map: null, prev: null, next: null, size: 0 };
          (t.set(l, u), (n = u));
        }
        return n;
      })(e, t, n);
      (d(a, r), (0, l.lruPut)(a), (0, l.updateLruSize)(a, r.size));
    }
    function d(e, t) {
      null !== e.value && ((e.value.ref = null), (e.value = null));
      let r = t.ref;
      ((e.value = t),
        (t.ref = e),
        (0, l.updateLruSize)(e, t.size),
        null !== r && r !== e && r.value === t && p(r));
    }
    function h(e) {
      let t = e.ref;
      null !== t && ((e.ref = null), p(t));
    }
    function p(e) {
      ((e.value = null), (0, l.deleteFromLru)(e));
      let t = e.map;
      if (null === t) {
        let t = e.parent,
          r = e.key;
        for (; null !== t; ) {
          let e = t.map;
          if (null !== e && (e.delete(r), 0 === e.size) && ((t.map = null), null === t.value)) {
            ((r = t.key), (t = t.parent));
            continue;
          }
          break;
        }
      } else {
        let r = t.get(i);
        void 0 !== r && null !== r.value && d(e, r.value);
      }
    }
    function y(e, t) {
      let r = e.ref;
      null !== r && ((e.size = t), (0, l.updateLruSize)(r, t));
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  