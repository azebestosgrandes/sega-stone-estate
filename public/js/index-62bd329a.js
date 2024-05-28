function Dy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
            i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
            s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function Uy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ah = {
    exports: {}
}
    , Vo = {}
    , lh = {
        exports: {}
    }
    , z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi = Symbol.for("react.element")
    , zy = Symbol.for("react.portal")
    , $y = Symbol.for("react.fragment")
    , Fy = Symbol.for("react.strict_mode")
    , By = Symbol.for("react.profiler")
    , Vy = Symbol.for("react.provider")
    , Hy = Symbol.for("react.context")
    , Wy = Symbol.for("react.forward_ref")
    , Gy = Symbol.for("react.suspense")
    , qy = Symbol.for("react.memo")
    , Ky = Symbol.for("react.lazy")
    , Ld = Symbol.iterator;
function Xy(e) {
    return e === null || typeof e != "object" ? null : (e = Ld && e[Ld] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var uh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() { },
    enqueueReplaceState: function() { },
    enqueueSetState: function() { }
}
    , ch = Object.assign
    , dh = {};
function Fr(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = dh,
        this.updater = n || uh
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
Fr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function fh() { }
fh.prototype = Fr.prototype;
function Ku(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = dh,
        this.updater = n || uh
}
var Xu = Ku.prototype = new fh;
Xu.constructor = Ku;
ch(Xu, Fr.prototype);
Xu.isPureReactComponent = !0;
var jd = Array.isArray
    , ph = Object.prototype.hasOwnProperty
    , Yu = {
        current: null
    }
    , hh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function mh(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
            t.key !== void 0 && (s = "" + t.key),
            t)
            ph.call(t, r) && !hh.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
            l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Gi,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Yu.current
    }
}
function Yy(e, t) {
    return {
        $$typeof: Gi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Qu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gi
}
function Qy(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Md = /\/+/g;
function ja(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qy("" + e.key) : t.toString(36)
}
function Os(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Gi:
                    case zy:
                        o = !0
                }
        }
    if (o)
        return o = e,
            i = i(o),
            e = r === "" ? "." + ja(o, 0) : r,
            jd(i) ? (n = "",
                e != null && (n = e.replace(Md, "$&/") + "/"),
                Os(i, t, n, "", function(u) {
                    return u
                })) : i != null && (Qu(i) && (i = Yy(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Md, "$&/") + "/") + e)),
                    t.push(i)),
            1;
    if (o = 0,
        r = r === "" ? "." : r + ":",
        jd(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + ja(s, l);
            o += Os(s, t, n, a, i)
        }
    else if (a = Xy(e),
        typeof a == "function")
        for (e = a.call(e),
            l = 0; !(s = e.next()).done;)
            s = s.value,
                a = r + ja(s, l++),
                o += Os(s, t, n, a, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ls(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , i = 0;
    return Os(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
        r
}
function Jy(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Pe = {
    current: null
}
    , Ns = {
        transition: null
    }
    , Zy = {
        ReactCurrentDispatcher: Pe,
        ReactCurrentBatchConfig: Ns,
        ReactCurrentOwner: Yu
    };
z.Children = {
    map: ls,
    forEach: function(e, t, n) {
        ls(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ls(e, function() {
            t++
        }),
            t
    },
    toArray: function(e) {
        return ls(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
z.Component = Fr;
z.Fragment = $y;
z.Profiler = By;
z.PureComponent = Ku;
z.StrictMode = Fy;
z.Suspense = Gy;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zy;
z.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ch({}, e.props)
        , i = e.key
        , s = e.ref
        , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
            o = Yu.current),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            ph.call(t, a) && !hh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Gi,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
    ;
z.createContext = function(e) {
    return e = {
        $$typeof: Hy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: Vy,
            _context: e
        },
        e.Consumer = e
}
    ;
z.createElement = mh;
z.createFactory = function(e) {
    var t = mh.bind(null, e);
    return t.type = e,
        t
}
    ;
z.createRef = function() {
    return {
        current: null
    }
}
    ;
z.forwardRef = function(e) {
    return {
        $$typeof: Wy,
        render: e
    }
}
    ;
z.isValidElement = Qu;
z.lazy = function(e) {
    return {
        $$typeof: Ky,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Jy
    }
}
    ;
z.memo = function(e, t) {
    return {
        $$typeof: qy,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
z.startTransition = function(e) {
    var t = Ns.transition;
    Ns.transition = {};
    try {
        e()
    } finally {
        Ns.transition = t
    }
}
    ;
z.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
    ;
z.useCallback = function(e, t) {
    return Pe.current.useCallback(e, t)
}
    ;
z.useContext = function(e) {
    return Pe.current.useContext(e)
}
    ;
z.useDebugValue = function() { }
    ;
z.useDeferredValue = function(e) {
    return Pe.current.useDeferredValue(e)
}
    ;
z.useEffect = function(e, t) {
    return Pe.current.useEffect(e, t)
}
    ;
z.useId = function() {
    return Pe.current.useId()
}
    ;
z.useImperativeHandle = function(e, t, n) {
    return Pe.current.useImperativeHandle(e, t, n)
}
    ;
z.useInsertionEffect = function(e, t) {
    return Pe.current.useInsertionEffect(e, t)
}
    ;
z.useLayoutEffect = function(e, t) {
    return Pe.current.useLayoutEffect(e, t)
}
    ;
z.useMemo = function(e, t) {
    return Pe.current.useMemo(e, t)
}
    ;
z.useReducer = function(e, t, n) {
    return Pe.current.useReducer(e, t, n)
}
    ;
z.useRef = function(e) {
    return Pe.current.useRef(e)
}
    ;
z.useState = function(e) {
    return Pe.current.useState(e)
}
    ;
z.useSyncExternalStore = function(e, t, n) {
    return Pe.current.useSyncExternalStore(e, t, n)
}
    ;
z.useTransition = function() {
    return Pe.current.useTransition()
}
    ;
z.version = "18.2.0";
lh.exports = z;
var T = lh.exports;
const W = Uy(T)
    , e0 = Dy({
        __proto__: null,
        default: W
    }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t0 = T
    , n0 = Symbol.for("react.element")
    , r0 = Symbol.for("react.fragment")
    , i0 = Object.prototype.hasOwnProperty
    , s0 = t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , o0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function gh(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
        t.key !== void 0 && (s = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t)
        i0.call(t, r) && !o0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: n0,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: s0.current
    }
}
Vo.Fragment = r0;
Vo.jsx = gh;
Vo.jsxs = gh;
ah.exports = Vo;
var g = ah.exports
    , Al = {}
    , vh = {
        exports: {}
    }
    , Fe = {}
    , yh = {
        exports: {}
    }
    , wh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, L) {
        var M = N.length;
        N.push(L);
        e: for (; 0 < M;) {
            var Y = M - 1 >>> 1
                , oe = N[Y];
            if (0 < i(oe, L))
                N[Y] = L,
                    N[M] = oe,
                    M = Y;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var L = N[0]
            , M = N.pop();
        if (M !== L) {
            N[0] = M;
            e: for (var Y = 0, oe = N.length, ir = oe >>> 1; Y < ir;) {
                var kn = 2 * (Y + 1) - 1
                    , La = N[kn]
                    , In = kn + 1
                    , as = N[In];
                if (0 > i(La, M))
                    In < oe && 0 > i(as, La) ? (N[Y] = as,
                        N[In] = M,
                        Y = In) : (N[Y] = La,
                            N[kn] = M,
                            Y = kn);
                else if (In < oe && 0 > i(as, M))
                    N[Y] = as,
                        N[In] = M,
                        Y = In;
                else
                    break e
            }
        }
        return L
    }
    function i(N, L) {
        var M = N.sortIndex - L.sortIndex;
        return M !== 0 ? M : N.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
            , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
        , u = []
        , c = 1
        , d = null
        , f = 3
        , m = !1
        , w = !1
        , y = !1
        , _ = typeof setTimeout == "function" ? setTimeout : null
        , p = typeof clearTimeout == "function" ? clearTimeout : null
        , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(N) {
        for (var L = n(u); L !== null;) {
            if (L.callback === null)
                r(u);
            else if (L.startTime <= N)
                r(u),
                    L.sortIndex = L.expirationTime,
                    t(a, L);
            else
                break;
            L = n(u)
        }
    }
    function S(N) {
        if (y = !1,
            v(N),
            !w)
            if (n(a) !== null)
                w = !0,
                    Ge(x);
            else {
                var L = n(u);
                L !== null && qe(S, L.startTime - N)
            }
    }
    function x(N, L) {
        w = !1,
            y && (y = !1,
                p(b),
                b = -1),
            m = !0;
        var M = f;
        try {
            for (v(L),
                d = n(a); d !== null && (!(d.expirationTime > L) || N && !k());) {
                var Y = d.callback;
                if (typeof Y == "function") {
                    d.callback = null,
                        f = d.priorityLevel;
                    var oe = Y(d.expirationTime <= L);
                    L = e.unstable_now(),
                        typeof oe == "function" ? d.callback = oe : d === n(a) && r(a),
                        v(L)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var ir = !0;
            else {
                var kn = n(u);
                kn !== null && qe(S, kn.startTime - L),
                    ir = !1
            }
            return ir
        } finally {
            d = null,
                f = M,
                m = !1
        }
    }
    var C = !1
        , E = null
        , b = -1
        , P = 5
        , A = -1;
    function k() {
        return !(e.unstable_now() - A < P)
    }
    function I() {
        if (E !== null) {
            var N = e.unstable_now();
            A = N;
            var L = !0;
            try {
                L = E(!0, N)
            } finally {
                L ? R() : (C = !1,
                    E = null)
            }
        } else
            C = !1
    }
    var R;
    if (typeof h == "function")
        R = function() {
            h(I)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel
            , We = U.port2;
        U.port1.onmessage = I,
            R = function() {
                We.postMessage(null)
            }
    } else
        R = function() {
            _(I, 0)
        }
            ;
    function Ge(N) {
        E = N,
            C || (C = !0,
                R())
    }
    function qe(N, L) {
        b = _(function() {
            N(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(N) {
            N.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            w || m || (w = !0,
                Ge(x))
        }
        ,
        e.unstable_forceFrameRate = function(N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < N ? Math.floor(1e3 / N) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return f
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return n(a)
        }
        ,
        e.unstable_next = function(N) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = f
            }
            var M = f;
            f = L;
            try {
                return N()
            } finally {
                f = M
            }
        }
        ,
        e.unstable_pauseExecution = function() { }
        ,
        e.unstable_requestPaint = function() { }
        ,
        e.unstable_runWithPriority = function(N, L) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3
            }
            var M = f;
            f = N;
            try {
                return L()
            } finally {
                f = M
            }
        }
        ,
        e.unstable_scheduleCallback = function(N, L, M) {
            var Y = e.unstable_now();
            switch (typeof M == "object" && M !== null ? (M = M.delay,
                M = typeof M == "number" && 0 < M ? Y + M : Y) : M = Y,
            N) {
                case 1:
                    var oe = -1;
                    break;
                case 2:
                    oe = 250;
                    break;
                case 5:
                    oe = 1073741823;
                    break;
                case 4:
                    oe = 1e4;
                    break;
                default:
                    oe = 5e3
            }
            return oe = M + oe,
                N = {
                    id: c++,
                    callback: L,
                    priorityLevel: N,
                    startTime: M,
                    expirationTime: oe,
                    sortIndex: -1
                },
                M > Y ? (N.sortIndex = M,
                    t(u, N),
                    n(a) === null && N === n(u) && (y ? (p(b),
                        b = -1) : y = !0,
                        qe(S, M - Y))) : (N.sortIndex = oe,
                            t(a, N),
                            w || m || (w = !0,
                                Ge(x))),
                N
        }
        ,
        e.unstable_shouldYield = k,
        e.unstable_wrapCallback = function(N) {
            var L = f;
            return function() {
                var M = f;
                f = L;
                try {
                    return N.apply(this, arguments)
                } finally {
                    f = M
                }
            }
        }
}
)(wh);
yh.exports = wh;
var a0 = yh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sh = T
    , ze = a0;
function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var _h = new Set
    , xi = {};
function er(e, t) {
    Or(e, t),
        Or(e + "Capture", t)
}
function Or(e, t) {
    for (xi[e] = t,
        e = 0; e < t.length; e++)
        _h.add(t[e])
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Ll = Object.prototype.hasOwnProperty
    , l0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , Dd = {}
    , Ud = {};
function u0(e) {
    return Ll.call(Ud, e) ? !0 : Ll.call(Dd, e) ? !1 : l0.test(e) ? Ud[e] = !0 : (Dd[e] = !0,
        !1)
}
function c0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function d0(e, t, n, r) {
    if (t === null || typeof t > "u" || c0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Ce(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = s,
        this.removeEmptyString = o
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    me[e] = new Ce(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    me[t] = new Ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    me[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    me[e] = new Ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    me[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    me[e] = new Ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    me[e] = new Ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    me[e] = new Ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    me[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ju = /[\-:]([a-z])/g;
function Zu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ju, Zu);
    me[t] = new Ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ju, Zu);
    me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ju, Zu);
    me[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
me.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    me[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function ec(e, t, n, r) {
    var i = me.hasOwnProperty(t) ? me[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (d0(t, n, i, r) && (n = null),
        r || i === null ? u0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
            r = i.attributeNamespace,
            n === null ? e.removeAttribute(t) : (i = i.type,
                n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ft = Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , us = Symbol.for("react.element")
    , lr = Symbol.for("react.portal")
    , ur = Symbol.for("react.fragment")
    , tc = Symbol.for("react.strict_mode")
    , jl = Symbol.for("react.profiler")
    , xh = Symbol.for("react.provider")
    , Eh = Symbol.for("react.context")
    , nc = Symbol.for("react.forward_ref")
    , Ml = Symbol.for("react.suspense")
    , Dl = Symbol.for("react.suspense_list")
    , rc = Symbol.for("react.memo")
    , Gt = Symbol.for("react.lazy")
    , Th = Symbol.for("react.offscreen")
    , zd = Symbol.iterator;
function Yr(e) {
    return e === null || typeof e != "object" ? null : (e = zd && e[zd] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var te = Object.assign, Ma;
function si(e) {
    if (Ma === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ma = t && t[1] || ""
        }
    return `
` + Ma + e
}
var Da = !1;
function Ua(e, t) {
    if (!e || Da)
        return "";
    Da = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l];)
                l--;
            for (; 1 <= o && 0 <= l; o--,
                l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                                l--,
                                0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                    a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Da = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? si(e) : ""
}
function f0(e) {
    switch (e.tag) {
        case 5:
            return si(e.type);
        case 16:
            return si("Lazy");
        case 13:
            return si("Suspense");
        case 19:
            return si("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ua(e.type, !1),
                e;
        case 11:
            return e = Ua(e.type.render, !1),
                e;
        case 1:
            return e = Ua(e.type, !0),
                e;
        default:
            return ""
    }
}
function Ul(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case ur:
            return "Fragment";
        case lr:
            return "Portal";
        case jl:
            return "Profiler";
        case tc:
            return "StrictMode";
        case Ml:
            return "Suspense";
        case Dl:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Eh:
                return (e.displayName || "Context") + ".Consumer";
            case xh:
                return (e._context.displayName || "Context") + ".Provider";
            case nc:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case rc:
                return t = e.displayName || null,
                    t !== null ? t : Ul(e.type) || "Memo";
            case Gt:
                t = e._payload,
                    e = e._init;
                try {
                    return Ul(e(t))
                } catch { }
        }
    return null
}
function p0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ul(t);
        case 8:
            return t === tc ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function _n(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function bh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function h0(e) {
    var t = bh(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
            , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                    s.call(this, o)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function cs(e) {
    e._valueTracker || (e._valueTracker = h0(e))
}
function Ph(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = bh(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function Zs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function zl(e, t) {
    var n = t.checked;
    return te({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function $d(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = _n(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function Ch(e, t) {
    t = t.checked,
        t != null && ec(e, "checked", t, !1)
}
function $l(e, t) {
    Ch(e, t);
    var n = _n(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, _n(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Fd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function Fl(e, t, n) {
    (t !== "number" || Zs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var oi = Array.isArray;
function Sr(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _n(n),
            t = null,
            i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Bl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return te({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Bd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(O(92));
            if (oi(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: _n(n)
    }
}
function kh(e, t) {
    var n = _n(t.value)
        , r = _n(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Vd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ih(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function Vl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ih(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ds, Oh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
        : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (ds = ds || document.createElement("div"),
            ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ds.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function Ei(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ci = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , m0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ci).forEach(function(e) {
    m0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            ci[t] = ci[e]
    })
});
function Nh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ci.hasOwnProperty(e) && ci[e] ? ("" + t).trim() : t + "px"
}
function Rh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , i = Nh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
        }
}
var g0 = te({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Hl(e, t) {
    if (t) {
        if (g0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(O(62))
    }
}
function Wl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Gl = null;
function ic(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var ql = null
    , _r = null
    , xr = null;
function Hd(e) {
    if (e = Xi(e)) {
        if (typeof ql != "function")
            throw Error(O(280));
        var t = e.stateNode;
        t && (t = Ko(t),
            ql(e.stateNode, e.type, t))
    }
}
function Ah(e) {
    _r ? xr ? xr.push(e) : xr = [e] : _r = e
}
function Lh() {
    if (_r) {
        var e = _r
            , t = xr;
        if (xr = _r = null,
            Hd(e),
            t)
            for (e = 0; e < t.length; e++)
                Hd(t[e])
    }
}
function jh(e, t) {
    return e(t)
}
function Mh() { }
var za = !1;
function Dh(e, t, n) {
    if (za)
        return e(t, n);
    za = !0;
    try {
        return jh(e, t, n)
    } finally {
        za = !1,
            (_r !== null || xr !== null) && (Mh(),
                Lh())
    }
}
function Ti(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ko(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, t, typeof n));
    return n
}
var Kl = !1;
if (jt)
    try {
        var Qr = {};
        Object.defineProperty(Qr, "passive", {
            get: function() {
                Kl = !0
            }
        }),
            window.addEventListener("test", Qr, Qr),
            window.removeEventListener("test", Qr, Qr)
    } catch {
        Kl = !1
    }
function v0(e, t, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var di = !1
    , eo = null
    , to = !1
    , Xl = null
    , y0 = {
        onError: function(e) {
            di = !0,
                eo = e
        }
    };
function w0(e, t, n, r, i, s, o, l, a) {
    di = !1,
        eo = null,
        v0.apply(y0, arguments)
}
function S0(e, t, n, r, i, s, o, l, a) {
    if (w0.apply(this, arguments),
        di) {
        if (di) {
            var u = eo;
            di = !1,
                eo = null
        } else
            throw Error(O(198));
        to || (to = !0,
            Xl = u)
    }
}
function tr(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Uh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function Wd(e) {
    if (tr(e) !== e)
        throw Error(O(188))
}
function _0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = tr(e),
            t === null)
            throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n)
                    return Wd(i),
                        e;
                if (s === r)
                    return Wd(i),
                        t;
                s = s.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = i,
                r = s;
        else {
            for (var o = !1, l = i.child; l;) {
                if (l === n) {
                    o = !0,
                        n = i,
                        r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                        r = i,
                        n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l;) {
                    if (l === n) {
                        o = !0,
                            n = s,
                            r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                            r = s,
                            n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? e : t
}
function zh(e) {
    return e = _0(e),
        e !== null ? $h(e) : null
}
function $h(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = $h(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Fh = ze.unstable_scheduleCallback
    , Gd = ze.unstable_cancelCallback
    , x0 = ze.unstable_shouldYield
    , E0 = ze.unstable_requestPaint
    , ie = ze.unstable_now
    , T0 = ze.unstable_getCurrentPriorityLevel
    , sc = ze.unstable_ImmediatePriority
    , Bh = ze.unstable_UserBlockingPriority
    , no = ze.unstable_NormalPriority
    , b0 = ze.unstable_LowPriority
    , Vh = ze.unstable_IdlePriority
    , Ho = null
    , mt = null;
function P0(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function")
        try {
            mt.onCommitFiberRoot(Ho, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var at = Math.clz32 ? Math.clz32 : I0
    , C0 = Math.log
    , k0 = Math.LN2;
function I0(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (C0(e) / k0 | 0) | 0
}
var fs = 64
    , ps = 4194304;
function ai(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function ro(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , i = e.suspendedLanes
        , s = e.pingedLanes
        , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = ai(l) : (s &= o,
            s !== 0 && (r = ai(s)))
    } else
        o = n & ~i,
            o !== 0 ? r = ai(o) : s !== 0 && (r = ai(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
        s = t & -t,
        i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - at(t),
                i = 1 << n,
                r |= e[n],
                t &= ~i;
    return r
}
function O0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function N0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - at(s)
            , l = 1 << o
            , a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = O0(l, t)) : a <= t && (e.expiredLanes |= l),
            s &= ~l
    }
}
function Yl(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Hh() {
    var e = fs;
    return fs <<= 1,
        !(fs & 4194240) && (fs = 64),
        e
}
function $a(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function qi(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - at(t),
        e[t] = n
}
function R0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - at(n)
            , s = 1 << i;
        t[i] = 0,
            r[i] = -1,
            e[i] = -1,
            n &= ~s
    }
}
function oc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - at(n)
            , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
            n &= ~i
    }
}
var F = 0;
function Wh(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gh, ac, qh, Kh, Xh, Ql = !1, hs = [], on = null, an = null, ln = null, bi = new Map, Pi = new Map, Kt = [], A0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            on = null;
            break;
        case "dragenter":
        case "dragleave":
            an = null;
            break;
        case "mouseover":
        case "mouseout":
            ln = null;
            break;
        case "pointerover":
        case "pointerout":
            bi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Pi.delete(t.pointerId)
    }
}
function Jr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
        t !== null && (t = Xi(t),
            t !== null && ac(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            i !== null && t.indexOf(i) === -1 && t.push(i),
            e)
}
function L0(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return on = Jr(on, e, t, n, r, i),
                !0;
        case "dragenter":
            return an = Jr(an, e, t, n, r, i),
                !0;
        case "mouseover":
            return ln = Jr(ln, e, t, n, r, i),
                !0;
        case "pointerover":
            var s = i.pointerId;
            return bi.set(s, Jr(bi.get(s) || null, e, t, n, r, i)),
                !0;
        case "gotpointercapture":
            return s = i.pointerId,
                Pi.set(s, Jr(Pi.get(s) || null, e, t, n, r, i)),
                !0
    }
    return !1
}
function Yh(e) {
    var t = Ln(e.target);
    if (t !== null) {
        var n = tr(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = Uh(n),
                    t !== null) {
                    e.blockedOn = t,
                        Xh(e.priority, function() {
                            qh(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Rs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Gl = r,
                n.target.dispatchEvent(r),
                Gl = null
        } else
            return t = Xi(n),
                t !== null && ac(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function Kd(e, t, n) {
    Rs(e) && n.delete(t)
}
function j0() {
    Ql = !1,
        on !== null && Rs(on) && (on = null),
        an !== null && Rs(an) && (an = null),
        ln !== null && Rs(ln) && (ln = null),
        bi.forEach(Kd),
        Pi.forEach(Kd)
}
function Zr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        Ql || (Ql = !0,
            ze.unstable_scheduleCallback(ze.unstable_NormalPriority, j0)))
}
function Ci(e) {
    function t(i) {
        return Zr(i, e)
    }
    if (0 < hs.length) {
        Zr(hs[0], e);
        for (var n = 1; n < hs.length; n++) {
            var r = hs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (on !== null && Zr(on, e),
        an !== null && Zr(an, e),
        ln !== null && Zr(ln, e),
        bi.forEach(t),
        Pi.forEach(t),
        n = 0; n < Kt.length; n++)
        r = Kt[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Kt.length && (n = Kt[0],
        n.blockedOn === null);)
        Yh(n),
            n.blockedOn === null && Kt.shift()
}
var Er = Ft.ReactCurrentBatchConfig
    , io = !0;
function M0(e, t, n, r) {
    var i = F
        , s = Er.transition;
    Er.transition = null;
    try {
        F = 1,
            lc(e, t, n, r)
    } finally {
        F = i,
            Er.transition = s
    }
}
function D0(e, t, n, r) {
    var i = F
        , s = Er.transition;
    Er.transition = null;
    try {
        F = 4,
            lc(e, t, n, r)
    } finally {
        F = i,
            Er.transition = s
    }
}
function lc(e, t, n, r) {
    if (io) {
        var i = Jl(e, t, n, r);
        if (i === null)
            Ya(e, t, r, so, n),
                qd(e, r);
        else if (L0(i, e, t, n, r))
            r.stopPropagation();
        else if (qd(e, r),
            t & 4 && -1 < A0.indexOf(e)) {
            for (; i !== null;) {
                var s = Xi(i);
                if (s !== null && Gh(s),
                    s = Jl(e, t, n, r),
                    s === null && Ya(e, t, r, so, n),
                    s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Ya(e, t, r, null, n)
    }
}
var so = null;
function Jl(e, t, n, r) {
    if (so = null,
        e = ic(r),
        e = Ln(e),
        e !== null)
        if (t = tr(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = Uh(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return so = e,
        null
}
function Qh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (T0()) {
                case sc:
                    return 1;
                case Bh:
                    return 4;
                case no:
                case b0:
                    return 16;
                case Vh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var tn = null
    , uc = null
    , As = null;
function Jh() {
    if (As)
        return As;
    var e, t = uc, n = t.length, r, i = "value" in tn ? tn.value : tn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return As = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ls(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function ms() {
    return !0
}
function Xd() {
    return !1
}
function Be(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = s,
            this.target = o,
            this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
                this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ms : Xd,
            this.isPropagationStopped = Xd,
            this
    }
    return te(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = ms)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = ms)
        },
        persist: function() { },
        isPersistent: ms
    }),
        t
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, cc = Be(Br), Ki = te({}, Br, {
    view: 0,
    detail: 0
}), U0 = Be(Ki), Fa, Ba, ei, Wo = te({}, Ki, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ei && (ei && e.type === "mousemove" ? (Fa = e.screenX - ei.screenX,
            Ba = e.screenY - ei.screenY) : Ba = Fa = 0,
            ei = e),
            Fa)
    },
    movementY: function(e) {
        return "movementY" in e ? e.movementY : Ba
    }
}), Yd = Be(Wo), z0 = te({}, Wo, {
    dataTransfer: 0
}), $0 = Be(z0), F0 = te({}, Ki, {
    relatedTarget: 0
}), Va = Be(F0), B0 = te({}, Br, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), V0 = Be(B0), H0 = te({}, Br, {
    clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), W0 = Be(H0), G0 = te({}, Br, {
    data: 0
}), Qd = Be(G0), q0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, K0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, X0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Y0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = X0[e]) ? !!t[e] : !1
}
function dc() {
    return Y0
}
var Q0 = te({}, Ki, {
    key: function(e) {
        if (e.key) {
            var t = q0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ls(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dc,
    charCode: function(e) {
        return e.type === "keypress" ? Ls(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ls(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , J0 = Be(Q0)
    , Z0 = te({}, Wo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , Jd = Be(Z0)
    , ew = te({}, Ki, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: dc
    })
    , tw = Be(ew)
    , nw = te({}, Br, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , rw = Be(nw)
    , iw = te({}, Wo, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , sw = Be(iw)
    , ow = [9, 13, 27, 32]
    , fc = jt && "CompositionEvent" in window
    , fi = null;
jt && "documentMode" in document && (fi = document.documentMode);
var aw = jt && "TextEvent" in window && !fi
    , Zh = jt && (!fc || fi && 8 < fi && 11 >= fi)
    , Zd = String.fromCharCode(32)
    , ef = !1;
function em(e, t) {
    switch (e) {
        case "keyup":
            return ow.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function tm(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var cr = !1;
function lw(e, t) {
    switch (e) {
        case "compositionend":
            return tm(t);
        case "keypress":
            return t.which !== 32 ? null : (ef = !0,
                Zd);
        case "textInput":
            return e = t.data,
                e === Zd && ef ? null : e;
        default:
            return null
    }
}
function uw(e, t) {
    if (cr)
        return e === "compositionend" || !fc && em(e, t) ? (e = Jh(),
            As = uc = tn = null,
            cr = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Zh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var cw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function tf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cw[e.type] : t === "textarea"
}
function nm(e, t, n, r) {
    Ah(r),
        t = oo(t, "onChange"),
        0 < t.length && (n = new cc("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var pi = null
    , ki = null;
function dw(e) {
    pm(e, 0)
}
function Go(e) {
    var t = pr(e);
    if (Ph(t))
        return e
}
function fw(e, t) {
    if (e === "change")
        return t
}
var rm = !1;
if (jt) {
    var Ha;
    if (jt) {
        var Wa = "oninput" in document;
        if (!Wa) {
            var nf = document.createElement("div");
            nf.setAttribute("oninput", "return;"),
                Wa = typeof nf.oninput == "function"
        }
        Ha = Wa
    } else
        Ha = !1;
    rm = Ha && (!document.documentMode || 9 < document.documentMode)
}
function rf() {
    pi && (pi.detachEvent("onpropertychange", im),
        ki = pi = null)
}
function im(e) {
    if (e.propertyName === "value" && Go(ki)) {
        var t = [];
        nm(t, ki, e, ic(e)),
            Dh(dw, t)
    }
}
function pw(e, t, n) {
    e === "focusin" ? (rf(),
        pi = t,
        ki = n,
        pi.attachEvent("onpropertychange", im)) : e === "focusout" && rf()
}
function hw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Go(ki)
}
function mw(e, t) {
    if (e === "click")
        return Go(t)
}
function gw(e, t) {
    if (e === "input" || e === "change")
        return Go(t)
}
function vw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ut = typeof Object.is == "function" ? Object.is : vw;
function Ii(e, t) {
    if (ut(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ll.call(t, i) || !ut(e[i], t[i]))
            return !1
    }
    return !0
}
function sf(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function of(e, t) {
    var n = sf(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = sf(n)
    }
}
function sm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function om() {
    for (var e = window, t = Zs(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Zs(e.document)
    }
    return t
}
function pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function yw(e) {
    var t = om()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && sm(n.ownerDocument.documentElement, n)) {
        if (r !== null && pc(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                    , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                    !e.extend && s > r && (i = r,
                        r = s,
                        s = i),
                    i = of(n, s);
                var o = of(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    s > r ? (e.addRange(t),
                        e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var ww = jt && "documentMode" in document && 11 >= document.documentMode
    , dr = null
    , Zl = null
    , hi = null
    , eu = !1;
function af(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    eu || dr == null || dr !== Zs(r) || (r = dr,
        "selectionStart" in r && pc(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        hi && Ii(hi, r) || (hi = r,
            r = oo(Zl, "onSelect"),
            0 < r.length && (t = new cc("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = dr)))
}
function gs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var fr = {
    animationend: gs("Animation", "AnimationEnd"),
    animationiteration: gs("Animation", "AnimationIteration"),
    animationstart: gs("Animation", "AnimationStart"),
    transitionend: gs("Transition", "TransitionEnd")
}
    , Ga = {}
    , am = {};
jt && (am = document.createElement("div").style,
    "AnimationEvent" in window || (delete fr.animationend.animation,
        delete fr.animationiteration.animation,
        delete fr.animationstart.animation),
    "TransitionEvent" in window || delete fr.transitionend.transition);
function qo(e) {
    if (Ga[e])
        return Ga[e];
    if (!fr[e])
        return e;
    var t = fr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in am)
            return Ga[e] = t[n];
    return e
}
var lm = qo("animationend")
    , um = qo("animationiteration")
    , cm = qo("animationstart")
    , dm = qo("transitionend")
    , fm = new Map
    , lf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bn(e, t) {
    fm.set(e, t),
        er(t, [e])
}
for (var qa = 0; qa < lf.length; qa++) {
    var Ka = lf[qa]
        , Sw = Ka.toLowerCase()
        , _w = Ka[0].toUpperCase() + Ka.slice(1);
    bn(Sw, "on" + _w)
}
bn(lm, "onAnimationEnd");
bn(um, "onAnimationIteration");
bn(cm, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(dm, "onTransitionEnd");
Or("onMouseEnter", ["mouseout", "mouseover"]);
Or("onMouseLeave", ["mouseout", "mouseover"]);
Or("onPointerEnter", ["pointerout", "pointerover"]);
Or("onPointerLeave", ["pointerout", "pointerover"]);
er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , xw = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
function uf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        S0(r, t, void 0, e),
        e.currentTarget = null
}
function pm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                        , a = l.instance
                        , u = l.currentTarget;
                    if (l = l.listener,
                        a !== s && i.isPropagationStopped())
                        break e;
                    uf(i, l, u),
                        s = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                        a = l.instance,
                        u = l.currentTarget,
                        l = l.listener,
                        a !== s && i.isPropagationStopped())
                        break e;
                    uf(i, l, u),
                        s = a
                }
        }
    }
    if (to)
        throw e = Xl,
        to = !1,
        Xl = null,
        e
}
function q(e, t) {
    var n = t[su];
    n === void 0 && (n = t[su] = new Set);
    var r = e + "__bubble";
    n.has(r) || (hm(t, e, 2, !1),
        n.add(r))
}
function Xa(e, t, n) {
    var r = 0;
    t && (r |= 4),
        hm(n, e, r, t)
}
var vs = "_reactListening" + Math.random().toString(36).slice(2);
function Oi(e) {
    if (!e[vs]) {
        e[vs] = !0,
            _h.forEach(function(n) {
                n !== "selectionchange" && (xw.has(n) || Xa(n, !1, e),
                    Xa(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vs] || (t[vs] = !0,
            Xa("selectionchange", !1, t))
    }
}
function hm(e, t, n, r) {
    switch (Qh(t)) {
        case 1:
            var i = M0;
            break;
        case 4:
            i = D0;
            break;
        default:
            i = lc
    }
    n = i.bind(null, t, n, e),
        i = void 0,
        !Kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
}
function Ya(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null;) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                            a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null;) {
                    if (o = Ln(l),
                        o === null)
                        return;
                    if (a = o.tag,
                        a === 5 || a === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Dh(function() {
        var u = s
            , c = ic(n)
            , d = [];
        e: {
            var f = fm.get(e);
            if (f !== void 0) {
                var m = cc
                    , w = e;
                switch (e) {
                    case "keypress":
                        if (Ls(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        m = J0;
                        break;
                    case "focusin":
                        w = "focus",
                            m = Va;
                        break;
                    case "focusout":
                        w = "blur",
                            m = Va;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = Va;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = Yd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = $0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = tw;
                        break;
                    case lm:
                    case um:
                    case cm:
                        m = V0;
                        break;
                    case dm:
                        m = rw;
                        break;
                    case "scroll":
                        m = U0;
                        break;
                    case "wheel":
                        m = sw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = W0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = Jd
                }
                var y = (t & 4) !== 0
                    , _ = !y && e === "scroll"
                    , p = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var h = u, v; h !== null;) {
                    v = h;
                    var S = v.stateNode;
                    if (v.tag === 5 && S !== null && (v = S,
                        p !== null && (S = Ti(h, p),
                            S != null && y.push(Ni(h, S, v)))),
                        _)
                        break;
                    h = h.return
                }
                0 < y.length && (f = new m(f, w, null, n, c),
                    d.push({
                        event: f,
                        listeners: y
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                    m = e === "mouseout" || e === "pointerout",
                    f && n !== Gl && (w = n.relatedTarget || n.fromElement) && (Ln(w) || w[Mt]))
                    break e;
                if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                    m ? (w = n.relatedTarget || n.toElement,
                        m = u,
                        w = w ? Ln(w) : null,
                        w !== null && (_ = tr(w),
                            w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (m = null,
                                w = u),
                    m !== w)) {
                    if (y = Yd,
                        S = "onMouseLeave",
                        p = "onMouseEnter",
                        h = "mouse",
                        (e === "pointerout" || e === "pointerover") && (y = Jd,
                            S = "onPointerLeave",
                            p = "onPointerEnter",
                            h = "pointer"),
                        _ = m == null ? f : pr(m),
                        v = w == null ? f : pr(w),
                        f = new y(S, h + "leave", m, n, c),
                        f.target = _,
                        f.relatedTarget = v,
                        S = null,
                        Ln(c) === u && (y = new y(p, h + "enter", w, n, c),
                            y.target = v,
                            y.relatedTarget = _,
                            S = y),
                        _ = S,
                        m && w)
                        t: {
                            for (y = m,
                                p = w,
                                h = 0,
                                v = y; v; v = sr(v))
                                h++;
                            for (v = 0,
                                S = p; S; S = sr(S))
                                v++;
                            for (; 0 < h - v;)
                                y = sr(y),
                                    h--;
                            for (; 0 < v - h;)
                                p = sr(p),
                                    v--;
                            for (; h--;) {
                                if (y === p || p !== null && y === p.alternate)
                                    break t;
                                y = sr(y),
                                    p = sr(p)
                            }
                            y = null
                        }
                    else
                        y = null;
                    m !== null && cf(d, f, m, y, !1),
                        w !== null && _ !== null && cf(d, _, w, y, !0)
                }
            }
            e: {
                if (f = u ? pr(u) : window,
                    m = f.nodeName && f.nodeName.toLowerCase(),
                    m === "select" || m === "input" && f.type === "file")
                    var x = fw;
                else if (tf(f))
                    if (rm)
                        x = gw;
                    else {
                        x = hw;
                        var C = pw
                    }
                else
                    (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (x = mw);
                if (x && (x = x(e, u))) {
                    nm(d, x, n, c);
                    break e
                }
                C && C(e, f, u),
                    e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Fl(f, "number", f.value)
            }
            switch (C = u ? pr(u) : window,
            e) {
                case "focusin":
                    (tf(C) || C.contentEditable === "true") && (dr = C,
                        Zl = u,
                        hi = null);
                    break;
                case "focusout":
                    hi = Zl = dr = null;
                    break;
                case "mousedown":
                    eu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    eu = !1,
                        af(d, n, c);
                    break;
                case "selectionchange":
                    if (ww)
                        break;
                case "keydown":
                case "keyup":
                    af(d, n, c)
            }
            var E;
            if (fc)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e
                    }
                    b = void 0
                }
            else
                cr ? em(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (Zh && n.locale !== "ko" && (cr || b !== "onCompositionStart" ? b === "onCompositionEnd" && cr && (E = Jh()) : (tn = c,
                uc = "value" in tn ? tn.value : tn.textContent,
                cr = !0)),
                C = oo(u, b),
                0 < C.length && (b = new Qd(b, e, null, n, c),
                    d.push({
                        event: b,
                        listeners: C
                    }),
                    E ? b.data = E : (E = tm(n),
                        E !== null && (b.data = E)))),
                (E = aw ? lw(e, n) : uw(e, n)) && (u = oo(u, "onBeforeInput"),
                    0 < u.length && (c = new Qd("onBeforeInput", "beforeinput", null, n, c),
                        d.push({
                            event: c,
                            listeners: u
                        }),
                        c.data = E))
        }
        pm(d, t)
    })
}
function Ni(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function oo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e
            , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
            s = Ti(e, n),
            s != null && r.unshift(Ni(e, s, i)),
            s = Ti(e, t),
            s != null && r.push(Ni(e, s, i))),
            e = e.return
    }
    return r
}
function sr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function cf(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var l = n
            , a = l.alternate
            , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
            i ? (a = Ti(n, s),
                a != null && o.unshift(Ni(n, a, l))) : i || (a = Ti(n, s),
                    a != null && o.push(Ni(n, a, l)))),
            n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Ew = /\r\n?/g
    , Tw = /\u0000|\uFFFD/g;
function df(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ew, `
`).replace(Tw, "")
}
function ys(e, t, n) {
    if (t = df(t),
        df(e) !== t && n)
        throw Error(O(425))
}
function ao() { }
var tu = null
    , nu = null;
function ru(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var iu = typeof setTimeout == "function" ? setTimeout : void 0
    , bw = typeof clearTimeout == "function" ? clearTimeout : void 0
    , ff = typeof Promise == "function" ? Promise : void 0
    , Pw = typeof queueMicrotask == "function" ? queueMicrotask : typeof ff < "u" ? function(e) {
        return ff.resolve(null).then(e).catch(Cw)
    }
        : iu;
function Cw(e) {
    setTimeout(function() {
        throw e
    })
}
function Qa(e, t) {
    var n = t
        , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
            i && i.nodeType === 8)
            if (n = i.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                        Ci(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Ci(t)
}
function un(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function pf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Vr = Math.random().toString(36).slice(2)
    , ft = "__reactFiber$" + Vr
    , Ri = "__reactProps$" + Vr
    , Mt = "__reactContainer$" + Vr
    , su = "__reactEvents$" + Vr
    , kw = "__reactListeners$" + Vr
    , Iw = "__reactHandles$" + Vr;
function Ln(e) {
    var t = e[ft];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Mt] || n[ft]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = pf(e); e !== null;) {
                    if (n = e[ft])
                        return n;
                    e = pf(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function Xi(e) {
    return e = e[ft] || e[Mt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function pr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(O(33))
}
function Ko(e) {
    return e[Ri] || null
}
var ou = []
    , hr = -1;
function Pn(e) {
    return {
        current: e
    }
}
function K(e) {
    0 > hr || (e.current = ou[hr],
        ou[hr] = null,
        hr--)
}
function G(e, t) {
    hr++,
        ou[hr] = e.current,
        e.current = t
}
var xn = {}
    , _e = Pn(xn)
    , Ne = Pn(!1)
    , Vn = xn;
function Nr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = i),
        i
}
function Re(e) {
    return e = e.childContextTypes,
        e != null
}
function lo() {
    K(Ne),
        K(_e)
}
function hf(e, t, n) {
    if (_e.current !== xn)
        throw Error(O(168));
    G(_e, t),
        G(Ne, n)
}
function mm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(O(108, p0(e) || "Unknown", i));
    return te({}, n, r)
}
function uo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn,
        Vn = _e.current,
        G(_e, e),
        G(Ne, Ne.current),
        !0
}
function mf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (e = mm(e, t, Vn),
        r.__reactInternalMemoizedMergedChildContext = e,
        K(Ne),
        K(_e),
        G(_e, e)) : K(Ne),
        G(Ne, n)
}
var Ct = null
    , Xo = !1
    , Ja = !1;
function gm(e) {
    Ct === null ? Ct = [e] : Ct.push(e)
}
function Ow(e) {
    Xo = !0,
        gm(e)
}
function Cn() {
    if (!Ja && Ct !== null) {
        Ja = !0;
        var e = 0
            , t = F;
        try {
            var n = Ct;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ct = null,
                Xo = !1
        } catch (i) {
            throw Ct !== null && (Ct = Ct.slice(e + 1)),
            Fh(sc, Cn),
            i
        } finally {
            F = t,
                Ja = !1
        }
    }
    return null
}
var mr = []
    , gr = 0
    , co = null
    , fo = 0
    , Ke = []
    , Xe = 0
    , Hn = null
    , It = 1
    , Ot = "";
function On(e, t) {
    mr[gr++] = fo,
        mr[gr++] = co,
        co = e,
        fo = t
}
function vm(e, t, n) {
    Ke[Xe++] = It,
        Ke[Xe++] = Ot,
        Ke[Xe++] = Hn,
        Hn = e;
    var r = It;
    e = Ot;
    var i = 32 - at(r) - 1;
    r &= ~(1 << i),
        n += 1;
    var s = 32 - at(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
            r >>= o,
            i -= o,
            It = 1 << 32 - at(t) + i | n << i | r,
            Ot = s + e
    } else
        It = 1 << s | n << i | r,
            Ot = e
}
function hc(e) {
    e.return !== null && (On(e, 1),
        vm(e, 1, 0))
}
function mc(e) {
    for (; e === co;)
        co = mr[--gr],
            mr[gr] = null,
            fo = mr[--gr],
            mr[gr] = null;
    for (; e === Hn;)
        Hn = Ke[--Xe],
            Ke[Xe] = null,
            Ot = Ke[--Xe],
            Ke[Xe] = null,
            It = Ke[--Xe],
            Ke[Xe] = null
}
var Ue = null
    , Me = null
    , J = !1
    , st = null;
function ym(e, t) {
    var n = Ye(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function gf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    Ue = e,
                    Me = un(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    Ue = e,
                    Me = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = Hn !== null ? {
                    id: It,
                    overflow: Ot
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = Ye(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    Ue = e,
                    Me = null,
                    !0) : !1;
        default:
            return !1
    }
}
function au(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function lu(e) {
    if (J) {
        var t = Me;
        if (t) {
            var n = t;
            if (!gf(e, t)) {
                if (au(e))
                    throw Error(O(418));
                t = un(n.nextSibling);
                var r = Ue;
                t && gf(e, t) ? ym(r, n) : (e.flags = e.flags & -4097 | 2,
                    J = !1,
                    Ue = e)
            }
        } else {
            if (au(e))
                throw Error(O(418));
            e.flags = e.flags & -4097 | 2,
                J = !1,
                Ue = e
        }
    }
}
function vf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    Ue = e
}
function ws(e) {
    if (e !== Ue)
        return !1;
    if (!J)
        return vf(e),
            J = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ru(e.type, e.memoizedProps)),
        t && (t = Me)) {
        if (au(e))
            throw wm(),
            Error(O(418));
        for (; t;)
            ym(e, t),
                t = un(t.nextSibling)
    }
    if (vf(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(O(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Me = un(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Me = null
        }
    } else
        Me = Ue ? un(e.stateNode.nextSibling) : null;
    return !0
}
function wm() {
    for (var e = Me; e;)
        e = un(e.nextSibling)
}
function Rr() {
    Me = Ue = null,
        J = !1
}
function gc(e) {
    st === null ? st = [e] : st.push(e)
}
var Nw = Ft.ReactCurrentBatchConfig;
function rt(e, t) {
    if (e && e.defaultProps) {
        t = te({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var po = Pn(null)
    , ho = null
    , vr = null
    , vc = null;
function yc() {
    vc = vr = ho = null
}
function wc(e) {
    var t = po.current;
    K(po),
        e._currentValue = t
}
function uu(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Tr(e, t) {
    ho = e,
        vc = vr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0),
            e.firstContext = null)
}
function Je(e) {
    var t = e._currentValue;
    if (vc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            vr === null) {
            if (ho === null)
                throw Error(O(308));
            vr = e,
                ho.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            vr = vr.next = e;
    return t
}
var jn = null;
function Sc(e) {
    jn === null ? jn = [e] : jn.push(e)
}
function Sm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
        Sc(t)) : (n.next = i.next,
            i.next = n),
        t.interleaved = n,
        Dt(e, r)
}
function Dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qt = !1;
function _c(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function _m(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function At(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        $ & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            Dt(e, n)
    }
    return i = r.interleaved,
        i === null ? (t.next = t,
            Sc(r)) : (t.next = i.next,
                i.next = t),
        r.interleaved = t,
        Dt(e, n)
}
function js(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            oc(e, n)
    }
}
function yf(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var i = null
            , s = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                    n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function mo(e, t, n, r) {
    var i = e.updateQueue;
    qt = !1;
    var s = i.firstBaseUpdate
        , o = i.lastBaseUpdate
        , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
            , u = a.next;
        a.next = null,
            o === null ? s = u : o.next = u,
            o = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
            l = c.lastBaseUpdate,
            l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u,
                c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
            c = u = a = null,
            l = s;
        do {
            var f = l.lane
                , m = l.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e
                        , y = l;
                    switch (f = t,
                    m = n,
                    y.tag) {
                        case 1:
                            if (w = y.payload,
                                typeof w == "function") {
                                d = w.call(m, d, f);
                                break e
                            }
                            d = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = y.payload,
                                f = typeof w == "function" ? w.call(m, d, f) : w,
                                f == null)
                                break e;
                            d = te({}, d, f);
                            break e;
                        case 2:
                            qt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                    f = i.effects,
                    f === null ? i.effects = [l] : f.push(l))
            } else
                m = {
                    eventTime: m,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                    c === null ? (u = c = m,
                        a = d) : c = c.next = m,
                    o |= f;
            if (l = l.next,
                l === null) {
                if (l = i.shared.pending,
                    l === null)
                    break;
                f = l,
                    l = f.next,
                    f.next = null,
                    i.lastBaseUpdate = f,
                    i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = d),
            i.baseState = a,
            i.firstBaseUpdate = u,
            i.lastBaseUpdate = c,
            t = i.shared.interleaved,
            t !== null) {
            i = t;
            do
                o |= i.lane,
                    i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Gn |= o,
            e.lanes = o,
            e.memoizedState = d
    }
}
function wf(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                    r = n,
                    typeof i != "function")
                    throw Error(O(191, i));
                i.call(r)
            }
        }
}
var xm = new Sh.Component().refs;
function cu(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : te({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Yo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? tr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = be()
            , i = fn(e)
            , s = At(r, i);
        s.payload = t,
            n != null && (s.callback = n),
            t = cn(e, s, i),
            t !== null && (lt(t, e, i, r),
                js(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = be()
            , i = fn(e)
            , s = At(r, i);
        s.tag = 1,
            s.payload = t,
            n != null && (s.callback = n),
            t = cn(e, s, i),
            t !== null && (lt(t, e, i, r),
                js(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = be()
            , r = fn(e)
            , i = At(n, r);
        i.tag = 2,
            t != null && (i.callback = t),
            t = cn(e, i, r),
            t !== null && (lt(t, e, r, n),
                js(t, e, r))
    }
};
function Sf(e, t, n, r, i, s, o) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Ii(n, r) || !Ii(i, s) : !0
}
function Em(e, t, n) {
    var r = !1
        , i = xn
        , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Je(s) : (i = Re(t) ? Vn : _e.current,
        r = t.contextTypes,
        s = (r = r != null) ? Nr(e, i) : xn),
        t = new t(n, s),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = Yo,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = i,
            e.__reactInternalMemoizedMaskedChildContext = s),
        t
}
function _f(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Yo.enqueueReplaceState(t, t.state, null)
}
function du(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
        i.state = e.memoizedState,
        i.refs = xm,
        _c(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Je(s) : (s = Re(t) ? Vn : _e.current,
        i.context = Nr(e, s)),
        i.state = e.memoizedState,
        s = t.getDerivedStateFromProps,
        typeof s == "function" && (cu(e, t, s, n),
            i.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && Yo.enqueueReplaceState(i, i.state, null),
            mo(e, n, i, r),
            i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function ti(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, e));
            var i = r
                , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                l === xm && (l = i.refs = {}),
                    o === null ? delete l[s] : l[s] = o
            }
                ,
                t._stringRef = s,
                t)
        }
        if (typeof e != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, e))
    }
    return e
}
function Ss(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function xf(e) {
    var t = e._init;
    return t(e._payload)
}
function Tm(e) {
    function t(p, h) {
        if (e) {
            var v = p.deletions;
            v === null ? (p.deletions = [h],
                p.flags |= 16) : v.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null;)
            t(p, h),
                h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null;)
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
                h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = pn(p, h),
            p.index = 0,
            p.sibling = null,
            p
    }
    function s(p, h, v) {
        return p.index = v,
            e ? (v = p.alternate,
                v !== null ? (v = v.index,
                    v < h ? (p.flags |= 2,
                        h) : v) : (p.flags |= 2,
                            h)) : (p.flags |= 1048576,
                                h)
    }
    function o(p) {
        return e && p.alternate === null && (p.flags |= 2),
            p
    }
    function l(p, h, v, S) {
        return h === null || h.tag !== 6 ? (h = sl(v, p.mode, S),
            h.return = p,
            h) : (h = i(h, v),
                h.return = p,
                h)
    }
    function a(p, h, v, S) {
        var x = v.type;
        return x === ur ? c(p, h, v.props.children, S, v.key) : h !== null && (h.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Gt && xf(x) === h.type) ? (S = i(h, v.props),
            S.ref = ti(p, h, v),
            S.return = p,
            S) : (S = Fs(v.type, v.key, v.props, null, p.mode, S),
                S.ref = ti(p, h, v),
                S.return = p,
                S)
    }
    function u(p, h, v, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = ol(v, p.mode, S),
            h.return = p,
            h) : (h = i(h, v.children || []),
                h.return = p,
                h)
    }
    function c(p, h, v, S, x) {
        return h === null || h.tag !== 7 ? (h = zn(v, p.mode, S, x),
            h.return = p,
            h) : (h = i(h, v),
                h.return = p,
                h)
    }
    function d(p, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = sl("" + h, p.mode, v),
                h.return = p,
                h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case us:
                    return v = Fs(h.type, h.key, h.props, null, p.mode, v),
                        v.ref = ti(p, null, h),
                        v.return = p,
                        v;
                case lr:
                    return h = ol(h, p.mode, v),
                        h.return = p,
                        h;
                case Gt:
                    var S = h._init;
                    return d(p, S(h._payload), v)
            }
            if (oi(h) || Yr(h))
                return h = zn(h, p.mode, v, null),
                    h.return = p,
                    h;
            Ss(p, h)
        }
        return null
    }
    function f(p, h, v, S) {
        var x = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return x !== null ? null : l(p, h, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case us:
                    return v.key === x ? a(p, h, v, S) : null;
                case lr:
                    return v.key === x ? u(p, h, v, S) : null;
                case Gt:
                    return x = v._init,
                        f(p, h, x(v._payload), S)
            }
            if (oi(v) || Yr(v))
                return x !== null ? null : c(p, h, v, S, null);
            Ss(p, v)
        }
        return null
    }
    function m(p, h, v, S, x) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return p = p.get(v) || null,
                l(h, p, "" + S, x);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case us:
                    return p = p.get(S.key === null ? v : S.key) || null,
                        a(h, p, S, x);
                case lr:
                    return p = p.get(S.key === null ? v : S.key) || null,
                        u(h, p, S, x);
                case Gt:
                    var C = S._init;
                    return m(p, h, v, C(S._payload), x)
            }
            if (oi(S) || Yr(S))
                return p = p.get(v) || null,
                    c(h, p, S, x, null);
            Ss(h, S)
        }
        return null
    }
    function w(p, h, v, S) {
        for (var x = null, C = null, E = h, b = h = 0, P = null; E !== null && b < v.length; b++) {
            E.index > b ? (P = E,
                E = null) : P = E.sibling;
            var A = f(p, E, v[b], S);
            if (A === null) {
                E === null && (E = P);
                break
            }
            e && E && A.alternate === null && t(p, E),
                h = s(A, h, b),
                C === null ? x = A : C.sibling = A,
                C = A,
                E = P
        }
        if (b === v.length)
            return n(p, E),
                J && On(p, b),
                x;
        if (E === null) {
            for (; b < v.length; b++)
                E = d(p, v[b], S),
                    E !== null && (h = s(E, h, b),
                        C === null ? x = E : C.sibling = E,
                        C = E);
            return J && On(p, b),
                x
        }
        for (E = r(p, E); b < v.length; b++)
            P = m(E, p, b, v[b], S),
                P !== null && (e && P.alternate !== null && E.delete(P.key === null ? b : P.key),
                    h = s(P, h, b),
                    C === null ? x = P : C.sibling = P,
                    C = P);
        return e && E.forEach(function(k) {
            return t(p, k)
        }),
            J && On(p, b),
            x
    }
    function y(p, h, v, S) {
        var x = Yr(v);
        if (typeof x != "function")
            throw Error(O(150));
        if (v = x.call(v),
            v == null)
            throw Error(O(151));
        for (var C = x = null, E = h, b = h = 0, P = null, A = v.next(); E !== null && !A.done; b++,
            A = v.next()) {
            E.index > b ? (P = E,
                E = null) : P = E.sibling;
            var k = f(p, E, A.value, S);
            if (k === null) {
                E === null && (E = P);
                break
            }
            e && E && k.alternate === null && t(p, E),
                h = s(k, h, b),
                C === null ? x = k : C.sibling = k,
                C = k,
                E = P
        }
        if (A.done)
            return n(p, E),
                J && On(p, b),
                x;
        if (E === null) {
            for (; !A.done; b++,
                A = v.next())
                A = d(p, A.value, S),
                    A !== null && (h = s(A, h, b),
                        C === null ? x = A : C.sibling = A,
                        C = A);
            return J && On(p, b),
                x
        }
        for (E = r(p, E); !A.done; b++,
            A = v.next())
            A = m(E, p, b, A.value, S),
                A !== null && (e && A.alternate !== null && E.delete(A.key === null ? b : A.key),
                    h = s(A, h, b),
                    C === null ? x = A : C.sibling = A,
                    C = A);
        return e && E.forEach(function(I) {
            return t(p, I)
        }),
            J && On(p, b),
            x
    }
    function _(p, h, v, S) {
        if (typeof v == "object" && v !== null && v.type === ur && v.key === null && (v = v.props.children),
            typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case us:
                    e: {
                        for (var x = v.key, C = h; C !== null;) {
                            if (C.key === x) {
                                if (x = v.type,
                                    x === ur) {
                                    if (C.tag === 7) {
                                        n(p, C.sibling),
                                            h = i(C, v.props.children),
                                            h.return = p,
                                            p = h;
                                        break e
                                    }
                                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Gt && xf(x) === C.type) {
                                    n(p, C.sibling),
                                        h = i(C, v.props),
                                        h.ref = ti(p, C, v),
                                        h.return = p,
                                        p = h;
                                    break e
                                }
                                n(p, C);
                                break
                            } else
                                t(p, C);
                            C = C.sibling
                        }
                        v.type === ur ? (h = zn(v.props.children, p.mode, S, v.key),
                            h.return = p,
                            p = h) : (S = Fs(v.type, v.key, v.props, null, p.mode, S),
                                S.ref = ti(p, h, v),
                                S.return = p,
                                p = S)
                    }
                    return o(p);
                case lr:
                    e: {
                        for (C = v.key; h !== null;) {
                            if (h.key === C)
                                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                    n(p, h.sibling),
                                        h = i(h, v.children || []),
                                        h.return = p,
                                        p = h;
                                    break e
                                } else {
                                    n(p, h);
                                    break
                                }
                            else
                                t(p, h);
                            h = h.sibling
                        }
                        h = ol(v, p.mode, S),
                            h.return = p,
                            p = h
                    }
                    return o(p);
                case Gt:
                    return C = v._init,
                        _(p, h, C(v._payload), S)
            }
            if (oi(v))
                return w(p, h, v, S);
            if (Yr(v))
                return y(p, h, v, S);
            Ss(p, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
            h !== null && h.tag === 6 ? (n(p, h.sibling),
                h = i(h, v),
                h.return = p,
                p = h) : (n(p, h),
                    h = sl(v, p.mode, S),
                    h.return = p,
                    p = h),
            o(p)) : n(p, h)
    }
    return _
}
var Ar = Tm(!0)
    , bm = Tm(!1)
    , Yi = {}
    , gt = Pn(Yi)
    , Ai = Pn(Yi)
    , Li = Pn(Yi);
function Mn(e) {
    if (e === Yi)
        throw Error(O(174));
    return e
}
function xc(e, t) {
    switch (G(Li, t),
    G(Ai, e),
    G(gt, Yi),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = Vl(t, e)
    }
    K(gt),
        G(gt, t)
}
function Lr() {
    K(gt),
        K(Ai),
        K(Li)
}
function Pm(e) {
    Mn(Li.current);
    var t = Mn(gt.current)
        , n = Vl(t, e.type);
    t !== n && (G(Ai, e),
        G(gt, n))
}
function Ec(e) {
    Ai.current === e && (K(gt),
        K(Ai))
}
var Z = Pn(0);
function go(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var Za = [];
function Tc() {
    for (var e = 0; e < Za.length; e++)
        Za[e]._workInProgressVersionPrimary = null;
    Za.length = 0
}
var Ms = Ft.ReactCurrentDispatcher
    , el = Ft.ReactCurrentBatchConfig
    , Wn = 0
    , ee = null
    , le = null
    , ce = null
    , vo = !1
    , mi = !1
    , ji = 0
    , Rw = 0;
function ge() {
    throw Error(O(321))
}
function bc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ut(e[n], t[n]))
            return !1;
    return !0
}
function Pc(e, t, n, r, i, s) {
    if (Wn = s,
        ee = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Ms.current = e === null || e.memoizedState === null ? Mw : Dw,
        e = n(r, i),
        mi) {
        s = 0;
        do {
            if (mi = !1,
                ji = 0,
                25 <= s)
                throw Error(O(301));
            s += 1,
                ce = le = null,
                t.updateQueue = null,
                Ms.current = Uw,
                e = n(r, i)
        } while (mi)
    }
    if (Ms.current = yo,
        t = le !== null && le.next !== null,
        Wn = 0,
        ce = le = ee = null,
        vo = !1,
        t)
        throw Error(O(300));
    return e
}
function Cc() {
    var e = ji !== 0;
    return ji = 0,
        e
}
function dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ce === null ? ee.memoizedState = ce = e : ce = ce.next = e,
        ce
}
function Ze() {
    if (le === null) {
        var e = ee.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = le.next;
    var t = ce === null ? ee.memoizedState : ce.next;
    if (t !== null)
        ce = t,
            le = e;
    else {
        if (e === null)
            throw Error(O(310));
        le = e,
            e = {
                memoizedState: le.memoizedState,
                baseState: le.baseState,
                baseQueue: le.baseQueue,
                queue: le.queue,
                next: null
            },
            ce === null ? ee.memoizedState = ce = e : ce = ce.next = e
    }
    return ce
}
function Mi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function tl(e) {
    var t = Ze()
        , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = le
        , i = r.baseQueue
        , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
                s.next = o
        }
        r.baseQueue = i = s,
            n.pending = null
    }
    if (i !== null) {
        s = i.next,
            r = r.baseState;
        var l = o = null
            , a = null
            , u = s;
        do {
            var c = u.lane;
            if ((Wn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                    o = r) : a = a.next = d,
                    ee.lanes |= c,
                    Gn |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l,
            ut(r, t.memoizedState) || (Oe = !0),
            t.memoizedState = r,
            t.baseState = o,
            t.baseQueue = a,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        i = e;
        do
            s = i.lane,
                ee.lanes |= s,
                Gn |= s,
                i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function nl(e) {
    var t = Ze()
        , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , i = n.pending
        , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
                o = o.next;
        while (o !== i);
        ut(s, t.memoizedState) || (Oe = !0),
            t.memoizedState = s,
            t.baseQueue === null && (t.baseState = s),
            n.lastRenderedState = s
    }
    return [s, r]
}
function Cm() { }
function km(e, t) {
    var n = ee
        , r = Ze()
        , i = t()
        , s = !ut(r.memoizedState, i);
    if (s && (r.memoizedState = i,
        Oe = !0),
        r = r.queue,
        kc(Nm.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || s || ce !== null && ce.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            Di(9, Om.bind(null, n, r, i, t), void 0, null),
            de === null)
            throw Error(O(349));
        Wn & 30 || Im(n, t, i)
    }
    return i
}
function Im(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = ee.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ee.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function Om(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        Rm(t) && Am(e)
}
function Nm(e, t, n) {
    return n(function() {
        Rm(t) && Am(e)
    })
}
function Rm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ut(e, n)
    } catch {
        return !0
    }
}
function Am(e) {
    var t = Dt(e, 1);
    t !== null && lt(t, e, 1, -1)
}
function Ef(e) {
    var t = dt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Mi,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = jw.bind(null, ee, e),
        [t.memoizedState, e]
}
function Di(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = ee.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ee.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function Lm() {
    return Ze().memoizedState
}
function Ds(e, t, n, r) {
    var i = dt();
    ee.flags |= e,
        i.memoizedState = Di(1 | t, n, void 0, r === void 0 ? null : r)
}
function Qo(e, t, n, r) {
    var i = Ze();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (le !== null) {
        var o = le.memoizedState;
        if (s = o.destroy,
            r !== null && bc(r, o.deps)) {
            i.memoizedState = Di(t, n, s, r);
            return
        }
    }
    ee.flags |= e,
        i.memoizedState = Di(1 | t, n, s, r)
}
function Tf(e, t) {
    return Ds(8390656, 8, e, t)
}
function kc(e, t) {
    return Qo(2048, 8, e, t)
}
function jm(e, t) {
    return Qo(4, 2, e, t)
}
function Mm(e, t) {
    return Qo(4, 4, e, t)
}
function Dm(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
}
function Um(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        Qo(4, 4, Dm.bind(null, t, e), n)
}
function Ic() { }
function zm(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function $m(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && bc(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function Fm(e, t, n) {
    return Wn & 21 ? (ut(n, t) || (n = Hh(),
        ee.lanes |= n,
        Gn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            Oe = !0),
            e.memoizedState = n)
}
function Aw(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = el.transition;
    el.transition = {};
    try {
        e(!1),
            t()
    } finally {
        F = n,
            el.transition = r
    }
}
function Bm() {
    return Ze().memoizedState
}
function Lw(e, t, n) {
    var r = fn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        Vm(e))
        Hm(t, n);
    else if (n = Sm(e, t, n, r),
        n !== null) {
        var i = be();
        lt(n, e, r, i),
            Wm(n, t, r)
    }
}
function jw(e, t, n) {
    var r = fn(e)
        , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Vm(e))
        Hm(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
            s !== null))
            try {
                var o = t.lastRenderedState
                    , l = s(o, n);
                if (i.hasEagerState = !0,
                    i.eagerState = l,
                    ut(l, o)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                        Sc(t)) : (i.next = a.next,
                            a.next = i),
                        t.interleaved = i;
                    return
                }
            } catch { } finally { }
        n = Sm(e, t, i, r),
            n !== null && (i = be(),
                lt(n, e, r, i),
                Wm(n, t, r))
    }
}
function Vm(e) {
    var t = e.alternate;
    return e === ee || t !== null && t === ee
}
function Hm(e, t) {
    mi = vo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function Wm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            oc(e, n)
    }
}
var yo = {
    readContext: Je,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1
}
    , Mw = {
        readContext: Je,
        useCallback: function(e, t) {
            return dt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Je,
        useEffect: Tf,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                Ds(4194308, 4, Dm.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ds(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ds(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = dt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function(e, t, n) {
            var r = dt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = Lw.bind(null, ee, e),
                [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = dt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: Ef,
        useDebugValue: Ic,
        useDeferredValue: function(e) {
            return dt().memoizedState = e
        },
        useTransition: function() {
            var e = Ef(!1)
                , t = e[0];
            return e = Aw.bind(null, e[1]),
                dt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function() { },
        useSyncExternalStore: function(e, t, n) {
            var r = ee
                , i = dt();
            if (J) {
                if (n === void 0)
                    throw Error(O(407));
                n = n()
            } else {
                if (n = t(),
                    de === null)
                    throw Error(O(349));
                Wn & 30 || Im(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s,
                Tf(Nm.bind(null, r, s, e), [e]),
                r.flags |= 2048,
                Di(9, Om.bind(null, r, s, n, t), void 0, null),
                n
        },
        useId: function() {
            var e = dt()
                , t = de.identifierPrefix;
            if (J) {
                var n = Ot
                    , r = It;
                n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = ji++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = Rw++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , Dw = {
        readContext: Je,
        useCallback: zm,
        useContext: Je,
        useEffect: kc,
        useImperativeHandle: Um,
        useInsertionEffect: jm,
        useLayoutEffect: Mm,
        useMemo: $m,
        useReducer: tl,
        useRef: Lm,
        useState: function() {
            return tl(Mi)
        },
        useDebugValue: Ic,
        useDeferredValue: function(e) {
            var t = Ze();
            return Fm(t, le.memoizedState, e)
        },
        useTransition: function() {
            var e = tl(Mi)[0]
                , t = Ze().memoizedState;
            return [e, t]
        },
        useMutableSource: Cm,
        useSyncExternalStore: km,
        useId: Bm,
        unstable_isNewReconciler: !1
    }
    , Uw = {
        readContext: Je,
        useCallback: zm,
        useContext: Je,
        useEffect: kc,
        useImperativeHandle: Um,
        useInsertionEffect: jm,
        useLayoutEffect: Mm,
        useMemo: $m,
        useReducer: nl,
        useRef: Lm,
        useState: function() {
            return nl(Mi)
        },
        useDebugValue: Ic,
        useDeferredValue: function(e) {
            var t = Ze();
            return le === null ? t.memoizedState = e : Fm(t, le.memoizedState, e)
        },
        useTransition: function() {
            var e = nl(Mi)[0]
                , t = Ze().memoizedState;
            return [e, t]
        },
        useMutableSource: Cm,
        useSyncExternalStore: km,
        useId: Bm,
        unstable_isNewReconciler: !1
    };
function jr(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += f0(r),
                r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function rl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function fu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var zw = typeof WeakMap == "function" ? WeakMap : Map;
function Gm(e, t, n) {
    n = At(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function() {
        So || (So = !0,
            xu = r),
            fu(e, t)
    }
        ,
        n
}
function qm(e, t, n) {
    n = At(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
            ,
            n.callback = function() {
                fu(e, t)
            }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        fu(e, t),
            typeof r != "function" && (dn === null ? dn = new Set([this]) : dn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
        n
}
function bf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zw;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
            i === void 0 && (i = new Set,
                r.set(t, i));
    i.has(n) || (i.add(n),
        e = Zw.bind(null, e, t, n),
        t.then(e, e))
}
function Pf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Cf(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = i,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1),
                t.tag = 2,
                cn(n, t, 1))),
            n.lanes |= 1),
            e)
}
var $w = Ft.ReactCurrentOwner
    , Oe = !1;
function Te(e, t, n, r) {
    t.child = e === null ? bm(t, null, n, r) : Ar(t, e.child, n, r)
}
function kf(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Tr(t, i),
        r = Pc(e, t, n, r, s, i),
        n = Cc(),
        e !== null && !Oe ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            Ut(e, t, i)) : (J && n && hc(t),
                t.flags |= 1,
                Te(e, t, r, i),
                t.child)
}
function If(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Dc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = s,
            Km(e, t, s, r, i)) : (e = Fs(n.type, null, r, t, t.mode, i),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (s = e.child,
        !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Ii,
            n(o, r) && e.ref === t.ref)
            return Ut(e, t, i)
    }
    return t.flags |= 1,
        e = pn(s, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function Km(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Ii(s, r) && e.ref === t.ref)
            if (Oe = !1,
                t.pendingProps = r = s,
                (e.lanes & i) !== 0)
                e.flags & 131072 && (Oe = !0);
            else
                return t.lanes = e.lanes,
                    Ut(e, t, i)
    }
    return pu(e, t, n, r, i)
}
function Xm(e, t, n) {
    var r = t.pendingProps
        , i = r.children
        , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                G(wr, Le),
                Le |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    G(wr, Le),
                    Le |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = s !== null ? s.baseLanes : n,
                G(wr, Le),
                Le |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
            t.memoizedState = null) : r = n,
            G(wr, Le),
            Le |= r;
    return Te(e, t, i, n),
        t.child
}
function Ym(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function pu(e, t, n, r, i) {
    var s = Re(n) ? Vn : _e.current;
    return s = Nr(t, s),
        Tr(t, i),
        n = Pc(e, t, n, r, s, i),
        r = Cc(),
        e !== null && !Oe ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            Ut(e, t, i)) : (J && r && hc(t),
                t.flags |= 1,
                Te(e, t, n, i),
                t.child)
}
function Of(e, t, n, r, i) {
    if (Re(n)) {
        var s = !0;
        uo(t)
    } else
        s = !1;
    if (Tr(t, i),
        t.stateNode === null)
        Us(e, t),
            Em(t, n, r),
            du(t, n, r, i),
            r = !0;
    else if (e === null) {
        var o = t.stateNode
            , l = t.memoizedProps;
        o.props = l;
        var a = o.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = Je(u) : (u = Re(n) ? Vn : _e.current,
            u = Nr(t, u));
        var c = n.getDerivedStateFromProps
            , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && _f(t, o, r, u),
            qt = !1;
        var f = t.memoizedState;
        o.state = f,
            mo(t, r, o, i),
            a = t.memoizedState,
            l !== r || f !== a || Ne.current || qt ? (typeof c == "function" && (cu(t, n, c, r),
                a = t.memoizedState),
                (l = qt || Sf(t, n, l, r, f, a, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                    typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = a),
                o.props = r,
                o.state = a,
                o.context = u,
                r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        o = t.stateNode,
            _m(e, t),
            l = t.memoizedProps,
            u = t.type === t.elementType ? l : rt(t.type, l),
            o.props = u,
            d = t.pendingProps,
            f = o.context,
            a = n.contextType,
            typeof a == "object" && a !== null ? a = Je(a) : (a = Re(n) ? Vn : _e.current,
                a = Nr(t, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== d || f !== a) && _f(t, o, r, a),
            qt = !1,
            f = t.memoizedState,
            o.state = f,
            mo(t, r, o, i);
        var w = t.memoizedState;
        l !== d || f !== w || Ne.current || qt ? (typeof m == "function" && (cu(t, n, m, r),
            w = t.memoizedState),
            (u = qt || Sf(t, n, u, r, f, w, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, a),
                typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, a)),
                typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = w),
            o.props = r,
            o.state = w,
            o.context = a,
            r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return hu(e, t, n, r, s, i)
}
function hu(e, t, n, r, i, s) {
    Ym(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && mf(t, n, !1),
            Ut(e, t, s);
    r = t.stateNode,
        $w.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && o ? (t.child = Ar(t, e.child, null, s),
            t.child = Ar(t, null, l, s)) : Te(e, t, l, s),
        t.memoizedState = r.state,
        i && mf(t, n, !0),
        t.child
}
function Qm(e) {
    var t = e.stateNode;
    t.pendingContext ? hf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hf(e, t.context, !1),
        xc(e, t.containerInfo)
}
function Nf(e, t, n, r, i) {
    return Rr(),
        gc(i),
        t.flags |= 256,
        Te(e, t, n, r),
        t.child
}
var mu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function gu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Jm(e, t, n) {
    var r = t.pendingProps, i = Z.current, s = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        l ? (s = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
        G(Z, i & 1),
        e === null)
        return lu(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (o = r.children,
                        e = r.fallback,
                        s ? (r = t.mode,
                            s = t.child,
                            o = {
                                mode: "hidden",
                                children: o
                            },
                            !(r & 1) && s !== null ? (s.childLanes = 0,
                                s.pendingProps = o) : s = ea(o, r, 0, null),
                            e = zn(e, r, n, null),
                            s.return = t,
                            e.return = t,
                            s.sibling = e,
                            t.child = s,
                            t.child.memoizedState = gu(n),
                            t.memoizedState = mu,
                            e) : Oc(t, o));
    if (i = e.memoizedState,
        i !== null && (l = i.dehydrated,
            l !== null))
        return Fw(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback,
            o = t.mode,
            i = e.child,
            l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = a,
            t.deletions = null) : (r = pn(i, a),
                r.subtreeFlags = i.subtreeFlags & 14680064),
            l !== null ? s = pn(l, s) : (s = zn(s, o, n, null),
                s.flags |= 2),
            s.return = t,
            r.return = t,
            r.sibling = s,
            t.child = r,
            r = s,
            s = t.child,
            o = e.child.memoizedState,
            o = o === null ? gu(n) : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions
            },
            s.memoizedState = o,
            s.childLanes = e.childLanes & ~n,
            t.memoizedState = mu,
            r
    }
    return s = e.child,
        e = s.sibling,
        r = pn(s, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function Oc(e, t) {
    return t = ea({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function _s(e, t, n, r) {
    return r !== null && gc(r),
        Ar(t, e.child, null, n),
        e = Oc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function Fw(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = rl(Error(O(422))),
            _s(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (s = r.fallback,
                    i = t.mode,
                    r = ea({
                        mode: "visible",
                        children: r.children
                    }, i, 0, null),
                    s = zn(s, i, o, null),
                    s.flags |= 2,
                    r.return = t,
                    s.return = t,
                    r.sibling = s,
                    t.child = r,
                    t.mode & 1 && Ar(t, e.child, null, o),
                    t.child.memoizedState = gu(o),
                    t.memoizedState = mu,
                    s);
    if (!(t.mode & 1))
        return _s(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
            r)
            var l = r.dgst;
        return r = l,
            s = Error(O(419)),
            r = rl(s, r, void 0),
            _s(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
        Oe || l) {
        if (r = de,
            r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
                i !== 0 && i !== s.retryLane && (s.retryLane = i,
                    Dt(e, i),
                    lt(r, e, i, -1))
        }
        return Mc(),
            r = rl(Error(O(421))),
            _s(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = eS.bind(null, e),
        i._reactRetry = t,
        null) : (e = s.treeContext,
            Me = un(i.nextSibling),
            Ue = t,
            J = !0,
            st = null,
            e !== null && (Ke[Xe++] = It,
                Ke[Xe++] = Ot,
                Ke[Xe++] = Hn,
                It = e.id,
                Ot = e.overflow,
                Hn = t),
            t = Oc(t, r.children),
            t.flags |= 4096,
            t)
}
function Rf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        uu(e.return, t, n)
}
function il(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
        s.rendering = null,
        s.renderingStartTime = 0,
        s.last = r,
        s.tail = n,
        s.tailMode = i)
}
function Zm(e, t, n) {
    var r = t.pendingProps
        , i = r.revealOrder
        , s = r.tail;
    if (Te(e, t, r.children, n),
        r = Z.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Rf(e, n, t);
                else if (e.tag === 19)
                    Rf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (G(Z, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child,
                    i = null; n !== null;)
                    e = n.alternate,
                        e !== null && go(e) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                            n.sibling = null),
                    il(t, !1, i, n, s);
                break;
            case "backwards":
                for (n = null,
                    i = t.child,
                    t.child = null; i !== null;) {
                    if (e = i.alternate,
                        e !== null && go(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                }
                il(t, !0, n, null, s);
                break;
            case "together":
                il(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function Us(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function Ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        Gn |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child,
            n = pn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = pn(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function Bw(e, t, n) {
    switch (t.tag) {
        case 3:
            Qm(t),
                Rr();
            break;
        case 5:
            Pm(t);
            break;
        case 1:
            Re(t.type) && uo(t);
            break;
        case 4:
            xc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , i = t.memoizedProps.value;
            G(po, r._currentValue),
                r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (G(Z, Z.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Jm(e, t, n) : (G(Z, Z.current & 1),
                        e = Ut(e, t, n),
                        e !== null ? e.sibling : null);
            G(Z, Z.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Zm(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
                i !== null && (i.rendering = null,
                    i.tail = null,
                    i.lastEffect = null),
                G(Z, Z.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Xm(e, t, n)
    }
    return Ut(e, t, n)
}
var eg, vu, tg, ng;
eg = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
vu = function() { }
    ;
tg = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
            Mn(gt.current);
        var s = null;
        switch (n) {
            case "input":
                i = zl(e, i),
                    r = zl(e, r),
                    s = [];
                break;
            case "select":
                i = te({}, i, {
                    value: void 0
                }),
                    r = te({}, r, {
                        value: void 0
                    }),
                    s = [];
                break;
            case "textarea":
                i = Bl(e, i),
                    r = Bl(e, r),
                    s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ao)
        }
        Hl(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                            n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
                r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                                n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                                n[o] = a[o])
                    } else
                        n || (s || (s = []),
                            s.push(u, n)),
                            n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                        l = l ? l.__html : void 0,
                        a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xi.hasOwnProperty(u) ? (a != null && u === "onScroll" && q("scroll", e),
                            s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
ng = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function ni(e, t) {
    if (!J)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = e,
                i = i.sibling;
    else
        for (i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function Vw(e, t, n) {
    var r = t.pendingProps;
    switch (mc(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ve(t),
                null;
        case 1:
            return Re(t.type) && lo(),
                ve(t),
                null;
        case 3:
            return r = t.stateNode,
                Lr(),
                K(Ne),
                K(_e),
                Tc(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (ws(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    st !== null && (bu(st),
                        st = null))),
                vu(e, t),
                ve(t),
                null;
        case 5:
            Ec(t);
            var i = Mn(Li.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                tg(e, t, n, r, i),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(O(166));
                    return ve(t),
                        null
                }
                if (e = Mn(gt.current),
                    ws(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var s = t.memoizedProps;
                    switch (r[ft] = t,
                    r[Ri] = s,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            q("cancel", r),
                                q("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            q("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < li.length; i++)
                                q(li[i], r);
                            break;
                        case "source":
                            q("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            q("error", r),
                                q("load", r);
                            break;
                        case "details":
                            q("toggle", r);
                            break;
                        case "input":
                            $d(r, s),
                                q("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            },
                                q("invalid", r);
                            break;
                        case "textarea":
                            Bd(r, s),
                                q("invalid", r)
                    }
                    Hl(n, s),
                        i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ys(r.textContent, l, e),
                                i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ys(r.textContent, l, e),
                                    i = ["children", "" + l]) : xi.hasOwnProperty(o) && l != null && o === "onScroll" && q("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            cs(r),
                                Fd(r, s, !0);
                            break;
                        case "textarea":
                            cs(r),
                                Vd(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = ao)
                    }
                    r = i,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = Ih(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                                is: r.is
                            }) : (e = o.createElement(n),
                                n === "select" && (o = e,
                                    r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                        e[ft] = t,
                        e[Ri] = r,
                        eg(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (o = Wl(n, r),
                        n) {
                            case "dialog":
                                q("cancel", e),
                                    q("close", e),
                                    i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                q("load", e),
                                    i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < li.length; i++)
                                    q(li[i], e);
                                i = r;
                                break;
                            case "source":
                                q("error", e),
                                    i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                q("error", e),
                                    q("load", e),
                                    i = r;
                                break;
                            case "details":
                                q("toggle", e),
                                    i = r;
                                break;
                            case "input":
                                $d(e, r),
                                    i = zl(e, r),
                                    q("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    i = te({}, r, {
                                        value: void 0
                                    }),
                                    q("invalid", e);
                                break;
                            case "textarea":
                                Bd(e, r),
                                    i = Bl(e, r),
                                    q("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Hl(n, i),
                            l = i;
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === "style" ? Rh(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                                    a != null && Oh(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ei(e, a) : typeof a == "number" && Ei(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (xi.hasOwnProperty(s) ? a != null && s === "onScroll" && q("scroll", e) : a != null && ec(e, s, a, o))
                            }
                        switch (n) {
                            case "input":
                                cs(e),
                                    Fd(e, r, !1);
                                break;
                            case "textarea":
                                cs(e),
                                    Vd(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + _n(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    s = r.value,
                                    s != null ? Sr(e, !!r.multiple, s, !1) : r.defaultValue != null && Sr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = ao)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return ve(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                ng(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(O(166));
                if (n = Mn(Li.current),
                    Mn(gt.current),
                    ws(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[ft] = t,
                        (s = r.nodeValue !== n) && (e = Ue,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                ys(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && ys(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    s && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[ft] = t,
                        t.stateNode = r
            }
            return ve(t),
                null;
        case 13:
            if (K(Z),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (J && Me !== null && t.mode & 1 && !(t.flags & 128))
                    wm(),
                        Rr(),
                        t.flags |= 98560,
                        s = !1;
                else if (s = ws(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(O(318));
                        if (s = t.memoizedState,
                            s = s !== null ? s.dehydrated : null,
                            !s)
                            throw Error(O(317));
                        s[ft] = t
                    } else
                        Rr(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    ve(t),
                        s = !1
                } else
                    st !== null && (bu(st),
                        st = null),
                        s = !0;
                if (!s)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : Mc())),
                    t.updateQueue !== null && (t.flags |= 4),
                    ve(t),
                    null);
        case 4:
            return Lr(),
                vu(e, t),
                e === null && Oi(t.stateNode.containerInfo),
                ve(t),
                null;
        case 10:
            return wc(t.type._context),
                ve(t),
                null;
        case 17:
            return Re(t.type) && lo(),
                ve(t),
                null;
        case 19:
            if (K(Z),
                s = t.memoizedState,
                s === null)
                return ve(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                o = s.rendering,
                o === null)
                if (r)
                    ni(s, !1);
                else {
                    if (ue !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = go(e),
                                o !== null) {
                                for (t.flags |= 128,
                                    ni(s, !1),
                                    r = o.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    s = n,
                                        e = r,
                                        s.flags &= 14680066,
                                        o = s.alternate,
                                        o === null ? (s.childLanes = 0,
                                            s.lanes = e,
                                            s.child = null,
                                            s.subtreeFlags = 0,
                                            s.memoizedProps = null,
                                            s.memoizedState = null,
                                            s.updateQueue = null,
                                            s.dependencies = null,
                                            s.stateNode = null) : (s.childLanes = o.childLanes,
                                                s.lanes = o.lanes,
                                                s.child = o.child,
                                                s.subtreeFlags = 0,
                                                s.deletions = null,
                                                s.memoizedProps = o.memoizedProps,
                                                s.memoizedState = o.memoizedState,
                                                s.updateQueue = o.updateQueue,
                                                s.type = o.type,
                                                e = o.dependencies,
                                                s.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return G(Z, Z.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && ie() > Mr && (t.flags |= 128,
                        r = !0,
                        ni(s, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = go(o),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            ni(s, !0),
                            s.tail === null && s.tailMode === "hidden" && !o.alternate && !J)
                            return ve(t),
                                null
                    } else
                        2 * ie() - s.renderingStartTime > Mr && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            ni(s, !1),
                            t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child,
                    t.child = o) : (n = s.last,
                        n !== null ? n.sibling = o : t.child = o,
                        s.last = o)
            }
            return s.tail !== null ? (t = s.tail,
                s.rendering = t,
                s.tail = t.sibling,
                s.renderingStartTime = ie(),
                t.sibling = null,
                n = Z.current,
                G(Z, r ? n & 1 | 2 : n & 1),
                t) : (ve(t),
                    null);
        case 22:
        case 23:
            return jc(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Le & 1073741824 && (ve(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(O(156, t.tag))
}
function Hw(e, t) {
    switch (mc(t),
    t.tag) {
        case 1:
            return Re(t.type) && lo(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return Lr(),
                K(Ne),
                K(_e),
                Tc(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return Ec(t),
                null;
        case 13:
            if (K(Z),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(O(340));
                Rr()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return K(Z),
                null;
        case 4:
            return Lr(),
                null;
        case 10:
            return wc(t.type._context),
                null;
        case 22:
        case 23:
            return jc(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var xs = !1
    , we = !1
    , Ww = typeof WeakSet == "function" ? WeakSet : Set
    , j = null;
function yr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                re(e, t, r)
            }
        else
            n.current = null
}
function yu(e, t, n) {
    try {
        n()
    } catch (r) {
        re(e, t, r)
    }
}
var Af = !1;
function Gw(e, t) {
    if (tu = io,
        e = om(),
        pc(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                        , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                        , l = -1
                        , a = -1
                        , u = 0
                        , c = 0
                        , d = e
                        , f = null;
                    t: for (; ;) {
                        for (var m; d !== n || i !== 0 && d.nodeType !== 3 || (l = o + i),
                            d !== s || r !== 0 && d.nodeType !== 3 || (a = o + r),
                            d.nodeType === 3 && (o += d.nodeValue.length),
                            (m = d.firstChild) !== null;)
                            f = d,
                                d = m;
                        for (; ;) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (l = o),
                                f === s && ++c === r && (a = o),
                                (m = d.nextSibling) !== null)
                                break;
                            d = f,
                                f = d.parentNode
                        }
                        d = m
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (nu = {
        focusedElem: e,
        selectionRange: n
    },
        io = !1,
        j = t; j !== null;)
        if (t = j,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var y = w.memoizedProps
                                        , _ = w.memoizedState
                                        , p = t.stateNode
                                        , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : rt(t.type, y), _);
                                    p.__reactInternalSnapshotBeforeUpdate = h
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(O(163))
                        }
                } catch (S) {
                    re(t, t.return, S)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        j = e;
                    break
                }
                j = t.return
            }
    return w = Af,
        Af = !1,
        w
}
function gi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                    s !== void 0 && yu(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Jo(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function wu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function rg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        rg(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[ft],
                delete t[Ri],
                delete t[su],
                delete t[kw],
                delete t[Iw])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function ig(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Lf(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || ig(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = ao));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Su(e, t, n),
            e = e.sibling; e !== null;)
            Su(e, t, n),
                e = e.sibling
}
function _u(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (_u(e, t, n),
            e = e.sibling; e !== null;)
            _u(e, t, n),
                e = e.sibling
}
var pe = null
    , it = !1;
function Ht(e, t, n) {
    for (n = n.child; n !== null;)
        sg(e, t, n),
            n = n.sibling
}
function sg(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
        try {
            mt.onCommitFiberUnmount(Ho, n)
        } catch { }
    switch (n.tag) {
        case 5:
            we || yr(n, t);
        case 6:
            var r = pe
                , i = it;
            pe = null,
                Ht(e, t, n),
                pe = r,
                it = i,
                pe !== null && (it ? (e = pe,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
            break;
        case 18:
            pe !== null && (it ? (e = pe,
                n = n.stateNode,
                e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n),
                Ci(e)) : Qa(pe, n.stateNode));
            break;
        case 4:
            r = pe,
                i = it,
                pe = n.stateNode.containerInfo,
                it = !0,
                Ht(e, t, n),
                pe = r,
                it = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!we && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                i = r = r.next;
                do {
                    var s = i
                        , o = s.destroy;
                    s = s.tag,
                        o !== void 0 && (s & 2 || s & 4) && yu(n, t, o),
                        i = i.next
                } while (i !== r)
            }
            Ht(e, t, n);
            break;
        case 1:
            if (!we && (yr(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (l) {
                    re(n, t, l)
                }
            Ht(e, t, n);
            break;
        case 21:
            Ht(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (we = (r = we) || n.memoizedState !== null,
                Ht(e, t, n),
                we = r) : Ht(e, t, n);
            break;
        default:
            Ht(e, t, n)
    }
}
function jf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ww),
            t.forEach(function(r) {
                var i = tS.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(i, i))
            })
    }
}
function tt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                    , o = t
                    , l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            pe = l.stateNode,
                                it = !1;
                            break e;
                        case 3:
                            pe = l.stateNode.containerInfo,
                                it = !0;
                            break e;
                        case 4:
                            pe = l.stateNode.containerInfo,
                                it = !0;
                            break e
                    }
                    l = l.return
                }
                if (pe === null)
                    throw Error(O(160));
                sg(s, o, i),
                    pe = null,
                    it = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                    i.return = null
            } catch (u) {
                re(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            og(t, e),
                t = t.sibling
}
function og(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (tt(t, e),
                ct(e),
                r & 4) {
                try {
                    gi(3, e, e.return),
                        Jo(3, e)
                } catch (y) {
                    re(e, e.return, y)
                }
                try {
                    gi(5, e, e.return)
                } catch (y) {
                    re(e, e.return, y)
                }
            }
            break;
        case 1:
            tt(t, e),
                ct(e),
                r & 512 && n !== null && yr(n, n.return);
            break;
        case 5:
            if (tt(t, e),
                ct(e),
                r & 512 && n !== null && yr(n, n.return),
                e.flags & 32) {
                var i = e.stateNode;
                try {
                    Ei(i, "")
                } catch (y) {
                    re(e, e.return, y)
                }
            }
            if (r & 4 && (i = e.stateNode,
                i != null)) {
                var s = e.memoizedProps
                    , o = n !== null ? n.memoizedProps : s
                    , l = e.type
                    , a = e.updateQueue;
                if (e.updateQueue = null,
                    a !== null)
                    try {
                        l === "input" && s.type === "radio" && s.name != null && Ch(i, s),
                            Wl(l, o);
                        var u = Wl(l, s);
                        for (o = 0; o < a.length; o += 2) {
                            var c = a[o]
                                , d = a[o + 1];
                            c === "style" ? Rh(i, d) : c === "dangerouslySetInnerHTML" ? Oh(i, d) : c === "children" ? Ei(i, d) : ec(i, c, d, u)
                        }
                        switch (l) {
                            case "input":
                                $l(i, s);
                                break;
                            case "textarea":
                                kh(i, s);
                                break;
                            case "select":
                                var f = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!s.multiple;
                                var m = s.value;
                                m != null ? Sr(i, !!s.multiple, m, !1) : f !== !!s.multiple && (s.defaultValue != null ? Sr(i, !!s.multiple, s.defaultValue, !0) : Sr(i, !!s.multiple, s.multiple ? [] : "", !1))
                        }
                        i[Ri] = s
                    } catch (y) {
                        re(e, e.return, y)
                    }
            }
            break;
        case 6:
            if (tt(t, e),
                ct(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(O(162));
                i = e.stateNode,
                    s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (y) {
                    re(e, e.return, y)
                }
            }
            break;
        case 3:
            if (tt(t, e),
                ct(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ci(t.containerInfo)
                } catch (y) {
                    re(e, e.return, y)
                }
            break;
        case 4:
            tt(t, e),
                ct(e);
            break;
        case 13:
            tt(t, e),
                ct(e),
                i = e.child,
                i.flags & 8192 && (s = i.memoizedState !== null,
                    i.stateNode.isHidden = s,
                    !s || i.alternate !== null && i.alternate.memoizedState !== null || (Ac = ie())),
                r & 4 && jf(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (we = (u = we) || c,
                    tt(t, e),
                    we = u) : tt(t, e),
                ct(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (j = e,
                        c = e.child; c !== null;) {
                        for (d = j = c; j !== null;) {
                            switch (f = j,
                            m = f.child,
                            f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    gi(4, f, f.return);
                                    break;
                                case 1:
                                    yr(f, f.return);
                                    var w = f.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = f,
                                            n = f.return;
                                        try {
                                            t = r,
                                                w.props = t.memoizedProps,
                                                w.state = t.memoizedState,
                                                w.componentWillUnmount()
                                        } catch (y) {
                                            re(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    yr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Df(d);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = f,
                                j = m) : Df(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode,
                                    u ? (s = i.style,
                                        typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = d.stateNode,
                                            a = d.memoizedProps.style,
                                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                                            l.style.display = Nh("display", o))
                            } catch (y) {
                                re(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (y) {
                                re(e, e.return, y)
                            }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d,
                            d = d.child;
                        continue
                    }
                    if (d === e)
                        break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e)
                            break e;
                        c === d && (c = null),
                            d = d.return
                    }
                    c === d && (c = null),
                        d.sibling.return = d.return,
                        d = d.sibling
                }
            }
            break;
        case 19:
            tt(t, e),
                ct(e),
                r & 4 && jf(e);
            break;
        case 21:
            break;
        default:
            tt(t, e),
                ct(e)
    }
}
function ct(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ig(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Ei(i, ""),
                        r.flags &= -33);
                    var s = Lf(e);
                    _u(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo
                        , l = Lf(e);
                    Su(e, l, o);
                    break;
                default:
                    throw Error(O(161))
            }
        } catch (a) {
            re(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function qw(e, t, n) {
    j = e,
        ag(e)
}
function ag(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var i = j
            , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || xs;
            if (!o) {
                var l = i.alternate
                    , a = l !== null && l.memoizedState !== null || we;
                l = xs;
                var u = we;
                if (xs = o,
                    (we = a) && !u)
                    for (j = i; j !== null;)
                        o = j,
                            a = o.child,
                            o.tag === 22 && o.memoizedState !== null ? Uf(i) : a !== null ? (a.return = o,
                                j = a) : Uf(i);
                for (; s !== null;)
                    j = s,
                        ag(s),
                        s = s.sibling;
                j = i,
                    xs = l,
                    we = u
            }
            Mf(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
                j = s) : Mf(e)
    }
}
function Mf(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            we || Jo(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !we)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var s = t.updateQueue;
                            s !== null && wf(t, s, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                wf(t, o, n)
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Ci(d)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(O(163))
                    }
                we || t.flags & 512 && wu(t)
            } catch (f) {
                re(t, t.return, f)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                j = n;
            break
        }
        j = t.return
    }
}
function Df(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                j = n;
            break
        }
        j = t.return
    }
}
function Uf(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Jo(4, t)
                    } catch (a) {
                        re(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            re(t, i, a)
                        }
                    }
                    var s = t.return;
                    try {
                        wu(t)
                    } catch (a) {
                        re(t, s, a)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        wu(t)
                    } catch (a) {
                        re(t, o, a)
                    }
            }
        } catch (a) {
            re(t, t.return, a)
        }
        if (t === e) {
            j = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
                j = l;
            break
        }
        j = t.return
    }
}
var Kw = Math.ceil
    , wo = Ft.ReactCurrentDispatcher
    , Nc = Ft.ReactCurrentOwner
    , Qe = Ft.ReactCurrentBatchConfig
    , $ = 0
    , de = null
    , ae = null
    , he = 0
    , Le = 0
    , wr = Pn(0)
    , ue = 0
    , Ui = null
    , Gn = 0
    , Zo = 0
    , Rc = 0
    , vi = null
    , Ie = null
    , Ac = 0
    , Mr = 1 / 0
    , Pt = null
    , So = !1
    , xu = null
    , dn = null
    , Es = !1
    , nn = null
    , _o = 0
    , yi = 0
    , Eu = null
    , zs = -1
    , $s = 0;
function be() {
    return $ & 6 ? ie() : zs !== -1 ? zs : zs = ie()
}
function fn(e) {
    return e.mode & 1 ? $ & 2 && he !== 0 ? he & -he : Nw.transition !== null ? ($s === 0 && ($s = Hh()),
        $s) : (e = F,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Qh(e.type)),
            e) : 1
}
function lt(e, t, n, r) {
    if (50 < yi)
        throw yi = 0,
        Eu = null,
        Error(O(185));
    qi(e, n, r),
        (!($ & 2) || e !== de) && (e === de && (!($ & 2) && (Zo |= n),
            ue === 4 && Xt(e, he)),
            Ae(e, r),
            n === 1 && $ === 0 && !(t.mode & 1) && (Mr = ie() + 500,
                Xo && Cn()))
}
function Ae(e, t) {
    var n = e.callbackNode;
    N0(e, t);
    var r = ro(e, e === de ? he : 0);
    if (r === 0)
        n !== null && Gd(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && Gd(n),
            t === 1)
            e.tag === 0 ? Ow(zf.bind(null, e)) : gm(zf.bind(null, e)),
                Pw(function() {
                    !($ & 6) && Cn()
                }),
                n = null;
        else {
            switch (Wh(r)) {
                case 1:
                    n = sc;
                    break;
                case 4:
                    n = Bh;
                    break;
                case 16:
                    n = no;
                    break;
                case 536870912:
                    n = Vh;
                    break;
                default:
                    n = no
            }
            n = mg(n, lg.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function lg(e, t) {
    if (zs = -1,
        $s = 0,
        $ & 6)
        throw Error(O(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
        return null;
    var r = ro(e, e === de ? he : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = xo(e, r);
    else {
        t = r;
        var i = $;
        $ |= 2;
        var s = cg();
        (de !== e || he !== t) && (Pt = null,
            Mr = ie() + 500,
            Un(e, t));
        do
            try {
                Qw();
                break
            } catch (l) {
                ug(e, l)
            }
        while (1);
        yc(),
            wo.current = s,
            $ = i,
            ae !== null ? t = 0 : (de = null,
                he = 0,
                t = ue)
    }
    if (t !== 0) {
        if (t === 2 && (i = Yl(e),
            i !== 0 && (r = i,
                t = Tu(e, i))),
            t === 1)
            throw n = Ui,
            Un(e, 0),
            Xt(e, r),
            Ae(e, ie()),
            n;
        if (t === 6)
            Xt(e, r);
        else {
            if (i = e.current.alternate,
                !(r & 30) && !Xw(i) && (t = xo(e, r),
                    t === 2 && (s = Yl(e),
                        s !== 0 && (r = s,
                            t = Tu(e, s))),
                    t === 1))
                throw n = Ui,
                Un(e, 0),
                Xt(e, r),
                Ae(e, ie()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(O(345));
                case 2:
                    Nn(e, Ie, Pt);
                    break;
                case 3:
                    if (Xt(e, r),
                        (r & 130023424) === r && (t = Ac + 500 - ie(),
                            10 < t)) {
                        if (ro(e, 0) !== 0)
                            break;
                        if (i = e.suspendedLanes,
                            (i & r) !== r) {
                            be(),
                                e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = iu(Nn.bind(null, e, Ie, Pt), t);
                        break
                    }
                    Nn(e, Ie, Pt);
                    break;
                case 4:
                    if (Xt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        i = -1; 0 < r;) {
                        var o = 31 - at(r);
                        s = 1 << o,
                            o = t[o],
                            o > i && (i = o),
                            r &= ~s
                    }
                    if (r = i,
                        r = ie() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kw(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = iu(Nn.bind(null, e, Ie, Pt), r);
                        break
                    }
                    Nn(e, Ie, Pt);
                    break;
                case 5:
                    Nn(e, Ie, Pt);
                    break;
                default:
                    throw Error(O(329))
            }
        }
    }
    return Ae(e, ie()),
        e.callbackNode === n ? lg.bind(null, e) : null
}
function Tu(e, t) {
    var n = vi;
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256),
        e = xo(e, t),
        e !== 2 && (t = Ie,
            Ie = n,
            t !== null && bu(t)),
        e
}
function bu(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e)
}
function Xw(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ut(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function Xt(e, t) {
    for (t &= ~Rc,
        t &= ~Zo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - at(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function zf(e) {
    if ($ & 6)
        throw Error(O(327));
    br();
    var t = ro(e, 0);
    if (!(t & 1))
        return Ae(e, ie()),
            null;
    var n = xo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Yl(e);
        r !== 0 && (t = r,
            n = Tu(e, r))
    }
    if (n === 1)
        throw n = Ui,
        Un(e, 0),
        Xt(e, t),
        Ae(e, ie()),
        n;
    if (n === 6)
        throw Error(O(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        Nn(e, Ie, Pt),
        Ae(e, ie()),
        null
}
function Lc(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n,
            $ === 0 && (Mr = ie() + 500,
                Xo && Cn())
    }
}
function qn(e) {
    nn !== null && nn.tag === 0 && !($ & 6) && br();
    var t = $;
    $ |= 1;
    var n = Qe.transition
        , r = F;
    try {
        if (Qe.transition = null,
            F = 1,
            e)
            return e()
    } finally {
        F = r,
            Qe.transition = n,
            $ = t,
            !($ & 6) && Cn()
    }
}
function jc() {
    Le = wr.current,
        K(wr)
}
function Un(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        bw(n)),
        ae !== null)
        for (n = ae.return; n !== null;) {
            var r = n;
            switch (mc(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && lo();
                    break;
                case 3:
                    Lr(),
                        K(Ne),
                        K(_e),
                        Tc();
                    break;
                case 5:
                    Ec(r);
                    break;
                case 4:
                    Lr();
                    break;
                case 13:
                    K(Z);
                    break;
                case 19:
                    K(Z);
                    break;
                case 10:
                    wc(r.type._context);
                    break;
                case 22:
                case 23:
                    jc()
            }
            n = n.return
        }
    if (de = e,
        ae = e = pn(e.current, null),
        he = Le = t,
        ue = 0,
        Ui = null,
        Rc = Zo = Gn = 0,
        Ie = vi = null,
        jn !== null) {
        for (t = 0; t < jn.length; t++)
            if (n = jn[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var i = r.next
                    , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                        r.next = o
                }
                n.pending = r
            }
        jn = null
    }
    return e
}
function ug(e, t) {
    do {
        var n = ae;
        try {
            if (yc(),
                Ms.current = yo,
                vo) {
                for (var r = ee.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                        r = r.next
                }
                vo = !1
            }
            if (Wn = 0,
                ce = le = ee = null,
                mi = !1,
                ji = 0,
                Nc.current = null,
                n === null || n.return === null) {
                ue = 1,
                    Ui = t,
                    ae = null;
                break
            }
            e: {
                var s = e
                    , o = n.return
                    , l = n
                    , a = t;
                if (t = he,
                    l.flags |= 32768,
                    a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                        , c = l
                        , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                            c.memoizedState = f.memoizedState,
                            c.lanes = f.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var m = Pf(o);
                    if (m !== null) {
                        m.flags &= -257,
                            Cf(m, o, l, s, t),
                            m.mode & 1 && bf(s, u, t),
                            t = m,
                            a = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var y = new Set;
                            y.add(a),
                                t.updateQueue = y
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            bf(s, u, t),
                                Mc();
                            break e
                        }
                        a = Error(O(426))
                    }
                } else if (J && l.mode & 1) {
                    var _ = Pf(o);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                            Cf(_, o, l, s, t),
                            gc(jr(a, l));
                        break e
                    }
                }
                s = a = jr(a, l),
                    ue !== 4 && (ue = 2),
                    vi === null ? vi = [s] : vi.push(s),
                    s = o;
                do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536,
                                t &= -t,
                                s.lanes |= t;
                            var p = Gm(s, a, t);
                            yf(s, p);
                            break e;
                        case 1:
                            l = a;
                            var h = s.type
                                , v = s.stateNode;
                            if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (dn === null || !dn.has(v)))) {
                                s.flags |= 65536,
                                    t &= -t,
                                    s.lanes |= t;
                                var S = qm(s, l, t);
                                yf(s, S);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            fg(n)
        } catch (x) {
            t = x,
                ae === n && n !== null && (ae = n = n.return);
            continue
        }
        break
    } while (1)
}
function cg() {
    var e = wo.current;
    return wo.current = yo,
        e === null ? yo : e
}
function Mc() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
        de === null || !(Gn & 268435455) && !(Zo & 268435455) || Xt(de, he)
}
function xo(e, t) {
    var n = $;
    $ |= 2;
    var r = cg();
    (de !== e || he !== t) && (Pt = null,
        Un(e, t));
    do
        try {
            Yw();
            break
        } catch (i) {
            ug(e, i)
        }
    while (1);
    if (yc(),
        $ = n,
        wo.current = r,
        ae !== null)
        throw Error(O(261));
    return de = null,
        he = 0,
        ue
}
function Yw() {
    for (; ae !== null;)
        dg(ae)
}
function Qw() {
    for (; ae !== null && !x0();)
        dg(ae)
}
function dg(e) {
    var t = hg(e.alternate, e, Le);
    e.memoizedProps = e.pendingProps,
        t === null ? fg(e) : ae = t,
        Nc.current = null
}
function fg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = Hw(n, t),
                n !== null) {
                n.flags &= 32767,
                    ae = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                ue = 6,
                    ae = null;
                return
            }
        } else if (n = Vw(n, t, Le),
            n !== null) {
            ae = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            ae = t;
            return
        }
        ae = t = e
    } while (t !== null);
    ue === 0 && (ue = 5)
}
function Nn(e, t, n) {
    var r = F
        , i = Qe.transition;
    try {
        Qe.transition = null,
            F = 1,
            Jw(e, t, n, r)
    } finally {
        Qe.transition = i,
            F = r
    }
    return null
}
function Jw(e, t, n, r) {
    do
        br();
    while (nn !== null);
    if ($ & 6)
        throw Error(O(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(O(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (R0(e, s),
        e === de && (ae = de = null,
            he = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Es || (Es = !0,
            mg(no, function() {
                return br(),
                    null
            })),
        s = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || s) {
        s = Qe.transition,
            Qe.transition = null;
        var o = F;
        F = 1;
        var l = $;
        $ |= 4,
            Nc.current = null,
            Gw(e, n),
            og(n, e),
            yw(nu),
            io = !!tu,
            nu = tu = null,
            e.current = n,
            qw(n),
            E0(),
            $ = l,
            F = o,
            Qe.transition = s
    } else
        e.current = n;
    if (Es && (Es = !1,
        nn = e,
        _o = i),
        s = e.pendingLanes,
        s === 0 && (dn = null),
        P0(n.stateNode),
        Ae(e, ie()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            i = t[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
    if (So)
        throw So = !1,
        e = xu,
        xu = null,
        e;
    return _o & 1 && e.tag !== 0 && br(),
        s = e.pendingLanes,
        s & 1 ? e === Eu ? yi++ : (yi = 0,
            Eu = e) : yi = 0,
        Cn(),
        null
}
function br() {
    if (nn !== null) {
        var e = Wh(_o)
            , t = Qe.transition
            , n = F;
        try {
            if (Qe.transition = null,
                F = 16 > e ? 16 : e,
                nn === null)
                var r = !1;
            else {
                if (e = nn,
                    nn = null,
                    _o = 0,
                    $ & 6)
                    throw Error(O(331));
                var i = $;
                for ($ |= 4,
                    j = e.current; j !== null;) {
                    var s = j
                        , o = s.child;
                    if (j.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (j = u; j !== null;) {
                                    var c = j;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            gi(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                            j = d;
                                    else
                                        for (; j !== null;) {
                                            c = j;
                                            var f = c.sibling
                                                , m = c.return;
                                            if (rg(c),
                                                c === u) {
                                                j = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = m,
                                                    j = f;
                                                break
                                            }
                                            j = m
                                        }
                                }
                            }
                            var w = s.alternate;
                            if (w !== null) {
                                var y = w.child;
                                if (y !== null) {
                                    w.child = null;
                                    do {
                                        var _ = y.sibling;
                                        y.sibling = null,
                                            y = _
                                    } while (y !== null)
                                }
                            }
                            j = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                            j = o;
                    else
                        e: for (; j !== null;) {
                            if (s = j,
                                s.flags & 2048)
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gi(9, s, s.return)
                                }
                            var p = s.sibling;
                            if (p !== null) {
                                p.return = s.return,
                                    j = p;
                                break e
                            }
                            j = s.return
                        }
                }
                var h = e.current;
                for (j = h; j !== null;) {
                    o = j;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                            j = v;
                    else
                        e: for (o = h; j !== null;) {
                            if (l = j,
                                l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Jo(9, l)
                                    }
                                } catch (x) {
                                    re(l, l.return, x)
                                }
                            if (l === o) {
                                j = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                    j = S;
                                break e
                            }
                            j = l.return
                        }
                }
                if ($ = i,
                    Cn(),
                    mt && typeof mt.onPostCommitFiberRoot == "function")
                    try {
                        mt.onPostCommitFiberRoot(Ho, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            F = n,
                Qe.transition = t
        }
    }
    return !1
}
function $f(e, t, n) {
    t = jr(n, t),
        t = Gm(e, t, 1),
        e = cn(e, t, 1),
        t = be(),
        e !== null && (qi(e, 1, t),
            Ae(e, t))
}
function re(e, t, n) {
    if (e.tag === 3)
        $f(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                $f(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
                    e = jr(n, e),
                        e = qm(t, e, 1),
                        t = cn(t, e, 1),
                        e = be(),
                        t !== null && (qi(t, 1, e),
                            Ae(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Zw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = be(),
        e.pingedLanes |= e.suspendedLanes & n,
        de === e && (he & n) === n && (ue === 4 || ue === 3 && (he & 130023424) === he && 500 > ie() - Ac ? Un(e, 0) : Rc |= n),
        Ae(e, t)
}
function pg(e, t) {
    t === 0 && (e.mode & 1 ? (t = ps,
        ps <<= 1,
        !(ps & 130023424) && (ps = 4194304)) : t = 1);
    var n = be();
    e = Dt(e, t),
        e !== null && (qi(e, t, n),
            Ae(e, n))
}
function eS(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        pg(e, n)
}
function tS(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(O(314))
    }
    r !== null && r.delete(t),
        pg(e, n)
}
var hg;
hg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current)
            Oe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Oe = !1,
                    Bw(e, t, n);
            Oe = !!(e.flags & 131072)
        }
    else
        Oe = !1,
            J && t.flags & 1048576 && vm(t, fo, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            Us(e, t),
                e = t.pendingProps;
            var i = Nr(t, _e.current);
            Tr(t, n),
                i = Pc(null, t, r, e, i, n);
            var s = Cc();
            return t.flags |= 1,
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Re(r) ? (s = !0,
                        uo(t)) : s = !1,
                    t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                    _c(t),
                    i.updater = Yo,
                    t.stateNode = i,
                    i._reactInternals = t,
                    du(t, r, e, n),
                    t = hu(null, t, r, !0, s, n)) : (t.tag = 0,
                        J && s && hc(t),
                        Te(null, t, i, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (Us(e, t),
                e = t.pendingProps,
                i = r._init,
                r = i(r._payload),
                t.type = r,
                i = t.tag = rS(r),
                e = rt(r, e),
                i) {
                    case 0:
                        t = pu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Of(null, t, r, e, n);
                        break e;
                    case 11:
                        t = kf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = If(null, t, r, rt(r.type, e), n);
                        break e
                }
                throw Error(O(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : rt(r, i),
                pu(e, t, r, i, n);
        case 1:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : rt(r, i),
                Of(e, t, r, i, n);
        case 3:
            e: {
                if (Qm(t),
                    e === null)
                    throw Error(O(387));
                r = t.pendingProps,
                    s = t.memoizedState,
                    i = s.element,
                    _m(e, t),
                    mo(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element,
                    s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    },
                        t.updateQueue.baseState = s,
                        t.memoizedState = s,
                        t.flags & 256) {
                        i = jr(Error(O(423)), t),
                            t = Nf(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = jr(Error(O(424)), t),
                            t = Nf(e, t, r, n, i);
                        break e
                    } else
                        for (Me = un(t.stateNode.containerInfo.firstChild),
                            Ue = t,
                            J = !0,
                            st = null,
                            n = bm(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Rr(),
                        r === i) {
                        t = Ut(e, t, n);
                        break e
                    }
                    Te(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Pm(t),
                e === null && lu(t),
                r = t.type,
                i = t.pendingProps,
                s = e !== null ? e.memoizedProps : null,
                o = i.children,
                ru(r, i) ? o = null : s !== null && ru(r, s) && (t.flags |= 32),
                Ym(e, t),
                Te(e, t, o, n),
                t.child;
        case 6:
            return e === null && lu(t),
                null;
        case 13:
            return Jm(e, t, n);
        case 4:
            return xc(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = Ar(t, null, r, n) : Te(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : rt(r, i),
                kf(e, t, r, i, n);
        case 7:
            return Te(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return Te(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return Te(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    i = t.pendingProps,
                    s = t.memoizedProps,
                    o = i.value,
                    G(po, r._currentValue),
                    r._currentValue = o,
                    s !== null)
                    if (ut(s.value, o)) {
                        if (s.children === i.children && !Ne.current) {
                            t = Ut(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child,
                            s !== null && (s.return = t); s !== null;) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (s.tag === 1) {
                                            a = At(-1, n & -n),
                                                a.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next,
                                                    c.next = a),
                                                    u.pending = a
                                            }
                                        }
                                        s.lanes |= n,
                                            a = s.alternate,
                                            a !== null && (a.lanes |= n),
                                            uu(s.return, n, t),
                                            l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (s.tag === 10)
                                o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return,
                                    o === null)
                                    throw Error(O(341));
                                o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    uu(o, n, t),
                                    o = s.sibling
                            } else
                                o = s.child;
                            if (o !== null)
                                o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling,
                                        s !== null) {
                                        s.return = o.return,
                                            o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                Te(e, t, i.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return i = t.type,
                r = t.pendingProps.children,
                Tr(t, n),
                i = Je(i),
                r = r(i),
                t.flags |= 1,
                Te(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                i = rt(r, t.pendingProps),
                i = rt(r.type, i),
                If(e, t, r, i, n);
        case 15:
            return Km(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : rt(r, i),
                Us(e, t),
                t.tag = 1,
                Re(r) ? (e = !0,
                    uo(t)) : e = !1,
                Tr(t, n),
                Em(t, r, i),
                du(t, r, i, n),
                hu(null, t, r, !0, e, n);
        case 19:
            return Zm(e, t, n);
        case 22:
            return Xm(e, t, n)
    }
    throw Error(O(156, t.tag))
}
    ;
function mg(e, t) {
    return Fh(e, t)
}
function nS(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function Ye(e, t, n, r) {
    return new nS(e, t, n, r)
}
function Dc(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function rS(e) {
    if (typeof e == "function")
        return Dc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === nc)
            return 11;
        if (e === rc)
            return 14
    }
    return 2
}
function pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ye(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function Fs(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
        typeof e == "function")
        Dc(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
            case ur:
                return zn(n.children, i, s, t);
            case tc:
                o = 8,
                    i |= 8;
                break;
            case jl:
                return e = Ye(12, n, t, i | 2),
                    e.elementType = jl,
                    e.lanes = s,
                    e;
            case Ml:
                return e = Ye(13, n, t, i),
                    e.elementType = Ml,
                    e.lanes = s,
                    e;
            case Dl:
                return e = Ye(19, n, t, i),
                    e.elementType = Dl,
                    e.lanes = s,
                    e;
            case Th:
                return ea(n, i, s, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case xh:
                            o = 10;
                            break e;
                        case Eh:
                            o = 9;
                            break e;
                        case nc:
                            o = 11;
                            break e;
                        case rc:
                            o = 14;
                            break e;
                        case Gt:
                            o = 16,
                                r = null;
                            break e
                    }
                throw Error(O(130, e == null ? e : typeof e, ""))
        }
    return t = Ye(o, n, t, i),
        t.elementType = e,
        t.type = r,
        t.lanes = s,
        t
}
function zn(e, t, n, r) {
    return e = Ye(7, e, r, t),
        e.lanes = n,
        e
}
function ea(e, t, n, r) {
    return e = Ye(22, e, r, t),
        e.elementType = Th,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function sl(e, t, n) {
    return e = Ye(6, e, null, t),
        e.lanes = n,
        e
}
function ol(e, t, n) {
    return t = Ye(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function iS(e, t, n, r, i) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = $a(0),
        this.expirationTimes = $a(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = $a(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
}
function Uc(e, t, n, r, i, s, o, l, a) {
    return e = new iS(e, t, n, l, a),
        t === 1 ? (t = 1,
            s === !0 && (t |= 8)) : t = 0,
        s = Ye(3, null, null, t),
        e.current = s,
        s.stateNode = e,
        s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        _c(s),
        e
}
function sS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function gg(e) {
    if (!e)
        return xn;
    e = e._reactInternals;
    e: {
        if (tr(e) !== e || e.tag !== 1)
            throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Re(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Re(n))
            return mm(e, n, t)
    }
    return t
}
function vg(e, t, n, r, i, s, o, l, a) {
    return e = Uc(n, r, !0, e, i, s, o, l, a),
        e.context = gg(null),
        n = e.current,
        r = be(),
        i = fn(n),
        s = At(r, i),
        s.callback = t ?? null,
        cn(n, s, i),
        e.current.lanes = i,
        qi(e, i, r),
        Ae(e, r),
        e
}
function ta(e, t, n, r) {
    var i = t.current
        , s = be()
        , o = fn(i);
    return n = gg(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = At(s, o),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = cn(i, t, o),
        e !== null && (lt(e, i, o, s),
            js(e, i, o)),
        o
}
function Eo(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function Ff(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function zc(e, t) {
    Ff(e, t),
        (e = e.alternate) && Ff(e, t)
}
function oS() {
    return null
}
var yg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
    ;
function $c(e) {
    this._internalRoot = e
}
na.prototype.render = $c.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(O(409));
    ta(e, t, null, null)
}
    ;
na.prototype.unmount = $c.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qn(function() {
            ta(null, e, null, null)
        }),
            t[Mt] = null
    }
}
    ;
function na(e) {
    this._internalRoot = e
}
na.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Kh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++)
            ;
        Kt.splice(n, 0, e),
            n === 0 && Yh(e)
    }
}
    ;
function Fc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ra(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Bf() { }
function aS(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Eo(o);
                s.call(u)
            }
        }
        var o = vg(t, r, e, 0, null, !1, !1, "", Bf);
        return e._reactRootContainer = o,
            e[Mt] = o.current,
            Oi(e.nodeType === 8 ? e.parentNode : e),
            qn(),
            o
    }
    for (; i = e.lastChild;)
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Eo(a);
            l.call(u)
        }
    }
    var a = Uc(e, 0, !1, null, null, !1, !1, "", Bf);
    return e._reactRootContainer = a,
        e[Mt] = a.current,
        Oi(e.nodeType === 8 ? e.parentNode : e),
        qn(function() {
            ta(t, a, n, r)
        }),
        a
}
function ia(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = Eo(o);
                l.call(a)
            }
        }
        ta(t, o, e, i)
    } else
        o = aS(n, t, e, i, r);
    return Eo(o)
}
Gh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ai(t.pendingLanes);
                n !== 0 && (oc(t, n | 1),
                    Ae(t, ie()),
                    !($ & 6) && (Mr = ie() + 500,
                        Cn()))
            }
            break;
        case 13:
            qn(function() {
                var r = Dt(e, 1);
                if (r !== null) {
                    var i = be();
                    lt(r, e, 1, i)
                }
            }),
                zc(e, 1)
    }
}
    ;
ac = function(e) {
    if (e.tag === 13) {
        var t = Dt(e, 134217728);
        if (t !== null) {
            var n = be();
            lt(t, e, 134217728, n)
        }
        zc(e, 134217728)
    }
}
    ;
qh = function(e) {
    if (e.tag === 13) {
        var t = fn(e)
            , n = Dt(e, t);
        if (n !== null) {
            var r = be();
            lt(n, e, t, r)
        }
        zc(e, t)
    }
}
    ;
Kh = function() {
    return F
}
    ;
Xh = function(e, t) {
    var n = F;
    try {
        return F = e,
            t()
    } finally {
        F = n
    }
}
    ;
ql = function(e, t, n) {
    switch (t) {
        case "input":
            if ($l(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Ko(r);
                        if (!i)
                            throw Error(O(90));
                        Ph(r),
                            $l(r, i)
                    }
                }
            }
            break;
        case "textarea":
            kh(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Sr(e, !!n.multiple, t, !1)
    }
}
    ;
jh = Lc;
Mh = qn;
var lS = {
    usingClientEntryPoint: !1,
    Events: [Xi, pr, Ko, Ah, Lh, Lc]
}
    , ri = {
        findFiberByHostInstance: Ln,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    }
    , uS = {
        bundleType: ri.bundleType,
        version: ri.version,
        rendererPackageName: ri.rendererPackageName,
        rendererConfig: ri.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ft.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = zh(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ri.findFiberByHostInstance || oS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ts.isDisabled && Ts.supportsFiber)
        try {
            Ho = Ts.inject(uS),
                mt = Ts
        } catch { }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lS;
Fe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fc(t))
        throw Error(O(200));
    return sS(e, t, null, n)
}
    ;
Fe.createRoot = function(e, t) {
    if (!Fc(e))
        throw Error(O(299));
    var n = !1
        , r = ""
        , i = yg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = Uc(e, 1, !1, null, null, n, !1, r, i),
        e[Mt] = t.current,
        Oi(e.nodeType === 8 ? e.parentNode : e),
        new $c(t)
}
    ;
Fe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","),
            Error(O(268, e)));
    return e = zh(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
Fe.flushSync = function(e) {
    return qn(e)
}
    ;
Fe.hydrate = function(e, t, n) {
    if (!ra(t))
        throw Error(O(200));
    return ia(null, e, t, !0, n)
}
    ;
Fe.hydrateRoot = function(e, t, n) {
    if (!Fc(e))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
        , i = !1
        , s = ""
        , o = yg;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        t = vg(t, null, e, 1, n ?? null, i, !1, s, o),
        e[Mt] = t.current,
        Oi(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                i = n._getVersion,
                i = i(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new na(t)
}
    ;
Fe.render = function(e, t, n) {
    if (!ra(t))
        throw Error(O(200));
    return ia(null, e, t, !1, n)
}
    ;
Fe.unmountComponentAtNode = function(e) {
    if (!ra(e))
        throw Error(O(40));
    return e._reactRootContainer ? (qn(function() {
        ia(null, null, e, !1, function() {
            e._reactRootContainer = null,
                e[Mt] = null
        })
    }),
        !0) : !1
}
    ;
Fe.unstable_batchedUpdates = Lc;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ra(n))
        throw Error(O(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(O(38));
    return ia(e, t, n, !1, r)
}
    ;
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function wg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wg)
        } catch (e) {
            console.error(e)
        }
}
wg(),
    vh.exports = Fe;
var Sg = vh.exports
    , Vf = Sg;
Al.createRoot = Vf.createRoot,
    Al.hydrateRoot = Vf.hydrateRoot;
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zi() {
    return zi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        zi.apply(this, arguments)
}
var rn;
(function(e) {
    e.Pop = "POP",
        e.Push = "PUSH",
        e.Replace = "REPLACE"
}
)(rn || (rn = {}));
const Hf = "popstate";
function cS(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let { pathname: s, search: o, hash: l } = r.location;
        return Pu("", {
            pathname: s,
            search: o,
            hash: l
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : To(i)
    }
    return fS(t, n, null, e)
}
function se(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Bc(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function dS() {
    return Math.random().toString(36).substr(2, 8)
}
function Wf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Pu(e, t, n, r) {
    return n === void 0 && (n = null),
        zi({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? Hr(t) : t, {
            state: n,
            key: t && t.key || r || dS()
        })
}
function To(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
}
function Hr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
            e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
            e = e.substr(0, r)),
            e && (t.pathname = e)
    }
    return t
}
function fS(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: s = !1 } = r
        , o = i.history
        , l = rn.Pop
        , a = null
        , u = c();
    u == null && (u = 0,
        o.replaceState(zi({}, o.state, {
            idx: u
        }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        l = rn.Pop;
        let _ = c()
            , p = _ == null ? null : _ - u;
        u = _,
            a && a({
                action: l,
                location: y.location,
                delta: p
            })
    }
    function f(_, p) {
        l = rn.Push;
        let h = Pu(y.location, _, p);
        n && n(h, _),
            u = c() + 1;
        let v = Wf(h, u)
            , S = y.createHref(h);
        try {
            o.pushState(v, "", S)
        } catch (x) {
            if (x instanceof DOMException && x.name === "DataCloneError")
                throw x;
            i.location.assign(S)
        }
        s && a && a({
            action: l,
            location: y.location,
            delta: 1
        })
    }
    function m(_, p) {
        l = rn.Replace;
        let h = Pu(y.location, _, p);
        n && n(h, _),
            u = c();
        let v = Wf(h, u)
            , S = y.createHref(h);
        o.replaceState(v, "", S),
            s && a && a({
                action: l,
                location: y.location,
                delta: 0
            })
    }
    function w(_) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
            , h = typeof _ == "string" ? _ : To(_);
        return se(p, "No window.location.(origin|href) available to create URL for href: " + h),
            new URL(h, p)
    }
    let y = {
        get action() {
            return l
        },
        get location() {
            return e(i, o)
        },
        listen(_) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Hf, d),
                a = _,
                () => {
                    i.removeEventListener(Hf, d),
                        a = null
                }
        },
        createHref(_) {
            return t(i, _)
        },
        createURL: w,
        encodeLocation(_) {
            let p = w(_);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: m,
        go(_) {
            return o.go(_)
        }
    };
    return y
}
var Gf;
(function(e) {
    e.data = "data",
        e.deferred = "deferred",
        e.redirect = "redirect",
        e.error = "error"
}
)(Gf || (Gf = {}));
function pS(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Hr(t) : t
        , i = Vc(r.pathname || "/", n);
    if (i == null)
        return null;
    let s = _g(e);
    hS(s);
    let o = null;
    for (let l = 0; o == null && l < s.length; ++l)
        o = ES(s[l], PS(i));
    return o
}
function _g(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let i = (s, o, l) => {
        let a = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        a.relativePath.startsWith("/") && (se(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            a.relativePath = a.relativePath.slice(r.length));
        let u = hn([r, a.relativePath])
            , c = n.concat(a);
        s.children && s.children.length > 0 && (se(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
            _g(s.children, t, c, u)),
            !(s.path == null && !s.index) && t.push({
                path: u,
                score: _S(u, s.index),
                routesMeta: c
            })
    }
        ;
    return e.forEach((s, o) => {
        var l;
        if (s.path === "" || !((l = s.path) != null && l.includes("?")))
            i(s, o);
        else
            for (let a of xg(s.path))
                i(s, o, a)
    }
    ),
        t
}
function xg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let [n, ...r] = t
        , i = n.endsWith("?")
        , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = xg(r.join("/"))
        , l = [];
    return l.push(...o.map(a => a === "" ? s : [s, a].join("/"))),
        i && l.push(...o),
        l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function hS(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : xS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const mS = /^:\w+$/
    , gS = 3
    , vS = 2
    , yS = 1
    , wS = 10
    , SS = -2
    , qf = e => e === "*";
function _S(e, t) {
    let n = e.split("/")
        , r = n.length;
    return n.some(qf) && (r += SS),
        t && (r += vS),
        n.filter(i => !qf(i)).reduce((i, s) => i + (mS.test(s) ? gS : s === "" ? yS : wS), r)
}
function xS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ES(e, t) {
    let { routesMeta: n } = e
        , r = {}
        , i = "/"
        , s = [];
    for (let o = 0; o < n.length; ++o) {
        let l = n[o]
            , a = o === n.length - 1
            , u = i === "/" ? t : t.slice(i.length) || "/"
            , c = TS({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: a
            }, u);
        if (!c)
            return null;
        Object.assign(r, c.params);
        let d = l.route;
        s.push({
            params: r,
            pathname: hn([i, c.pathname]),
            pathnameBase: OS(hn([i, c.pathnameBase])),
            route: d
        }),
            c.pathnameBase !== "/" && (i = hn([i, c.pathnameBase]))
    }
    return s
}
function TS(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = bS(e.path, e.caseSensitive, e.end)
        , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
        , o = s.replace(/(.)\/+$/, "$1")
        , l = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: f, isOptional: m } = c;
            if (f === "*") {
                let y = l[d] || "";
                o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const w = l[d];
            return m && !w ? u[f] = void 0 : u[f] = CS(w || "", f),
                u
        }
            , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function bS(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Bc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
        , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (o, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
        [new RegExp(i, t ? void 0 : "i"), r]
}
function PS(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Bc(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
            e
    }
}
function CS(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return Bc(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
            e
    }
}
function Vc(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
        , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function kS(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Hr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : IS(n, t) : t,
        search: NS(r),
        hash: RS(i)
    }
}
function IS(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
        n.length > 1 ? n.join("/") : "/"
}
function al(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Hc(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Wc(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Hr(e) : (i = zi({}, e),
        se(!i.pathname || !i.pathname.includes("?"), al("?", "pathname", "search", i)),
        se(!i.pathname || !i.pathname.includes("#"), al("#", "pathname", "hash", i)),
        se(!i.search || !i.search.includes("#"), al("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, l;
    if (r || o == null)
        l = n;
    else {
        let d = t.length - 1;
        if (o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === "..";)
                f.shift(),
                    d -= 1;
            i.pathname = f.join("/")
        }
        l = d >= 0 ? t[d] : "/"
    }
    let a = kS(i, l)
        , u = o && o !== "/" && o.endsWith("/")
        , c = (s || o === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"),
        a
}
const hn = e => e.join("/").replace(/\/\/+/g, "/")
    , OS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
    , NS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
    , RS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function AS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Eg = ["post", "put", "patch", "delete"];
new Set(Eg);
const LS = ["get", ...Eg];
new Set(LS);
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bo() {
    return bo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        bo.apply(this, arguments)
}
const Gc = T.createContext(null)
    , jS = T.createContext(null)
    , Wr = T.createContext(null)
    , sa = T.createContext(null)
    , _t = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    })
    , Tg = T.createContext(null);
function MS(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Gr() || se(!1);
    let { basename: r, navigator: i } = T.useContext(Wr)
        , { hash: s, pathname: o, search: l } = Cg(e, {
            relative: n
        })
        , a = o;
    return r !== "/" && (a = o === "/" ? r : hn([r, o])),
        i.createHref({
            pathname: a,
            search: l,
            hash: s
        })
}
function Gr() {
    return T.useContext(sa) != null
}
function Qi() {
    return Gr() || se(!1),
        T.useContext(sa).location
}
function bg(e) {
    T.useContext(Wr).static || T.useLayoutEffect(e)
}
function Bt() {
    let { isDataRoute: e } = T.useContext(_t);
    return e ? QS() : DS()
}
function DS() {
    Gr() || se(!1);
    let e = T.useContext(Gc)
        , { basename: t, navigator: n } = T.useContext(Wr)
        , { matches: r } = T.useContext(_t)
        , { pathname: i } = Qi()
        , s = JSON.stringify(Hc(r).map(a => a.pathnameBase))
        , o = T.useRef(!1);
    return bg(() => {
        o.current = !0
    }
    ),
        T.useCallback(function(a, u) {
            if (u === void 0 && (u = {}),
                !o.current)
                return;
            if (typeof a == "number") {
                n.go(a);
                return
            }
            let c = Wc(a, JSON.parse(s), i, u.relative === "path");
            e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : hn([t, c.pathname])),
                (u.replace ? n.replace : n.push)(c, u.state, u)
        }, [t, n, s, i, e])
}
const US = T.createContext(null);
function zS(e) {
    let t = T.useContext(_t).outlet;
    return t && T.createElement(US.Provider, {
        value: e
    }, t)
}
function Pg() {
    let { matches: e } = T.useContext(_t)
        , t = e[e.length - 1];
    return t ? t.params : {}
}
function Cg(e, t) {
    let { relative: n } = t === void 0 ? {} : t
        , { matches: r } = T.useContext(_t)
        , { pathname: i } = Qi()
        , s = JSON.stringify(Hc(r).map(o => o.pathnameBase));
    return T.useMemo(() => Wc(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
}
function $S(e, t) {
    return FS(e, t)
}
function FS(e, t, n) {
    Gr() || se(!1);
    let { navigator: r } = T.useContext(Wr)
        , { matches: i } = T.useContext(_t)
        , s = i[i.length - 1]
        , o = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let a = Qi(), u;
    if (t) {
        var c;
        let y = typeof t == "string" ? Hr(t) : t;
        l === "/" || (c = y.pathname) != null && c.startsWith(l) || se(!1),
            u = y
    } else
        u = a;
    let d = u.pathname || "/"
        , f = l === "/" ? d : d.slice(l.length) || "/"
        , m = pS(e, {
            pathname: f
        })
        , w = GS(m && m.map(y => Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: hn([l, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? l : hn([l, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
        })), i, n);
    return t && w ? T.createElement(sa.Provider, {
        value: {
            location: bo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: rn.Pop
        }
    }, w) : w
}
function BS() {
    let e = YS()
        , t = AS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , n = e instanceof Error ? e.stack : null
        , i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        }
        , s = null;
    return T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? T.createElement("pre", {
        style: i
    }, n) : null, s)
}
const VS = T.createElement(BS, null);
class HS extends T.Component {
    constructor(t) {
        super(t),
            this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? T.createElement(_t.Provider, {
            value: this.props.routeContext
        }, T.createElement(Tg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function WS(e) {
    let { routeContext: t, match: n, children: r } = e
        , i = T.useContext(Gc);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        T.createElement(_t.Provider, {
            value: t
        }, r)
}
function GS(e, t, n) {
    var r;
    if (t === void 0 && (t = []),
        n === void 0 && (n = null),
        e == null) {
        var i;
        if ((i = n) != null && i.errors)
            e = n.matches;
        else
            return null
    }
    let s = e
        , o = (r = n) == null ? void 0 : r.errors;
    if (o != null) {
        let l = s.findIndex(a => a.route.id && (o == null ? void 0 : o[a.route.id]));
        l >= 0 || se(!1),
            s = s.slice(0, Math.min(s.length, l + 1))
    }
    return s.reduceRight((l, a, u) => {
        let c = a.route.id ? o == null ? void 0 : o[a.route.id] : null
            , d = null;
        n && (d = a.route.errorElement || VS);
        let f = t.concat(s.slice(0, u + 1))
            , m = () => {
                let w;
                return c ? w = d : a.route.Component ? w = T.createElement(a.route.Component, null) : a.route.element ? w = a.route.element : w = l,
                    T.createElement(WS, {
                        match: a,
                        routeContext: {
                            outlet: l,
                            matches: f,
                            isDataRoute: n != null
                        },
                        children: w
                    })
            }
            ;
        return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? T.createElement(HS, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: c,
            children: m(),
            routeContext: {
                outlet: null,
                matches: f,
                isDataRoute: !0
            }
        }) : m()
    }
        , null)
}
var kg = function(e) {
    return e.UseBlocker = "useBlocker",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e
}(kg || {})
    , Po = function(e) {
        return e.UseBlocker = "useBlocker",
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e.UseRouteId = "useRouteId",
            e
    }(Po || {});
function qS(e) {
    let t = T.useContext(Gc);
    return t || se(!1),
        t
}
function KS(e) {
    let t = T.useContext(jS);
    return t || se(!1),
        t
}
function XS(e) {
    let t = T.useContext(_t);
    return t || se(!1),
        t
}
function Ig(e) {
    let t = XS()
        , n = t.matches[t.matches.length - 1];
    return n.route.id || se(!1),
        n.route.id
}
function YS() {
    var e;
    let t = T.useContext(Tg)
        , n = KS(Po.UseRouteError)
        , r = Ig(Po.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}
function QS() {
    let { router: e } = qS(kg.UseNavigateStable)
        , t = Ig(Po.UseNavigateStable)
        , n = T.useRef(!1);
    return bg(() => {
        n.current = !0
    }
    ),
        T.useCallback(function(i, s) {
            s === void 0 && (s = {}),
                n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, bo({
                    fromRouteId: t
                }, s)))
        }, [e, t])
}
function JS(e) {
    let { to: t, replace: n, state: r, relative: i } = e;
    Gr() || se(!1);
    let { matches: s } = T.useContext(_t)
        , { pathname: o } = Qi()
        , l = Bt()
        , a = Wc(t, Hc(s).map(c => c.pathnameBase), o, i === "path")
        , u = JSON.stringify(a);
    return T.useEffect(() => l(JSON.parse(u), {
        replace: n,
        state: r,
        relative: i
    }), [l, u, i, n, r]),
        null
}
function ZS(e) {
    return zS(e.context)
}
function nt(e) {
    se(!1)
}
function e_(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = rn.Pop, navigator: s, static: o = !1 } = e;
    Gr() && se(!1);
    let l = t.replace(/^\/*/, "/")
        , a = T.useMemo(() => ({
            basename: l,
            navigator: s,
            static: o
        }), [l, s, o]);
    typeof r == "string" && (r = Hr(r));
    let { pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: m = "default" } = r
        , w = T.useMemo(() => {
            let y = Vc(u, l);
            return y == null ? null : {
                location: {
                    pathname: y,
                    search: c,
                    hash: d,
                    state: f,
                    key: m
                },
                navigationType: i
            }
        }
            , [l, u, c, d, f, m, i]);
    return w == null ? null : T.createElement(Wr.Provider, {
        value: a
    }, T.createElement(sa.Provider, {
        children: n,
        value: w
    }))
}
function t_(e) {
    let { children: t, location: n } = e;
    return $S(Cu(t), n)
}
new Promise(() => { }
);
function Cu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return T.Children.forEach(e, (r, i) => {
        if (!T.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === T.Fragment) {
            n.push.apply(n, Cu(r.props.children, s));
            return
        }
        r.type !== nt && se(!1),
            !r.props.index || !r.props.children || se(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Cu(r.props.children, s)),
            n.push(o)
    }
    ),
        n
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ku() {
    return ku = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ku.apply(this, arguments)
}
function n_(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function r_(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function i_(e, t) {
    return e.button === 0 && (!t || t === "_self") && !r_(e)
}
const s_ = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
    , o_ = "startTransition"
    , Kf = e0[o_];
function a_(e) {
    let { basename: t, children: n, future: r, window: i } = e
        , s = T.useRef();
    s.current == null && (s.current = cS({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
        , [l, a] = T.useState({
            action: o.action,
            location: o.location
        })
        , { v7_startTransition: u } = r || {}
        , c = T.useCallback(d => {
            u && Kf ? Kf(() => a(d)) : a(d)
        }
            , [a, u]);
    return T.useLayoutEffect(() => o.listen(c), [o, c]),
        T.createElement(e_, {
            basename: t,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: o
        })
}
const l_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
    , u_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , Se = T.forwardRef(function(t, n) {
        let { onClick: r, relative: i, reloadDocument: s, replace: o, state: l, target: a, to: u, preventScrollReset: c, unstable_viewTransition: d } = t, f = n_(t, s_), { basename: m } = T.useContext(Wr), w, y = !1;
        if (typeof u == "string" && u_.test(u) && (w = u,
            l_))
            try {
                let v = new URL(window.location.href)
                    , S = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u)
                    , x = Vc(S.pathname, m);
                S.origin === v.origin && x != null ? u = x + S.search + S.hash : y = !0
            } catch { }
        let _ = MS(u, {
            relative: i
        })
            , p = c_(u, {
                replace: o,
                state: l,
                target: a,
                preventScrollReset: c,
                relative: i,
                unstable_viewTransition: d
            });
        function h(v) {
            r && r(v),
                v.defaultPrevented || p(v)
        }
        return T.createElement("a", ku({}, f, {
            href: w || _,
            onClick: y || s ? r : h,
            ref: n,
            target: a
        }))
    });
var Xf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
        e.UseSubmit = "useSubmit",
        e.UseSubmitFetcher = "useSubmitFetcher",
        e.UseFetcher = "useFetcher",
        e.useViewTransitionState = "useViewTransitionState"
}
)(Xf || (Xf = {}));
var Yf;
(function(e) {
    e.UseFetcher = "useFetcher",
        e.UseFetchers = "useFetchers",
        e.UseScrollRestoration = "useScrollRestoration"
}
)(Yf || (Yf = {}));
function c_(e, t) {
    let { target: n, replace: r, state: i, preventScrollReset: s, relative: o, unstable_viewTransition: l } = t === void 0 ? {} : t
        , a = Bt()
        , u = Qi()
        , c = Cg(e, {
            relative: o
        });
    return T.useCallback(d => {
        if (i_(d, n)) {
            d.preventDefault();
            let f = r !== void 0 ? r : To(u) === To(c);
            a(e, {
                replace: f,
                state: i,
                preventScrollReset: s,
                relative: o,
                unstable_viewTransition: l
            })
        }
    }
        , [u, a, c, r, i, n, e, s, o, l])
}
var Og = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
    , Qf = W.createContext && W.createContext(Og)
    , mn = globalThis && globalThis.__assign || function() {
        return mn = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }
            ,
            mn.apply(this, arguments)
    }
    , d_ = globalThis && globalThis.__rest || function(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    }
    ;
function Ng(e) {
    return e && e.map(function(t, n) {
        return W.createElement(t.tag, mn({
            key: n
        }, t.attr), Ng(t.child))
    })
}
function xt(e) {
    return function(t) {
        return W.createElement(f_, mn({
            attr: mn({}, e.attr)
        }, t), Ng(e.child))
    }
}
function f_(e) {
    var t = function(n) {
        var r = e.attr, i = e.size, s = e.title, o = d_(e, ["attr", "size", "title"]), l = i || n.size || "1em", a;
        return n.className && (a = n.className),
            e.className && (a = (a ? a + " " : "") + e.className),
            W.createElement("svg", mn({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, n.attr, r, o, {
                className: a,
                style: mn(mn({
                    color: e.color || n.color
                }, n.style), e.style),
                height: l,
                width: l,
                xmlns: "http://www.w3.org/2000/svg"
            }), s && W.createElement("title", null, s), e.children)
    };
    return Qf !== void 0 ? W.createElement(Qf.Consumer, null, function(n) {
        return t(n)
    }) : t(Og)
}
function p_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
            }
        }]
    })(e)
}
function h_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            }
        }]
    })(e)
}
function m_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"
            }
        }]
    })(e)
}
function g_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"
            }
        }]
    })(e)
}
function v_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z"
            }
        }]
    })(e)
}
function y_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            }
        }]
    })(e)
}
function w_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"
            }
        }]
    })(e)
}
function S_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            }
        }]
    })(e)
}
function __(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
            }
        }]
    })(e)
}
function x_(e) {
    return xt({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
            }
        }]
    })(e)
}
function Bs({ listing: e, id: t, onEdit: n, onDelete: r }) {
    return g.jsxs("li", {
        className: " bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border",
        children: [g.jsxs(Se, {
            className: "contents",
            to: `/listing/${t}`,
            children: [g.jsx("img", {
                className: "h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 ",
                loading: "lazy",
                src: e.imageUrls[0] || "https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000"
            }), g.jsxs("div", {
                className: "w-full p-3 gap-2 flex flex-col",
                children: [g.jsx("p", {
                    className: "font-semibold m-0 text-lg truncate text-slate-700",
                    children: e.name
                }), g.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [g.jsx(p_, {
                        className: "h-4 w-4 text-green-700"
                    }), g.jsx("p", {
                        className: "text-xs  text-gray-600 truncate",
                        children: e.address
                    })]
                }), g.jsx("p", {
                    className: "text-xs text-gray-600 line-clamp-2",
                    children: e.description
                }), g.jsxs("p", {
                    className: "text-slate-500 mt-2 font-semibold",
                    children: ["$", e.offer ? e.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), e.type === "rent" && " / month"]
                }), g.jsxs("div", {
                    className: "flex items-center gap-4 text-slate-700",
                    children: [g.jsx("div", {
                        className: "flex items-center gap-1",
                        children: g.jsx("p", {
                            className: "font-bold text-xs",
                            children: e.bedrooms > 1 ? `${e.bedrooms} Beds` : "1 Bed"
                        })
                    }), g.jsx("div", {
                        className: "flex items-center gap-1",
                        children: g.jsx("p", {
                            className: "font-bold text-xs",
                            children: e.bathrooms > 1 ? `${e.bathrooms} Baths` : "1 Bath"
                        })
                    })]
                })]
            })]
        }), r && g.jsx(x_, {
            className: "absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500",
            onClick: () => r(e.id)
        }), n && g.jsx(h_, {
            className: "absolute bottom-2 right-7 h-4 cursor-pointer ",
            onClick: () => n(e.id)
        })]
    })
}
function Jf(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}
function qc(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = {}),
        Object.keys(t).forEach(n => {
            typeof e[n] > "u" ? e[n] = t[n] : Jf(t[n]) && Jf(e[n]) && Object.keys(t[n]).length > 0 && qc(e[n], t[n])
        }
        )
}
const Rg = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() { }
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function nr() {
    const e = typeof document < "u" ? document : {};
    return qc(e, Rg),
        e
}
const E_ = {
    document: Rg,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { }
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
            null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function Ve() {
    const e = typeof window < "u" ? window : {};
    return qc(e, E_),
        e
}
function T_(e) {
    const t = e;
    Object.keys(t).forEach(n => {
        try {
            t[n] = null
        } catch { }
        try {
            delete t[n]
        } catch { }
    }
    )
}
function Iu(e, t) {
    return t === void 0 && (t = 0),
        setTimeout(e, t)
}
function Co() {
    return Date.now()
}
function b_(e) {
    const t = Ve();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
}
function P_(e, t) {
    t === void 0 && (t = "x");
    const n = Ve();
    let r, i, s;
    const o = b_(e);
    return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map(l => l.replace(",", ".")).join(", ")),
        s = new n.WebKitCSSMatrix(i === "none" ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            r = s.toString().split(",")),
        t === "x" && (n.WebKitCSSMatrix ? i = s.m41 : r.length === 16 ? i = parseFloat(r[12]) : i = parseFloat(r[4])),
        t === "y" && (n.WebKitCSSMatrix ? i = s.m42 : r.length === 16 ? i = parseFloat(r[13]) : i = parseFloat(r[5])),
        i || 0
}
function bs(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function C_(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function je() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
        , t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (r != null && !C_(r)) {
            const i = Object.keys(Object(r)).filter(s => t.indexOf(s) < 0);
            for (let s = 0, o = i.length; s < o; s += 1) {
                const l = i[s]
                    , a = Object.getOwnPropertyDescriptor(r, l);
                a !== void 0 && a.enumerable && (bs(e[l]) && bs(r[l]) ? r[l].__swiper__ ? e[l] = r[l] : je(e[l], r[l]) : !bs(e[l]) && bs(r[l]) ? (e[l] = {},
                    r[l].__swiper__ ? e[l] = r[l] : je(e[l], r[l])) : e[l] = r[l])
            }
        }
    }
    return e
}
function Ps(e, t, n) {
    e.style.setProperty(t, n)
}
function Ag(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Ve()
        , s = -t.translate;
    let o = null, l;
    const a = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > s ? "next" : "prev"
        , c = (f, m) => u === "next" && f >= m || u === "prev" && f <= m
        , d = () => {
            l = new Date().getTime(),
                o === null && (o = l);
            const f = Math.max(Math.min((l - o) / a, 1), 0)
                , m = .5 - Math.cos(f * Math.PI) / 2;
            let w = s + m * (n - s);
            if (c(w, n) && (w = n),
                t.wrapperEl.scrollTo({
                    [r]: w
                }),
                c(w, n)) {
                t.wrapperEl.style.overflow = "hidden",
                    t.wrapperEl.style.scrollSnapType = "",
                    setTimeout(() => {
                        t.wrapperEl.style.overflow = "",
                            t.wrapperEl.scrollTo({
                                [r]: w
                            })
                    }
                    ),
                    i.cancelAnimationFrame(t.cssModeFrameID);
                return
            }
            t.cssModeFrameID = i.requestAnimationFrame(d)
        }
        ;
    d()
}
function pt(e, t) {
    return t === void 0 && (t = ""),
        [...e.children].filter(n => n.matches(t))
}
function Lg(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : [t]),
        n
}
function k_(e, t) {
    const n = [];
    for (; e.previousElementSibling;) {
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
            e = r
    }
    return n
}
function I_(e, t) {
    const n = [];
    for (; e.nextElementSibling;) {
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
            e = r
    }
    return n
}
function sn(e, t) {
    return Ve().getComputedStyle(e, null).getPropertyValue(t)
}
function Zf(e) {
    let t = e, n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null;)
            t.nodeType === 1 && (n += 1);
        return n
    }
}
function O_(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r;)
        t ? r.matches(t) && n.push(r) : n.push(r),
            r = r.parentElement;
    return n
}
function ep(e, t, n) {
    const r = Ve();
    return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let ll;
function N_() {
    const e = Ve()
        , t = nr();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function jg() {
    return ll || (ll = N_()),
        ll
}
let ul;
function R_(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = jg()
        , r = Ve()
        , i = r.navigator.platform
        , s = t || r.navigator.userAgent
        , o = {
            ios: !1,
            android: !1
        }
        , l = r.screen.width
        , a = r.screen.height
        , u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const d = s.match(/(iPod)(.*OS\s([\d_]+))?/)
        , f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        , m = i === "Win32";
    let w = i === "MacIntel";
    const y = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && w && n.touch && y.indexOf(`${l}x ${a}`) >= 0 && (c = s.match(/(Version)\/([\d.]+)/),
        c || (c = [0, 1, "13_0_0"]),
        w = !1),
        u && !m && (o.os = "android",
            o.android = !0),
        (c || f || d) && (o.os = "ios",
            o.ios = !0),
        o
}
function A_(e) {
    return e === void 0 && (e = {}),
        ul || (ul = R_(e)),
        ul
}
let cl;
function L_() {
    const e = Ve();
    let t = !1;
    function n() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0
    }
    if (n()) {
        const r = String(e.navigator.userAgent);
        if (r.includes("Version/")) {
            const [i, s] = r.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
            t = i < 16 || i === 16 && s < 2
        }
    }
    return {
        isSafari: t || n(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function j_() {
    return cl || (cl = L_()),
        cl
}
function M_(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = Ve();
    let s = null
        , o = null;
    const l = () => {
        !t || t.destroyed || !t.initialized || (r("beforeResize"),
            r("resize"))
    }
        , a = () => {
            !t || t.destroyed || !t.initialized || (s = new ResizeObserver(d => {
                o = i.requestAnimationFrame(() => {
                    const { width: f, height: m } = t;
                    let w = f
                        , y = m;
                    d.forEach(_ => {
                        let { contentBoxSize: p, contentRect: h, target: v } = _;
                        v && v !== t.el || (w = h ? h.width : (p[0] || p).inlineSize,
                            y = h ? h.height : (p[0] || p).blockSize)
                    }
                    ),
                        (w !== f || y !== m) && l()
                }
                )
            }
            ),
                s.observe(t.el))
        }
        , u = () => {
            o && i.cancelAnimationFrame(o),
                s && s.unobserve && t.el && (s.unobserve(t.el),
                    s = null)
        }
        , c = () => {
            !t || t.destroyed || !t.initialized || r("orientationchange")
        }
        ;
    n("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            a();
            return
        }
        i.addEventListener("resize", l),
            i.addEventListener("orientationchange", c)
    }
    ),
        n("destroy", () => {
            u(),
                i.removeEventListener("resize", l),
                i.removeEventListener("orientationchange", c)
        }
        )
}
function D_(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const s = []
        , o = Ve()
        , l = function(c, d) {
            d === void 0 && (d = {});
            const f = o.MutationObserver || o.WebkitMutationObserver
                , m = new f(w => {
                    if (t.__preventObserver__)
                        return;
                    if (w.length === 1) {
                        i("observerUpdate", w[0]);
                        return
                    }
                    const y = function() {
                        i("observerUpdate", w[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(y) : o.setTimeout(y, 0)
                }
                );
            m.observe(c, {
                attributes: typeof d.attributes > "u" ? !0 : d.attributes,
                childList: typeof d.childList > "u" ? !0 : d.childList,
                characterData: typeof d.characterData > "u" ? !0 : d.characterData
            }),
                s.push(m)
        }
        , a = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const c = O_(t.hostEl);
                    for (let d = 0; d < c.length; d += 1)
                        l(c[d])
                }
                l(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }),
                    l(t.wrapperEl, {
                        attributes: !1
                    })
            }
        }
        , u = () => {
            s.forEach(c => {
                c.disconnect()
            }
            ),
                s.splice(0, s.length)
        }
        ;
    n({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
        r("init", a),
        r("destroy", u)
}
var U_ = {
    on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        const i = n ? "unshift" : "push";
        return e.split(" ").forEach(s => {
            r.eventsListeners[s] || (r.eventsListeners[s] = []),
                r.eventsListeners[s][i](t)
        }
        ),
            r
    },
    once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        function i() {
            r.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy;
            for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
                o[l] = arguments[l];
            t.apply(r, o)
        }
        return i.__emitterProxy = t,
            r.on(e, i, n)
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const r = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
            n
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1),
            t
    },
    off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(r => {
            typeof t > "u" ? n.eventsListeners[r] = [] : n.eventsListeners[r] && n.eventsListeners[r].forEach((i, s) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[r].splice(s, 1)
            }
            )
        }
        ),
            n
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
            return e;
        let t, n, r;
        for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
        return typeof s[0] == "string" || Array.isArray(s[0]) ? (t = s[0],
            n = s.slice(1, s.length),
            r = e) : (t = s[0].events,
                n = s[0].data,
                r = s[0].context || e),
            n.unshift(r),
            (Array.isArray(t) ? t : t.split(" ")).forEach(a => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(u => {
                    u.apply(r, [a, ...n])
                }
                ),
                    e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach(u => {
                        u.apply(r, n)
                    }
                    )
            }
            ),
            e
    }
};
function z_() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = r.clientWidth,
        typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = r.clientHeight,
        !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(sn(r, "padding-left") || 0, 10) - parseInt(sn(r, "padding-right") || 0, 10),
            n = n - parseInt(sn(r, "padding-top") || 0, 10) - parseInt(sn(r, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n
            }))
}
function $_() {
    const e = this;
    function t(k) {
        return e.isHorizontal() ? k : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[k]
    }
    function n(k, I) {
        return parseFloat(k.getPropertyValue(t(I)) || 0)
    }
    const r = e.params
        , { wrapperEl: i, slidesEl: s, size: o, rtlTranslate: l, wrongRTL: a } = e
        , u = e.virtual && r.virtual.enabled
        , c = u ? e.virtual.slides.length : e.slides.length
        , d = pt(s, `.${e.params.slideClass}, swiper-slide`)
        , f = u ? e.virtual.slides.length : d.length;
    let m = [];
    const w = []
        , y = [];
    let _ = r.slidesOffsetBefore;
    typeof _ == "function" && (_ = r.slidesOffsetBefore.call(e));
    let p = r.slidesOffsetAfter;
    typeof p == "function" && (p = r.slidesOffsetAfter.call(e));
    const h = e.snapGrid.length
        , v = e.slidesGrid.length;
    let S = r.spaceBetween
        , x = -_
        , C = 0
        , E = 0;
    if (typeof o > "u")
        return;
    typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * o : typeof S == "string" && (S = parseFloat(S)),
        e.virtualSize = -S,
        d.forEach(k => {
            l ? k.style.marginLeft = "" : k.style.marginRight = "",
                k.style.marginBottom = "",
                k.style.marginTop = ""
        }
        ),
        r.centeredSlides && r.cssMode && (Ps(i, "--swiper-centered-offset-before", ""),
            Ps(i, "--swiper-centered-offset-after", ""));
    const b = r.grid && r.grid.rows > 1 && e.grid;
    b && e.grid.initSlides(f);
    let P;
    const A = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter(k => typeof r.breakpoints[k].slidesPerView < "u").length > 0;
    for (let k = 0; k < f; k += 1) {
        P = 0;
        let I;
        if (d[k] && (I = d[k]),
            b && e.grid.updateSlide(k, I, f, t),
            !(d[k] && sn(I, "display") === "none")) {
            if (r.slidesPerView === "auto") {
                A && (d[k].style[t("width")] = "");
                const R = getComputedStyle(I)
                    , U = I.style.transform
                    , We = I.style.webkitTransform;
                if (U && (I.style.transform = "none"),
                    We && (I.style.webkitTransform = "none"),
                    r.roundLengths)
                    P = e.isHorizontal() ? ep(I, "width", !0) : ep(I, "height", !0);
                else {
                    const Ge = n(R, "width")
                        , qe = n(R, "padding-left")
                        , N = n(R, "padding-right")
                        , L = n(R, "margin-left")
                        , M = n(R, "margin-right")
                        , Y = R.getPropertyValue("box-sizing");
                    if (Y && Y === "border-box")
                        P = Ge + L + M;
                    else {
                        const { clientWidth: oe, offsetWidth: ir } = I;
                        P = Ge + qe + N + L + M + (ir - oe)
                    }
                }
                U && (I.style.transform = U),
                    We && (I.style.webkitTransform = We),
                    r.roundLengths && (P = Math.floor(P))
            } else
                P = (o - (r.slidesPerView - 1) * S) / r.slidesPerView,
                    r.roundLengths && (P = Math.floor(P)),
                    d[k] && (d[k].style[t("width")] = `${P}px`);
            d[k] && (d[k].swiperSlideSize = P),
                y.push(P),
                r.centeredSlides ? (x = x + P / 2 + C / 2 + S,
                    C === 0 && k !== 0 && (x = x - o / 2 - S),
                    k === 0 && (x = x - o / 2 - S),
                    Math.abs(x) < 1 / 1e3 && (x = 0),
                    r.roundLengths && (x = Math.floor(x)),
                    E % r.slidesPerGroup === 0 && m.push(x),
                    w.push(x)) : (r.roundLengths && (x = Math.floor(x)),
                        (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup === 0 && m.push(x),
                        w.push(x),
                        x = x + P + S),
                e.virtualSize += P + S,
                C = P,
                E += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, o) + p,
        l && a && (r.effect === "slide" || r.effect === "coverflow") && (i.style.width = `${e.virtualSize + S}px`),
        r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + S}px`),
        b && e.grid.updateWrapperSize(P, m, t),
        !r.centeredSlides) {
        const k = [];
        for (let I = 0; I < m.length; I += 1) {
            let R = m[I];
            r.roundLengths && (R = Math.floor(R)),
                m[I] <= e.virtualSize - o && k.push(R)
        }
        m = k,
            Math.floor(e.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - o)
    }
    if (u && r.loop) {
        const k = y[0] + S;
        if (r.slidesPerGroup > 1) {
            const I = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup)
                , R = k * r.slidesPerGroup;
            for (let U = 0; U < I; U += 1)
                m.push(m[m.length - 1] + R)
        }
        for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
            r.slidesPerGroup === 1 && m.push(m[m.length - 1] + k),
                w.push(w[w.length - 1] + k),
                e.virtualSize += k
    }
    if (m.length === 0 && (m = [0]),
        S !== 0) {
        const k = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        d.filter((I, R) => !r.cssMode || r.loop ? !0 : R !== d.length - 1).forEach(I => {
            I.style[k] = `${S}px`
        }
        )
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
        let k = 0;
        y.forEach(R => {
            k += R + (S || 0)
        }
        ),
            k -= S;
        const I = k - o;
        m = m.map(R => R <= 0 ? -_ : R > I ? I + p : R)
    }
    if (r.centerInsufficientSlides) {
        let k = 0;
        if (y.forEach(I => {
            k += I + (S || 0)
        }
        ),
            k -= S,
            k < o) {
            const I = (o - k) / 2;
            m.forEach((R, U) => {
                m[U] = R - I
            }
            ),
                w.forEach((R, U) => {
                    w[U] = R + I
                }
                )
        }
    }
    if (Object.assign(e, {
        slides: d,
        snapGrid: m,
        slidesGrid: w,
        slidesSizesGrid: y
    }),
        r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
        Ps(i, "--swiper-centered-offset-before", `${-m[0]}px`),
            Ps(i, "--swiper-centered-offset-after", `${e.size / 2 - y[y.length - 1] / 2}px`);
        const k = -e.snapGrid[0]
            , I = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(R => R + k),
            e.slidesGrid = e.slidesGrid.map(R => R + I)
    }
    if (f !== c && e.emit("slidesLengthChange"),
        m.length !== h && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
        w.length !== v && e.emit("slidesGridLengthChange"),
        r.watchSlidesProgress && e.updateSlidesOffset(),
        !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
        const k = `${r.containerModifierClass}backface-hidden`
            , I = e.el.classList.contains(k);
        f <= r.maxBackfaceHiddenSlides ? I || e.el.classList.add(k) : I && e.el.classList.remove(k)
    }
}
function F_(e) {
    const t = this
        , n = []
        , r = t.virtual && t.params.virtual.enabled;
    let i = 0, s;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const o = l => r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(l => {
                n.push(l)
            }
            );
        else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                const l = t.activeIndex + s;
                if (l > t.slides.length && !r)
                    break;
                n.push(o(l))
            }
    else
        n.push(o(t.activeIndex));
    for (s = 0; s < n.length; s += 1)
        if (typeof n[s] < "u") {
            const l = n[s].offsetHeight;
            i = l > i ? l : i
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function B_() {
    const e = this
        , t = e.slides
        , n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
}
function V_(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this
        , n = t.params
        , { slides: r, rtlTranslate: i, snapGrid: s } = t;
    if (r.length === 0)
        return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -e;
    i && (o = e),
        r.forEach(a => {
            a.classList.remove(n.slideVisibleClass)
        }
        ),
        t.visibleSlidesIndexes = [],
        t.visibleSlides = [];
    let l = n.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < r.length; a += 1) {
        const u = r[a];
        let c = u.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
        const d = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + l)
            , f = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + l)
            , m = -(o - c)
            , w = m + t.slidesSizesGrid[a];
        (m >= 0 && m < t.size - 1 || w > 1 && w <= t.size || m <= 0 && w >= t.size) && (t.visibleSlides.push(u),
            t.visibleSlidesIndexes.push(a),
            r[a].classList.add(n.slideVisibleClass)),
            u.progress = i ? -d : d,
            u.originalProgress = i ? -f : f
    }
}
function H_(e) {
    const t = this;
    if (typeof e > "u") {
        const c = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * c || 0
    }
    const n = t.params
        , r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: s, isEnd: o, progressLoop: l } = t;
    const a = s
        , u = o;
    if (r === 0)
        i = 0,
            s = !0,
            o = !0;
    else {
        i = (e - t.minTranslate()) / r;
        const c = Math.abs(e - t.minTranslate()) < 1
            , d = Math.abs(e - t.maxTranslate()) < 1;
        s = c || i <= 0,
            o = d || i >= 1,
            c && (i = 0),
            d && (i = 1)
    }
    if (n.loop) {
        const c = t.getSlideIndexByData(0)
            , d = t.getSlideIndexByData(t.slides.length - 1)
            , f = t.slidesGrid[c]
            , m = t.slidesGrid[d]
            , w = t.slidesGrid[t.slidesGrid.length - 1]
            , y = Math.abs(e);
        y >= f ? l = (y - f) / w : l = (y + w - m) / w,
            l > 1 && (l -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: s,
        isEnd: o
    }),
        (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
        s && !a && t.emit("reachBeginning toEdge"),
        o && !u && t.emit("reachEnd toEdge"),
        (a && !s || u && !o) && t.emit("fromEdge"),
        t.emit("progress", i)
}
function W_() {
    const e = this
        , { slides: t, params: n, slidesEl: r, activeIndex: i } = e
        , s = e.virtual && n.virtual.enabled
        , o = a => pt(r, `.${n.slideClass}${a}, swiper-slide ${a}`)[0];
    t.forEach(a => {
        a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
    }
    );
    let l;
    if (s)
        if (n.loop) {
            let a = i - e.virtual.slidesBefore;
            a < 0 && (a = e.virtual.slides.length + a),
                a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
                l = o(`[data-swiper-slide-index="${a}"]`)
        } else
            l = o(`[data-swiper-slide-index="${i}"]`);
    else
        l = t[i];
    if (l) {
        l.classList.add(n.slideActiveClass);
        let a = I_(l, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !a && (a = t[0]),
            a && a.classList.add(n.slideNextClass);
        let u = k_(l, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !u === 0 && (u = t[t.length - 1]),
            u && u.classList.add(n.slidePrevClass)
    }
    e.emitSlidesClasses()
}
const Vs = (e, t) => {
    if (!e || e.destroyed || !e.params)
        return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        , r = t.closest(n());
    if (r) {
        let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !i && e.isElement && (r.shadowRoot ? i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
            r.shadowRoot && (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
                i && i.remove())
        }
        )),
            i && i.remove()
    }
}
    , dl = (e, t) => {
        if (!e.slides[t])
            return;
        const n = e.slides[t].querySelector('[loading="lazy"]');
        n && n.removeAttribute("loading")
    }
    , Ou = e => {
        if (!e || e.destroyed || !e.params)
            return;
        let t = e.params.lazyPreloadPrevNext;
        const n = e.slides.length;
        if (!n || !t || t < 0)
            return;
        t = Math.min(t, n);
        const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
            , i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const o = i
                , l = [o - t];
            l.push(...Array.from({
                length: t
            }).map((a, u) => o + r + u)),
                e.slides.forEach((a, u) => {
                    l.includes(a.column) && dl(e, u)
                }
                );
            return
        }
        const s = i + r - 1;
        if (e.params.rewind || e.params.loop)
            for (let o = i - t; o <= s + t; o += 1) {
                const l = (o % n + n) % n;
                (l < i || l > s) && dl(e, l)
            }
        else
            for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
                o !== i && (o > s || o < i) && dl(e, o)
    }
    ;
function G_(e) {
    const { slidesGrid: t, params: n } = e
        , r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let s = 0; s < t.length; s += 1)
        typeof t[s + 1] < "u" ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2 ? i = s : r >= t[s] && r < t[s + 1] && (i = s + 1) : r >= t[s] && (i = s);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0),
        i
}
function q_(e) {
    const t = this
        , n = t.rtlTranslate ? t.translate : -t.translate
        , { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: l } = t;
    let a = e, u;
    const c = f => {
        let m = f - t.virtual.slidesBefore;
        return m < 0 && (m = t.virtual.slides.length + m),
            m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
            m
    }
        ;
    if (typeof a > "u" && (a = G_(t)),
        r.indexOf(n) >= 0)
        u = r.indexOf(n);
    else {
        const f = Math.min(i.slidesPerGroupSkip, a);
        u = f + Math.floor((a - f) / i.slidesPerGroup)
    }
    if (u >= r.length && (u = r.length - 1),
        a === s) {
        u !== l && (t.snapIndex = u,
            t.emit("snapIndexChange")),
            t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(a));
        return
    }
    let d;
    t.virtual && i.virtual.enabled && i.loop ? d = c(a) : t.slides[a] ? d = parseInt(t.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : d = a,
        Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: u,
            previousRealIndex: o,
            realIndex: d,
            previousIndex: s,
            activeIndex: a
        }),
        t.initialized && Ou(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && (o !== d && t.emit("realIndexChange"),
            t.emit("slideChange"))
}
function K_(e, t) {
    const n = this
        , r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(l => {
        !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l)
    }
    );
    let s = !1, o;
    if (i) {
        for (let l = 0; l < n.slides.length; l += 1)
            if (n.slides[l] === i) {
                s = !0,
                    o = l;
                break
            }
    }
    if (i && s)
        n.clickedSlide = i,
            n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = o;
    else {
        n.clickedSlide = void 0,
            n.clickedIndex = void 0;
        return
    }
    r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var X_ = {
    updateSize: z_,
    updateSlides: $_,
    updateAutoHeight: F_,
    updateSlidesOffset: B_,
    updateSlidesProgress: V_,
    updateProgress: H_,
    updateSlidesClasses: W_,
    updateActiveIndex: q_,
    updateClickedSlide: K_
};
function Y_(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this
        , { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
    if (n.virtualTranslate)
        return r ? -i : i;
    if (n.cssMode)
        return i;
    let o = P_(s, e);
    return o += t.cssOverflowAdjustment(),
        r && (o = -o),
        o || 0
}
function Q_(e, t) {
    const n = this
        , { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
    let l = 0
        , a = 0;
    const u = 0;
    n.isHorizontal() ? l = r ? -e : e : a = e,
        i.roundLengths && (l = Math.floor(l),
            a = Math.floor(a)),
        n.previousTranslate = n.translate,
        n.translate = n.isHorizontal() ? l : a,
        i.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -a : i.virtualTranslate || (n.isHorizontal() ? l -= n.cssOverflowAdjustment() : a -= n.cssOverflowAdjustment(),
            s.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`);
    let c;
    const d = n.maxTranslate() - n.minTranslate();
    d === 0 ? c = 0 : c = (e - n.minTranslate()) / d,
        c !== o && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t)
}
function J_() {
    return -this.snapGrid[0]
}
function Z_() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function e1(e, t, n, r, i) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        r === void 0 && (r = !0);
    const s = this
        , { params: o, wrapperEl: l } = s;
    if (s.animating && o.preventInteractionOnTransition)
        return !1;
    const a = s.minTranslate()
        , u = s.maxTranslate();
    let c;
    if (r && e > a ? c = a : r && e < u ? c = u : c = e,
        s.updateProgress(c),
        o.cssMode) {
        const d = s.isHorizontal();
        if (t === 0)
            l[d ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!s.support.smoothScroll)
                return Ag({
                    swiper: s,
                    targetPosition: -c,
                    side: d ? "left" : "top"
                }),
                    !0;
            l.scrollTo({
                [d ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i),
            s.emit("transitionEnd"))) : (s.setTransition(t),
                s.setTranslate(c),
                n && (s.emit("beforeTransitionStart", t, i),
                    s.emit("transitionStart")),
                s.animating || (s.animating = !0,
                    s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(f) {
                        !s || s.destroyed || f.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                            s.onTranslateToWrapperTransitionEnd = null,
                            delete s.onTranslateToWrapperTransitionEnd,
                            n && s.emit("transitionEnd"))
                    }
                    ),
                    s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))),
        !0
}
var t1 = {
    getTranslate: Y_,
    setTranslate: Q_,
    minTranslate: J_,
    maxTranslate: Z_,
    translateTo: e1
};
function n1(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`,
        n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""),
        n.emit("setTransition", e, t)
}
function Mg(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: s, previousIndex: o } = t;
    let l = r;
    if (l || (s > o ? l = "next" : s < o ? l = "prev" : l = "reset"),
        t.emit(`transition ${i}`),
        n && s !== o) {
        if (l === "reset") {
            t.emit(`slideResetTransition ${i}`);
            return
        }
        t.emit(`slideChangeTransition ${i}`),
            l === "next" ? t.emit(`slideNextTransition ${i}`) : t.emit(`slidePrevTransition ${i}`)
    }
}
function r1(e, t) {
    e === void 0 && (e = !0);
    const n = this
        , { params: r } = n;
    r.cssMode || (r.autoHeight && n.updateAutoHeight(),
        Mg({
            swiper: n,
            runCallbacks: e,
            direction: t,
            step: "Start"
        }))
}
function i1(e, t) {
    e === void 0 && (e = !0);
    const n = this
        , { params: r } = n;
    n.animating = !1,
        !r.cssMode && (n.setTransition(0),
            Mg({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "End"
            }))
}
var s1 = {
    setTransition: n1,
    transitionStart: r1,
    transitionEnd: i1
};
function o1(e, t, n, r, i) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        typeof e == "string" && (e = parseInt(e, 10));
    const s = this;
    let o = e;
    o < 0 && (o = 0);
    const { params: l, snapGrid: a, slidesGrid: u, previousIndex: c, activeIndex: d, rtlTranslate: f, wrapperEl: m, enabled: w } = s;
    if (s.animating && l.preventInteractionOnTransition || !w && !r && !i)
        return !1;
    const y = Math.min(s.params.slidesPerGroupSkip, o);
    let _ = y + Math.floor((o - y) / s.params.slidesPerGroup);
    _ >= a.length && (_ = a.length - 1);
    const p = -a[_];
    if (l.normalizeSlideIndex)
        for (let v = 0; v < u.length; v += 1) {
            const S = -Math.floor(p * 100)
                , x = Math.floor(u[v] * 100)
                , C = Math.floor(u[v + 1] * 100);
            typeof u[v + 1] < "u" ? S >= x && S < C - (C - x) / 2 ? o = v : S >= x && S < C && (o = v + 1) : S >= x && (o = v)
        }
    if (s.initialized && o !== d && (!s.allowSlideNext && (f ? p > s.translate && p > s.minTranslate() : p < s.translate && p < s.minTranslate()) || !s.allowSlidePrev && p > s.translate && p > s.maxTranslate() && (d || 0) !== o))
        return !1;
    o !== (c || 0) && n && s.emit("beforeSlideChangeStart"),
        s.updateProgress(p);
    let h;
    if (o > d ? h = "next" : o < d ? h = "prev" : h = "reset",
        f && -p === s.translate || !f && p === s.translate)
        return s.updateActiveIndex(o),
            l.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            l.effect !== "slide" && s.setTranslate(p),
            h !== "reset" && (s.transitionStart(n, h),
                s.transitionEnd(n, h)),
            !1;
    if (l.cssMode) {
        const v = s.isHorizontal()
            , S = f ? p : -p;
        if (t === 0) {
            const x = s.virtual && s.params.virtual.enabled;
            x && (s.wrapperEl.style.scrollSnapType = "none",
                s._immediateVirtual = !0),
                x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(() => {
                        m[v ? "scrollLeft" : "scrollTop"] = S
                    }
                    )) : m[v ? "scrollLeft" : "scrollTop"] = S,
                x && requestAnimationFrame(() => {
                    s.wrapperEl.style.scrollSnapType = "",
                        s._immediateVirtual = !1
                }
                )
        } else {
            if (!s.support.smoothScroll)
                return Ag({
                    swiper: s,
                    targetPosition: S,
                    side: v ? "left" : "top"
                }),
                    !0;
            m.scrollTo({
                [v ? "left" : "top"]: S,
                behavior: "smooth"
            })
        }
        return !0
    }
    return s.setTransition(t),
        s.setTranslate(p),
        s.updateActiveIndex(o),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", t, r),
        s.transitionStart(n, h),
        t === 0 ? s.transitionEnd(n, h) : s.animating || (s.animating = !0,
            s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(S) {
                !s || s.destroyed || S.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.onSlideToWrapperTransitionEnd = null,
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(n, h))
            }
            ),
            s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)),
        !0
}
function a1(e, t, n, r) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    let s = e;
    return i.params.loop && (i.virtual && i.params.virtual.enabled ? s = s + i.virtual.slidesBefore : s = i.getSlideIndexByData(s)),
        i.slideTo(s, t, n, r)
}
function l1(e, t, n) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0);
    const r = this
        , { enabled: i, params: s, animating: o } = r;
    if (!i)
        return r;
    let l = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : l
        , u = r.virtual && s.virtual.enabled;
    if (s.loop) {
        if (o && !u && s.loopPreventsSliding)
            return !1;
        if (r.loopFix({
            direction: "next"
        }),
            r._clientLeft = r.wrapperEl.clientLeft,
            r.activeIndex === r.slides.length - 1 && s.cssMode)
            return requestAnimationFrame(() => {
                r.slideTo(r.activeIndex + a, e, t, n)
            }
            ),
                !0
    }
    return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + a, e, t, n)
}
function u1(e, t, n) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0);
    const r = this
        , { params: i, snapGrid: s, slidesGrid: o, rtlTranslate: l, enabled: a, animating: u } = r;
    if (!a)
        return r;
    const c = r.virtual && i.virtual.enabled;
    if (i.loop) {
        if (u && !c && i.loopPreventsSliding)
            return !1;
        r.loopFix({
            direction: "prev"
        }),
            r._clientLeft = r.wrapperEl.clientLeft
    }
    const d = l ? r.translate : -r.translate;
    function f(p) {
        return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p)
    }
    const m = f(d)
        , w = s.map(p => f(p));
    let y = s[w.indexOf(m) - 1];
    if (typeof y > "u" && i.cssMode) {
        let p;
        s.forEach((h, v) => {
            m >= h && (p = v)
        }
        ),
            typeof p < "u" && (y = s[p > 0 ? p - 1 : p])
    }
    let _ = 0;
    if (typeof y < "u" && (_ = o.indexOf(y),
        _ < 0 && (_ = r.activeIndex - 1),
        i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (_ = _ - r.slidesPerViewDynamic("previous", !0) + 1,
            _ = Math.max(_, 0))),
        i.rewind && r.isBeginning) {
        const p = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(p, e, t, n)
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return requestAnimationFrame(() => {
            r.slideTo(_, e, t, n)
        }
        ),
            !0;
    return r.slideTo(_, e, t, n)
}
function c1(e, t, n) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n)
}
function d1(e, t, n, r) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0),
        r === void 0 && (r = .5);
    const i = this;
    let s = i.activeIndex;
    const o = Math.min(i.params.slidesPerGroupSkip, s)
        , l = o + Math.floor((s - o) / i.params.slidesPerGroup)
        , a = i.rtlTranslate ? i.translate : -i.translate;
    if (a >= i.snapGrid[l]) {
        const u = i.snapGrid[l]
            , c = i.snapGrid[l + 1];
        a - u > (c - u) * r && (s += i.params.slidesPerGroup)
    } else {
        const u = i.snapGrid[l - 1]
            , c = i.snapGrid[l];
        a - u <= (c - u) * r && (s -= i.params.slidesPerGroup)
    }
    return s = Math.max(s, 0),
        s = Math.min(s, i.slidesGrid.length - 1),
        i.slideTo(s, e, t, n)
}
function f1() {
    const e = this
        , { params: t, slidesEl: n } = e
        , r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex, s;
    const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
            t.centeredSlides ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
                i = e.getSlideIndex(pt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]),
                Iu(() => {
                    e.slideTo(i)
                }
                )) : e.slideTo(i) : i > e.slides.length - r ? (e.loopFix(),
                    i = e.getSlideIndex(pt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]),
                    Iu(() => {
                        e.slideTo(i)
                    }
                    )) : e.slideTo(i)
    } else
        e.slideTo(i)
}
var p1 = {
    slideTo: o1,
    slideToLoop: a1,
    slideNext: l1,
    slidePrev: u1,
    slideReset: c1,
    slideToClosest: d1,
    slideToClickedSlide: f1
};
function h1(e) {
    const t = this
        , { params: n, slidesEl: r } = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled)
        return;
    pt(r, `.${n.slideClass}, swiper-slide`).forEach((s, o) => {
        s.setAttribute("data-swiper-slide-index", o)
    }
    ),
        t.loopFix({
            slideRealIndex: e,
            direction: n.centeredSlides ? void 0 : "next"
        })
}
function m1(e) {
    let { slideRealIndex: t, slideTo: n = !0, direction: r, setTranslate: i, activeSlideIndex: s, byController: o, byMousewheel: l } = e === void 0 ? {} : e;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const { slides: u, allowSlidePrev: c, allowSlideNext: d, slidesEl: f, params: m } = a;
    if (a.allowSlidePrev = !0,
        a.allowSlideNext = !0,
        a.virtual && m.virtual.enabled) {
        n && (!m.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : m.centeredSlides && a.snapIndex < m.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
            a.allowSlidePrev = c,
            a.allowSlideNext = d,
            a.emit("loopFix");
        return
    }
    const w = m.slidesPerView === "auto" ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
    let y = m.loopedSlides || w;
    y % m.slidesPerGroup !== 0 && (y += m.slidesPerGroup - y % m.slidesPerGroup),
        a.loopedSlides = y;
    const _ = []
        , p = [];
    let h = a.activeIndex;
    typeof s > "u" ? s = a.getSlideIndex(a.slides.filter(E => E.classList.contains(m.slideActiveClass))[0]) : h = s;
    const v = r === "next" || !r
        , S = r === "prev" || !r;
    let x = 0
        , C = 0;
    if (s < y) {
        x = Math.max(y - s, m.slidesPerGroup);
        for (let E = 0; E < y - s; E += 1) {
            const b = E - Math.floor(E / u.length) * u.length;
            _.push(u.length - b - 1)
        }
    } else if (s > a.slides.length - y * 2) {
        C = Math.max(s - (a.slides.length - y * 2), m.slidesPerGroup);
        for (let E = 0; E < C; E += 1) {
            const b = E - Math.floor(E / u.length) * u.length;
            p.push(b)
        }
    }
    if (S && _.forEach(E => {
        a.slides[E].swiperLoopMoveDOM = !0,
            f.prepend(a.slides[E]),
            a.slides[E].swiperLoopMoveDOM = !1
    }
    ),
        v && p.forEach(E => {
            a.slides[E].swiperLoopMoveDOM = !0,
                f.append(a.slides[E]),
                a.slides[E].swiperLoopMoveDOM = !1
        }
        ),
        a.recalcSlides(),
        m.slidesPerView === "auto" && a.updateSlides(),
        m.watchSlidesProgress && a.updateSlidesOffset(),
        n) {
        if (_.length > 0 && S)
            if (typeof t > "u") {
                const E = a.slidesGrid[h]
                    , P = a.slidesGrid[h + x] - E;
                l ? a.setTranslate(a.translate - P) : (a.slideTo(h + x, 0, !1, !0),
                    i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += P,
                        a.touchEventsData.currentTranslate = a.translate))
            } else
                i && (a.slideToLoop(t, 0, !1, !0),
                    a.touchEventsData.currentTranslate = a.translate);
        else if (p.length > 0 && v)
            if (typeof t > "u") {
                const E = a.slidesGrid[h]
                    , P = a.slidesGrid[h - C] - E;
                l ? a.setTranslate(a.translate - P) : (a.slideTo(h - C, 0, !1, !0),
                    i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += P,
                        a.touchEventsData.currentTranslate = a.translate))
            } else
                a.slideToLoop(t, 0, !1, !0)
    }
    if (a.allowSlidePrev = c,
        a.allowSlideNext = d,
        a.controller && a.controller.control && !o) {
        const E = {
            slideRealIndex: t,
            direction: r,
            setTranslate: i,
            activeSlideIndex: s,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(b => {
            !b.destroyed && b.params.loop && b.loopFix({
                ...E,
                slideTo: b.params.slidesPerView === m.slidesPerView ? n : !1
            })
        }
        ) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
            ...E,
            slideTo: a.controller.control.params.slidesPerView === m.slidesPerView ? n : !1
        })
    }
    a.emit("loopFix")
}
function g1() {
    const e = this
        , { params: t, slidesEl: n } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach(i => {
        const s = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        r[s] = i
    }
    ),
        e.slides.forEach(i => {
            i.removeAttribute("data-swiper-slide-index")
        }
        ),
        r.forEach(i => {
            n.append(i)
        }
        ),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0)
}
var v1 = {
    loopCreate: h1,
    loopFix: m1,
    loopDestroy: g1
};
function y1(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
        n.style.cursor = "move",
        n.style.cursor = e ? "grabbing" : "grab",
        t.isElement && requestAnimationFrame(() => {
            t.__preventObserver__ = !1
        }
        )
}
function w1() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
        e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
        e.isElement && requestAnimationFrame(() => {
            e.__preventObserver__ = !1
        }
        ))
}
var S1 = {
    setGrabCursor: y1,
    unsetGrabCursor: w1
};
function _1(e, t) {
    t === void 0 && (t = this);
    function n(r) {
        if (!r || r === nr() || r === Ve())
            return null;
        r.assignedSlot && (r = r.assignedSlot);
        const i = r.closest(e);
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
    }
    return n(t)
}
function x1(e) {
    const t = this
        , n = nr()
        , r = Ve()
        , i = t.touchEventsData;
    i.evCache.push(e);
    const { params: s, touches: o, enabled: l } = t;
    if (!l || !s.simulateTouch && e.pointerType === "mouse" || t.animating && s.preventInteractionOnTransition)
        return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let u = a.target;
    if (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || i.isTouched && i.isMoved)
        return;
    const c = !!s.noSwipingClass && s.noSwipingClass !== ""
        , d = e.composedPath ? e.composedPath() : e.path;
    c && a.target && a.target.shadowRoot && d && (u = d[0]);
    const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
        , m = !!(a.target && a.target.shadowRoot);
    if (s.noSwiping && (m ? _1(f, u) : u.closest(f))) {
        t.allowClick = !0;
        return
    }
    if (s.swipeHandler && !u.closest(s.swipeHandler))
        return;
    o.currentX = a.pageX,
        o.currentY = a.pageY;
    const w = o.currentX
        , y = o.currentY
        , _ = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
        , p = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (_ && (w <= p || w >= r.innerWidth - p))
        if (_ === "prevent")
            e.preventDefault();
        else
            return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
        o.startX = w,
        o.startY = y,
        i.touchStartTime = Co(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        s.threshold > 0 && (i.allowThresholdMove = !1);
    let h = !0;
    u.matches(i.focusableElements) && (h = !1,
        u.nodeName === "SELECT" && (i.isTouched = !1)),
        n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== u && n.activeElement.blur();
    const v = h && t.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || v) && !u.isContentEditable && a.preventDefault(),
        s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", a)
}
function E1(e) {
    const t = nr()
        , n = this
        , r = n.touchEventsData
        , { params: i, touches: s, rtlTranslate: o, enabled: l } = n;
    if (!l || !i.simulateTouch && e.pointerType === "mouse")
        return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent),
        !r.isTouched) {
        r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
        return
    }
    const u = r.evCache.findIndex(E => E.pointerId === a.pointerId);
    u >= 0 && (r.evCache[u] = a);
    const c = r.evCache.length > 1 ? r.evCache[0] : a
        , d = c.pageX
        , f = c.pageY;
    if (a.preventedByNestedSwiper) {
        s.startX = d,
            s.startY = f;
        return
    }
    if (!n.allowTouchMove) {
        a.target.matches(r.focusableElements) || (n.allowClick = !1),
            r.isTouched && (Object.assign(s, {
                startX: d,
                startY: f,
                prevX: n.touches.currentX,
                prevY: n.touches.currentY,
                currentX: d,
                currentY: f
            }),
                r.touchStartTime = Co());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if (f < s.startY && n.translate <= n.maxTranslate() || f > s.startY && n.translate >= n.minTranslate()) {
                r.isTouched = !1,
                    r.isMoved = !1;
                return
            }
        } else if (d < s.startX && n.translate <= n.maxTranslate() || d > s.startX && n.translate >= n.minTranslate())
            return
    }
    if (t.activeElement && a.target === t.activeElement && a.target.matches(r.focusableElements)) {
        r.isMoved = !0,
            n.allowClick = !1;
        return
    }
    if (r.allowTouchCallbacks && n.emit("touchMove", a),
        a.targetTouches && a.targetTouches.length > 1)
        return;
    s.currentX = d,
        s.currentY = f;
    const m = s.currentX - s.startX
        , w = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(m ** 2 + w ** 2) < n.params.threshold)
        return;
    if (typeof r.isScrolling > "u") {
        let E;
        n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : m * m + w * w >= 25 && (E = Math.atan2(Math.abs(w), Math.abs(m)) * 180 / Math.PI,
            r.isScrolling = n.isHorizontal() ? E > i.touchAngle : 90 - E > i.touchAngle)
    }
    if (r.isScrolling && n.emit("touchMoveOpposite", a),
        typeof r.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0),
        r.isScrolling || n.zoom && n.params.zoom && n.params.zoom.enabled && r.evCache.length > 1) {
        r.isTouched = !1;
        return
    }
    if (!r.startMoving)
        return;
    n.allowClick = !1,
        !i.cssMode && a.cancelable && a.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
    let y = n.isHorizontal() ? m : w
        , _ = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    i.oneWayMovement && (y = Math.abs(y) * (o ? 1 : -1),
        _ = Math.abs(_) * (o ? 1 : -1)),
        s.diff = y,
        y *= i.touchRatio,
        o && (y = -y,
            _ = -_);
    const p = n.touchesDirection;
    n.swipeDirection = y > 0 ? "prev" : "next",
        n.touchesDirection = _ > 0 ? "prev" : "next";
    const h = n.params.loop && !i.cssMode
        , v = n.swipeDirection === "next" && n.allowSlideNext || n.swipeDirection === "prev" && n.allowSlidePrev;
    if (!r.isMoved) {
        if (h && v && n.loopFix({
            direction: n.swipeDirection
        }),
            r.startTranslate = n.getTranslate(),
            n.setTransition(0),
            n.animating) {
            const E = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            n.wrapperEl.dispatchEvent(E)
        }
        r.allowMomentumBounce = !1,
            i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
            n.emit("sliderFirstMove", a)
    }
    let S;
    r.isMoved && p !== n.touchesDirection && h && v && Math.abs(y) >= 1 && (n.loopFix({
        direction: n.swipeDirection,
        setTranslate: !0
    }),
        S = !0),
        n.emit("sliderMove", a),
        r.isMoved = !0,
        r.currentTranslate = y + r.startTranslate;
    let x = !0
        , C = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (C = 0),
        y > 0 ? (h && v && !S && r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) && n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
            r.currentTranslate > n.minTranslate() && (x = !1,
                i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + y) ** C))) : y < 0 && (h && v && !S && r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) && n.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
                }),
                    r.currentTranslate < n.maxTranslate() && (x = !1,
                        i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - y) ** C))),
        x && (a.preventedByNestedSwiper = !0),
        !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
        if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                r.allowThresholdMove = !0,
                    s.startX = s.currentX,
                    s.startY = s.currentY,
                    r.currentTranslate = r.startTranslate,
                    s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                return
            }
        } else {
            r.currentTranslate = r.startTranslate;
            return
        }
    !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(),
        n.updateSlidesClasses()),
        i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate))
}
function T1(e) {
    const t = this
        , n = t.touchEventsData
        , r = n.evCache.findIndex(v => v.pointerId === e.pointerId);
    if (r >= 0 && n.evCache.splice(r, 1),
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && !(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView)))
        return;
    const { params: i, touches: s, rtlTranslate: o, slidesGrid: l, enabled: a } = t;
    if (!a || !i.simulateTouch && e.pointerType === "mouse")
        return;
    let u = e;
    if (u.originalEvent && (u = u.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", u),
        n.allowTouchCallbacks = !1,
        !n.isTouched) {
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            n.isMoved = !1,
            n.startMoving = !1;
        return
    }
    i.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const c = Co()
        , d = c - n.touchStartTime;
    if (t.allowClick) {
        const v = u.path || u.composedPath && u.composedPath();
        t.updateClickedSlide(v && v[0] || u.target, v),
            t.emit("tap click", u),
            d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)
    }
    if (n.lastClickTime = Co(),
        Iu(() => {
            t.destroyed || (t.allowClick = !0)
        }
        ),
        !n.isTouched || !n.isMoved || !t.swipeDirection || s.diff === 0 || n.currentTranslate === n.startTranslate) {
        n.isTouched = !1,
            n.isMoved = !1,
            n.startMoving = !1;
        return
    }
    n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1;
    let f;
    if (i.followFinger ? f = o ? t.translate : -t.translate : f = -n.currentTranslate,
        i.cssMode)
        return;
    if (i.freeMode && i.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    let m = 0
        , w = t.slidesSizesGrid[0];
    for (let v = 0; v < l.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const S = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof l[v + S] < "u" ? f >= l[v] && f < l[v + S] && (m = v,
            w = l[v + S] - l[v]) : f >= l[v] && (m = v,
                w = l[l.length - 1] - l[l.length - 2])
    }
    let y = null
        , _ = null;
    i.rewind && (t.isBeginning ? _ = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (y = 0));
    const p = (f - l[m]) / w
        , h = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (p >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? y : m + h) : t.slideTo(m)),
            t.swipeDirection === "prev" && (p > 1 - i.longSwipesRatio ? t.slideTo(m + h) : _ !== null && p < 0 && Math.abs(p) > i.longSwipesRatio ? t.slideTo(_) : t.slideTo(m))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl) ? u.target === t.navigation.nextEl ? t.slideTo(m + h) : t.slideTo(m) : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : m + h),
            t.swipeDirection === "prev" && t.slideTo(_ !== null ? _ : m))
    }
}
function tp() {
    const e = this
        , { params: t, el: n } = e;
    if (n && n.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e
        , o = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
    const l = o && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
                , 500)),
        e.allowSlidePrev = i,
        e.allowSlideNext = r,
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
}
function b1(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
}
function P1() {
    const e = this
        , { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r)
        return;
    e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        e.translate === 0 && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    let i;
    const s = e.maxTranslate() - e.minTranslate();
    s === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / s,
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
}
function C1(e) {
    const t = this;
    Vs(t, e.target),
        !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
let np = !1;
function k1() { }
const Dg = (e, t) => {
    const n = nr()
        , { params: r, el: i, wrapperEl: s, device: o } = e
        , l = !!r.nested
        , a = t === "on" ? "addEventListener" : "removeEventListener"
        , u = t;
    i[a]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
        n[a]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
        }),
        n[a]("pointerup", e.onTouchEnd, {
            passive: !0
        }),
        n[a]("pointercancel", e.onTouchEnd, {
            passive: !0
        }),
        n[a]("pointerout", e.onTouchEnd, {
            passive: !0
        }),
        n[a]("pointerleave", e.onTouchEnd, {
            passive: !0
        }),
        n[a]("contextmenu", e.onTouchEnd, {
            passive: !0
        }),
        (r.preventClicks || r.preventClicksPropagation) && i[a]("click", e.onClick, !0),
        r.cssMode && s[a]("scroll", e.onScroll),
        r.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", tp, !0) : e[u]("observerUpdate", tp, !0),
        i[a]("load", e.onLoad, {
            capture: !0
        })
}
    ;
function I1() {
    const e = this
        , t = nr()
        , { params: n } = e;
    e.onTouchStart = x1.bind(e),
        e.onTouchMove = E1.bind(e),
        e.onTouchEnd = T1.bind(e),
        n.cssMode && (e.onScroll = P1.bind(e)),
        e.onClick = b1.bind(e),
        e.onLoad = C1.bind(e),
        np || (t.addEventListener("touchstart", k1),
            np = !0),
        Dg(e, "on")
}
function O1() {
    Dg(this, "off")
}
var N1 = {
    attachEvents: I1,
    detachEvents: O1
};
const rp = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function R1() {
    const e = this
        , { realIndex: t, initialized: n, params: r, el: i } = e
        , s = r.breakpoints;
    if (!s || s && Object.keys(s).length === 0)
        return;
    const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o)
        return;
    const a = (o in s ? s[o] : void 0) || e.originalParams
        , u = rp(e, r)
        , c = rp(e, a)
        , d = r.enabled;
    u && !c ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()) : !u && c && (i.classList.add(`${r.containerModifierClass}grid`),
            (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && r.grid.fill === "column") && i.classList.add(`${r.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(p => {
            if (typeof a[p] > "u")
                return;
            const h = r[p] && r[p].enabled
                , v = a[p] && a[p].enabled;
            h && !v && e[p].disable(),
                !h && v && e[p].enable()
        }
        );
    const f = a.direction && a.direction !== r.direction
        , m = r.loop && (a.slidesPerView !== r.slidesPerView || f)
        , w = r.loop;
    f && n && e.changeDirection(),
        je(e.params, a);
    const y = e.params.enabled
        , _ = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
        d && !y ? e.disable() : !d && y && e.enable(),
        e.currentBreakpoint = o,
        e.emit("_beforeBreakpoint", a),
        n && (m ? (e.loopDestroy(),
            e.loopCreate(t),
            e.updateSlides()) : !w && _ ? (e.loopCreate(t),
                e.updateSlides()) : w && !_ && e.loopDestroy()),
        e.emit("breakpoint", a)
}
function A1(e, t, n) {
    if (t === void 0 && (t = "window"),
        !e || t === "container" && !n)
        return;
    let r = !1;
    const i = Ve()
        , s = t === "window" ? i.innerHeight : n.clientHeight
        , o = Object.keys(e).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const a = parseFloat(l.substr(1));
                return {
                    value: s * a,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        }
        );
    o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const { point: a, value: u } = o[l];
        t === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a) : u <= n.clientWidth && (r = a)
    }
    return r || "max"
}
var L1 = {
    setBreakpoint: R1,
    getBreakpoint: A1
};
function j1(e, t) {
    const n = [];
    return e.forEach(r => {
        typeof r == "object" ? Object.keys(r).forEach(i => {
            r[i] && n.push(t + i)
        }
        ) : typeof r == "string" && n.push(t + r)
    }
    ),
        n
}
function M1() {
    const e = this
        , { classNames: t, params: n, rtl: r, el: i, device: s } = e
        , o = j1(["initialized", n.direction, {
            "free-mode": e.params.freeMode && n.freeMode.enabled
        }, {
                autoheight: n.autoHeight
            }, {
                rtl: r
            }, {
                grid: n.grid && n.grid.rows > 1
            }, {
                "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
            }, {
                android: s.android
            }, {
                ios: s.ios
            }, {
                "css-mode": n.cssMode
            }, {
                centered: n.cssMode && n.centeredSlides
            }, {
                "watch-progress": n.watchSlidesProgress
            }], n.containerModifierClass);
    t.push(...o),
        i.classList.add(...t),
        e.emitContainerClasses()
}
function D1() {
    const e = this
        , { el: t, classNames: n } = e;
    t.classList.remove(...n),
        e.emitContainerClasses()
}
var U1 = {
    addClasses: M1,
    removeClasses: D1
};
function z1() {
    const e = this
        , { isLocked: t, params: n } = e
        , { slidesOffsetBefore: r } = n;
    if (r) {
        const i = e.slides.length - 1
            , s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
        e.isLocked = e.size > s
    } else
        e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
        n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
        t && t !== e.isLocked && (e.isEnd = !1),
        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var $1 = {
    checkOverflow: z1
}
    , Nu = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
function F1(e, t) {
    return function(r) {
        r === void 0 && (r = {});
        const i = Object.keys(r)[0]
            , s = r[i];
        if (typeof s != "object" || s === null) {
            je(t, r);
            return
        }
        if (e[i] === !0 && (e[i] = {
            enabled: !0
        }),
            i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
            !(i in e && "enabled" in s)) {
            je(t, r);
            return
        }
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
            e[i] || (e[i] = {
                enabled: !1
            }),
            je(t, r)
    }
}
const fl = {
    eventsEmitter: U_,
    update: X_,
    translate: t1,
    transition: s1,
    slide: p1,
    loop: v1,
    grabCursor: S1,
    events: N1,
    breakpoints: L1,
    checkOverflow: $1,
    classes: U1
}
    , pl = {};
let Ji = class bt {
    constructor() {
        let t, n;
        for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
            i[s] = arguments[s];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? n = i[0] : [t, n] = i,
            n || (n = {}),
            n = je({}, n),
            t && !n.el && (n.el = t);
        const o = nr();
        if (n.el && typeof n.el == "string" && o.querySelectorAll(n.el).length > 1) {
            const c = [];
            return o.querySelectorAll(n.el).forEach(d => {
                const f = je({}, n, {
                    el: d
                });
                c.push(new bt(f))
            }
            ),
                c
        }
        const l = this;
        l.__swiper__ = !0,
            l.support = jg(),
            l.device = A_({
                userAgent: n.userAgent
            }),
            l.browser = j_(),
            l.eventsListeners = {},
            l.eventsAnyListeners = [],
            l.modules = [...l.__modules__],
            n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
        const a = {};
        l.modules.forEach(c => {
            c({
                params: n,
                swiper: l,
                extendParams: F1(n, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        }
        );
        const u = je({}, Nu, a);
        return l.params = je({}, u, pl, n),
            l.originalParams = je({}, l.params),
            l.passedParams = je({}, n),
            l.params && l.params.on && Object.keys(l.params.on).forEach(c => {
                l.on(c, l.params.on[c])
            }
            ),
            l.params && l.params.onAny && l.onAny(l.params.onAny),
            Object.assign(l, {
                enabled: l.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return l.params.direction === "horizontal"
                },
                isVertical() {
                    return l.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            l.emit("_swiper"),
            l.params.init && l.init(),
            l
    }
    getSlideIndex(t) {
        const { slidesEl: n, params: r } = this
            , i = pt(n, `.${r.slideClass}, swiper-slide`)
            , s = Zf(i[0]);
        return Zf(t) - s
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(n => n.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
            , { slidesEl: n, params: r } = t;
        t.slides = pt(n, `.${r.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
            t.params.grabCursor && t.setGrabCursor(),
            t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
            t.params.grabCursor && t.unsetGrabCursor(),
            t.emit("disable"))
    }
    setProgress(t, n) {
        const r = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = r.minTranslate()
            , o = (r.maxTranslate() - i) * t + i;
        r.translateTo(o, typeof n > "u" ? 0 : n),
            r.updateActiveIndex(),
            r.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = t.el.className.split(" ").filter(r => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "))
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed ? "" : t.className.split(" ").filter(r => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = [];
        t.slides.forEach(r => {
            const i = t.getSlideClasses(r);
            n.push({
                slideEl: r,
                classNames: i
            }),
                t.emit("_slideClass", r, i)
        }
        ),
            t.emit("_slideClasses", n)
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = "current"),
            n === void 0 && (n = !1);
        const r = this
            , { params: i, slides: s, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: u } = r;
        let c = 1;
        if (typeof i.slidesPerView == "number")
            return i.slidesPerView;
        if (i.centeredSlides) {
            let d = s[u] ? s[u].swiperSlideSize : 0, f;
            for (let m = u + 1; m < s.length; m += 1)
                s[m] && !f && (d += s[m].swiperSlideSize,
                    c += 1,
                    d > a && (f = !0));
            for (let m = u - 1; m >= 0; m -= 1)
                s[m] && !f && (d += s[m].swiperSlideSize,
                    c += 1,
                    d > a && (f = !0))
        } else if (t === "current")
            for (let d = u + 1; d < s.length; d += 1)
                (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
        else
            for (let d = u - 1; d >= 0; d -= 1)
                o[u] - o[d] < a && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const { snapGrid: n, params: r } = t;
        r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
                o.complete && Vs(t, o)
            }
            ),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
        function i() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate
                , l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
            t.setTranslate(l),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
        }
        let s;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode)
            i(),
                r.autoHeight && t.updateAutoHeight();
        else {
            if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                s = t.slideTo(o.length - 1, 0, !1, !0)
            } else
                s = t.slideTo(t.activeIndex, 0, !1, !0);
            s || i()
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
            t.emit("update")
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const r = this
            , i = r.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"),
            t === i || t !== "horizontal" && t !== "vertical" || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
                r.el.classList.add(`${r.params.containerModifierClass}${t}`),
                r.emitContainerClasses(),
                r.params.direction = t,
                r.slides.forEach(s => {
                    t === "vertical" ? s.style.width = "" : s.style.height = ""
                }
                ),
                r.emit("changeDirection"),
                n && r.update()),
            r
    }
    changeLanguageDirection(t) {
        const n = this;
        n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl",
            n.rtlTranslate = n.params.direction === "horizontal" && n.rtl,
            n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
                n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
                    n.el.dir = "ltr"),
            n.update())
    }
    mount(t) {
        const n = this;
        if (n.mounted)
            return !0;
        let r = t || n.params.el;
        if (typeof r == "string" && (r = document.querySelector(r)),
            !r)
            return !1;
        r.swiper = n,
            r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
        const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = (() => r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : pt(r, i())[0])();
        return !o && n.params.createElements && (o = Lg("div", n.params.wrapperClass),
            r.append(o),
            pt(r, `.${n.params.slideClass}`).forEach(l => {
                o.append(l)
            }
            )),
            Object.assign(n, {
                el: r,
                wrapperEl: o,
                slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
                hostEl: n.isElement ? r.parentNode.host : r,
                mounted: !0,
                rtl: r.dir.toLowerCase() === "rtl" || sn(r, "direction") === "rtl",
                rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || sn(r, "direction") === "rtl"),
                wrongRTL: sn(o, "display") === "-webkit-box"
            }),
            !0
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1)
            return n;
        n.emit("beforeInit"),
            n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
            n.updateSize(),
            n.updateSlides(),
            n.params.watchOverflow && n.checkOverflow(),
            n.params.grabCursor && n.enabled && n.setGrabCursor(),
            n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
            n.params.loop && n.loopCreate(),
            n.attachEvents();
        const i = [...n.el.querySelectorAll('[loading="lazy"]')];
        return n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach(s => {
                s.complete ? Vs(n, s) : s.addEventListener("load", o => {
                    Vs(n, o.target)
                }
                )
            }
            ),
            Ou(n),
            n.initialized = !0,
            Ou(n),
            n.emit("init"),
            n.emit("afterInit"),
            n
    }
    destroy(t, n) {
        t === void 0 && (t = !0),
            n === void 0 && (n = !0);
        const r = this
            , { params: i, el: s, wrapperEl: o, slides: l } = r;
        return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"),
            r.initialized = !1,
            r.detachEvents(),
            i.loop && r.loopDestroy(),
            n && (r.removeClasses(),
                s.removeAttribute("style"),
                o.removeAttribute("style"),
                l && l.length && l.forEach(a => {
                    a.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
                        a.removeAttribute("style"),
                        a.removeAttribute("data-swiper-slide-index")
                }
                )),
            r.emit("destroy"),
            Object.keys(r.eventsListeners).forEach(a => {
                r.off(a)
            }
            ),
            t !== !1 && (r.el.swiper = null,
                T_(r)),
            r.destroyed = !0),
            null
    }
    static extendDefaults(t) {
        je(pl, t)
    }
    static get extendedDefaults() {
        return pl
    }
    static get defaults() {
        return Nu
    }
    static installModule(t) {
        bt.prototype.__modules__ || (bt.prototype.__modules__ = []);
        const n = bt.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(n => bt.installModule(n)),
            bt) : (bt.installModule(t),
                bt)
    }
}
    ;
Object.keys(fl).forEach(e => {
    Object.keys(fl[e]).forEach(t => {
        Ji.prototype[t] = fl[e][t]
    }
    )
}
);
Ji.use([M_, D_]);
const Ug = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function Kn(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}
function $n(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(r => n.indexOf(r) < 0).forEach(r => {
        typeof e[r] > "u" ? e[r] = t[r] : Kn(t[r]) && Kn(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : $n(e[r], t[r]) : e[r] = t[r]
    }
    )
}
function zg(e) {
    return e === void 0 && (e = {}),
        e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function $g(e) {
    return e === void 0 && (e = {}),
        e.pagination && typeof e.pagination.el > "u"
}
function Fg(e) {
    return e === void 0 && (e = {}),
        e.scrollbar && typeof e.scrollbar.el > "u"
}
function Bg(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(r => r.trim()).filter(r => !!r)
        , n = [];
    return t.forEach(r => {
        n.indexOf(r) < 0 && n.push(r)
    }
    ),
        n.join(" ")
}
function B1(e) {
    return e === void 0 && (e = ""),
        e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function V1(e) {
    let { swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: s, prevEl: o, scrollbarEl: l, paginationEl: a } = e;
    const u = i.filter(P => P !== "children" && P !== "direction" && P !== "wrapperClass")
        , { params: c, pagination: d, navigation: f, scrollbar: m, virtual: w, thumbs: y } = t;
    let _, p, h, v, S, x, C, E;
    i.includes("thumbs") && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (_ = !0),
        i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (p = !0),
        i.includes("pagination") && r.pagination && (r.pagination.el || a) && (c.pagination || c.pagination === !1) && d && !d.el && (h = !0),
        i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (c.scrollbar || c.scrollbar === !1) && m && !m.el && (v = !0),
        i.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || s) && (c.navigation || c.navigation === !1) && f && !f.prevEl && !f.nextEl && (S = !0);
    const b = P => {
        t[P] && (t[P].destroy(),
            P === "navigation" ? (t.isElement && (t[P].prevEl.remove(),
                t[P].nextEl.remove()),
                c[P].prevEl = void 0,
                c[P].nextEl = void 0,
                t[P].prevEl = void 0,
                t[P].nextEl = void 0) : (t.isElement && t[P].el.remove(),
                    c[P].el = void 0,
                    t[P].el = void 0))
    }
        ;
    i.includes("loop") && t.isElement && (c.loop && !r.loop ? x = !0 : !c.loop && r.loop ? C = !0 : E = !0),
        u.forEach(P => {
            if (Kn(c[P]) && Kn(r[P]))
                $n(c[P], r[P]),
                    (P === "navigation" || P === "pagination" || P === "scrollbar") && "enabled" in r[P] && !r[P].enabled && b(P);
            else {
                const A = r[P];
                (A === !0 || A === !1) && (P === "navigation" || P === "pagination" || P === "scrollbar") ? A === !1 && b(P) : c[P] = r[P]
            }
        }
        ),
        u.includes("controller") && !p && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control),
        i.includes("children") && n && w && c.virtual.enabled && (w.slides = n,
            w.update(!0)),
        i.includes("children") && n && c.loop && (E = !0),
        _ && y.init() && y.update(!0),
        p && (t.controller.control = c.controller.control),
        h && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"),
            a.classList.add("swiper-pagination"),
            a.part.add("pagination"),
            t.el.appendChild(a)),
            a && (c.pagination.el = a),
            d.init(),
            d.render(),
            d.update()),
        v && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
            l.classList.add("swiper-scrollbar"),
            l.part.add("scrollbar"),
            t.el.appendChild(l)),
            l && (c.scrollbar.el = l),
            m.init(),
            m.updateSize(),
            m.setTranslate()),
        S && (t.isElement && ((!s || typeof s == "string") && (s = document.createElement("div"),
            s.classList.add("swiper-button-next"),
            s.innerHTML = t.hostEl.constructor.nextButtonSvg,
            s.part.add("button-next"),
            t.el.appendChild(s)),
            (!o || typeof o == "string") && (o = document.createElement("div"),
                o.classList.add("swiper-button-prev"),
                o.innerHTML = t.hostEl.constructor.prevButtonSvg,
                o.part.add("button-prev"),
                t.el.appendChild(o))),
            s && (c.navigation.nextEl = s),
            o && (c.navigation.prevEl = o),
            f.init(),
            f.update()),
        i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
        i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
        i.includes("direction") && t.changeDirection(r.direction, !1),
        (x || E) && t.loopDestroy(),
        (C || E) && t.loopCreate(),
        t.update()
}
function H1(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = !0);
    const n = {
        on: {}
    }
        , r = {}
        , i = {};
    $n(n, Nu),
        n._emitClasses = !0,
        n.init = !1;
    const s = {}
        , o = Ug.map(a => a.replace(/_/, ""))
        , l = Object.assign({}, e);
    return Object.keys(l).forEach(a => {
        typeof e[a] > "u" || (o.indexOf(a) >= 0 ? Kn(e[a]) ? (n[a] = {},
            i[a] = {},
            $n(n[a], e[a]),
            $n(i[a], e[a])) : (n[a] = e[a],
                i[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? t ? r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s[a] = e[a])
    }
    ),
        ["navigation", "pagination", "scrollbar"].forEach(a => {
            n[a] === !0 && (n[a] = {}),
                n[a] === !1 && delete n[a]
        }
        ),
    {
        params: n,
        passedParams: i,
        rest: s,
        events: r
    }
}
function W1(e, t) {
    let { el: n, nextEl: r, prevEl: i, paginationEl: s, scrollbarEl: o, swiper: l } = e;
    zg(t) && r && i && (l.params.navigation.nextEl = r,
        l.originalParams.navigation.nextEl = r,
        l.params.navigation.prevEl = i,
        l.originalParams.navigation.prevEl = i),
        $g(t) && s && (l.params.pagination.el = s,
            l.originalParams.pagination.el = s),
        Fg(t) && o && (l.params.scrollbar.el = o,
            l.originalParams.scrollbar.el = o),
        l.init(n)
}
function G1(e, t, n, r, i) {
    const s = [];
    if (!t)
        return s;
    const o = a => {
        s.indexOf(a) < 0 && s.push(a)
    }
        ;
    if (n && r) {
        const a = r.map(i)
            , u = n.map(i);
        a.join("") !== u.join("") && o("children"),
            r.length !== n.length && o("children")
    }
    return Ug.filter(a => a[0] === "_").map(a => a.replace(/_/, "")).forEach(a => {
        if (a in e && a in t)
            if (Kn(e[a]) && Kn(t[a])) {
                const u = Object.keys(e[a])
                    , c = Object.keys(t[a]);
                u.length !== c.length ? o(a) : (u.forEach(d => {
                    e[a][d] !== t[a][d] && o(a)
                }
                ),
                    c.forEach(d => {
                        e[a][d] !== t[a][d] && o(a)
                    }
                    ))
            } else
                e[a] !== t[a] && o(a)
    }
    ),
        s
}
const q1 = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
    ;
function ko() {
    return ko = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ko.apply(this, arguments)
}
function Vg(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function Hg(e) {
    const t = [];
    return W.Children.toArray(e).forEach(n => {
        Vg(n) ? t.push(n) : n.props && n.props.children && Hg(n.props.children).forEach(r => t.push(r))
    }
    ),
        t
}
function K1(e) {
    const t = []
        , n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
        };
    return W.Children.toArray(e).forEach(r => {
        if (Vg(r))
            t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
            n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
            const i = Hg(r.props.children);
            i.length > 0 ? i.forEach(s => t.push(s)) : n["container-end"].push(r)
        } else
            n["container-end"].push(r)
    }
    ),
    {
        slides: t,
        slots: n
    }
}
function X1(e, t, n) {
    if (!n)
        return null;
    const r = c => {
        let d = c;
        return c < 0 ? d = t.length + c : d >= t.length && (d = d - t.length),
            d
    }
        , i = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
        } : {
            top: `${n.offset}px`
        }
        , { from: s, to: o } = n
        , l = e.params.loop ? -t.length : 0
        , a = e.params.loop ? t.length * 2 : t.length
        , u = [];
    for (let c = l; c < a; c += 1)
        c >= s && c <= o && u.push(t[r(c)]);
    return u.map((c, d) => W.cloneElement(c, {
        swiper: e,
        style: i,
        key: `slide-${d}`
    }))
}
function wi(e, t) {
    return typeof window > "u" ? T.useEffect(e, t) : T.useLayoutEffect(e, t)
}
const ip = T.createContext(null)
    , Y1 = T.createContext(null)
    , Kc = T.forwardRef(function(e, t) {
        let { className: n, tag: r = "div", wrapperTag: i = "div", children: s, onSwiper: o, ...l } = e === void 0 ? {} : e
            , a = !1;
        const [u, c] = T.useState("swiper")
            , [d, f] = T.useState(null)
            , [m, w] = T.useState(!1)
            , y = T.useRef(!1)
            , _ = T.useRef(null)
            , p = T.useRef(null)
            , h = T.useRef(null)
            , v = T.useRef(null)
            , S = T.useRef(null)
            , x = T.useRef(null)
            , C = T.useRef(null)
            , E = T.useRef(null)
            , { params: b, passedParams: P, rest: A, events: k } = H1(l)
            , { slides: I, slots: R } = K1(s)
            , U = () => {
                w(!m)
            }
            ;
        Object.assign(b.on, {
            _containerClasses(L, M) {
                c(M)
            }
        });
        const We = () => {
            Object.assign(b.on, k),
                a = !0;
            const L = {
                ...b
            };
            if (delete L.wrapperClass,
                p.current = new Ji(L),
                p.current.virtual && p.current.params.virtual.enabled) {
                p.current.virtual.slides = I;
                const M = {
                    cache: !1,
                    slides: I,
                    renderExternal: f,
                    renderExternalUpdate: !1
                };
                $n(p.current.params.virtual, M),
                    $n(p.current.originalParams.virtual, M)
            }
        }
            ;
        _.current || We(),
            p.current && p.current.on("_beforeBreakpoint", U);
        const Ge = () => {
            a || !k || !p.current || Object.keys(k).forEach(L => {
                p.current.on(L, k[L])
            }
            )
        }
            , qe = () => {
                !k || !p.current || Object.keys(k).forEach(L => {
                    p.current.off(L, k[L])
                }
                )
            }
            ;
        T.useEffect(() => () => {
            p.current && p.current.off("_beforeBreakpoint", U)
        }
        ),
            T.useEffect(() => {
                !y.current && p.current && (p.current.emitSlidesClasses(),
                    y.current = !0)
            }
            ),
            wi(() => {
                if (t && (t.current = _.current),
                    !!_.current)
                    return p.current.destroyed && We(),
                        W1({
                            el: _.current,
                            nextEl: S.current,
                            prevEl: x.current,
                            paginationEl: C.current,
                            scrollbarEl: E.current,
                            swiper: p.current
                        }, b),
                        o && o(p.current),
                        () => {
                            p.current && !p.current.destroyed && p.current.destroy(!0, !1)
                        }
            }
                , []),
            wi(() => {
                Ge();
                const L = G1(P, h.current, I, v.current, M => M.key);
                return h.current = P,
                    v.current = I,
                    L.length && p.current && !p.current.destroyed && V1({
                        swiper: p.current,
                        slides: I,
                        passedParams: P,
                        changedParams: L,
                        nextEl: S.current,
                        prevEl: x.current,
                        scrollbarEl: E.current,
                        paginationEl: C.current
                    }),
                    () => {
                        qe()
                    }
            }
            ),
            wi(() => {
                q1(p.current)
            }
                , [d]);
        function N() {
            return b.virtual ? X1(p.current, I, d) : I.map((L, M) => W.cloneElement(L, {
                swiper: p.current,
                swiperSlideIndex: M
            }))
        }
        return W.createElement(r, ko({
            ref: _,
            className: Bg(`${u}${n ? ` ${n}` : ""}`)
        }, A), W.createElement(Y1.Provider, {
            value: p.current
        }, R["container-start"], W.createElement(i, {
            className: B1(b.wrapperClass)
        }, R["wrapper-start"], N(), R["wrapper-end"]), zg(b) && W.createElement(W.Fragment, null, W.createElement("div", {
            ref: x,
            className: "swiper-button-prev"
        }), W.createElement("div", {
            ref: S,
            className: "swiper-button-next"
        })), Fg(b) && W.createElement("div", {
            ref: E,
            className: "swiper-scrollbar"
        }), $g(b) && W.createElement("div", {
            ref: C,
            className: "swiper-pagination"
        }), R["container-end"]))
    });
Kc.displayName = "Swiper";
const Xc = T.forwardRef(function(e, t) {
    let { tag: n = "div", children: r, className: i = "", swiper: s, zoom: o, lazy: l, virtualIndex: a, swiperSlideIndex: u, ...c } = e === void 0 ? {} : e;
    const d = T.useRef(null)
        , [f, m] = T.useState("swiper-slide")
        , [w, y] = T.useState(!1);
    function _(S, x, C) {
        x === d.current && m(C)
    }
    wi(() => {
        if (typeof u < "u" && (d.current.swiperSlideIndex = u),
            t && (t.current = d.current),
            !(!d.current || !s)) {
            if (s.destroyed) {
                f !== "swiper-slide" && m("swiper-slide");
                return
            }
            return s.on("_slideClass", _),
                () => {
                    s && s.off("_slideClass", _)
                }
        }
    }
    ),
        wi(() => {
            s && d.current && !s.destroyed && m(s.getSlideClasses(d.current))
        }
            , [s]);
    const p = {
        isActive: f.indexOf("swiper-slide-active") >= 0,
        isVisible: f.indexOf("swiper-slide-visible") >= 0,
        isPrev: f.indexOf("swiper-slide-prev") >= 0,
        isNext: f.indexOf("swiper-slide-next") >= 0
    }
        , h = () => typeof r == "function" ? r(p) : r
        , v = () => {
            y(!0)
        }
        ;
    return W.createElement(n, ko({
        ref: d,
        className: Bg(`${f}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: v
    }, c), o && W.createElement(ip.Provider, {
        value: p
    }, W.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof o == "number" ? o : void 0
    }, h(), l && !w && W.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !o && W.createElement(ip.Provider, {
        value: p
    }, h(), l && !w && W.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
Xc.displayName = "SwiperSlide";
function Q1(e, t, n, r) {
    return e.params.createElements && Object.keys(r).forEach(i => {
        if (!n[i] && n.auto === !0) {
            let s = pt(e.el, `.${r[i]}`)[0];
            s || (s = Lg("div", r[i]),
                s.className = r[i],
                e.el.append(s)),
                n[i] = s,
                t[i] = s
        }
    }
    ),
        n
}
function Wg(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
        t.navigation = {
            nextEl: null,
            prevEl: null
        };
    const s = y => (Array.isArray(y) ? y : [y]).filter(_ => !!_);
    function o(y) {
        let _;
        return y && typeof y == "string" && t.isElement && (_ = t.el.querySelector(y),
            _) ? _ : (y && (typeof y == "string" && (_ = [...document.querySelectorAll(y)]),
                t.params.uniqueNavElements && typeof y == "string" && _.length > 1 && t.el.querySelectorAll(y).length === 1 && (_ = t.el.querySelector(y))),
                y && !_ ? y : _)
    }
    function l(y, _) {
        const p = t.params.navigation;
        y = s(y),
            y.forEach(h => {
                h && (h.classList[_ ? "add" : "remove"](...p.disabledClass.split(" ")),
                    h.tagName === "BUTTON" && (h.disabled = _),
                    t.params.watchOverflow && t.enabled && h.classList[t.isLocked ? "add" : "remove"](p.lockClass))
            }
            )
    }
    function a() {
        const { nextEl: y, prevEl: _ } = t.navigation;
        if (t.params.loop) {
            l(_, !1),
                l(y, !1);
            return
        }
        l(_, t.isBeginning && !t.params.rewind),
            l(y, t.isEnd && !t.params.rewind)
    }
    function u(y) {
        y.preventDefault(),
            !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(),
                i("navigationPrev"))
    }
    function c(y) {
        y.preventDefault(),
            !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(),
                i("navigationNext"))
    }
    function d() {
        const y = t.params.navigation;
        if (t.params.navigation = Q1(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
            !(y.nextEl || y.prevEl))
            return;
        let _ = o(y.nextEl)
            , p = o(y.prevEl);
        Object.assign(t.navigation, {
            nextEl: _,
            prevEl: p
        }),
            _ = s(_),
            p = s(p);
        const h = (v, S) => {
            v && v.addEventListener("click", S === "next" ? c : u),
                !t.enabled && v && v.classList.add(...y.lockClass.split(" "))
        }
            ;
        _.forEach(v => h(v, "next")),
            p.forEach(v => h(v, "prev"))
    }
    function f() {
        let { nextEl: y, prevEl: _ } = t.navigation;
        y = s(y),
            _ = s(_);
        const p = (h, v) => {
            h.removeEventListener("click", v === "next" ? c : u),
                h.classList.remove(...t.params.navigation.disabledClass.split(" "))
        }
            ;
        y.forEach(h => p(h, "next")),
            _.forEach(h => p(h, "prev"))
    }
    r("init", () => {
        t.params.navigation.enabled === !1 ? w() : (d(),
            a())
    }
    ),
        r("toEdge fromEdge lock unlock", () => {
            a()
        }
        ),
        r("destroy", () => {
            f()
        }
        ),
        r("enable disable", () => {
            let { nextEl: y, prevEl: _ } = t.navigation;
            if (y = s(y),
                _ = s(_),
                t.enabled) {
                a();
                return
            }
            [...y, ..._].filter(p => !!p).forEach(p => p.classList.add(t.params.navigation.lockClass))
        }
        ),
        r("click", (y, _) => {
            let { nextEl: p, prevEl: h } = t.navigation;
            p = s(p),
                h = s(h);
            const v = _.target;
            if (t.params.navigation.hideOnClick && !h.includes(v) && !p.includes(v)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === v || t.pagination.el.contains(v)))
                    return;
                let S;
                p.length ? S = p[0].classList.contains(t.params.navigation.hiddenClass) : h.length && (S = h[0].classList.contains(t.params.navigation.hiddenClass)),
                    i(S === !0 ? "navigationShow" : "navigationHide"),
                    [...p, ...h].filter(x => !!x).forEach(x => x.classList.toggle(t.params.navigation.hiddenClass))
            }
        }
        );
    const m = () => {
        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
            d(),
            a()
    }
        , w = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
                f()
        }
        ;
    Object.assign(t.navigation, {
        enable: m,
        disable: w,
        update: a,
        init: d,
        destroy: f
    })
}
function J1() {
    Ji.use([Wg]);
    const [e, t] = T.useState(null)
        , [n, r] = T.useState(null)
        , [i, s] = T.useState(null);
    return T.useEffect(() => {
        async function o() {
            try {
                const c = await (await fetch("/api/listing?offer=true&limit=4&order=asc&sort=createAt")).json();
                t(c),
                    l()
            } catch (u) {
                console.log(u)
            }
        }
        o();
        async function l() {
            try {
                const c = await (await fetch("/api/listing?type=rent&limit=4&order=asc&sort=createAt")).json();
                r(c),
                    a()
            } catch (u) {
                console.log(u)
            }
        }
        async function a() {
            try {
                const c = await (await fetch("/api/listing?type=sale&limit=4&order=asc&sort=createAt")).json();
                s(c)
            } catch (u) {
                console.log(u)
            }
        }
    }
        , []),
        g.jsxs("div", {
            children: [g.jsx("div", {
                className: " max-w-6xl mx-auto py-28 px-3",
                children: g.jsxs("div", {
                    className: "flex flex-col gap-6 ",
                    children: [g.jsxs("h1", {
                        className: "text-slate-700 font-bold text-3xl lg:text-6xl",
                        children: ["Find your next ", g.jsx("span", {
                            className: "text-slate-500",
                            children: "perfect"
                        }), g.jsx("br", {}), " place with ease"]
                    }), g.jsxs("div", {
                        className: "text-gray-400 text-xs sm:text-sm",
                        children: ["Sega Stone Estate will help you find your home fast, easy and comfortable.", g.jsx("br", {}), "Our expert support are always available.", " "]
                    }), g.jsx(Se, {
                        to: "/search",
                        className: "text-xs sm:text-sm text-blue-800 font-bold hover:underline",
                        children: "Let's Start now..."
                    })]
                })
            }), g.jsx(Kc, {
                navigation: !0,
                children: e && e.map(o => g.jsx(Xc, {
                    children: g.jsx("div", {
                        className: "h-[500px]",
                        style: {
                            background: `url(${o.imageUrls[0]}) center no-repeat`,
                            backgroundSize: "cover"
                        }
                    })
                }, o._id))
            }), g.jsxs("div", {
                className: "max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10",
                children: [e && e.length > 0 && g.jsxs("div", {
                    children: [g.jsxs("div", {
                        className: "my-3",
                        children: [g.jsx("h2", {
                            className: " text-2xl font-semibold text-slate-600",
                            children: "Recent offers"
                        }), g.jsx(Se, {
                            to: "/search?offer=true",
                            children: g.jsx("p", {
                                className: "text-sm text-blue-800 hover:underline",
                                children: "Show more offers"
                            })
                        })]
                    }), g.jsx("ul", {
                        className: "flex flex-wrap gap-4",
                        children: e.map(o => g.jsx(Bs, {
                            listing: o,
                            id: o._id
                        }, o._id))
                    })]
                }), n && n.length > 0 && g.jsxs("div", {
                    children: [g.jsxs("div", {
                        className: "my-3",
                        children: [g.jsx("h2", {
                            className: " text-2xl font-semibold text-slate-600",
                            children: "Recent places for rent"
                        }), g.jsx(Se, {
                            to: "/search?type=rent",
                            children: g.jsx("p", {
                                className: "text-sm text-blue-800 hover:underline ",
                                children: "Show more places for rent"
                            })
                        })]
                    }), g.jsx("ul", {
                        className: "flex flex-wrap gap-4",
                        children: n.map(o => g.jsx(Bs, {
                            listing: o,
                            id: o._id
                        }, o._id))
                    })]
                }), i && i.length > 0 && g.jsxs("div", {
                    children: [g.jsxs("div", {
                        className: "my-3",
                        children: [g.jsx("h2", {
                            className: " text-2xl font-semibold text-slate-600",
                            children: "Recent places for sale"
                        }), g.jsx(Se, {
                            to: "/search?type=sale",
                            children: g.jsx("p", {
                                className: "text-sm text-blue-800 hover:underline",
                                children: "Show more places for sale"
                            })
                        })]
                    }), g.jsx("ul", {
                        className: "flex flex-wrap gap-4",
                        children: i.map(o => g.jsx(Bs, {
                            listing: o,
                            id: o._id
                        }, o._id))
                    })]
                })]
            })]
        })
}
function Z1() {
    return g.jsxs("div", {
        className: "px-4 py-20 max-w-6xl mx-auto",
        children: [g.jsx("h1", {
            className: "text-3xl font-bold  mb-4 text-slate-800",
            children: "About Sega Stone Estate"
        }), g.jsx("p", {
            className: "mb-4 text-slate-700",
            children: "Sega Stone Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible."
        }), g.jsx("p", {
            className: "mb-4 text-slate-700",
            children: "Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way."
        }), g.jsx("p", {
            className: "mb-4 text-slate-700",
            children: "Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients."
        })]
    })
}
function ot(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(i) {
        return "'" + i + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}
function En(e) {
    return !!e && !!e[Q]
}
function zt(e) {
    var t;
    return !!e && (function(n) {
        if (!n || typeof n != "object")
            return !1;
        var r = Object.getPrototypeOf(n);
        if (r === null)
            return !0;
        var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return i === Object || typeof i == "function" && Function.toString.call(i) === lx
    }(e) || Array.isArray(e) || !!e[dp] || !!(!((t = e.constructor) === null || t === void 0) && t[dp]) || Yc(e) || Qc(e))
}
function Xn(e, t, n) {
    n === void 0 && (n = !1),
        qr(e) === 0 ? (n ? Object.keys : Cr)(e).forEach(function(r) {
            n && typeof r == "symbol" || t(r, e[r], e)
        }) : e.forEach(function(r, i) {
            return t(i, r, e)
        })
}
function qr(e) {
    var t = e[Q];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Yc(e) ? 2 : Qc(e) ? 3 : 0
}
function Pr(e, t) {
    return qr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function ex(e, t) {
    return qr(e) === 2 ? e.get(t) : e[t]
}
function Gg(e, t, n) {
    var r = qr(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}
function qg(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Yc(e) {
    return ox && e instanceof Map
}
function Qc(e) {
    return ax && e instanceof Set
}
function Rn(e) {
    return e.o || e.t
}
function Jc(e) {
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    var t = Xg(e);
    delete t[Q];
    for (var n = Cr(t), r = 0; r < n.length; r++) {
        var i = n[r]
            , s = t[i];
        s.writable === !1 && (s.writable = !0,
            s.configurable = !0),
            (s.get || s.set) && (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: s.enumerable,
                value: e[i]
            })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}
function Zc(e, t) {
    return t === void 0 && (t = !1),
        ed(e) || En(e) || !zt(e) || (qr(e) > 1 && (e.set = e.add = e.clear = e.delete = tx),
            Object.freeze(e),
            t && Xn(e, function(n, r) {
                return Zc(r, !0)
            }, !0)),
        e
}
function tx() {
    ot(2)
}
function ed(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}
function vt(e) {
    var t = ju[e];
    return t || ot(18, e),
        t
}
function nx(e, t) {
    ju[e] || (ju[e] = t)
}
function Ru() {
    return $i
}
function hl(e, t) {
    t && (vt("Patches"),
        e.u = [],
        e.s = [],
        e.v = t)
}
function Io(e) {
    Au(e),
        e.p.forEach(rx),
        e.p = null
}
function Au(e) {
    e === $i && ($i = e.l)
}
function sp(e) {
    return $i = {
        p: [],
        l: $i,
        h: e,
        m: !0,
        _: 0
    }
}
function rx(e) {
    var t = e[Q];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}
function ml(e, t) {
    t._ = t.p.length;
    var n = t.p[0]
        , r = e !== void 0 && e !== n;
    return t.h.O || vt("ES5").S(t, e, r),
        r ? (n[Q].P && (Io(t),
            ot(4)),
            zt(e) && (e = Oo(t, e),
                t.l || No(t, e)),
            t.u && vt("Patches").M(n[Q].t, e, t.u, t.s)) : e = Oo(t, n, []),
        Io(t),
        t.u && t.v(t.u, t.s),
        e !== Kg ? e : void 0
}
function Oo(e, t, n) {
    if (ed(t))
        return t;
    var r = t[Q];
    if (!r)
        return Xn(t, function(l, a) {
            return op(e, r, t, l, a, n)
        }, !0),
            t;
    if (r.A !== e)
        return t;
    if (!r.P)
        return No(e, r.t, !0),
            r.t;
    if (!r.I) {
        r.I = !0,
            r.A._--;
        var i = r.i === 4 || r.i === 5 ? r.o = Jc(r.k) : r.o
            , s = i
            , o = !1;
        r.i === 3 && (s = new Set(i),
            i.clear(),
            o = !0),
            Xn(s, function(l, a) {
                return op(e, r, i, l, a, n, o)
            }),
            No(e, i, !1),
            n && e.u && vt("Patches").N(r, n, e.u, e.s)
    }
    return r.o
}
function op(e, t, n, r, i, s, o) {
    if (En(i)) {
        var l = Oo(e, i, s && t && t.i !== 3 && !Pr(t.R, r) ? s.concat(r) : void 0);
        if (Gg(n, r, l),
            !En(l))
            return;
        e.m = !1
    } else
        o && n.add(i);
    if (zt(i) && !ed(i)) {
        if (!e.h.D && e._ < 1)
            return;
        Oo(e, i),
            t && t.A.l || No(e, i)
    }
}
function No(e, t, n) {
    n === void 0 && (n = !1),
        !e.l && e.h.D && e.m && Zc(t, n)
}
function gl(e, t) {
    var n = e[Q];
    return (n ? Rn(n) : e)[t]
}
function ap(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r)
                return r;
            n = Object.getPrototypeOf(n)
        }
}
function Yt(e) {
    e.P || (e.P = !0,
        e.l && Yt(e.l))
}
function vl(e) {
    e.o || (e.o = Jc(e.t))
}
function Lu(e, t, n) {
    var r = Yc(t) ? vt("MapSet").F(t, n) : Qc(t) ? vt("MapSet").T(t, n) : e.O ? function(i, s) {
        var o = Array.isArray(i)
            , l = {
                i: o ? 1 : 0,
                A: s ? s.A : Ru(),
                P: !1,
                I: !1,
                R: {},
                l: s,
                t: i,
                k: null,
                o: null,
                j: null,
                C: !1
            }
            , a = l
            , u = Fi;
        o && (a = [l],
            u = ui);
        var c = Proxy.revocable(a, u)
            , d = c.revoke
            , f = c.proxy;
        return l.k = f,
            l.j = d,
            f
    }(t, n) : vt("ES5").J(t, n);
    return (n ? n.A : Ru()).p.push(r),
        r
}
function ix(e) {
    return En(e) || ot(22, e),
        function t(n) {
            if (!zt(n))
                return n;
            var r, i = n[Q], s = qr(n);
            if (i) {
                if (!i.P && (i.i < 4 || !vt("ES5").K(i)))
                    return i.t;
                i.I = !0,
                    r = lp(n, s),
                    i.I = !1
            } else
                r = lp(n, s);
            return Xn(r, function(o, l) {
                i && ex(i.t, o) === l || Gg(r, o, t(l))
            }),
                s === 3 ? new Set(r) : r
        }(e)
}
function lp(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e)
    }
    return Jc(e)
}
function sx() {
    function e(s, o) {
        var l = i[s];
        return l ? l.enumerable = o : i[s] = l = {
            configurable: !0,
            enumerable: o,
            get: function() {
                var a = this[Q];
                return Fi.get(a, s)
            },
            set: function(a) {
                var u = this[Q];
                Fi.set(u, s, a)
            }
        },
            l
    }
    function t(s) {
        for (var o = s.length - 1; o >= 0; o--) {
            var l = s[o][Q];
            if (!l.P)
                switch (l.i) {
                    case 5:
                        r(l) && Yt(l);
                        break;
                    case 4:
                        n(l) && Yt(l)
                }
        }
    }
    function n(s) {
        for (var o = s.t, l = s.k, a = Cr(l), u = a.length - 1; u >= 0; u--) {
            var c = a[u];
            if (c !== Q) {
                var d = o[c];
                if (d === void 0 && !Pr(o, c))
                    return !0;
                var f = l[c]
                    , m = f && f[Q];
                if (m ? m.t !== d : !qg(f, d))
                    return !0
            }
        }
        var w = !!o[Q];
        return a.length !== Cr(o).length + (w ? 0 : 1)
    }
    function r(s) {
        var o = s.k;
        if (o.length !== s.t.length)
            return !0;
        var l = Object.getOwnPropertyDescriptor(o, o.length - 1);
        if (l && !l.get)
            return !0;
        for (var a = 0; a < o.length; a++)
            if (!o.hasOwnProperty(a))
                return !0;
        return !1
    }
    var i = {};
    nx("ES5", {
        J: function(s, o) {
            var l = Array.isArray(s)
                , a = function(c, d) {
                    if (c) {
                        for (var f = Array(d.length), m = 0; m < d.length; m++)
                            Object.defineProperty(f, "" + m, e(m, !0));
                        return f
                    }
                    var w = Xg(d);
                    delete w[Q];
                    for (var y = Cr(w), _ = 0; _ < y.length; _++) {
                        var p = y[_];
                        w[p] = e(p, c || !!w[p].enumerable)
                    }
                    return Object.create(Object.getPrototypeOf(d), w)
                }(l, s)
                , u = {
                    i: l ? 5 : 4,
                    A: o ? o.A : Ru(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: o,
                    t: s,
                    k: a,
                    o: null,
                    g: !1,
                    C: !1
                };
            return Object.defineProperty(a, Q, {
                value: u,
                writable: !0
            }),
                a
        },
        S: function(s, o, l) {
            l ? En(o) && o[Q].A === s && t(s.p) : (s.u && function a(u) {
                if (u && typeof u == "object") {
                    var c = u[Q];
                    if (c) {
                        var d = c.t
                            , f = c.k
                            , m = c.R
                            , w = c.i;
                        if (w === 4)
                            Xn(f, function(v) {
                                v !== Q && (d[v] !== void 0 || Pr(d, v) ? m[v] || a(f[v]) : (m[v] = !0,
                                    Yt(c)))
                            }),
                                Xn(d, function(v) {
                                    f[v] !== void 0 || Pr(f, v) || (m[v] = !1,
                                        Yt(c))
                                });
                        else if (w === 5) {
                            if (r(c) && (Yt(c),
                                m.length = !0),
                                f.length < d.length)
                                for (var y = f.length; y < d.length; y++)
                                    m[y] = !1;
                            else
                                for (var _ = d.length; _ < f.length; _++)
                                    m[_] = !0;
                            for (var p = Math.min(f.length, d.length), h = 0; h < p; h++)
                                f.hasOwnProperty(h) || (m[h] = !0),
                                    m[h] === void 0 && a(f[h])
                        }
                    }
                }
            }(s.p[0]),
                t(s.p))
        },
        K: function(s) {
            return s.i === 4 ? n(s) : r(s)
        }
    })
}
var up, $i, td = typeof Symbol < "u" && typeof Symbol("x") == "symbol", ox = typeof Map < "u", ax = typeof Set < "u", cp = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Kg = td ? Symbol.for("immer-nothing") : ((up = {})["immer-nothing"] = !0,
    up), dp = td ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = td ? Symbol.for("immer-state") : "__$immer_state", lx = "" + Object.prototype.constructor, Cr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
        : Object.getOwnPropertyNames, Xg = Object.getOwnPropertyDescriptors || function(e) {
            var t = {};
            return Cr(e).forEach(function(n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
            }),
                t
        }
    , ju = {}, Fi = {
        get: function(e, t) {
            if (t === Q)
                return e;
            var n = Rn(e);
            if (!Pr(n, t))
                return function(i, s, o) {
                    var l, a = ap(s, o);
                    return a ? "value" in a ? a.value : (l = a.get) === null || l === void 0 ? void 0 : l.call(i.k) : void 0
                }(e, n, t);
            var r = n[t];
            return e.I || !zt(r) ? r : r === gl(e.t, t) ? (vl(e),
                e.o[t] = Lu(e.A.h, r, e)) : r
        },
        has: function(e, t) {
            return t in Rn(e)
        },
        ownKeys: function(e) {
            return Reflect.ownKeys(Rn(e))
        },
        set: function(e, t, n) {
            var r = ap(Rn(e), t);
            if (r != null && r.set)
                return r.set.call(e.k, n),
                    !0;
            if (!e.P) {
                var i = gl(Rn(e), t)
                    , s = i == null ? void 0 : i[Q];
                if (s && s.t === n)
                    return e.o[t] = n,
                        e.R[t] = !1,
                        !0;
                if (qg(n, i) && (n !== void 0 || Pr(e.t, t)))
                    return !0;
                vl(e),
                    Yt(e)
            }
            return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n,
                e.R[t] = !0),
                !0
        },
        deleteProperty: function(e, t) {
            return gl(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1,
                vl(e),
                Yt(e)) : delete e.R[t],
                e.o && delete e.o[t],
                !0
        },
        getOwnPropertyDescriptor: function(e, t) {
            var n = Rn(e)
                , r = Reflect.getOwnPropertyDescriptor(n, t);
            return r && {
                writable: !0,
                configurable: e.i !== 1 || t !== "length",
                enumerable: r.enumerable,
                value: n[t]
            }
        },
        defineProperty: function() {
            ot(11)
        },
        getPrototypeOf: function(e) {
            return Object.getPrototypeOf(e.t)
        },
        setPrototypeOf: function() {
            ot(12)
        }
    }, ui = {};
Xn(Fi, function(e, t) {
    ui[e] = function() {
        return arguments[0] = arguments[0][0],
            t.apply(this, arguments)
    }
}),
    ui.deleteProperty = function(e, t) {
        return ui.set.call(this, e, t, void 0)
    }
    ,
    ui.set = function(e, t, n) {
        return Fi.set.call(this, e[0], t, n, e[0])
    }
    ;
var ux = function() {
    function e(n) {
        var r = this;
        this.O = cp,
            this.D = !0,
            this.produce = function(i, s, o) {
                if (typeof i == "function" && typeof s != "function") {
                    var l = s;
                    s = i;
                    var a = r;
                    return function(y) {
                        var _ = this;
                        y === void 0 && (y = l);
                        for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
                            h[v - 1] = arguments[v];
                        return a.produce(y, function(S) {
                            var x;
                            return (x = s).call.apply(x, [_, S].concat(h))
                        })
                    }
                }
                var u;
                if (typeof s != "function" && ot(6),
                    o !== void 0 && typeof o != "function" && ot(7),
                    zt(i)) {
                    var c = sp(r)
                        , d = Lu(r, i, void 0)
                        , f = !0;
                    try {
                        u = s(d),
                            f = !1
                    } finally {
                        f ? Io(c) : Au(c)
                    }
                    return typeof Promise < "u" && u instanceof Promise ? u.then(function(y) {
                        return hl(c, o),
                            ml(y, c)
                    }, function(y) {
                        throw Io(c),
                        y
                    }) : (hl(c, o),
                        ml(u, c))
                }
                if (!i || typeof i != "object") {
                    if ((u = s(i)) === void 0 && (u = i),
                        u === Kg && (u = void 0),
                        r.D && Zc(u, !0),
                        o) {
                        var m = []
                            , w = [];
                        vt("Patches").M(i, u, m, w),
                            o(m, w)
                    }
                    return u
                }
                ot(21, i)
            }
            ,
            this.produceWithPatches = function(i, s) {
                if (typeof i == "function")
                    return function(u) {
                        for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
                            d[f - 1] = arguments[f];
                        return r.produceWithPatches(u, function(m) {
                            return i.apply(void 0, [m].concat(d))
                        })
                    }
                        ;
                var o, l, a = r.produce(i, s, function(u, c) {
                    o = u,
                        l = c
                });
                return typeof Promise < "u" && a instanceof Promise ? a.then(function(u) {
                    return [u, o, l]
                }) : [a, o, l]
            }
            ,
            typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies),
            typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype;
    return t.createDraft = function(n) {
        zt(n) || ot(8),
            En(n) && (n = ix(n));
        var r = sp(this)
            , i = Lu(this, n, void 0);
        return i[Q].C = !0,
            Au(r),
            i
    }
        ,
        t.finishDraft = function(n, r) {
            var i = n && n[Q]
                , s = i.A;
            return hl(s, r),
                ml(void 0, s)
        }
        ,
        t.setAutoFreeze = function(n) {
            this.D = n
        }
        ,
        t.setUseProxies = function(n) {
            n && !cp && ot(20),
                this.O = n
        }
        ,
        t.applyPatches = function(n, r) {
            var i;
            for (i = r.length - 1; i >= 0; i--) {
                var s = r[i];
                if (s.path.length === 0 && s.op === "replace") {
                    n = s.value;
                    break
                }
            }
            i > -1 && (r = r.slice(i + 1));
            var o = vt("Patches").$;
            return En(n) ? o(n, r) : this.produce(n, function(l) {
                return o(l, r)
            })
        }
        ,
        e
}()
    , $e = new ux
    , Yg = $e.produce;
$e.produceWithPatches.bind($e);
$e.setAutoFreeze.bind($e);
$e.setUseProxies.bind($e);
$e.applyPatches.bind($e);
$e.createDraft.bind($e);
$e.finishDraft.bind($e);
function Bi(e) {
    "@babel/helpers - typeof";
    return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
        : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        Bi(e)
}
function cx(e, t) {
    if (Bi(e) !== "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Bi(r) !== "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function dx(e) {
    var t = cx(e, "string");
    return Bi(t) === "symbol" ? t : String(t)
}
function fx(e, t, n) {
    return t = dx(t),
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
}
function fp(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
            n.push.apply(n, r)
    }
    return n
}
function pp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? fp(Object(n), !0).forEach(function(r) {
            fx(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fp(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function ye(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var hp = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
    , yl = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    }
    , Ro = {
        INIT: "@@redux/INIT" + yl(),
        REPLACE: "@@redux/REPLACE" + yl(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + yl()
        }
    };
function px(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null;)
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function nd(e, t, n) {
    var r;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
        throw new Error(ye(0));
    if (typeof t == "function" && typeof n > "u" && (n = t,
        t = void 0),
        typeof n < "u") {
        if (typeof n != "function")
            throw new Error(ye(1));
        return n(nd)(e, t)
    }
    if (typeof e != "function")
        throw new Error(ye(2));
    var i = e
        , s = t
        , o = []
        , l = o
        , a = !1;
    function u() {
        l === o && (l = o.slice())
    }
    function c() {
        if (a)
            throw new Error(ye(3));
        return s
    }
    function d(y) {
        if (typeof y != "function")
            throw new Error(ye(4));
        if (a)
            throw new Error(ye(5));
        var _ = !0;
        return u(),
            l.push(y),
            function() {
                if (_) {
                    if (a)
                        throw new Error(ye(6));
                    _ = !1,
                        u();
                    var h = l.indexOf(y);
                    l.splice(h, 1),
                        o = null
                }
            }
    }
    function f(y) {
        if (!px(y))
            throw new Error(ye(7));
        if (typeof y.type > "u")
            throw new Error(ye(8));
        if (a)
            throw new Error(ye(9));
        try {
            a = !0,
                s = i(s, y)
        } finally {
            a = !1
        }
        for (var _ = o = l, p = 0; p < _.length; p++) {
            var h = _[p];
            h()
        }
        return y
    }
    function m(y) {
        if (typeof y != "function")
            throw new Error(ye(10));
        i = y,
            f({
                type: Ro.REPLACE
            })
    }
    function w() {
        var y, _ = d;
        return y = {
            subscribe: function(h) {
                if (typeof h != "object" || h === null)
                    throw new Error(ye(11));
                function v() {
                    h.next && h.next(c())
                }
                v();
                var S = _(v);
                return {
                    unsubscribe: S
                }
            }
        },
            y[hp] = function() {
                return this
            }
            ,
            y
    }
    return f({
        type: Ro.INIT
    }),
        r = {
            dispatch: f,
            subscribe: d,
            getState: c,
            replaceReducer: m
        },
        r[hp] = w,
        r
}
function hx(e) {
    Object.keys(e).forEach(function(t) {
        var n = e[t]
            , r = n(void 0, {
                type: Ro.INIT
            });
        if (typeof r > "u")
            throw new Error(ye(12));
        if (typeof n(void 0, {
            type: Ro.PROBE_UNKNOWN_ACTION()
        }) > "u")
            throw new Error(ye(13))
    })
}
function Qg(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i])
    }
    var s = Object.keys(n), o;
    try {
        hx(n)
    } catch (l) {
        o = l
    }
    return function(a, u) {
        if (a === void 0 && (a = {}),
            o)
            throw o;
        for (var c = !1, d = {}, f = 0; f < s.length; f++) {
            var m = s[f]
                , w = n[m]
                , y = a[m]
                , _ = w(y, u);
            if (typeof _ > "u")
                throw u && u.type,
                new Error(ye(14));
            d[m] = _,
                c = c || _ !== y
        }
        return c = c || s.length !== Object.keys(a).length,
            c ? d : a
    }
}
function Ao() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return t.length === 0 ? function(r) {
        return r
    }
        : t.length === 1 ? t[0] : t.reduce(function(r, i) {
            return function() {
                return r(i.apply(void 0, arguments))
            }
        })
}
function mx() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function(r) {
        return function() {
            var i = r.apply(void 0, arguments)
                , s = function() {
                    throw new Error(ye(15))
                }
                , o = {
                    getState: i.getState,
                    dispatch: function() {
                        return s.apply(void 0, arguments)
                    }
                }
                , l = t.map(function(a) {
                    return a(o)
                });
            return s = Ao.apply(void 0, l)(i.dispatch),
                pp(pp({}, i), {}, {
                    dispatch: s
                })
        }
    }
}
function Jg(e) {
    var t = function(r) {
        var i = r.dispatch
            , s = r.getState;
        return function(o) {
            return function(l) {
                return typeof l == "function" ? l(i, s, e) : o(l)
            }
        }
    };
    return t
}
var Zg = Jg();
Zg.withExtraArgument = Jg;
const mp = Zg;
var ev = globalThis && globalThis.__extends || function() {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(r, i) {
            r.__proto__ = i
        }
            || function(r, i) {
                for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s])
            }
            ,
            e(t, n)
    };
    return function(t, n) {
        if (typeof n != "function" && n !== null)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);
        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
            new r)
    }
}()
    , gx = globalThis && globalThis.__generator || function(e, t) {
        var n = {
            label: 0,
            sent: function() {
                if (s[0] & 1)
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, r, i, s, o;
        return o = {
            next: l(0),
            throw: l(1),
            return: l(2)
        },
            typeof Symbol == "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
        function l(u) {
            return function(c) {
                return a([u, c])
            }
        }
        function a(u) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; n;)
                try {
                    if (r = 1,
                        i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i),
                            0) : i.next) && !(s = s.call(i, u[1])).done)
                        return s;
                    switch (i = 0,
                    s && (u = [u[0] & 2, s.value]),
                    u[0]) {
                        case 0:
                        case 1:
                            s = u;
                            break;
                        case 4:
                            return n.label++,
                            {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            n.label++,
                                i = u[1],
                                u = [0];
                            continue;
                        case 7:
                            u = n.ops.pop(),
                                n.trys.pop();
                            continue;
                        default:
                            if (s = n.trys,
                                !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                                n = 0;
                                continue
                            }
                            if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
                                n.label = u[1];
                                break
                            }
                            if (u[0] === 6 && n.label < s[1]) {
                                n.label = s[1],
                                    s = u;
                                break
                            }
                            if (s && n.label < s[2]) {
                                n.label = s[2],
                                    n.ops.push(u);
                                break
                            }
                            s[2] && n.ops.pop(),
                                n.trys.pop();
                            continue
                    }
                    u = t.call(e, n)
                } catch (c) {
                    u = [6, c],
                        i = 0
                } finally {
                    r = s = 0
                }
            if (u[0] & 5)
                throw u[1];
            return {
                value: u[0] ? u[1] : void 0,
                done: !0
            }
        }
    }
    , Dr = globalThis && globalThis.__spreadArray || function(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++,
            i++)
            e[i] = t[n];
        return e
    }
    , vx = Object.defineProperty
    , yx = Object.defineProperties
    , wx = Object.getOwnPropertyDescriptors
    , gp = Object.getOwnPropertySymbols
    , Sx = Object.prototype.hasOwnProperty
    , _x = Object.prototype.propertyIsEnumerable
    , vp = function(e, t, n) {
        return t in e ? vx(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    }
    , gn = function(e, t) {
        for (var n in t || (t = {}))
            Sx.call(t, n) && vp(e, n, t[n]);
        if (gp)
            for (var r = 0, i = gp(t); r < i.length; r++) {
                var n = i[r];
                _x.call(t, n) && vp(e, n, t[n])
            }
        return e
    }
    , wl = function(e, t) {
        return yx(e, wx(t))
    }
    , xx = function(e, t, n) {
        return new Promise(function(r, i) {
            var s = function(a) {
                try {
                    l(n.next(a))
                } catch (u) {
                    i(u)
                }
            }
                , o = function(a) {
                    try {
                        l(n.throw(a))
                    } catch (u) {
                        i(u)
                    }
                }
                , l = function(a) {
                    return a.done ? r(a.value) : Promise.resolve(a.value).then(s, o)
                };
            l((n = n.apply(e, t)).next())
        }
        )
    }
    , Ex = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0)
            return typeof arguments[0] == "object" ? Ao : Ao.apply(null, arguments)
    }
    ;
function Tx(e) {
    if (typeof e != "object" || e === null)
        return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null)
        return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null;)
        n = Object.getPrototypeOf(n);
    return t === n
}
function vn(e, t) {
    function n() {
        for (var r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
        if (t) {
            var s = t.apply(void 0, r);
            if (!s)
                throw new Error("prepareAction did not return an object");
            return gn(gn({
                type: e,
                payload: s.payload
            }, "meta" in s && {
                meta: s.meta
            }), "error" in s && {
                error: s.error
            })
        }
        return {
            type: e,
            payload: r[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }
        ,
        n.type = e,
        n.match = function(r) {
            return r.type === e
        }
        ,
        n
}
var bx = function(e) {
    ev(t, e);
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        var i = e.apply(this, n) || this;
        return Object.setPrototypeOf(i, t.prototype),
            i
    }
    return Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.concat = function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return e.prototype.concat.apply(this, n)
        }
        ,
        t.prototype.prepend = function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Dr([void 0], n[0].concat(this)))) : new (t.bind.apply(t, Dr([void 0], n.concat(this))))
        }
        ,
        t
}(Array)
    , Px = function(e) {
        ev(t, e);
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype),
                i
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }),
            t.prototype.concat = function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                return e.prototype.concat.apply(this, n)
            }
            ,
            t.prototype.prepend = function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Dr([void 0], n[0].concat(this)))) : new (t.bind.apply(t, Dr([void 0], n.concat(this))))
            }
            ,
            t
    }(Array);
function Mu(e) {
    return zt(e) ? Yg(e, function() { }) : e
}
function Cx(e) {
    return typeof e == "boolean"
}
function kx() {
    return function(t) {
        return Ix(t)
    }
}
function Ix(e) {
    e === void 0 && (e = {});
    var t = e.thunk
        , n = t === void 0 ? !0 : t;
    e.immutableCheck,
        e.serializableCheck,
        e.actionCreatorCheck;
    var r = new bx;
    return n && (Cx(n) ? r.push(mp) : r.push(mp.withExtraArgument(n.extraArgument))),
        r
}
var Ox = !0;
function Nx(e) {
    var t = kx(), n = e || {}, r = n.reducer, i = r === void 0 ? void 0 : r, s = n.middleware, o = s === void 0 ? t() : s, l = n.devTools, a = l === void 0 ? !0 : l, u = n.preloadedState, c = u === void 0 ? void 0 : u, d = n.enhancers, f = d === void 0 ? void 0 : d, m;
    if (typeof i == "function")
        m = i;
    else if (Tx(i))
        m = Qg(i);
    else
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var w = o;
    typeof w == "function" && (w = w(t));
    var y = mx.apply(void 0, w)
        , _ = Ao;
    a && (_ = Ex(gn({
        trace: !Ox
    }, typeof a == "object" && a)));
    var p = new Px(y)
        , h = p;
    Array.isArray(f) ? h = Dr([y], f) : typeof f == "function" && (h = f(p));
    var v = _.apply(void 0, h);
    return nd(m, c, v)
}
function tv(e) {
    var t = {}, n = [], r, i = {
        addCase: function(s, o) {
            var l = typeof s == "string" ? s : s.type;
            if (!l)
                throw new Error("`builder.addCase` cannot be called with an empty action type");
            if (l in t)
                throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
            return t[l] = o,
                i
        },
        addMatcher: function(s, o) {
            return n.push({
                matcher: s,
                reducer: o
            }),
                i
        },
        addDefaultCase: function(s) {
            return r = s,
                i
        }
    };
    return e(i),
        [t, n, r]
}
function Rx(e) {
    return typeof e == "function"
}
function Ax(e, t, n, r) {
    n === void 0 && (n = []);
    var i = typeof t == "function" ? tv(t) : [t, n, r], s = i[0], o = i[1], l = i[2], a;
    if (Rx(e))
        a = function() {
            return Mu(e())
        }
            ;
    else {
        var u = Mu(e);
        a = function() {
            return u
        }
    }
    function c(d, f) {
        d === void 0 && (d = a());
        var m = Dr([s[f.type]], o.filter(function(w) {
            var y = w.matcher;
            return y(f)
        }).map(function(w) {
            var y = w.reducer;
            return y
        }));
        return m.filter(function(w) {
            return !!w
        }).length === 0 && (m = [l]),
            m.reduce(function(w, y) {
                if (y)
                    if (En(w)) {
                        var _ = w
                            , p = y(_, f);
                        return p === void 0 ? w : p
                    } else {
                        if (zt(w))
                            return Yg(w, function(h) {
                                return y(h, f)
                            });
                        var p = y(w, f);
                        if (p === void 0) {
                            if (w === null)
                                return w;
                            throw Error("A case reducer on a non-draftable value must not return undefined")
                        }
                        return p
                    }
                return w
            }, d)
    }
    return c.getInitialState = a,
        c
}
function Lx(e, t) {
    return e + "/" + t
}
function jx(e) {
    var t = e.name;
    if (!t)
        throw new Error("`name` is a required option for createSlice");
    typeof process < "u";
    var n = typeof e.initialState == "function" ? e.initialState : Mu(e.initialState)
        , r = e.reducers || {}
        , i = Object.keys(r)
        , s = {}
        , o = {}
        , l = {};
    i.forEach(function(c) {
        var d = r[c], f = Lx(t, c), m, w;
        "reducer" in d ? (m = d.reducer,
            w = d.prepare) : m = d,
            s[c] = m,
            o[f] = m,
            l[c] = w ? vn(f, w) : vn(f)
    });
    function a() {
        var c = typeof e.extraReducers == "function" ? tv(e.extraReducers) : [e.extraReducers]
            , d = c[0]
            , f = d === void 0 ? {} : d
            , m = c[1]
            , w = m === void 0 ? [] : m
            , y = c[2]
            , _ = y === void 0 ? void 0 : y
            , p = gn(gn({}, f), o);
        return Ax(n, function(h) {
            for (var v in p)
                h.addCase(v, p[v]);
            for (var S = 0, x = w; S < x.length; S++) {
                var C = x[S];
                h.addMatcher(C.matcher, C.reducer)
            }
            _ && h.addDefaultCase(_)
        })
    }
    var u;
    return {
        name: t,
        reducer: function(c, d) {
            return u || (u = a()),
                u(c, d)
        },
        actions: l,
        caseReducers: s,
        getInitialState: function() {
            return u || (u = a()),
                u.getInitialState()
        }
    }
}
var Mx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"
    , Dx = function(e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--;)
            t += Mx[Math.random() * 64 | 0];
        return t
    }
    , Ux = ["name", "message", "stack", "code"]
    , Sl = function() {
        function e(t, n) {
            this.payload = t,
                this.meta = n
        }
        return e
    }()
    , yp = function() {
        function e(t, n) {
            this.payload = t,
                this.meta = n
        }
        return e
    }()
    , zx = function(e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, r = Ux; n < r.length; n++) {
                var i = r[n];
                typeof e[i] == "string" && (t[i] = e[i])
            }
            return t
        }
        return {
            message: String(e)
        }
    };
(function() {
    function e(t, n, r) {
        var i = vn(t + "/fulfilled", function(u, c, d, f) {
            return {
                payload: u,
                meta: wl(gn({}, f || {}), {
                    arg: d,
                    requestId: c,
                    requestStatus: "fulfilled"
                })
            }
        })
            , s = vn(t + "/pending", function(u, c, d) {
                return {
                    payload: void 0,
                    meta: wl(gn({}, d || {}), {
                        arg: c,
                        requestId: u,
                        requestStatus: "pending"
                    })
                }
            })
            , o = vn(t + "/rejected", function(u, c, d, f, m) {
                return {
                    payload: f,
                    error: (r && r.serializeError || zx)(u || "Rejected"),
                    meta: wl(gn({}, m || {}), {
                        arg: d,
                        requestId: c,
                        rejectedWithValue: !!f,
                        requestStatus: "rejected",
                        aborted: (u == null ? void 0 : u.name) === "AbortError",
                        condition: (u == null ? void 0 : u.name) === "ConditionError"
                    })
                }
            })
            , l = typeof AbortController < "u" ? AbortController : function() {
                function u() {
                    this.signal = {
                        aborted: !1,
                        addEventListener: function() { },
                        dispatchEvent: function() {
                            return !1
                        },
                        onabort: function() { },
                        removeEventListener: function() { },
                        reason: void 0,
                        throwIfAborted: function() { }
                    }
                }
                return u.prototype.abort = function() { }
                    ,
                    u
            }();
        function a(u) {
            return function(c, d, f) {
                var m = r != null && r.idGenerator ? r.idGenerator(u) : Dx(), w = new l, y;
                function _(h) {
                    y = h,
                        w.abort()
                }
                var p = function() {
                    return xx(this, null, function() {
                        var h, v, S, x, C, E, b;
                        return gx(this, function(P) {
                            switch (P.label) {
                                case 0:
                                    return P.trys.push([0, 4, , 5]),
                                        x = (h = r == null ? void 0 : r.condition) == null ? void 0 : h.call(r, u, {
                                            getState: d,
                                            extra: f
                                        }),
                                        Fx(x) ? [4, x] : [3, 2];
                                case 1:
                                    x = P.sent(),
                                        P.label = 2;
                                case 2:
                                    if (x === !1 || w.signal.aborted)
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    return C = new Promise(function(A, k) {
                                        return w.signal.addEventListener("abort", function() {
                                            return k({
                                                name: "AbortError",
                                                message: y || "Aborted"
                                            })
                                        })
                                    }
                                    ),
                                        c(s(m, u, (v = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : v.call(r, {
                                            requestId: m,
                                            arg: u
                                        }, {
                                            getState: d,
                                            extra: f
                                        }))),
                                        [4, Promise.race([C, Promise.resolve(n(u, {
                                            dispatch: c,
                                            getState: d,
                                            extra: f,
                                            requestId: m,
                                            signal: w.signal,
                                            abort: _,
                                            rejectWithValue: function(A, k) {
                                                return new Sl(A, k)
                                            },
                                            fulfillWithValue: function(A, k) {
                                                return new yp(A, k)
                                            }
                                        })).then(function(A) {
                                            if (A instanceof Sl)
                                                throw A;
                                            return A instanceof yp ? i(A.payload, m, u, A.meta) : i(A, m, u)
                                        })])];
                                case 3:
                                    return S = P.sent(),
                                        [3, 5];
                                case 4:
                                    return E = P.sent(),
                                        S = E instanceof Sl ? o(null, m, u, E.payload, E.meta) : o(E, m, u),
                                        [3, 5];
                                case 5:
                                    return b = r && !r.dispatchConditionRejection && o.match(S) && S.meta.condition,
                                        b || c(S),
                                        [2, S]
                            }
                        })
                    })
                }();
                return Object.assign(p, {
                    abort: _,
                    requestId: m,
                    arg: u,
                    unwrap: function() {
                        return p.then($x)
                    }
                })
            }
        }
        return Object.assign(a, {
            pending: s,
            rejected: o,
            fulfilled: i,
            typePrefix: t
        })
    }
    return e.withTypes = function() {
        return e
    }
        ,
        e
}
)();
function $x(e) {
    if (e.meta && e.meta.rejectedWithValue)
        throw e.payload;
    if (e.error)
        throw e.error;
    return e.payload
}
function Fx(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var rd = "listenerMiddleware";
vn(rd + "/add");
vn(rd + "/removeAll");
vn(rd + "/remove");
var wp;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
sx();
const Bx = {
    currentUser: null,
    loading: !1,
    error: !1
}
    , nv = jx({
        name: "user",
        initialState: Bx,
        reducers: {
            signInStart: e => {
                e.loading = !0
            }
            ,
            signInSuccess: (e, t) => {
                e.currentUser = t.payload,
                    e.loading = !1,
                    e.error = !1
            }
            ,
            signInFailure: (e, t) => {
                e.loading = !1,
                    e.error = t.payload
            }
            ,
            updateUserStart: e => {
                e.loading = !0
            }
            ,
            updateUserSuccess: (e, t) => {
                e.currentUser = t.payload,
                    e.loading = !1,
                    e.error = !1
            }
            ,
            updateUserFailure: (e, t) => {
                e.loading = !1,
                    e.error = t.payload
            }
            ,
            deleteUserStart: e => {
                e.loading = !0
            }
            ,
            deleteUserSuccess: e => {
                e.currentUser = null,
                    e.loading = !1,
                    e.error = !1
            }
            ,
            deleteUserFailure: (e, t) => {
                e.loading = !1,
                    e.error = t.payload
            }
            ,
            signOut: e => {
                e.currentUser = null,
                    e.loading = !1,
                    e.error = !1
            }
        }
    })
    , { signInStart: Vx, signInSuccess: rv, signInFailure: Sp, updateUserFailure: _p, updateUserStart: Hx, updateUserSuccess: Wx, deleteUserFailure: xp, deleteUserStart: Gx, deleteUserSuccess: qx, signOut: Kx } = nv.actions
    , Xx = nv.reducer;
var iv = {
    exports: {}
}
    , sv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur = T;
function Yx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Qx = typeof Object.is == "function" ? Object.is : Yx
    , Jx = Ur.useState
    , Zx = Ur.useEffect
    , eE = Ur.useLayoutEffect
    , tE = Ur.useDebugValue;
function nE(e, t) {
    var n = t()
        , r = Jx({
            inst: {
                value: n,
                getSnapshot: t
            }
        })
        , i = r[0].inst
        , s = r[1];
    return eE(function() {
        i.value = n,
            i.getSnapshot = t,
            _l(i) && s({
                inst: i
            })
    }, [e, n, t]),
        Zx(function() {
            return _l(i) && s({
                inst: i
            }),
                e(function() {
                    _l(i) && s({
                        inst: i
                    })
                })
        }, [e]),
        tE(n),
        n
}
function _l(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Qx(e, n)
    } catch {
        return !0
    }
}
function rE(e, t) {
    return t()
}
var iE = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? rE : nE;
sv.useSyncExternalStore = Ur.useSyncExternalStore !== void 0 ? Ur.useSyncExternalStore : iE;
iv.exports = sv;
var sE = iv.exports
    , ov = {
        exports: {}
    }
    , av = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oa = T
    , oE = sE;
function aE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var lE = typeof Object.is == "function" ? Object.is : aE
    , uE = oE.useSyncExternalStore
    , cE = oa.useRef
    , dE = oa.useEffect
    , fE = oa.useMemo
    , pE = oa.useDebugValue;
av.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
    var s = cE(null);
    if (s.current === null) {
        var o = {
            hasValue: !1,
            value: null
        };
        s.current = o
    } else
        o = s.current;
    s = fE(function() {
        function a(m) {
            if (!u) {
                if (u = !0,
                    c = m,
                    m = r(m),
                    i !== void 0 && o.hasValue) {
                    var w = o.value;
                    if (i(w, m))
                        return d = w
                }
                return d = m
            }
            if (w = d,
                lE(c, m))
                return w;
            var y = r(m);
            return i !== void 0 && i(w, y) ? w : (c = m,
                d = y)
        }
        var u = !1, c, d, f = n === void 0 ? null : n;
        return [function() {
            return a(t())
        }
            , f === null ? void 0 : function() {
                return a(f())
            }
        ]
    }, [t, n, r, i]);
    var l = uE(e, s[0], s[1]);
    return dE(function() {
        o.hasValue = !0,
            o.value = l
    }, [l]),
        pE(l),
        l
}
    ;
ov.exports = av;
var hE = ov.exports;
function mE(e) {
    e()
}
let lv = mE;
const gE = e => lv = e
    , vE = () => lv
    , Ep = Symbol.for("react-redux-context")
    , Tp = typeof globalThis < "u" ? globalThis : {};
function yE() {
    var e;
    if (!T.createContext)
        return {};
    const t = (e = Tp[Ep]) != null ? e : Tp[Ep] = new Map;
    let n = t.get(T.createContext);
    return n || (n = T.createContext(null),
        t.set(T.createContext, n)),
        n
}
const Tn = yE();
function id(e = Tn) {
    return function() {
        return T.useContext(e)
    }
}
const uv = id()
    , wE = () => {
        throw new Error("uSES not initialized!")
    }
    ;
let cv = wE;
const SE = e => {
    cv = e
}
    , _E = (e, t) => e === t;
function xE(e = Tn) {
    const t = e === Tn ? uv : id(e);
    return function(r, i = {}) {
        const { equalityFn: s = _E, stabilityCheck: o = void 0, noopCheck: l = void 0 } = typeof i == "function" ? {
            equalityFn: i
        } : i
            , { store: a, subscription: u, getServerState: c, stabilityCheck: d, noopCheck: f } = t();
        T.useRef(!0);
        const m = T.useCallback({
            [r.name](y) {
                return r(y)
            }
        }[r.name], [r, d, o])
            , w = cv(u.addNestedSub, a.getState, c || a.getState, m, s);
        return T.useDebugValue(w),
            w
    }
}
const rr = xE();
var dv = {
    exports: {}
}
    , B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe = typeof Symbol == "function" && Symbol.for
    , sd = fe ? Symbol.for("react.element") : 60103
    , od = fe ? Symbol.for("react.portal") : 60106
    , aa = fe ? Symbol.for("react.fragment") : 60107
    , la = fe ? Symbol.for("react.strict_mode") : 60108
    , ua = fe ? Symbol.for("react.profiler") : 60114
    , ca = fe ? Symbol.for("react.provider") : 60109
    , da = fe ? Symbol.for("react.context") : 60110
    , ad = fe ? Symbol.for("react.async_mode") : 60111
    , fa = fe ? Symbol.for("react.concurrent_mode") : 60111
    , pa = fe ? Symbol.for("react.forward_ref") : 60112
    , ha = fe ? Symbol.for("react.suspense") : 60113
    , EE = fe ? Symbol.for("react.suspense_list") : 60120
    , ma = fe ? Symbol.for("react.memo") : 60115
    , ga = fe ? Symbol.for("react.lazy") : 60116
    , TE = fe ? Symbol.for("react.block") : 60121
    , bE = fe ? Symbol.for("react.fundamental") : 60117
    , PE = fe ? Symbol.for("react.responder") : 60118
    , CE = fe ? Symbol.for("react.scope") : 60119;
function He(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case sd:
                switch (e = e.type,
                e) {
                    case ad:
                    case fa:
                    case aa:
                    case ua:
                    case la:
                    case ha:
                        return e;
                    default:
                        switch (e = e && e.$$typeof,
                        e) {
                            case da:
                            case pa:
                            case ga:
                            case ma:
                            case ca:
                                return e;
                            default:
                                return t
                        }
                }
            case od:
                return t
        }
    }
}
function fv(e) {
    return He(e) === fa
}
B.AsyncMode = ad;
B.ConcurrentMode = fa;
B.ContextConsumer = da;
B.ContextProvider = ca;
B.Element = sd;
B.ForwardRef = pa;
B.Fragment = aa;
B.Lazy = ga;
B.Memo = ma;
B.Portal = od;
B.Profiler = ua;
B.StrictMode = la;
B.Suspense = ha;
B.isAsyncMode = function(e) {
    return fv(e) || He(e) === ad
}
    ;
B.isConcurrentMode = fv;
B.isContextConsumer = function(e) {
    return He(e) === da
}
    ;
B.isContextProvider = function(e) {
    return He(e) === ca
}
    ;
B.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sd
}
    ;
B.isForwardRef = function(e) {
    return He(e) === pa
}
    ;
B.isFragment = function(e) {
    return He(e) === aa
}
    ;
B.isLazy = function(e) {
    return He(e) === ga
}
    ;
B.isMemo = function(e) {
    return He(e) === ma
}
    ;
B.isPortal = function(e) {
    return He(e) === od
}
    ;
B.isProfiler = function(e) {
    return He(e) === ua
}
    ;
B.isStrictMode = function(e) {
    return He(e) === la
}
    ;
B.isSuspense = function(e) {
    return He(e) === ha
}
    ;
B.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === aa || e === fa || e === ua || e === la || e === ha || e === EE || typeof e == "object" && e !== null && (e.$$typeof === ga || e.$$typeof === ma || e.$$typeof === ca || e.$$typeof === da || e.$$typeof === pa || e.$$typeof === bE || e.$$typeof === PE || e.$$typeof === CE || e.$$typeof === TE)
}
    ;
B.typeOf = He;
dv.exports = B;
var kE = dv.exports
    , pv = kE
    , IE = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }
    , OE = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }
    , hv = {};
hv[pv.ForwardRef] = IE;
hv[pv.Memo] = OE;
var V = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld = Symbol.for("react.element"), ud = Symbol.for("react.portal"), va = Symbol.for("react.fragment"), ya = Symbol.for("react.strict_mode"), wa = Symbol.for("react.profiler"), Sa = Symbol.for("react.provider"), _a = Symbol.for("react.context"), NE = Symbol.for("react.server_context"), xa = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Ta = Symbol.for("react.suspense_list"), ba = Symbol.for("react.memo"), Pa = Symbol.for("react.lazy"), RE = Symbol.for("react.offscreen"), mv;
mv = Symbol.for("react.module.reference");
function et(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case ld:
                switch (e = e.type,
                e) {
                    case va:
                    case wa:
                    case ya:
                    case Ea:
                    case Ta:
                        return e;
                    default:
                        switch (e = e && e.$$typeof,
                        e) {
                            case NE:
                            case _a:
                            case xa:
                            case Pa:
                            case ba:
                            case Sa:
                                return e;
                            default:
                                return t
                        }
                }
            case ud:
                return t
        }
    }
}
V.ContextConsumer = _a;
V.ContextProvider = Sa;
V.Element = ld;
V.ForwardRef = xa;
V.Fragment = va;
V.Lazy = Pa;
V.Memo = ba;
V.Portal = ud;
V.Profiler = wa;
V.StrictMode = ya;
V.Suspense = Ea;
V.SuspenseList = Ta;
V.isAsyncMode = function() {
    return !1
}
    ;
V.isConcurrentMode = function() {
    return !1
}
    ;
V.isContextConsumer = function(e) {
    return et(e) === _a
}
    ;
V.isContextProvider = function(e) {
    return et(e) === Sa
}
    ;
V.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ld
}
    ;
V.isForwardRef = function(e) {
    return et(e) === xa
}
    ;
V.isFragment = function(e) {
    return et(e) === va
}
    ;
V.isLazy = function(e) {
    return et(e) === Pa
}
    ;
V.isMemo = function(e) {
    return et(e) === ba
}
    ;
V.isPortal = function(e) {
    return et(e) === ud
}
    ;
V.isProfiler = function(e) {
    return et(e) === wa
}
    ;
V.isStrictMode = function(e) {
    return et(e) === ya
}
    ;
V.isSuspense = function(e) {
    return et(e) === Ea
}
    ;
V.isSuspenseList = function(e) {
    return et(e) === Ta
}
    ;
V.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === va || e === wa || e === ya || e === Ea || e === Ta || e === RE || typeof e == "object" && e !== null && (e.$$typeof === Pa || e.$$typeof === ba || e.$$typeof === Sa || e.$$typeof === _a || e.$$typeof === xa || e.$$typeof === mv || e.getModuleId !== void 0)
}
    ;
V.typeOf = et;
function AE() {
    const e = vE();
    let t = null
        , n = null;
    return {
        clear() {
            t = null,
                n = null
        },
        notify() {
            e(() => {
                let r = t;
                for (; r;)
                    r.callback(),
                        r = r.next
            }
            )
        },
        get() {
            let r = []
                , i = t;
            for (; i;)
                r.push(i),
                    i = i.next;
            return r
        },
        subscribe(r) {
            let i = !0
                , s = n = {
                    callback: r,
                    next: null,
                    prev: n
                };
            return s.prev ? s.prev.next = s : t = s,
                function() {
                    !i || t === null || (i = !1,
                        s.next ? s.next.prev = s.prev : n = s.prev,
                        s.prev ? s.prev.next = s.next : t = s.next)
                }
        }
    }
}
const bp = {
    notify() { },
    get: () => []
};
function LE(e, t) {
    let n, r = bp, i = 0, s = !1;
    function o(y) {
        c();
        const _ = r.subscribe(y);
        let p = !1;
        return () => {
            p || (p = !0,
                _(),
                d())
        }
    }
    function l() {
        r.notify()
    }
    function a() {
        w.onStateChange && w.onStateChange()
    }
    function u() {
        return s
    }
    function c() {
        i++,
            n || (n = t ? t.addNestedSub(a) : e.subscribe(a),
                r = AE())
    }
    function d() {
        i--,
            n && i === 0 && (n(),
                n = void 0,
                r.clear(),
                r = bp)
    }
    function f() {
        s || (s = !0,
            c())
    }
    function m() {
        s && (s = !1,
            d())
    }
    const w = {
        addNestedSub: o,
        notifyNestedSubs: l,
        handleChangeWrapper: a,
        isSubscribed: u,
        trySubscribe: f,
        tryUnsubscribe: m,
        getListeners: () => r
    };
    return w
}
const jE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
    , ME = jE ? T.useLayoutEffect : T.useEffect;
function DE({ store: e, context: t, children: n, serverState: r, stabilityCheck: i = "once", noopCheck: s = "once" }) {
    const o = T.useMemo(() => {
        const u = LE(e);
        return {
            store: e,
            subscription: u,
            getServerState: r ? () => r : void 0,
            stabilityCheck: i,
            noopCheck: s
        }
    }
        , [e, r, i, s])
        , l = T.useMemo(() => e.getState(), [e]);
    ME(() => {
        const { subscription: u } = o;
        return u.onStateChange = u.notifyNestedSubs,
            u.trySubscribe(),
            l !== e.getState() && u.notifyNestedSubs(),
            () => {
                u.tryUnsubscribe(),
                    u.onStateChange = void 0
            }
    }
        , [o, l]);
    const a = t || Tn;
    return T.createElement(a.Provider, {
        value: o
    }, n)
}
function gv(e = Tn) {
    const t = e === Tn ? uv : id(e);
    return function() {
        const { store: r } = t();
        return r
    }
}
const UE = gv();
function zE(e = Tn) {
    const t = e === Tn ? UE : gv(e);
    return function() {
        return t().dispatch
    }
}
const cd = zE();
SE(hE.useSyncExternalStoreWithSelector);
gE(Sg.unstable_batchedUpdates);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vv = function(e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
            t[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023),
                t[n++] = i >> 18 | 240,
                t[n++] = i >> 12 & 63 | 128,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224,
                    t[n++] = i >> 6 & 63 | 128,
                    t[n++] = i & 63 | 128)
    }
    return t
}
    , $E = function(e) {
        const t = [];
        let n = 0
            , r = 0;
        for (; n < e.length;) {
            const i = e[n++];
            if (i < 128)
                t[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
                const s = e[n++];
                t[r++] = String.fromCharCode((i & 31) << 6 | s & 63)
            } else if (i > 239 && i < 365) {
                const s = e[n++]
                    , o = e[n++]
                    , l = e[n++]
                    , a = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | l & 63) - 65536;
                t[r++] = String.fromCharCode(55296 + (a >> 10)),
                    t[r++] = String.fromCharCode(56320 + (a & 1023))
            } else {
                const s = e[n++]
                    , o = e[n++];
                t[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63)
            }
        }
        return t.join("")
    }
    , yv = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(e, t) {
            if (!Array.isArray(e))
                throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
                , r = [];
            for (let i = 0; i < e.length; i += 3) {
                const s = e[i]
                    , o = i + 1 < e.length
                    , l = o ? e[i + 1] : 0
                    , a = i + 2 < e.length
                    , u = a ? e[i + 2] : 0
                    , c = s >> 2
                    , d = (s & 3) << 4 | l >> 4;
                let f = (l & 15) << 2 | u >> 6
                    , m = u & 63;
                a || (m = 64,
                    o || (f = 64)),
                    r.push(n[c], n[d], n[f], n[m])
            }
            return r.join("")
        },
        encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(vv(e), t)
        },
        decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : $E(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray(e, t) {
            this.init_();
            const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
                , r = [];
            for (let i = 0; i < e.length;) {
                const s = n[e.charAt(i++)]
                    , l = i < e.length ? n[e.charAt(i)] : 0;
                ++i;
                const u = i < e.length ? n[e.charAt(i)] : 64;
                ++i;
                const d = i < e.length ? n[e.charAt(i)] : 64;
                if (++i,
                    s == null || l == null || u == null || d == null)
                    throw new FE;
                const f = s << 2 | l >> 4;
                if (r.push(f),
                    u !== 64) {
                    const m = l << 4 & 240 | u >> 2;
                    if (r.push(m),
                        d !== 64) {
                        const w = u << 6 & 192 | d;
                        r.push(w)
                    }
                }
            }
            return r
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                for (let e = 0; e < this.ENCODED_VALS.length; e++)
                    this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                        this.charToByteMap_[this.byteToCharMap_[e]] = e,
                        this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                        e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
            }
        }
    };
class FE extends Error {
    constructor() {
        super(...arguments),
            this.name = "DecodeBase64StringError"
    }
}
const BE = function(e) {
    const t = vv(e);
    return yv.encodeByteArray(t, !0)
}
    , Lo = function(e) {
        return BE(e).replace(/\./g, "")
    }
    , wv = function(e) {
        try {
            return yv.decodeString(e, !0)
        } catch (t) {
            console.error("base64Decode failed: ", t)
        }
        return null
    };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function VE() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const HE = () => VE().__FIREBASE_DEFAULTS__
    , WE = () => {
        if (typeof process > "u" || typeof process.env > "u")
            return;
        const e = {}.__FIREBASE_DEFAULTS__;
        if (e)
            return JSON.parse(e)
    }
    , GE = () => {
        if (typeof document > "u")
            return;
        let e;
        try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const t = e && wv(e[1]);
        return t && JSON.parse(t)
    }
    , Ca = () => {
        try {
            return HE() || WE() || GE()
        } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return
        }
    }
    , Sv = e => {
        var t, n;
        return (n = (t = Ca()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0 ? void 0 : n[e]
    }
    , qE = e => {
        const t = Sv(e);
        if (!t)
            return;
        const n = t.lastIndexOf(":");
        if (n <= 0 || n + 1 === t.length)
            throw new Error(`Invalid host ${t} with no separate hostname and port!`);
        const r = parseInt(t.substring(n + 1), 10);
        return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
    }
    , _v = () => {
        var e;
        return (e = Ca()) === null || e === void 0 ? void 0 : e.config
    }
    , xv = e => {
        var t;
        return (t = Ca()) === null || t === void 0 ? void 0 : t[`_ ${e}`]
    }
    ;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class KE {
    constructor() {
        this.reject = () => { }
            ,
            this.resolve = () => { }
            ,
            this.promise = new Promise((t, n) => {
                this.resolve = t,
                    this.reject = n
            }
            )
    }
    wrapCallback(t) {
        return (n, r) => {
            n ? this.reject(n) : this.resolve(r),
                typeof t == "function" && (this.promise.catch(() => { }
                ),
                    t.length === 1 ? t(n) : t(n, r))
        }
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function XE(e, t) {
    if (e.uid)
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    const n = {
        alg: "none",
        type: "JWT"
    }
        , r = t || "demo-project"
        , i = e.iat || 0
        , s = e.sub || e.user_id;
    if (!s)
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const o = Object.assign({
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        }
    }, e)
        , l = "";
    return [Lo(JSON.stringify(n)), Lo(JSON.stringify(o)), l].join(".")
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function YE() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())
}
function QE() {
    var e;
    const t = (e = Ca()) === null || e === void 0 ? void 0 : e.forceEnvironment;
    if (t === "node")
        return !0;
    if (t === "browser")
        return !1;
    try {
        return Object.prototype.toString.call(global.process) === "[object process]"
    } catch {
        return !1
    }
}
function JE() {
    const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof e == "object" && e.id !== void 0
}
function ZE() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function eT() {
    const e = xe();
    return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
}
function tT() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function nT() {
    return new Promise((e, t) => {
        try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module"
                , i = self.indexedDB.open(r);
            i.onsuccess = () => {
                i.result.close(),
                    n || self.indexedDB.deleteDatabase(r),
                    e(!0)
            }
                ,
                i.onupgradeneeded = () => {
                    n = !1
                }
                ,
                i.onerror = () => {
                    var s;
                    t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "")
                }
        } catch (n) {
            t(n)
        }
    }
    )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rT = "FirebaseError";
class Vt extends Error {
    constructor(t, n, r) {
        super(n),
            this.code = t,
            this.customData = r,
            this.name = rT,
            Object.setPrototypeOf(this, Vt.prototype),
            Error.captureStackTrace && Error.captureStackTrace(this, Zi.prototype.create)
    }
}
class Zi {
    constructor(t, n, r) {
        this.service = t,
            this.serviceName = n,
            this.errors = r
    }
    create(t, ...n) {
        const r = n[0] || {}
            , i = `${this.service}/${t}`
            , s = this.errors[t]
            , o = s ? iT(s, r) : "Error"
            , l = `${this.serviceName}: ${o} (${i}).`;
        return new Vt(i, l, r)
    }
}
function iT(e, t) {
    return e.replace(sT, (n, r) => {
        const i = t[r];
        return i != null ? String(i) : `<${r}?>`
    }
    )
}
const sT = /\{\$([^}]+)}/g;
function oT(e) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
            return !1;
    return !0
}
function jo(e, t) {
    if (e === t)
        return !0;
    const n = Object.keys(e)
        , r = Object.keys(t);
    for (const i of n) {
        if (!r.includes(i))
            return !1;
        const s = e[i]
            , o = t[i];
        if (Pp(s) && Pp(o)) {
            if (!jo(s, o))
                return !1
        } else if (s !== o)
            return !1
    }
    for (const i of r)
        if (!n.includes(i))
            return !1;
    return !0
}
function Pp(e) {
    return e !== null && typeof e == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function es(e) {
    const t = [];
    for (const [n, r] of Object.entries(e))
        Array.isArray(r) ? r.forEach(i => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i))
        }
        ) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : ""
}
function aT(e, t) {
    const n = new lT(e, t);
    return n.subscribe.bind(n)
}
class lT {
    constructor(t, n) {
        this.observers = [],
            this.unsubscribes = [],
            this.observerCount = 0,
            this.task = Promise.resolve(),
            this.finalized = !1,
            this.onNoObservers = n,
            this.task.then(() => {
                t(this)
            }
            ).catch(r => {
                this.error(r)
            }
            )
    }
    next(t) {
        this.forEachObserver(n => {
            n.next(t)
        }
        )
    }
    error(t) {
        this.forEachObserver(n => {
            n.error(t)
        }
        ),
            this.close(t)
    }
    complete() {
        this.forEachObserver(t => {
            t.complete()
        }
        ),
            this.close()
    }
    subscribe(t, n, r) {
        let i;
        if (t === void 0 && n === void 0 && r === void 0)
            throw new Error("Missing Observer.");
        uT(t, ["next", "error", "complete"]) ? i = t : i = {
            next: t,
            error: n,
            complete: r
        },
            i.next === void 0 && (i.next = xl),
            i.error === void 0 && (i.error = xl),
            i.complete === void 0 && (i.complete = xl);
        const s = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? i.error(this.finalError) : i.complete()
            } catch { }
        }
        ),
            this.observers.push(i),
            s
    }
    unsubscribeOne(t) {
        this.observers === void 0 || this.observers[t] === void 0 || (delete this.observers[t],
            this.observerCount -= 1,
            this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(t) {
        if (!this.finalized)
            for (let n = 0; n < this.observers.length; n++)
                this.sendOne(n, t)
    }
    sendOne(t, n) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[t] !== void 0)
                try {
                    n(this.observers[t])
                } catch (r) {
                    typeof console < "u" && console.error && console.error(r)
                }
        }
        )
    }
    close(t) {
        this.finalized || (this.finalized = !0,
            t !== void 0 && (this.finalError = t),
            this.task.then(() => {
                this.observers = void 0,
                    this.onNoObservers = void 0
            }
            ))
    }
}
function uT(e, t) {
    if (typeof e != "object" || e === null)
        return !1;
    for (const n of t)
        if (n in e && typeof e[n] == "function")
            return !0;
    return !1
}
function xl() { }
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e) {
    return e && e._delegate ? e._delegate : e
}
class Yn {
    constructor(t, n, r) {
        this.name = t,
            this.instanceFactory = n,
            this.type = r,
            this.multipleInstances = !1,
            this.serviceProps = {},
            this.instantiationMode = "LAZY",
            this.onInstanceCreated = null
    }
    setInstantiationMode(t) {
        return this.instantiationMode = t,
            this
    }
    setMultipleInstances(t) {
        return this.multipleInstances = t,
            this
    }
    setServiceProps(t) {
        return this.serviceProps = t,
            this
    }
    setInstanceCreatedCallback(t) {
        return this.onInstanceCreated = t,
            this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const An = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cT {
    constructor(t, n) {
        this.name = t,
            this.container = n,
            this.component = null,
            this.instances = new Map,
            this.instancesDeferred = new Map,
            this.instancesOptions = new Map,
            this.onInitCallbacks = new Map
    }
    get(t) {
        const n = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(n)) {
            const r = new KE;
            if (this.instancesDeferred.set(n, r),
                this.isInitialized(n) || this.shouldAutoInitialize())
                try {
                    const i = this.getOrInitializeService({
                        instanceIdentifier: n
                    });
                    i && r.resolve(i)
                } catch { }
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(t) {
        var n;
        const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier)
            , i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: r
                })
            } catch (s) {
                if (i)
                    return null;
                throw s
            }
        else {
            if (i)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(t) {
        if (t.name !== this.name)
            throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = t,
            !!this.shouldAutoInitialize()) {
            if (fT(t))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: An
                    })
                } catch { }
            for (const [n, r] of this.instancesDeferred.entries()) {
                const i = this.normalizeInstanceIdentifier(n);
                try {
                    const s = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    r.resolve(s)
                } catch { }
            }
        }
    }
    clearInstance(t = An) {
        this.instancesDeferred.delete(t),
            this.instancesOptions.delete(t),
            this.instances.delete(t)
    }
    async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([...t.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...t.filter(n => "_delete" in n).map(n => n._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(t = An) {
        return this.instances.has(t)
    }
    getOptions(t = An) {
        return this.instancesOptions.get(t) || {}
    }
    initialize(t = {}) {
        const { options: n = {} } = t
            , r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: r,
            options: n
        });
        for (const [s, o] of this.instancesDeferred.entries()) {
            const l = this.normalizeInstanceIdentifier(s);
            r === l && o.resolve(i)
        }
        return i
    }
    onInit(t, n) {
        var r;
        const i = this.normalizeInstanceIdentifier(n)
            , s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
        s.add(t),
            this.onInitCallbacks.set(i, s);
        const o = this.instances.get(i);
        return o && t(o, i),
            () => {
                s.delete(t)
            }
    }
    invokeOnInitCallbacks(t, n) {
        const r = this.onInitCallbacks.get(n);
        if (r)
            for (const i of r)
                try {
                    i(t, n)
                } catch { }
    }
    getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
        let r = this.instances.get(t);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
            instanceIdentifier: dT(t),
            options: n
        }),
            this.instances.set(t, r),
            this.instancesOptions.set(t, n),
            this.invokeOnInitCallbacks(r, t),
            this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, t, r)
            } catch { }
        return r || null
    }
    normalizeInstanceIdentifier(t = An) {
        return this.component ? this.component.multipleInstances ? t : An : t
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
function dT(e) {
    return e === An ? void 0 : e
}
function fT(e) {
    return e.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pT {
    constructor(t) {
        this.name = t,
            this.providers = new Map
    }
    addComponent(t) {
        const n = this.getProvider(t.name);
        if (n.isComponentSet())
            throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        n.setComponent(t)
    }
    addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
            this.addComponent(t)
    }
    getProvider(t) {
        if (this.providers.has(t))
            return this.providers.get(t);
        const n = new cT(t, this);
        return this.providers.set(t, n),
            n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H;
(function(e) {
    e[e.DEBUG = 0] = "DEBUG",
        e[e.VERBOSE = 1] = "VERBOSE",
        e[e.INFO = 2] = "INFO",
        e[e.WARN = 3] = "WARN",
        e[e.ERROR = 4] = "ERROR",
        e[e.SILENT = 5] = "SILENT"
}
)(H || (H = {}));
const hT = {
    debug: H.DEBUG,
    verbose: H.VERBOSE,
    info: H.INFO,
    warn: H.WARN,
    error: H.ERROR,
    silent: H.SILENT
}
    , mT = H.INFO
    , gT = {
        [H.DEBUG]: "log",
        [H.VERBOSE]: "log",
        [H.INFO]: "info",
        [H.WARN]: "warn",
        [H.ERROR]: "error"
    }
    , vT = (e, t, ...n) => {
        if (t < e.logLevel)
            return;
        const r = new Date().toISOString()
            , i = gT[t];
        if (i)
            console[i](`[${r}]  ${e.name}:`, ...n);
        else
            throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
    }
    ;
class Ev {
    constructor(t) {
        this.name = t,
            this._logLevel = mT,
            this._logHandler = vT,
            this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(t) {
        if (!(t in H))
            throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this._logLevel = t
    }
    setLogLevel(t) {
        this._logLevel = typeof t == "string" ? hT[t] : t
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(t) {
        if (typeof t != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = t
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(t) {
        this._userLogHandler = t
    }
    debug(...t) {
        this._userLogHandler && this._userLogHandler(this, H.DEBUG, ...t),
            this._logHandler(this, H.DEBUG, ...t)
    }
    log(...t) {
        this._userLogHandler && this._userLogHandler(this, H.VERBOSE, ...t),
            this._logHandler(this, H.VERBOSE, ...t)
    }
    info(...t) {
        this._userLogHandler && this._userLogHandler(this, H.INFO, ...t),
            this._logHandler(this, H.INFO, ...t)
    }
    warn(...t) {
        this._userLogHandler && this._userLogHandler(this, H.WARN, ...t),
            this._logHandler(this, H.WARN, ...t)
    }
    error(...t) {
        this._userLogHandler && this._userLogHandler(this, H.ERROR, ...t),
            this._logHandler(this, H.ERROR, ...t)
    }
}
const yT = (e, t) => t.some(n => e instanceof n);
let Cp, kp;
function wT() {
    return Cp || (Cp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function ST() {
    return kp || (kp = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Tv = new WeakMap
    , Du = new WeakMap
    , bv = new WeakMap
    , El = new WeakMap
    , dd = new WeakMap;
function _T(e) {
    const t = new Promise((n, r) => {
        const i = () => {
            e.removeEventListener("success", s),
                e.removeEventListener("error", o)
        }
            , s = () => {
                n(yn(e.result)),
                    i()
            }
            , o = () => {
                r(e.error),
                    i()
            }
            ;
        e.addEventListener("success", s),
            e.addEventListener("error", o)
    }
    );
    return t.then(n => {
        n instanceof IDBCursor && Tv.set(n, e)
    }
    ).catch(() => { }
    ),
        dd.set(t, e),
        t
}
function xT(e) {
    if (Du.has(e))
        return;
    const t = new Promise((n, r) => {
        const i = () => {
            e.removeEventListener("complete", s),
                e.removeEventListener("error", o),
                e.removeEventListener("abort", o)
        }
            , s = () => {
                n(),
                    i()
            }
            , o = () => {
                r(e.error || new DOMException("AbortError", "AbortError")),
                    i()
            }
            ;
        e.addEventListener("complete", s),
            e.addEventListener("error", o),
            e.addEventListener("abort", o)
    }
    );
    Du.set(e, t)
}
let Uu = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if (t === "done")
                return Du.get(e);
            if (t === "objectStoreNames")
                return e.objectStoreNames || bv.get(e);
            if (t === "store")
                return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return yn(e[t])
    },
    set(e, t, n) {
        return e[t] = n,
            !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};
function ET(e) {
    Uu = e(Uu)
}
function TT(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
        const r = e.call(Tl(this), t, ...n);
        return bv.set(r, t.sort ? t.sort() : [t]),
            yn(r)
    }
        : ST().includes(e) ? function(...t) {
            return e.apply(Tl(this), t),
                yn(Tv.get(this))
        }
            : function(...t) {
                return yn(e.apply(Tl(this), t))
            }
}
function bT(e) {
    return typeof e == "function" ? TT(e) : (e instanceof IDBTransaction && xT(e),
        yT(e, wT()) ? new Proxy(e, Uu) : e)
}
function yn(e) {
    if (e instanceof IDBRequest)
        return _T(e);
    if (El.has(e))
        return El.get(e);
    const t = bT(e);
    return t !== e && (El.set(e, t),
        dd.set(t, e)),
        t
}
const Tl = e => dd.get(e);
function PT(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
    const o = indexedDB.open(e, t)
        , l = yn(o);
    return r && o.addEventListener("upgradeneeded", a => {
        r(yn(o.result), a.oldVersion, a.newVersion, yn(o.transaction), a)
    }
    ),
        n && o.addEventListener("blocked", a => n(a.oldVersion, a.newVersion, a)),
        l.then(a => {
            s && a.addEventListener("close", () => s()),
                i && a.addEventListener("versionchange", u => i(u.oldVersion, u.newVersion, u))
        }
        ).catch(() => { }
        ),
        l
}
const CT = ["get", "getKey", "getAll", "getAllKeys", "count"]
    , kT = ["put", "add", "delete", "clear"]
    , bl = new Map;
function Ip(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
        return;
    if (bl.get(t))
        return bl.get(t);
    const n = t.replace(/FromIndex$/, "")
        , r = t !== n
        , i = kT.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || CT.includes(n)))
        return;
    const s = async function(o, ...l) {
        const a = this.transaction(o, i ? "readwrite" : "readonly");
        let u = a.store;
        return r && (u = u.index(l.shift())),
            (await Promise.all([u[n](...l), i && a.done]))[0]
    };
    return bl.set(t, s),
        s
}
ET(e => ({
    ...e,
    get: (t, n, r) => Ip(t, n) || e.get(t, n, r),
    has: (t, n) => !!Ip(t, n) || e.has(t, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IT {
    constructor(t) {
        this.container = t
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (OT(n)) {
                const r = n.getImmediate();
                return `${r.library}/${r.version}`
            } else
                return null
        }
        ).filter(n => n).join(" ")
    }
}
function OT(e) {
    const t = e.getComponent();
    return (t == null ? void 0 : t.type) === "VERSION"
}
const zu = "@firebase/app"
    , Op = "0.9.22";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn = new Ev("@firebase/app")
    , NT = "@firebase/app-compat"
    , RT = "@firebase/analytics-compat"
    , AT = "@firebase/analytics"
    , LT = "@firebase/app-check-compat"
    , jT = "@firebase/app-check"
    , MT = "@firebase/auth"
    , DT = "@firebase/auth-compat"
    , UT = "@firebase/database"
    , zT = "@firebase/database-compat"
    , $T = "@firebase/functions"
    , FT = "@firebase/functions-compat"
    , BT = "@firebase/installations"
    , VT = "@firebase/installations-compat"
    , HT = "@firebase/messaging"
    , WT = "@firebase/messaging-compat"
    , GT = "@firebase/performance"
    , qT = "@firebase/performance-compat"
    , KT = "@firebase/remote-config"
    , XT = "@firebase/remote-config-compat"
    , YT = "@firebase/storage"
    , QT = "@firebase/storage-compat"
    , JT = "@firebase/firestore"
    , ZT = "@firebase/firestore-compat"
    , eb = "firebase"
    , tb = "10.5.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $u = "[DEFAULT]"
    , nb = {
        [zu]: "fire-core",
        [NT]: "fire-core-compat",
        [AT]: "fire-analytics",
        [RT]: "fire-analytics-compat",
        [jT]: "fire-app-check",
        [LT]: "fire-app-check-compat",
        [MT]: "fire-auth",
        [DT]: "fire-auth-compat",
        [UT]: "fire-rtdb",
        [zT]: "fire-rtdb-compat",
        [$T]: "fire-fn",
        [FT]: "fire-fn-compat",
        [BT]: "fire-iid",
        [VT]: "fire-iid-compat",
        [HT]: "fire-fcm",
        [WT]: "fire-fcm-compat",
        [GT]: "fire-perf",
        [qT]: "fire-perf-compat",
        [KT]: "fire-rc",
        [XT]: "fire-rc-compat",
        [YT]: "fire-gcs",
        [QT]: "fire-gcs-compat",
        [JT]: "fire-fst",
        [ZT]: "fire-fst-compat",
        "fire-js": "fire-js",
        [eb]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mo = new Map
    , Fu = new Map;
function rb(e, t) {
    try {
        e.container.addComponent(t)
    } catch (n) {
        Qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
}
function zr(e) {
    const t = e.name;
    if (Fu.has(t))
        return Qn.debug(`There were multiple attempts to register component ${t}.`),
            !1;
    Fu.set(t, e);
    for (const n of Mo.values())
        rb(n, e);
    return !0
}
function fd(e, t) {
    const n = e.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(),
        e.container.getProvider(t)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ib = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}
    , wn = new Zi("app", "Firebase", ib);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sb {
    constructor(t, n, r) {
        this._isDeleted = !1,
            this._options = Object.assign({}, t),
            this._config = Object.assign({}, n),
            this._name = n.name,
            this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled,
            this._container = r,
            this.container.addComponent(new Yn("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
            this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(),
            this._automaticDataCollectionEnabled = t
    }
    get name() {
        return this.checkDestroyed(),
            this._name
    }
    get options() {
        return this.checkDestroyed(),
            this._options
    }
    get config() {
        return this.checkDestroyed(),
            this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(t) {
        this._isDeleted = t
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw wn.create("app-deleted", {
                appName: this._name
            })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kr = tb;
function Pv(e, t = {}) {
    let n = e;
    typeof t != "object" && (t = {
        name: t
    });
    const r = Object.assign({
        name: $u,
        automaticDataCollectionEnabled: !1
    }, t)
        , i = r.name;
    if (typeof i != "string" || !i)
        throw wn.create("bad-app-name", {
            appName: String(i)
        });
    if (n || (n = _v()),
        !n)
        throw wn.create("no-options");
    const s = Mo.get(i);
    if (s) {
        if (jo(n, s.options) && jo(r, s.config))
            return s;
        throw wn.create("duplicate-app", {
            appName: i
        })
    }
    const o = new pT(i);
    for (const a of Fu.values())
        o.addComponent(a);
    const l = new sb(n, r, o);
    return Mo.set(i, l),
        l
}
function Cv(e = $u) {
    const t = Mo.get(e);
    if (!t && e === $u && _v())
        return Pv();
    if (!t)
        throw wn.create("no-app", {
            appName: e
        });
    return t
}
function Sn(e, t, n) {
    var r;
    let i = (r = nb[e]) !== null && r !== void 0 ? r : e;
    n && (i += `-${n}`);
    const s = i.match(/\s|\//)
        , o = t.match(/\s|\//);
    if (s || o) {
        const l = [`Unable to register library "${i}" with version "${t}":`];
        s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
            s && o && l.push("and"),
            o && l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
            Qn.warn(l.join(" "));
        return
    }
    zr(new Yn(`${i}-version`, () => ({
        library: i,
        version: t
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ob = "firebase-heartbeat-database"
    , ab = 1
    , Vi = "firebase-heartbeat-store";
let Pl = null;
function kv() {
    return Pl || (Pl = PT(ob, ab, {
        upgrade: (e, t) => {
            switch (t) {
                case 0:
                    e.createObjectStore(Vi)
            }
        }
    }).catch(e => {
        throw wn.create("idb-open", {
            originalErrorMessage: e.message
        })
    }
    )),
        Pl
}
async function lb(e) {
    try {
        return await (await kv()).transaction(Vi).objectStore(Vi).get(Iv(e))
    } catch (t) {
        if (t instanceof Vt)
            Qn.warn(t.message);
        else {
            const n = wn.create("idb-get", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            Qn.warn(n.message)
        }
    }
}
async function Np(e, t) {
    try {
        const r = (await kv()).transaction(Vi, "readwrite");
        await r.objectStore(Vi).put(t, Iv(e)),
            await r.done
    } catch (n) {
        if (n instanceof Vt)
            Qn.warn(n.message);
        else {
            const r = wn.create("idb-set", {
                originalErrorMessage: n == null ? void 0 : n.message
            });
            Qn.warn(r.message)
        }
    }
}
function Iv(e) {
    return `${e.name}!${e.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ub = 1024
    , cb = 30 * 24 * 60 * 60 * 1e3;
class db {
    constructor(t) {
        this.container = t,
            this._heartbeatsCache = null;
        const n = this.container.getProvider("app").getImmediate();
        this._storage = new pb(n),
            this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r,
                r))
    }
    async triggerHeartbeat() {
        const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
            , r = Rp();
        if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise),
            !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some(i => i.date === r)))
            return this._heartbeatsCache.heartbeats.push({
                date: r,
                agent: n
            }),
                this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(i => {
                    const s = new Date(i.date).valueOf();
                    return Date.now() - s <= cb
                }
                ),
                this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
            this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
            return "";
        const t = Rp()
            , { heartbeatsToSend: n, unsentEntries: r } = fb(this._heartbeatsCache.heartbeats)
            , i = Lo(JSON.stringify({
                version: 2,
                heartbeats: n
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = t,
            r.length > 0 ? (this._heartbeatsCache.heartbeats = r,
                await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
                    this._storage.overwrite(this._heartbeatsCache)),
            i
    }
}
function Rp() {
    return new Date().toISOString().substring(0, 10)
}
function fb(e, t = ub) {
    const n = [];
    let r = e.slice();
    for (const i of e) {
        const s = n.find(o => o.agent === i.agent);
        if (s) {
            if (s.dates.push(i.date),
                Ap(n) > t) {
                s.dates.pop();
                break
            }
        } else if (n.push({
            agent: i.agent,
            dates: [i.date]
        }),
            Ap(n) > t) {
            n.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: r
    }
}
class pb {
    constructor(t) {
        this.app = t,
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return tT() ? nT().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        return await this._canUseIndexedDBPromise ? await lb(this.app) || {
            heartbeats: []
        } : {
            heartbeats: []
        }
    }
    async overwrite(t) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Np(this.app, {
                lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
                heartbeats: t.heartbeats
            })
        } else
            return
    }
    async add(t) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return Np(this.app, {
                lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...t.heartbeats]
            })
        } else
            return
    }
}
function Ap(e) {
    return Lo(JSON.stringify({
        version: 2,
        heartbeats: e
    })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hb(e) {
    zr(new Yn("platform-logger", t => new IT(t), "PRIVATE")),
        zr(new Yn("heartbeat", t => new db(t), "PRIVATE")),
        Sn(zu, Op, e),
        Sn(zu, Op, "esm2017"),
        Sn("fire-js", "")
}
hb("");
function pd(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
function Ov() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const mb = Ov
    , Nv = new Zi("auth", "Firebase", Ov());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Do = new Ev("@firebase/auth");
function gb(e, ...t) {
    Do.logLevel <= H.WARN && Do.warn(`Auth (${Kr}): ${e}`, ...t)
}
function Hs(e, ...t) {
    Do.logLevel <= H.ERROR && Do.error(`Auth (${Kr}): ${e}`, ...t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e, ...t) {
    throw hd(e, ...t)
}
function yt(e, ...t) {
    return hd(e, ...t)
}
function Rv(e, t, n) {
    const r = Object.assign(Object.assign({}, mb()), {
        [t]: n
    });
    return new Zi("auth", "Firebase", r).create(t, {
        appName: e.name
    })
}
function vb(e, t, n) {
    const r = n;
    if (!(t instanceof r))
        throw r.name !== t.constructor.name && St(e, "argument-error"),
        Rv(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}
function hd(e, ...t) {
    if (typeof e != "string") {
        const n = t[0]
            , r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name),
            e._errorFactory.create(n, ...r)
    }
    return Nv.create(e, ...t)
}
function D(e, t, ...n) {
    if (!e)
        throw hd(t, ...n)
}
function Nt(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw Hs(t),
    new Error(t)
}
function $t(e, t) {
    e || Nt(t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bu() {
    var e;
    return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.href) || ""
}
function yb() {
    return Lp() === "http:" || Lp() === "https:"
}
function Lp() {
    var e;
    return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.protocol) || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wb() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (yb() || JE() || "connection" in navigator) ? navigator.onLine : !0
}
function Sb() {
    if (typeof navigator > "u")
        return null;
    const e = navigator;
    return e.languages && e.languages[0] || e.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts {
    constructor(t, n) {
        this.shortDelay = t,
            this.longDelay = n,
            $t(n > t, "Short delay should be less than long delay!"),
            this.isMobile = YE() || ZE()
    }
    get() {
        return wb() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function md(e, t) {
    $t(e.emulator, "Emulator should always be set here");
    const { url: n } = e.emulator;
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Av {
    static initialize(t, n, r) {
        this.fetchImpl = t,
            n && (this.headersImpl = n),
            r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers" in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response" in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _b = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xb = new ts(3e4, 6e4);
function Lv(e, t) {
    return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
        tenantId: e.tenantId
    }) : t
}
async function ns(e, t, n, r, i = {}) {
    return jv(e, i, async () => {
        let s = {}
            , o = {};
        r && (t === "GET" ? o = r : s = {
            body: JSON.stringify(r)
        });
        const l = es(Object.assign({
            key: e.config.apiKey
        }, o)).slice(1)
            , a = await e._getAdditionalHeaders();
        return a["Content-Type"] = "application/json",
            e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
            Av.fetch()(Mv(e, e.config.apiHost, n, l), Object.assign({
                method: t,
                headers: a,
                referrerPolicy: "no-referrer"
            }, s))
    }
    )
}
async function jv(e, t, n) {
    e._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, _b), t);
    try {
        const i = new Tb(e)
            , s = await Promise.race([n(), i.promise]);
        i.clearNetworkTimeout();
        const o = await s.json();
        if ("needConfirmation" in o)
            throw Cs(e, "account-exists-with-different-credential", o);
        if (s.ok && !("errorMessage" in o))
            return o;
        {
            const l = s.ok ? o.errorMessage : o.error.message
                , [a, u] = l.split(" : ");
            if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw Cs(e, "credential-already-in-use", o);
            if (a === "EMAIL_EXISTS")
                throw Cs(e, "email-already-in-use", o);
            if (a === "USER_DISABLED")
                throw Cs(e, "user-disabled", o);
            const c = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
            if (u)
                throw Rv(e, c, u);
            St(e, c)
        }
    } catch (i) {
        if (i instanceof Vt)
            throw i;
        St(e, "network-request-failed", {
            message: String(i)
        })
    }
}
async function Eb(e, t, n, r, i = {}) {
    const s = await ns(e, t, n, r, i);
    return "mfaPendingCredential" in s && St(e, "multi-factor-auth-required", {
        _serverResponse: s
    }),
        s
}
function Mv(e, t, n, r) {
    const i = `${t}${n}?${r}`;
    return e.config.emulator ? md(e.config, i) : `${e.config.apiScheme}://${i}`
}
class Tb {
    constructor(t) {
        this.auth = t,
            this.timer = null,
            this.promise = new Promise((n, r) => {
                this.timer = setTimeout(() => r(yt(this.auth, "network-request-failed")), xb.get())
            }
            )
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
}
function Cs(e, t, n) {
    const r = {
        appName: e.name
    };
    n.email && (r.email = n.email),
        n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    const i = yt(e, t, r);
    return i.customData._tokenResponse = n,
        i
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bb(e, t) {
    return ns(e, "POST", "/v1/accounts:delete", t)
}
async function Pb(e, t) {
    return ns(e, "POST", "/v1/accounts:lookup", t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Si(e) {
    if (e)
        try {
            const t = new Date(Number(e));
            if (!isNaN(t.getTime()))
                return t.toUTCString()
        } catch { }
}
async function Cb(e, t = !1) {
    const n = Et(e)
        , r = await n.getIdToken(t)
        , i = gd(r);
    D(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
    const s = typeof i.firebase == "object" ? i.firebase : void 0
        , o = s == null ? void 0 : s.sign_in_provider;
    return {
        claims: i,
        token: r,
        authTime: Si(Cl(i.auth_time)),
        issuedAtTime: Si(Cl(i.iat)),
        expirationTime: Si(Cl(i.exp)),
        signInProvider: o || null,
        signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
    }
}
function Cl(e) {
    return Number(e) * 1e3
}
function gd(e) {
    const [t, n, r] = e.split(".");
    if (t === void 0 || n === void 0 || r === void 0)
        return Hs("JWT malformed, contained fewer than 3 sections"),
            null;
    try {
        const i = wv(n);
        return i ? JSON.parse(i) : (Hs("Failed to decode base64 JWT payload"),
            null)
    } catch (i) {
        return Hs("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()),
            null
    }
}
function kb(e) {
    const t = gd(e);
    return D(t, "internal-error"),
        D(typeof t.exp < "u", "internal-error"),
        D(typeof t.iat < "u", "internal-error"),
        Number(t.exp) - Number(t.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hi(e, t, n = !1) {
    if (n)
        return t;
    try {
        return await t
    } catch (r) {
        throw r instanceof Vt && Ib(r) && e.auth.currentUser === e && await e.auth.signOut(),
        r
    }
}
function Ib({ code: e }) {
    return e === "auth/user-disabled" || e === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ob {
    constructor(t) {
        this.user = t,
            this.isRunning = !1,
            this.timerId = null,
            this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
            this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
            this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(t) {
        var n;
        if (t) {
            const r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
                r
        } else {
            this.errorBackoff = 3e4;
            const i = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(t = !1) {
        if (!this.isRunning)
            return;
        const n = this.getInterval(t);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
            , n)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (t) {
            (t == null ? void 0 : t.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dv {
    constructor(t, n) {
        this.createdAt = t,
            this.lastLoginAt = n,
            this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = Si(this.lastLoginAt),
            this.creationTime = Si(this.createdAt)
    }
    _copy(t) {
        this.createdAt = t.createdAt,
            this.lastLoginAt = t.lastLoginAt,
            this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Uo(e) {
    var t;
    const n = e.auth
        , r = await e.getIdToken()
        , i = await Hi(e, Pb(n, {
            idToken: r
        }));
    D(i == null ? void 0 : i.users.length, n, "internal-error");
    const s = i.users[0];
    e._notifyReloadListener(s);
    const o = !((t = s.providerUserInfo) === null || t === void 0) && t.length ? Ab(s.providerUserInfo) : []
        , l = Rb(e.providerData, o)
        , a = e.isAnonymous
        , u = !(e.email && s.passwordHash) && !(l != null && l.length)
        , c = a ? u : !1
        , d = {
            uid: s.localId,
            displayName: s.displayName || null,
            photoURL: s.photoUrl || null,
            email: s.email || null,
            emailVerified: s.emailVerified || !1,
            phoneNumber: s.phoneNumber || null,
            tenantId: s.tenantId || null,
            providerData: l,
            metadata: new Dv(s.createdAt, s.lastLoginAt),
            isAnonymous: c
        };
    Object.assign(e, d)
}
async function Nb(e) {
    const t = Et(e);
    await Uo(t),
        await t.auth._persistUserIfCurrent(t),
        t.auth._notifyListenersIfCurrent(t)
}
function Rb(e, t) {
    return [...e.filter(r => !t.some(i => i.providerId === r.providerId)), ...t]
}
function Ab(e) {
    return e.map(t => {
        var { providerId: n } = t
            , r = pd(t, ["providerId"]);
        return {
            providerId: n,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    }
    )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lb(e, t) {
    const n = await jv(e, {}, async () => {
        const r = es({
            grant_type: "refresh_token",
            refresh_token: t
        }).slice(1)
            , { tokenApiHost: i, apiKey: s } = e.config
            , o = Mv(e, i, "/v1/token", `key=${s}`)
            , l = await e._getAdditionalHeaders();
        return l["Content-Type"] = "application/x-www-form-urlencoded",
            Av.fetch()(o, {
                method: "POST",
                headers: l,
                body: r
            })
    }
    );
    return {
        accessToken: n.access_token,
        expiresIn: n.expires_in,
        refreshToken: n.refresh_token
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi {
    constructor() {
        this.refreshToken = null,
            this.accessToken = null,
            this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(t) {
        D(t.idToken, "internal-error"),
            D(typeof t.idToken < "u", "internal-error"),
            D(typeof t.refreshToken < "u", "internal-error");
        const n = "expiresIn" in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : kb(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, n)
    }
    async getToken(t, n = !1) {
        return D(!this.accessToken || this.refreshToken, t, "user-token-expired"),
            !n && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(t, this.refreshToken),
                this.accessToken) : null
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(t, n) {
        const { accessToken: r, refreshToken: i, expiresIn: s } = await Lb(t, n);
        this.updateTokensAndExpiration(r, i, Number(s))
    }
    updateTokensAndExpiration(t, n, r) {
        this.refreshToken = n || null,
            this.accessToken = t || null,
            this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(t, n) {
        const { refreshToken: r, accessToken: i, expirationTime: s } = n
            , o = new Wi;
        return r && (D(typeof r == "string", "internal-error", {
            appName: t
        }),
            o.refreshToken = r),
            i && (D(typeof i == "string", "internal-error", {
                appName: t
            }),
                o.accessToken = i),
            s && (D(typeof s == "number", "internal-error", {
                appName: t
            }),
                o.expirationTime = s),
            o
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(t) {
        this.accessToken = t.accessToken,
            this.refreshToken = t.refreshToken,
            this.expirationTime = t.expirationTime
    }
    _clone() {
        return Object.assign(new Wi, this.toJSON())
    }
    _performRefresh() {
        return Nt("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e, t) {
    D(typeof e == "string" || typeof e > "u", "internal-error", {
        appName: t
    })
}
class Fn {
    constructor(t) {
        var { uid: n, auth: r, stsTokenManager: i } = t
            , s = pd(t, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase",
            this.proactiveRefresh = new Ob(this),
            this.reloadUserInfo = null,
            this.reloadListener = null,
            this.uid = n,
            this.auth = r,
            this.stsTokenManager = i,
            this.accessToken = i.accessToken,
            this.displayName = s.displayName || null,
            this.email = s.email || null,
            this.emailVerified = s.emailVerified || !1,
            this.phoneNumber = s.phoneNumber || null,
            this.photoURL = s.photoURL || null,
            this.isAnonymous = s.isAnonymous || !1,
            this.tenantId = s.tenantId || null,
            this.providerData = s.providerData ? [...s.providerData] : [],
            this.metadata = new Dv(s.createdAt || void 0, s.lastLoginAt || void 0)
    }
    async getIdToken(t) {
        const n = await Hi(this, this.stsTokenManager.getToken(this.auth, t));
        return D(n, this.auth, "internal-error"),
            this.accessToken !== n && (this.accessToken = n,
                await this.auth._persistUserIfCurrent(this),
                this.auth._notifyListenersIfCurrent(this)),
            n
    }
    getIdTokenResult(t) {
        return Cb(this, t)
    }
    reload() {
        return Nb(this)
    }
    _assign(t) {
        this !== t && (D(this.uid === t.uid, this.auth, "internal-error"),
            this.displayName = t.displayName,
            this.photoURL = t.photoURL,
            this.email = t.email,
            this.emailVerified = t.emailVerified,
            this.phoneNumber = t.phoneNumber,
            this.isAnonymous = t.isAnonymous,
            this.tenantId = t.tenantId,
            this.providerData = t.providerData.map(n => Object.assign({}, n)),
            this.metadata._copy(t.metadata),
            this.stsTokenManager._assign(t.stsTokenManager))
    }
    _clone(t) {
        const n = new Fn(Object.assign(Object.assign({}, this), {
            auth: t,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        return n.metadata._copy(this.metadata),
            n
    }
    _onReload(t) {
        D(!this.reloadListener, this.auth, "internal-error"),
            this.reloadListener = t,
            this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
                this.reloadUserInfo = null)
    }
    _notifyReloadListener(t) {
        this.reloadListener ? this.reloadListener(t) : this.reloadUserInfo = t
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(t, n = !1) {
        let r = !1;
        t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t),
            r = !0),
            n && await Uo(this),
            await this.auth._persistUserIfCurrent(this),
            r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        const t = await this.getIdToken();
        return await Hi(this, bb(this.auth, {
            idToken: t
        })),
            this.stsTokenManager.clearRefreshToken(),
            this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(t => Object.assign({}, t)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(t, n) {
        var r, i, s, o, l, a, u, c;
        const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0
            , f = (i = n.email) !== null && i !== void 0 ? i : void 0
            , m = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0
            , w = (o = n.photoURL) !== null && o !== void 0 ? o : void 0
            , y = (l = n.tenantId) !== null && l !== void 0 ? l : void 0
            , _ = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0
            , p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0
            , h = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0
            , { uid: v, emailVerified: S, isAnonymous: x, providerData: C, stsTokenManager: E } = n;
        D(v && E, t, "internal-error");
        const b = Wi.fromJSON(this.name, E);
        D(typeof v == "string", t, "internal-error"),
            Wt(d, t.name),
            Wt(f, t.name),
            D(typeof S == "boolean", t, "internal-error"),
            D(typeof x == "boolean", t, "internal-error"),
            Wt(m, t.name),
            Wt(w, t.name),
            Wt(y, t.name),
            Wt(_, t.name),
            Wt(p, t.name),
            Wt(h, t.name);
        const P = new Fn({
            uid: v,
            auth: t,
            email: f,
            emailVerified: S,
            displayName: d,
            isAnonymous: x,
            photoURL: w,
            phoneNumber: m,
            tenantId: y,
            stsTokenManager: b,
            createdAt: p,
            lastLoginAt: h
        });
        return C && Array.isArray(C) && (P.providerData = C.map(A => Object.assign({}, A))),
            _ && (P._redirectEventId = _),
            P
    }
    static async _fromIdTokenResponse(t, n, r = !1) {
        const i = new Wi;
        i.updateFromServerResponse(n);
        const s = new Fn({
            uid: n.localId,
            auth: t,
            stsTokenManager: i,
            isAnonymous: r
        });
        return await Uo(s),
            s
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jp = new Map;
function Rt(e) {
    $t(e instanceof Function, "Expected a class definition");
    let t = jp.get(e);
    return t ? ($t(t instanceof e, "Instance stored in cache mismatched with class"),
        t) : (t = new e,
            jp.set(e, t),
            t)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uv {
    constructor() {
        this.type = "NONE",
            this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(t, n) {
        this.storage[t] = n
    }
    async _get(t) {
        const n = this.storage[t];
        return n === void 0 ? null : n
    }
    async _remove(t) {
        delete this.storage[t]
    }
    _addListener(t, n) { }
    _removeListener(t, n) { }
}
Uv.type = "NONE";
const Mp = Uv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ws(e, t, n) {
    return `firebase:${e}:${t}:${n}`
}
class kr {
    constructor(t, n, r) {
        this.persistence = t,
            this.auth = n,
            this.userKey = r;
        const { config: i, name: s } = this.auth;
        this.fullUserKey = Ws(this.userKey, i.apiKey, s),
            this.fullPersistenceKey = Ws("persistence", i.apiKey, s),
            this.boundEventHandler = n._onStorageEvent.bind(n),
            this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(t) {
        return this.persistence._set(this.fullUserKey, t.toJSON())
    }
    async getCurrentUser() {
        const t = await this.persistence._get(this.fullUserKey);
        return t ? Fn._fromJSON(this.auth, t) : null
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(t) {
        if (this.persistence === t)
            return;
        const n = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
            this.persistence = t,
            n)
            return this.setCurrentUser(n)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(t, n, r = "authUser") {
        if (!n.length)
            return new kr(Rt(Mp), t, r);
        const i = (await Promise.all(n.map(async u => {
            if (await u._isAvailable())
                return u
        }
        ))).filter(u => u);
        let s = i[0] || Rt(Mp);
        const o = Ws(r, t.config.apiKey, t.name);
        let l = null;
        for (const u of n)
            try {
                const c = await u._get(o);
                if (c) {
                    const d = Fn._fromJSON(t, c);
                    u !== s && (l = d),
                        s = u;
                    break
                }
            } catch { }
        const a = i.filter(u => u._shouldAllowMigration);
        return !s._shouldAllowMigration || !a.length ? new kr(s, t, r) : (s = a[0],
            l && await s._set(o, l.toJSON()),
            await Promise.all(n.map(async u => {
                if (u !== s)
                    try {
                        await u._remove(o)
                    } catch { }
            }
            )),
            new kr(s, t, r))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dp(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
    if (Fv(t))
        return "IEMobile";
    if (t.includes("msie") || t.includes("trident/"))
        return "IE";
    if (t.includes("edge/"))
        return "Edge";
    if (zv(t))
        return "Firefox";
    if (t.includes("silk/"))
        return "Silk";
    if (Vv(t))
        return "Blackberry";
    if (Hv(t))
        return "Webos";
    if (vd(t))
        return "Safari";
    if ((t.includes("chrome/") || $v(t)) && !t.includes("edge/"))
        return "Chrome";
    if (Bv(t))
        return "Android";
    {
        const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
            , r = e.match(n);
        if ((r == null ? void 0 : r.length) === 2)
            return r[1]
    }
    return "Other"
}
function zv(e = xe()) {
    return /firefox\//i.test(e)
}
function vd(e = xe()) {
    const t = e.toLowerCase();
    return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
}
function $v(e = xe()) {
    return /crios\//i.test(e)
}
function Fv(e = xe()) {
    return /iemobile/i.test(e)
}
function Bv(e = xe()) {
    return /android/i.test(e)
}
function Vv(e = xe()) {
    return /blackberry/i.test(e)
}
function Hv(e = xe()) {
    return /webos/i.test(e)
}
function ka(e = xe()) {
    return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
}
function jb(e = xe()) {
    var t;
    return ka(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
}
function Mb() {
    return eT() && document.documentMode === 10
}
function Wv(e = xe()) {
    return ka(e) || Bv(e) || Hv(e) || Vv(e) || /windows phone/i.test(e) || Fv(e)
}
function Db() {
    try {
        return !!(window && window !== window.top)
    } catch {
        return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gv(e, t = []) {
    let n;
    switch (e) {
        case "Browser":
            n = Dp(xe());
            break;
        case "Worker":
            n = `${Dp(xe())}-${e}`;
            break;
        default:
            n = e
    }
    const r = t.length ? t.join(",") : "FirebaseCore-web";
    return `${n}/JsCore/${Kr}/${r}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ub {
    constructor(t) {
        this.auth = t,
            this.queue = []
    }
    pushCallback(t, n) {
        const r = s => new Promise((o, l) => {
            try {
                const a = t(s);
                o(a)
            } catch (a) {
                l(a)
            }
        }
        );
        r.onAbort = n,
            this.queue.push(r);
        const i = this.queue.length - 1;
        return () => {
            this.queue[i] = () => Promise.resolve()
        }
    }
    async runMiddleware(t) {
        if (this.auth.currentUser === t)
            return;
        const n = [];
        try {
            for (const r of this.queue)
                await r(t),
                    r.onAbort && n.push(r.onAbort)
        } catch (r) {
            n.reverse();
            for (const i of n)
                try {
                    i()
                } catch { }
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r == null ? void 0 : r.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zb(e, t = {}) {
    return ns(e, "GET", "/v2/passwordPolicy", Lv(e, t))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $b = 6;
class Fb {
    constructor(t) {
        var n, r, i, s;
        const o = t.customStrengthOptions;
        this.customStrengthOptions = {},
            this.customStrengthOptions.minPasswordLength = (n = o.minPasswordLength) !== null && n !== void 0 ? n : $b,
            o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
            o.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter),
            o.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter),
            o.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter),
            o.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter),
            this.enforcementState = t.enforcementState,
            this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
            this.allowedNonAlphanumericCharacters = (i = (r = t.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "",
            this.forceUpgradeOnSignin = (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1,
            this.schemaVersion = t.schemaVersion
    }
    validatePassword(t) {
        var n, r, i, s, o, l;
        const a = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(t, a),
            this.validatePasswordCharacterOptions(t, a),
            a.isValid && (a.isValid = (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
            a.isValid && (a.isValid = (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
            a.isValid && (a.isValid = (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
            a.isValid && (a.isValid = (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
            a.isValid && (a.isValid = (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
            a.isValid && (a.isValid = (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0 ? l : !0),
            a
    }
    validatePasswordLengthOptions(t, n) {
        const r = this.customStrengthOptions.minPasswordLength
            , i = this.customStrengthOptions.maxPasswordLength;
        r && (n.meetsMinPasswordLength = t.length >= r),
            i && (n.meetsMaxPasswordLength = t.length <= i)
    }
    validatePasswordCharacterOptions(t, n) {
        this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
        let r;
        for (let i = 0; i < t.length; i++)
            r = t.charAt(i),
                this.updatePasswordCharacterOptionsStatuses(n, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
    }
    updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
        this.customStrengthOptions.containsLowercaseLetter && (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
            this.customStrengthOptions.containsUppercaseLetter && (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
            this.customStrengthOptions.containsNumericCharacter && (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
            this.customStrengthOptions.containsNonAlphanumericCharacter && (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bb {
    constructor(t, n, r, i) {
        this.app = t,
            this.heartbeatServiceProvider = n,
            this.appCheckServiceProvider = r,
            this.config = i,
            this.currentUser = null,
            this.emulatorConfig = null,
            this.operations = Promise.resolve(),
            this.authStateSubscription = new Up(this),
            this.idTokenSubscription = new Up(this),
            this.beforeStateQueue = new Ub(this),
            this.redirectUser = null,
            this.isProactiveRefreshEnabled = !1,
            this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
            this._canInitEmulator = !0,
            this._isInitialized = !1,
            this._deleted = !1,
            this._initializationPromise = null,
            this._popupRedirectResolver = null,
            this._errorFactory = Nv,
            this._agentRecaptchaConfig = null,
            this._tenantRecaptchaConfigs = {},
            this._projectPasswordPolicy = null,
            this._tenantPasswordPolicies = {},
            this.lastNotifiedUid = void 0,
            this.languageCode = null,
            this.tenantId = null,
            this.settings = {
                appVerificationDisabledForTesting: !1
            },
            this.frameworks = [],
            this.name = t.name,
            this.clientVersion = i.sdkClientVersion
    }
    _initializeWithPersistence(t, n) {
        return n && (this._popupRedirectResolver = Rt(n)),
            this._initializationPromise = this.queue(async () => {
                var r, i;
                if (!this._deleted && (this.persistenceManager = await kr.create(this, t),
                    !this._deleted)) {
                    if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
                        try {
                            await this._popupRedirectResolver._initialize(this)
                        } catch { }
                    await this.initializeCurrentUser(n),
                        this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null,
                        !this._deleted && (this._isInitialized = !0)
                }
            }
            ),
            this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        const t = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !t)) {
            if (this.currentUser && t && this.currentUser.uid === t.uid) {
                this._currentUser._assign(t),
                    await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(t, !0)
        }
    }
    async initializeCurrentUser(t) {
        var n;
        const r = await this.assertedPersistence.getCurrentUser();
        let i = r
            , s = !1;
        if (t && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId
                , l = i == null ? void 0 : i._redirectEventId
                , a = await this.tryRedirectSignIn(t);
            (!o || o === l) && (a != null && a.user) && (i = a.user,
                s = !0)
        }
        if (!i)
            return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (s)
                try {
                    await this.beforeStateQueue.runMiddleware(i)
                } catch (o) {
                    i = r,
                        this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o))
                }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return D(this._popupRedirectResolver, this, "argument-error"),
            await this.getOrInitRedirectPersistenceManager(),
            this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(t) {
        let n = null;
        try {
            n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return n
    }
    async reloadAndSetCurrentUserOrClear(t) {
        try {
            await Uo(t)
        } catch (n) {
            if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(t)
    }
    useDeviceLanguage() {
        this.languageCode = Sb()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(t) {
        const n = t ? Et(t) : null;
        return n && D(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
            this._updateCurrentUser(n && n._clone(this))
    }
    async _updateCurrentUser(t, n = !1) {
        if (!this._deleted)
            return t && D(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
                n || await this.beforeStateQueue.runMiddleware(t),
                this.queue(async () => {
                    await this.directlySetCurrentUser(t),
                        this.notifyAuthListeners()
                }
                )
    }
    async signOut() {
        return await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
            this._updateCurrentUser(null, !0)
    }
    setPersistence(t) {
        return this.queue(async () => {
            await this.assertedPersistence.setPersistence(Rt(t))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(t) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const n = this._getPasswordPolicyInternal();
        return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : n.validatePassword(t)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const t = await zb(this)
            , n = new Fb(t);
        this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(t) {
        this._errorFactory = new Zi("auth", "Firebase", t())
    }
    onAuthStateChanged(t, n, r) {
        return this.registerStateListener(this.authStateSubscription, t, n, r)
    }
    beforeAuthStateChanged(t, n) {
        return this.beforeStateQueue.pushCallback(t, n)
    }
    onIdTokenChanged(t, n, r) {
        return this.registerStateListener(this.idTokenSubscription, t, n, r)
    }
    authStateReady() {
        return new Promise((t, n) => {
            if (this.currentUser)
                t();
            else {
                const r = this.onAuthStateChanged(() => {
                    r(),
                        t()
                }
                    , n)
            }
        }
        )
    }
    toJSON() {
        var t;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON()
        }
    }
    async _setRedirectUser(t, n) {
        const r = await this.getOrInitRedirectPersistenceManager(n);
        return t === null ? r.removeCurrentUser() : r.setCurrentUser(t)
    }
    async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
            const n = t && Rt(t) || this._popupRedirectResolver;
            D(n, this, "argument-error"),
                this.redirectPersistenceManager = await kr.create(this, [Rt(n._redirectPersistence)], "redirectUser"),
                this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(t) {
        var n, r;
        return this._isInitialized && await this.queue(async () => { }
        ),
            ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === t ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === t ? this.redirectUser : null
    }
    async _persistUserIfCurrent(t) {
        if (t === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(t))
    }
    _notifyListenersIfCurrent(t) {
        t === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
            this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
            this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var t, n;
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        const r = (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null && n !== void 0 ? n : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r,
            this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(t, n, r, i) {
        if (this._deleted)
            return () => { }
                ;
        const s = typeof n == "function" ? n : n.next.bind(n);
        let o = !1;
        const l = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (D(l, this, "internal-error"),
            l.then(() => {
                o || s(this.currentUser)
            }
            ),
            typeof n == "function") {
            const a = t.addObserver(n, r, i);
            return () => {
                o = !0,
                    a()
            }
        } else {
            const a = t.addObserver(n);
            return () => {
                o = !0,
                    a()
            }
        }
    }
    async directlySetCurrentUser(t) {
        this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(),
            t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
            this.currentUser = t,
            t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(t) {
        return this.operations = this.operations.then(t, t),
            this.operations
    }
    get assertedPersistence() {
        return D(this.persistenceManager, this, "internal-error"),
            this.persistenceManager
    }
    _logFramework(t) {
        !t || this.frameworks.includes(t) || (this.frameworks.push(t),
            this.frameworks.sort(),
            this.clientVersion = Gv(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var t;
        const n = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
        const r = await ((t = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || t === void 0 ? void 0 : t.getHeartbeatsHeader());
        r && (n["X-Firebase-Client"] = r);
        const i = await this._getAppCheckToken();
        return i && (n["X-Firebase-AppCheck"] = i),
            n
    }
    async _getAppCheckToken() {
        var t;
        const n = await ((t = this.appCheckServiceProvider.getImmediate({
            optional: !0
        })) === null || t === void 0 ? void 0 : t.getToken());
        return n != null && n.error && gb(`Error while retrieving App Check token: ${n.error}`),
            n == null ? void 0 : n.token
    }
}
function Ia(e) {
    return Et(e)
}
class Up {
    constructor(t) {
        this.auth = t,
            this.observer = null,
            this.addObserver = aT(n => this.observer = n)
    }
    get next() {
        return D(this.observer, this.auth, "internal-error"),
            this.observer.next.bind(this.observer)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vb() {
    var e, t;
    return (t = (e = document.getElementsByTagName("head")) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : document
}
function Hb(e) {
    return new Promise((t, n) => {
        const r = document.createElement("script");
        r.setAttribute("src", e),
            r.onload = t,
            r.onerror = i => {
                const s = yt("internal-error");
                s.customData = i,
                    n(s)
            }
            ,
            r.type = "text/javascript",
            r.charset = "UTF-8",
            Vb().appendChild(r)
    }
    )
}
function Wb(e) {
    return `__ ${e}${Math.floor(Math.random() * 1e6)}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gb(e, t) {
    const n = fd(e, "auth");
    if (n.isInitialized()) {
        const i = n.getImmediate()
            , s = n.getOptions();
        if (jo(s, t ?? {}))
            return i;
        St(i, "already-initialized")
    }
    return n.initialize({
        options: t
    })
}
function qb(e, t) {
    const n = (t == null ? void 0 : t.persistence) || []
        , r = (Array.isArray(n) ? n : [n]).map(Rt);
    t != null && t.errorMap && e._updateErrorMap(t.errorMap),
        e._initializeWithPersistence(r, t == null ? void 0 : t.popupRedirectResolver)
}
function Kb(e, t, n) {
    const r = Ia(e);
    D(r._canInitEmulator, r, "emulator-config-failed"),
        D(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    const i = !!(n != null && n.disableWarnings)
        , s = qv(t)
        , { host: o, port: l } = Xb(t)
        , a = l === null ? "" : `:${l}`;
    r.config.emulator = {
        url: `${s}//${o}${a}/`
    },
        r.settings.appVerificationDisabledForTesting = !0,
        r.emulatorConfig = Object.freeze({
            host: o,
            port: l,
            protocol: s.replace(":", ""),
            options: Object.freeze({
                disableWarnings: i
            })
        }),
        i || Yb()
}
function qv(e) {
    const t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1)
}
function Xb(e) {
    const t = qv(e)
        , n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
    if (!n)
        return {
            host: "",
            port: null
        };
    const r = n[2].split("@").pop() || ""
        , i = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (i) {
        const s = i[1];
        return {
            host: s,
            port: zp(r.substr(s.length + 1))
        }
    } else {
        const [s, o] = r.split(":");
        return {
            host: s,
            port: zp(o)
        }
    }
}
function zp(e) {
    if (!e)
        return null;
    const t = Number(e);
    return isNaN(t) ? null : t
}
function Yb() {
    function e() {
        const t = document.createElement("p")
            , n = t.style;
        t.innerText = "Running in emulator mode. Do not use with production credentials.",
            n.position = "fixed",
            n.width = "100%",
            n.backgroundColor = "#ffffff",
            n.border = ".1em solid #000000",
            n.color = "#b50000",
            n.bottom = "0px",
            n.left = "0px",
            n.margin = "0px",
            n.zIndex = "10000",
            n.textAlign = "center",
            t.classList.add("firebase-emulator-warning"),
            document.body.appendChild(t)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
        typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kv {
    constructor(t, n) {
        this.providerId = t,
            this.signInMethod = n
    }
    toJSON() {
        return Nt("not implemented")
    }
    _getIdTokenResponse(t) {
        return Nt("not implemented")
    }
    _linkToIdToken(t, n) {
        return Nt("not implemented")
    }
    _getReauthenticationResolver(t) {
        return Nt("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ir(e, t) {
    return Eb(e, "POST", "/v1/accounts:signInWithIdp", Lv(e, t))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qb = "http://localhost";
class Jn extends Kv {
    constructor() {
        super(...arguments),
            this.pendingToken = null
    }
    static _fromParams(t) {
        const n = new Jn(t.providerId, t.signInMethod);
        return t.idToken || t.accessToken ? (t.idToken && (n.idToken = t.idToken),
            t.accessToken && (n.accessToken = t.accessToken),
            t.nonce && !t.pendingToken && (n.nonce = t.nonce),
            t.pendingToken && (n.pendingToken = t.pendingToken)) : t.oauthToken && t.oauthTokenSecret ? (n.accessToken = t.oauthToken,
                n.secret = t.oauthTokenSecret) : St("argument-error"),
            n
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(t) {
        const n = typeof t == "string" ? JSON.parse(t) : t
            , { providerId: r, signInMethod: i } = n
            , s = pd(n, ["providerId", "signInMethod"]);
        if (!r || !i)
            return null;
        const o = new Jn(r, i);
        return o.idToken = s.idToken || void 0,
            o.accessToken = s.accessToken || void 0,
            o.secret = s.secret,
            o.nonce = s.nonce,
            o.pendingToken = s.pendingToken || null,
            o
    }
    _getIdTokenResponse(t) {
        const n = this.buildRequest();
        return Ir(t, n)
    }
    _linkToIdToken(t, n) {
        const r = this.buildRequest();
        return r.idToken = n,
            Ir(t, r)
    }
    _getReauthenticationResolver(t) {
        const n = this.buildRequest();
        return n.autoCreate = !1,
            Ir(t, n)
    }
    buildRequest() {
        const t = {
            requestUri: Qb,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            t.pendingToken = this.pendingToken;
        else {
            const n = {};
            this.idToken && (n.id_token = this.idToken),
                this.accessToken && (n.access_token = this.accessToken),
                this.secret && (n.oauth_token_secret = this.secret),
                n.providerId = this.providerId,
                this.nonce && !this.pendingToken && (n.nonce = this.nonce),
                t.postBody = es(n)
        }
        return t
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yd {
    constructor(t) {
        this.providerId = t,
            this.defaultLanguageCode = null,
            this.customParameters = {}
    }
    setDefaultLanguage(t) {
        this.defaultLanguageCode = t
    }
    setCustomParameters(t) {
        return this.customParameters = t,
            this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs extends yd {
    constructor() {
        super(...arguments),
            this.scopes = []
    }
    addScope(t) {
        return this.scopes.includes(t) || this.scopes.push(t),
            this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends rs {
    constructor() {
        super("facebook.com")
    }
    static credential(t) {
        return Jn._fromParams({
            providerId: Qt.PROVIDER_ID,
            signInMethod: Qt.FACEBOOK_SIGN_IN_METHOD,
            accessToken: t
        })
    }
    static credentialFromResult(t) {
        return Qt.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Qt.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
            return null;
        try {
            return Qt.credential(t.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Qt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Qt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends rs {
    constructor() {
        super("google.com"),
            this.addScope("profile")
    }
    static credential(t, n) {
        return Jn._fromParams({
            providerId: kt.PROVIDER_ID,
            signInMethod: kt.GOOGLE_SIGN_IN_METHOD,
            idToken: t,
            accessToken: n
        })
    }
    static credentialFromResult(t) {
        return kt.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return kt.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t)
            return null;
        const { oauthIdToken: n, oauthAccessToken: r } = t;
        if (!n && !r)
            return null;
        try {
            return kt.credential(n, r)
        } catch {
            return null
        }
    }
}
kt.GOOGLE_SIGN_IN_METHOD = "google.com";
kt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends rs {
    constructor() {
        super("github.com")
    }
    static credential(t) {
        return Jn._fromParams({
            providerId: Jt.PROVIDER_ID,
            signInMethod: Jt.GITHUB_SIGN_IN_METHOD,
            accessToken: t
        })
    }
    static credentialFromResult(t) {
        return Jt.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Jt.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
            return null;
        try {
            return Jt.credential(t.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Jt.GITHUB_SIGN_IN_METHOD = "github.com";
Jt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends rs {
    constructor() {
        super("twitter.com")
    }
    static credential(t, n) {
        return Jn._fromParams({
            providerId: Zt.PROVIDER_ID,
            signInMethod: Zt.TWITTER_SIGN_IN_METHOD,
            oauthToken: t,
            oauthTokenSecret: n
        })
    }
    static credentialFromResult(t) {
        return Zt.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
        return Zt.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
        if (!t)
            return null;
        const { oauthAccessToken: n, oauthTokenSecret: r } = t;
        if (!n || !r)
            return null;
        try {
            return Zt.credential(n, r)
        } catch {
            return null
        }
    }
}
Zt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Zt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r {
    constructor(t) {
        this.user = t.user,
            this.providerId = t.providerId,
            this._tokenResponse = t._tokenResponse,
            this.operationType = t.operationType
    }
    static async _fromIdTokenResponse(t, n, r, i = !1) {
        const s = await Fn._fromIdTokenResponse(t, r, i)
            , o = $p(r);
        return new $r({
            user: s,
            providerId: o,
            _tokenResponse: r,
            operationType: n
        })
    }
    static async _forOperation(t, n, r) {
        await t._updateTokensIfNecessary(r, !0);
        const i = $p(r);
        return new $r({
            user: t,
            providerId: i,
            _tokenResponse: r,
            operationType: n
        })
    }
}
function $p(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo extends Vt {
    constructor(t, n, r, i) {
        var s;
        super(n.code, n.message),
            this.operationType = r,
            this.user = i,
            Object.setPrototypeOf(this, zo.prototype),
            this.customData = {
                appName: t.name,
                tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
                _serverResponse: n.customData._serverResponse,
                operationType: r
            }
    }
    static _fromErrorAndOperation(t, n, r, i) {
        return new zo(t, n, r, i)
    }
}
function Xv(e, t, n, r) {
    return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch(s => {
        throw s.code === "auth/multi-factor-auth-required" ? zo._fromErrorAndOperation(e, s, t, r) : s
    }
    )
}
async function Jb(e, t, n = !1) {
    const r = await Hi(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
    return $r._forOperation(e, "link", r)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zb(e, t, n = !1) {
    const { auth: r } = e
        , i = "reauthenticate";
    try {
        const s = await Hi(e, Xv(r, i, t, e), n);
        D(s.idToken, r, "internal-error");
        const o = gd(s.idToken);
        D(o, r, "internal-error");
        const { sub: l } = o;
        return D(e.uid === l, r, "user-mismatch"),
            $r._forOperation(e, i, s)
    } catch (s) {
        throw (s == null ? void 0 : s.code) === "auth/user-not-found" && St(r, "user-mismatch"),
        s
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function eP(e, t, n = !1) {
    const r = "signIn"
        , i = await Xv(e, r, t)
        , s = await $r._fromIdTokenResponse(e, r, i);
    return n || await e._updateCurrentUser(s.user),
        s
}
function tP(e, t, n, r) {
    return Et(e).onIdTokenChanged(t, n, r)
}
function nP(e, t, n) {
    return Et(e).beforeAuthStateChanged(t, n)
}
const $o = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yv {
    constructor(t, n) {
        this.storageRetriever = t,
            this.type = n
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem($o, "1"),
                this.storage.removeItem($o),
                Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(t, n) {
        return this.storage.setItem(t, JSON.stringify(n)),
            Promise.resolve()
    }
    _get(t) {
        const n = this.storage.getItem(t);
        return Promise.resolve(n ? JSON.parse(n) : null)
    }
    _remove(t) {
        return this.storage.removeItem(t),
            Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rP() {
    const e = xe();
    return vd(e) || ka(e)
}
const iP = 1e3
    , sP = 10;
class Qv extends Yv {
    constructor() {
        super(() => window.localStorage, "LOCAL"),
            this.boundEventHandler = (t, n) => this.onStorageEvent(t, n),
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.safariLocalStorageNotSynced = rP() && Db(),
            this.fallbackToPolling = Wv(),
            this._shouldAllowMigration = !0
    }
    forAllChangedKeys(t) {
        for (const n of Object.keys(this.listeners)) {
            const r = this.storage.getItem(n)
                , i = this.localCache[n];
            r !== i && t(n, i, r)
        }
    }
    onStorageEvent(t, n = !1) {
        if (!t.key) {
            this.forAllChangedKeys((o, l, a) => {
                this.notifyListeners(o, a)
            }
            );
            return
        }
        const r = t.key;
        if (n ? this.detachListener() : this.stopPolling(),
            this.safariLocalStorageNotSynced) {
            const o = this.storage.getItem(r);
            if (t.newValue !== o)
                t.newValue !== null ? this.storage.setItem(r, t.newValue) : this.storage.removeItem(r);
            else if (this.localCache[r] === t.newValue && !n)
                return
        }
        const i = () => {
            const o = this.storage.getItem(r);
            !n && this.localCache[r] === o || this.notifyListeners(r, o)
        }
            , s = this.storage.getItem(r);
        Mb() && s !== t.newValue && t.newValue !== t.oldValue ? setTimeout(i, sP) : i()
    }
    notifyListeners(t, n) {
        this.localCache[t] = n;
        const r = this.listeners[t];
        if (r)
            for (const i of Array.from(r))
                i(n && JSON.parse(n))
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(() => {
                this.forAllChangedKeys((t, n, r) => {
                    this.onStorageEvent(new StorageEvent("storage", {
                        key: t,
                        oldValue: n,
                        newValue: r
                    }), !0)
                }
                )
            }
                , iP)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(t, n) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
            this.listeners[t] || (this.listeners[t] = new Set,
                this.localCache[t] = this.storage.getItem(t)),
            this.listeners[t].add(n)
    }
    _removeListener(t, n) {
        this.listeners[t] && (this.listeners[t].delete(n),
            this.listeners[t].size === 0 && delete this.listeners[t]),
            Object.keys(this.listeners).length === 0 && (this.detachListener(),
                this.stopPolling())
    }
    async _set(t, n) {
        await super._set(t, n),
            this.localCache[t] = JSON.stringify(n)
    }
    async _get(t) {
        const n = await super._get(t);
        return this.localCache[t] = JSON.stringify(n),
            n
    }
    async _remove(t) {
        await super._remove(t),
            delete this.localCache[t]
    }
}
Qv.type = "LOCAL";
const oP = Qv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jv extends Yv {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(t, n) { }
    _removeListener(t, n) { }
}
Jv.type = "SESSION";
const Zv = Jv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aP(e) {
    return Promise.all(e.map(async t => {
        try {
            return {
                fulfilled: !0,
                value: await t
            }
        } catch (n) {
            return {
                fulfilled: !1,
                reason: n
            }
        }
    }
    ))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa {
    constructor(t) {
        this.eventTarget = t,
            this.handlersMap = {},
            this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(t) {
        const n = this.receivers.find(i => i.isListeningto(t));
        if (n)
            return n;
        const r = new Oa(t);
        return this.receivers.push(r),
            r
    }
    isListeningto(t) {
        return this.eventTarget === t
    }
    async handleEvent(t) {
        const n = t
            , { eventId: r, eventType: i, data: s } = n.data
            , o = this.handlersMap[i];
        if (!(o != null && o.size))
            return;
        n.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: i
        });
        const l = Array.from(o).map(async u => u(n.origin, s))
            , a = await aP(l);
        n.ports[0].postMessage({
            status: "done",
            eventId: r,
            eventType: i,
            response: a
        })
    }
    _subscribe(t, n) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
            this.handlersMap[t] || (this.handlersMap[t] = new Set),
            this.handlersMap[t].add(n)
    }
    _unsubscribe(t, n) {
        this.handlersMap[t] && n && this.handlersMap[t].delete(n),
            (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
            Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
Oa.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wd(e = "", t = 10) {
    let n = "";
    for (let r = 0; r < t; r++)
        n += Math.floor(Math.random() * 10);
    return e + n
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lP {
    constructor(t) {
        this.target = t,
            this.handlers = new Set
    }
    removeMessageHandler(t) {
        t.messageChannel && (t.messageChannel.port1.removeEventListener("message", t.onMessage),
            t.messageChannel.port1.close()),
            this.handlers.delete(t)
    }
    async _send(t, n, r = 50) {
        const i = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!i)
            throw new Error("connection_unavailable");
        let s, o;
        return new Promise((l, a) => {
            const u = wd("", 20);
            i.port1.start();
            const c = setTimeout(() => {
                a(new Error("unsupported_event"))
            }
                , r);
            o = {
                messageChannel: i,
                onMessage(d) {
                    const f = d;
                    if (f.data.eventId === u)
                        switch (f.data.status) {
                            case "ack":
                                clearTimeout(c),
                                    s = setTimeout(() => {
                                        a(new Error("timeout"))
                                    }
                                        , 3e3);
                                break;
                            case "done":
                                clearTimeout(s),
                                    l(f.data.response);
                                break;
                            default:
                                clearTimeout(c),
                                    clearTimeout(s),
                                    a(new Error("invalid_response"));
                                break
                        }
                }
            },
                this.handlers.add(o),
                i.port1.addEventListener("message", o.onMessage),
                this.target.postMessage({
                    eventType: t,
                    eventId: u,
                    data: n
                }, [i.port2])
        }
        ).finally(() => {
            o && this.removeMessageHandler(o)
        }
        )
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt() {
    return window
}
function uP(e) {
    wt().location.href = e
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ey() {
    return typeof wt().WorkerGlobalScope < "u" && typeof wt().importScripts == "function"
}
async function cP() {
    if (!(navigator != null && navigator.serviceWorker))
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function dP() {
    var e;
    return ((e = navigator == null ? void 0 : navigator.serviceWorker) === null || e === void 0 ? void 0 : e.controller) || null
}
function fP() {
    return ey() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ty = "firebaseLocalStorageDb"
    , pP = 1
    , Fo = "firebaseLocalStorage"
    , ny = "fbase_key";
class is {
    constructor(t) {
        this.request = t
    }
    toPromise() {
        return new Promise((t, n) => {
            this.request.addEventListener("success", () => {
                t(this.request.result)
            }
            ),
                this.request.addEventListener("error", () => {
                    n(this.request.error)
                }
                )
        }
        )
    }
}
function Na(e, t) {
    return e.transaction([Fo], t ? "readwrite" : "readonly").objectStore(Fo)
}
function hP() {
    const e = indexedDB.deleteDatabase(ty);
    return new is(e).toPromise()
}
function Vu() {
    const e = indexedDB.open(ty, pP);
    return new Promise((t, n) => {
        e.addEventListener("error", () => {
            n(e.error)
        }
        ),
            e.addEventListener("upgradeneeded", () => {
                const r = e.result;
                try {
                    r.createObjectStore(Fo, {
                        keyPath: ny
                    })
                } catch (i) {
                    n(i)
                }
            }
            ),
            e.addEventListener("success", async () => {
                const r = e.result;
                r.objectStoreNames.contains(Fo) ? t(r) : (r.close(),
                    await hP(),
                    t(await Vu()))
            }
            )
    }
    )
}
async function Fp(e, t, n) {
    const r = Na(e, !0).put({
        [ny]: t,
        value: n
    });
    return new is(r).toPromise()
}
async function mP(e, t) {
    const n = Na(e, !1).get(t)
        , r = await new is(n).toPromise();
    return r === void 0 ? null : r.value
}
function Bp(e, t) {
    const n = Na(e, !0).delete(t);
    return new is(n).toPromise()
}
const gP = 800
    , vP = 3;
class ry {
    constructor() {
        this.type = "LOCAL",
            this._shouldAllowMigration = !0,
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.pendingWrites = 0,
            this.receiver = null,
            this.sender = null,
            this.serviceWorkerReceiverAvailable = !1,
            this.activeServiceWorker = null,
            this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => { }
                , () => { }
            )
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await Vu(),
            this.db)
    }
    async _withRetries(t) {
        let n = 0;
        for (; ;)
            try {
                const r = await this._openDb();
                return await t(r)
            } catch (r) {
                if (n++ > vP)
                    throw r;
                this.db && (this.db.close(),
                    this.db = void 0)
            }
    }
    async initializeServiceWorkerMessaging() {
        return ey() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = Oa._getInstance(fP()),
            this.receiver._subscribe("keyChanged", async (t, n) => ({
                keyProcessed: (await this._poll()).includes(n.key)
            })),
            this.receiver._subscribe("ping", async (t, n) => ["keyChanged"])
    }
    async initializeSender() {
        var t, n;
        if (this.activeServiceWorker = await cP(),
            !this.activeServiceWorker)
            return;
        this.sender = new lP(this.activeServiceWorker);
        const r = await this.sender._send("ping", {}, 800);
        r && !((t = r[0]) === null || t === void 0) && t.fulfilled && !((n = r[0]) === null || n === void 0) && n.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(t) {
        if (!(!this.sender || !this.activeServiceWorker || dP() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: t
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch { }
    }
    async _isAvailable() {
        try {
            if (!indexedDB)
                return !1;
            const t = await Vu();
            return await Fp(t, $o, "1"),
                await Bp(t, $o),
                !0
        } catch { }
        return !1
    }
    async _withPendingWrite(t) {
        this.pendingWrites++;
        try {
            await t()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(t, n) {
        return this._withPendingWrite(async () => (await this._withRetries(r => Fp(r, t, n)),
            this.localCache[t] = n,
            this.notifyServiceWorker(t)))
    }
    async _get(t) {
        const n = await this._withRetries(r => mP(r, t));
        return this.localCache[t] = n,
            n
    }
    async _remove(t) {
        return this._withPendingWrite(async () => (await this._withRetries(n => Bp(n, t)),
            delete this.localCache[t],
            this.notifyServiceWorker(t)))
    }
    async _poll() {
        const t = await this._withRetries(i => {
            const s = Na(i, !1).getAll();
            return new is(s).toPromise()
        }
        );
        if (!t)
            return [];
        if (this.pendingWrites !== 0)
            return [];
        const n = []
            , r = new Set;
        for (const { fbase_key: i, value: s } of t)
            r.add(i),
                JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s),
                    n.push(i));
        for (const i of Object.keys(this.localCache))
            this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null),
                n.push(i));
        return n
    }
    notifyListeners(t, n) {
        this.localCache[t] = n;
        const r = this.listeners[t];
        if (r)
            for (const i of Array.from(r))
                i(n)
    }
    startPolling() {
        this.stopPolling(),
            this.pollTimer = setInterval(async () => this._poll(), gP)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
    }
    _addListener(t, n) {
        Object.keys(this.listeners).length === 0 && this.startPolling(),
            this.listeners[t] || (this.listeners[t] = new Set,
                this._get(t)),
            this.listeners[t].add(n)
    }
    _removeListener(t, n) {
        this.listeners[t] && (this.listeners[t].delete(n),
            this.listeners[t].size === 0 && delete this.listeners[t]),
            Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
ry.type = "LOCAL";
const yP = ry;
new ts(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function iy(e, t) {
    return t ? Rt(t) : (D(e._popupRedirectResolver, e, "argument-error"),
        e._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sd extends Kv {
    constructor(t) {
        super("custom", "custom"),
            this.params = t
    }
    _getIdTokenResponse(t) {
        return Ir(t, this._buildIdpRequest())
    }
    _linkToIdToken(t, n) {
        return Ir(t, this._buildIdpRequest(n))
    }
    _getReauthenticationResolver(t) {
        return Ir(t, this._buildIdpRequest())
    }
    _buildIdpRequest(t) {
        const n = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return t && (n.idToken = t),
            n
    }
}
function wP(e) {
    return eP(e.auth, new Sd(e), e.bypassAuthState)
}
function SP(e) {
    const { auth: t, user: n } = e;
    return D(n, t, "internal-error"),
        Zb(n, new Sd(e), e.bypassAuthState)
}
async function _P(e) {
    const { auth: t, user: n } = e;
    return D(n, t, "internal-error"),
        Jb(n, new Sd(e), e.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sy {
    constructor(t, n, r, i, s = !1) {
        this.auth = t,
            this.resolver = r,
            this.user = i,
            this.bypassAuthState = s,
            this.pendingPromise = null,
            this.eventManager = null,
            this.filter = Array.isArray(n) ? n : [n]
    }
    execute() {
        return new Promise(async (t, n) => {
            this.pendingPromise = {
                resolve: t,
                reject: n
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                    await this.onExecution(),
                    this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        }
        )
    }
    async onAuthEvent(t) {
        const { urlResponse: n, sessionId: r, postBody: i, tenantId: s, error: o, type: l } = t;
        if (o) {
            this.reject(o);
            return
        }
        const a = {
            auth: this.auth,
            requestUri: n,
            sessionId: r,
            tenantId: s || void 0,
            postBody: i || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(l)(a))
        } catch (u) {
            this.reject(u)
        }
    }
    onError(t) {
        this.reject(t)
    }
    getIdpTask(t) {
        switch (t) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return wP;
            case "linkViaPopup":
            case "linkViaRedirect":
                return _P;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return SP;
            default:
                St(this.auth, "internal-error")
        }
    }
    resolve(t) {
        $t(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.resolve(t),
            this.unregisterAndCleanUp()
    }
    reject(t) {
        $t(this.pendingPromise, "Pending promise was never set"),
            this.pendingPromise.reject(t),
            this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
            this.pendingPromise = null,
            this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xP = new ts(2e3, 1e4);
async function EP(e, t, n) {
    const r = Ia(e);
    vb(e, t, yd);
    const i = iy(r, n);
    return new Dn(r, "signInViaPopup", t, i).executeNotNull()
}
class Dn extends sy {
    constructor(t, n, r, i, s) {
        super(t, n, i, s),
            this.provider = r,
            this.authWindow = null,
            this.pollId = null,
            Dn.currentPopupAction && Dn.currentPopupAction.cancel(),
            Dn.currentPopupAction = this
    }
    async executeNotNull() {
        const t = await this.execute();
        return D(t, this.auth, "internal-error"),
            t
    }
    async onExecution() {
        $t(this.filter.length === 1, "Popup operations only handle one event");
        const t = wd();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t),
            this.authWindow.associatedEvent = t,
            this.resolver._originValidation(this.auth).catch(n => {
                this.reject(n)
            }
            ),
            this.resolver._isIframeWebStorageSupported(this.auth, n => {
                n || this.reject(yt(this.auth, "web-storage-unsupported"))
            }
            ),
            this.pollUserCancellation()
    }
    get eventId() {
        var t;
        return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null
    }
    cancel() {
        this.reject(yt(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
            this.pollId && window.clearTimeout(this.pollId),
            this.authWindow = null,
            this.pollId = null,
            Dn.currentPopupAction = null
    }
    pollUserCancellation() {
        const t = () => {
            var n, r;
            if (!((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) && r.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null,
                        this.reject(yt(this.auth, "popup-closed-by-user"))
                }
                    , 8e3);
                return
            }
            this.pollId = window.setTimeout(t, xP.get())
        }
            ;
        t()
    }
}
Dn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TP = "pendingRedirect"
    , Gs = new Map;
class bP extends sy {
    constructor(t, n, r = !1) {
        super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, r),
            this.eventId = null
    }
    async execute() {
        let t = Gs.get(this.auth._key());
        if (!t) {
            try {
                const r = await PP(this.resolver, this.auth) ? await super.execute() : null;
                t = () => Promise.resolve(r)
            } catch (n) {
                t = () => Promise.reject(n)
            }
            Gs.set(this.auth._key(), t)
        }
        return this.bypassAuthState || Gs.set(this.auth._key(), () => Promise.resolve(null)),
            t()
    }
    async onAuthEvent(t) {
        if (t.type === "signInViaRedirect")
            return super.onAuthEvent(t);
        if (t.type === "unknown") {
            this.resolve(null);
            return
        }
        if (t.eventId) {
            const n = await this.auth._redirectUserForId(t.eventId);
            if (n)
                return this.user = n,
                    super.onAuthEvent(t);
            this.resolve(null)
        }
    }
    async onExecution() { }
    cleanUp() { }
}
async function PP(e, t) {
    const n = IP(t)
        , r = kP(e);
    if (!await r._isAvailable())
        return !1;
    const i = await r._get(n) === "true";
    return await r._remove(n),
        i
}
function CP(e, t) {
    Gs.set(e._key(), t)
}
function kP(e) {
    return Rt(e._redirectPersistence)
}
function IP(e) {
    return Ws(TP, e.config.apiKey, e.name)
}
async function OP(e, t, n = !1) {
    const r = Ia(e)
        , i = iy(r, t)
        , o = await new bP(r, i, n).execute();
    return o && !n && (delete o.user._redirectEventId,
        await r._persistUserIfCurrent(o.user),
        await r._setRedirectUser(null, t)),
        o
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NP = 10 * 60 * 1e3;
class RP {
    constructor(t) {
        this.auth = t,
            this.cachedEventUids = new Set,
            this.consumers = new Set,
            this.queuedRedirectEvent = null,
            this.hasHandledPotentialRedirect = !1,
            this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(t) {
        this.consumers.add(t),
            this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, t) && (this.sendToConsumer(this.queuedRedirectEvent, t),
                this.saveEventToCache(this.queuedRedirectEvent),
                this.queuedRedirectEvent = null)
    }
    unregisterConsumer(t) {
        this.consumers.delete(t)
    }
    onEvent(t) {
        if (this.hasEventBeenHandled(t))
            return !1;
        let n = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(t, r) && (n = !0,
                this.sendToConsumer(t, r),
                this.saveEventToCache(t))
        }
        ),
            this.hasHandledPotentialRedirect || !AP(t) || (this.hasHandledPotentialRedirect = !0,
                n || (this.queuedRedirectEvent = t,
                    n = !0)),
            n
    }
    sendToConsumer(t, n) {
        var r;
        if (t.error && !oy(t)) {
            const i = ((r = t.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            n.onError(yt(this.auth, i))
        } else
            n.onAuthEvent(t)
    }
    isEventForConsumer(t, n) {
        const r = n.eventId === null || !!t.eventId && t.eventId === n.eventId;
        return n.filter.includes(t.type) && r
    }
    hasEventBeenHandled(t) {
        return Date.now() - this.lastProcessedEventTime >= NP && this.cachedEventUids.clear(),
            this.cachedEventUids.has(Vp(t))
    }
    saveEventToCache(t) {
        this.cachedEventUids.add(Vp(t)),
            this.lastProcessedEventTime = Date.now()
    }
}
function Vp(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter(t => t).join("-")
}
function oy({ type: e, error: t }) {
    return e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
}
function AP(e) {
    switch (e.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return oy(e);
        default:
            return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function LP(e, t = {}) {
    return ns(e, "GET", "/v1/projects", t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    , MP = /^https?/;
async function DP(e) {
    if (e.config.emulator)
        return;
    const { authorizedDomains: t } = await LP(e);
    for (const n of t)
        try {
            if (UP(n))
                return
        } catch { }
    St(e, "unauthorized-domain")
}
function UP(e) {
    const t = Bu()
        , { protocol: n, hostname: r } = new URL(t);
    if (e.startsWith("chrome-extension://")) {
        const o = new URL(e);
        return o.hostname === "" && r === "" ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === r
    }
    if (!MP.test(n))
        return !1;
    if (jP.test(e))
        return r === e;
    const i = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zP = new ts(3e4, 6e4);
function Hp() {
    const e = wt().___jsl;
    if (e != null && e.H) {
        for (const t of Object.keys(e.H))
            if (e.H[t].r = e.H[t].r || [],
                e.H[t].L = e.H[t].L || [],
                e.H[t].r = [...e.H[t].L],
                e.CP)
                for (let n = 0; n < e.CP.length; n++)
                    e.CP[n] = null
    }
}
function $P(e) {
    return new Promise((t, n) => {
        var r, i, s;
        function o() {
            Hp(),
                gapi.load("gapi.iframes", {
                    callback: () => {
                        t(gapi.iframes.getContext())
                    }
                    ,
                    ontimeout: () => {
                        Hp(),
                            n(yt(e, "network-request-failed"))
                    }
                    ,
                    timeout: zP.get()
                })
        }
        if (!((i = (r = wt().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
            t(gapi.iframes.getContext());
        else if (!((s = wt().gapi) === null || s === void 0) && s.load)
            o();
        else {
            const l = Wb("iframefcb");
            return wt()[l] = () => {
                gapi.load ? o() : n(yt(e, "network-request-failed"))
            }
                ,
                Hb(`https://apis.google.com/js/api.js?onload=${l}`).catch(a => n(a))
        }
    }
    ).catch(t => {
        throw qs = null,
        t
    }
    )
}
let qs = null;
function FP(e) {
    return qs = qs || $P(e),
        qs
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BP = new ts(5e3, 15e3)
    , VP = "__/auth/iframe"
    , HP = "emulator/auth/iframe"
    , WP = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    }
    , GP = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function qP(e) {
    const t = e.config;
    D(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator ? md(t, HP) : `https://${e.config.authDomain}/${VP}`
        , r = {
            apiKey: t.apiKey,
            appName: e.name,
            v: Kr
        }
        , i = GP.get(e.config.apiHost);
    i && (r.eid = i);
    const s = e._getFrameworks();
    return s.length && (r.fw = s.join(",")),
        `${n}?${es(r).slice(1)}`
}
async function KP(e) {
    const t = await FP(e)
        , n = wt().gapi;
    return D(n, e, "internal-error"),
        t.open({
            where: document.body,
            url: qP(e),
            messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: WP,
            dontclear: !0
        }, r => new Promise(async (i, s) => {
            await r.restyle({
                setHideOnLeave: !1
            });
            const o = yt(e, "network-request-failed")
                , l = wt().setTimeout(() => {
                    s(o)
                }
                    , BP.get());
            function a() {
                wt().clearTimeout(l),
                    i(r)
            }
            r.ping(a).then(a, () => {
                s(o)
            }
            )
        }
        ))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const XP = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
    , YP = 500
    , QP = 600
    , JP = "_blank"
    , ZP = "http://localhost";
class Wp {
    constructor(t) {
        this.window = t,
            this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch { }
    }
}
function eC(e, t, n, r = YP, i = QP) {
    const s = Math.max((window.screen.availHeight - i) / 2, 0).toString()
        , o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let l = "";
    const a = Object.assign(Object.assign({}, XP), {
        width: r.toString(),
        height: i.toString(),
        top: s,
        left: o
    })
        , u = xe().toLowerCase();
    n && (l = $v(u) ? JP : n),
        zv(u) && (t = t || ZP,
            a.scrollbars = "yes");
    const c = Object.entries(a).reduce((f, [m, w]) => `${f}${m}=${w},`, "");
    if (jb(u) && l !== "_self")
        return tC(t || "", l),
            new Wp(null);
    const d = window.open(t || "", l, c);
    D(d, e, "popup-blocked");
    try {
        d.focus()
    } catch { }
    return new Wp(d)
}
function tC(e, t) {
    const n = document.createElement("a");
    n.href = e,
        n.target = t;
    const r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
        n.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nC = "__/auth/handler"
    , rC = "emulator/auth/handler"
    , iC = encodeURIComponent("fac");
async function Gp(e, t, n, r, i, s) {
    D(e.config.authDomain, e, "auth-domain-config-required"),
        D(e.config.apiKey, e, "invalid-api-key");
    const o = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: r,
        v: Kr,
        eventId: i
    };
    if (t instanceof yd) {
        t.setDefaultLanguage(e.languageCode),
            o.providerId = t.providerId || "",
            oT(t.getCustomParameters()) || (o.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [c, d] of Object.entries(s || {}))
            o[c] = d
    }
    if (t instanceof rs) {
        const c = t.getScopes().filter(d => d !== "");
        c.length > 0 && (o.scopes = c.join(","))
    }
    e.tenantId && (o.tid = e.tenantId);
    const l = o;
    for (const c of Object.keys(l))
        l[c] === void 0 && delete l[c];
    const a = await e._getAppCheckToken()
        , u = a ? `#${iC}=${encodeURIComponent(a)}` : "";
    return `${sC(e)}?${es(l).slice(1)}${u}`
}
function sC({ config: e }) {
    return e.emulator ? md(e, rC) : `https://${e.authDomain}/${nC}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kl = "webStorageSupport";
class oC {
    constructor() {
        this.eventManagers = {},
            this.iframes = {},
            this.originValidationPromises = {},
            this._redirectPersistence = Zv,
            this._completeRedirectFn = OP,
            this._overrideRedirectResult = CP
    }
    async _openPopup(t, n, r, i) {
        var s;
        $t((s = this.eventManagers[t._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
        const o = await Gp(t, n, r, Bu(), i);
        return eC(t, o, wd())
    }
    async _openRedirect(t, n, r, i) {
        await this._originValidation(t);
        const s = await Gp(t, n, r, Bu(), i);
        return uP(s),
            new Promise(() => { }
            )
    }
    _initialize(t) {
        const n = t._key();
        if (this.eventManagers[n]) {
            const { manager: i, promise: s } = this.eventManagers[n];
            return i ? Promise.resolve(i) : ($t(s, "If manager is not set, promise should be"),
                s)
        }
        const r = this.initAndGetManager(t);
        return this.eventManagers[n] = {
            promise: r
        },
            r.catch(() => {
                delete this.eventManagers[n]
            }
            ),
            r
    }
    async initAndGetManager(t) {
        const n = await KP(t)
            , r = new RP(t);
        return n.register("authEvent", i => (D(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
        {
            status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
            this.eventManagers[t._key()] = {
                manager: r
            },
            this.iframes[t._key()] = n,
            r
    }
    _isIframeWebStorageSupported(t, n) {
        this.iframes[t._key()].send(kl, {
            type: kl
        }, i => {
            var s;
            const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[kl];
            o !== void 0 && n(!!o),
                St(t, "internal-error")
        }
            , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(t) {
        const n = t._key();
        return this.originValidationPromises[n] || (this.originValidationPromises[n] = DP(t)),
            this.originValidationPromises[n]
    }
    get _shouldInitProactively() {
        return Wv() || vd() || ka()
    }
}
const aC = oC;
var qp = "@firebase/auth"
    , Kp = "1.3.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lC {
    constructor(t) {
        this.auth = t,
            this.internalListeners = new Map
    }
    getUid() {
        var t;
        return this.assertAuthConfigured(),
            ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null
    }
    async getToken(t) {
        return this.assertAuthConfigured(),
            await this.auth._initializationPromise,
            this.auth.currentUser ? {
                accessToken: await this.auth.currentUser.getIdToken(t)
            } : null
    }
    addAuthTokenListener(t) {
        if (this.assertAuthConfigured(),
            this.internalListeners.has(t))
            return;
        const n = this.auth.onIdTokenChanged(r => {
            t((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
        }
        );
        this.internalListeners.set(t, n),
            this.updateProactiveRefresh()
    }
    removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        const n = this.internalListeners.get(t);
        n && (this.internalListeners.delete(t),
            n(),
            this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        D(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uC(e) {
    switch (e) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        default:
            return
    }
}
function cC(e) {
    zr(new Yn("auth", (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate()
            , i = t.getProvider("heartbeat")
            , s = t.getProvider("app-check-internal")
            , { apiKey: o, authDomain: l } = r.options;
        D(o && !o.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        const a = {
            apiKey: o,
            authDomain: l,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Gv(e)
        }
            , u = new Bb(r, i, s, a);
        return qb(u, n),
            u
    }
        , "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t, n, r) => {
            t.getProvider("auth-internal").initialize()
        }
        )),
        zr(new Yn("auth-internal", t => {
            const n = Ia(t.getProvider("auth").getImmediate());
            return (r => new lC(r))(n)
        }
            , "PRIVATE").setInstantiationMode("EXPLICIT")),
        Sn(qp, Kp, uC(e)),
        Sn(qp, Kp, "esm2017")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dC = 5 * 60
    , fC = xv("authIdTokenMaxAge") || dC;
let Xp = null;
const pC = e => async t => {
    const n = t && await t.getIdTokenResult()
        , r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
    if (r && r > fC)
        return;
    const i = n == null ? void 0 : n.token;
    Xp !== i && (Xp = i,
        await fetch(e, {
            method: i ? "POST" : "DELETE",
            headers: i ? {
                Authorization: `Bearer ${i}`
            } : {}
        }))
}
    ;
function hC(e = Cv()) {
    const t = fd(e, "auth");
    if (t.isInitialized())
        return t.getImmediate();
    const n = Gb(e, {
        popupRedirectResolver: aC,
        persistence: [yP, oP, Zv]
    })
        , r = xv("authTokenSyncURL");
    if (r) {
        const s = pC(r);
        nP(n, s, () => s(n.currentUser)),
            tP(n, o => s(o))
    }
    const i = Sv("auth");
    return i && Kb(n, `http://${i}`),
        n
}
cC("Browser");
var mC = "firebase"
    , gC = "10.5.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Sn(mC, gC, "app");
const vC = {
    apiKey: "AIzaSyCqkcor9pSiHGTLJFBSc0srzS9gIXouLbk",
    authDomain: "mern-auth-1c4ae.firebaseapp.com",
    projectId: "mern-auth-1c4ae",
    storageBucket: "mern-auth-1c4ae.appspot.com",
    messagingSenderId: "277641423672",
    appId: "1:277641423672:web:2de25252aae022d51aafcd"
}
    , Ra = Pv(vC);
function ay() {
    const e = cd()
        , t = Bt()
        , n = async () => {
            try {
                const r = new kt
                    , i = hC(Ra)
                    , s = await EP(i, r)
                    , l = await (await fetch("/api/auth/google", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: s.user.displayName,
                            email: s.user.email,
                            photo: s.user.photoURL
                        })
                    })).json();
                console.log(l),
                    e(rv(l)),
                    t("/")
            } catch (r) {
                console.log("could not login with google", r)
            }
        }
        ;
    return g.jsx("button", {
        type: "button",
        onClick: n,
        className: "bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95",
        children: "Continue with google"
    })
}
function yC() {
    const [e, t] = T.useState({})
        , { loading: n, error: r } = rr(a => a.user)
        , i = Bt()
        , s = cd()
        , o = a => {
            t({
                ...e,
                [a.target.id]: a.target.value
            })
        }
        , l = async a => {
            a.preventDefault();
            try {
                s(Vx());
                const c = await (await fetch("/api/auth/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                })).json();
                if (c.success === !1) {
                    s(Sp(c));
                    return
                }
                s(rv(c)),
                    i("/")
            } catch (u) {
                s(Sp(u))
            }
        }
        ;
    return g.jsxs("div", {
        className: "p-3 max-w-lg mx-auto",
        children: [g.jsx("h1", {
            className: "text-3xl text-center font-semibold my-7",
            children: "Sign In"
        }), g.jsxs("form", {
            onSubmit: l,
            className: "flex flex-col gap-4",
            children: [g.jsx("input", {
                type: "email",
                placeholder: "Email",
                id: "email",
                className: "border p-3 rounded-lg",
                onChange: o
            }), g.jsx("input", {
                type: "password",
                placeholder: "Password",
                id: "password",
                className: "border p-3 rounded-lg",
                onChange: o
            }), g.jsx("button", {
                disabled: n,
                className: "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                children: n ? "Loading..." : "Sign In"
            }), g.jsx(ay, {})]
        }), g.jsxs("div", {
            className: "flex gap-2 mt-5",
            children: [g.jsx("p", {
                children: "Dont Have an account?"
            }), g.jsx(Se, {
                to: "/sign-up",
                children: g.jsx("span", {
                    className: "text-blue-500",
                    children: "Sign up"
                })
            })]
        }), g.jsx("p", {
            className: "text-red-700 mt-5",
            children: r ? r.message || "Something went wrong!" : ""
        })]
    })
}
function wC() {
    const [e, t] = T.useState({})
        , [n, r] = T.useState(!1)
        , [i, s] = T.useState(!1)
        , o = Bt()
        , l = u => {
            t({
                ...e,
                [u.target.id]: u.target.value
            })
        }
        , a = async u => {
            u.preventDefault();
            try {
                s(!0),
                    r(!1);
                const d = await (await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                })).json();
                if (console.log(d),
                    s(!1),
                    d.success === !1) {
                    r(!0);
                    return
                }
                o("/sign-in")
            } catch {
                s(!1),
                    r(!0)
            }
        }
        ;
    return g.jsxs("div", {
        className: "p-3 max-w-lg mx-auto",
        children: [g.jsx("h1", {
            className: "text-3xl text-center font-semibold my-7",
            children: "Sign Up"
        }), g.jsxs("form", {
            onSubmit: a,
            className: "flex flex-col gap-4",
            children: [g.jsx("input", {
                type: "text",
                placeholder: "Username",
                id: "username",
                className: "border p-3 rounded-lg",
                onChange: l
            }), g.jsx("input", {
                type: "email",
                placeholder: "Email",
                id: "email",
                className: "border p-3 rounded-lg",
                onChange: l
            }), g.jsx("input", {
                type: "password",
                placeholder: "Password",
                id: "password",
                className: "border p-3 rounded-lg",
                onChange: l
            }), g.jsx("button", {
                disabled: i,
                className: "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                children: i ? "Loading..." : "Sign Up"
            }), g.jsx(ay, {})]
        }), g.jsxs("div", {
            className: "flex gap-2 mt-5",
            children: [g.jsx("p", {
                children: "Have an account?"
            }), g.jsx(Se, {
                to: "/sign-in",
                children: g.jsx("span", {
                    className: "text-blue-500",
                    children: "Sign in"
                })
            })]
        }), g.jsx("p", {
            className: "text-red-700 mt-5",
            children: n && "Something went wrong!"
        })]
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ly = "firebasestorage.googleapis.com"
    , uy = "storageBucket"
    , SC = 2 * 60 * 1e3
    , _C = 10 * 60 * 1e3
    , xC = 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends Vt {
    constructor(t, n, r = 0) {
        super(Il(t), `Firebase Storage: ${n} (${Il(t)})`),
            this.status_ = r,
            this.customData = {
                serverResponse: null
            },
            this._baseMessage = this.message,
            Object.setPrototypeOf(this, ne.prototype)
    }
    get status() {
        return this.status_
    }
    set status(t) {
        this.status_ = t
    }
    _codeEquals(t) {
        return Il(t) === this.code
    }
    get serverResponse() {
        return this.customData.serverResponse
    }
    set serverResponse(t) {
        this.customData.serverResponse = t,
            this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage
    }
}
var X;
(function(e) {
    e.UNKNOWN = "unknown",
        e.OBJECT_NOT_FOUND = "object-not-found",
        e.BUCKET_NOT_FOUND = "bucket-not-found",
        e.PROJECT_NOT_FOUND = "project-not-found",
        e.QUOTA_EXCEEDED = "quota-exceeded",
        e.UNAUTHENTICATED = "unauthenticated",
        e.UNAUTHORIZED = "unauthorized",
        e.UNAUTHORIZED_APP = "unauthorized-app",
        e.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded",
        e.INVALID_CHECKSUM = "invalid-checksum",
        e.CANCELED = "canceled",
        e.INVALID_EVENT_NAME = "invalid-event-name",
        e.INVALID_URL = "invalid-url",
        e.INVALID_DEFAULT_BUCKET = "invalid-default-bucket",
        e.NO_DEFAULT_BUCKET = "no-default-bucket",
        e.CANNOT_SLICE_BLOB = "cannot-slice-blob",
        e.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size",
        e.NO_DOWNLOAD_URL = "no-download-url",
        e.INVALID_ARGUMENT = "invalid-argument",
        e.INVALID_ARGUMENT_COUNT = "invalid-argument-count",
        e.APP_DELETED = "app-deleted",
        e.INVALID_ROOT_OPERATION = "invalid-root-operation",
        e.INVALID_FORMAT = "invalid-format",
        e.INTERNAL_ERROR = "internal-error",
        e.UNSUPPORTED_ENVIRONMENT = "unsupported-environment"
}
)(X || (X = {}));
function Il(e) {
    return "storage/" + e
}
function _d() {
    const e = "An unknown error occurred, please check the error payload for server response.";
    return new ne(X.UNKNOWN, e)
}
function EC(e) {
    return new ne(X.OBJECT_NOT_FOUND, "Object '" + e + "' does not exist.")
}
function TC(e) {
    return new ne(X.QUOTA_EXCEEDED, "Quota for bucket '" + e + "' exceeded, please view quota on https://firebase.google.com/pricing/.")
}
function bC() {
    const e = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new ne(X.UNAUTHENTICATED, e)
}
function PC() {
    return new ne(X.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.")
}
function CC(e) {
    return new ne(X.UNAUTHORIZED, "User does not have permission to access '" + e + "'.")
}
function cy() {
    return new ne(X.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")
}
function dy() {
    return new ne(X.CANCELED, "User canceled the upload/download.")
}
function kC(e) {
    return new ne(X.INVALID_URL, "Invalid URL '" + e + "'.")
}
function IC(e) {
    return new ne(X.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + e + "'.")
}
function OC() {
    return new ne(X.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + uy + "' property when initializing the app?")
}
function fy() {
    return new ne(X.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.")
}
function NC() {
    return new ne(X.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.")
}
function RC() {
    return new ne(X.NO_DOWNLOAD_URL, "The given file does not have any download URLs.")
}
function AC(e) {
    return new ne(X.UNSUPPORTED_ENVIRONMENT, `${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)
}
function Hu(e) {
    return new ne(X.INVALID_ARGUMENT, e)
}
function py() {
    return new ne(X.APP_DELETED, "The Firebase app was deleted.")
}
function LC(e) {
    return new ne(X.INVALID_ROOT_OPERATION, "The operation '" + e + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")
}
function _i(e, t) {
    return new ne(X.INVALID_FORMAT, "String does not match format '" + e + "': " + t)
}
function ii(e) {
    throw new ne(X.INTERNAL_ERROR, "Internal error: " + e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De {
    constructor(t, n) {
        this.bucket = t,
            this.path_ = n
    }
    get path() {
        return this.path_
    }
    get isRoot() {
        return this.path.length === 0
    }
    fullServerUrl() {
        const t = encodeURIComponent;
        return "/b/" + t(this.bucket) + "/o/" + t(this.path)
    }
    bucketOnlyServerUrl() {
        return "/b/" + encodeURIComponent(this.bucket) + "/o"
    }
    static makeFromBucketSpec(t, n) {
        let r;
        try {
            r = De.makeFromUrl(t, n)
        } catch {
            return new De(t, "")
        }
        if (r.path === "")
            return r;
        throw IC(t)
    }
    static makeFromUrl(t, n) {
        let r = null;
        const i = "([A-Za-z0-9.\\-_]+)";
        function s(S) {
            S.path.charAt(S.path.length - 1) === "/" && (S.path_ = S.path_.slice(0, -1))
        }
        const o = "(/(.*))?$"
            , l = new RegExp("^gs://" + i + o, "i")
            , a = {
                bucket: 1,
                path: 3
            };
        function u(S) {
            S.path_ = decodeURIComponent(S.path)
        }
        const c = "v[A-Za-z0-9_]+"
            , d = n.replace(/[.]/g, "\\.")
            , f = "(/([^?#]*).*)?$"
            , m = new RegExp(`^https?://${d}/${c}/b/${i}/o ${f}`, "i")
            , w = {
                bucket: 1,
                path: 3
            }
            , y = n === ly ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n
            , _ = "([^?#]*)"
            , p = new RegExp(`^https?://${y}/${i}/${_}`, "i")
            , v = [{
                regex: l,
                indices: a,
                postModify: s
            }, {
                regex: m,
                indices: w,
                postModify: u
            }, {
                regex: p,
                indices: {
                    bucket: 1,
                    path: 2
                },
                postModify: u
            }];
        for (let S = 0; S < v.length; S++) {
            const x = v[S]
                , C = x.regex.exec(t);
            if (C) {
                const E = C[x.indices.bucket];
                let b = C[x.indices.path];
                b || (b = ""),
                    r = new De(E, b),
                    x.postModify(r);
                break
            }
        }
        if (r == null)
            throw kC(t);
        return r
    }
}
class jC {
    constructor(t) {
        this.promise_ = Promise.reject(t)
    }
    getPromise() {
        return this.promise_
    }
    cancel(t = !1) { }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function MC(e, t, n) {
    let r = 1
        , i = null
        , s = null
        , o = !1
        , l = 0;
    function a() {
        return l === 2
    }
    let u = !1;
    function c(..._) {
        u || (u = !0,
            t.apply(null, _))
    }
    function d(_) {
        i = setTimeout(() => {
            i = null,
                e(m, a())
        }
            , _)
    }
    function f() {
        s && clearTimeout(s)
    }
    function m(_, ...p) {
        if (u) {
            f();
            return
        }
        if (_) {
            f(),
                c.call(null, _, ...p);
            return
        }
        if (a() || o) {
            f(),
                c.call(null, _, ...p);
            return
        }
        r < 64 && (r *= 2);
        let v;
        l === 1 ? (l = 2,
            v = 0) : v = (r + Math.random()) * 1e3,
            d(v)
    }
    let w = !1;
    function y(_) {
        w || (w = !0,
            f(),
            !u && (i !== null ? (_ || (l = 2),
                clearTimeout(i),
                d(0)) : _ || (l = 1)))
    }
    return d(0),
        s = setTimeout(() => {
            o = !0,
                y(!0)
        }
            , n),
        y
}
function DC(e) {
    e(!1)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function UC(e) {
    return e !== void 0
}
function zC(e) {
    return typeof e == "function"
}
function $C(e) {
    return typeof e == "object" && !Array.isArray(e)
}
function Aa(e) {
    return typeof e == "string" || e instanceof String
}
function Yp(e) {
    return xd() && e instanceof Blob
}
function xd() {
    return typeof Blob < "u" && !QE()
}
function Qp(e, t, n, r) {
    if (r < t)
        throw Hu(`Invalid value for '${e}'. Expected ${t} or greater.`);
    if (r > n)
        throw Hu(`Invalid value for '${e}'. Expected ${n} or less.`)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ss(e, t, n) {
    let r = t;
    return n == null && (r = `https://${t}`),
        `${n}://${r}/v0 ${e}`
}
function hy(e) {
    const t = encodeURIComponent;
    let n = "?";
    for (const r in e)
        if (e.hasOwnProperty(r)) {
            const i = t(r) + "=" + t(e[r]);
            n = n + i + "&"
        }
    return n = n.slice(0, -1),
        n
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bn;
(function(e) {
    e[e.NO_ERROR = 0] = "NO_ERROR",
        e[e.NETWORK_ERROR = 1] = "NETWORK_ERROR",
        e[e.ABORT = 2] = "ABORT"
}
)(Bn || (Bn = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function my(e, t) {
    const n = e >= 500 && e < 600
        , i = [408, 429].indexOf(e) !== -1
        , s = t.indexOf(e) !== -1;
    return n || i || s
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FC {
    constructor(t, n, r, i, s, o, l, a, u, c, d, f = !0) {
        this.url_ = t,
            this.method_ = n,
            this.headers_ = r,
            this.body_ = i,
            this.successCodes_ = s,
            this.additionalRetryCodes_ = o,
            this.callback_ = l,
            this.errorCallback_ = a,
            this.timeout_ = u,
            this.progressCallback_ = c,
            this.connectionFactory_ = d,
            this.retry = f,
            this.pendingConnection_ = null,
            this.backoffId_ = null,
            this.canceled_ = !1,
            this.appDelete_ = !1,
            this.promise_ = new Promise((m, w) => {
                this.resolve_ = m,
                    this.reject_ = w,
                    this.start_()
            }
            )
    }
    start_() {
        const t = (r, i) => {
            if (i) {
                r(!1, new ks(!1, null, !0));
                return
            }
            const s = this.connectionFactory_();
            this.pendingConnection_ = s;
            const o = l => {
                const a = l.loaded
                    , u = l.lengthComputable ? l.total : -1;
                this.progressCallback_ !== null && this.progressCallback_(a, u)
            }
                ;
            this.progressCallback_ !== null && s.addUploadProgressListener(o),
                s.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
                    this.progressCallback_ !== null && s.removeUploadProgressListener(o),
                        this.pendingConnection_ = null;
                    const l = s.getErrorCode() === Bn.NO_ERROR
                        , a = s.getStatus();
                    if (!l || my(a, this.additionalRetryCodes_) && this.retry) {
                        const c = s.getErrorCode() === Bn.ABORT;
                        r(!1, new ks(!1, null, c));
                        return
                    }
                    const u = this.successCodes_.indexOf(a) !== -1;
                    r(!0, new ks(u, s))
                }
                )
        }
            , n = (r, i) => {
                const s = this.resolve_
                    , o = this.reject_
                    , l = i.connection;
                if (i.wasSuccessCode)
                    try {
                        const a = this.callback_(l, l.getResponse());
                        UC(a) ? s(a) : s()
                    } catch (a) {
                        o(a)
                    }
                else if (l !== null) {
                    const a = _d();
                    a.serverResponse = l.getErrorText(),
                        this.errorCallback_ ? o(this.errorCallback_(l, a)) : o(a)
                } else if (i.canceled) {
                    const a = this.appDelete_ ? py() : dy();
                    o(a)
                } else {
                    const a = cy();
                    o(a)
                }
            }
            ;
        this.canceled_ ? n(!1, new ks(!1, null, !0)) : this.backoffId_ = MC(t, n, this.timeout_)
    }
    getPromise() {
        return this.promise_
    }
    cancel(t) {
        this.canceled_ = !0,
            this.appDelete_ = t || !1,
            this.backoffId_ !== null && DC(this.backoffId_),
            this.pendingConnection_ !== null && this.pendingConnection_.abort()
    }
}
class ks {
    constructor(t, n, r) {
        this.wasSuccessCode = t,
            this.connection = n,
            this.canceled = !!r
    }
}
function BC(e, t) {
    t !== null && t.length > 0 && (e.Authorization = "Firebase " + t)
}
function VC(e, t) {
    e["X-Firebase-Storage-Version"] = "webjs/" + (t ?? "AppManager")
}
function HC(e, t) {
    t && (e["X-Firebase-GMPID"] = t)
}
function WC(e, t) {
    t !== null && (e["X-Firebase-AppCheck"] = t)
}
function GC(e, t, n, r, i, s, o = !0) {
    const l = hy(e.urlParams)
        , a = e.url + l
        , u = Object.assign({}, e.headers);
    return HC(u, t),
        BC(u, n),
        VC(u, s),
        WC(u, r),
        new FC(a, e.method, u, e.body, e.successCodes, e.additionalRetryCodes, e.handler, e.errorHandler, e.timeout, e.progressCallback, i, o)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qC() {
    return typeof BlobBuilder < "u" ? BlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : void 0
}
function KC(...e) {
    const t = qC();
    if (t !== void 0) {
        const n = new t;
        for (let r = 0; r < e.length; r++)
            n.append(e[r]);
        return n.getBlob()
    } else {
        if (xd())
            return new Blob(e);
        throw new ne(X.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs")
    }
}
function XC(e, t, n) {
    return e.webkitSlice ? e.webkitSlice(t, n) : e.mozSlice ? e.mozSlice(t, n) : e.slice ? e.slice(t, n) : null
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function YC(e) {
    if (typeof atob > "u")
        throw AC("base-64");
    return atob(e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht = {
    RAW: "raw",
    BASE64: "base64",
    BASE64URL: "base64url",
    DATA_URL: "data_url"
};
class Ol {
    constructor(t, n) {
        this.data = t,
            this.contentType = n || null
    }
}
function QC(e, t) {
    switch (e) {
        case ht.RAW:
            return new Ol(gy(t));
        case ht.BASE64:
        case ht.BASE64URL:
            return new Ol(vy(e, t));
        case ht.DATA_URL:
            return new Ol(ZC(t), ek(t))
    }
    throw _d()
}
function gy(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n);
        if (r <= 127)
            t.push(r);
        else if (r <= 2047)
            t.push(192 | r >> 6, 128 | r & 63);
        else if ((r & 64512) === 55296)
            if (!(n < e.length - 1 && (e.charCodeAt(n + 1) & 64512) === 56320))
                t.push(239, 191, 189);
            else {
                const s = r
                    , o = e.charCodeAt(++n);
                r = 65536 | (s & 1023) << 10 | o & 1023,
                    t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63)
            }
        else
            (r & 64512) === 56320 ? t.push(239, 191, 189) : t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63)
    }
    return new Uint8Array(t)
}
function JC(e) {
    let t;
    try {
        t = decodeURIComponent(e)
    } catch {
        throw _i(ht.DATA_URL, "Malformed data URL.")
    }
    return gy(t)
}
function vy(e, t) {
    switch (e) {
        case ht.BASE64:
            {
                const i = t.indexOf("-") !== -1
                    , s = t.indexOf("_") !== -1;
                if (i || s)
                    throw _i(e, "Invalid character '" + (i ? "-" : "_") + "' found: is it base64url encoded?");
                break
            }
        case ht.BASE64URL:
            {
                const i = t.indexOf("+") !== -1
                    , s = t.indexOf("/") !== -1;
                if (i || s)
                    throw _i(e, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
                t = t.replace(/-/g, "+").replace(/_/g, "/");
                break
            }
    }
    let n;
    try {
        n = YC(t)
    } catch (i) {
        throw i.message.includes("polyfill") ? i : _i(e, "Invalid character found")
    }
    const r = new Uint8Array(n.length);
    for (let i = 0; i < n.length; i++)
        r[i] = n.charCodeAt(i);
    return r
}
class yy {
    constructor(t) {
        this.base64 = !1,
            this.contentType = null;
        const n = t.match(/^data:([^,]+)?,/);
        if (n === null)
            throw _i(ht.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        const r = n[1] || null;
        r != null && (this.base64 = tk(r, ";base64"),
            this.contentType = this.base64 ? r.substring(0, r.length - 7) : r),
            this.rest = t.substring(t.indexOf(",") + 1)
    }
}
function ZC(e) {
    const t = new yy(e);
    return t.base64 ? vy(ht.BASE64, t.rest) : JC(t.rest)
}
function ek(e) {
    return new yy(e).contentType
}
function tk(e, t) {
    return e.length >= t.length ? e.substring(e.length - t.length) === t : !1
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en {
    constructor(t, n) {
        let r = 0
            , i = "";
        Yp(t) ? (this.data_ = t,
            r = t.size,
            i = t.type) : t instanceof ArrayBuffer ? (n ? this.data_ = new Uint8Array(t) : (this.data_ = new Uint8Array(t.byteLength),
                this.data_.set(new Uint8Array(t))),
                r = this.data_.length) : t instanceof Uint8Array && (n ? this.data_ = t : (this.data_ = new Uint8Array(t.length),
                    this.data_.set(t)),
                    r = t.length),
            this.size_ = r,
            this.type_ = i
    }
    size() {
        return this.size_
    }
    type() {
        return this.type_
    }
    slice(t, n) {
        if (Yp(this.data_)) {
            const r = this.data_
                , i = XC(r, t, n);
            return i === null ? null : new en(i)
        } else {
            const r = new Uint8Array(this.data_.buffer, t, n - t);
            return new en(r, !0)
        }
    }
    static getBlob(...t) {
        if (xd()) {
            const n = t.map(r => r instanceof en ? r.data_ : r);
            return new en(KC.apply(null, n))
        } else {
            const n = t.map(o => Aa(o) ? QC(ht.RAW, o).data : o.data_);
            let r = 0;
            n.forEach(o => {
                r += o.byteLength
            }
            );
            const i = new Uint8Array(r);
            let s = 0;
            return n.forEach(o => {
                for (let l = 0; l < o.length; l++)
                    i[s++] = o[l]
            }
            ),
                new en(i, !0)
        }
    }
    uploadData() {
        return this.data_
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wy(e) {
    let t;
    try {
        t = JSON.parse(e)
    } catch {
        return null
    }
    return $C(t) ? t : null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nk(e) {
    if (e.length === 0)
        return null;
    const t = e.lastIndexOf("/");
    return t === -1 ? "" : e.slice(0, t)
}
function rk(e, t) {
    const n = t.split("/").filter(r => r.length > 0).join("/");
    return e.length === 0 ? n : e + "/" + n
}
function Sy(e) {
    const t = e.lastIndexOf("/", e.length - 2);
    return t === -1 ? e : e.slice(t + 1)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ik(e, t) {
    return t
}
class Ee {
    constructor(t, n, r, i) {
        this.server = t,
            this.local = n || t,
            this.writable = !!r,
            this.xform = i || ik
    }
}
let Is = null;
function sk(e) {
    return !Aa(e) || e.length < 2 ? e : Sy(e)
}
function _y() {
    if (Is)
        return Is;
    const e = [];
    e.push(new Ee("bucket")),
        e.push(new Ee("generation")),
        e.push(new Ee("metageneration")),
        e.push(new Ee("name", "fullPath", !0));
    function t(s, o) {
        return sk(o)
    }
    const n = new Ee("name");
    n.xform = t,
        e.push(n);
    function r(s, o) {
        return o !== void 0 ? Number(o) : o
    }
    const i = new Ee("size");
    return i.xform = r,
        e.push(i),
        e.push(new Ee("timeCreated")),
        e.push(new Ee("updated")),
        e.push(new Ee("md5Hash", null, !0)),
        e.push(new Ee("cacheControl", null, !0)),
        e.push(new Ee("contentDisposition", null, !0)),
        e.push(new Ee("contentEncoding", null, !0)),
        e.push(new Ee("contentLanguage", null, !0)),
        e.push(new Ee("contentType", null, !0)),
        e.push(new Ee("metadata", "customMetadata", !0)),
        Is = e,
        Is
}
function ok(e, t) {
    function n() {
        const r = e.bucket
            , i = e.fullPath
            , s = new De(r, i);
        return t._makeStorageReference(s)
    }
    Object.defineProperty(e, "ref", {
        get: n
    })
}
function ak(e, t, n) {
    const r = {};
    r.type = "file";
    const i = n.length;
    for (let s = 0; s < i; s++) {
        const o = n[s];
        r[o.local] = o.xform(r, t[o.server])
    }
    return ok(r, e),
        r
}
function xy(e, t, n) {
    const r = wy(t);
    return r === null ? null : ak(e, r, n)
}
function lk(e, t, n, r) {
    const i = wy(t);
    if (i === null || !Aa(i.downloadTokens))
        return null;
    const s = i.downloadTokens;
    if (s.length === 0)
        return null;
    const o = encodeURIComponent;
    return s.split(",").map(u => {
        const c = e.bucket
            , d = e.fullPath
            , f = "/b/" + o(c) + "/o/" + o(d)
            , m = ss(f, n, r)
            , w = hy({
                alt: "media",
                token: u
            });
        return m + w
    }
    )[0]
}
function Ey(e, t) {
    const n = {}
        , r = t.length;
    for (let i = 0; i < r; i++) {
        const s = t[i];
        s.writable && (n[s.server] = e[s.local])
    }
    return JSON.stringify(n)
}
class Xr {
    constructor(t, n, r, i) {
        this.url = t,
            this.method = n,
            this.handler = r,
            this.timeout = i,
            this.urlParams = {},
            this.headers = {},
            this.body = null,
            this.errorHandler = null,
            this.progressCallback = null,
            this.successCodes = [200],
            this.additionalRetryCodes = []
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e) {
    if (!e)
        throw _d()
}
function Ed(e, t) {
    function n(r, i) {
        const s = xy(e, i, t);
        return Lt(s !== null),
            s
    }
    return n
}
function uk(e, t) {
    function n(r, i) {
        const s = xy(e, i, t);
        return Lt(s !== null),
            lk(s, i, e.host, e._protocol)
    }
    return n
}
function os(e) {
    function t(n, r) {
        let i;
        return n.getStatus() === 401 ? n.getErrorText().includes("Firebase App Check token is invalid") ? i = PC() : i = bC() : n.getStatus() === 402 ? i = TC(e.bucket) : n.getStatus() === 403 ? i = CC(e.path) : i = r,
            i.status = n.getStatus(),
            i.serverResponse = r.serverResponse,
            i
    }
    return t
}
function Ty(e) {
    const t = os(e);
    function n(r, i) {
        let s = t(r, i);
        return r.getStatus() === 404 && (s = EC(e.path)),
            s.serverResponse = i.serverResponse,
            s
    }
    return n
}
function ck(e, t, n) {
    const r = t.fullServerUrl()
        , i = ss(r, e.host, e._protocol)
        , s = "GET"
        , o = e.maxOperationRetryTime
        , l = new Xr(i, s, Ed(e, n), o);
    return l.errorHandler = Ty(t),
        l
}
function dk(e, t, n) {
    const r = t.fullServerUrl()
        , i = ss(r, e.host, e._protocol)
        , s = "GET"
        , o = e.maxOperationRetryTime
        , l = new Xr(i, s, uk(e, n), o);
    return l.errorHandler = Ty(t),
        l
}
function fk(e, t) {
    return e && e.contentType || t && t.type() || "application/octet-stream"
}
function by(e, t, n) {
    const r = Object.assign({}, n);
    return r.fullPath = e.path,
        r.size = t.size(),
        r.contentType || (r.contentType = fk(null, t)),
        r
}
function pk(e, t, n, r, i) {
    const s = t.bucketOnlyServerUrl()
        , o = {
            "X-Goog-Upload-Protocol": "multipart"
        };
    function l() {
        let v = "";
        for (let S = 0; S < 2; S++)
            v = v + Math.random().toString().slice(2);
        return v
    }
    const a = l();
    o["Content-Type"] = "multipart/related; boundary=" + a;
    const u = by(t, r, i)
        , c = Ey(u, n)
        , d = "--" + a + `\r
Content-Type: application/json; charset=utf-8\r
\r
` + c + `\r
--` + a + `\r
Content-Type: ` + u.contentType + `\r
\r
`
        , f = `\r
--` + a + "--"
        , m = en.getBlob(d, r, f);
    if (m === null)
        throw fy();
    const w = {
        name: u.fullPath
    }
        , y = ss(s, e.host, e._protocol)
        , _ = "POST"
        , p = e.maxUploadRetryTime
        , h = new Xr(y, _, Ed(e, n), p);
    return h.urlParams = w,
        h.headers = o,
        h.body = m.uploadData(),
        h.errorHandler = os(t),
        h
}
class Bo {
    constructor(t, n, r, i) {
        this.current = t,
            this.total = n,
            this.finalized = !!r,
            this.metadata = i || null
    }
}
function Td(e, t) {
    let n = null;
    try {
        n = e.getResponseHeader("X-Goog-Upload-Status")
    } catch {
        Lt(!1)
    }
    return Lt(!!n && (t || ["active"]).indexOf(n) !== -1),
        n
}
function hk(e, t, n, r, i) {
    const s = t.bucketOnlyServerUrl()
        , o = by(t, r, i)
        , l = {
            name: o.fullPath
        }
        , a = ss(s, e.host, e._protocol)
        , u = "POST"
        , c = {
            "X-Goog-Upload-Protocol": "resumable",
            "X-Goog-Upload-Command": "start",
            "X-Goog-Upload-Header-Content-Length": `${r.size()}`,
            "X-Goog-Upload-Header-Content-Type": o.contentType,
            "Content-Type": "application/json; charset=utf-8"
        }
        , d = Ey(o, n)
        , f = e.maxUploadRetryTime;
    function m(y) {
        Td(y);
        let _;
        try {
            _ = y.getResponseHeader("X-Goog-Upload-URL")
        } catch {
            Lt(!1)
        }
        return Lt(Aa(_)),
            _
    }
    const w = new Xr(a, u, m, f);
    return w.urlParams = l,
        w.headers = c,
        w.body = d,
        w.errorHandler = os(t),
        w
}
function mk(e, t, n, r) {
    const i = {
        "X-Goog-Upload-Command": "query"
    };
    function s(u) {
        const c = Td(u, ["active", "final"]);
        let d = null;
        try {
            d = u.getResponseHeader("X-Goog-Upload-Size-Received")
        } catch {
            Lt(!1)
        }
        d || Lt(!1);
        const f = Number(d);
        return Lt(!isNaN(f)),
            new Bo(f, r.size(), c === "final")
    }
    const o = "POST"
        , l = e.maxUploadRetryTime
        , a = new Xr(n, o, s, l);
    return a.headers = i,
        a.errorHandler = os(t),
        a
}
const Jp = 256 * 1024;
function gk(e, t, n, r, i, s, o, l) {
    const a = new Bo(0, 0);
    if (o ? (a.current = o.current,
        a.total = o.total) : (a.current = 0,
            a.total = r.size()),
        r.size() !== a.total)
        throw NC();
    const u = a.total - a.current;
    let c = u;
    i > 0 && (c = Math.min(c, i));
    const d = a.current
        , f = d + c;
    let m = "";
    c === 0 ? m = "finalize" : u === c ? m = "upload, finalize" : m = "upload";
    const w = {
        "X-Goog-Upload-Command": m,
        "X-Goog-Upload-Offset": `${a.current}`
    }
        , y = r.slice(d, f);
    if (y === null)
        throw fy();
    function _(S, x) {
        const C = Td(S, ["active", "final"])
            , E = a.current + c
            , b = r.size();
        let P;
        return C === "final" ? P = Ed(t, s)(S, x) : P = null,
            new Bo(E, b, C === "final", P)
    }
    const p = "POST"
        , h = t.maxUploadRetryTime
        , v = new Xr(n, p, _, h);
    return v.headers = w,
        v.body = y.uploadData(),
        v.progressCallback = l || null,
        v.errorHandler = os(e),
        v
}
const ke = {
    RUNNING: "running",
    PAUSED: "paused",
    SUCCESS: "success",
    CANCELED: "canceled",
    ERROR: "error"
};
function Nl(e) {
    switch (e) {
        case "running":
        case "pausing":
        case "canceling":
            return ke.RUNNING;
        case "paused":
            return ke.PAUSED;
        case "success":
            return ke.SUCCESS;
        case "canceled":
            return ke.CANCELED;
        case "error":
            return ke.ERROR;
        default:
            return ke.ERROR
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vk {
    constructor(t, n, r) {
        if (zC(t) || n != null || r != null)
            this.next = t,
                this.error = n ?? void 0,
                this.complete = r ?? void 0;
        else {
            const s = t;
            this.next = s.next,
                this.error = s.error,
                this.complete = s.complete
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function or(e) {
    return (...t) => {
        Promise.resolve().then(() => e(...t))
    }
}
class yk {
    constructor() {
        this.sent_ = !1,
            this.xhr_ = new XMLHttpRequest,
            this.initXhr(),
            this.errorCode_ = Bn.NO_ERROR,
            this.sendPromise_ = new Promise(t => {
                this.xhr_.addEventListener("abort", () => {
                    this.errorCode_ = Bn.ABORT,
                        t()
                }
                ),
                    this.xhr_.addEventListener("error", () => {
                        this.errorCode_ = Bn.NETWORK_ERROR,
                            t()
                    }
                    ),
                    this.xhr_.addEventListener("load", () => {
                        t()
                    }
                    )
            }
            )
    }
    send(t, n, r, i) {
        if (this.sent_)
            throw ii("cannot .send() more than once");
        if (this.sent_ = !0,
            this.xhr_.open(n, t, !0),
            i !== void 0)
            for (const s in i)
                i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
        return r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(),
            this.sendPromise_
    }
    getErrorCode() {
        if (!this.sent_)
            throw ii("cannot .getErrorCode() before sending");
        return this.errorCode_
    }
    getStatus() {
        if (!this.sent_)
            throw ii("cannot .getStatus() before sending");
        try {
            return this.xhr_.status
        } catch {
            return -1
        }
    }
    getResponse() {
        if (!this.sent_)
            throw ii("cannot .getResponse() before sending");
        return this.xhr_.response
    }
    getErrorText() {
        if (!this.sent_)
            throw ii("cannot .getErrorText() before sending");
        return this.xhr_.statusText
    }
    abort() {
        this.xhr_.abort()
    }
    getResponseHeader(t) {
        return this.xhr_.getResponseHeader(t)
    }
    addUploadProgressListener(t) {
        this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", t)
    }
    removeUploadProgressListener(t) {
        this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", t)
    }
}
class wk extends yk {
    initXhr() {
        this.xhr_.responseType = "text"
    }
}
function ar() {
    return new wk
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sk {
    constructor(t, n, r = null) {
        this._transferred = 0,
            this._needToFetchStatus = !1,
            this._needToFetchMetadata = !1,
            this._observers = [],
            this._error = void 0,
            this._uploadUrl = void 0,
            this._request = void 0,
            this._chunkMultiplier = 1,
            this._resolve = void 0,
            this._reject = void 0,
            this._ref = t,
            this._blob = n,
            this._metadata = r,
            this._mappings = _y(),
            this._resumable = this._shouldDoResumable(this._blob),
            this._state = "running",
            this._errorHandler = i => {
                if (this._request = void 0,
                    this._chunkMultiplier = 1,
                    i._codeEquals(X.CANCELED))
                    this._needToFetchStatus = !0,
                        this.completeTransitions_();
                else {
                    const s = this.isExponentialBackoffExpired();
                    if (my(i.status, []))
                        if (s)
                            i = cy();
                        else {
                            this.sleepTime = Math.max(this.sleepTime * 2, xC),
                                this._needToFetchStatus = !0,
                                this.completeTransitions_();
                            return
                        }
                    this._error = i,
                        this._transition("error")
                }
            }
            ,
            this._metadataErrorHandler = i => {
                this._request = void 0,
                    i._codeEquals(X.CANCELED) ? this.completeTransitions_() : (this._error = i,
                        this._transition("error"))
            }
            ,
            this.sleepTime = 0,
            this.maxSleepTime = this._ref.storage.maxUploadRetryTime,
            this._promise = new Promise((i, s) => {
                this._resolve = i,
                    this._reject = s,
                    this._start()
            }
            ),
            this._promise.then(null, () => { }
            )
    }
    isExponentialBackoffExpired() {
        return this.sleepTime > this.maxSleepTime
    }
    _makeProgressCallback() {
        const t = this._transferred;
        return n => this._updateProgress(t + n)
    }
    _shouldDoResumable(t) {
        return t.size() > 256 * 1024
    }
    _start() {
        this._state === "running" && this._request === void 0 && (this._resumable ? this._uploadUrl === void 0 ? this._createResumable() : this._needToFetchStatus ? this._fetchStatus() : this._needToFetchMetadata ? this._fetchMetadata() : this.pendingTimeout = setTimeout(() => {
            this.pendingTimeout = void 0,
                this._continueUpload()
        }
            , this.sleepTime) : this._oneShotUpload())
    }
    _resolveToken(t) {
        Promise.all([this._ref.storage._getAuthToken(), this._ref.storage._getAppCheckToken()]).then(([n, r]) => {
            switch (this._state) {
                case "running":
                    t(n, r);
                    break;
                case "canceling":
                    this._transition("canceled");
                    break;
                case "pausing":
                    this._transition("paused");
                    break
            }
        }
        )
    }
    _createResumable() {
        this._resolveToken((t, n) => {
            const r = hk(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata)
                , i = this._ref.storage._makeRequest(r, ar, t, n);
            this._request = i,
                i.getPromise().then(s => {
                    this._request = void 0,
                        this._uploadUrl = s,
                        this._needToFetchStatus = !1,
                        this.completeTransitions_()
                }
                    , this._errorHandler)
        }
        )
    }
    _fetchStatus() {
        const t = this._uploadUrl;
        this._resolveToken((n, r) => {
            const i = mk(this._ref.storage, this._ref._location, t, this._blob)
                , s = this._ref.storage._makeRequest(i, ar, n, r);
            this._request = s,
                s.getPromise().then(o => {
                    o = o,
                        this._request = void 0,
                        this._updateProgress(o.current),
                        this._needToFetchStatus = !1,
                        o.finalized && (this._needToFetchMetadata = !0),
                        this.completeTransitions_()
                }
                    , this._errorHandler)
        }
        )
    }
    _continueUpload() {
        const t = Jp * this._chunkMultiplier
            , n = new Bo(this._transferred, this._blob.size())
            , r = this._uploadUrl;
        this._resolveToken((i, s) => {
            let o;
            try {
                o = gk(this._ref._location, this._ref.storage, r, this._blob, t, this._mappings, n, this._makeProgressCallback())
            } catch (a) {
                this._error = a,
                    this._transition("error");
                return
            }
            const l = this._ref.storage._makeRequest(o, ar, i, s, !1);
            this._request = l,
                l.getPromise().then(a => {
                    this._increaseMultiplier(),
                        this._request = void 0,
                        this._updateProgress(a.current),
                        a.finalized ? (this._metadata = a.metadata,
                            this._transition("success")) : this.completeTransitions_()
                }
                    , this._errorHandler)
        }
        )
    }
    _increaseMultiplier() {
        Jp * this._chunkMultiplier * 2 < 32 * 1024 * 1024 && (this._chunkMultiplier *= 2)
    }
    _fetchMetadata() {
        this._resolveToken((t, n) => {
            const r = ck(this._ref.storage, this._ref._location, this._mappings)
                , i = this._ref.storage._makeRequest(r, ar, t, n);
            this._request = i,
                i.getPromise().then(s => {
                    this._request = void 0,
                        this._metadata = s,
                        this._transition("success")
                }
                    , this._metadataErrorHandler)
        }
        )
    }
    _oneShotUpload() {
        this._resolveToken((t, n) => {
            const r = pk(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata)
                , i = this._ref.storage._makeRequest(r, ar, t, n);
            this._request = i,
                i.getPromise().then(s => {
                    this._request = void 0,
                        this._metadata = s,
                        this._updateProgress(this._blob.size()),
                        this._transition("success")
                }
                    , this._errorHandler)
        }
        )
    }
    _updateProgress(t) {
        const n = this._transferred;
        this._transferred = t,
            this._transferred !== n && this._notifyObservers()
    }
    _transition(t) {
        if (this._state !== t)
            switch (t) {
                case "canceling":
                case "pausing":
                    this._state = t,
                        this._request !== void 0 ? this._request.cancel() : this.pendingTimeout && (clearTimeout(this.pendingTimeout),
                            this.pendingTimeout = void 0,
                            this.completeTransitions_());
                    break;
                case "running":
                    const n = this._state === "paused";
                    this._state = t,
                        n && (this._notifyObservers(),
                            this._start());
                    break;
                case "paused":
                    this._state = t,
                        this._notifyObservers();
                    break;
                case "canceled":
                    this._error = dy(),
                        this._state = t,
                        this._notifyObservers();
                    break;
                case "error":
                    this._state = t,
                        this._notifyObservers();
                    break;
                case "success":
                    this._state = t,
                        this._notifyObservers();
                    break
            }
    }
    completeTransitions_() {
        switch (this._state) {
            case "pausing":
                this._transition("paused");
                break;
            case "canceling":
                this._transition("canceled");
                break;
            case "running":
                this._start();
                break
        }
    }
    get snapshot() {
        const t = Nl(this._state);
        return {
            bytesTransferred: this._transferred,
            totalBytes: this._blob.size(),
            state: t,
            metadata: this._metadata,
            task: this,
            ref: this._ref
        }
    }
    on(t, n, r, i) {
        const s = new vk(n || void 0, r || void 0, i || void 0);
        return this._addObserver(s),
            () => {
                this._removeObserver(s)
            }
    }
    then(t, n) {
        return this._promise.then(t, n)
    }
    catch(t) {
        return this.then(null, t)
    }
    _addObserver(t) {
        this._observers.push(t),
            this._notifyObserver(t)
    }
    _removeObserver(t) {
        const n = this._observers.indexOf(t);
        n !== -1 && this._observers.splice(n, 1)
    }
    _notifyObservers() {
        this._finishPromise(),
            this._observers.slice().forEach(n => {
                this._notifyObserver(n)
            }
            )
    }
    _finishPromise() {
        if (this._resolve !== void 0) {
            let t = !0;
            switch (Nl(this._state)) {
                case ke.SUCCESS:
                    or(this._resolve.bind(null, this.snapshot))();
                    break;
                case ke.CANCELED:
                case ke.ERROR:
                    const n = this._reject;
                    or(n.bind(null, this._error))();
                    break;
                default:
                    t = !1;
                    break
            }
            t && (this._resolve = void 0,
                this._reject = void 0)
        }
    }
    _notifyObserver(t) {
        switch (Nl(this._state)) {
            case ke.RUNNING:
            case ke.PAUSED:
                t.next && or(t.next.bind(t, this.snapshot))();
                break;
            case ke.SUCCESS:
                t.complete && or(t.complete.bind(t))();
                break;
            case ke.CANCELED:
            case ke.ERROR:
                t.error && or(t.error.bind(t, this._error))();
                break;
            default:
                t.error && or(t.error.bind(t, this._error))()
        }
    }
    resume() {
        const t = this._state === "paused" || this._state === "pausing";
        return t && this._transition("running"),
            t
    }
    pause() {
        const t = this._state === "running";
        return t && this._transition("pausing"),
            t
    }
    cancel() {
        const t = this._state === "running" || this._state === "pausing";
        return t && this._transition("canceling"),
            t
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn {
    constructor(t, n) {
        this._service = t,
            n instanceof De ? this._location = n : this._location = De.makeFromUrl(n, t.host)
    }
    toString() {
        return "gs://" + this._location.bucket + "/" + this._location.path
    }
    _newRef(t, n) {
        return new Zn(t, n)
    }
    get root() {
        const t = new De(this._location.bucket, "");
        return this._newRef(this._service, t)
    }
    get bucket() {
        return this._location.bucket
    }
    get fullPath() {
        return this._location.path
    }
    get name() {
        return Sy(this._location.path)
    }
    get storage() {
        return this._service
    }
    get parent() {
        const t = nk(this._location.path);
        if (t === null)
            return null;
        const n = new De(this._location.bucket, t);
        return new Zn(this._service, n)
    }
    _throwIfRoot(t) {
        if (this._location.path === "")
            throw LC(t)
    }
}
function _k(e, t, n) {
    return e._throwIfRoot("uploadBytesResumable"),
        new Sk(e, new en(t), n)
}
function xk(e) {
    e._throwIfRoot("getDownloadURL");
    const t = dk(e.storage, e._location, _y());
    return e.storage.makeRequestWithTokens(t, ar).then(n => {
        if (n === null)
            throw RC();
        return n
    }
    )
}
function Ek(e, t) {
    const n = rk(e._location.path, t)
        , r = new De(e._location.bucket, n);
    return new Zn(e.storage, r)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tk(e) {
    return /^[A-Za-z]+:\/\//.test(e)
}
function bk(e, t) {
    return new Zn(e, t)
}
function Py(e, t) {
    if (e instanceof bd) {
        const n = e;
        if (n._bucket == null)
            throw OC();
        const r = new Zn(n, n._bucket);
        return t != null ? Py(r, t) : r
    } else
        return t !== void 0 ? Ek(e, t) : e
}
function Pk(e, t) {
    if (t && Tk(t)) {
        if (e instanceof bd)
            return bk(e, t);
        throw Hu("To use ref(service, url), the first argument must be a Storage instance.")
    } else
        return Py(e, t)
}
function Zp(e, t) {
    const n = t == null ? void 0 : t[uy];
    return n == null ? null : De.makeFromBucketSpec(n, e)
}
function Ck(e, t, n, r = {}) {
    e.host = `${t}:${n}`,
        e._protocol = "http";
    const { mockUserToken: i } = r;
    i && (e._overrideAuthToken = typeof i == "string" ? i : XE(i, e.app.options.projectId))
}
class bd {
    constructor(t, n, r, i, s) {
        this.app = t,
            this._authProvider = n,
            this._appCheckProvider = r,
            this._url = i,
            this._firebaseVersion = s,
            this._bucket = null,
            this._host = ly,
            this._protocol = "https",
            this._appId = null,
            this._deleted = !1,
            this._maxOperationRetryTime = SC,
            this._maxUploadRetryTime = _C,
            this._requests = new Set,
            i != null ? this._bucket = De.makeFromBucketSpec(i, this._host) : this._bucket = Zp(this._host, this.app.options)
    }
    get host() {
        return this._host
    }
    set host(t) {
        this._host = t,
            this._url != null ? this._bucket = De.makeFromBucketSpec(this._url, t) : this._bucket = Zp(t, this.app.options)
    }
    get maxUploadRetryTime() {
        return this._maxUploadRetryTime
    }
    set maxUploadRetryTime(t) {
        Qp("time", 0, Number.POSITIVE_INFINITY, t),
            this._maxUploadRetryTime = t
    }
    get maxOperationRetryTime() {
        return this._maxOperationRetryTime
    }
    set maxOperationRetryTime(t) {
        Qp("time", 0, Number.POSITIVE_INFINITY, t),
            this._maxOperationRetryTime = t
    }
    async _getAuthToken() {
        if (this._overrideAuthToken)
            return this._overrideAuthToken;
        const t = this._authProvider.getImmediate({
            optional: !0
        });
        if (t) {
            const n = await t.getToken();
            if (n !== null)
                return n.accessToken
        }
        return null
    }
    async _getAppCheckToken() {
        const t = this._appCheckProvider.getImmediate({
            optional: !0
        });
        return t ? (await t.getToken()).token : null
    }
    _delete() {
        return this._deleted || (this._deleted = !0,
            this._requests.forEach(t => t.cancel()),
            this._requests.clear()),
            Promise.resolve()
    }
    _makeStorageReference(t) {
        return new Zn(this, t)
    }
    _makeRequest(t, n, r, i, s = !0) {
        if (this._deleted)
            return new jC(py());
        {
            const o = GC(t, this._appId, r, i, n, this._firebaseVersion, s);
            return this._requests.add(o),
                o.getPromise().then(() => this._requests.delete(o), () => this._requests.delete(o)),
                o
        }
    }
    async makeRequestWithTokens(t, n) {
        const [r, i] = await Promise.all([this._getAuthToken(), this._getAppCheckToken()]);
        return this._makeRequest(t, n, r, i).getPromise()
    }
}
const eh = "@firebase/storage"
    , th = "0.11.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cy = "storage";
function Pd(e, t, n) {
    return e = Et(e),
        _k(e, t, n)
}
function Cd(e) {
    return e = Et(e),
        xk(e)
}
function kd(e, t) {
    return e = Et(e),
        Pk(e, t)
}
function Id(e = Cv(), t) {
    e = Et(e);
    const r = fd(e, Cy).getImmediate({
        identifier: t
    })
        , i = qE("storage");
    return i && kk(r, ...i),
        r
}
function kk(e, t, n, r = {}) {
    Ck(e, t, n, r)
}
function Ik(e, { instanceIdentifier: t }) {
    const n = e.getProvider("app").getImmediate()
        , r = e.getProvider("auth-internal")
        , i = e.getProvider("app-check-internal");
    return new bd(n, r, i, t, Kr)
}
function Ok() {
    zr(new Yn(Cy, Ik, "PUBLIC").setMultipleInstances(!0)),
        Sn(eh, th, ""),
        Sn(eh, th, "esm2017")
}
Ok();
function Nk() {
    const e = cd()
        , t = T.useRef(null)
        , [n, r] = T.useState(void 0)
        , [i, s] = T.useState(0)
        , [o, l] = T.useState(!1)
        , [a, u] = T.useState({})
        , [c, d] = T.useState(!1)
        , [f, m] = T.useState([])
        , { currentUser: w, loading: y, error: _ } = rr(b => b.user);
    T.useEffect(() => {
        n && p(n)
    }
        , [n]);
    const p = async b => {
        const P = Id(Ra)
            , A = new Date().getTime() + b.name
            , k = kd(P, A)
            , I = Pd(k, b);
        I.on("state_changed", R => {
            const U = R.bytesTransferred / R.totalBytes * 100;
            s(Math.round(U))
        }
            , R => {
                l(!0)
            }
            , () => {
                Cd(I.snapshot.ref).then(R => u({
                    ...a,
                    profilePicture: R
                }))
            }
        )
    }
        , h = b => {
            u({
                ...a,
                [b.target.id]: b.target.value
            })
        }
        , v = async b => {
            b.preventDefault();
            try {
                e(Hx());
                const A = await (await fetch(`/api/user/update/${w._id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(a)
                })).json();
                if (A.success === !1) {
                    e(_p(A));
                    return
                }
                e(Wx(A)),
                    d(!0)
            } catch (P) {
                e(_p(P))
            }
        }
        , S = async () => {
            try {
                e(Gx());
                const P = await (await fetch(`/api/user/delete/${w._id}`, {
                    method: "DELETE"
                })).json();
                if (P.success === !1) {
                    e(xp(P));
                    return
                }
                e(qx(P))
            } catch (b) {
                e(xp(b))
            }
        }
        , x = async () => {
            try {
                await fetch("/api/auth/signout"),
                    e(Kx())
            } catch (b) {
                console.log(b)
            }
        }
        , C = async () => {
            try {
                const P = await (await fetch(`/api/user/listings/${w._id}`)).json();
                m(P)
            } catch (b) {
                console.log(b)
            }
        }
        , E = async b => {
            try {
                const A = await (await fetch(`/api/listing/delete/${b}`, {
                    method: "DELETE"
                })).json();
                m(f.filter(k => k._id !== b))
            } catch (P) {
                console.log(P)
            }
        }
        ;
    return g.jsxs("div", {
        className: "p-3 max-w-lg mx-auto",
        children: [g.jsx("h1", {
            className: "text-3xl font-semibold text-center my-7",
            children: "Profile"
        }), g.jsxs("form", {
            onSubmit: v,
            className: "flex flex-col gap-4",
            children: [g.jsx("input", {
                type: "file",
                ref: t,
                hidden: !0,
                accept: "image/*",
                onChange: b => r(b.target.files[0])
            }), g.jsx("img", {
                src: a.profilePicture || w.profilePicture,
                alt: "profile",
                className: "h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2",
                onClick: () => t.current.click()
            }), g.jsx("p", {
                className: "text-sm self-center",
                children: o ? g.jsx("span", {
                    className: "text-red-700",
                    children: "Error uploading image (file size must be less than 2 MB)"
                }) : i > 0 && i < 100 ? g.jsx("span", {
                    className: "text-slate-700",
                    children: `Uploading: ${i} %`
                }) : i === 100 ? g.jsx("span", {
                    className: "text-green-700",
                    children: "Image uploaded successfully"
                }) : ""
            }), g.jsx("input", {
                defaultValue: w.username,
                type: "text",
                id: "username",
                placeholder: "Username",
                className: "border rounded-lg p-3",
                onChange: h
            }), g.jsx("input", {
                defaultValue: w.email,
                type: "email",
                id: "email",
                placeholder: "Email",
                className: "border rounded-lg p-3",
                onChange: h
            }), g.jsx("input", {
                type: "password",
                id: "password",
                placeholder: "Password",
                className: "border rounded-lg p-3",
                onChange: h
            }), g.jsx("button", {
                className: "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                children: y ? "Loading..." : "Update"
            }), g.jsx(Se, {
                to: "/create-listing",
                className: "bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 text-center",
                children: "Create Listing"
            })]
        }), g.jsxs("div", {
            className: "flex justify-between mt-5",
            children: [g.jsx("span", {
                onClick: S,
                className: "text-red-700 cursor-pointer",
                children: "Delete Account"
            }), g.jsx("span", {
                onClick: x,
                className: "text-red-700 cursor-pointer",
                children: "Sign out"
            })]
        }), g.jsx("p", {
            className: "text-red-700 mt-5",
            children: _ && "Something went wrong!"
        }), g.jsx("p", {
            className: "text-green-700 mt-5",
            children: c && "User is updated successfully!"
        }), g.jsx("button", {
            onClick: C,
            className: "text-green-700 w-full",
            children: "Show listings"
        }), f && f.length > 0 ? g.jsxs("div", {
            className: "mt-5 flex flex-col gap-4",
            children: [g.jsx("h1", {
                className: "text-2xl font-semibold text-center my-7",
                children: "Your listings"
            }), f && f.map(b => g.jsxs("div", {
                className: "border rounded-lg p-3 flex items-center justify-between",
                children: [g.jsx(Se, {
                    to: `/listing/${b._id}`,
                    children: g.jsx("img", {
                        src: b.imageUrls[0],
                        alt: "listing",
                        className: "h-16 w-16 object-contain rounded-lg"
                    })
                }), g.jsx(Se, {
                    to: `/listing/${b._id}`,
                    className: "font-semibold flex-1 ml-2 hover:underline truncate",
                    children: b.name
                }), g.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [g.jsx("button", {
                        onClick: () => E(b._id),
                        className: "text-red-700 uppercase",
                        children: "Delete"
                    }), g.jsx(Se, {
                        to: `/edit-listing/${b._id}`,
                        children: g.jsx("button", {
                            className: "text-green-700 uppercase",
                            children: "Edit"
                        })
                    })]
                })]
            }, b._id))]
        }) : ""]
    })
}
function Rk() {
    const { currentUser: e } = rr(s => s.user)
        , [t, n] = T.useState("")
        , r = Bt();
    function i(s) {
        s.preventDefault();
        const o = new URLSearchParams(window.location.search);
        o.set("searchTerm", t);
        const l = o.toString();
        r(`/search?${l}`)
    }
    return T.useEffect(() => {
        const o = new URLSearchParams(location.search).get("searchTerm");
        o && n(o)
    }
        , [location.search]),
        g.jsx("div", {
            className: "bg-slate-200 shadow-md",
            children: g.jsxs("div", {
                className: "flex justify-between items-center max-w-6xl mx-auto p-3",
                children: [g.jsx(Se, {
                    to: "/",
                    children: g.jsxs("h1", {
                        className: "font-bold text-sm sm:text-xl flex flex-wrap",
                        children: [g.jsx("span", {
                            className: "text-slate-500",
                            children: "SegaStone"
                        }), g.jsx("span", {
                            className: "text-slate-700",
                            children: "Estate"
                        })]
                    })
                }), g.jsxs("form", {
                    className: "flex bg-slate-100 items-center p-3 rounded-lg",
                    onSubmit: i,
                    children: [g.jsx("input", {
                        type: "text",
                        placeholder: "Search...",
                        className: "text-xs sm:text-sm bg-transparent focus:outline-none w-24 sm:w-64",
                        value: t,
                        onChange: s => n(s.target.value)
                    }), g.jsx("button", {
                        children: g.jsx(S_, {
                            className: "text-slate-600"
                        })
                    })]
                }), g.jsxs("ul", {
                    className: "flex gap-4",
                    children: [g.jsx(Se, {
                        to: "/",
                        children: g.jsx("li", {
                            className: "hidden sm:inline text-slate-700 hover:underline",
                            children: "Home"
                        })
                    }), g.jsx(Se, {
                        to: "/about",
                        children: g.jsx("li", {
                            className: "hidden sm:inline text-slate-700 hover:underline",
                            children: "About"
                        })
                    }), g.jsx(Se, {
                        to: "/profile",
                        children: e ? g.jsx("img", {
                            src: e.profilePicture,
                            alt: "profile",
                            className: "h-7 w-7 rounded-full object-cover"
                        }) : g.jsx("li", {
                            children: "Sign In"
                        })
                    })]
                })]
            })
        })
}
function Ak() {
    const { currentUser: e } = rr(t => t.user);
    return e ? g.jsx(ZS, {}) : g.jsx(JS, {
        to: "/sign-in"
    })
}
function Lk() {
    const e = Bt()
        , { currentUser: t } = rr(k => k.user)
        , [n, r] = T.useState([])
        , [i, s] = T.useState(!1)
        , [o, l] = T.useState(!1)
        , [a, u] = T.useState({
            type: "rent",
            name: "",
            bedrooms: 1,
            bathrooms: 1,
            parking: !1,
            furnished: !1,
            address: "",
            description: "",
            offer: !1,
            regularPrice: 0,
            discountPrice: 0,
            imageUrls: []
        })
        , { type: c, name: d, bedrooms: f, bathrooms: m, parking: w, address: y, furnished: _, description: p, offer: h, regularPrice: v, discountPrice: S, imageUrls: x } = a
        , C = k => {
            if (k.preventDefault(),
                n.length > 0 && n.length + a.imageUrls.length < 7) {
                s(!0),
                    l(!1);
                const I = [];
                for (let R = 0; R < n.length; R++)
                    I.push(b(n[R]));
                Promise.all(I).then(R => {
                    u({
                        ...a,
                        imageUrls: a.imageUrls.concat(R)
                    }),
                        s(!1)
                }
                ).catch(R => {
                    console.log(R),
                        s(!1),
                        l("Image upload error (Each file must be less than 2 MB & only image formats are allowed)")
                }
                )
            } else
                l("Total number of images must be less than 7 and at least 1 image must be selected")
        }
        ;
    function E(k) {
        (k.target.id === "sale" || k.target.id === "rent") && u({
            ...a,
            type: k.target.id
        }),
            (k.target.id === "parking" || k.target.id === "furnished" || k.target.id === "offer") && u({
                ...a,
                [k.target.id]: k.target.checked
            }),
            (k.target.type === "number" || k.target.type === "text" || k.target.type === "textarea") && u({
                ...a,
                [k.target.id]: k.target.value
            })
    }
    async function b(k) {
        return new Promise((I, R) => {
            const U = Id(Ra)
                , We = new Date().getTime() + k.name
                , Ge = kd(U, We)
                , qe = Pd(Ge, k);
            qe.on("state_changed", N => {
                const L = N.bytesTransferred / N.totalBytes * 100;
                switch (console.log("Upload is " + L + "% done"),
                N.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break
                }
            }
                , N => {
                    R(N)
                }
                , () => {
                    Cd(qe.snapshot.ref).then(N => {
                        I(N)
                    }
                    )
                }
            )
        }
        )
    }
    function P(k) {
        u({
            ...a,
            imageUrls: a.imageUrls.filter((I, R) => R !== k)
        })
    }
    const A = async k => {
        k.preventDefault();
        const R = await (await fetch("/api/listing/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...a,
                userRef: t._id
            })
        })).json();
        R.success === !1 && console.log(R.message),
            e(`/listing/${R.listing._id}`)
    }
        ;
    return g.jsxs("main", {
        className: "max-w-4xl p-3 mx-auto",
        children: [g.jsx("h1", {
            className: "text-3xl text-center my-7 font-bold",
            children: "Create a Listing"
        }), g.jsxs("form", {
            onSubmit: A,
            className: "flex gap-4 sm:flex-row flex-col",
            children: [g.jsxs("div", {
                className: "flex flex-col gap-4 flex-1",
                children: [g.jsx("input", {
                    type: "text",
                    id: "name",
                    value: d,
                    onChange: E,
                    placeholder: "Name",
                    maxLength: "62",
                    minLength: "10",
                    required: !0,
                    className: "border p-3 rounded-lg "
                }), g.jsx("textarea", {
                    type: "text",
                    id: "description",
                    value: p,
                    onChange: E,
                    placeholder: "Description",
                    required: !0,
                    className: "border p-3 rounded-lg"
                }), g.jsx("input", {
                    type: "text",
                    id: "address",
                    value: y,
                    onChange: E,
                    placeholder: "Address",
                    required: !0,
                    className: "border p-3 rounded-lg "
                }), g.jsxs("div", {
                    className: "flex gap-6 flex-wrap",
                    children: [g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "sale",
                            onChange: E,
                            checked: c === "sale",
                            className: "w-5 "
                        }), g.jsx("span", {
                            children: "Sell"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "rent",
                            onChange: E,
                            className: "w-5",
                            checked: c === "rent"
                        }), g.jsx("span", {
                            children: "Rent"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "parking",
                            onChange: E,
                            className: "w-5",
                            checked: w
                        }), g.jsx("span", {
                            children: "Parking spot"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "furnished",
                            onChange: E,
                            className: "w-5",
                            checked: _
                        }), g.jsx("span", {
                            children: "Furnished"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "offer",
                            onChange: E,
                            className: "w-5",
                            checked: h
                        }), g.jsx("span", {
                            children: "Offer"
                        })]
                    })]
                }), g.jsxs("div", {
                    className: "flex gap-6 flex-wrap",
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "bedrooms",
                            value: f,
                            onChange: E,
                            min: "1",
                            max: "10",
                            required: !0,
                            className: "p-3  border border-gray-300 rounded-lg"
                        }), g.jsx("p", {
                            children: "Beds"
                        })]
                    }), g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "bathrooms",
                            value: m,
                            onChange: E,
                            min: "1",
                            max: "10",
                            required: !0,
                            className: "p-3 border border-gray-300 rounded-lg"
                        }), g.jsx("p", {
                            children: "Baths"
                        })]
                    }), g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "regularPrice",
                            value: v,
                            onChange: E,
                            min: "50",
                            max: "10000000",
                            required: !0,
                            className: "p-3 border border-gray-300 rounded-lg"
                        }), g.jsxs("div", {
                            className: "flex flex-col items-center",
                            children: [g.jsx("p", {
                                children: "Regular price "
                            }), g.jsx("span", {
                                className: "text-xs",
                                children: c === "rent" && "($ / Month)"
                            })]
                        })]
                    }), h && g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "discountPrice",
                            value: S,
                            onChange: E,
                            min: "50",
                            max: "10000000",
                            required: h,
                            className: "p-3 border border-gray-300 rounded-lg"
                        }), g.jsxs("div", {
                            className: "flex flex-col items-center",
                            children: [g.jsx("p", {
                                children: "Discounted price"
                            }), g.jsx("span", {
                                className: "text-xs",
                                children: c === "rent" && "($ / Month)"
                            })]
                        })]
                    })]
                })]
            }), g.jsxs("div", {
                className: "flex flex-col flex-1 gap-4",
                children: [g.jsxs("p", {
                    className: "font-semibold",
                    children: ["Images:", " ", g.jsx("span", {
                        className: "text-gray-600 font-normal",
                        children: "The first image will be the cover (max 6)"
                    })]
                }), g.jsxs("form", {
                    className: "flex gap-4",
                    children: [g.jsx("input", {
                        type: "file",
                        id: "images",
                        onChange: k => r(k.target.files),
                        accept: "image/*",
                        multiple: !0,
                        className: "p-3 border border-gray-300 rounded w-full"
                    }), g.jsx("button", {
                        type: "submit",
                        onClick: C,
                        disabled: i,
                        className: "p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",
                        children: i ? "Uploading..." : "Upload"
                    })]
                }), g.jsx("p", {
                    className: "text-red-700",
                    children: o && o
                }), a.imageUrls && a.imageUrls.map((k, I) => g.jsxs("div", {
                    className: "flex justify-between border p-3 items-center",
                    children: [g.jsx("img", {
                        src: k,
                        alt: "listing",
                        className: "w-20 h-20 object-contain rounded-lg"
                    }), g.jsx("button", {
                        onClick: () => P(I),
                        className: "p-3 text-red-700 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                        children: "Delete"
                    })]
                }, k)), g.jsx("button", {
                    type: "submit",
                    className: "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                    children: "Create Listing"
                })]
            })]
        })]
    })
}
function jk() {
    const e = Bt()
        , t = Pg()
        , { currentUser: n } = rr(I => I.user)
        , [r, i] = T.useState([])
        , [s, o] = T.useState(!1)
        , [l, a] = T.useState(!1)
        , [u, c] = T.useState({
            type: "rent",
            name: "",
            bedrooms: 1,
            bathrooms: 1,
            parking: !1,
            furnished: !1,
            address: "",
            description: "",
            offer: !1,
            regularPrice: 0,
            discountPrice: 0,
            imageUrls: []
        })
        , { type: d, name: f, bedrooms: m, bathrooms: w, parking: y, address: _, furnished: p, description: h, offer: v, regularPrice: S, discountPrice: x, imageUrls: C } = u;
    T.useEffect(() => {
        async function I() {
            const U = await (await fetch(`/api/listing/${t.listingId}`)).json();
            if (U.success === !1) {
                console.log(U.message);
                return
            }
            c(U)
        }
        I()
    }
        , [e, t.listingId]),
        console.log(u);
    const E = I => {
        if (I.preventDefault(),
            r.length > 0 && r.length + u.imageUrls.length < 7) {
            o(!0),
                a(!1);
            const R = [];
            for (let U = 0; U < r.length; U++)
                R.push(P(r[U]));
            Promise.all(R).then(U => {
                c({
                    ...u,
                    imageUrls: u.imageUrls.concat(U)
                }),
                    o(!1)
            }
            ).catch(U => {
                console.log(U),
                    o(!1),
                    a("Image upload error (Each file must be less than 2 MB & only image formats are allowed)")
            }
            )
        } else
            a("Total number of images must be less than 7 and at least 1 image must be selected")
    }
        ;
    function b(I) {
        (I.target.id === "sale" || I.target.id === "rent") && c({
            ...u,
            type: I.target.id
        }),
            (I.target.id === "parking" || I.target.id === "furnished" || I.target.id === "offer") && c({
                ...u,
                [I.target.id]: I.target.checked
            }),
            (I.target.type === "number" || I.target.type === "text" || I.target.type === "textarea") && c({
                ...u,
                [I.target.id]: I.target.value
            })
    }
    async function P(I) {
        return new Promise((R, U) => {
            const We = Id(Ra)
                , Ge = new Date().getTime() + I.name
                , qe = kd(We, Ge)
                , N = Pd(qe, I);
            N.on("state_changed", L => {
                const M = L.bytesTransferred / L.totalBytes * 100;
                switch (console.log("Upload is " + M + "% done"),
                L.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break
                }
            }
                , L => {
                    U(L)
                }
                , () => {
                    Cd(N.snapshot.ref).then(L => {
                        R(L)
                    }
                    )
                }
            )
        }
        )
    }
    function A(I) {
        c({
            ...u,
            imageUrls: u.imageUrls.filter((R, U) => U !== I)
        })
    }
    const k = async I => {
        I.preventDefault();
        const U = await (await fetch(`/api/listing/edit/${t.listingId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...u,
                userRef: n._id
            })
        })).json();
        U.success === !1 && console.log(U.message),
            e(`/listing/${t.listingId}`)
    }
        ;
    return g.jsxs("main", {
        className: "max-w-4xl p-3 mx-auto",
        children: [g.jsx("h1", {
            className: "text-3xl text-center my-7 font-bold",
            children: "Edit a Listing"
        }), g.jsxs("form", {
            onSubmit: k,
            className: "flex gap-4 sm:flex-row flex-col",
            children: [g.jsxs("div", {
                className: "flex flex-col gap-4 flex-1",
                children: [g.jsx("input", {
                    type: "text",
                    id: "name",
                    value: f,
                    onChange: b,
                    placeholder: "Name",
                    maxLength: "62",
                    minLength: "10",
                    required: !0,
                    className: "border p-3 rounded-lg "
                }), g.jsx("textarea", {
                    type: "text",
                    id: "description",
                    value: h,
                    onChange: b,
                    placeholder: "Description",
                    required: !0,
                    className: "border p-3 rounded-lg"
                }), g.jsx("input", {
                    type: "text",
                    id: "address",
                    value: _,
                    onChange: b,
                    placeholder: "Address",
                    required: !0,
                    className: "border p-3 rounded-lg "
                }), g.jsxs("div", {
                    className: "flex gap-6 flex-wrap",
                    children: [g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "sale",
                            onChange: b,
                            checked: d === "sale",
                            className: "w-5 "
                        }), g.jsx("span", {
                            children: "Sell"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "rent",
                            onChange: b,
                            className: "w-5",
                            checked: d === "rent"
                        }), g.jsx("span", {
                            children: "Rent"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "parking",
                            onChange: b,
                            className: "w-5",
                            checked: y
                        }), g.jsx("span", {
                            children: "Parking spot"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "furnished",
                            onChange: b,
                            className: "w-5",
                            checked: p
                        }), g.jsx("span", {
                            children: "Furnished"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "offer",
                            onChange: b,
                            className: "w-5",
                            checked: v
                        }), g.jsx("span", {
                            children: "Offer"
                        })]
                    })]
                }), g.jsxs("div", {
                    className: "flex gap-6 flex-wrap",
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "bedrooms",
                            value: m,
                            onChange: b,
                            min: "1",
                            max: "10",
                            required: !0,
                            className: "p-3  border border-gray-300 rounded-lg"
                        }), g.jsx("p", {
                            children: "Beds"
                        })]
                    }), g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "bathrooms",
                            value: w,
                            onChange: b,
                            min: "1",
                            max: "10",
                            required: !0,
                            className: "p-3 border border-gray-300 rounded-lg"
                        }), g.jsx("p", {
                            children: "Baths"
                        })]
                    }), g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "regularPrice",
                            value: S,
                            onChange: b,
                            min: "50",
                            max: "10000000",
                            required: !0,
                            className: "p-3 border border-gray-300 rounded-lg"
                        }), g.jsxs("div", {
                            className: "flex flex-col items-center",
                            children: [g.jsx("p", {
                                children: "Regular price "
                            }), g.jsx("span", {
                                className: "text-xs",
                                children: d === "rent" && "($ / Month)"
                            })]
                        })]
                    }), v && g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsx("input", {
                            type: "number",
                            id: "discountPrice",
                            value: x,
                            onChange: b,
                            min: "50",
                            max: "10000000",
                            required: v,
                            className: "p-3 border border-gray-300 rounded-lg"
                        }), g.jsxs("div", {
                            className: "flex flex-col items-center",
                            children: [g.jsx("p", {
                                children: "Discounted price"
                            }), g.jsx("span", {
                                className: "text-xs",
                                children: d === "rent" && "($ / Month)"
                            })]
                        })]
                    })]
                })]
            }), g.jsxs("div", {
                className: "flex flex-col flex-1 gap-4",
                children: [g.jsxs("p", {
                    className: "font-semibold",
                    children: ["Images:", " ", g.jsx("span", {
                        className: "text-gray-600 font-normal",
                        children: "The first image will be the cover (max 6)"
                    })]
                }), g.jsxs("div", {
                    className: "flex gap-4",
                    children: [g.jsx("input", {
                        type: "file",
                        id: "images",
                        onChange: I => i(I.target.files),
                        accept: "image/*",
                        multiple: !0,
                        className: "p-3 border border-gray-300 rounded w-full"
                    }), g.jsx("button", {
                        type: "button",
                        onClick: E,
                        disabled: s,
                        className: "p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",
                        children: s ? "Uploading..." : "Upload"
                    })]
                }), g.jsx("p", {
                    className: "text-red-700",
                    children: l && l
                }), u.imageUrls && u.imageUrls.map((I, R) => g.jsxs("div", {
                    className: "flex justify-between border p-3 items-center",
                    children: [g.jsx("img", {
                        src: I,
                        alt: "listing",
                        className: "w-20 h-20 object-contain rounded-lg"
                    }), g.jsx("button", {
                        onClick: () => A(R),
                        className: "p-3 text-red-700 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                        children: "Delete"
                    })]
                }, I)), g.jsx("button", {
                    type: "submit",
                    className: "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                    children: "Edit Listing"
                })]
            })]
        })]
    })
}
function Mk({ listing: e }) {
    const [t, n] = T.useState(null)
        , [r, i] = T.useState("");
    T.useEffect(() => {
        async function o() {
            const a = await (await fetch(`/api/user/${e.userRef}`)).json();
            n(a)
        }
        o()
    }
        , [e.userRef]);
    function s(o) {
        i(o.target.value)
    }
    return g.jsx(g.Fragment, {
        children: t !== null && g.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [g.jsxs("p", {
                children: ["Contact ", g.jsx("span", {
                    className: "font-semibold",
                    children: t.username
                }), " ", "for", " ", g.jsx("span", {
                    className: "font-semibold",
                    children: e.name.toLowerCase()
                })]
            }), g.jsx("textarea", {
                name: "message",
                id: "message",
                rows: "2",
                value: r,
                onChange: s,
                placeholder: "Enter your message here...",
                className: "border w-full p-3 rounded-lg"
            }), g.jsx(Se, {
                to: `mailto:${t.email}?Subject=${e.name}&body=${r}`,
                className: "p-3 bg-slate-700 text-white text-center rounded-lg uppercase hover:opacity-95 w-full",
                children: "Send Message"
            })]
        })
    })
}
function Dk() {
    const e = Pg()
        , [t, n] = T.useState(null)
        , [r, i] = T.useState(!1)
        , [s, o] = T.useState(!1)
        , { currentUser: l } = rr(a => a.user);
    return Ji.use([Wg]),
        T.useEffect(() => {
            async function a() {
                const c = await (await fetch(`/api/listing/${e.listingId}`)).json();
                n(c)
            }
            a()
        }
            , [e.listingId]),
        g.jsxs("main", {
            children: [g.jsx(Kc, {
                navigation: !0,
                children: t && t.imageUrls.map(a => g.jsx(Xc, {
                    children: g.jsx("div", {
                        className: "h-[500px]",
                        style: {
                            background: `url(${a}) center no-repeat`,
                            backgroundSize: "cover"
                        }
                    })
                }, a))
            }), g.jsx("div", {
                className: "fixed top-[13%] right-[3%] z-10 bg-slate-100 cursor-pointer border rounded-full w-12 h-12 flex justify-center items-center",
                onClick: () => {
                    navigator.clipboard.writeText(window.location.href),
                        i(!0),
                        setTimeout(() => {
                            i(!1)
                        }
                            , 2e3)
                }
                ,
                children: g.jsx(__, {
                    className: "text-slate-500"
                })
            }), r && g.jsx("p", {
                className: "fixed top-[23%] right-[5%] rounded-md bg-slate-100 z-10 p-2",
                children: "Link Copied!"
            }), t && g.jsxs("div", {
                className: "flex flex-col  max-w-4xl mx-auto p-3 my-7 gap-6",
                children: [g.jsxs("div", {
                    className: "w-full",
                    children: [g.jsxs("p", {
                        className: "text-2xl font-semibold  ",
                        children: [t.name, " - $", " ", t.offer ? t.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : t.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.type === "rent" ? " / month" : ""]
                    }), g.jsxs("p", {
                        className: "flex items-center mt-6 font-semibold gap-2 text-slate-600 my-2 text-sm",
                        children: [g.jsx(y_, {
                            className: "text-green-700"
                        }), t.address]
                    }), g.jsxs("div", {
                        className: "flex justify-start items-center space-x-4 w-[75%]",
                        children: [g.jsx("p", {
                            className: "bg-red-900 w-full max-w-[200px] rounded-md p-1 text-white text-center  ",
                            children: t.type === "rent" ? "For Rent" : "For Sale"
                        }), t.offer && g.jsxs("p", {
                            className: "w-full max-w-[200px] bg-green-900 rounded-md p-1 text-white text-center",
                            children: ["$", +t.regularPrice - +t.discountPrice, " discount"]
                        })]
                    }), g.jsxs("p", {
                        className: "my-3 text-slate-800",
                        children: [g.jsx("span", {
                            className: "font-semibold text-black",
                            children: "Description - "
                        }), t.description]
                    }), g.jsxs("ul", {
                        className: "flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-green-900",
                        children: [g.jsxs("li", {
                            className: "flex items-center whitespace-nowrap",
                            children: [g.jsx(g_, {
                                className: "text-lg mr-1"
                            }), +t.bedrooms > 1 ? `${t.bedrooms} Beds` : "1 Bed"]
                        }), g.jsxs("li", {
                            className: "flex items-center whitespace-nowrap",
                            children: [g.jsx(m_, {
                                className: "text-lg mr-1"
                            }), +t.bathrooms > 1 ? `${t.bathrooms} Baths` : "1 Bath"]
                        }), g.jsxs("li", {
                            className: "flex items-center whitespace-nowrap",
                            children: [g.jsx(w_, {
                                className: "text-lg mr-1"
                            }), t.parking ? "Parking spot" : "No parking"]
                        }), g.jsxs("li", {
                            className: "flex items-center whitespace-nowrap",
                            children: [g.jsx(v_, {
                                className: "text-lg mr-1"
                            }), t.furnished ? "Furnished" : "Not furnished"]
                        })]
                    })]
                }), l && t.userRef !== (l == null ? void 0 : l._id) && !s && g.jsx("div", {
                    className: "w-full",
                    children: g.jsx("div", {
                        className: "mt-6",
                        children: g.jsx("button", {
                            onClick: () => o(!0),
                            className: "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 w-full",
                            children: "Contact Landlord"
                        })
                    })
                }), s && g.jsx(Mk, {
                    listing: t
                })]
            })]
        })
}
function Uk() {
    const [e, t] = T.useState({
        searchTerm: "",
        type: "all",
        parking: !1,
        furnished: !1,
        offer: !1,
        sort: "createdAt",
        order: "desc"
    })
        , [n, r] = T.useState([])
        , [i, s] = T.useState(!1)
        , [o, l] = T.useState(!1)
        , a = Bt();
    T.useEffect(() => {
        const f = new URLSearchParams(location.search)
            , m = f.get("searchTerm")
            , w = f.get("type")
            , y = f.get("parking")
            , _ = f.get("furnished")
            , p = f.get("offer")
            , h = f.get("sort")
            , v = f.get("order");
        (m || w || y || _ || p || h || v) && t({
            ...e,
            searchTerm: m || "",
            type: w || "all",
            parking: y === "true",
            furnished: _ === "true",
            offer: p === "true",
            sort: h || "createdAt",
            order: v || "desc"
        }),
            (async () => {
                s(!0),
                    l(!1);
                const x = f.toString()
                    , E = await (await fetch(`/api/listing?${x}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })).json();
                E.length > 8 && l(!0),
                    r(E),
                    s(!1)
            }
            )()
    }
        , [location.search]);
    async function u(f) {
        f.preventDefault();
        const m = new URLSearchParams;
        m.set("searchTerm", e.searchTerm),
            m.set("type", e.type),
            m.set("parking", e.parking),
            m.set("furnished", e.furnished),
            m.set("offer", e.offer),
            m.set("sort", e.sort),
            m.set("order", e.order);
        const w = m.toString();
        a(`/search?${w}`)
    }
    function c(f) {
        if ((f.target.id === "sale" || f.target.id === "rent" || f.target.id === "all") && t({
            ...e,
            type: f.target.id
        }),
            f.target.id === "searchTerm" && t({
                ...e,
                searchTerm: f.target.value
            }),
            (f.target.id === "parking" || f.target.id === "furnished" || f.target.id === "offer") && t({
                ...e,
                [f.target.id]: f.target.checked === !0 || f.target.checked === "true"
            }),
            f.target.id === "sort_order") {
            const m = f.target.value.split("_")[0] || "createdAt"
                , w = f.target.value.split("_")[1] || "desc";
            t({
                ...e,
                sort: m,
                order: w
            })
        }
    }
    async function d() {
        const m = n.length
            , w = new URLSearchParams(location.search);
        w.set("startIndex", m);
        const y = w.toString();
        console.log(y);
        const p = await (await fetch(`/api/listing?${y}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })).json();
        p.length < 9 && l(!1),
            r([...n, ...p])
    }
    return g.jsxs("div", {
        className: "flex flex-col md:flex-row",
        children: [g.jsx("div", {
            className: " bg-transparent border-b-2 sm:border-r-2 p-7 h-auto md:min-h-screen flex-2  ",
            children: g.jsxs("form", {
                onSubmit: u,
                className: "flex flex-col gap-8",
                children: [g.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [g.jsx("label", {
                        className: "whitespace-nowrap",
                        children: "Search Term:"
                    }), g.jsx("input", {
                        type: "text",
                        id: "searchTerm",
                        placeholder: "Search...",
                        className: "border rounded-lg p-3 w-full",
                        value: e.searchTerm,
                        onChange: c
                    })]
                }), g.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [g.jsx("label", {
                        className: "whitespace-nowrap",
                        children: "Type:"
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "all",
                            onChange: c,
                            className: "w-5",
                            checked: e.type === "all"
                        }), g.jsx("span", {
                            children: "Rent & Sale"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "rent",
                            onChange: c,
                            className: "w-5",
                            checked: e.type === "rent"
                        }), g.jsx("span", {
                            children: "Rent"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "sale",
                            onChange: c,
                            className: "w-5",
                            checked: e.type === "sale"
                        }), g.jsx("span", {
                            children: "Sale"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "offer",
                            onChange: c,
                            className: "w-5",
                            checked: e.offer
                        }), g.jsx("span", {
                            children: "Offer"
                        })]
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [g.jsx("label", {
                        className: "whitespace-nowrap",
                        children: "Amenities:"
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "parking",
                            onChange: c,
                            className: "w-5",
                            checked: e.parking
                        }), g.jsx("span", {
                            children: "Parking"
                        })]
                    }), g.jsxs("div", {
                        className: "flex gap-2",
                        children: [g.jsx("input", {
                            type: "checkbox",
                            id: "furnished",
                            onChange: c,
                            className: "w-5",
                            checked: e.furnished
                        }), g.jsx("span", {
                            children: "Furnished"
                        })]
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [g.jsx("label", {
                        className: "",
                        children: "Sort:"
                    }), g.jsxs("select", {
                        id: "sort_order",
                        className: "border rounded-lg p-3",
                        onChange: c,
                        defaultValue: "createdAt_desc",
                        children: [g.jsx("option", {
                            value: "regularPrice_desc",
                            children: "Price high to low"
                        }), g.jsx("option", {
                            value: "regularPrice_asc",
                            children: "Price low to high "
                        }), g.jsx("option", {
                            value: "createdAt_desc",
                            children: "Latest"
                        }), g.jsx("option", {
                            value: "createdAt_asc",
                            children: "Oldest"
                        })]
                    })]
                }), g.jsx("button", {
                    className: "bg-slate-700 text-white p-3 uppercase rounded-lg w-full",
                    children: "Search"
                })]
            })
        }), g.jsxs("div", {
            className: "flex-1",
            children: [g.jsx("h1", {
                className: "text-3xl m-5 font-semibold border-b p-3 text-slate-700",
                children: "Listing results:"
            }), g.jsxs("div", {
                className: "flex flex-wrap gap-4 p-7",
                children: [!i && n.length === 0 && g.jsx("p", {
                    className: "text-xl w-full text-slate-700",
                    children: "No listings found!"
                }), i && g.jsx("p", {
                    className: "text-center text-2xl w-full text-slate-700",
                    children: "Loading..."
                }), !i && n.map(f => g.jsx(Bs, {
                    listing: f,
                    id: f._id
                }, f._id))]
            }), o && g.jsx("button", {
                type: "button",
                onClick: d,
                className: "hover:underline p-7 text-green-700",
                children: "Show more"
            })]
        })]
    })
}
function zk() {
    return g.jsxs(a_, {
        children: [g.jsx(Rk, {}), g.jsxs(t_, {
            children: [g.jsx(nt, {
                path: "/",
                element: g.jsx(J1, {})
            }), g.jsx(nt, {
                path: "/about",
                element: g.jsx(Z1, {})
            }), g.jsx(nt, {
                path: "/sign-in",
                element: g.jsx(yC, {})
            }), g.jsx(nt, {
                path: "/sign-up",
                element: g.jsx(wC, {})
            }), g.jsx(nt, {
                path: "/search",
                element: g.jsx(Uk, {})
            }), g.jsx(nt, {
                path: "/listing/:listingId",
                element: g.jsx(Dk, {})
            }), g.jsxs(nt, {
                element: g.jsx(Ak, {}),
                children: [g.jsx(nt, {
                    path: "/profile",
                    element: g.jsx(Nk, {})
                }), g.jsx(nt, {
                    path: "/create-listing",
                    element: g.jsx(Lk, {})
                }), g.jsx(nt, {
                    path: "/edit-listing/:listingId",
                    element: g.jsx(jk, {})
                })]
            })]
        })]
    })
}
var Od = "persist:"
    , ky = "persist/FLUSH"
    , Nd = "persist/REHYDRATE"
    , Iy = "persist/PAUSE"
    , Oy = "persist/PERSIST"
    , Ny = "persist/PURGE"
    , Ry = "persist/REGISTER"
    , $k = -1;
function Ks(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ks = function(n) {
        return typeof n
    }
        : Ks = function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        ,
        Ks(e)
}
function nh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
            n.push.apply(n, r)
    }
    return n
}
function Fk(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? nh(n, !0).forEach(function(r) {
            Bk(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(n).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Bk(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
function Vk(e, t, n, r) {
    r.debug;
    var i = Fk({}, n);
    return e && Ks(e) === "object" && Object.keys(e).forEach(function(s) {
        s !== "_persist" && t[s] === n[s] && (i[s] = e[s])
    }),
        i
}
function Hk(e) {
    var t = e.blacklist || null, n = e.whitelist || null, r = e.transforms || [], i = e.throttle || 0, s = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Od).concat(e.key), o = e.storage, l;
    e.serialize === !1 ? l = function(x) {
        return x
    }
        : typeof e.serialize == "function" ? l = e.serialize : l = Wk;
    var a = e.writeFailHandler || null
        , u = {}
        , c = {}
        , d = []
        , f = null
        , m = null
        , w = function(x) {
            Object.keys(x).forEach(function(C) {
                p(C) && u[C] !== x[C] && d.indexOf(C) === -1 && d.push(C)
            }),
                Object.keys(u).forEach(function(C) {
                    x[C] === void 0 && p(C) && d.indexOf(C) === -1 && u[C] !== void 0 && d.push(C)
                }),
                f === null && (f = setInterval(y, i)),
                u = x
        };
    function y() {
        if (d.length === 0) {
            f && clearInterval(f),
                f = null;
            return
        }
        var S = d.shift()
            , x = r.reduce(function(C, E) {
                return E.in(C, S, u)
            }, u[S]);
        if (x !== void 0)
            try {
                c[S] = l(x)
            } catch (C) {
                console.error("redux-persist/createPersistoid: error serializing state", C)
            }
        else
            delete c[S];
        d.length === 0 && _()
    }
    function _() {
        Object.keys(c).forEach(function(S) {
            u[S] === void 0 && delete c[S]
        }),
            m = o.setItem(s, l(c)).catch(h)
    }
    function p(S) {
        return !(n && n.indexOf(S) === -1 && S !== "_persist" || t && t.indexOf(S) !== -1)
    }
    function h(S) {
        a && a(S)
    }
    var v = function() {
        for (; d.length !== 0;)
            y();
        return m || Promise.resolve()
    };
    return {
        update: w,
        flush: v
    }
}
function Wk(e) {
    return JSON.stringify(e)
}
function Gk(e) {
    var t = e.transforms || []
        , n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Od).concat(e.key)
        , r = e.storage;
    e.debug;
    var i;
    return e.deserialize === !1 ? i = function(o) {
        return o
    }
        : typeof e.deserialize == "function" ? i = e.deserialize : i = qk,
        r.getItem(n).then(function(s) {
            if (s)
                try {
                    var o = {}
                        , l = i(s);
                    return Object.keys(l).forEach(function(a) {
                        o[a] = t.reduceRight(function(u, c) {
                            return c.out(u, a, l)
                        }, i(l[a]))
                    }),
                        o
                } catch (a) {
                    throw a
                }
            else
                return
        })
}
function qk(e) {
    return JSON.parse(e)
}
function Kk(e) {
    var t = e.storage
        , n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Od).concat(e.key);
    return t.removeItem(n, Xk)
}
function Xk(e) { }
function rh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
            n.push.apply(n, r)
    }
    return n
}
function Tt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rh(n, !0).forEach(function(r) {
            Yk(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rh(n).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Yk(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
function Qk(e, t) {
    if (e == null)
        return {};
    var n = Jk(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            r = s[i],
                !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function Jk(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var Zk = 5e3;
function eI(e, t) {
    var n = e.version !== void 0 ? e.version : $k;
    e.debug;
    var r = e.stateReconciler === void 0 ? Vk : e.stateReconciler
        , i = e.getStoredState || Gk
        , s = e.timeout !== void 0 ? e.timeout : Zk
        , o = null
        , l = !1
        , a = !0
        , u = function(d) {
            return d._persist.rehydrated && o && !a && o.update(d),
                d
        };
    return function(c, d) {
        var f = c || {}
            , m = f._persist
            , w = Qk(f, ["_persist"])
            , y = w;
        if (d.type === Oy) {
            var _ = !1
                , p = function(b, P) {
                    _ || (d.rehydrate(e.key, b, P),
                        _ = !0)
                };
            if (s && setTimeout(function() {
                !_ && p(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')))
            }, s),
                a = !1,
                o || (o = Hk(e)),
                m)
                return Tt({}, t(y, d), {
                    _persist: m
                });
            if (typeof d.rehydrate != "function" || typeof d.register != "function")
                throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
            return d.register(e.key),
                i(e).then(function(E) {
                    var b = e.migrate || function(P, A) {
                        return Promise.resolve(P)
                    }
                        ;
                    b(E, n).then(function(P) {
                        p(P)
                    }, function(P) {
                        p(void 0, P)
                    })
                }, function(E) {
                    p(void 0, E)
                }),
                Tt({}, t(y, d), {
                    _persist: {
                        version: n,
                        rehydrated: !1
                    }
                })
        } else {
            if (d.type === Ny)
                return l = !0,
                    d.result(Kk(e)),
                    Tt({}, t(y, d), {
                        _persist: m
                    });
            if (d.type === ky)
                return d.result(o && o.flush()),
                    Tt({}, t(y, d), {
                        _persist: m
                    });
            if (d.type === Iy)
                a = !0;
            else if (d.type === Nd) {
                if (l)
                    return Tt({}, y, {
                        _persist: Tt({}, m, {
                            rehydrated: !0
                        })
                    });
                if (d.key === e.key) {
                    var h = t(y, d)
                        , v = d.payload
                        , S = r !== !1 && v !== void 0 ? r(v, c, h, e) : h
                        , x = Tt({}, S, {
                            _persist: Tt({}, m, {
                                rehydrated: !0
                            })
                        });
                    return u(x)
                }
            }
        }
        if (!m)
            return t(c, d);
        var C = t(y, d);
        return C === y ? c : u(Tt({}, C, {
            _persist: m
        }))
    }
}
function ih(e) {
    return rI(e) || nI(e) || tI()
}
function tI() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}
function nI(e) {
    if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
        return Array.from(e)
}
function rI(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n
    }
}
function sh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
            n.push.apply(n, r)
    }
    return n
}
function Wu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? sh(n, !0).forEach(function(r) {
            iI(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sh(n).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function iI(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
var Ay = {
    registry: [],
    bootstrapped: !1
}
    , sI = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ay
            , n = arguments.length > 1 ? arguments[1] : void 0;
        switch (n.type) {
            case Ry:
                return Wu({}, t, {
                    registry: [].concat(ih(t.registry), [n.key])
                });
            case Nd:
                var r = t.registry.indexOf(n.key)
                    , i = ih(t.registry);
                return i.splice(r, 1),
                    Wu({}, t, {
                        registry: i,
                        bootstrapped: i.length === 0
                    });
            default:
                return t
        }
    };
function oI(e, t, n) {
    var r = n || !1
        , i = nd(sI, Ay, t && t.enhancer ? t.enhancer : void 0)
        , s = function(u) {
            i.dispatch({
                type: Ry,
                key: u
            })
        }
        , o = function(u, c, d) {
            var f = {
                type: Nd,
                payload: c,
                err: d,
                key: u
            };
            e.dispatch(f),
                i.dispatch(f),
                r && l.getState().bootstrapped && (r(),
                    r = !1)
        }
        , l = Wu({}, i, {
            purge: function() {
                var u = [];
                return e.dispatch({
                    type: Ny,
                    result: function(d) {
                        u.push(d)
                    }
                }),
                    Promise.all(u)
            },
            flush: function() {
                var u = [];
                return e.dispatch({
                    type: ky,
                    result: function(d) {
                        u.push(d)
                    }
                }),
                    Promise.all(u)
            },
            pause: function() {
                e.dispatch({
                    type: Iy
                })
            },
            persist: function() {
                e.dispatch({
                    type: Oy,
                    register: s,
                    rehydrate: o
                })
            }
        });
    return t && t.manualPersist || l.persist(),
        l
}
var Rd = {}
    , Ad = {};
Ad.__esModule = !0;
Ad.default = uI;
function Xs(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xs = function(n) {
        return typeof n
    }
        : Xs = function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        ,
        Xs(e)
}
function Rl() { }
var aI = {
    getItem: Rl,
    setItem: Rl,
    removeItem: Rl
};
function lI(e) {
    if ((typeof self > "u" ? "undefined" : Xs(self)) !== "object" || !(e in self))
        return !1;
    try {
        var t = self[e]
            , n = "redux-persist ".concat(e, " test");
        t.setItem(n, "test"),
            t.getItem(n),
            t.removeItem(n)
    } catch {
        return !1
    }
    return !0
}
function uI(e) {
    var t = "".concat(e, "Storage");
    return lI(t) ? self[t] : aI
}
Rd.__esModule = !0;
Rd.default = fI;
var cI = dI(Ad);
function dI(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function fI(e) {
    var t = (0,
        cI.default)(e);
    return {
        getItem: function(r) {
            return new Promise(function(i, s) {
                i(t.getItem(r))
            }
            )
        },
        setItem: function(r, i) {
            return new Promise(function(s, o) {
                s(t.setItem(r, i))
            }
            )
        },
        removeItem: function(r) {
            return new Promise(function(i, s) {
                i(t.removeItem(r))
            }
            )
        }
    }
}
var Ly = void 0
    , pI = hI(Rd);
function hI(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var mI = (0,
    pI.default)("local");
Ly = mI;
const gI = Qg({
    user: Xx
})
    , vI = {
        key: "root",
        version: 1,
        storage: Ly
    }
    , yI = eI(vI, gI)
    , jy = Nx({
        reducer: yI,
        middleware: e => e({
            serializableCheck: !1
        })
    })
    , wI = oI(jy);
function Ys(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ys = function(n) {
        return typeof n
    }
        : Ys = function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        ,
        Ys(e)
}
function SI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function oh(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
    }
}
function _I(e, t, n) {
    return t && oh(e.prototype, t),
        n && oh(e, n),
        e
}
function xI(e, t) {
    return t && (Ys(t) === "object" || typeof t == "function") ? t : Qs(e)
}
function Gu(e) {
    return Gu = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
        ,
        Gu(e)
}
function Qs(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function EI(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
        t && qu(e, t)
}
function qu(e, t) {
    return qu = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i,
            r
    }
        ,
        qu(e, t)
}
function Js(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
var My = function(e) {
    EI(t, e);
    function t() {
        var n, r;
        SI(this, t);
        for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
        return r = xI(this, (n = Gu(t)).call.apply(n, [this].concat(s))),
            Js(Qs(r), "state", {
                bootstrapped: !1
            }),
            Js(Qs(r), "_unsubscribe", void 0),
            Js(Qs(r), "handlePersistorState", function() {
                var l = r.props.persistor
                    , a = l.getState()
                    , u = a.bootstrapped;
                u && (r.props.onBeforeLift ? Promise.resolve(r.props.onBeforeLift()).finally(function() {
                    return r.setState({
                        bootstrapped: !0
                    })
                }) : r.setState({
                    bootstrapped: !0
                }),
                    r._unsubscribe && r._unsubscribe())
            }),
            r
    }
    return _I(t, [{
        key: "componentDidMount",
        value: function() {
            this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState),
                this.handlePersistorState()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this._unsubscribe && this._unsubscribe()
        }
    }, {
        key: "render",
        value: function() {
            return typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading
        }
    }]),
        t
}(T.PureComponent);
Js(My, "defaultProps", {
    children: null,
    loading: null
});
Al.createRoot(document.getElementById("root")).render(g.jsx(DE, {
    store: jy,
    children: g.jsx(My, {
        persistor: wI,
        loading: null,
        children: g.jsx(zk, {})
    })
}));
