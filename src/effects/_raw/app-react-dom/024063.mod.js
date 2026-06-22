/*
 * [app-react-dom #24063] Modul (ohne erkannte Exporte)
 * Requires: #76963, #68391, #62266
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 24063.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
24063,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      getRedirectError: function () {
        return u;
      },
      getRedirectStatusCodeFromError: function () {
        return p;
      },
      getRedirectTypeFromError: function () {
        return f;
      },
      getURLFromRedirectError: function () {
        return d;
      },
      permanentRedirect: function () {
        return l;
      },
      redirect: function () {
        return c;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(76963),
      o = e.r(68391),
      s = 'u' < typeof window ? e.r(62266).actionAsyncStorage : void 0;
    function u(e, t, r = i.RedirectStatusCode.TemporaryRedirect) {
      let n = Object.defineProperty(Error(o.REDIRECT_ERROR_CODE), '__NEXT_ERROR_CODE', {
        value: 'E394',
        enumerable: !1,
        configurable: !0,
      });
      return ((n.digest = `${o.REDIRECT_ERROR_CODE};${t};${e};${r};`), n);
    }
    function c(e, t) {
      throw u(
        e,
        (t ??= s?.getStore()?.isAction ? 'push' : 'replace'),
        i.RedirectStatusCode.TemporaryRedirect,
      );
    }
    function l(e, t = 'replace') {
      throw u(e, t, i.RedirectStatusCode.PermanentRedirect);
    }
    function d(e) {
      return (0, o.isRedirectError)(e) ? e.digest.split(';').slice(2, -2).join(';') : null;
    }
    function f(e) {
      if (!(0, o.isRedirectError)(e))
        throw Object.defineProperty(Error('Not a redirect error'), '__NEXT_ERROR_CODE', {
          value: 'E260',
          enumerable: !1,
          configurable: !0,
        });
      return e.digest.split(';', 2)[1];
    }
    function p(e) {
      if (!(0, o.isRedirectError)(e))
        throw Object.defineProperty(Error('Not a redirect error'), '__NEXT_ERROR_CODE', {
          value: 'E260',
          enumerable: !1,
          configurable: !0,
        });
      return Number(e.digest.split(';').at(-2));
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  