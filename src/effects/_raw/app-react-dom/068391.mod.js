/*
 * [app-react-dom #68391] Modul (ohne erkannte Exporte)
 * Requires: #76963
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 68391.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
68391,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      REDIRECT_ERROR_CODE: function () {
        return o;
      },
      isRedirectError: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(76963),
      o = 'NEXT_REDIRECT';
    function s(e) {
      if ('object' != typeof e || null === e || !('digest' in e) || 'string' != typeof e.digest)
        return !1;
      let t = e.digest.split(';'),
        [r, n] = t,
        a = t.slice(2, -2).join(';'),
        s = Number(t.at(-2));
      return (
        r === o &&
        ('replace' === n || 'push' === n) &&
        'string' == typeof a &&
        !isNaN(s) &&
        s in i.RedirectStatusCode
      );
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  