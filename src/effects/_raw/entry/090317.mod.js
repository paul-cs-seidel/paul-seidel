/*
 * [entry #90317] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/15xrurgzs99gv.js — Turbopack-Modul 90317.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
90317,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      bindSnapshot: function () {
        return l;
      },
      createAsyncLocalStorage: function () {
        return a;
      },
      createSnapshot: function () {
        return c;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = Object.defineProperty(
      Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'),
      '__NEXT_ERROR_CODE',
      { value: 'E504', enumerable: !1, configurable: !0 },
    );
    class i {
      disable() {
        throw u;
      }
      getStore() {}
      run() {
        throw u;
      }
      exit() {
        throw u;
      }
      enterWith() {
        throw u;
      }
      static bind(e) {
        return e;
      }
    }
    let s = 'u' > typeof globalThis && globalThis.AsyncLocalStorage;
    function a() {
      return s ? new s() : new i();
    }
    function l(e) {
      return s ? s.bind(e) : i.bind(e);
    }
    function c() {
      return s
        ? s.snapshot()
        : function (e, ...t) {
            return e(...t);
          };
    }
  },
  