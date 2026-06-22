/*
 * [app-animation #58442] Modul (ohne erkannte Exporte)
 * Requires: #90809, #43476, #71645, #76562, #24063, #68391
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 58442.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
58442,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      RedirectBoundary: function () {
        return h;
      },
      RedirectErrorBoundary: function () {
        return d;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(90809),
      u = e.r(43476),
      i = l._(e.r(71645)),
      o = e.r(76562),
      s = e.r(24063),
      c = e.r(68391);
    function f({ redirect: e, reset: t, redirectType: r }) {
      let n = (0, o.useRouter)();
      return (
        (0, i.useEffect)(() => {
          i.default.startTransition(() => {
            ('push' === r ? n.push(e, {}) : n.replace(e, {}), t());
          });
        }, [e, r, t, n]),
        null
      );
    }
    class d extends i.default.Component {
      constructor(e) {
        (super(e), (this.state = { redirect: null, redirectType: null }));
      }
      static getDerivedStateFromError(e) {
        if ((0, c.isRedirectError)(e)) {
          let t = (0, s.getURLFromRedirectError)(e),
            r = (0, s.getRedirectTypeFromError)(e);
          return 'handled' in e
            ? { redirect: null, redirectType: null }
            : { redirect: t, redirectType: r };
        }
        throw e;
      }
      render() {
        let { redirect: e, redirectType: t } = this.state;
        return null !== e && null !== t
          ? (0, u.jsx)(f, {
              redirect: e,
              redirectType: t,
              reset: () => this.setState({ redirect: null }),
            })
          : this.props.children;
      }
    }
    function h({ children: e }) {
      let t = (0, o.useRouter)();
      return (0, u.jsx)(d, { router: t, children: e });
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  