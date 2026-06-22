/*
 * [app-shared #18967] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 18967.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
18967,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return v;
      },
      MissingStaticPage: function () {
        return _;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return P;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return u;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return E;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => s.test(e);
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ':' + r : ''}`;
    }
    function u() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function d(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split('?');
      return (
        t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? `?${t.slice(1).join('?')}` : '')
      );
    }
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await m(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E1025', enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let h = 'u' > typeof performance,
      g =
        h &&
        ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
    class y extends Error {}
    class b extends Error {}
    class P extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class _ extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class v extends Error {
      constructor() {
        (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
      }
    }
    function E(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  