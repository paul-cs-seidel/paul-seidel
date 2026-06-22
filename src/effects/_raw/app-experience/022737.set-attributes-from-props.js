/*
 * [app-experience #22737] Modul mit 1 Export(en)
 * Exporte: setAttributesFromProps
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 22737.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
22737,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'setAttributesFromProps', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let r = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
        noModule: 'noModule',
      },
      l = [
        'onLoad',
        'onReady',
        'dangerouslySetInnerHTML',
        'children',
        'onError',
        'strategy',
        'stylesheets',
      ];
    function a(e) {
      return ['async', 'defer', 'noModule'].includes(e);
    }
    function o(e, t) {
      for (let [n, o] of Object.entries(t)) {
        if (!t.hasOwnProperty(n) || l.includes(n) || void 0 === o) continue;
        let i = r[n] || n.toLowerCase();
        ('SCRIPT' === e.tagName && a(i) ? (e[i] = !!o) : e.setAttribute(i, String(o)),
          (!1 === o || ('SCRIPT' === e.tagName && a(i) && (!o || 'false' === o))) &&
            (e.setAttribute(i, ''), e.removeAttribute(i)));
      }
    }
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  