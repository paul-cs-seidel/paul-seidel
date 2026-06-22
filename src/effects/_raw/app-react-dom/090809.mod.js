/*
 * [app-react-dom #90809] Modul mit 1 Export(en)
 * Exporte: _
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 90809.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
90809,
  (e, t, r) => {
    'use strict';
    function n(e) {
      if ('function' != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (n = function (e) {
        return e ? r : t;
      })(e);
    }
    r._ = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
      var r = n(t);
      if (r && r.has(e)) return r.get(e);
      var a = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
        }
      return ((a.default = e), r && r.set(e, a), a);
    };
  },
  