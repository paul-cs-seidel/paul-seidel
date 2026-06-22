/*
 * [app-shared #42715] Modul mit 1 Export(en)
 * Exporte: ReflectAdapter
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 42715.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
42715,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'ReflectAdapter', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    class n {
      static get(e, t, r) {
        let n = Reflect.get(e, t, r);
        return 'function' == typeof n ? n.bind(e) : n;
      }
      static set(e, t, r, n) {
        return Reflect.set(e, t, r, n);
      }
      static has(e, t) {
        return Reflect.has(e, t);
      }
      static deleteProperty(e, t) {
        return Reflect.deleteProperty(e, t);
      }
    }
  },
  