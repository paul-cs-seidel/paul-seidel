/*
 * [app-react-dom #18800] Modul mit 14 Export(en)
 * Exporte: __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, createPortal, flushSync, preconnect, prefetchDNS, preinit, preinitModule, preload, preloadModule, requestFormReset, unstable_batchedUpdates, useFormState …
 * Requires: #71645
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 18800.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
18800,
  (e, t, r) => {
    'use strict';
    var n = e.r(71645);
    function a(e) {
      var t = 'https://react.dev/errors/' + e;
      if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var r = 2; r < arguments.length; r++)
          t += '&args[]=' + encodeURIComponent(arguments[r]);
      }
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function i() {}
    var o = {
        d: {
          f: i,
          r: function () {
            throw Error(a(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      s = Symbol.for('react.portal'),
      u = Symbol.for('react.optimistic_key'),
      c = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l(e, t) {
      return 'font' === e ? '' : 'string' == typeof t ? ('use-credentials' === t ? t : '') : void 0;
    }
    ((r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
      (r.createPortal = function (e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(a(299));
        return (function (e, t, r) {
          var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: s,
            key: null == n ? null : n === u ? u : '' + n,
            children: e,
            containerInfo: t,
            implementation: r,
          };
        })(e, t, null, r);
      }),
      (r.flushSync = function (e) {
        var t = c.T,
          r = o.p;
        try {
          if (((c.T = null), (o.p = 2), e)) return e();
        } finally {
          ((c.T = t), (o.p = r), o.d.f());
        }
      }),
      (r.preconnect = function (e, t) {
        'string' == typeof e &&
          ((t = t
            ? 'string' == typeof (t = t.crossOrigin)
              ? 'use-credentials' === t
                ? t
                : ''
              : void 0
            : null),
          o.d.C(e, t));
      }),
      (r.prefetchDNS = function (e) {
        'string' == typeof e && o.d.D(e);
      }),
      (r.preinit = function (e, t) {
        if ('string' == typeof e && t && 'string' == typeof t.as) {
          var r = t.as,
            n = l(r, t.crossOrigin),
            a = 'string' == typeof t.integrity ? t.integrity : void 0,
            i = 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0;
          'style' === r
            ? o.d.S(e, 'string' == typeof t.precedence ? t.precedence : void 0, {
                crossOrigin: n,
                integrity: a,
                fetchPriority: i,
              })
            : 'script' === r &&
              o.d.X(e, {
                crossOrigin: n,
                integrity: a,
                fetchPriority: i,
                nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
              });
        }
      }),
      (r.preinitModule = function (e, t) {
        if ('string' == typeof e)
          if ('object' == typeof t && null !== t) {
            if (null == t.as || 'script' === t.as) {
              var r = l(t.as, t.crossOrigin);
              o.d.M(e, {
                crossOrigin: r,
                integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
              });
            }
          } else null == t && o.d.M(e);
      }),
      (r.preload = function (e, t) {
        if ('string' == typeof e && 'object' == typeof t && null !== t && 'string' == typeof t.as) {
          var r = t.as,
            n = l(r, t.crossOrigin);
          o.d.L(e, r, {
            crossOrigin: n,
            integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
            nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
            type: 'string' == typeof t.type ? t.type : void 0,
            fetchPriority: 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy: 'string' == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet: 'string' == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: 'string' == typeof t.imageSizes ? t.imageSizes : void 0,
            media: 'string' == typeof t.media ? t.media : void 0,
          });
        }
      }),
      (r.preloadModule = function (e, t) {
        if ('string' == typeof e)
          if (t) {
            var r = l(t.as, t.crossOrigin);
            o.d.m(e, {
              as: 'string' == typeof t.as && 'script' !== t.as ? t.as : void 0,
              crossOrigin: r,
              integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
            });
          } else o.d.m(e);
      }),
      (r.requestFormReset = function (e) {
        o.d.r(e);
      }),
      (r.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (r.useFormState = function (e, t, r) {
        return c.H.useFormState(e, t, r);
      }),
      (r.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
      }),
      (r.version = '19.3.0-canary-3f0b9e61-20260317'));
  },
  