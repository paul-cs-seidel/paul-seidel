/*
 * [app-react-dom #8372] Modul (ohne erkannte Exporte)
 * Requires: #55682, #71645
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 8372.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
8372,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      AppRouterContext: function () {
        return o;
      },
      GlobalLayoutRouterContext: function () {
        return u;
      },
      LayoutRouterContext: function () {
        return s;
      },
      MissingSlotContext: function () {
        return l;
      },
      TemplateContext: function () {
        return c;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(55682)._(e.r(71645)),
      o = i.default.createContext(null),
      s = i.default.createContext(null),
      u = i.default.createContext(null),
      c = i.default.createContext(null),
      l = i.default.createContext(new Set());
  },
  