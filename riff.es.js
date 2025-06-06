import * as V from "react";
import nr, { forwardRef as ze, useContext as $r, createElement as Be, useState as ar } from "react";
var ue = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function wr() {
  if (Ye) return ae;
  Ye = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return ae.Fragment = r, ae.jsx = t, ae.jsxs = t, ae;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Sr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === Z ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case m:
          return "Fragment";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case L:
          return "Suspense";
        case R:
          return "SuspenseList";
        case ke:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case A:
            return "Portal";
          case j:
            return (c.displayName || "Context") + ".Provider";
          case E:
            return (c._context.displayName || "Context") + ".Consumer";
          case M:
            var g = c.render;
            return c = c.displayName, c || (c = g.displayName || g.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case S:
            return g = c.displayName || null, g !== null ? g : e(c.type) || "Memo";
          case ne:
            g = c._payload, c = c._init;
            try {
              return e(c(g));
            } catch {
            }
        }
      return null;
    }
    function r(c) {
      return "" + c;
    }
    function t(c) {
      try {
        r(c);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var F = g.error, z = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return F.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), r(c);
      }
    }
    function n(c) {
      if (c === m) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === ne)
        return "<...>";
      try {
        var g = e(c);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var c = X.A;
      return c === null ? null : c.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(c) {
      if (Ie.call(c, "key")) {
        var g = Object.getOwnPropertyDescriptor(c, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, g) {
      function F() {
        Ne || (Ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: F,
        configurable: !0
      });
    }
    function d() {
      var c = e(this.type);
      return Me[c] || (Me[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function f(c, g, F, z, J, Y, we, Se) {
      return F = Y.ref, c = {
        $$typeof: T,
        type: c,
        key: g,
        props: Y,
        _owner: J
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Se
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function p(c, g, F, z, J, Y, we, Se) {
      var P = g.children;
      if (P !== void 0)
        if (z)
          if (vr(P)) {
            for (z = 0; z < P.length; z++)
              x(P[z]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(P);
      if (Ie.call(g, "key")) {
        P = e(c);
        var K = Object.keys(g).filter(function(kr) {
          return kr !== "key";
        });
        z = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", He[P + z] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          P,
          K,
          P
        ), He[P + z] = !0);
      }
      if (P = null, F !== void 0 && (t(F), P = "" + F), s(g) && (t(g.key), P = "" + g.key), "key" in g) {
        F = {};
        for (var Ee in g)
          Ee !== "key" && (F[Ee] = g[Ee]);
      } else F = g;
      return P && l(
        F,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), f(
        c,
        P,
        Y,
        J,
        a(),
        F,
        we,
        Se
      );
    }
    function x(c) {
      typeof c == "object" && c !== null && c.$$typeof === T && c._store && (c._store.validated = 1);
    }
    var C = nr, T = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), j = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ke = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), X = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ie = Object.prototype.hasOwnProperty, vr = Array.isArray, $e = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(c) {
        return c();
      }
    };
    var Ne, Me = {}, Le = C["react-stack-bottom-frame"].bind(
      C,
      o
    )(), We = $e(n(o)), He = {};
    oe.Fragment = m, oe.jsx = function(c, g, F, z, J) {
      var Y = 1e4 > X.recentlyCreatedOwnerStacks++;
      return p(
        c,
        g,
        F,
        !1,
        z,
        J,
        Y ? Error("react-stack-top-frame") : Le,
        Y ? $e(n(c)) : We
      );
    }, oe.jsxs = function(c, g, F, z, J) {
      var Y = 1e4 > X.recentlyCreatedOwnerStacks++;
      return p(
        c,
        g,
        F,
        !0,
        z,
        J,
        Y ? Error("react-stack-top-frame") : Le,
        Y ? $e(n(c)) : We
      );
    };
  }()), oe;
}
var qe;
function Er() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? ue.exports = wr() : ue.exports = Sr()), ue.exports;
}
var u = Er();
const i = {
  primary: "#FF6200",
  primaryText: "#FFFFFF",
  secondary: "#0061FF",
  secondaryText: "#FFFFFF",
  accent: "#00D1B2",
  success: "#2ECC71",
  successBackground: "#EAF7F0",
  successBorder: "#2ECC71",
  successText: "#1B4332",
  error: "#E74C3C",
  errorBackground: "#FDEDEC",
  errorBorder: "#E74C3C",
  errorText: "#641E16",
  warning: "#F39C12",
  warningBackground: "#FFF4E5",
  warningBorder: "#F39C12",
  warningText: "#7D5102",
  info: "#3498DB",
  infoBackground: "#E8F4FD",
  infoBorder: "#3498DB",
  infoText: "#1D3557",
  text: "#111111",
  background: "#FAFAFA",
  surface: "#FFFFFF",
  border: "#E0E0E0",
  skeletonBase: "#e0e0e0",
  skeletonHighlight: "#f0f0f0",
  alert: {
    info: {
      background: "#E8F4FD",
      border: "#A0D2F2",
      text: "#0C5460"
    },
    success: {
      background: "#E6F4EA",
      border: "#A8D5B9",
      text: "#155724"
    },
    warning: {
      background: "#FFF4E5",
      border: "#FFD9A8",
      text: "#856404"
    },
    error: {
      background: "#FDECEA",
      border: "#F5A8A8",
      text: "#721C24"
    }
  },
  badge: {
    primary: { background: "#005FCC", text: "#FFFFFF" },
    secondary: { background: "#E0E0E0", text: "#333333" },
    success: { background: "#28a745", text: "#FFFFFF" },
    error: { background: "#dc3545", text: "#FFFFFF" },
    warning: { background: "#ffc107", text: "#111111" },
    info: { background: "#c82b9f", text: "#FFFFFF" }
  },
  button: {
    primary: {
      background: "#D7263D",
      hover: "#E96278",
      active: "#F191A1",
      disabledBg: "#B0B0B0",
      text: "#FFFFFF",
      disabledText: "#8A8A8A"
    },
    primaryBlack: {
      background: "#212529",
      hover: "#333333",
      active: "#444444",
      disabledBg: "#B0B0B0",
      text: "#FFFFFF",
      disabledText: "#8A8A8A"
    },
    secondary: {
      border: "#D7263D",
      hoverBorder: "#E96278",
      hoverBg: "#FCE3E8",
      activeBorder: "#F191A1",
      disabledBorder: "#B0B0B0",
      text: "#D7263D",
      disabledText: "#B0B0B0"
    },
    secondaryBlack: {
      border: "#212529",
      hoverBorder: "#333333",
      hoverBg: "#E6E6E6",
      activeBorder: "#444444",
      disabledBorder: "#B0B0B0",
      text: "#212529",
      disabledText: "#B0B0B0"
    },
    tertiary: {
      text: "#D7263D",
      hoverBg: "#FCE3E8",
      activeBg: "#F6BBC5",
      disabledText: "#B0B0B0"
    },
    tertiaryBlack: {
      text: "#212529",
      hoverBg: "#E6E6E6",
      activeBg: "#CCCCCC",
      disabledText: "#B0B0B0"
    },
    link: {
      text: "#D7263D",
      hover: "#D7263D",
      active: "#D7263D",
      disabled: "#8A8A8A"
    },
    linkBlack: {
      text: "#000000",
      hover: "#000000",
      active: "#000000",
      disabled: "#8A8A8A"
    }
  },
  // Utility colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  // From Figma
  // Primary
  "color-primary-crimson-red": "#D7263D",
  "color-primary-deep-charcoal": "#212529",
  "color-primary-grass": "#84C3A8",
  "color-primary-sky": "#232DCE",
  "color-primary-grove": "#C82B9F",
  "color-primary-soft-grass": "#DEF6EC",
  "color-primary-soft-sky": "#F0F4FC",
  "color-primary-soft-grove": "#FEF3F9",
  "color-primary-white": "#FFFFFF",
  // Extended
  "color-extended-crimson-red-2": "#E96278",
  "color-extended-crimson-red-3": "#F191A1",
  "color-extended-crimson-red-4": "#F6BBC5",
  "color-extended-crimson-red-5": "#FCE3E8",
  "color-extended-deeper-grass": "#A9D4C1",
  "color-extended-deep-grass": "#B2D6C7",
  "color-extended-deeper-sky": "#97AAD8",
  "color-extended-deep-sky": "#ACBCE2",
  // Neutral
  "color-neutral-black": "#000000",
  "color-neutral-5": "#333333",
  "color-neutral-4": "#545454",
  "color-neutral-3": "#8A8A8A",
  "color-neutral-2": "#B0B0B0",
  "color-neutral-1": "#E6E6E6"
}, h = {
  fonts: {
    base: "'Fira Sans', sans-serif"
  },
  sizes: {
    display: "32px",
    heading: "24px",
    subheading: "20px",
    body: "18px",
    small: "16px",
    caption: "14px"
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  spacing: {
    400: "16px"
  }
}, b = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "40px",
  8: "48px",
  9: "64px",
  10: "80px"
}, re = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px"
}, or = {
  none: "none",
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 2px 4px rgba(0,0,0,0.08)",
  lg: "0 4px 8px rgba(0,0,0,0.12)"
}, ir = {
  none: "0",
  thin: "1px",
  medium: "2px",
  thick: "4px"
}, Te = {
  size0: "0px",
  size1: "4px",
  size2: "8px",
  size3: "12px",
  size4: "16px",
  size5: "20px",
  size6: "24px",
  size7: "32px",
  size8: "40px",
  size9: "48px",
  size10: "64px",
  size11: "80px",
  size12: "96px",
  size13: "128px",
  size14: "160px",
  size15: "192px",
  size16: "256px",
  size17: "300px",
  size18: "320px",
  size19: "384px",
  size20: "448px",
  size21: "512px",
  size22: "1024px",
  size23: "2048",
  size24: "3072px",
  sizeFull: "100%",
  sizeAuto: "auto",
  sizeMin: "min-content",
  sizeMax: "max-content"
};
function Re() {
  return Re = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Re.apply(null, arguments);
}
function Fr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Cr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Ar = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Cr(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Fr(a);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), O = "-ms-", me = "-moz-", k = "-webkit-", sr = "comm", Pe = "rule", Oe = "decl", Br = "@import", cr = "@keyframes", Tr = "@layer", Rr = Math.abs, ge = String.fromCharCode, _r = Object.assign;
function jr(e, r) {
  return _(e, 0) ^ 45 ? (((r << 2 ^ _(e, 0)) << 2 ^ _(e, 1)) << 2 ^ _(e, 2)) << 2 ^ _(e, 3) : 0;
}
function lr(e) {
  return e.trim();
}
function zr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function $(e, r, t) {
  return e.replace(r, t);
}
function _e(e, r) {
  return e.indexOf(r);
}
function _(e, r) {
  return e.charCodeAt(r) | 0;
}
function se(e, r, t) {
  return e.slice(r, t);
}
function U(e) {
  return e.length;
}
function De(e) {
  return e.length;
}
function fe(e, r) {
  return r.push(e), e;
}
function Pr(e, r) {
  return e.map(r).join("");
}
var xe = 1, ee = 1, dr = 0, I = 0, B = 0, te = "";
function ye(e, r, t, n, a, o, s) {
  return { value: e, root: r, parent: t, type: n, props: a, children: o, line: xe, column: ee, length: s, return: "" };
}
function ie(e, r) {
  return _r(ye("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Or() {
  return B;
}
function Dr() {
  return B = I > 0 ? _(te, --I) : 0, ee--, B === 10 && (ee = 1, xe--), B;
}
function N() {
  return B = I < dr ? _(te, I++) : 0, ee++, B === 10 && (ee = 1, xe++), B;
}
function G() {
  return _(te, I);
}
function be() {
  return I;
}
function de(e, r) {
  return se(te, e, r);
}
function ce(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ur(e) {
  return xe = ee = 1, dr = U(te = e), I = 0, [];
}
function fr(e) {
  return te = "", e;
}
function pe(e) {
  return lr(de(I - 1, je(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ir(e) {
  for (; (B = G()) && B < 33; )
    N();
  return ce(e) > 2 || ce(B) > 3 ? "" : " ";
}
function Nr(e, r) {
  for (; --r && N() && !(B < 48 || B > 102 || B > 57 && B < 65 || B > 70 && B < 97); )
    ;
  return de(e, be() + (r < 6 && G() == 32 && N() == 32));
}
function je(e) {
  for (; N(); )
    switch (B) {
      // ] ) " '
      case e:
        return I;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && je(B);
        break;
      // (
      case 40:
        e === 41 && je(e);
        break;
      // \
      case 92:
        N();
        break;
    }
  return I;
}
function Mr(e, r) {
  for (; N() && e + B !== 57; )
    if (e + B === 84 && G() === 47)
      break;
  return "/*" + de(r, I - 1) + "*" + ge(e === 47 ? e : N());
}
function Lr(e) {
  for (; !ce(G()); )
    N();
  return de(e, I);
}
function Wr(e) {
  return fr(he("", null, null, null, [""], e = ur(e), 0, [0], e));
}
function he(e, r, t, n, a, o, s, l, d) {
  for (var f = 0, p = 0, x = s, C = 0, T = 0, A = 0, m = 1, v = 1, w = 1, E = 0, j = "", M = a, L = o, R = n, S = j; v; )
    switch (A = E, E = N()) {
      // (
      case 40:
        if (A != 108 && _(S, x - 1) == 58) {
          _e(S += $(pe(E), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += pe(E);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += Ir(A);
        break;
      // \
      case 92:
        S += Nr(be() - 1, 7);
        continue;
      // /
      case 47:
        switch (G()) {
          case 42:
          case 47:
            fe(Hr(Mr(N(), be()), r, t), d);
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * m:
        l[f++] = U(S) * w;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + p:
            w == -1 && (S = $(S, /\f/g, "")), T > 0 && U(S) - x && fe(T > 32 ? Ve(S + ";", n, t, x - 1) : Ve($(S, " ", "") + ";", n, t, x - 2), d);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (fe(R = Ge(S, r, t, f, p, a, l, j, M = [], L = [], x), o), E === 123)
              if (p === 0)
                he(S, r, R, R, M, o, x, l, L);
              else
                switch (C === 99 && _(S, 3) === 110 ? 100 : C) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    he(e, R, R, n && fe(Ge(e, R, R, 0, 0, a, l, j, a, M = [], x), L), a, L, x, l, n ? M : L);
                    break;
                  default:
                    he(S, R, R, R, [""], L, 0, l, L);
                }
        }
        f = p = T = 0, m = w = 1, j = S = "", x = s;
        break;
      // :
      case 58:
        x = 1 + U(S), T = A;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && Dr() == 125)
            continue;
        }
        switch (S += ge(E), E * m) {
          // &
          case 38:
            w = p > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            l[f++] = (U(S) - 1) * w, w = 1;
            break;
          // @
          case 64:
            G() === 45 && (S += pe(N())), C = G(), p = x = U(j = S += Lr(be())), E++;
            break;
          // -
          case 45:
            A === 45 && U(S) == 2 && (m = 0);
        }
    }
  return o;
}
function Ge(e, r, t, n, a, o, s, l, d, f, p) {
  for (var x = a - 1, C = a === 0 ? o : [""], T = De(C), A = 0, m = 0, v = 0; A < n; ++A)
    for (var w = 0, E = se(e, x + 1, x = Rr(m = s[A])), j = e; w < T; ++w)
      (j = lr(m > 0 ? C[w] + " " + E : $(E, /&\f/g, C[w]))) && (d[v++] = j);
  return ye(e, r, t, a === 0 ? Pe : l, d, f, p);
}
function Hr(e, r, t) {
  return ye(e, r, t, sr, ge(Or()), se(e, 2, -2), 0);
}
function Ve(e, r, t, n) {
  return ye(e, r, t, Oe, se(e, 0, n), se(e, n + 1, -1), n);
}
function Q(e, r) {
  for (var t = "", n = De(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function Yr(e, r, t, n) {
  switch (e.type) {
    case Tr:
      if (e.children.length) break;
    case Br:
    case Oe:
      return e.return = e.return || e.value;
    case sr:
      return "";
    case cr:
      return e.return = e.value + "{" + Q(e.children, n) + "}";
    case Pe:
      e.value = e.props.join(",");
  }
  return U(t = Q(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ur(e) {
  var r = De(e);
  return function(t, n, a, o) {
    for (var s = "", l = 0; l < r; l++)
      s += e[l](t, n, a, o) || "";
    return s;
  };
}
function qr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function br(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Gr = function(r, t, n) {
  for (var a = 0, o = 0; a = o, o = G(), a === 38 && o === 12 && (t[n] = 1), !ce(o); )
    N();
  return de(r, I);
}, Vr = function(r, t) {
  var n = -1, a = 44;
  do
    switch (ce(a)) {
      case 0:
        a === 38 && G() === 12 && (t[n] = 1), r[n] += Gr(I - 1, t, n);
        break;
      case 2:
        r[n] += pe(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = G() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += ge(a);
    }
  while (a = N());
  return r;
}, Xr = function(r, t) {
  return fr(Vr(ur(r), t));
}, Xe = /* @__PURE__ */ new WeakMap(), Jr = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Xe.get(n)) && !a) {
      Xe.set(r, !0);
      for (var o = [], s = Xr(t, o), l = n.props, d = 0, f = 0; d < s.length; d++)
        for (var p = 0; p < l.length; p++, f++)
          r.props[f] = o[d] ? s[d].replace(/&\f/g, l[p]) : l[p] + " " + s[d];
    }
  }
}, Zr = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function pr(e, r) {
  switch (jr(e, r)) {
    // color-adjust
    case 5103:
      return k + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + me + e + O + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return k + e + O + e + e;
    // order
    case 6165:
      return k + e + O + "flex-" + e + e;
    // align-items
    case 5187:
      return k + e + $(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + O + "flex-$1$2") + e;
    // align-self
    case 5443:
      return k + e + O + "flex-item-" + $(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return k + e + O + "flex-line-pack" + $(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return k + e + O + $(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return k + e + O + $(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return k + "box-" + $(e, "-grow", "") + k + e + O + $(e, "grow", "positive") + e;
    // transition
    case 4554:
      return k + $(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    // cursor
    case 6187:
      return $($($(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return $(e, /(image-set\([^]*)/, k + "$1$`$1");
    // justify-content
    case 4968:
      return $($(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $(e, /(.+)-inline(.+)/, k + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (U(e) - 1 - r > 6) switch (_(e, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (_(e, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return $(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + me + (_(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~_e(e, "stretch") ? pr($(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (_(e, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (_(e, U(e) - 3 - (~_e(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return $(e, ":", ":" + k) + e;
        // (inline-)?fl(e)x
        case 101:
          return $(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + k + (_(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + O + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (_(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return k + e + O + $(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return k + e + O + $(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return k + e + O + $(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return k + e + O + e + e;
  }
  return e;
}
var Kr = function(r, t, n, a) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Oe:
      r.return = pr(r.value, r.length);
      break;
    case cr:
      return Q([ie(r, {
        value: $(r.value, "@", "@" + k)
      })], a);
    case Pe:
      if (r.length) return Pr(r.props, function(o) {
        switch (zr(o, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Q([ie(r, {
              props: [$(o, /:(read-\w+)/, ":" + me + "$1")]
            })], a);
          // :placeholder
          case "::placeholder":
            return Q([ie(r, {
              props: [$(o, /:(plac\w+)/, ":" + k + "input-$1")]
            }), ie(r, {
              props: [$(o, /:(plac\w+)/, ":" + me + "$1")]
            }), ie(r, {
              props: [$(o, /:(plac\w+)/, O + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, Qr = [Kr], et = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var v = m.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || Qr, o = {}, s, l = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var v = m.getAttribute("data-emotion").split(" "), w = 1; w < v.length; w++)
        o[v[w]] = !0;
      l.push(m);
    }
  );
  var d, f = [Jr, Zr];
  {
    var p, x = [Yr, qr(function(m) {
      p.insert(m);
    })], C = Ur(f.concat(a, x)), T = function(v) {
      return Q(Wr(v), C);
    };
    d = function(v, w, E, j) {
      p = E, T(v ? v + "{" + w.styles + "}" : w.styles), j && (A.inserted[w.name] = !0);
    };
  }
  var A = {
    key: t,
    sheet: new Ar({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: o,
    registered: {},
    insert: d
  };
  return A.sheet.hydrate(l), A;
}, rt = !0;
function tt(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : a && (n += a + " ");
  }), n;
}
var hr = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  rt === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, nt = function(r, t, n) {
  hr(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var o = t;
    do
      r.insert(t === o ? "." + a : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function at(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ot = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, it = /[A-Z]|^ms/g, st = /_EMO_([^_]+?)_([^]*?)_EMO_/g, mr = function(r) {
  return r.charCodeAt(1) === 45;
}, Je = function(r) {
  return r != null && typeof r != "boolean";
}, Fe = /* @__PURE__ */ br(function(e) {
  return mr(e) ? e : e.replace(it, "-$&").toLowerCase();
}), Ze = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(st, function(n, a, o) {
          return q = {
            name: a,
            styles: o,
            next: q
          }, a;
        });
  }
  return ot[r] !== 1 && !mr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function le(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var a = t;
      if (a.anim === 1)
        return q = {
          name: a.name,
          styles: a.styles,
          next: q
        }, a.name;
      var o = t;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            q = {
              name: s.name,
              styles: s.styles,
              next: q
            }, s = s.next;
        var l = o.styles + ";";
        return l;
      }
      return ct(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var d = q, f = t(e);
        return q = d, le(e, r, f);
      }
      break;
    }
  }
  var p = t;
  if (r == null)
    return p;
  var x = r[p];
  return x !== void 0 ? x : p;
}
function ct(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += le(e, r, t[a]) + ";";
  else
    for (var o in t) {
      var s = t[o];
      if (typeof s != "object") {
        var l = s;
        r != null && r[l] !== void 0 ? n += o + "{" + r[l] + "}" : Je(l) && (n += Fe(o) + ":" + Ze(o, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
        for (var d = 0; d < s.length; d++)
          Je(s[d]) && (n += Fe(o) + ":" + Ze(o, s[d]) + ";");
      else {
        var f = le(e, r, s);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Fe(o) + ":" + f + ";";
            break;
          }
          default:
            n += o + "{" + f + "}";
        }
      }
    }
  return n;
}
var Ke = /label:\s*([^\s;{]+)\s*(;|$)/g, q;
function lt(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, a = "";
  q = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, a += le(t, r, o);
  else {
    var s = o;
    a += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (a += le(t, r, e[l]), n) {
      var d = o;
      a += d[l];
    }
  Ke.lastIndex = 0;
  for (var f = "", p; (p = Ke.exec(a)) !== null; )
    f += "-" + p[1];
  var x = at(a) + f;
  return {
    name: x,
    styles: a,
    next: q
  };
}
var dt = function(r) {
  return r();
}, ut = V.useInsertionEffect ? V.useInsertionEffect : !1, ft = ut || dt, gr = /* @__PURE__ */ V.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ et({
    key: "css"
  }) : null
);
gr.Provider;
var bt = function(r) {
  return /* @__PURE__ */ ze(function(t, n) {
    var a = $r(gr);
    return r(t, a, n);
  });
}, pt = /* @__PURE__ */ V.createContext({}), ht = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mt = /* @__PURE__ */ br(
  function(e) {
    return ht.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), gt = mt, xt = function(r) {
  return r !== "theme";
}, Qe = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? gt : xt;
}, er = function(r, t, n) {
  var a;
  if (t) {
    var o = t.shouldForwardProp;
    a = r.__emotion_forwardProp && o ? function(s) {
      return r.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
}, yt = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return hr(t, n, a), ft(function() {
    return nt(t, n, a);
  }), null;
}, vt = function e(r, t) {
  var n = r.__emotion_real === r, a = n && r.__emotion_base || r, o, s;
  t !== void 0 && (o = t.label, s = t.target);
  var l = er(r, t, n), d = l || Qe(a), f = !d("as");
  return function() {
    var p = arguments, x = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (o !== void 0 && x.push("label:" + o + ";"), p[0] == null || p[0].raw === void 0)
      x.push.apply(x, p);
    else {
      var C = p[0];
      x.push(C[0]);
      for (var T = p.length, A = 1; A < T; A++)
        x.push(p[A], C[A]);
    }
    var m = bt(function(v, w, E) {
      var j = f && v.as || a, M = "", L = [], R = v;
      if (v.theme == null) {
        R = {};
        for (var S in v)
          R[S] = v[S];
        R.theme = V.useContext(pt);
      }
      typeof v.className == "string" ? M = tt(w.registered, L, v.className) : v.className != null && (M = v.className + " ");
      var ne = lt(x.concat(L), w.registered, R);
      M += w.key + "-" + ne.name, s !== void 0 && (M += " " + s);
      var ke = f && l === void 0 ? Qe(j) : d, Z = {};
      for (var X in v)
        f && X === "as" || ke(X) && (Z[X] = v[X]);
      return Z.className = M, E && (Z.ref = E), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(yt, {
        cache: w,
        serialized: ne,
        isStringTag: typeof j == "string"
      }), /* @__PURE__ */ V.createElement(j, Z));
    });
    return m.displayName = o !== void 0 ? o : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", m.defaultProps = r.defaultProps, m.__emotion_real = m, m.__emotion_base = a, m.__emotion_styles = x, m.__emotion_forwardProp = l, Object.defineProperty(m, "toString", {
      value: function() {
        return "." + s;
      }
    }), m.withComponent = function(v, w) {
      var E = e(v, Re({}, t, w, {
        shouldForwardProp: er(m, w, !0)
      }));
      return E.apply(void 0, x);
    }, m;
  };
}, kt = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], y = vt.bind(null);
kt.forEach(function(e) {
  y[e] = y(e);
});
const $t = y("span")`
  font-family: ${h.fonts.base};
  font-size: ${({ fontSize: e = "body" }) => h.sizes[e]};
  font-weight: ${({ fontWeight: e = "regular" }) => h.weights[e]};
  line-height: ${({ lineHeight: e = "normal" }) => h.lineHeights[e]};
  color: ${({ color: e = "color-neutral-black" }) => i[e] ?? e};
  margin-bottom: ${({ marginBottom: e = "0" }) => b[e] ?? e};
`, W = ({
  as: e = "span",
  fontSize: r = "body",
  fontWeight: t = "regular",
  lineHeight: n = "normal",
  color: a = "color-neutral-black",
  marginBottom: o = 0,
  children: s,
  ...l
}) => /* @__PURE__ */ u.jsx(
  $t,
  {
    as: e,
    fontSize: r,
    fontWeight: t,
    lineHeight: n,
    color: a,
    marginBottom: o,
    ...l,
    children: s
  }
), wt = y("div")`
  background-color: ${({ backgroundColor: e = "transparent" }) => i[e] ?? e};

  border-radius: ${({ borderRadius: e = "none" }) => re[e] ?? e};

  border-width: ${({ borderWidth: e = "0" }) => ir[e] ?? e};
  border-style: solid;
  border-color: ${({ borderColor: e = "transparent" }) => i[e] ?? e};

  padding: ${({ padding: e = "0" }) => b[e] ?? e};

  margin: ${({ margin: e = "0" }) => b[e] ?? e};

  box-shadow: ${({ boxShadow: e }) => e ? or[e] ?? e : "none"};

  width: ${({ width: e }) => e ? Te[e] : "auto"};
  height: ${({ height: e }) => e ? Te[e] : "auto"};
`, D = ({
  as: e = "div",
  backgroundColor: r = "transparent",
  borderRadius: t = "none",
  padding: n = 0,
  margin: a = 0,
  boxShadow: o,
  children: s,
  ...l
}) => /* @__PURE__ */ u.jsx(
  wt,
  {
    as: e,
    backgroundColor: r,
    borderRadius: t,
    padding: n,
    margin: a,
    boxShadow: o,
    ...l,
    children: s
  }
), St = y("div")`
  display: flex;
  flex-direction: ${({ direction: e }) => e === "vertical" ? "column" : "row"};
  gap: ${({ gap: e }) => b[e ?? 0]};
`, vn = ({
  direction: e = "vertical",
  gap: r = 4,
  // spacing[4]
  children: t,
  role: n,
  "aria-label": a,
  "aria-describedby": o,
  ...s
}) => /* @__PURE__ */ u.jsx(
  St,
  {
    direction: e,
    gap: r,
    role: n,
    "aria-label": a,
    "aria-describedby": o,
    ...s,
    children: t
  }
), Et = y("div")`
  display: flex;
  justify-content: ${({ justify: e }) => e ?? "flex-start"};
  align-items: ${({ align: e }) => e ?? "stretch"};
  flex-direction: ${({ direction: e }) => e ?? "row"};
  gap: ${({ gap: e = 0 }) => b[e]};
  flex-grow: ${({ grow: e = 0 }) => e};
  flex-shrink: ${({ shrink: e = 1 }) => e};
  flex-basis: ${({ basis: e }) => e ? Te[e] : "auto"};
  margin: ${({ margin: e }) => e !== void 0 ? b[e] : "0"};
  margin-top: ${({ marginTop: e }) => e !== void 0 ? b[e] : void 0};
  margin-bottom: ${({ marginBottom: e }) => e !== void 0 ? b[e] : void 0};
  margin-left: ${({ marginLeft: e }) => e !== void 0 ? b[e] : void 0};
  margin-right: ${({ marginRight: e }) => e !== void 0 ? b[e] : void 0};
  padding: ${({ padding: e }) => e ? b[e] : void 0};
  padding-top: ${({ paddingTop: e }) => e ? b[e] : void 0};
  padding-bottom: ${({ paddingBottom: e }) => e ? b[e] : void 0};
  padding-left: ${({ paddingLeft: e }) => e ? b[e] : void 0};
  padding-right: ${({ paddingRight: e }) => e ? b[e] : void 0};
`, kn = ({
  justify: e = "flex-start",
  align: r = "stretch",
  direction: t = "row",
  gap: n = 4,
  // spacing[4] → 16px
  children: a,
  role: o,
  "aria-label": s,
  "aria-describedby": l,
  ...d
}) => /* @__PURE__ */ u.jsx(
  Et,
  {
    justify: e,
    align: r,
    direction: t,
    gap: n,
    role: o,
    "aria-label": s,
    "aria-describedby": l,
    ...d,
    children: a
  }
), H = {
  1: {
    fontSize: "display",
    fontWeight: "bold",
    lineHeight: "tight",
    fontFamily: "base",
    color: "color-primary-crimson-red",
    marginBottom: 5
  },
  2: {
    fontSize: "heading",
    fontWeight: "bold",
    lineHeight: "normal",
    fontFamily: "base",
    color: "color-primary-crimson-red",
    marginBottom: 4
  },
  3: {
    fontSize: "subheading",
    fontWeight: "bold",
    lineHeight: "normal",
    fontFamily: "base",
    color: "color-primary-crimson-red",
    marginBottom: 4
  },
  4: {
    fontSize: "body",
    fontWeight: "bold",
    lineHeight: "normal",
    fontFamily: "base",
    color: "text",
    marginBottom: 3
  },
  5: {
    fontSize: "small",
    fontWeight: "bold",
    lineHeight: "relaxed",
    fontFamily: "base",
    color: "text",
    marginBottom: 2
  },
  6: {
    fontSize: "caption",
    fontWeight: "bold",
    lineHeight: "relaxed",
    fontFamily: "base",
    color: "text",
    marginBottom: 1
  }
}, Ft = y(W)`
  font-size: ${({ level: e }) => H[e].fontSize};
  font-weight: ${({ level: e }) => H[e].fontWeight};
  line-height: ${({ level: e }) => H[e].lineHeight};
  // font-family: ${({ level: e }) => H[e].fontFamily};
  color: ${({ level: e }) => H[e].color};
  margin-bottom: ${({ level: e }) => H[e].marginBottom};
`, $n = ({
  as: e,
  level: r = 1,
  children: t,
  role: n,
  "aria-label": a,
  "aria-describedby": o
}) => {
  const s = e ?? `h${r}`;
  return /* @__PURE__ */ u.jsx(
    Ft,
    {
      as: s,
      level: r,
      fontWeight: H[r].fontWeight,
      lineHeight: H[r].lineHeight,
      fontSize: H[r].fontSize,
      color: H[r].color,
      marginBottom: H[r].marginBottom,
      role: n ?? "heading",
      "aria-label": a,
      "aria-describedby": o,
      children: t
    }
  );
}, Ct = y(W)`
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.regular};
  line-height: ${h.lineHeights.normal};
  font-family: ${h.fonts.base};
  color: ${i.black};
  margin-bottom: ${h.spacing[400]};
`, wn = ({
  children: e,
  role: r,
  "aria-label": t,
  "aria-describedby": n
}) => /* @__PURE__ */ u.jsx(
  Ct,
  {
    as: "p",
    role: r ?? "paragraph",
    "aria-label": t,
    "aria-describedby": n,
    children: e
  }
), At = y(W)`
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.regular};
  line-height: ${h.lineHeights.normal};
  // font-family: ${h.fonts.base};
  color: ${i.text};
  margin-bottom: ${h.spacing[400]};
  padding-left: ${b[5]};
`, Sn = ({
  type: e = "unordered",
  children: r,
  role: t,
  "aria-label": n,
  "aria-describedby": a
}) => {
  const o = e === "ordered" ? "ol" : "ul";
  return /* @__PURE__ */ u.jsx(
    At,
    {
      as: o,
      role: t ?? "list",
      "aria-label": n,
      "aria-describedby": a,
      children: r
    }
  );
}, Bt = y(D)`
  background-color: ${({ variant: e }) => i.alert[e].background};
  border: ${ir.thin} solid ${({ variant: e }) => i.alert[e].border};
  border-radius: ${re.md};
  padding: ${b[4]} ${b[5]};
  margin: ${b[4]} 0;
`, En = ({
  children: e,
  variant: r = "info",
  role: t,
  "aria-label": n,
  "aria-describedby": a
}) => /* @__PURE__ */ u.jsx(
  Bt,
  {
    variant: r,
    role: t ?? (r === "error" ? "alert" : "status"),
    "aria-label": n,
    "aria-describedby": a,
    children: /* @__PURE__ */ u.jsx(W, { as: "div", fontSize: "body", style: { color: i.alert[r].text }, children: e })
  }
), Tt = y(D)`
  display: inline-block;
  background-color: ${({ tone: e }) => i.badge[e].background};
  border-radius: ${re.md};
  padding: ${b[0]} ${b[1]};
`, Fn = ({
  children: e,
  tone: r = "primary",
  role: t,
  "aria-label": n,
  "aria-describedby": a,
  "aria-hidden": o
}) => /* @__PURE__ */ u.jsx(
  Tt,
  {
    as: "span",
    tone: r,
    role: t,
    "aria-label": n,
    "aria-describedby": a,
    "aria-hidden": o,
    children: /* @__PURE__ */ u.jsx(W, { as: "span", fontSize: "caption", fontWeight: "regular", style: { color: i.badge[r].text }, children: e })
  }
), Rt = y(D)`
  background-color: ${i.background};
  box-shadow: ${({ elevation: e }) => or[e]};
  border-radius: ${({ borderRadius: e }) => re[e]};
  padding: ${({ padding: e }) => b[e]};
  display: flex;
  flex-direction: column;
  gap: ${b[3]}; 
`, _t = y(W)`
  font-size: ${b[5]}; 
  font-weight: 700;
`, jt = y(D)`
  display: flex;
  gap: ${b[2]};
`, Cn = ({
  title: e,
  children: r,
  actions: t,
  elevation: n = "md",
  padding: a = 4,
  borderRadius: o = "md",
  role: s,
  "aria-label": l,
  "aria-describedby": d,
  "aria-hidden": f
}) => /* @__PURE__ */ u.jsxs(
  Rt,
  {
    elevation: n,
    padding: a,
    borderRadius: o,
    role: s,
    "aria-label": l,
    "aria-describedby": d,
    "aria-hidden": f,
    children: [
      e && /* @__PURE__ */ u.jsx(_t, { as: "h3", children: e }),
      /* @__PURE__ */ u.jsx(D, { as: "div", children: r }),
      t && /* @__PURE__ */ u.jsx(jt, { children: t })
    ]
  }
), Ce = {
  sm: "32px",
  md: "40px",
  lg: "64px",
  xl: "96px"
}, zt = y(D)`
  background-color: ${i["color-neutral-1"]}; // fallback background
  border-radius: 50%;
  width: ${({ size: e }) => Ce[e]};
  height: ${({ size: e }) => Ce[e]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size: e }) => `calc(${Ce[e]} / 2)`};
  color: ${i["color-neutral-4"]};
`, Pt = y("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, An = ({
  size: e = "md",
  src: r,
  alt: t,
  initials: n,
  role: a,
  "aria-label": o,
  "aria-describedby": s
}) => /* @__PURE__ */ u.jsx(
  zt,
  {
    as: "div",
    size: e,
    role: a ?? "img",
    "aria-label": o ?? (t || "Avatar"),
    "aria-describedby": s,
    children: r ? /* @__PURE__ */ u.jsx(Pt, { src: r, alt: t || "Avatar" }) : n
  }
), Ot = y(D)`
  width: ${({ $width: e }) => e};
  height: ${({ $height: e }) => e};
  border-radius: ${({ $borderRadius: e }) => re[e]};
  background-color: ${i.skeletonBase};
  animation: skeleton-loading 1.2s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: ${i.skeletonBase};
    }
    50% {
      background-color: ${i.skeletonHighlight};
    }
    100% {
      background-color: ${i.skeletonBase};
    }
  }
`, Bn = ({
  width: e = "100%",
  height: r = "16px",
  variant: t = "rect",
  role: n,
  "aria-label": a,
  "aria-describedby": o
}) => {
  let s = e, l = r, d = "sm";
  return t === "circle" ? (s = e === "100%" ? "40px" : e, l = s, d = "full") : t === "text" && (l = "1em", d = "sm"), /* @__PURE__ */ u.jsx(
    Ot,
    {
      backgroundColor: "skeletonBase",
      $width: s,
      $height: l,
      $borderRadius: d,
      role: n ?? "presentation",
      "aria-hidden": "true",
      "aria-label": a,
      "aria-describedby": o
    }
  );
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), It = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), rr = (e) => {
  const r = It(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, xr = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), Nt = (e) => {
  for (const r in e)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = ze(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...l
  }, d) => Be(
    "svg",
    {
      ref: d,
      ...Mt,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: xr("lucide", a),
      ...!o && !Nt(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...s.map(([f, p]) => Be(f, p)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = (e, r) => {
  const t = ze(
    ({ className: n, ...a }, o) => Be(Lt, {
      ref: o,
      iconNode: r,
      className: xr(
        `lucide-${Dt(rr(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return t.displayName = rr(e), t;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ht = ve("arrow-right", Wt);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ut = ve("chevron-down", Yt);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Gt = ve("chevron-up", qt);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Xt = ve("external-link", Vt), Jt = y(D)`
  display: flex;
  flex-direction: column;
  gap: ${({ gap: e }) => b[e]};
`, Zt = y("button")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.medium};
  color: ${i.text};
  background-color: transparent;
  border: none;
  padding: ${b[3]} 0;
  cursor: pointer;
  border-bottom: 1px solid ${i.border};
  transition: color 0.2s ease;

  &:hover {
    color: ${i["color-primary-crimson-red"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`, Kt = y(D)`
  padding: ${b[3]} 0;
  color: ${i.text};
  font-size: ${h.sizes.body};
  line-height: ${h.lineHeights.normal};
  /* Optional: add subtle animation */
  transition: all 0.2s ease-in-out;
`, Tn = ({
  items: e,
  defaultOpenId: r,
  gap: t = 3,
  // spacing[3] = 12px
  ariaLabel: n,
  ariaDescribedBy: a
}) => {
  const [o, s] = ar(r ?? ""), l = (d) => {
    s((f) => f === d ? "" : d);
  };
  return /* @__PURE__ */ u.jsx(
    Jt,
    {
      gap: t,
      role: "region",
      "aria-label": n,
      "aria-describedby": a,
      children: e.map((d) => {
        const f = o === d.id;
        return /* @__PURE__ */ u.jsxs(nr.Fragment, { children: [
          /* @__PURE__ */ u.jsxs(
            Zt,
            {
              type: "button",
              expanded: f,
              onClick: () => l(d.id),
              "aria-expanded": f,
              "aria-controls": `accordion-panel-${d.id}`,
              id: `accordion-header-${d.id}`,
              "aria-label": `Toggle ${d.title}`,
              children: [
                /* @__PURE__ */ u.jsx(W, { as: "span", children: d.title }),
                f ? /* @__PURE__ */ u.jsx(Gt, { size: 20, color: i["color-primary-crimson-red"] }) : /* @__PURE__ */ u.jsx(Ut, { size: 20, color: i["color-primary-crimson-red"] })
              ]
            }
          ),
          f && /* @__PURE__ */ u.jsx(
            Kt,
            {
              role: "region",
              id: `accordion-panel-${d.id}`,
              "aria-labelledby": `accordion-header-${d.id}`,
              children: d.content
            }
          )
        ] }, d.id);
      })
    }
  );
}, Qt = {
  info: {
    background: "infoBackground",
    border: "infoBorder",
    text: "infoText"
  },
  success: {
    background: "successBackground",
    border: "successBorder",
    text: "successText"
  },
  warning: {
    background: "warningBackground",
    border: "warningBorder",
    text: "warningText"
  },
  error: {
    background: "errorBackground",
    border: "errorBorder",
    text: "errorText"
  }
}, Rn = ({
  variant: e = "info",
  title: r,
  children: t
}) => {
  const n = Qt[e];
  return /* @__PURE__ */ u.jsxs(
    D,
    {
      as: "section",
      role: "region",
      "aria-label": `${e} callout`,
      backgroundColor: n.background,
      borderWidth: "thin",
      borderColor: n.border,
      borderRadius: "md",
      padding: 5,
      margin: 5,
      children: [
        /* @__PURE__ */ u.jsx(
          W,
          {
            as: "h3",
            fontSize: "heading",
            fontWeight: "bold",
            color: n.text,
            marginBottom: 3,
            children: r
          }
        ),
        /* @__PURE__ */ u.jsx(
          W,
          {
            as: "p",
            fontSize: "body",
            color: n.text,
            children: t
          }
        )
      ]
    }
  );
}, en = y("a")`
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  color: ${({ variant: e }) => e === "internalRed" || e === "externalRed" ? i["color-primary-crimson-red"] : i.black};

  &:hover,
  &:focus {
    color: ${i.black};
  }

  svg {
    width: 1em;
    height: 1em;
  }
`, _n = ({
  href: e,
  variant: r = "internal",
  children: t,
  role: n,
  "aria-label": a,
  "aria-describedby": o,
  ...s
}) => {
  const l = r === "external" || r === "externalRed";
  return /* @__PURE__ */ u.jsxs(
    en,
    {
      href: e,
      target: l ? "_blank" : void 0,
      rel: l ? "noopener noreferrer" : void 0,
      role: n ?? "anchor",
      "aria-label": a,
      "aria-describedby": o,
      variant: r,
      ...s,
      children: [
        t,
        l ? /* @__PURE__ */ u.jsx(Xt, {}) : /* @__PURE__ */ u.jsx(Ht, {})
      ]
    }
  );
}, rn = y(D)`
  display: flex;
  gap: ${({ gap: e }) => b[e]};
  margin-bottom: ${({ marginBottom: e }) => b[e]};
`, tn = y("button")`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  font-weight: ${h.weights.medium};
  color: ${({ selected: e }) => e ? i["color-primary-crimson-red"] : i["color-neutral-4"]};
  border-bottom: ${({ selected: e }) => e ? `4px solid ${i["color-primary-crimson-red"]}` : "4px solid transparent"};
  transition: color 0.2s ease, border-bottom 0.2s ease;

  &:hover:not(:disabled) {
    color: ${i["color-primary-crimson-red"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`, jn = ({
  tabs: e,
  defaultActiveId: r,
  gap: t = 2,
  // spacing[2] = 8px
  marginBottom: n = 4
  // spacing[4] = 16px
}) => {
  const [a, o] = ar(r ?? e[0].id), s = e.find((l) => l.id === a);
  return /* @__PURE__ */ u.jsxs(D, { as: "section", role: "region", "aria-label": "Tabs", children: [
    /* @__PURE__ */ u.jsx(
      rn,
      {
        role: "tablist",
        gap: t,
        marginBottom: n,
        children: e.map((l) => /* @__PURE__ */ u.jsx(
          tn,
          {
            type: "button",
            onClick: () => o(l.id),
            selected: l.id === a,
            role: "tab",
            "aria-selected": l.id === a,
            "aria-controls": `tabpanel-${l.id}`,
            id: `tab-${l.id}`,
            children: l.label
          },
          l.id
        ))
      }
    ),
    /* @__PURE__ */ u.jsx(
      D,
      {
        role: "tabpanel",
        id: `tabpanel-${a}`,
        "aria-labelledby": `tab-${a}`,
        children: s == null ? void 0 : s.content
      }
    )
  ] });
}, tr = {
  small: {
    padding: `${b[3]} ${b[3]}`,
    fontSize: h.sizes.caption
  },
  large: {
    padding: `${b[3]} ${b[4]}`,
    fontSize: h.sizes.body
  }
}, nn = y("button")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${h.fonts.base};
  font-weight: ${h.weights.medium};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border-radius: ${re.md};
  transition: all 0.2s ease;
  padding: ${({ size: e = "small" }) => tr[e].padding};
  font-size: ${({ size: e = "small" }) => tr[e].fontSize};

  ${({ variant: e }) => e === "primary" && `
    background-color: ${i.button.primary.background};
    color: ${i.button.primary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.primary.hover};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.primary.active};
    }

    &:disabled {
      background-color: ${i.button.primary.disabledBg};
      color: ${i.button.primary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant: e }) => e === "primaryBlack" && `
    background-color: ${i.button.primaryBlack.background};
    color: ${i.button.primaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.primaryBlack.hover};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.primaryBlack.active};
    }

    &:disabled {
      background-color: ${i.button.primaryBlack.disabledBg};
      color: ${i.button.primaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant: e }) => e === "secondary" && `
    background-color: transparent;
    color: ${i.button.secondary.text};
    border: 2px solid ${i.button.secondary.border};

    &:hover:not(:disabled) {
      border-color: ${i.button.secondary.hoverBorder};
      background-color: ${i.button.secondary.hoverBg};
    }

    &:active:not(:disabled) {
      border-color: ${i.button.secondary.activeBorder};
    }

    &:disabled {
      border-color: ${i.button.secondary.disabledBorder};
      color: ${i.button.secondary.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant: e }) => e === "secondaryBlack" && `
    background-color: transparent;
    color: ${i.button.secondaryBlack.text};
    border: 2px solid ${i.button.secondaryBlack.border};

    &:hover:not(:disabled) {
      border-color: ${i.button.secondaryBlack.hoverBorder};
      background-color: ${i.button.secondaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      border-color: ${i.button.secondaryBlack.activeBorder};
    }

    &:disabled {
      border-color: ${i.button.secondaryBlack.disabledBorder};
      color: ${i.button.secondaryBlack.disabledText};
      cursor: not-allowed;
    }
  `}

  ${({ variant: e }) => e === "tertiary" && `
    background-color: transparent;
    color: ${i.button.tertiary.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.tertiary.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.tertiary.activeBg};
    }

    &:disabled {
      color: ${i.button.tertiary.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

  ${({ variant: e }) => e === "tertiaryBlack" && `
    background-color: transparent;
    color: ${i.button.tertiaryBlack.text};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${i.button.tertiaryBlack.hoverBg};
    }

    &:active:not(:disabled) {
      background-color: ${i.button.tertiaryBlack.activeBg};
    }

    &:disabled {
      color: ${i.button.tertiaryBlack.disabledText};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}

    ${({ variant: e }) => {
  var r, t, n, a;
  return e === "link" && `
    background-color: transparent;
    color: ${((r = i.button.link) == null ? void 0 : r.text) ?? i["color-primary-crimson-red"]};
    border: none;
    padding: 0;
    text-decoration: underline;
    font-weight: ${h.weights.medium};
    cursor: pointer;

    &:hover:not(:disabled) {
      color: ${((t = i.button.link) == null ? void 0 : t.hover) ?? i["color-primary-crimson-red"]};
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: ${((n = i.button.link) == null ? void 0 : n.active) ?? i["color-primary-crimson-red"]};
    }

    &:disabled {
      color: ${((a = i.button.link) == null ? void 0 : a.disabled) ?? i["color-neutral-3"]};
      text-decoration: none;
      cursor: not-allowed;
    }
  `;
}}

    ${({ variant: e }) => {
  var r, t, n, a;
  return e === "linkBlack" && `
    background-color: transparent;
    color: ${((r = i.button.linkBlack) == null ? void 0 : r.text) ?? i["color-neutral-black"]};
    border: none;
    padding: 0;
    text-decoration: underline;
    font-weight: ${h.weights.medium};
    cursor: pointer;

    &:hover:not(:disabled) {
      color: ${((t = i.button.linkBlack) == null ? void 0 : t.hover) ?? i["color-neutral-black"]};
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: ${((n = i.button.linkBlack) == null ? void 0 : n.active) ?? i["color-neutral-black"]};
    }

    &:disabled {
      color: ${((a = i.button.linkBlack) == null ? void 0 : a.disabled) ?? i["color-neutral-3"]};
      text-decoration: none;
      cursor: not-allowed;
    }
  `;
}}

`, Ae = ({
  variant: e = "primary",
  size: r = "small",
  role: t,
  "aria-label": n,
  "aria-describedby": a,
  "aria-hidden": o,
  disabled: s,
  children: l,
  ...d
}) => /* @__PURE__ */ u.jsx(
  nn,
  {
    variant: e,
    size: r,
    role: t,
    "aria-label": n,
    "aria-describedby": a,
    "aria-hidden": o,
    "aria-disabled": s,
    disabled: s,
    ...d,
    children: l
  }
), an = y(D)`
  display: flex;
  align-items: center;
  gap: ${({ gap: e }) => b[e]};
`, zn = ({
  currentPage: e,
  totalPages: r,
  onPageChange: t,
  gap: n = 2
  // spacing[2] → 8px
}) => {
  const a = Array.from({ length: r }, (o, s) => s + 1);
  return /* @__PURE__ */ u.jsxs(
    an,
    {
      as: "nav",
      role: "navigation",
      "aria-label": "Pagination",
      gap: n,
      children: [
        /* @__PURE__ */ u.jsx(
          Ae,
          {
            onClick: () => t(Math.max(1, e - 1)),
            disabled: e === 1,
            children: "Previous"
          }
        ),
        a.map((o) => /* @__PURE__ */ u.jsx(
          Ae,
          {
            onClick: () => t(o),
            variant: o === e ? "primary" : "secondary",
            "aria-current": o === e ? "page" : void 0,
            children: o
          },
          o
        )),
        /* @__PURE__ */ u.jsx(
          Ae,
          {
            onClick: () => t(Math.min(r, e + 1)),
            disabled: e === r,
            children: "Next"
          }
        )
      ]
    }
  );
}, on = {
  default: i.text,
  error: i.errorText,
  success: i.successText
}, yr = ({
  id: e,
  children: r,
  tone: t = "default",
  role: n,
  "aria-label": a,
  "aria-describedby": o,
  "aria-hidden": s
}) => /* @__PURE__ */ u.jsx(
  W,
  {
    as: "p",
    id: e,
    fontSize: "caption",
    style: { color: on[t] },
    marginBottom: 0,
    role: n,
    "aria-label": a,
    "aria-describedby": o,
    "aria-hidden": s,
    children: r
  }
), sn = y(D)`
  display: flex;
  flex-direction: column;
  gap: ${({ gap: e }) => b[e]};
`, cn = y("label")`
  display: flex;
  align-items: center;
  gap: ${b[2]};
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, Pn = ({
  name: e,
  options: r,
  selectedValue: t,
  onChange: n,
  gap: a = 2,
  // spacing[2] → '8px'
  tone: o = "default",
  ariaLabel: s,
  ariaLabelledBy: l,
  ariaDescribedBy: d
}) => /* @__PURE__ */ u.jsx(
  sn,
  {
    role: "radiogroup",
    gap: a,
    "aria-label": s,
    "aria-labelledby": l,
    "aria-describedby": d,
    children: r.map((f) => {
      const p = `${e}-${f.value}`;
      return /* @__PURE__ */ u.jsxs(cn, { htmlFor: p, disabled: f.disabled, children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "radio",
            id: p,
            name: e,
            value: f.value,
            checked: t === f.value,
            onChange: () => n(f.value),
            "aria-checked": t === f.value,
            disabled: f.disabled
          }
        ),
        /* @__PURE__ */ u.jsx(
          W,
          {
            as: "span",
            color: f.disabled ? "color-neutral-3" : o === "error" ? "error" : "text",
            children: f.label
          }
        )
      ] }, f.value);
    })
  }
), ln = y(D)`
  display: flex;
  flex-direction: column;
  gap: ${({ gap: e }) => b[e]};
`, On = ({
  name: e,
  options: r,
  selectedValues: t,
  onChange: n,
  gap: a = 2,
  ariaLabel: o,
  ariaDescribedBy: s
}) => {
  const l = (d) => {
    t.includes(d) ? n(t.filter((f) => f !== d)) : n([...t, d]);
  };
  return /* @__PURE__ */ u.jsx(
    ln,
    {
      role: "group",
      gap: a,
      "aria-label": o,
      "aria-describedby": s,
      children: r.map((d) => /* @__PURE__ */ u.jsxs(
        "label",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: b[2],
            opacity: d.disabled ? 0.6 : 1,
            cursor: d.disabled ? "not-allowed" : "pointer"
          },
          children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                type: "checkbox",
                name: e,
                value: d.value,
                checked: t.includes(d.value),
                onChange: () => l(d.value),
                disabled: d.disabled
              }
            ),
            /* @__PURE__ */ u.jsx(W, { as: "span", children: d.label })
          ]
        },
        d.value
      ))
    }
  );
}, dn = y("div")`
  display: flex;
  flex-direction: column;
  gap: ${b[1]};
`, un = y("label")`
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.small};
  color: ${i["color-neutral-4"]};
`, fn = y("div")`
  position: relative;
  width: 100%;
`, bn = y("select")`
  width: 100%;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  padding: ${b[2]} ${b[5]} ${b[2]} ${b[2]};
  border: none;
  border-bottom: 1px solid
    ${({ tone: e }) => e === "error" ? i.error : e === "success" ? i.success : i.border};
  background-color: transparent;
  color: ${i.text};
  line-height: ${h.lineHeights.normal};
  appearance: none;
  cursor: pointer;

  &:disabled {
    color: ${i["color-neutral-3"]};
    border-bottom: 1px solid ${i["color-neutral-2"]};
    cursor: not-allowed;
  }
`, pn = y("div")`
  position: absolute;
  right: ${b[2]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-left: 2px solid ${i.text};
    border-bottom: 2px solid ${i.text};
    transform: rotate(-45deg);
  }
`, Dn = ({
  label: e,
  helperText: r,
  options: t,
  tone: n = "default",
  placeholder: a,
  id: o,
  role: s,
  "aria-label": l,
  "aria-describedby": d,
  "aria-hidden": f,
  ...p
}) => {
  const x = o ?? `select-${Math.random().toString(36).substr(2, 9)}`, C = r ? `${x}-helper` : void 0;
  return /* @__PURE__ */ u.jsxs(dn, { children: [
    e && /* @__PURE__ */ u.jsx(un, { htmlFor: x, children: e }),
    /* @__PURE__ */ u.jsxs(fn, { children: [
      /* @__PURE__ */ u.jsxs(
        bn,
        {
          id: x,
          tone: n,
          role: s,
          "aria-label": l,
          "aria-describedby": C ?? d,
          "aria-hidden": f,
          "aria-invalid": n === "error",
          ...p,
          children: [
            a && /* @__PURE__ */ u.jsx("option", { value: "", children: a }),
            t.map((T) => /* @__PURE__ */ u.jsx("option", { value: T.value, children: T.label }, T.value))
          ]
        }
      ),
      /* @__PURE__ */ u.jsx(pn, {})
    ] }),
    r && /* @__PURE__ */ u.jsx(yr, { id: C, tone: n, children: r })
  ] });
}, hn = y("div")`
  display: flex;
  flex-direction: column;
  gap: ${b[1]};
`, mn = y("label")`
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.small};
  color: ${i["color-neutral-4"]};
`, gn = y("input")`
  width: 100%;
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  padding: ${b[2]} 0 ${b[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({ tone: e }) => e === "error" ? i.error : e === "success" ? i.success : i.black};
  background-color: transparent;
  color: ${i.text};
  line-height: ${h.lineHeights.normal};
  outline: none;

  &:disabled {
    color: ${i["color-neutral-2"]};
    border-bottom: 2px solid ${i["color-neutral-2"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${i["color-neutral-3"]};
  }
    &:disabled::placeholder {
  color: ${i["color-neutral-1"]};
}
`, In = ({
  label: e,
  helperText: r,
  tone: t = "default",
  id: n,
  role: a,
  "aria-label": o,
  "aria-describedby": s,
  "aria-hidden": l,
  ...d
}) => {
  const f = n ?? `textinput-${Math.random().toString(36).substr(2, 9)}`, p = r ? `${f}-helper` : void 0;
  return /* @__PURE__ */ u.jsxs(hn, { children: [
    e && /* @__PURE__ */ u.jsx(mn, { htmlFor: f, children: e }),
    /* @__PURE__ */ u.jsx(
      gn,
      {
        id: f,
        tone: t,
        role: a,
        "aria-label": o,
        "aria-describedby": p ?? s,
        "aria-hidden": l,
        "aria-invalid": t === "error",
        ...d
      }
    ),
    r && /* @__PURE__ */ u.jsx(yr, { id: p, tone: t, children: r })
  ] });
}, xn = y("textarea")`
  width: 100%;
  min-height: 120px; /* make taller by default */
  font-family: ${h.fonts.base};
  font-size: ${h.sizes.body};
  padding: ${b[2]} 0 ${b[2]} 0;
  border: none;
  border-bottom: 2px solid
    ${({ tone: e }) => e === "error" ? i.error : e === "success" ? i.success : i.black};
  background-color: transparent;
  color: ${i.text};
  line-height: ${h.lineHeights.normal};
  outline: none;
  resize: vertical; /* allow user to resize vertically */

  &:disabled {
    color: ${i["color-neutral-2"]};
    border-bottom: 2px solid ${i["color-neutral-2"]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${i["color-neutral-3"]};
  }

  &:disabled::placeholder {
    color: ${i["color-neutral-2"]};
  }
`, Nn = ({
  tone: e = "default",
  disabled: r = !1,
  role: t,
  "aria-label": n,
  "aria-describedby": a,
  "aria-hidden": o,
  ...s
}) => /* @__PURE__ */ u.jsx(
  xn,
  {
    tone: e,
    disabled: r,
    role: t,
    "aria-label": n,
    "aria-describedby": a,
    "aria-hidden": o,
    "aria-invalid": e === "error",
    ...s
  }
);
export {
  Tn as Accordion,
  En as Alert,
  _n as Anchor,
  An as Avatar,
  Fn as Badge,
  D as Box,
  Ae as Button,
  Rn as Callout,
  Cn as Card,
  On as CheckboxGroup,
  kn as Flex,
  $n as Heading,
  yr as HelpText,
  Sn as List,
  zn as Pagination,
  wn as Paragraph,
  Pn as RadioGroup,
  Dn as Select,
  Bn as Skeleton,
  vn as Stack,
  jn as Tabs,
  W as Text,
  Nn as TextArea,
  In as TextInput
};
