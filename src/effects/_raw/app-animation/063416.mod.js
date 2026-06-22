/*
 * [app-animation #63416] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 63416.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
63416,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      ACTION_SUFFIX: function () {
        return _;
      },
      APP_DIR_ALIAS: function () {
        return B;
      },
      CACHE_ONE_YEAR_SECONDS: function () {
        return j;
      },
      DOT_NEXT_ALIAS: function () {
        return k;
      },
      ESLINT_DEFAULT_DIRS: function () {
        return ei;
      },
      GSP_NO_RETURNED_VALUE: function () {
        return et;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function () {
        return ea;
      },
      GSSP_NO_RETURNED_VALUE: function () {
        return er;
      },
      HTML_CONTENT_TYPE_HEADER: function () {
        return u;
      },
      INFINITE_CACHE: function () {
        return M;
      },
      INSTRUMENTATION_HOOK_FILENAME: function () {
        return L;
      },
      JSON_CONTENT_TYPE_HEADER: function () {
        return i;
      },
      MATCHED_PATH_HEADER: function () {
        return c;
      },
      MIDDLEWARE_FILENAME: function () {
        return I;
      },
      MIDDLEWARE_LOCATION_REGEXP: function () {
        return F;
      },
      NEXT_BODY_SUFFIX: function () {
        return m;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function () {
        return N;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
        return P;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
        return S;
      },
      NEXT_CACHE_ROOT_PARAM_TAG_ID: function () {
        return C;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
        return A;
      },
      NEXT_CACHE_TAGS_HEADER: function () {
        return E;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function () {
        return O;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function () {
        return w;
      },
      NEXT_DATA_SUFFIX: function () {
        return g;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function () {
        return s;
      },
      NEXT_META_SUFFIX: function () {
        return v;
      },
      NEXT_NAV_DEPLOYMENT_ID_HEADER: function () {
        return R;
      },
      NEXT_QUERY_PARAM_PREFIX: function () {
        return o;
      },
      NEXT_RESUME_HEADER: function () {
        return b;
      },
      NEXT_RESUME_STATE_LENGTH_HEADER: function () {
        return T;
      },
      NON_STANDARD_NODE_ENV: function () {
        return el;
      },
      PAGES_DIR_ALIAS: function () {
        return x;
      },
      PRERENDER_REVALIDATE_HEADER: function () {
        return f;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
        return d;
      },
      PROXY_FILENAME: function () {
        return D;
      },
      PROXY_LOCATION_REGEXP: function () {
        return U;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
        return W;
      },
      ROOT_DIR_ALIAS: function () {
        return H;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
        return q;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function () {
        return Y;
      },
      RSC_ACTION_PROXY_ALIAS: function () {
        return K;
      },
      RSC_ACTION_VALIDATE_ALIAS: function () {
        return $;
      },
      RSC_CACHE_WRAPPER_ALIAS: function () {
        return X;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function () {
        return G;
      },
      RSC_MOD_REF_PROXY_ALIAS: function () {
        return V;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function () {
        return h;
      },
      RSC_SEGMENT_SUFFIX: function () {
        return p;
      },
      RSC_SUFFIX: function () {
        return y;
      },
      SERVER_PROPS_EXPORT_ERROR: function () {
        return ee;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
        return Q;
      },
      SERVER_PROPS_SSG_CONFLICT: function () {
        return J;
      },
      SERVER_RUNTIME: function () {
        return eo;
      },
      SSG_FALLBACK_EXPORT_ERROR: function () {
        return eu;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function () {
        return z;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
        return Z;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function () {
        return l;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
        return en;
      },
      WEBPACK_LAYERS: function () {
        return ef;
      },
      WEBPACK_RESOURCE_QUERIES: function () {
        return ed;
      },
      WEB_SOCKET_MAX_RECONNECTIONS: function () {
        return es;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = 'text/plain',
      u = 'text/html; charset=utf-8',
      i = 'application/json; charset=utf-8',
      o = 'nxtP',
      s = 'nxtI',
      c = 'x-matched-path',
      f = 'x-prerender-revalidate',
      d = 'x-prerender-revalidate-if-generated',
      h = '.segments',
      p = '.segment.rsc',
      y = '.rsc',
      _ = '.action',
      g = '.json',
      v = '.meta',
      m = '.body',
      R = 'x-nextjs-deployment-id',
      E = 'x-next-cache-tags',
      P = 'x-next-revalidated-tags',
      S = 'x-next-revalidate-tag-token',
      b = 'next-resume',
      T = 'x-next-resume-state-length',
      O = 128,
      w = 256,
      A = 1024,
      N = '_N_T_',
      C = '_N_RP_',
      j = 31536e3,
      M = 0xfffffffe,
      I = 'middleware',
      F = `(?:src/)?${I}`,
      D = 'proxy',
      U = `(?:src/)?${D}`,
      L = 'instrumentation',
      x = 'private-next-pages',
      k = 'private-dot-next',
      H = 'private-next-root-dir',
      B = 'private-next-app-dir',
      V = 'private-next-rsc-mod-ref-proxy',
      $ = 'private-next-rsc-action-validate',
      K = 'private-next-rsc-server-reference',
      X = 'private-next-rsc-cache-wrapper',
      G = 'private-next-rsc-track-dynamic-import',
      Y = 'private-next-rsc-action-encryption',
      q = 'private-next-rsc-action-client-wrapper',
      W =
        "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
      z =
        'You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps',
      Q = 'You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.',
      J =
        'You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps',
      Z =
        'can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props',
      ee =
        'pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export',
      et =
        'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?',
      er =
        'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?',
      en =
        'The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.',
      ea =
        "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
      el =
        'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
      eu =
        'Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export',
      ei = ['app', 'pages', 'components', 'lib', 'src'],
      eo = { edge: 'edge', experimentalEdge: 'experimental-edge', nodejs: 'nodejs' },
      es = 12,
      ec = {
        shared: 'shared',
        reactServerComponents: 'rsc',
        serverSideRendering: 'ssr',
        actionBrowser: 'action-browser',
        apiNode: 'api-node',
        apiEdge: 'api-edge',
        middleware: 'middleware',
        instrument: 'instrument',
        edgeAsset: 'edge-asset',
        appPagesBrowser: 'app-pages-browser',
        pagesDirBrowser: 'pages-dir-browser',
        pagesDirEdge: 'pages-dir-edge',
        pagesDirNode: 'pages-dir-node',
      },
      ef = {
        ...ec,
        GROUP: {
          builtinReact: [ec.reactServerComponents, ec.actionBrowser],
          serverOnly: [ec.reactServerComponents, ec.actionBrowser, ec.instrument, ec.middleware],
          neutralTarget: [ec.apiNode, ec.apiEdge],
          clientOnly: [ec.serverSideRendering, ec.appPagesBrowser],
          bundled: [
            ec.reactServerComponents,
            ec.actionBrowser,
            ec.serverSideRendering,
            ec.appPagesBrowser,
            ec.shared,
            ec.instrument,
            ec.middleware,
          ],
          appPages: [
            ec.reactServerComponents,
            ec.serverSideRendering,
            ec.appPagesBrowser,
            ec.actionBrowser,
          ],
        },
      },
      ed = {
        edgeSSREntry: '__next_edge_ssr_entry__',
        metadata: '__next_metadata__',
        metadataRoute: '__next_metadata_route__',
        metadataImageMeta: '__next_metadata_image_meta__',
      };
  },
  