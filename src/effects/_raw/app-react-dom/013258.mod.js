/*
 * [app-react-dom #13258] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 13258.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
13258,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      DEFAULT_SEGMENT_KEY: function () {
        return d;
      },
      NOT_FOUND_SEGMENT_KEY: function () {
        return f;
      },
      PAGE_SEGMENT_KEY: function () {
        return l;
      },
      addSearchParamsIfPageSegment: function () {
        return u;
      },
      computeSelectedLayoutSegment: function () {
        return c;
      },
      getSegmentValue: function () {
        return i;
      },
      getSelectedLayoutSegmentPath: function () {
        return function e(t, r, n = !0, a = []) {
          let o;
          if (n) o = t[1][r];
          else {
            let e = t[1];
            o = e.children ?? Object.values(e)[0];
          }
          if (!o) return a;
          let s = i(o[0]);
          return !s || s.startsWith(l) ? a : (a.push(s), e(o, r, !1, a));
        };
      },
      isGroupSegment: function () {
        return o;
      },
      isParallelRouteSegment: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    function i(e) {
      return Array.isArray(e) ? e[1] : e;
    }
    function o(e) {
      return '(' === e[0] && e.endsWith(')');
    }
    function s(e) {
      return e.startsWith('@') && '@children' !== e;
    }
    function u(e, t) {
      if (e.includes(l)) {
        let e = JSON.stringify(t);
        return '{}' !== e ? l + '?' + e : l;
      }
      return e;
    }
    function c(e, t) {
      if (!e || 0 === e.length) return null;
      let r = 'children' === t ? e[0] : e[e.length - 1];
      return r === d ? null : r;
    }
    let l = '__PAGE__',
      d = '__DEFAULT__',
      f = '/_not-found';
  },
  