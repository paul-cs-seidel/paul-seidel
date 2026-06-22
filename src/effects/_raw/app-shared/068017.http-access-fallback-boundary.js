/*
 * [app-shared #68017] Modul mit 1 Export(en)
 * Exporte: HTTPAccessFallbackBoundary
 * Requires: #90809, #43476, #71645, #90373, #54394, #33525, #8372
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 68017.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
68017,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'HTTPAccessFallbackBoundary', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let n = e.r(90809),
      a = e.r(43476),
      o = n._(e.r(71645)),
      i = e.r(90373),
      s = e.r(54394);
    e.r(33525);
    let l = e.r(8372);
    class c extends o.default.Component {
      constructor(e) {
        (super(e), (this.state = { triggeredStatus: void 0, previousPathname: e.pathname }));
      }
      componentDidCatch() {}
      static getDerivedStateFromError(e) {
        if ((0, s.isHTTPAccessFallbackError)(e))
          return { triggeredStatus: (0, s.getAccessFallbackHTTPStatus)(e) };
        throw e;
      }
      static getDerivedStateFromProps(e, t) {
        return e.pathname !== t.previousPathname && t.triggeredStatus
          ? { triggeredStatus: void 0, previousPathname: e.pathname }
          : { triggeredStatus: t.triggeredStatus, previousPathname: e.pathname };
      }
      render() {
        let { notFound: e, forbidden: t, unauthorized: r, children: n } = this.props,
          { triggeredStatus: o } = this.state,
          i = {
            [s.HTTPAccessErrorStatus.NOT_FOUND]: e,
            [s.HTTPAccessErrorStatus.FORBIDDEN]: t,
            [s.HTTPAccessErrorStatus.UNAUTHORIZED]: r,
          };
        if (o) {
          let l = o === s.HTTPAccessErrorStatus.NOT_FOUND && e,
            c = o === s.HTTPAccessErrorStatus.FORBIDDEN && t,
            u = o === s.HTTPAccessErrorStatus.UNAUTHORIZED && r;
          return l || c || u
            ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)('meta', { name: 'robots', content: 'noindex' }), !1, i[o]],
              })
            : n;
        }
        return n;
      }
    }
    function u({ notFound: e, forbidden: t, unauthorized: r, children: n }) {
      let s = (0, i.useUntrackedPathname)(),
        d = (0, o.useContext)(l.MissingSlotContext);
      return e || t || r
        ? (0, a.jsx)(c, {
            pathname: s,
            notFound: e,
            forbidden: t,
            unauthorized: r,
            missingSlots: d,
            children: n,
          })
        : (0, a.jsx)(a.Fragment, { children: n });
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  