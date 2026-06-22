/*
 * [app-react-dom #13957] Modul (ohne erkannte Exporte)
 * Requires: #90809, #71645
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 13957.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
13957,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      ServerInsertedHTMLContext: function () {
        return o;
      },
      useServerInsertedHTML: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(90809)._(e.r(71645)),
      o = i.default.createContext(null);
    function s(e) {
      let t = (0, i.useContext)(o);
      t && t(e);
    }
  },
  