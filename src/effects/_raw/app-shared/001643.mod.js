/*
 * [app-shared #1643] Modul (ohne erkannte Exporte)
 * Requires: #91463
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 1643.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
1643,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      getParamProperties: function () {
        return l;
      },
      getSegmentParam: function () {
        return i;
      },
      isCatchAll: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(91463);
    function i(e) {
      let t = o.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t));
      return (t && (e = e.slice(t.length)), e.startsWith('[[...') && e.endsWith(']]'))
        ? { paramType: 'optional-catchall', paramName: e.slice(5, -2) }
        : e.startsWith('[...') && e.endsWith(']')
          ? { paramType: t ? `catchall-intercepted-${t}` : 'catchall', paramName: e.slice(4, -1) }
          : e.startsWith('[') && e.endsWith(']')
            ? { paramType: t ? `dynamic-intercepted-${t}` : 'dynamic', paramName: e.slice(1, -1) }
            : null;
    }
    function s(e) {
      return (
        'catchall' === e ||
        'catchall-intercepted-(..)(..)' === e ||
        'catchall-intercepted-(.)' === e ||
        'catchall-intercepted-(..)' === e ||
        'catchall-intercepted-(...)' === e ||
        'optional-catchall' === e
      );
    }
    function l(e) {
      let t = !1,
        r = !1;
      switch (e) {
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
          t = !0;
          break;
        case 'optional-catchall':
          ((t = !0), (r = !0));
      }
      return { repeat: t, optional: r };
    }
  },
  