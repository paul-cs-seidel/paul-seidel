/*
 * [app-animation #82604] Modul (ohne erkannte Exporte)
 * Requires: #26935
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 82604.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
82604,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      HTML_LIMITED_BOT_UA_RE: function () {
        return l.HTML_LIMITED_BOT_UA_RE;
      },
      HTML_LIMITED_BOT_UA_RE_STRING: function () {
        return i;
      },
      getBotType: function () {
        return c;
      },
      isBot: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(26935),
      u = /Googlebot(?!-)|Googlebot$/i,
      i = l.HTML_LIMITED_BOT_UA_RE.source;
    function o(e) {
      return l.HTML_LIMITED_BOT_UA_RE.test(e);
    }
    function s(e) {
      return u.test(e) || o(e);
    }
    function c(e) {
      return u.test(e) ? 'dom' : o(e) ? 'html' : void 0;
    }
  },
  