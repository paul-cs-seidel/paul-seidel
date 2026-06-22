/*
 * [app-react-dom #61994] Modul mit 3 Export(en)
 * Exporte: status, value, displayName
 * Requires: #71645, #12544
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 61994.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
61994,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      NavigationPromisesContext: function () {
        return l;
      },
      PathParamsContext: function () {
        return c;
      },
      PathnameContext: function () {
        return u;
      },
      ReadonlyURLSearchParams: function () {
        return o.ReadonlyURLSearchParams;
      },
      SearchParamsContext: function () {
        return s;
      },
      createDevToolsInstrumentedPromise: function () {
        return d;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(71645),
      o = e.r(12544),
      s = (0, i.createContext)(null),
      u = (0, i.createContext)(null),
      c = (0, i.createContext)(null),
      l = (0, i.createContext)(null);
    function d(e, t) {
      let r = Promise.resolve(t);
      return ((r.status = 'fulfilled'), (r.value = t), (r.displayName = `${e} (SSR)`), r);
    }
  },
  