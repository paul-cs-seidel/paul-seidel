/*
 * [app-react-dom #76963] Modul mit 1 Export(en)
 * Exporte: RedirectStatusCode
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 76963.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
76963,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'RedirectStatusCode', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    var n,
      a =
        (((n = {})[(n.SeeOther = 303)] = 'SeeOther'),
        (n[(n.TemporaryRedirect = 307)] = 'TemporaryRedirect'),
        (n[(n.PermanentRedirect = 308)] = 'PermanentRedirect'),
        n);
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  