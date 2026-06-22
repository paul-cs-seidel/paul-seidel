/*
 * [app-animation #82823] Modul mit 1 Export(en)
 * Exporte: normalizePathTrailingSlash
 * Requires: #38281, #72463
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 82823.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
82823,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'normalizePathTrailingSlash', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(38281),
      a = e.r(72463),
      l = (e) => {
        if (!e.startsWith('/')) return e;
        let { pathname: t, query: r, hash: l } = (0, a.parsePath)(e);
        return /\.[^/]+\/?$/.test(t)
          ? `${(0, n.removeTrailingSlash)(t)}${r}${l}`
          : t.endsWith('/')
            ? `${t}${r}${l}`
            : `${t}/${r}${l}`;
      };
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  