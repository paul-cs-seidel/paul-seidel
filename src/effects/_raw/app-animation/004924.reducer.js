/*
 * [app-animation #4924] Modul mit 1 Export(en)
 * Exporte: reducer
 * Requires: #88540, #54069, #91668, #73790, #69845, #86720, #45794
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 4924.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
4924,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'reducer', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    let n = e.r(88540),
      a = e.r(54069),
      l = e.r(91668),
      u = e.r(73790),
      i = e.r(69845),
      o = e.r(86720),
      s = e.r(45794),
      c =
        'u' < typeof window
          ? function (e, t) {
              return e;
            }
          : function (e, t) {
              switch (t.type) {
                case n.ACTION_NAVIGATE:
                  return (0, a.navigateReducer)(e, t);
                case n.ACTION_SERVER_PATCH:
                  return (0, l.serverPatchReducer)(e, t);
                case n.ACTION_RESTORE:
                  return (0, u.restoreReducer)(e, t);
                case n.ACTION_REFRESH:
                  return (0, i.refreshReducer)(e, t);
                case n.ACTION_HMR_REFRESH:
                  return (0, o.hmrRefreshReducer)(e);
                case n.ACTION_SERVER_ACTION:
                  return (0, s.serverActionReducer)(e, t);
                default:
                  throw Object.defineProperty(Error('Unknown action'), '__NEXT_ERROR_CODE', {
                    value: 'E295',
                    enumerable: !1,
                    configurable: !0,
                  });
              }
            };
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  