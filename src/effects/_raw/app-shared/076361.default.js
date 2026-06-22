/*
 * [app-shared #76361] Modul mit 2 Export(en)
 * Exporte: default, createDedupedByCallsiteServerErrorLoggerDev
 * Requires: #71645
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 76361.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
76361,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'createDedupedByCallsiteServerErrorLoggerDev', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = (function (e) {
      if (e && e.__esModule) return e;
      if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
      var t = a(void 0);
      if (t && t.has(e)) return t.get(e);
      var r = { __proto__: null },
        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
          var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
        }
      return ((r.default = e), t && t.set(e, r), r);
    })(e.r(71645));
    function a(e) {
      if ('function' != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (a = function (e) {
        return e ? r : t;
      })(e);
    }
    let o = { current: null },
      i = 'function' == typeof n.cache ? n.cache : (e) => e,
      s = console.warn;
    function l(e) {
      return function (...t) {
        s(e(...t));
      };
    }
    i((e) => {
      try {
        s(o.current);
      } finally {
        o.current = null;
      }
    });
  },
  