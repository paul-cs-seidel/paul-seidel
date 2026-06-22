/*
 * [app-animation #73861] Modul mit 2 Export(en)
 * Exporte: prev, next
 * Requires: #511, #77709
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 73861.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
73861,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      cleanup: function () {
        return h;
      },
      deleteFromLru: function () {
        return f;
      },
      lruPut: function () {
        return s;
      },
      updateLruSize: function () {
        return c;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(511),
      u = e.r(77709),
      i = null,
      o = 0;
    function s(e) {
      if (i === e) return;
      let t = e.prev,
        r = e.next;
      if (
        (null === r || null === t ? ((o += e.size), d()) : ((t.next = r), (r.prev = t)), null === i)
      )
        ((e.prev = e), (e.next = e));
      else {
        let t = i.prev;
        ((e.prev = t), null !== t && (t.next = e), (e.next = i), (i.prev = e));
      }
      i = e;
    }
    function c(e, t) {
      let r = e.size;
      ((e.size = t), null !== e.next && ((o = o - r + t), d()));
    }
    function f(e) {
      let t = e.next,
        r = e.prev;
      null !== t &&
        null !== r &&
        ((o -= e.size),
        (e.next = null),
        (e.prev = null),
        i === e
          ? t === i
            ? (i = null)
            : ((i = t), (r.next = t), (t.prev = r))
          : ((r.next = t), (t.prev = r)));
    }
    function d() {
      o <= 0x3200000 || (0, u.pingPrefetchScheduler)();
    }
    function h() {
      if (!(o <= 0x3200000))
        for (; o > 0x2d00000 && null !== i; ) {
          let e = i.prev;
          null !== e && (0, l.deleteMapEntry)(e);
        }
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  