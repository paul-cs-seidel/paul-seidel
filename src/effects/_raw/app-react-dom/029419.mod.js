/*
 * [app-react-dom #29419] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 29419.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
29419,
  (e, t, r) => {
    'use strict';
    var n = e.i(47167);
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = {
      atLeastOneTask: function () {
        return u;
      },
      scheduleImmediate: function () {
        return s;
      },
      scheduleOnNextTick: function () {
        return o;
      },
      waitAtLeastOneReactRenderTask: function () {
        return c;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let o = (e) => {
        Promise.resolve().then(() => {
          n.default.nextTick(e);
        });
      },
      s = (e) => {
        setImmediate(e);
      };
    function u() {
      return new Promise((e) => s(e));
    }
    function c() {
      return new Promise((e) => setImmediate(e));
    }
  },
  