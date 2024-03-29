/* prebid.js v2.23.0
Updated : 2019-07-10 */
! function (u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function (e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            248: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function (e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function (e) {
        throw console.error(e), e
    }, f(f.s = 628)
}({
    0: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function () {
            return C
        }), n.d(t, "bind", function () {
            return U
        }), t.replaceTokenInString = function (i, e, o) {
            return ne(e, function (e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            }), i
        }, t.getUniqueIdentifierStr = N, t.generateUUID = function e(t) {
            return t ? (t ^ x() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function (e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function (e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function (e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function (t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map(function (e) {
                return "".concat(e, "=").concat(encodeURIComponent(pe(t, e)))
            }).join("&") : ""
        }, t.getAdUnitSizes = function (e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function (e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) ie(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === p(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(D(e));
                    else
                        for (var a = 0; a < o; a++) t.push(D(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = D, t.getTopWindowLocation = k, t.getTopFrameReferrer = P, t.getAncestorOrigins = M, t.getWindowTop = q, t.getWindowSelf = G, t.getWindowLocation = W, t.getTopWindowUrl = function () {
            var t;
            try {
                t = C.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function () {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = L, t.logInfo = F, t.logWarn = z, t.logError = V, t.hasConsoleLogger = function () {
            return O
        }, t.debugTurnedOn = K, t.createInvisibleIframe = function () {
            var e = document.createElement("iframe");
            return e.id = N(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = J, t.hasValidBidRequest = function (e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, ne(e, i), !r) return V("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = Y, t.isFn = Q, t.isStr = X, t.isArray = $, t.isNumber = Z, t.isPlainObject = ee, t.isBoolean = function (e) {
            return Y(e, E)
        }, t.isEmpty = te, t.isEmptyStr = function (e) {
            return X(e) && (!e || 0 === e.length)
        }, t._each = ne, t.contains = function (e, t) {
            if (te(e)) return !1;
            if (Q(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", function () {
            return re
        }), t._map = function (n, r) {
            if (te(n)) return [];
            if (Q(n.map)) return n.map(r);
            var i = [];
            return ne(n, function (e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function (e) {
            var t = e.source,
                n = e.burl;
            t === g.S2S.SRC && n && C.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function (e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = N(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ce, t.createTrackPixelHtml = function (e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ue, t.getIframeDocument = function (e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                C.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = se, t.uniques = de, t.flatten = fe, t.getBidRequest = function (n, e) {
            return n ? (e.some(function (e) {
                var t = c()(e.bids, function (t) {
                    return ["bidId", "adId", "bid_id"].some(function (e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = le, t.getValue = pe, t.getKeyByValue = function (e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function () {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                }).reduce(fe, [])
            }).reduce(fe).filter(de)
        }, t.isGptPubadsDefined = function () {
            if (window.googletag && Q(window.googletag.pubads) && Q(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", function () {
            return ge
        }), n.d(t, "getOldestHighestCpmBid", function () {
            return be
        }), n.d(t, "getLatestHighestCpmBid", function () {
            return ye
        }), t.shuffle = function (e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function (e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function (e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = he, t.inIframe = me, t.isSafariBrowser = function () {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function (e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function () {
            return (new Date).getTime()
        }, t.checkCookieSupport = Se, t.cookiesAreEnabled = function () {
            if (C.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function (e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.setCookie = function (e, t, n) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
        }, t.localStorageIsEnabled = function () {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
            } catch (e) {
                return !1
            }
        }, t.delayExecution = function (e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function () {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function (e, n) {
            return e.reduce(function (e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.deepAccess = function (e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.deepSetValue = function (e, t, n) {
            var r;
            for (t = t.split("."), r = 0; r < t.length - 1; r++) r !== t.length - 1 && void 0 === e[t[r]] && (e[t[r]] = {}), e = e[t[r]];
            e[t[r]] = n
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function (e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function (n, e) {
            return e.filter(function (e) {
                return n[e]
            }).reduce(function (e, t) {
                return l(e, function (e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function (e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function (e) {
                    return s()(t, e)
                })) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function (e, t, n) {
            return c()(e, function (e) {
                return 0 < e.bids.filter(function (e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function (e, t, n) {
            return e.filter(function (e) {
                return e.code === t
            }).map(function (e) {
                return e.bids
            }).reduce(fe, []).filter(function (e) {
                return e.bidder === n
            }).map(function (e) {
                return e.params || {}
            })
        }, t.getOrigin = function () {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function () {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function (t) {
            return function (e) {
                return Ee(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function (t) {
            return function (e) {
                return Ee(e, t)
            }
        }, t.unsupportedBidderMessage = function (e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function (e, t) {
            var n = l({}, e);
            return delete n[t], n
        }, t.isInteger = Ae, t.convertCamelToUnderscore = function (e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.transformBidderParamKeywords = function (e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ne(e, function (e, t) {
                if ($(e)) {
                    var n = [];
                    ne(e, function (e) {
                        !(e = se(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }), i
        }, t.convertTypes = function (t, n) {
            return Object.keys(t).forEach(function (e) {
                n[e] && (Q(t[e]) ? n[e] = t[e](n[e]) : n[e] = function (e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                }(t[e], n[e]), isNaN(n[e]) && delete n.key)
            }), n
        }, t.setDataInLocalStorage = function (e, t) {
            Te() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function (e) {
            if (Te()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Te, t.isArrayOfNums = function (e, t) {
            return $(e) && (!t || e.length === t) && e.every(function (e) {
                return Ae(e)
            })
        }, t.fill = function (e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ee(e) ? he(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function (e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function (e) {
            return Math.min.apply(Math, f(e))
        }, t.getMaxValueFromArray = function (e) {
            return Math.max.apply(Math, f(e))
        }, t.compareOn = function (n) {
            return function (e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(89),
            o = n.n(i),
            a = n(11),
            c = n.n(a),
            u = n(9),
            s = n.n(u),
            d = n(10);

        function f(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function l() {
            return (l = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var g = n(4),
            b = !1,
            y = "Array",
            v = "String",
            h = "Function",
            m = "Number",
            S = "Object",
            E = "Boolean",
            A = Object.prototype.toString,
            T = Boolean(window.console),
            O = Boolean(T && window.console.log),
            I = Boolean(T && window.console.info),
            w = Boolean(T && window.console.warn),
            _ = Boolean(T && window.console.error),
            C = {
                checkCookieSupport: Se,
                createTrackPixelIframeHtml: ue,
                getWindowSelf: G,
                getWindowTop: q,
                getAncestorOrigins: M,
                getTopFrameReferrer: P,
                getWindowLocation: W,
                getTopWindowLocation: k,
                insertUserSyncIframe: ce,
                insertElement: oe,
                isFn: Q,
                triggerPixel: ae,
                logError: V,
                logWarn: z,
                logMessage: L,
                logInfo: F
            },
            j = {},
            U = function (e, t) {
                return t
            }.bind(null, 1, j)() === j ? Function.prototype.bind : function (e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var B, R = (B = 0, function () {
            return ++B
        });

        function N() {
            return R() + Math.random().toString(16).substr(2)
        }

        function x() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function D(e) {
            if ($(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function k() {
            if (me()) {
                var e;
                try {
                    e = C.getAncestorOrigins() || C.getTopFrameReferrer()
                } catch (e) {
                    F("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return C.getWindowLocation()
        }

        function P() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function M() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function q() {
            return window.top
        }

        function G() {
            return window.self
        }

        function W() {
            return window.location
        }

        function L() {
            K() && O && console.log.apply(console, H(arguments, "MESSAGE:"))
        }

        function F() {
            K() && I && console.info.apply(console, H(arguments, "INFO:"))
        }

        function z() {
            K() && w && console.warn.apply(console, H(arguments, "WARNING:"))
        }

        function V() {
            K() && _ && console.error.apply(console, H(arguments, "ERROR:"))
        }

        function H(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function K() {
            if (!1 === r.b.getConfig("debug") && !1 === b) {
                var e = "TRUE" === J(g.DEBUG_MODE).toUpperCase();
                r.b.setConfig({
                    debug: e
                }), b = !0
            }
            return !!r.b.getConfig("debug")
        }

        function J(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }

        function Y(e, t) {
            return A.call(e) === "[object " + t + "]"
        }

        function Q(e) {
            return Y(e, h)
        }

        function X(e) {
            return Y(e, v)
        }

        function $(e) {
            return Y(e, y)
        }

        function Z(e) {
            return Y(e, m)
        }

        function ee(e) {
            return Y(e, S)
        }

        function te(e) {
            if (!e) return !0;
            if ($(e) || X(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ne(e, t) {
            if (!te(e)) {
                if (Q(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var re = function () {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        }();
        var ie = function (e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function oe(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ae(e, t) {
            var n = new Image;
            t && C.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ce(e, t) {
            var n = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && C.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), C.insertElement(i, document, "html", !0)
        }

        function ue(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(N(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function se(e, t, n) {
            return null == t ? n : X(t) ? t : Z(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function de(e, t, n) {
            return n.indexOf(e) === t
        }

        function fe(e, t) {
            return e.concat(t)
        }

        function le(e) {
            return Object.keys(e)
        }

        function pe(e, t) {
            return e[t]
        }
        var ge = ve("timeToRespond", function (e, t) {
                return t < e
            }),
            be = ve("responseTimestamp", function (e, t) {
                return t < e
            }),
            ye = ve("responseTimestamp", function (e, t) {
                return e < t
            });

        function ve(n, r) {
            return function (e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function he(e) {
            return o()(e)
        }

        function me() {
            try {
                return C.getWindowSelf() !== C.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function Se() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ee = function (e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Ae(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Te() {
            try {
                return !!window.localStorage
            } catch (e) {
                V("Local storage api disabled")
            }
        }
    },
    1: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function (t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function (e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }))
            })
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function (t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(h.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(h.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = _;
        var r = n(40),
            a = n(7),
            i = n(3),
            b = n(23),
            o = n(25),
            c = n(28),
            u = n(49),
            s = n(4),
            y = n.n(s),
            d = n(8),
            v = n.n(d),
            f = n(9),
            l = n.n(f),
            p = n(5),
            h = n(0),
            g = n(2),
            m = n(13);

        function S(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A() {
            return (A = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(l) {
            return A(new r.a(l.code), {
                getSpec: function () {
                    return Object.freeze(l)
                },
                registerSyncs: p,
                callBids: function (o, a, e, n, c) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(g);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function (e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            });
                            var r = l.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var f = Object(h.delayExecution)(i, r.length);
                                r.forEach(function (i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function (e) {
                                                if (e) return "?".concat("object" === E(e) ? Object(h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, A({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(h.logWarn)("Skipping invalid request from ".concat(l.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(l.code);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, s.push(e);
                                        try {
                                            n = l.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(h.logError)("Bidder ".concat(l.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t = d[e.requestId];
                                            if (t) {
                                                var n = A(Object(b.a)(y.a.STATUS.GOOD, t), e);
                                                ! function (e, t) {
                                                    u[e] = !0, _(e, t, [o]) && a(e, t)
                                                }(t.adUnitCode, n)
                                            } else Object(h.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(l.code), Object(h.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                })
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), v.a.emit(y.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent)
                    }
                }
            });

            function p(e, t) {
                if (l.getUserSyncs) {
                    var n = i.b.getConfig("userSync.filterSettings"),
                        r = l.getUserSyncs({
                            iframeEnabled: !!(i.b.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.b.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach(function (e) {
                        o.a.registerSync(e.type, l.code, e.url)
                    }))
                }
            }

            function g(e) {
                return !!l.isBidRequestValid(e) || (Object(h.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!i.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function (e) {
                return Object(h.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                })
            }).reduce(h.flatten, []).filter(h.uniques).forEach(function (n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(h.getDataFromLocalStorage)(i);
                    (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function (e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(h.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(h.setDataInLocalStorage)(i, JSON.stringify(t))
                            } catch (e) {
                                Object(h.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function () {
                            Object(h.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            }), e.call(this, t)
        }

        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every(function (e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.c)(t, n) ? !("banner" === t.mediaType && ! function (e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            }(e, t, n)) || (Object(h.logError)(r("Banner bids require a width and height")), !1) : (Object(h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(h.logError)(r("Native bid missing some required properties.")), !1) : (Object(h.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(w)
    },
    10: function (e, t, n) {
        "use strict";

        function r(e) {
            return Object.keys(e).map(function (t) {
                return Array.isArray(e[t]) ? e[t].map(function (e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }
        t.b = r, t.c = function (e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : function (e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
                        var n = function (e, t) {
                                return function (e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function (e, t) {
                                    var n = [],
                                        r = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                    } catch (e) {
                                        i = !0, o = e
                                    } finally {
                                        try {
                                            r || null == c.return || c.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                    return n
                                }(e, t) || function () {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }()
                            }(t.split("="), 2),
                            r = n[0],
                            i = n[1];
                        return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
                    }, {}) : {}
                }(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function (e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    11: function (e, t, n) {
        n(80), e.exports = n(16).Array.find
    },
    12: function (e, t, n) {
        "use strict";
        t.a = i, t.c = function (e) {
            return !(!e || !e.url)
        }, t.b = function (e, t) {
            e.render(t)
        };
        var u = n(50),
            s = n(0),
            r = n(11),
            d = n.n(r);

        function i(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function (e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function () {
                t.loaded = !0, t.process()
            }, ! function (t) {
                var e = pbjs.adUnits,
                    n = d()(e, function (e) {
                        return e.code === t
                    });
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            }(c) ? Object(u.b)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c))
        }
        i.install = function (e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function () {
            return this.config
        }, i.prototype.setRender = function (e) {
            this.render = e
        }, i.prototype.setEventHandlers = function (e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function (e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function () {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    128: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(43)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function () {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(34)(o)
    },
    13: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return a
        }), t.d = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }, t.c = function (e, t) {
            o("async", function (e) {
                e.forEach(function (e) {
                    return t.apply(void 0, function (e) {
                        return function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function (e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }(e))
                })
            }, e)([])
        }, t.e = function (e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            a(e).before(function (e, t) {
                t.push(n), e(t)
            })
        };
        var r = n(88),
            i = n.n(r);
        var o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    131: function (e, t, n) {
        "use strict";
        t.a = function () {
            addEventListener("message", p, !1)
        };
        var r = n(8),
            o = n.n(r),
            a = n(28),
            i = n(4),
            d = (n.n(i), n(0)),
            c = n(38),
            u = n(11),
            f = n.n(u),
            l = n(12),
            s = i.EVENTS.BID_WON;

        function p(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = f()(c.a.getBidsReceived(), function (e) {
                    return e.adId === n.adId
                });
                if ("Prebid Request" === n.message && (function (e, t, n) {
                        var r = e.adId,
                            i = e.ad,
                            o = e.adUrl,
                            a = e.width,
                            c = e.height,
                            u = e.renderer,
                            s = e.cpm;
                        Object(l.c)(u) ? Object(l.b)(u, e) : r && (function (e) {
                            var r = e.adUnitCode,
                                i = e.width,
                                o = e.height;

                            function a(e) {
                                var t = function (e) {
                                        return window.googletag ? function (e) {
                                            return f()(window.googletag.pubads().getSlots().filter(Object(d.isSlotMatchingAdUnitCode)(e)), function (e) {
                                                return e
                                            }).getSlotElementId()
                                        }(e) : window.apntag ? function (e) {
                                            var t = window.apntag.getTag(e);
                                            return t && t.targetId
                                        }(e) : e
                                    }(r),
                                    n = document.getElementById(t);
                                return n && n.querySelector(e)
                            } ["div", "iframe"].forEach(function (e) {
                                var t = a(e);
                                if (t) {
                                    var n = t.style;
                                    n.width = i + "px", n.height = o + "px"
                                } else Object(d.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            })
                        }(e), n.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: Object(d.replaceAuctionPrice)(i, s),
                            adUrl: Object(d.replaceAuctionPrice)(o, s),
                            adId: r,
                            width: a,
                            height: c
                        }), t))
                    }(r, n.adServerDomain, e.source), c.a.addWinningBid(r), o.a.emit(s, r)), "Prebid Native" === n.message) {
                    if ("assetRequest" === n.action) {
                        var i = Object(a.c)(n, r);
                        return void e.source.postMessage(JSON.stringify(i), e.origin)
                    }
                    if ("click" === Object(a.b)(n, r)) return;
                    c.a.addWinningBid(r), o.a.emit(s, r)
                }
            }
        }
    },
    132: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(36);

        function a() {
            return (a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            r.b.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(n ? " from session" : "")), d(), c = function (e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void
                function (e) {
                    Object(o.logWarn)("DEBUG: " + e)
                }("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function (n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter(function (e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }).forEach(function (e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    }))
                });
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.b.getConfig("debugging", function (e) {
            return l(e.debugging)
        })
    },
    133: function (e, t, n) {
        n(134), n(65), n(143), n(145), n(149), n(152), n(154), e.exports = n(16).Set
    },
    134: function (e, t) {},
    135: function (e, t, n) {
        var u = n(45),
            s = n(32);
        e.exports = function (c) {
            return function (e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    136: function (e, t, n) {
        e.exports = n(21)
    },
    137: function (e, t, n) {
        "use strict";
        var r = n(66),
            i = n(42),
            o = n(53),
            a = {};
        n(21)(a, n(14)("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    138: function (e, t, n) {
        var a = n(20),
            c = n(26),
            u = n(139);
        e.exports = n(22) ? Object.defineProperties : function (e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    139: function (e, t, n) {
        var r = n(140),
            i = n(67);
        e.exports = Object.keys || function (e) {
            return r(e, i)
        }
    },
    14: function (e, t, n) {
        var r = n(57)("wks"),
            i = n(46),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function (e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    140: function (e, t, n) {
        var a = n(27),
            c = n(47),
            u = n(59)(!1),
            s = n(52)("IE_PROTO");
        e.exports = function (e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    141: function (e, t, n) {
        var r = n(19).document;
        e.exports = r && r.documentElement
    },
    142: function (e, t, n) {
        var r = n(27),
            i = n(44),
            o = n(52)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    143: function (e, t, n) {
        n(144);
        for (var r = n(19), i = n(21), o = n(29), a = n(14)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    144: function (e, t, n) {
        "use strict";
        var r = n(34),
            i = n(68),
            o = n(29),
            a = n(47);
        e.exports = n(51)(Array, "Array", function (e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    145: function (e, t, n) {
        "use strict";
        var r = n(146),
            i = n(76);
        e.exports = n(148)("Set", function (t) {
            return function (e) {
                return t(this, 0 < arguments.length ? e : void 0)
            }
        }, {
            add: function (e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    146: function (e, t, n) {
        "use strict";

        function a(e, t) {
            var n, r = g(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        }
        var c = n(20).f,
            u = n(66),
            s = n(69),
            d = n(24),
            f = n(70),
            l = n(39),
            r = n(51),
            i = n(68),
            o = n(147),
            p = n(22),
            g = n(75).fastKey,
            b = n(76),
            y = p ? "_s" : "size";
        e.exports = {
            getConstructor: function (e, o, n, r) {
                var i = e(function (e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[y] = 0, null != t && l(t, n, e[r], e)
                });
                return s(i.prototype, {
                    clear: function () {
                        for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[y] = 0
                    },
                    delete: function (e) {
                        var t = b(this, o),
                            n = a(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[y]--
                        }
                        return !!n
                    },
                    forEach: function (e, t) {
                        b(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function (e) {
                        return !!a(b(this, o), e)
                    }
                }), p && c(i.prototype, "size", {
                    get: function () {
                        return b(this, o)[y]
                    }
                }), i
            },
            def: function (e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: a,
            setStrong: function (e, n, t) {
                r(e, n, function (e, t) {
                    this._t = b(e, n), this._k = t, this._l = void 0
                }, function () {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }, t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    147: function (e, t, n) {
        "use strict";
        var r = n(19),
            i = n(16),
            o = n(20),
            a = n(22),
            c = n(14)("species");
        e.exports = function (e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    },
    148: function (e, t, n) {
        "use strict";
        var f = n(19),
            l = n(15),
            p = n(75),
            g = n(30),
            b = n(21),
            y = n(69),
            v = n(39),
            h = n(70),
            m = n(18),
            S = n(53),
            E = n(20).f,
            A = n(43)(0),
            T = n(22);
        e.exports = function (n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !g(function () {
                (new c).entries().next()
            })) ? (c = e(function (e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && v(t, i, e[u], e)
            }), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, function (e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                })
            }), o || E(c.prototype, "size", {
                get: function () {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), y(c.prototype, t), p.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    149: function (e, t, n) {
        var r = n(15);
        r(r.P + r.R, "Set", {
            toJSON: n(150)("Set")
        })
    },
    15: function (e, t, n) {
        var b = n(19),
            y = n(16),
            v = n(24),
            h = n(21),
            m = n(27),
            S = "prototype",
            E = function (e, t, n) {
                var r, i, o, a = e & E.F,
                    c = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    d = e & E.B,
                    f = e & E.W,
                    l = c ? y : y[t] || (y[t] = {}),
                    p = l[S],
                    g = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && g && void 0 !== g[r]) && m(l, r) || (o = i ? g[r] : n[r], l[r] = c && "function" != typeof g[r] ? n[r] : d && i ? v(o, b) : f && g[r] == o ? function (r) {
                    function e(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    }
                    return e[S] = r[S], e
                }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && p && !p[r] && h(p, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    150: function (e, t, n) {
        var r = n(74),
            i = n(151);
        e.exports = function (e) {
            return function () {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    151: function (e, t, n) {
        var r = n(39);
        e.exports = function (e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    152: function (e, t, n) {
        n(153)("Set")
    },
    153: function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e) {
            r(r.S, e, {
                of: function () {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    154: function (e, t, n) {
        n(155)("Set")
    },
    155: function (e, t, n) {
        "use strict";
        var r = n(15),
            u = n(54),
            s = n(24),
            d = n(39);
        e.exports = function (e) {
            r(r.S, e, {
                from: function (e, t, n) {
                    var r, i, o, a, c = t;
                    return u(this), (r = void 0 !== c) && u(c), null == e ? new this : (i = [], r ? (o = 0, a = s(c, n, 2), d(e, !1, function (e) {
                        i.push(a(e, o++))
                    })) : d(e, !1, i.push, i), new this(i))
                }
            })
        }
    },
    156: function (e, t, n) {
        n(65), n(157), e.exports = n(16).Array.from
    },
    157: function (e, t, n) {
        "use strict";
        var g = n(24),
            r = n(15),
            b = n(44),
            y = n(71),
            v = n(72),
            h = n(33),
            m = n(158),
            S = n(73);
        r(r.S + r.F * !n(159)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e, t, n) {
                var r, i, o, a, c = b(e),
                    u = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    d = 1 < s ? t : void 0,
                    f = void 0 !== d,
                    l = 0,
                    p = S(c);
                if (f && (d = g(d, 2 < s ? n : void 0, 2)), null == p || u == Array && v(p))
                    for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                else
                    for (a = p.call(c), i = new u; !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
                return i.length = l, i
            }
        })
    },
    158: function (e, t, n) {
        "use strict";
        var r = n(20),
            i = n(42);
        e.exports = function (e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    159: function (e, t, n) {
        var o = n(14)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function () {
                a = !0
            }, Array.from(r, function () {
                throw 2
            })
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function () {
                    return {
                        done: n = !0
                    }
                }, r[o] = function () {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    16: function (e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    },
    18: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    19: function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    2: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r
        }), n.d(t, "d", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return a
        });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function (e, t, n) {
        var r = n(26),
            i = n(81),
            o = n(82),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    21: function (e, t, n) {
        var r = n(20),
            i = n(42);
        e.exports = n(22) ? function (e, t, n) {
            return r.f(e, t, i(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    },
    22: function (e, t, n) {
        e.exports = !n(30)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    23: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function () {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function () {
                return r
            }, this.getSize = function () {
                return this.width + "x" + this.height
            }
        }
    },
    24: function (e, t, n) {
        var o = n(54);
        e.exports = function (r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function (e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function (e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function () {
                return r.apply(i, arguments)
            }
        }
    },
    244: function (e, t, n) {
        n(245), e.exports = n(16).String.includes
    },
    245: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(246),
            o = "includes";
        r(r.P + r.F * n(248)(o), "String", {
            includes: function (e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
            }
        })
    },
    246: function (e, t, n) {
        var r = n(247),
            i = n(32);
        e.exports = function (e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    },
    247: function (e, t, n) {
        var r = n(18),
            i = n(31),
            o = n(14)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    248: function (e, t, n) {
        var r = n(14)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, !"/./" [t](n)
                } catch (e) {}
            }
            return !0
        }
    },
    25: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        });
        var a = n(0),
            r = n(3),
            i = n(9),
            o = n.n(i);

        function c(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var s, d, f, l, p, g, b, y = !a.isSafariBrowser() && a.cookiesAreEnabled(),
            v = (s = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: y
            }, d = {}, g = {
                image: !(p = {}),
                iframe: l = !(f = {
                    image: [],
                    iframe: []
                })
            }, b = s.config, r.b.getConfig("userSync", function (e) {
                b = u(b, e.userSync)
            }), d.registerSync = function (e, t, n) {
                return b.syncEnabled && a.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(p[t]) >= b.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([t, n]), void(p = function (e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e
                }(p, t))) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'))
            }, d.syncUsers = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(h, Number(e));
                h()
            }, d.triggerUserSyncs = function () {
                b.enableOverride && d.syncUsers()
            }, d.canBidderRegisterSync = function (e, t) {
                if (b.filterSettings) {
                    if (m(e, t)) return !1
                } else {
                    if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                    if ("iframe" === e && !b.iframeEnabled && !g.iframe) return !1;
                    if ("image" === e && !b.pixelEnabled && !g.image) return !1
                }
                return !0
            }, d);

        function h() {
            if (b.syncEnabled && s.browserSupportsCookies && (b.enableOverride || !l)) {
                try {
                    ! function () {
                        if (!b.pixelEnabled && !g.image) return;
                        a.shuffle(f.image).forEach(function (e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function () {
                        if (!b.iframeEnabled && !g.iframe) return;
                        a.shuffle(f.iframe).forEach(function (e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                f = {
                    image: [],
                    iframe: []
                }, l = !0
            }
        }

        function m(e, t) {
            var n = b.filterSettings;
            if (function (e, t) {
                    if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function (e) {
                        return a.isStr(e) && "*" !== e
                    })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                g[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function (e, t) {
                        return !o()(e, t)
                    },
                    exclude: function (e, t) {
                        return o()(e, t)
                    }
                } [r.filter || "include"](i, t)
            }
            return !1
        }
    },
    26: function (e, t, n) {
        var r = n(18);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    27: function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    },
    28: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return o
        }), n.d(t, "a", function () {
            return s
        }), t.g = function (e) {
            if (e && e.type && function (e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                }(e.type)) return d[e.type];
            return e
        }, t.f = function (t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function (e) {
                    return r[e].required
                }),
                o = Object.keys(t.native).filter(function (e) {
                    return t.native[e]
                });
            return i.every(function (e) {
                return c()(o, e)
            })
        }, t.b = function (e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function (r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function (e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
                t && n && (o[t] = n)
            }), o
        }, t.c = function (e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function (e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }), i
        };
        var a = n(0),
            r = n(9),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(4),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map(function (e) {
                return u.NATIVE_KEYS[e]
            }),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    29: function (e, t) {
        e.exports = {}
    },
    3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return p
        }), n.d(t, "b", function () {
            return E
        });
        var r = n(41),
            i = n(11),
            a = n.n(i),
            o = n(9),
            c = n.n(o),
            u = n(13);

        function s() {
            return (s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var f = n(0),
            l = window.location.origin,
            p = "random",
            g = {};
        g[p] = !0, g.fixed = !0;
        var b = p,
            y = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            };
        var v, h, m, S, E = (m = [], S = Object(u.b)("async", function (n) {
            if ("object" === d(n)) {
                var e = Object.keys(n),
                    r = {};
                e.forEach(function (e) {
                    var t = n[e];
                    "object" === d(v[e]) && "object" === d(t) && (t = s({}, v[e], t)), r[e] = h[e] = t
                }), T(r)
            } else f.logError("setConfig options must be an object")
        }), A(), {
            getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? f.deepAccess(h, e) : h
                }
                return function (e, t) {
                    var n = t;
                    return "string" != typeof e && (n = e, e = "*"), "function" == typeof n ? (m.push({
                        topic: e,
                        callback: n
                    }), function () {
                        m.splice(m.indexOf(t), 1)
                    }) : void f.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: S,
            setDefaults: function (e) {
                "object" === d(v) ? (s(v, e), s(h, e)) : f.logError("defaults must be an object")
            },
            resetConfig: A
        });

        function A() {
            var n = {
                _debug: !(v = {}),
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: l,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: y.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : y.MEDIUM : "object" === d(e) && (this._customPriceBucket = e, this._priceGranularity = y.CUSTOM, f.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === d(n) && (e[t] = n[t], f.logMessage("Using custom price granularity for ".concat(t))) : f.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _bidderSequence: b,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    g[e] ? this._bidderSequence = e : f.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }
            };

            function i(t) {
                return a()(Object.keys(y), function (e) {
                    return t === y[e]
                })
            }

            function o(e) {
                if (!e) return f.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) i(e) || f.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if ("object" === d(e) && !Object(r.b)(e)) return f.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0
            }
            h && T(Object.keys(h).reduce(function (e, t) {
                return h[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), h = n
        }

        function T(t) {
            var n = Object.keys(t);
            m.filter(function (e) {
                return c()(n, e.topic)
            }).forEach(function (e) {
                e.callback(function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e.topic, t[e.topic]))
            }), m.filter(function (e) {
                return "*" === e.topic
            }).forEach(function (e) {
                return e.callback(t)
            })
        }
    },
    30: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    31: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    },
    32: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    33: function (e, t, n) {
        var r = n(45),
            i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    34: function (e, t) {
        e.exports = function () {}
    },
    35: function (e, t, n) {
        n(128), e.exports = n(16).Array.findIndex
    },
    350: function (e, t, n) {
        n(351), e.exports = n(16).Number.isInteger
    },
    351: function (e, t, n) {
        var r = n(15);
        r(r.S, "Number", {
            isInteger: n(352)
        })
    },
    352: function (e, t, n) {
        var r = n(18),
            i = Math.floor;
        e.exports = function (e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    36: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return G
        }), n.d(t, "a", function () {
            return W
        }), t.h = function (e) {
            var a, c, u, s, d = e.adUnits,
                t = e.adUnitCodes,
                n = e.callback,
                r = e.cbTimeout,
                i = e.labels,
                o = e.auctionId,
                f = d,
                l = i,
                p = t,
                g = [],
                b = [],
                y = [],
                v = o || D.generateUUID(),
                h = n,
                m = r,
                S = [],
                E = new Set;

            function A() {
                return {
                    auctionId: v,
                    timestamp: a,
                    auctionEnd: c,
                    auctionStatus: u,
                    adUnits: f,
                    adUnitCodes: p,
                    labels: l,
                    bidderRequests: g,
                    noBids: y,
                    bidsReceived: b,
                    winningBids: S,
                    timeout: m
                }
            }

            function T(e, t) {
                if (t && clearTimeout(s), void 0 === c) {
                    var n = [];
                    e && (D.logMessage("Auction ".concat(v, " timedOut")), (n = function (e, t) {
                        return e.map(function (e) {
                            return (e.bids || []).filter(function (e) {
                                return !t.has(e.bidder)
                            })
                        }).reduce(w.flatten, []).map(function (e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        })
                    }(g, E)).length && P.emit(M.EVENTS.BID_TIMEOUT, n)), u = W, c = Date.now(), P.emit(M.EVENTS.AUCTION_END, A());
                    try {
                        if (null != h) {
                            var r = p,
                                i = b.filter(D.bind.call(w.adUnitsFilter, this, r)).reduce(Y, {});
                            h.apply(pbjs, [i, e]), h = null
                        }
                    } catch (e) {
                        D.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && k.callTimedOutBidders(d, n, m);
                        var o = j.b.getConfig("userSync") || {};
                        o.enableOverride || x(o.syncDelay)
                    }
                }
            }

            function O() {
                D.logInfo("Bids Received for Auction with id: ".concat(v), b), u = W, T(!1, !0)
            }

            function I(e) {
                E.add(e)
            }
            return {
                addBidReceived: function (e) {
                    b = b.concat(e)
                },
                addNoBid: function (e) {
                    y = y.concat(e)
                },
                executeCallback: T,
                callBids: function () {
                    var e = this;
                    u = q, a = Date.now();
                    var t = k.makeBidRequests(f, a, v, m, l);
                    D.logInfo("Bids Requested for Auction with id: ".concat(v), t), t.forEach(function (e) {
                        ! function (e) {
                            g = g.concat(e)
                        }(e)
                    });
                    var n = {};
                    if (t.length < 1) D.logWarn("No valid bid requests returned for auction"), O();
                    else {
                        var r = {
                            bidRequests: t,
                            run: function () {
                                ! function () {
                                    var e = T.bind(null, !0),
                                        t = setTimeout(e, m);
                                    s = t
                                }(), u = G, P.emit(M.EVENTS.AUCTION_INIT, A());
                                var r = function (e, r) {
                                    var i = 0,
                                        t = !1,
                                        n = new Set,
                                        o = {};

                                    function a() {
                                        i--, t && 0 === i && e()
                                    }
                                    return {
                                        addBidResponse: function (e, t) {
                                            o[t.requestId] = !0, i++;
                                            var n = function (e) {
                                                var t = e.adUnitCode,
                                                    n = e.bid,
                                                    r = e.bidderRequest,
                                                    i = e.auctionId,
                                                    o = r.start,
                                                    a = N({}, n, {
                                                        auctionId: i,
                                                        responseTimestamp: Object(w.timestamp)(),
                                                        requestTimestamp: o,
                                                        cpm: parseFloat(n.cpm) || 0,
                                                        bidder: n.bidderCode,
                                                        adUnitCode: t
                                                    });
                                                a.timeToRespond = a.responseTimestamp - a.requestTimestamp, P.emit(M.EVENTS.BID_ADJUSTMENT, a);
                                                var c = r.bids && U()(r.bids, function (e) {
                                                        return e.adUnitCode == t
                                                    }),
                                                    u = c && c.renderer;
                                                u && u.url && (a.renderer = C.a.install({
                                                    url: u.url
                                                }), a.renderer.setRender(u.render));
                                                var s = j.b.getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                                                    d = Object(_.a)(a.cpm, "object" === R(s) ? s : j.b.getConfig("customPriceBucket"), j.b.getConfig("currency.granularityMultiplier"));
                                                return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                            }({
                                                adUnitCode: e,
                                                bid: t,
                                                bidderRequest: this,
                                                auctionId: r.getAuctionId()
                                            });
                                            "video" === n.mediaType ? function (e, t, n, r) {
                                                var i = !0,
                                                    o = Object(w.getBidRequest)(t.requestId, [n]),
                                                    a = o && Object(w.deepAccess)(o, "mediaTypes.video"),
                                                    c = a && Object(w.deepAccess)(a, "context");
                                                j.b.getConfig("cache.url") && c !== B.a && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, J(e, t, r, o)));
                                                i && (K(e, t), r())
                                            }(r, n, this, a) : (K(r, n), a())
                                        },
                                        adapterDone: function () {
                                            n.add(this), t = r.getBidRequests().every(function (e) {
                                                return n.has(e)
                                            }), this.bids.forEach(function (e) {
                                                o[e.bidId] || (r.addNoBid(e), P.emit(M.EVENTS.NO_BID, e))
                                            }), t && 0 === i && e()
                                        }
                                    }
                                }(O, e);
                                k.callBids(f, t, function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    H.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }, r.adapterDone, {
                                    request: function (e, t) {
                                        o(F, t), o(n, e), z[e] || (z[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < n[e] && (z[e].SRA = !1)
                                    },
                                    done: function (e) {
                                        F[e]--, V[0] && i(V[0]) && V.shift()
                                    }
                                }, m, I)
                            }
                        };
                        i(r) || (D.logWarn("queueing auction due to limited endpoint capacity"), V.push(r))
                    }

                    function i(e) {
                        var r = !0,
                            i = j.b.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some(function (e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === M.S2S.SRC ? "s2s" : e.bidderCode;
                            return z[n] && (!1 === z[n].SRA && (t = Math.min(e.bids.length, i)), F[z[n].origin] + t > i && (r = !1)), !r
                        }), r && e.run(), r
                    }

                    function o(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function (e) {
                    S = S.concat(e), k.callBidWonBidder(e.bidder, e, d)
                },
                setBidTargeting: function (e) {
                    k.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function () {
                    return S
                },
                getTimeout: function () {
                    return m
                },
                getAuctionId: function () {
                    return v
                },
                getAuctionStatus: function () {
                    return u
                },
                getAdUnits: function () {
                    return f
                },
                getAdUnitCodes: function () {
                    return p
                },
                getBidRequests: function () {
                    return g
                },
                getBidsReceived: function () {
                    return b
                },
                getNoBids: function () {
                    return y
                }
            }
        }, n.d(t, "c", function () {
            return H
        }), t.f = u, t.d = K, n.d(t, "e", function () {
            return J
        }), t.g = d;
        var w = n(0),
            s = n(10),
            _ = n(41),
            a = n(28),
            o = n(62),
            C = n(12),
            j = n(3),
            r = n(25),
            i = n(13),
            c = n(11),
            U = n.n(c),
            B = n(49);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function N() {
            return (N = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var x = r.a.syncUsers,
            D = n(0),
            k = n(7).default,
            P = n(8),
            M = n(4),
            q = "started",
            G = "inProgress",
            W = "completed";
        P.on(M.EVENTS.BID_ADJUSTMENT, function (e) {
            ! function (e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, N({}, e))
                } catch (e) {
                    D.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var L = 4,
            F = {},
            z = {},
            V = [];
        var H = Object(i.b)("async", function (e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse");

        function u(e, t) {
            t.timeToRespond > e.getTimeout() + j.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function K(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function (e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function (t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = U()(e.bids, function (e) {
                        return e.adUnitCode === t.adUnitCode
                    });
                    n = function (e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = d(t.mediaType, e);
                            f(r, o, t), e && i[e] && i[e][M.JSON_MAPPING.ADSERVER_TARGETING] && (f(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = N({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r)
                }
                t.adserverTargeting = N(t.adserverTargeting || {}, n)
            }(t, r), P.emit(M.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), u(e, t)
        }
        var J = Object(i.b)("async", function (n, r, i, e) {
            Object(o.b)([r], function (e, t) {
                e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), u(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), u(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), K(n, r), i())
            })
        }, "callPrebidCache");

        function d(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function (e) {
                        return t(e)
                    } : function (e) {
                        return Object(w.getValue)(e, t)
                    }
                }
            }
            var r = M.TARGETING_KEYS,
                i = j.b.getConfig("mediaTypePriceGranularity.".concat(e)),
                o = "string" == typeof e && i ? "string" == typeof i ? i : "custom" : j.b.getConfig("priceGranularity"),
                a = pbjs.bidderSettings;
            if (a[M.JSON_MAPPING.BD_SETTING_STANDARD] || (a[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] || (a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [n(r.BIDDER, "bidderCode"), n(r.AD_ID, "adId"), n(r.PRICE_BUCKET, function (e) {
                    return o === M.GRANULARITY_OPTIONS.AUTO ? e.pbAg : o === M.GRANULARITY_OPTIONS.DENSE ? e.pbDg : o === M.GRANULARITY_OPTIONS.LOW ? e.pbLg : o === M.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : o === M.GRANULARITY_OPTIONS.HIGH ? e.pbHg : o === M.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }), n(r.SIZE, "size"), n(r.DEAL, "dealId"), n(r.SOURCE, "source"), n(r.FORMAT, "mediaType")]), "video" === e) {
                var c = a[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING];
                if ([r.UUID, r.CACHE_ID].forEach(function (t) {
                        void 0 === U()(c, function (e) {
                            return e.key === t
                        }) && c.push(n(t, "videoCacheKey"))
                    }), j.b.getConfig("cache.url") && (!t || !1 !== D.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(j.b.getConfig("cache.url"));
                    void 0 === U()(c, function (e) {
                        return e.key === r.CACHE_HOST
                    }) && c.push(n(r.CACHE_HOST, function (e) {
                        return D.deepAccess(e, "adserverTargeting.".concat(r.CACHE_HOST)) ? e.adserverTargeting[r.CACHE_HOST] : u.hostname
                    }))
                }
            }
            return a[M.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function f(r, i, o) {
            var e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), D._each(e, function (e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    D.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== M.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function Y(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    37: function (e, t, n) {
        "use strict";
        t.a = function () {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    38: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d
        });
        var r = n(0),
            u = n(36),
            i = n(11),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function (t) {
            var e = o()(s, function (e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function () {
            return s.map(function (e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }, c.getBidsRequested = function () {
            return s.map(function (e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }, c.getNoBids = function () {
            return s.map(function (e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }, c.getBidsReceived = function () {
            return s.map(function (e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function (e) {
                return e
            })
        }, c.getAdUnits = function () {
            return s.map(function (e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function () {
            return s.map(function (e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function (e) {
            var t = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                a = e.auctionId,
                c = Object(u.h)({
                    adUnits: t,
                    adUnitCodes: n,
                    callback: r,
                    cbTimeout: i,
                    labels: o,
                    auctionId: a
                });
            return function (e) {
                s.push(e)
            }(c), c
        }, c.findBidByAdId = function (t) {
            return o()(s.map(function (e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function (e) {
                return e.adId === t
            })
        }, c.getStandardBidderAdServerTargeting = function () {
            return Object(u.g)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function (e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, function (e) {
                    return e.getAuctionId() === n.auctionId
                });
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function () {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    39: function (e, t, n) {
        var l = n(24),
            p = n(71),
            g = n(72),
            b = n(26),
            y = n(33),
            v = n(73),
            h = {},
            m = {};
        (t = e.exports = function (e, t, n, r, i) {
            var o, a, c, u, s = i ? function () {
                    return e
                } : v(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = y(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = p(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    4: function (e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered"
            }
        }
    },
    40: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t = e;
            return {
                callBids: function () {},
                setBidderCode: function (e) {
                    t = e
                },
                getBidderCode: function () {
                    return t
                }
            }
        }
    },
    41: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return l
        }), n.d(t, "b", function () {
            return g
        });
        var r = n(11),
            a = n.n(r),
            i = n(0),
            s = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : p(e, o, n),
                med: "" === r ? "" : p(e, c, n),
                high: "" === r ? "" : p(e, u, n),
                auto: "" === r ? "" : p(e, f, n),
                dense: "" === r ? "" : p(e, d, n),
                custom: "" === r ? "" : p(e, t, n)
            }
        }

        function p(n, e, r) {
            var i = "";
            if (!g(e)) return i;
            var o = e.buckets.reduce(function (e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                t = a()(e.buckets, function (e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                });
            return t && (i = function (e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    c = (e * a - o * a) / (i * a),
                    u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            }(n, t, r)), i
        }

        function g(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function (e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            }), t
        }
    },
    42: function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    43: function (e, t, n) {
        var m = n(24),
            S = n(56),
            E = n(44),
            A = n(33),
            r = n(83);
        e.exports = function (f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                b = 4 == f,
                y = 6 == f,
                v = 5 == f || y,
                h = e || r;
            return function (e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((v || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (b) return !1;
                return y ? -1 : g || b ? b : d
            }
        }
    },
    44: function (e, t, n) {
        var r = n(32);
        e.exports = function (e) {
            return Object(r(e))
        }
    },
    45: function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    46: function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    47: function (e, t, n) {
        var r = n(56),
            i = n(32);
        e.exports = function (e) {
            return r(i(e))
        }
    },
    48: function (e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", function () {
            return i
        });
        var c = n(0);

        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = function () {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    }(),
                    t = function () {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    }();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function () {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = function (e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c = c || r;
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        }(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    49: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return c
        }), t.c = function (e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i)
        }, n.d(t, "b", function () {
            return u
        });
        n(7);
        var o = n(0),
            i = n(3),
            r = n(9),
            a = (n.n(r), n(13)),
            c = "outstream";
        var u = Object(a.b)("sync", function (e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }, "checkVideoBidSetup")
    },
    5: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }), t.b = i;
        var l = n(10),
            p = n(3);

        function g() {
            return (g = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = n(0),
            v = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function () {
                            y.logMessage("xhr success")
                        },
                        error: function (e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function () {
                            if (i.readyState === v) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, p.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function () {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        g(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), p.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, function (e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    50: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function (t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, function () {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            })) : u(t, e)
        };
        var r = n(9),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function () {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function () {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    51: function (e, t, n) {
        "use strict";

        function m() {
            return this
        }
        var S = n(58),
            E = n(15),
            A = n(136),
            T = n(21),
            O = n(29),
            I = n(137),
            w = n(53),
            _ = n(142),
            C = n(14)("iterator"),
            j = !([].keys && "next" in [].keys()),
            U = "values";
        e.exports = function (e, t, n, r, i, o, a) {
            I(n, t, r);

            function c(e) {
                if (!j && e in g) return g[e];
                switch (e) {
                    case "keys":
                    case U:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = i == U,
                p = !1,
                g = e.prototype,
                b = g[C] || g["@@iterator"] || i && g[i],
                y = b || c(i),
                v = i ? l ? c("entries") : y : void 0,
                h = "Array" == t && g.entries || b;
            if (h && (d = _(h.call(new e))) !== Object.prototype && d.next && (w(d, f, !0), S || "function" == typeof d[C] || T(d, C, m)), l && b && b.name !== U && (p = !0, y = function () {
                    return b.call(this)
                }), S && !a || !j && !p && g[C] || T(g, C, y), O[t] = y, O[f] = m, i)
                if (u = {
                        values: l ? y : c(U),
                        keys: o ? y : c("keys"),
                        entries: v
                    }, a)
                    for (s in u) s in g || A(g, s, u[s]);
                else E(E.P + E.F * (j || p), t, u);
            return u
        }
    },
    52: function (e, t, n) {
        var r = n(57)("keys"),
            i = n(46);
        e.exports = function (e) {
            return r[e] || (r[e] = i(e))
        }
    },
    53: function (e, t, n) {
        var r = n(20).f,
            i = n(27),
            o = n(14)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    54: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    55: function (e, t, n) {
        var r = n(18),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {}
        }
    },
    56: function (e, t, n) {
        var r = n(31);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    57: function (e, t, n) {
        var r = n(16),
            i = n(19),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(58) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    58: function (e, t) {
        e.exports = !0
    },
    59: function (e, t, n) {
        var u = n(47),
            s = n(33),
            d = n(87);
        e.exports = function (c) {
            return function (e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        }
    },
    60: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function (e) {
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function (e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: f.every(function (e) {
                        return "banner" !== e
                    }) || f.some(function (e) {
                        return "banner" === e
                    }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function (e) {
                        return s.labels[e]
                    }) || n.some(function (e) {
                        return g()(a, e)
                    })) || i && n.reduce(function (e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }, !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(9),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function y(e) {
            return e.reduce(function (n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (t) {
                        return (r[t] || []).forEach(function (e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function (e) {
            return function (e) {
                b = e
            }(e.sizeConfig)
        })
    },
    61: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function (e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
            },
            getCounter: function (e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
            }
        }
    },
    62: function (e, t, n) {
        "use strict";
        t.b = function (e, t) {
            var n = {
                puts: e.map(o)
            };
            Object(r.a)(i.b.getConfig("cache.url"), function (n) {
                return {
                    success: function (e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function (e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function (e) {
            return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(5),
            i = n(3);

        function o(e) {
            var t = {
                type: "xml",
                value: e.vastXml ? e.vastXml : function (e, t) {
                    var n = t ? "<![CDATA[".concat(t, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
        }
    },
    628: function (e, t, n) {
        e.exports = n(63)
    },
    63: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", function () {
            return G
        });
        var r = n(37),
            c = n(0),
            i = n(131),
            o = n(25),
            a = n(50),
            d = n(3),
            v = n(38),
            f = n(64),
            u = n(13),
            s = n(132),
            l = n(9),
            p = n.n(l),
            g = n(61),
            h = n(12),
            b = n(23);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            E = n(4),
            A = n(0),
            T = n(7).default,
            O = n(8),
            I = o.a.triggerUserSyncs,
            w = E.EVENTS,
            _ = w.ADD_AD_UNITS,
            C = w.BID_WON,
            j = w.REQUEST_BIDS,
            U = w.SET_TARGETING,
            B = w.AD_RENDER_FAILED,
            R = E.AD_RENDER_FAILED_REASON,
            N = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            x = R.NO_AD,
            D = R.EXCEPTION,
            k = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function (e) {
                    var t = v.a.getBidsRequested().map(function (e) {
                        return e.bids.map(function (e) {
                            return e.adUnitCode
                        })
                    }).reduce(c.flatten).filter(c.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.23.0", A.logInfo("Prebid.js v2.23.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", function (e) {
            return e.forEach(function (e) {
                var t = e.mediaTypes,
                    n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function (e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            })) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            }), e
        }, "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map(function (e) {
                return e.adUnitCode
            }).filter(c.uniques).map(function (t) {
                return n.filter(function (e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function (e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function (e) {
                return function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e[0].adUnitCode, {
                    bids: e
                })
            }).reduce(function (e, t) {
                return m(e, t)
            }, {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), A.logError(t), O.emit(B, r)
        }

        function F(e) {
            e.forEach(function (e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        S.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t)
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function (e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function (e) {
            return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function () {
            return A.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function () {
            return A.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function (t) {
            return {
                bids: v.a.getBidsReceived().filter(function (e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function (e, t) {
            if (A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                    Object.keys(n[t]).forEach(function (e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    })
                }), O.emit(U, n)
            } else A.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function (e) {
            A.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(e), O.emit(U, f.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page")
        }, S.renderAd = function (e, t) {
            if (A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(h.c)(u)) Object(h.b)(u, n);
                    else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(N, d, n)
                    } else if (o) {
                        if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                            var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                            f && parseInt(f, 10) < 67 && e.open("text/html", "replace")
                        }
                        e.write(o), e.close(), q(e, i, r), A.callBurl(n)
                    } else if (c) {
                        var l = A.createInvisibleIframe();
                        l.height = r, l.width = i, l.style.display = "inline", l.style.overflow = "hidden", l.src = c, A.insertElement(l, e, "body"), q(e, i, r), A.callBurl(n)
                    } else {
                        var p = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(x, p, n)
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(k, g)
                }
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(D, b)
            } else {
                var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, y)
            }
        }, S.removeAdUnit = function (e) {
            (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [e]).forEach(function (e) {
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            O.emit(j);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function (e) {
                    return p()(i, e.code)
                }) : i = r && r.map(function (e) {
                    return e.code
                }), (r = G(r)).forEach(function (i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function (e) {
                            return e.bidder
                        }),
                        a = T.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function (e) {
                            return !p()(n, e)
                        }) : e;
                    i.transactionId = A.generateUUID(), r.forEach(function (t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function (e) {
                            return p()(r, e)
                        }) || (A.logWarn(A.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
                            return e.bidder !== t
                        }))
                    }), g.a.incrementCounter(i.code)
                }), r && 0 !== r.length) {
                var u = v.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function (e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids(), u
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e)
            }
        }), S.addAdUnits = function (e) {
            A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === y(e) && S.adUnits.push(e), O.emit(_)
        }, S.onEvent = function (e, t, n) {
            A.logInfo("Invoking pbjs.onEvent", arguments), A.isFn(t) ? !n || M[e].call(null, n) ? O.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function (e, t, n) {
            A.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function (e, t) {
            A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function (e) {
            A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function (e) {
            return A.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function (e, t, n) {
            A.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function (e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function (e, t) {
            A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function () {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function () {
            return v.a.getBidsReceived().filter(function (e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function (e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function (t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId
            }) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.que.push(function () {
            return Object(i.a)()
        }), S.cmd.push = function (e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack)
            } else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function () {
            u.b.ready(), F(S.que), F(S.cmd)
        }, t.default = S
    },
    64: function (e, t, n) {
        "use strict";
        t.a = S, n.d(t, "b", function () {
            return I
        });
        var s = n(0),
            o = n(3),
            a = n(28),
            r = n(38),
            i = n(60),
            c = n(2),
            u = n(9),
            d = n.n(u);

        function f(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function l() {
            return (l = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var g = n(0),
            b = n(4),
            y = [],
            v = Object.keys(b.TARGETING_KEYS).map(function (e) {
                return b.TARGETING_KEYS[e]
            }),
            h = function (e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(s.timestamp)()
            },
            m = function (e) {
                return e && (e.status && !d()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function S(e, n) {
            var r = [],
                i = Object(s.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach(function (e) {
                var t = Object(s.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach(function (e) {
                    return r.push(t[e].reduce(n))
                })
            }), r
        }

        function E(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
        }
        var A, T, O, I = (A = r.a, O = {}, (T = {}).setLatestAuctionForAdUnit = function (e, t) {
            O[e] = t
        }, T.resetPresetTargeting = function (e) {
            if (Object(s.isGptPubadsDefined)()) {
                var t = w(e),
                    r = A.getAdUnits().filter(function (e) {
                        return d()(t, e.code)
                    });
                window.googletag.pubads().getSlots().forEach(function (n) {
                    y.forEach(function (t) {
                        r.forEach(function (e) {
                            e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                        })
                    })
                })
            }
        }, T.resetPresetTargetingAST = function (e) {
            w(e).forEach(function (e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var n = Object.keys(t.keywords),
                        r = {};
                    n.forEach(function (e) {
                        d()(y, e.toLowerCase()) || (r[e] = t.keywords[e])
                    }), window.apntag.modifyTag(e, {
                        keywords: r
                    })
                }
            })
        }, T.getAllTargeting = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _(),
                n = w(e),
                r = function (e, t) {
                    var n = T.getWinningBids(e, t),
                        r = C();
                    return n = n.map(function (o) {
                        return p({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                        }).reduce(function (e, t) {
                            var n = [o.adserverTargeting[t]],
                                r = p({}, t.substring(0, 20), n);
                            if (t !== b.TARGETING_KEYS.DEAL) return [].concat(f(e), [r]);
                            var i = p({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                            return [].concat(f(e), [r, i])
                        }, []))
                    })
                }(n, t).concat(function (t, e) {
                    return e.filter(function (e) {
                        return d()(t, e.adUnitCode)
                    }).map(function (e) {
                        return l({}, e)
                    }).reduce(j, []).map(B).filter(function (e) {
                        return e
                    })
                }(n, t)).concat(o.b.getConfig("enableSendAllBids") ? function (e, t) {
                    var n = v.concat(a.a);
                    return S(t, s.getHighestCpm).map(function (t) {
                        if (t.adserverTargeting && e && (g.isArray(e) && d()(e, t.adUnitCode) || "string" == typeof e && t.adUnitCode === e)) return p({}, t.adUnitCode, function (t, e) {
                            return e.map(function (e) {
                                return p({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
                            })
                        }(t, n.filter(function (e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function (e) {
                        return e
                    })
                }(n, t) : []);
            r.map(function (t) {
                Object.keys(t).map(function (e) {
                    t[e].map(function (e) {
                        -1 === y.indexOf(Object.keys(e)[0]) && (y = Object.keys(e).concat(y))
                    })
                })
            }), r = function (e) {
                return e.map(function (e) {
                    return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                        return p({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    }).reduce(function (e, t) {
                        return l(t, e)
                    }, {}))
                }).reduce(function (e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = l({}, e[n], t[n]), e
                }, {})
            }(r);
            var i = o.b.getConfig("targetingControls.auctionKeyMaxChars");
            return i && (Object(s.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(i, " characters.  Running checks on auction keys...")), r = function (e, c) {
                var u = Object(s.deepClone)(e);
                return Object.keys(u).map(function (e) {
                    return {
                        adUnitCode: e,
                        adUnitTargeting: u[e]
                    }
                }).sort(E).reduce(function (e, t, n, r) {
                    var i = function (n) {
                        return Object.keys(n).reduce(function (e, t) {
                            return e + "".concat(t, "%3d").concat(encodeURIComponent(n[t]), "%26")
                        }, "")
                    }(t.adUnitTargeting);
                    n + 1 === r.length && (i = i.slice(0, -3));
                    var o = t.adUnitCode,
                        a = i.length;
                    return a <= c ? (c -= a, Object(s.logInfo)("AdUnit '".concat(o, "' auction keys comprised of ").concat(a, " characters.  Deducted from running threshold; new limit is ").concat(c), u[o]), e[o] = u[o]) : Object(s.logWarn)("The following keys for adUnitCode '".concat(o, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(a, ", the current allotted amount was ").concat(c, ".\n"), u[o]), n + 1 === r.length && 0 === Object.keys(e).length && Object(s.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                }, {})
            }(r, i)), n.forEach(function (e) {
                r[e] || (r[e] = {})
            }), r
        }, T.setTargetingForGPT = function (i, e) {
            window.googletag.pubads().getSlots().forEach(function (r) {
                Object.keys(i).filter(e ? e(r) : Object(s.isAdUnitCodeMatchingSlot)(r)).forEach(function (n) {
                    return Object.keys(i[n]).forEach(function (t) {
                        var e = i[n][t].split(",");
                        (e = 1 < e.length ? [e] : e).map(function (e) {
                            return g.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function (e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, T.getWinningBids = function (e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : _(),
                t = w(e);
            return n.filter(function (e) {
                return d()(t, e.adUnitCode)
            }).filter(function (e) {
                return 0 < e.cpm
            }).map(function (e) {
                return e.adUnitCode
            }).filter(s.uniques).map(function (t) {
                return n.filter(function (e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(s.getHighestCpm)
            })
        }, T.setTargetingForAst = function (e) {
            var r = T.getAllTargeting(e);
            try {
                T.resetPresetTargetingAST(e)
            } catch (e) {
                g.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function (n) {
                return Object.keys(r[n]).forEach(function (e) {
                    if (g.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), g.isStr(r[n][e]) || g.isArray(r[n][e])) {
                        var t = {};
                        e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                            overrideKeyValue: !0
                        })
                    }
                })
            })
        }, T.isApntagDefined = function () {
            if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0
        }, T);

        function w(e) {
            return "string" == typeof e ? [e] : g.isArray(e) ? e : A.getAdUnitCodes() || []
        }

        function _() {
            var e = A.getBidsReceived();
            return o.b.getConfig("useBidCache") || (e = e.filter(function (e) {
                return O[e.adUnitCode] === e.auctionId
            })), S(e = e.filter(function (e) {
                return Object(s.deepAccess)(e, "video.context") !== c.a
            }).filter(function (e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(m).filter(h), s.getOldestHighestCpmBid)
        }

        function C() {
            return A.getStandardBidderAdServerTargeting().map(function (e) {
                return e.key
            }).concat(v).filter(s.uniques)
        }

        function j(t, n, e, r) {
            return Object.keys(n.adserverTargeting).filter(U()).forEach(function (e) {
                t.length && t.filter(function (t) {
                    return function (e) {
                        return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                    }
                }(e)).forEach(function (t) {
                    return function (e) {
                        g.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(s.uniques), delete n.adserverTargeting[t]
                    }
                }(e))
            }), t.push(n), t
        }

        function U() {
            var t = C();
            return function (e) {
                return -1 === t.indexOf(e)
            }
        }

        function B(t) {
            return p({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(U()).map(function (e) {
                return p({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }
    },
    65: function (e, t, n) {
        "use strict";
        var r = n(135)(!0);
        n(51)(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    },
    66: function (e, t, r) {
        function i() {}
        var o = r(26),
            a = r(138),
            c = r(67),
            u = r(52)("IE_PROTO"),
            s = "prototype",
            d = function () {
                var e, t = r(55)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(141).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][c[n]];
                return d()
            };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (i[s] = o(e), n = new i, i[s] = null, n[u] = e) : n = d(), void 0 === t ? n : a(n, t)
        }
    },
    67: function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    68: function (e, t) {
        e.exports = function (e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    69: function (e, t, n) {
        var i = n(21);
        e.exports = function (e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    7: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function () {
            return B
        }), t.setS2STestingModule = function (e) {
            O = e
        };
        var h = n(0),
            p = n(60),
            g = n(28),
            u = n(1),
            m = n(5),
            b = n(3),
            r = n(9),
            S = n.n(r),
            i = n(11),
            y = n.n(i),
            v = n(61),
            E = n(48);

        function A(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function T() {
            return (T = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var O, I = n(0),
            w = n(4),
            _ = n(8),
            s = {},
            C = s.bidderRegistry = {},
            d = s.aliasRegistry = {},
            j = {};
        b.b.getConfig("s2sConfig", function (e) {
            j = e.s2sConfig
        });
        var o = {};

        function U(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function (e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
                    return e.bidder === i
                }).reduce(function (e, t) {
                    var n = c.nativeParams || I.deepAccess(c, "mediaTypes.native");
                    n && (t = T({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = T({}, t, Object(h.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : I.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), I.isValidMediaTypes(o) ? t = T({}, t, {
                        mediaTypes: o
                    }) : I.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(T({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: I.deepAccess(o, "banner.sizes") || I.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: v.a.getCounter(c.code)
                    })), e
                }, [])), e
            }, []).reduce(h.flatten, []).filter(function (e) {
                return "" !== e
            })
        }
        var B = {
            consentData: null,
            setConsentData: function (e) {
                B.consentData = e
            },
            getConsentData: function () {
                return B.consentData
            }
        };

        function R() {
            return j && j.enabled && j.testing && O
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (I.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                I.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        s.makeBidRequests = function (e, i, o, a, c) {
            var u = [],
                t = Object(h.getBidderCodes)(e);
            b.b.getConfig("bidderSequence") === b.a && (t = Object(h.shuffle)(t));
            var s = Object(E.b)(),
                n = t,
                r = [];
            if (j.enabled) {
                R() && (r = O.getSourceBidderMap(e)[O.CLIENT]);
                var d = j.bidders;
                n = t.filter(function (e) {
                    return !S()(d, e) || S()(r, e)
                });
                var f = function (e) {
                        var t = j.bidders,
                            n = I.deepClone(e);
                        return n.forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return S()(t, e.bidder) && (!R() || e.finalSource !== O.CLIENT)
                            }).map(function (e) {
                                return e.bid_id = I.getUniqueIdentifierStr(), e
                            })
                        }), n = n.filter(function (e) {
                            return 0 !== e.bids.length
                        })
                    }(e),
                    l = I.generateUUID();
                d.forEach(function (e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: l,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: I.deepClone(f),
                                labels: c,
                                src: w.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: j.timeout,
                            src: w.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                }), f.forEach(function (e) {
                    var t = e.bids.filter(function (t) {
                        return y()(u, function (e) {
                            return y()(e.bids, function (e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), u.forEach(function (e) {
                    e.adUnitsS2SCopy = f.filter(function (e) {
                        return 0 < e.bids.length
                    })
                })
            }
            var p = function (e) {
                var t = I.deepClone(e);
                return t.forEach(function (e) {
                    e.bids = e.bids.filter(function (e) {
                        return !R() || e.finalSource !== O.SERVER
                    })
                }), t = t.filter(function (e) {
                    return 0 !== e.bids.length
                })
            }(e);
            return n.forEach(function (e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: I.deepClone(p),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = C[e];
                r || I.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), B.getConsentData() && u.forEach(function (e) {
                e.gdprConsent = B.getConsentData()
            }), u
        }, s.callBids = function (e, t, r, i, o, a, c) {
            if (t.length) {
                var n = A(t.reduce(function (e, t) {
                        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                    }, [
                        [],
                        []
                    ]), 2),
                    u = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(m.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = j.bidders,
                        l = C[j.adapter],
                        p = s[0].tid,
                        g = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: p,
                            ad_units: g
                        };
                        if (b.ad_units.length) {
                            var y = s.map(function (e) {
                                    return e.start = Object(h.timestamp)(), i.bind(e)
                                }),
                                v = b.ad_units.reduce(function (e, t) {
                                    return e.concat((t.bids || []).reduce(function (e, t) {
                                        return e.concat(t.bidder)
                                    }, []))
                                }, []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function (e) {
                                return S()(v, e)
                            }).join(","))), s.forEach(function (e) {
                                _.emit(w.EVENTS.BID_REQUESTED, e)
                            }), l.callBids(b, s, function (e, t) {
                                var n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }, function () {
                                return y.forEach(function (e) {
                                    return e()
                                })
                            }, d)
                        }
                    }
                }
                u.forEach(function (e) {
                    e.start = Object(h.timestamp)();
                    var t = C[e.bidderCode];
                    I.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(m.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n, c)
                })
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, s.videoAdapters = [], s.registerBidAdapter = function (e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, S()(r, "video") && s.videoAdapters.push(t), S()(r, "native") && g.e.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, s.aliasBidAdapter = function (t, e) {
            if (void 0 === C[e]) {
                var n = C[t];
                if (void 0 === n) {
                    var r = b.b.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && S()(i, e) ? d[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var o, a = function (e) {
                        var t = [];
                        return S()(s.videoAdapters, e) && t.push("video"), S()(g.e, e) && t.push("native"), t
                    }(t);
                    if (n.constructor.prototype != Object.prototype)(o = new n.constructor).setBidderCode(e);
                    else {
                        var c = n.getSpec();
                        o = Object(u.newBidder)(T({}, c, {
                            code: e
                        })), d[e] = t
                    }
                    s.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, s.registerAnalyticsAdapter = function (e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, s.enableAnalytics = function (e) {
            I.isArray(e) || (e = [e]), I._each(e, function (e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, s.getBidAdapter = function (e) {
            return C[e]
        }, s.callTimedOutBidders = function (t, n, r) {
            n = n.map(function (e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = I.groupBy(n, "bidder"), Object.keys(n).forEach(function (e) {
                a(e, "onTimeout", n[e])
            })
        }, s.callBidWonBidder = function (e, t, n) {
            t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, s.callSetTargetingBidder = function (e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = s
    },
    70: function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    71: function (e, t, n) {
        var o = n(26);
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    72: function (e, t, n) {
        var r = n(29),
            i = n(14)("iterator"),
            o = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    73: function (e, t, n) {
        var r = n(74),
            i = n(14)("iterator"),
            o = n(29);
        e.exports = n(16).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    74: function (e, t, n) {
        var i = n(31),
            o = n(14)("toStringTag"),
            a = "Arguments" == i(function () {
                return arguments
            }());
        e.exports = function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    75: function (e, t, n) {
        function r(e) {
            c(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        }
        var i = n(46)("meta"),
            o = n(18),
            a = n(27),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function () {
                return !0
            },
            d = !n(30)(function () {
                return s(Object.preventExtensions({}))
            }),
            f = e.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function (e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, i)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[i].i
                },
                getWeak: function (e, t) {
                    if (!a(e, i)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[i].w
                },
                onFreeze: function (e) {
                    return d && f.NEED && s(e) && !a(e, i) && r(e), e
                }
            }
    },
    76: function (e, t, n) {
        var r = n(18);
        e.exports = function (e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    77: function (e, t, n) {
        "use strict";
        t.a = function (t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(37),
            i = n(0),
            o = Object(r.a)()
    },
    8: function (e, t, n) {
        function r() {
            return (r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function (e) {
                return e
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function (e, t, n) {
            if (function (e) {
                    return u.contains(d, e)
                }(e)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function (e) {
            ! function (e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, function (e, t) {
                        return t
                    }),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function (e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, a.call(arguments, 1))
        }, i.off = function (e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function (e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }) : u._each(i.que, function (e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }), c[e] = i)
        }, i.get = function () {
            return c
        }, i.getEvents = function () {
            var n = [];
            return u._each(l, function (e) {
                var t = r({}, e);
                n.push(t)
            }), n
        }, i)
    },
    80: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(43)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o](function () {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            find: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(34)(o)
    },
    81: function (e, t, n) {
        e.exports = !n(22) && !n(30)(function () {
            return 7 != Object.defineProperty(n(55)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    82: function (e, t, n) {
        var i = n(18);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    83: function (e, t, n) {
        var r = n(84);
        e.exports = function (e, t) {
            return new(r(e))(t)
        }
    },
    84: function (e, t, n) {
        var r = n(18),
            i = n(85),
            o = n(14)("species");
        e.exports = function (e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    85: function (e, t, n) {
        var r = n(31);
        e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
        }
    },
    86: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(59)(!0);
        r(r.P, "Array", {
            includes: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(34)("includes")
    },
    87: function (e, t, n) {
        var r = n(45),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    88: function (e, t) {
        y.SYNC = 1, y.ASYNC = 2, y.QUEUE = 4;
        var p = "fun-hooks",
            n = "function" == typeof Proxy,
            r = Object.freeze({
                useProxy: n,
                ready: 0
            }),
            i = "2,1,0" === [1].reduce(function (e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function (e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            };

        function g(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var b = Object.assign || function (e) {
            return i.call(g(arguments, 1), function (t, n) {
                return n && Object.keys(n).forEach(function (e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function y(c) {
            var u, e = {},
                s = [];

            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function (o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter(function (e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        })).forEach(function (e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = f(r, i, a ? [a, n] : void 0)
                            }
                        }), o = Object.getPrototypeOf(o), t && o;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function d(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return i.call(a, function (t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (u || s.push(function () {
                        i || console.warn(p + ": referenced '" + o + "' but it was never created")
                    }), t[n] = l(function (e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function l(r) {
                var o = [],
                    a = [],
                    c = function () {};
                return {
                    __funHook: {
                        install: function (e, t, n) {
                            this.type = e, this.fn = t, (c = n)(o, a), r && r(t)
                        }
                    },
                    before: function (e, t) {
                        return n.call(this, o, "before", e, t)
                    },
                    after: function (e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function (n) {
                        var e = o.concat(a);
                        return "object" == typeof n && (e = e.filter(function (t) {
                            return Object.keys(n).every(function (e) {
                                return t[e] === n[e]
                            })
                        })), b(e, {
                            remove: function () {
                                return e.forEach(function (e) {
                                    e.remove()
                                }), this
                            }
                        })
                    },
                    removeAll: function () {
                        return this.getHooks().remove()
                    }
                };

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function () {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort(function (e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function f(f, e, t) {
                if (e.__funHook) {
                    if (e.__funHook.type !== f) throw p + ": recreated hookable with different type";
                    return e.__funHook.fn
                }
                var r, n, i = t ? d(t) : l(),
                    o = {
                        get: function (e, t) {
                            return i[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return u || s.push(a), c.useProxy ? n = new Proxy(e, o) : b(n = function () {
                    return o.apply ? o.apply(e, this, g(arguments)) : e.apply(this, arguments)
                }, i), i.__funHook.install(f, n, function (e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function (n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = g(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function () {
                            var e = g(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }, u.apply(null, e), i
                    }) : void 0;

                    function n(e) {
                        d.push(e.hook)
                    }
                    a()
                }), n;

                function a() {
                    !u && ("sync" !== f || c.ready & y.SYNC) && ("async" !== f || c.ready & y.ASYNC) ? "sync" !== f && c.ready & y.QUEUE ? o.apply = function () {
                        var e = arguments;
                        s.push(function () {
                            n.apply(e[1], e[2])
                        })
                    } : o.apply = function () {
                        throw p + ": hooked function not ready"
                    } : o.apply = r
                }
            }
            return (c = b({}, r, c)).ready ? t.ready = function () {
                u = !0,
                    function (e) {
                        for (var t; t = e.shift();) t()
                    }(s)
            } : u = !0, t.get = d, t
        }
        e.exports = y
    },
    89: function (e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    9: function (e, t, n) {
        n(86), e.exports = n(16).Array.includes
    }
});
pbjsChunk([125], {
    405: function (e, r, i) {
        e.exports = i(406)
    },
    406: function (e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), i.d(r, "spec", function () {
            return p
        });
        var o = i(0),
            t = i(1);

        function n(e, r) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, r) {
                var i = [],
                    t = !0,
                    a = !1,
                    d = void 0;
                try {
                    for (var o, n = e[Symbol.iterator](); !(t = (o = n.next()).done) && (i.push(o.value), !r || i.length !== r); t = !0);
                } catch (e) {
                    a = !0, d = e
                } finally {
                    try {
                        t || null == n.return || n.return()
                    } finally {
                        if (a) throw d
                    }
                }
                return i
            }(e, r) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var p = {
            code: "oneVideo",
            ENDPOINT: "//ads.adaptv.advertising.com/rtb/openrtb?ext_id=",
            SYNC_ENDPOINT1: "https://cm.g.doubleclick.net/pixel?google_nid=adaptv_dbm&google_cm&google_sc",
            SYNC_ENDPOINT2: "https://pr-bh.ybp.yahoo.com/sync/adaptv_ortb/{combo_uid}",
            SYNC_ENDPOINT3: "https://sync-tm.everesttech.net/upi/pid/m7y5t93k?redir=https%3A%2F%2Fsync.adap.tv%2Fsync%3Ftype%3Dgif%26key%3Dtubemogul%26uid%3D%24%7BUSER_ID%7D",
            SYNC_ENDPOINT4: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=adaptv&ttd_tpi=1",
            supportedMediaTypes: ["video"],
            isBidRequestValid: function (e) {
                return "oneVideo" === e.bidder && void 0 !== e.params && (void 0 !== e.params.video && void 0 !== e.params.video.playerWidth && void 0 !== e.params.video.playerHeight && void 0 !== e.params.video.mimes && void 0 !== e.params.pubId)
            },
            buildRequests: function (e, r) {
                var i = r ? r.gdprConsent : null;
                return e.map(function (e) {
                    return {
                        method: "POST",
                        url: location.protocol + p.ENDPOINT + e.params.pubId,
                        data: function (e, r) {
                            var i = o.getTopWindowLocation(),
                                t = e.params.site && e.params.site.page ? e.params.site.page : i.href,
                                a = e.params.site && e.params.site.referrer ? e.params.site.referrer : o.getTopWindowReferrer(),
                                d = {
                                    id: o.generateUUID(),
                                    at: 2,
                                    cur: e.cur || "USD",
                                    imp: [{
                                        id: "1",
                                        secure: "https:" === document.location.protocol,
                                        bidfloor: e.params.bidfloor,
                                        video: {
                                            mimes: e.params.video.mimes,
                                            w: e.params.video.playerWidth,
                                            h: e.params.video.playerHeight,
                                            linearity: 1,
                                            protocols: e.params.video.protocols || [2, 5]
                                        },
                                        ext: {
                                            hb: 1
                                        }
                                    }],
                                    site: {
                                        page: t,
                                        ref: a
                                    },
                                    device: {
                                        ua: navigator.userAgent
                                    },
                                    tmax: 200
                                };
                            e.params.video.maxbitrate && (d.imp[0].video.maxbitrate = e.params.video.maxbitrate);
                            e.params.video.maxduration && (d.imp[0].video.maxduration = e.params.video.maxduration);
                            e.params.video.minduration && (d.imp[0].video.minduration = e.params.video.minduration);
                            e.params.video.api && (d.imp[0].video.api = e.params.video.api);
                            e.params.video.delivery && (d.imp[0].video.delivery = e.params.video.delivery);
                            e.params.video.position && (d.imp[0].video.pos = e.params.video.position);
                            e.params.video.playbackmethod && (d.imp[0].video.playbackmethod = e.params.video.playbackmethod);
                            e.params.video.placement && (d.imp[0].ext.placement = e.params.video.placement);
                            e.params.site && e.params.site.id && (d.site.id = e.params.site.id);
                            ! function (e) {
                                return !(!e || !e.gdprApplies)
                            }(r) || (d.regs = {
                                ext: {
                                    gdpr: 1
                                }
                            }, r.consentString && (d.user = {
                                ext: {
                                    consent: r.consentString
                                }
                            }));
                            return d
                        }(e, i),
                        bidRequest: e
                    }
                })
            },
            interpretResponse: function (r, e) {
                var i, t, a, d = e.bidRequest;
                try {
                    i = (r = r.body).seatbid[0].bid[0]
                } catch (e) {
                    r = null
                }
                return r && i && (i.adm || i.nurl) && i.price ? (t = function (e) {
                    var r = o.parseSizesInput(e),
                        i = n(r.length ? r[0].split("x") : [], 2),
                        t = i[0],
                        a = i[1];
                    return {
                        width: parseInt(t, 10) || void 0,
                        height: parseInt(a, 10) || void 0
                    }
                }(d.sizes), a = {
                    requestId: d.bidId,
                    bidderCode: p.code,
                    cpm: i.price,
                    adId: i.adid,
                    creativeId: i.crid,
                    width: t.width,
                    height: t.height,
                    mediaType: "video",
                    currency: r.cur,
                    ttl: 100,
                    netRevenue: !0,
                    adUnitCode: d.adUnitCode
                }, i.nurl ? a.vastUrl = i.nurl : i.adm && (a.vastXml = i.adm), a.renderer = "outstream" === d.mediaTypes.video.context ? function (e) {
                    e.renderer || (e.renderer = {}, e.renderer.url = "https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js", e.renderer.render = function (e) {
                        setTimeout(function () {
                            o2PlayerRender(e)
                        }, 700)
                    })
                }(d) : void 0, a) : (o.logWarn("No valid bids from ".concat(p.code, " bidder")), [])
            },
            getUserSyncs: function (e) {
                if (e.pixelEnabled) return [{
                    type: "image",
                    url: p.SYNC_ENDPOINT1
                }, {
                    type: "image",
                    url: p.SYNC_ENDPOINT2
                }, {
                    type: "image",
                    url: p.SYNC_ENDPOINT3
                }, {
                    type: "image",
                    url: p.SYNC_ENDPOINT4
                }]
            }
        };
        Object(t.registerBidder)(p)
    }
}, [405]);
pbjs.processQueue();