/*
 * [app-experience #2023] Modul (ohne erkannte Exporte)
 * Requires: #16565
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 2023.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
2023,
  (e, t, n) => {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = {
      default: function () {
        return o;
      },
      getProperError: function () {
        return i;
      },
    };
    for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
    let a = e.r(16565);
    function o(e) {
      return 'object' == typeof e && null !== e && 'name' in e && 'message' in e;
    }
    function i(e) {
      let t;
      return o(e)
        ? e
        : Object.defineProperty(
            Error(
              (0, a.isPlainObject)(e)
                ? ((t = new WeakSet()),
                  JSON.stringify(e, (e, n) => {
                    if ('object' == typeof n && null !== n) {
                      if (t.has(n)) return '[Circular]';
                      t.add(n);
                    }
                    return n;
                  }))
                : e + '',
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E394', enumerable: !1, configurable: !0 },
          );
    }
  },
  