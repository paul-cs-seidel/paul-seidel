/*
 * [app-react-dom #76562] Modul (ohne erkannte Exporte)
 * Requires: #90809, #71645, #8372, #61994, #13258, #13957, #92838, #92805, #67673
 * Quelle: site/_next/static/chunks/0rithic.aky3l.js — Turbopack-Modul 76562.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
76562,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      ReadonlyURLSearchParams: function () {
        return s.ReadonlyURLSearchParams;
      },
      RedirectType: function () {
        return d.RedirectType;
      },
      ServerInsertedHTMLContext: function () {
        return c.ServerInsertedHTMLContext;
      },
      forbidden: function () {
        return d.forbidden;
      },
      notFound: function () {
        return d.notFound;
      },
      permanentRedirect: function () {
        return d.permanentRedirect;
      },
      redirect: function () {
        return d.redirect;
      },
      unauthorized: function () {
        return d.unauthorized;
      },
      unstable_isUnrecognizedActionError: function () {
        return l.unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function () {
        return d.unstable_rethrow;
      },
      useParams: function () {
        return b;
      },
      usePathname: function () {
        return _;
      },
      useRouter: function () {
        return E;
      },
      useSearchParams: function () {
        return h;
      },
      useSelectedLayoutSegment: function () {
        return v;
      },
      useSelectedLayoutSegments: function () {
        return R;
      },
      useServerInsertedHTML: function () {
        return c.useServerInsertedHTML;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(90809)._(e.r(71645)),
      o = e.r(8372),
      s = e.r(61994),
      u = e.r(13258),
      c = e.r(13957),
      l = e.r(92838),
      d = e.r(92805),
      f = 'u' < typeof window ? e.r(67673).useDynamicRouteParams : void 0,
      p = 'u' < typeof window ? e.r(67673).useDynamicSearchParams : void 0,
      {
        instrumentParamsForClientValidation: m,
        instrumentSearchParamsForClientValidation: g,
        expectCompleteParamsInClientValidation: y,
      } = {};
    function h() {
      p?.('useSearchParams()');
      let e = (0, i.useContext)(s.SearchParamsContext);
      return (0, i.useMemo)(() => (e ? new s.ReadonlyURLSearchParams(e) : null), [e]);
    }
    function _() {
      return (f?.('usePathname()'), (0, i.useContext)(s.PathnameContext));
    }
    function E() {
      let e = (0, i.useContext)(o.AppRouterContext);
      if (null === e)
        throw Object.defineProperty(
          Error('invariant expected app router to be mounted'),
          '__NEXT_ERROR_CODE',
          { value: 'E238', enumerable: !1, configurable: !0 },
        );
      return e;
    }
    function b() {
      return (f?.('useParams()'), (0, i.useContext)(s.PathParamsContext));
    }
    function R(e = 'children') {
      f?.('useSelectedLayoutSegments()');
      let t = (0, i.useContext)(o.LayoutRouterContext);
      return t ? (0, u.getSelectedLayoutSegmentPath)(t.parentTree, e) : null;
    }
    function v(e = 'children') {
      (f?.('useSelectedLayoutSegment()'), (0, i.useContext)(s.NavigationPromisesContext));
      let t = R(e);
      return (0, u.computeSelectedLayoutSegment)(t, e);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  }