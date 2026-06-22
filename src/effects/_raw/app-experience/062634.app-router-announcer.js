/*
 * [app-experience #62634] Modul mit 1 Export(en)
 * Exporte: AppRouterAnnouncer
 * Requires: #71645, #74080
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 62634.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
62634,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'AppRouterAnnouncer', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let r = e.r(71645),
      l = e.r(74080),
      a = 'next-route-announcer';
    function o({ tree: e }) {
      let [t, n] = (0, r.useState)(null);
      (0, r.useEffect)(
        () => (
          n(
            (function () {
              let e = document.getElementsByName(a)[0];
              if (e?.shadowRoot?.childNodes[0]) return e.shadowRoot.childNodes[0];
              {
                let e = document.createElement(a);
                e.style.cssText = 'position:absolute';
                let t = document.createElement('div');
                return (
                  (t.ariaLive = 'assertive'),
                  (t.id = '__next-route-announcer__'),
                  (t.role = 'alert'),
                  (t.style.cssText =
                    'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal'),
                  e.attachShadow({ mode: 'open' }).appendChild(t),
                  document.body.appendChild(e),
                  t
                );
              }
            })(),
          ),
          () => {
            let e = document.getElementsByTagName(a)[0];
            e?.isConnected && document.body.removeChild(e);
          }
        ),
        [],
      );
      let [i, u] = (0, r.useState)(''),
        s = (0, r.useRef)(void 0);
      return (
        (0, r.useEffect)(() => {
          let e = '';
          if (document.title) e = document.title;
          else {
            let t = document.querySelector('h1');
            t && (e = t.innerText || t.textContent || '');
          }
          (void 0 !== s.current && s.current !== e && u(e), (s.current = e));
        }, [e]),
        t ? (0, l.createPortal)(i, t) : null
      );
    }
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  