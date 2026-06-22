/*
 * [app-animation #74180] Modul (ohne erkannte Exporte)
 * Requires: #3372, #13258
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 74180.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
74180,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      compareAppPaths: function () {
        return o;
      },
      normalizeAppPath: function () {
        return i;
      },
      normalizeRscURL: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(3372),
      u = e.r(13258);
    function i(e) {
      return (0, l.ensureLeadingSlash)(
        e
          .split('/')
          .reduce(
            (e, t, r, n) =>
              !t ||
              (0, u.isGroupSegment)(t) ||
              '@' === t[0] ||
              (('page' === t || 'route' === t) && r === n.length - 1)
                ? e
                : `${e}/${t}`,
            '',
          ),
      );
    }
    function o(e, t) {
      let r = e.includes('/@'),
        n = t.includes('/@');
      return r && !n ? -1 : !r && n ? 1 : e.localeCompare(t);
    }
    function s(e) {
      return e.replace(/\.rsc($|\?)/, '$1');
    }
  },
  