/*
 * [app-animation #67764] Modul (ohne erkannte Exporte)
 * Requires: #13258
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 67764.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
67764,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      HEAD_REQUEST_KEY: function () {
        return i;
      },
      ROOT_SEGMENT_REQUEST_KEY: function () {
        return u;
      },
      appendSegmentRequestKeyPart: function () {
        return s;
      },
      convertSegmentPathToStaticExportFilename: function () {
        return d;
      },
      createSegmentRequestKeyPart: function () {
        return o;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(13258),
      u = '',
      i = '/_head';
    function o(e) {
      if ('string' == typeof e)
        return e.startsWith(l.PAGE_SEGMENT_KEY)
          ? l.PAGE_SEGMENT_KEY
          : '/_not-found' === e
            ? '_not-found'
            : f(e);
      let t = e[0];
      return '$' + e[2] + '$' + f(t);
    }
    function s(e, t, r) {
      return e + '/' + ('children' === t ? r : `@${f(t)}/${r}`);
    }
    let c = /^[a-zA-Z0-9\-_@]+$/;
    function f(e) {
      return c.test(e)
        ? e
        : '!' + btoa(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    function d(e) {
      return `__next${e.replace(/\//g, '.')}.txt`;
    }
  },
  