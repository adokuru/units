/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/*!
 * Lazy Load 1.8.0
 * Copyright (c) 2007-2012 Mika Tuupola - http://www.appelsiini.net/projects/lazyload
 * License: MIT
 */

/*
 * Function.prototype.bind shim from:
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

/*!
 * headroom-7b6a3b55.js v0.5.0
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/
 * License: MIT
 */

/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-csstransforms-csstransforms3d-touchevents-mq-prefixed-setclasses-shiv-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/

/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/

/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/

/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

/*! Picturefill - Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

/*
 * Selectr 2.4.13
 * http://mobius.ovh/docs/selectr
 *
 * Released under the MIT license
 */

/*!
 * jQuery Placeholder Plugin v2.3.1
 * https://github.com/mathiasbynens/jquery-placeholder
 * Copyright 2011, 2015 Mathias Bynens
 * MIT license
 */

var requirejs, require, define;
! function(global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, i) {
        return t && eachProp(t, function(t, a) {
            !n && hasProp(e, a) || (i && "string" != typeof t ? (e[a] || (e[a] = {}), mixin(e[a], t, n, i)) : e[a] = t)
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, i) {
        var a = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return a.requireType = e, a.requireModules = i, n && (a.originalError = n), a
    }

    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; e[t]; t += 1)
                if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
                else if (".." === n) {
                if (1 === t && (".." === e[2] || ".." === e[0])) break;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function n(e, n, i) {
            var a, o, r, s, l, c, d, u, h, f, p, m = n && n.split("/"),
                g = m,
                v = k.map,
                y = v && v["*"];
            if (e && "." === e.charAt(0) && (n ? (g = getOwn(k.pkgs, n) ? m = [n] : m.slice(0, m.length - 1), e = g.concat(e.split("/")), t(e), o = getOwn(k.pkgs, a = e[0]), e = e.join("/"), o && e === a + "/" + o.main && (e = a)) : 0 === e.indexOf("./") && (e = e.substring(2))), i && v && (m || y)) {
                for (s = e.split("/"), l = s.length; l > 0; l -= 1) {
                    if (d = s.slice(0, l).join("/"), m)
                        for (c = m.length; c > 0; c -= 1)
                            if ((r = getOwn(v, m.slice(0, c).join("/"))) && (r = getOwn(r, d))) {
                                u = r, h = l;
                                break
                            }
                    if (u) break;
                    !f && y && getOwn(y, d) && (f = getOwn(y, d), p = l)
                }!u && f && (u = f, h = p), u && (s.splice(0, h, u), e = s.join("/"))
            }
            return e
        }

        function i(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function a(e) {
            var t = getOwn(k.paths, e);
            if (t && isArray(t) && t.length > 1) return i(e), t.shift(), x.require.undef(e), x.require([e]), !0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function r(e, t, i, a) {
            var r, s, l, c, d = null,
                u = t ? t.name : null,
                h = e,
                f = !0,
                p = "";
            return e || (f = !1, e = "_@r" + (L += 1)), c = o(e), d = c[0], e = c[1], d && (d = n(d, u, a), s = getOwn(N, d)), e && (d ? p = s && s.normalize ? s.normalize(e, function(e) {
                return n(e, u, a)
            }) : n(e, u, a) : (p = n(e, u, a), c = o(p), d = c[0], p = c[1], i = !0, r = x.nameToUrl(p))), l = !d || s || i ? "" : "_unnormalized" + (D += 1), {
                prefix: d,
                name: p,
                parentMap: t,
                unnormalized: !!l,
                url: r,
                originalName: h,
                isDefine: f,
                id: (d ? d + "!" + p : p) + l
            }
        }

        function s(e) {
            var t = e.id,
                n = getOwn(E, t);
            return n || (n = E[t] = new x.Module(e)), n
        }

        function l(e, t, n) {
            var i = e.id,
                a = getOwn(E, i);
            !hasProp(N, i) || a && !a.defineEmitComplete ? (a = s(e), a.error && "error" === t ? n(a.error) : a.on(t, n)) : "defined" === t && n(N[i])
        }

        function c(e, t) {
            var n = e.requireModules,
                i = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(E, t);
                n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
            }), i || req.onError(e))
        }

        function d() {
            globalDefQueue.length && (apsp.apply(A, [A.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function u(e) {
            delete E[e], delete T[e]
        }

        function h(e, t, n) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function(i, a) {
                var o = i.id,
                    r = getOwn(E, o);
                !r || e.depMatched[a] || n[o] || (getOwn(t, o) ? (e.defineDep(a, N[o]), e.check()) : h(r, t, n))
            }), n[i] = !0)
        }

        function f() {
            var e, t, n, o, r = 1e3 * k.waitSeconds,
                s = r && x.startTime + r < (new Date).getTime(),
                l = [],
                d = [],
                u = !1,
                p = !0;
            if (!y) {
                if (y = !0, eachProp(T, function(n) {
                        if (e = n.map, t = e.id, n.enabled && (e.isDefine || d.push(n), !n.error))
                            if (!n.inited && s) a(t) ? (o = !0, u = !0) : (l.push(t), i(t));
                            else if (!n.inited && n.fetched && e.isDefine && (u = !0, !e.prefix)) return p = !1
                    }), s && l.length) return n = makeError("timeout", "Load timeout for modules: " + l, null, l), n.contextName = x.contextName, c(n);
                p && each(d, function(e) {
                    h(e, {}, {})
                }), s && !o || !u || !isBrowser && !isWebWorker || C || (C = setTimeout(function() {
                    C = 0, f()
                }, 50)), y = !1
            }
        }

        function p(e) {
            hasProp(N, e[0]) || s(r(e[0], null, !0)).init(e[1], e[2])
        }

        function m(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }

        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, x.onScriptLoad, "load", "onreadystatechange"), m(t, x.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (d(); A.length;) {
                if (e = A.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                p(e)
            }
        }
        var y, b, x, w, C, k = {
                waitSeconds: 0,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            E = {},
            T = {},
            S = {},
            A = [],
            N = {},
            j = {},
            L = 1,
            D = 1;
        return w = {
            require: function(e) {
                return e.require ? e.require : e.require = x.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? e.exports : e.exports = N[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        var t = getOwn(k.pkgs, e.map.id);
                        return (t ? getOwn(k.config, e.map.id + "/" + t.main) : getOwn(k.config, e.map.id)) || {}
                    },
                    exports: N[e.map.id]
                }
            }
        }, b = function(e) {
            this.events = getOwn(S, e.id) || {}, this.map = e, this.shim = getOwn(k.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function(e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, x.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    x.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function() {
                var e = this.map.url;
                j[e] || (j[e] = !0, x.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                        i = this.depExports,
                        a = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        a = x.execCb(n, o, i, a)
                                    } catch (t) {
                                        e = t
                                    } else a = x.execCb(n, o, i, a);
                                    if (this.map.isDefine && (t = this.module, t && void 0 !== t.exports && t.exports !== this.exports ? a = t.exports : void 0 === a && this.usingExports && (a = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
                                } else a = o;
                                this.exports = a, this.map.isDefine && !this.ignore && (N[n] = a, req.onResourceLoad && req.onResourceLoad(x, this.map, this.depMaps)), u(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    i = r(e.prefix);
                this.depMaps.push(i), l(i, "defined", bind(this, function(i) {
                    var a, o, d, h = this.map.name,
                        f = this.map.parentMap ? this.map.parentMap.name : null,
                        p = x.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    if (this.map.unnormalized) return i.normalize && (h = i.normalize(h, function(e) {
                        return n(e, f, !0)
                    }) || ""), o = r(e.prefix + "!" + h, this.map.parentMap), l(o, "defined", bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), void((d = getOwn(E, o.id)) && (this.depMaps.push(o), this.events.error && d.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), d.enable()));
                    a = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), a.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(E, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && u(e.map.id)
                        }), c(e)
                    }), a.fromText = bind(this, function(n, i) {
                        var o = e.name,
                            l = r(o),
                            d = useInteractive;
                        i && (n = i), d && (useInteractive = !1), s(l), hasProp(k.config, t) && (k.config[o] = k.config[t]);
                        try {
                            req.exec(n)
                        } catch (e) {
                            return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
                        }
                        d && (useInteractive = !0), this.depMaps.push(l), x.completeLoad(o), p([o], a)
                    }), i.load(e.name, p, a, k)
                })), x.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                T[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, i, a;
                    if ("string" == typeof e) {
                        if (e = r(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, a = getOwn(w, e.id)) return void(this.depExports[t] = a(this));
                        this.depCount += 1, l(e, "defined", bind(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && l(e, "error", bind(this, this.errback))
                    }
                    n = e.id, i = E[n], hasProp(w, n) || !i || i.enabled || x.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(E, e.id);
                    t && !t.enabled && x.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, x = {
            config: k,
            contextName: e,
            registry: E,
            defined: N,
            urlFetched: j,
            defQueue: A,
            Module: b,
            makeModuleMap: r,
            nextTick: req.nextTick,
            onError: c,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = k.pkgs,
                    n = k.shim,
                    i = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    i[t] ? "map" === t ? (k.map || (k.map = {}), mixin(k[t], e, !0, !0)) : mixin(k[t], e, !0) : k[t] = e
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = x.makeShimExports(e)), n[t] = e
                }), k.shim = n), e.packages && (each(e.packages, function(e) {
                    var n;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, n = e.location, t[e.name] = {
                        name: e.name,
                        location: n || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), k.pkgs = t), eachProp(E, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = r(t))
                }), (e.deps || e.callback) && x.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, i) {
                function a(n, o, l) {
                    var d, u, h;
                    return i.enableBuildCallback && o && isFunction(o) && (o.__requireJsBuild = !0), "string" == typeof n ? isFunction(o) ? c(makeError("requireargs", "Invalid require call"), l) : t && hasProp(w, n) ? w[n](E[t.id]) : req.get ? req.get(x, n, t, a) : (u = r(n, t, !1, !0), d = u.id, hasProp(N, d) ? N[d] : c(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), x.nextTick(function() {
                        v(), h = s(r(null, t)), h.skipMap = i.skipMap, h.init(n, o, l, {
                            enabled: !0
                        }), f()
                    }), a)
                }
                return i = i || {}, mixin(a, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var i, a = e.lastIndexOf("."),
                            o = e.split("/")[0],
                            r = "." === o || ".." === o;
                        return -1 !== a && (!r || a > 1) && (i = e.substring(a, e.length), e = e.substring(0, a)), x.nameToUrl(n(e, t && t.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return hasProp(N, r(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = r(e, t, !1, !0).id, hasProp(N, e) || hasProp(E, e)
                    }
                }), t || (a.undef = function(e) {
                    d();
                    var n = r(e, t, !0),
                        i = getOwn(E, e);
                    delete N[e], delete j[n.url], delete S[e], i && (i.events.defined && (S[e] = i.events), u(e))
                }), a
            },
            enable: function(e) {
                getOwn(E, e.id) && s(e).enable()
            },
            completeLoad: function(e) {
                var t, n, i, o = getOwn(k.shim, e) || {},
                    r = o.exports;
                for (d(); A.length;) {
                    if (n = A.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    p(n)
                }
                if (i = getOwn(E, e), !t && !hasProp(N, e) && i && !i.inited) {
                    if (!(!k.enforceDefine || r && getGlobal(r))) return a(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                    p([e, o.deps || [], o.exportsFn])
                }
                f()
            },
            nameToUrl: function(e, t, n) {
                var i, a, o, r, s, l, c, d, u;
                if (req.jsExtRegExp.test(e)) d = e + (t || "");
                else {
                    for (i = k.paths, a = k.pkgs, s = e.split("/"), l = s.length; l > 0; l -= 1) {
                        if (c = s.slice(0, l).join("/"), o = getOwn(a, c), u = getOwn(i, c)) {
                            isArray(u) && (u = u[0]), s.splice(0, l, u);
                            break
                        }
                        if (o) {
                            r = e === o.name ? o.location + "/" + o.main : o.location, s.splice(0, l, r);
                            break
                        }
                    }
                    d = s.join("/"), d += t || (/\?/.test(d) || n ? "" : ".js"), d = ("/" === d.charAt(0) || d.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + d
                }
                return k.urlArgs ? d + (-1 === d.indexOf("?") ? "?" : "&") + k.urlArgs : d
            },
            load: function(e, t) {
                req.load(x, e, t)
            },
            execCb: function(e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    x.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                if (!a(t.id)) return c(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, x.require = x.makeRequire(), x
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.6",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || !navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, i) {
            var a, o, r = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (r = o.context), a = getOwn(contexts, r), a || (a = contexts[r] = req.s.newContext(r)), o && a.configure(o), a.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], (baseElement = document.getElementsByTagName("base")[0]) && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.load = function(e, t, n) {
            var i, a = e && e.config || {};
            if (isBrowser) return i = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), i.type = a.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker) try {
                importScripts(n), e.completeLoad(t)
            } catch (i) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
            }
        }, isBrowser && eachReverse(scripts(), function(e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function(e, t, n) {
            var i, a;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript()) && (e || (e = i.getAttribute("data-requiremodule")), a = contexts[i.getAttribute("data-requirecontext")]), (a ? a.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this), define("requireLib", function() {}), require.config({
        paths: {
            adjusttext: "lib/adjusttext4",
            ajaxforms: "lib/jquery.form",
            backbone: "lib/backbone",
            effects: "module/globals/effects",
            ellipsis: "lib/ellipsis",
            fitvids: "lib/jquery.fitvids",
            gsap: "lib/gsap/gsap.min",
            headroom: "lib/jquery.headroom",
            heroSlideshow: "module/globals/heroslideshow",
            historyjs: "lib/jquery.history",
            jquery: "lib/jquery",
            lazyloading: "lib/jquery.lazyload",
            modal: "lib/modal",
            modernizr: "lib/modernizr",
            placeholderShim: "lib/jquery.html5-placeholder-shim",
            projects: "lib/projects.bb",
            selectr: "lib/selectr",
            slideshow: "module/globals/slideshow",
            slots: "module/globals/slots",
            sticky: "lib/jquery.sticky",
            stupidtable: "lib/stupidtable",
            tablesorter: "lib/jquery.tablesorter",
            underscore: "lib/underscore",
            Controller: "module/controller"
        },
        shim: {
            adjusttext: {
                deps: ["lib/polyfills/rAF"]
            },
            ajaxform: {
                deps: ["jquery"]
            },
            backbone: {
                deps: ["underscore", "jquery", "ajaxforms", "lazyloading"]
            },
            headroom: {
                deps: ["jquery", "lib/polyfills/bind", "lib/polyfills/rAF", "lib/headroom"]
            },
            lazyloading: {
                deps: ["jquery"]
            },
            projects: {
                deps: ["backbone", "jquery"]
            },
            placeholderShim: {
                deps: ["jquery"]
            },
            sticky: {
                deps: ["jquery"]
            },
            tablesorter: {
                deps: ["jquery"]
            },
            underscore: {
                exports: "_",
                deps: ["jquery"]
            }
        },
        config: {
            debug: !0
        },
        packages: [{
            name: "GLOBALS",
            location: "module/globals",
            main: "package"
        }]
    }), define("config", function() {}),
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = oe.type(e);
            return "function" !== n && !oe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function i(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return oe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function(e) {
                return oe.inArray(e, t) >= 0 !== n
            })
        }

        function a(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = xe[e] = {};
            return oe.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function r() {
            me.addEventListener ? (me.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (me.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (r(), oe.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Te, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? oe.parseJSON(n) : n)
                    } catch (e) {}
                    oe.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function d(e, t, n, i) {
            if (oe.acceptData(e)) {
                var a, o, r = oe.expando,
                    s = e.nodeType,
                    l = s ? oe.cache : e,
                    c = s ? e[r] : e[r] && r;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[r] = X.pop() || oe.guid++ : r), l[c] || (l[c] = s ? {} : {
                    toJSON: oe.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = oe.extend(l[c], t) : l[c].data = oe.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[oe.camelCase(t)] = n), "string" == typeof t ? null == (a = o[t]) && (a = o[oe.camelCase(t)]) : a = o, a
            }
        }

        function u(e, t, n) {
            if (oe.acceptData(e)) {
                var i, a, o = e.nodeType,
                    r = o ? oe.cache : e,
                    s = o ? e[oe.expando] : oe.expando;
                if (r[s]) {
                    if (t && (i = n ? r[s] : r[s].data)) {
                        oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), a = t.length;
                        for (; a--;) delete i[t[a]];
                        if (n ? !c(i) : !oe.isEmptyObject(i)) return
                    }(n || (delete r[s].data, c(r[s]))) && (o ? oe.cleanData([e], !0) : ie.deleteExpando || r != r.window ? delete r[s] : r[s] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function f() {
            return !1
        }

        function p() {
            try {
                return me.activeElement
            } catch (e) {}
        }

        function m(e) {
            var t = Me.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, a = 0,
                o = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[a]); a++) !t || oe.nodeName(i, t) ? o.push(i) : oe.merge(o, g(i, t));
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], o) : o
        }

        function v(e) {
            Le.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = Ye.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
        }

        function C(e, t) {
            if (1 === t.nodeType && oe.hasData(e)) {
                var n, i, a, o = oe._data(e),
                    r = oe._data(t, o),
                    s = o.events;
                if (s) {
                    delete r.handle, r.events = {};
                    for (n in s)
                        for (i = 0, a = s[n].length; a > i; i++) oe.event.add(t, n, s[n][i])
                }
                r.data && (r.data = oe.extend({}, r.data))
            }
        }

        function k(e, t) {
            var n, i, a;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[oe.expando]) {
                    a = oe._data(t);
                    for (i in a.events) oe.removeEvent(t, i, a.handle);
                    t.removeAttribute(oe.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function E(t, n) {
            var i = oe(n.createElement(t)).appendTo(n.body),
                a = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : oe.css(i[0], "display");
            return i.detach(), a
        }

        function T(e) {
            var t = me,
                n = Ze[e];
            return n || (n = E(e, t), "none" !== n && n || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Je.detach()), Ze[e] = n), n
        }

        function S(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function A(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = ht.length; a--;)
                if ((t = ht[a] + n) in e) return t;
            return i
        }

        function N(e, t) {
            for (var n, i, a, o = [], r = 0, s = e.length; s > r; r++) i = e[r], i.style && (o[r] = oe._data(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (o[r] = oe._data(i, "olddisplay", T(i.nodeName)))) : o[r] || (a = Ne(i), (n && "none" !== n || !a) && oe._data(i, "olddisplay", a ? n : oe.css(i, "display"))));
            for (r = 0; s > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
            return e
        }

        function j(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function L(e, t, n, i, a) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += oe.css(e, n + Ae[o], !0, a)), i ? ("content" === n && (r -= oe.css(e, "padding" + Ae[o], !0, a)), "margin" !== n && (r -= oe.css(e, "border" + Ae[o] + "Width", !0, a))) : (r += oe.css(e, "padding" + Ae[o], !0, a), "padding" !== n && (r += oe.css(e, "border" + Ae[o] + "Width", !0, a)));
            return r
        }

        function D(e, t, n) {
            var i = !0,
                a = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = et(e),
                r = ie.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, o);
            if (0 >= a || null == a) {
                if (a = tt(e, t, o), (0 > a || null == a) && (a = e.style[t]), it.test(a)) return a;
                i = r && (ie.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + L(e, t, n || (r ? "border" : "content"), i, o) + "px"
        }

        function q(e, t, n, i, a) {
            return new q.prototype.init(e, t, n, i, a)
        }

        function z() {
            return setTimeout(function() {
                ft = void 0
            }), ft = oe.now()
        }

        function O(e, t) {
            var n, i = {
                    height: e
                },
                a = 0;
            for (t = t ? 1 : 0; 4 > a; a += 2 - t) n = Ae[a], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function P(e, t, n) {
            for (var i, a = (bt[t] || []).concat(bt["*"]), o = 0, r = a.length; r > o; o++)
                if (i = a[o].call(n, t, e)) return i
        }

        function M(e, t, n) {
            var i, a, o, r, s, l, c, d, u = this,
                h = {},
                f = e.style,
                p = e.nodeType && Ne(e),
                m = oe._data(e, "fxshow");
            n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), d = T(e.nodeName), "none" === c && (c = d), "inline" === c && "none" === oe.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== d ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (a = t[i], mt.exec(a)) {
                    if (delete t[i], o = o || "toggle" === a, a === (p ? "hide" : "show")) {
                        if ("show" !== a || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    h[i] = m && m[i] || oe.style(e, i)
                }
            if (!oe.isEmptyObject(h)) {
                m ? "hidden" in m && (p = m.hidden) : m = oe._data(e, "fxshow", {}), o && (m.hidden = !p), p ? oe(e).show() : u.done(function() {
                    oe(e).hide()
                }), u.done(function() {
                    var t;
                    oe._removeData(e, "fxshow");
                    for (t in h) oe.style(e, t, h[t])
                });
                for (i in h) r = P(p ? m[i] : 0, i, u), i in m || (m[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function _(e, t) {
            var n, i, a, o, r;
            for (n in e)
                if (i = oe.camelCase(n), a = t[i], o = e[n], oe.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (r = oe.cssHooks[i]) && "expand" in r) {
                    o = r.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = a)
                } else t[i] = a
        }

        function H(e, t, n) {
            var i, a, o = 0,
                r = yt.length,
                s = oe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (a) return !1;
                    for (var t = ft || z(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ft || z(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                d = c.props;
            for (_(d, c.opts.specialEasing); r > o; o++)
                if (i = yt[o].call(c, e, d, c.opts)) return i;
            return oe.map(d, P, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function I(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, a = 0,
                    o = t.toLowerCase().match(be) || [];
                if (oe.isFunction(n))
                    for (; i = o[a++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function a(s) {
                var l;
                return o[s] = !0, oe.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                }), l
            }
            var o = {},
                r = e === Wt;
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function B(e, t) {
            var n, i, a = oe.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((a[i] ? e : n || (n = {}))[i] = t[i]);
            return n && oe.extend(!0, e, n), e
        }

        function F(e, t, n) {
            for (var i, a, o, r, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
            if (a)
                for (r in s)
                    if (s[r] && s[r].test(a)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    i || (i = r)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function W(e, t, n, i) {
            var a, o, r, s, l, c = {},
                d = e.dataTypes.slice();
            if (d[1])
                for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
            for (o = d.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (!(r = c[l + " " + o] || c["* " + o]))
                    for (a in c)
                        if (s = a.split(" "), s[1] === o && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === r ? r = c[a] : !0 !== c[a] && (o = s[0], d.unshift(s[1]));
                            break
                        }
                if (!0 !== r)
                    if (r && e.throws) t = r(t);
                    else try {
                        t = r(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: r ? e : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function $(e, t, n, i) {
            var a;
            if (oe.isArray(t)) oe.each(t, function(t, a) {
                n || Vt.test(e) ? i(e, a) : $(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i)
            });
            else if (n || "object" !== oe.type(t)) i(e, t);
            else
                for (a in t) $(e + "[" + a + "]", t[a], n, i)
        }

        function U() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function V() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Y(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var X = [],
            G = X.slice,
            Q = X.concat,
            K = X.push,
            J = X.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = "".trim,
            ie = {},
            ae = "1.11.0",
            oe = function(e, t) {
                return new oe.fn.init(e, t)
            },
            re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            le = /-([\da-z])/gi,
            ce = function(e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: ae,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
            },
            pushStack: function(e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return oe.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(oe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: X.sort,
            splice: X.splice
        }, oe.extend = oe.fn.extend = function() {
            var e, t, n, i, a, o, r = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[s] || {}, s++), "object" == typeof r || oe.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++)
                if (null != (a = arguments[s]))
                    for (i in a) e = r[i], n = a[i], r !== n && (c && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, o = e && oe.isArray(e) ? e : []) : o = e && oe.isPlainObject(e) ? e : {}, r[i] = oe.extend(c, o, n)) : void 0 !== n && (r[i] = n));
            return r
        }, oe.extend({
            expando: "jQuery" + (ae + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === oe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (ie.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && oe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(le, ce)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var a = 0,
                    o = e.length,
                    r = n(e);
                if (i) {
                    if (r)
                        for (; o > a && !1 !== t.apply(e[a], i); a++);
                    else
                        for (a in e)
                            if (!1 === t.apply(e[a], i)) break
                } else if (r)
                    for (; o > a && !1 !== t.call(e[a], a, e[a]); a++);
                else
                    for (a in e)
                        if (!1 === t.call(e[a], a, e[a])) break; return e
            },
            trim: ne && !ne.call("\ufeff ") ? function(e) {
                return null == e ? "" : ne.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(re, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (J) return J.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, a = e.length; n > i;) e[a++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[a++] = t[i++];
                return e.length = a, e
            },
            grep: function(e, t, n) {
                for (var i = [], a = 0, o = e.length, r = !n; o > a; a++) !t(e[a], a) !== r && i.push(e[a]);
                return i
            },
            map: function(e, t, i) {
                var a, o = 0,
                    r = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; r > o; o++) null != (a = t(e[o], o, i)) && l.push(a);
                else
                    for (o in e) null != (a = t(e[o], o, i)) && l.push(a);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, a;
                return "string" == typeof t && (a = e[t], t = e, e = a), oe.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(G.call(arguments)))
                }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var de = function(e) {
            function t(e, t, n, i) {
                var a, o, r, s, c, h, f, p, m, g;
                if ((t ? t.ownerDocument || t : H) !== L && j(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (q && !i) {
                    if (a = ge.exec(e))
                        if (r = a[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(r)) || !o.parentNode) return n;
                                if (o.id === r) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && M(t, o) && o.id === r) return n.push(o), n
                        } else {
                            if (a[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = a[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (w.qsa && (!z || !z.test(e))) {
                        if (p = f = _, m = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (h = d(e), (f = t.getAttribute("id")) ? p = f.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = h.length; c--;) h[c] = p + u(h[c]);
                            m = ve.test(e) && l(t.parentNode) || t, g = h.join(",")
                        }
                        if (g) try {
                            return K.apply(n, m.querySelectorAll(g)), n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(re, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[_] = !0, e
            }

            function a(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
            }

            function r(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var a, o = e([], n.length, t), r = o.length; r--;) n[a = o[r]] && (n[a] = !(i[a] = n[a]))
                    })
                })
            }

            function l(e) {
                return e && typeof e.getElementsByTagName !== U && e
            }

            function c() {}

            function d(e, n) {
                var i, a, o, r, s, l, c, d = F[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (s = e, l = [], c = C.preFilter; s;) {
                    (!i || (a = se.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(o = [])), i = !1, (a = le.exec(s)) && (i = a.shift(), o.push({
                        value: i,
                        type: a[0].replace(re, " ")
                    }), s = s.slice(i.length));
                    for (r in C.filter) !(a = he[r].exec(s)) || c[r] && !(a = c[r](a)) || (i = a.shift(), o.push({
                        value: i,
                        type: r,
                        matches: a
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : F(e, l).slice(0)
            }

            function u(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir,
                    a = n && "parentNode" === i,
                    o = R++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, o)
                } : function(t, n, r) {
                    var s, l, c = [I, o];
                    if (r) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, r)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a) {
                                if (l = t[_] || (t[_] = {}), (s = l[i]) && s[0] === I && s[1] === o) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, r)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var a = e.length; a--;)
                        if (!e[a](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function p(e, t, n, i, a) {
                for (var o, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, a)) && (r.push(o), c && t.push(s));
                return r
            }

            function m(e, t, n, a, o, r) {
                return a && !a[_] && (a = m(a)), o && !o[_] && (o = m(o, r)), i(function(i, r, s, l) {
                    var c, d, u, h = [],
                        f = [],
                        m = r.length,
                        g = i || y(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? g : p(g, h, e, s, l),
                        b = n ? o || (i ? e : m || a) ? [] : r : v;
                    if (n && n(v, b, s, l), a)
                        for (c = p(b, f), a(c, [], s, l), d = c.length; d--;)(u = c[d]) && (b[f[d]] = !(v[f[d]] = u));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], d = b.length; d--;)(u = b[d]) && c.push(v[d] = u);
                                o(null, b = [], c, l)
                            }
                            for (d = b.length; d--;)(u = b[d]) && (c = o ? Z.call(i, u) : h[d]) > -1 && (i[c] = !(r[c] = u))
                        }
                    } else b = p(b === r ? b.splice(m, b.length) : b), o ? o(null, r, b, l) : K.apply(r, b)
                })
            }

            function g(e) {
                for (var t, n, i, a = e.length, o = C.relative[e[0].type], r = o || C.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                        return e === t
                    }, r, !0), c = h(function(e) {
                        return Z.call(t, e) > -1
                    }, r, !0), d = [function(e, n, i) {
                        return !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                    }]; a > s; s++)
                    if (n = C.relative[e[s].type]) d = [h(f(d), n)];
                    else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[_]) {
                            for (i = ++s; a > i && !C.relative[e[i].type]; i++);
                            return m(s > 1 && f(d), s > 1 && u(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(re, "$1"), n, i > s && g(e.slice(s, i)), a > i && g(e = e.slice(i)), a > i && u(e))
                        }
                        d.push(n)
                    }
                return f(d)
            }

            function v(e, n) {
                var a = n.length > 0,
                    o = e.length > 0,
                    r = function(i, r, s, l, c) {
                        var d, u, h, f = 0,
                            m = "0",
                            g = i && [],
                            v = [],
                            y = S,
                            b = i || o && C.find.TAG("*", c),
                            x = I += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (S = r !== L && r); m !== w && null != (d = b[m]); m++) {
                            if (o && d) {
                                for (u = 0; h = e[u++];)
                                    if (h(d, r, s)) {
                                        l.push(d);
                                        break
                                    }
                                c && (I = x)
                            }
                            a && ((d = !h && d) && f--, i && g.push(d))
                        }
                        if (f += m, a && m !== f) {
                            for (u = 0; h = n[u++];) h(g, v, r, s);
                            if (i) {
                                if (f > 0)
                                    for (; m--;) g[m] || v[m] || (v[m] = G.call(l));
                                v = p(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (I = x, S = y), g
                    };
                return a ? i(r) : r
            }

            function y(e, n, i) {
                for (var a = 0, o = n.length; o > a; a++) t(e, n[a], i);
                return i
            }

            function b(e, t, n, i) {
                var a, o, r, s, c, h = d(e);
                if (!i && 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === t.nodeType && q && C.relative[o[1].type]) {
                        if (!(t = (C.find.ID(r.matches[0].replace(be, xe), t) || [])[0])) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (a = he.needsContext.test(e) ? 0 : o.length; a-- && (r = o[a], !C.relative[s = r.type]);)
                        if ((c = C.find[s]) && (i = c(r.matches[0].replace(be, xe), ve.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(a, 1), !(e = i.length && u(o))) return K.apply(n, i), n;
                            break
                        }
                }
                return T(e, h)(i, t, !q, n, ve.test(e) && l(t.parentNode) || t), n
            }
            var x, w, C, k, E, T, S, A, N, j, L, D, q, z, O, P, M, _ = "sizzle" + -new Date,
                H = e.document,
                I = 0,
                R = 0,
                B = n(),
                F = n(),
                W = n(),
                $ = function(e, t) {
                    return e === t && (N = !0), 0
                },
                U = "undefined",
                V = 1 << 31,
                Y = {}.hasOwnProperty,
                X = [],
                G = X.pop,
                Q = X.push,
                K = X.push,
                J = X.slice,
                Z = X.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                te = "[\\x20\\t\\r\\n\\f]",
                ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = ne.replace("w", "w#"),
                ae = "\\[" + te + "*(" + ne + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
                oe = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                re = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                se = new RegExp("^" + te + "*," + te + "*"),
                le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                ce = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"),
                de = new RegExp(oe),
                ue = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + ne + ")"),
                    CLASS: new RegExp("^\\.(" + ne + ")"),
                    TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ee + ")$", "i"),
                    needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                pe = /^h\d$/i,
                me = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                ye = /'|\\/g,
                be = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
                xe = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                K.apply(X = J.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: X.length ? function(e, t) {
                        Q.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, j = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : H,
                    i = n.defaultView;
                return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, D = n.documentElement, q = !E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    j()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    j()
                })), w.attributes = a(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = a(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = me.test(n.getElementsByClassName) && a(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), w.getById = a(function(e) {
                    return D.appendChild(e).id = _, !n.getElementsByName || !n.getElementsByName(_).length
                }), w.getById ? (C.find.ID = function(e, t) {
                    if (typeof t.getElementById !== U && q) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(be, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function(e) {
                    var t = e.replace(be, xe);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        a = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[a++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== U && q ? t.getElementsByClassName(e) : void 0
                }, O = [], z = [], (w.qsa = me.test(n.querySelectorAll)) && (a(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && z.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || z.push(":checked")
                }), a(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + te + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
                })), (w.matchesSelector = me.test(P = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && a(function(e) {
                    w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), O.push("!=", oe)
                }), z = z.length && new RegExp(z.join("|")), O = O.length && new RegExp(O.join("|")), t = me.test(D.compareDocumentPosition), M = t || me.test(D.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, $ = t ? function(e, t) {
                    if (e === t) return N = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === H && M(H, e) ? -1 : t === n || t.ownerDocument === H && M(H, t) ? 1 : A ? Z.call(A, e) - Z.call(A, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    var i, a = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        c = [t];
                    if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : A ? Z.call(A, e) - Z.call(A, t) : 0;
                    if (o === s) return r(e, t);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (i = t; i = i.parentNode;) c.unshift(i);
                    for (; l[a] === c[a];) a++;
                    return a ? r(l[a], c[a]) : l[a] === H ? -1 : c[a] === H ? 1 : 0
                }, n) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== L && j(e), n = n.replace(ce, "='$1']"), !(!w.matchesSelector || !q || O && O.test(n) || z && z.test(n))) try {
                    var i = P.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && j(e), M(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && j(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== i ? i : w.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    a = 0;
                if (N = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort($), N) {
                    for (; t = e[a++];) t === e[a] && (i = n.push(a));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, k = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else
                    for (; t = e[i++];) n += k(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, xe), e[3] = (e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(a) {
                            var o = t.attr(a, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, a) {
                        var o = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === a ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, d, u, h, f, p, m = o !== r ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (u = t; u = u[m];)
                                            if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (d = g[_] || (g[_] = {}), c = d[e] || [], f = c[0] === I && c[1], h = c[0] === I && c[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (h = f = 0) || p.pop();)
                                        if (1 === u.nodeType && ++h && u === t) {
                                            d[e] = [I, f, h];
                                            break
                                        }
                                } else if (y && (c = (t[_] || (t[_] = {}))[e]) && c[0] === I) h = c[1];
                                else
                                    for (;
                                        (u = ++f && u && u[m] || (h = f = 0) || p.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[_] || (u[_] = {}))[e] = [I, h]), u !== t)););
                                return (h -= a) === i || h % i == 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var a, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[_] ? o(n) : o.length > 1 ? (a = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, a = o(e, n), r = a.length; r--;) i = Z.call(e, a[r]), e[i] = !(t[i] = a[r])
                        }) : function(e) {
                            return o(e, 0, a)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            a = T(e.replace(re, "$1"));
                        return a[_] ? i(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, a(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === D
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[x] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[x] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(x);
            return c.prototype = C.filters = C.pseudos, C.setFilters = new c, T = t.compile = function(e, t) {
                var n, i = [],
                    a = [],
                    o = W[e + " "];
                if (!o) {
                    for (t || (t = d(e)), n = t.length; n--;) o = g(t[n]), o[_] ? i.push(o) : a.push(o);
                    o = W(e, v(a, i))
                }
                return o
            }, w.sortStable = _.split("").sort($).join("") === _, w.detectDuplicates = !!N, j(), w.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), a(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && a(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), a(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(ee, function(e, t, n) {
                var i;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        oe.find = de, oe.expr = de.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = de.uniqueSort, oe.text = de.getText, oe.isXMLDoc = de.isXML, oe.contains = de.contains;
        var ue = oe.expr.match.needsContext,
            he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^.[^:#\[\.,]*$/;
        oe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    a = i.length;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                    for (t = 0; a > t; t++)
                        if (oe.contains(i[t], this)) return !0
                }));
                for (t = 0; a > t; t++) oe.find(e, i[t], n);
                return n = this.pushStack(a > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var pe, me = e.document,
            ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (oe.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : me, !0)), he.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((i = me.getElementById(n[2])) && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = me, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        }).prototype = oe.fn, pe = oe(me);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.extend({
            dir: function(e, t, n) {
                for (var i = [], a = e[t]; a && 9 !== a.nodeType && (void 0 === n || 1 !== a.nodeType || !oe(a).is(n));) 1 === a.nodeType && i.push(a), a = a[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), oe.fn.extend({
            has: function(e) {
                var t, n = oe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (oe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, a = this.length, o = [], r = ue.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; a > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? oe.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return oe.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return oe.dir(e, "parentNode", n)
            },
            next: function(e) {
                return a(e, "nextSibling")
            },
            prev: function(e) {
                return a(e, "previousSibling")
            },
            nextAll: function(e) {
                return oe.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return oe.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return oe.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return oe.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return oe.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return oe.sibling(e.firstChild)
            },
            contents: function(e) {
                return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
            }
        }, function(e, t) {
            oe.fn[e] = function(n, i) {
                var a = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = oe.filter(i, a)), this.length > 1 && (ye[e] || (a = oe.unique(a)), ve.test(e) && (a = a.reverse())), this.pushStack(a)
            }
        });
        var be = /\S+/g,
            xe = {};
        oe.Callbacks = function(e) {
            e = "string" == typeof e ? xe[e] || o(e) : oe.extend({}, e);
            var t, n, i, a, r, s, l = [],
                c = !e.once && [],
                d = function(o) {
                    for (n = e.memory && o, i = !0, r = s || 0, s = 0, a = l.length, t = !0; l && a > r; r++)
                        if (!1 === l[r].apply(o[0], o[1]) && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function t(n) {
                                oe.each(n, function(n, i) {
                                    var a = oe.type(i);
                                    "function" === a ? e.unique && u.has(i) || l.push(i) : i && i.length && "string" !== a && t(i)
                                })
                            }(arguments), t ? a = l.length : n && (s = i, d(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && oe.each(arguments, function(e, n) {
                            for (var i;
                                (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (a >= i && a--, r >= i && r--)
                        }), this
                    },
                    has: function(e) {
                        return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], a = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || u.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : d(n)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, oe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return oe.Deferred(function(n) {
                                oe.each(t, function(t, o) {
                                    var r = oe.isFunction(e[t]) && e[t];
                                    a[o[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? oe.extend(e, i) : i
                        }
                    },
                    a = {};
                return i.pipe = i.then, oe.each(t, function(e, o) {
                    var r = o[2],
                        s = o[3];
                    i[o[1]] = r.add, s && r.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = function() {
                        return a[o[0] + "With"](this === a ? i : this, arguments), this
                    }, a[o[0] + "With"] = r.fireWith
                }), i.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var t, n, i, a = 0,
                    o = G.call(arguments),
                    r = o.length,
                    s = 1 !== r || e && oe.isFunction(e.promise) ? r : 0,
                    l = 1 === s ? e : oe.Deferred(),
                    c = function(e, n, i) {
                        return function(a) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : a, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (r > 1)
                    for (t = new Array(r), n = new Array(r), i = new Array(r); r > a; a++) o[a] && oe.isFunction(o[a].promise) ? o[a].promise().done(c(a, i, o)).fail(l.reject).progress(c(a, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var we;
        oe.fn.ready = function(e) {
            return oe.ready.promise().done(e), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--oe.readyWait : !oe.isReady) {
                    if (!me.body) return setTimeout(oe.ready);
                    oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || (we.resolveWith(me, [oe]), oe.fn.trigger && oe(me).trigger("ready").off("ready"))
                }
            }
        }), oe.ready.promise = function(t) {
            if (!we)
                if (we = oe.Deferred(), "complete" === me.readyState) setTimeout(oe.ready);
                else if (me.addEventListener) me.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                me.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && me.documentElement
                } catch (e) {}
                n && n.doScroll && function e() {
                    if (!oe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        r(), oe.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var Ce, ke = "undefined";
        for (Ce in oe(ie)) break;
        ie.ownLast = "0" !== Ce, ie.inlineBlockNeedsLayout = !1, oe(function() {
                var e, t, n = me.getElementsByTagName("body")[0];
                n && (e = me.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = me.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
            }),
            function() {
                var e = me.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        ie.deleteExpando = !1
                    }
                }
                e = null
            }(), oe.acceptData = function(e) {
                var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            };
        var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Te = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando]) && !c(e)
            },
            data: function(e, t, n) {
                return d(e, t, n)
            },
            removeData: function(e, t) {
                return u(e, t)
            },
            _data: function(e, t, n) {
                return d(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return u(e, t, !0)
            }
        }), oe.fn.extend({
            data: function(e, t) {
                var n, i, a, o = this[0],
                    r = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (a = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                        for (n = r.length; n--;) i = r[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, a[i]));
                        oe._data(o, "parsedAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function() {
                    oe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    oe.data(this, e, t)
                }) : o ? l(o, e, oe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    oe.removeData(this, e)
                })
            }
        }), oe.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    i = n.length,
                    a = n.shift(),
                    o = oe._queueHooks(e, t),
                    r = function() {
                        oe.dequeue(e, t)
                    };
                "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, r, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return oe._data(e, n) || oe._data(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        oe._removeData(e, t + "queue"), oe._removeData(e, n)
                    })
                })
            }
        }), oe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    oe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    a = oe.Deferred(),
                    o = this,
                    r = this.length,
                    s = function() {
                        --i || a.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = oe._data(o[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), a.promise(t)
            }
        });
        var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ae = ["Top", "Right", "Bottom", "Left"],
            Ne = function(e, t) {
                return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
            },
            je = oe.access = function(e, t, n, i, a, o, r) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === oe.type(n)) {
                    a = !0;
                    for (s in n) oe.access(e, t, s, n[s], !0, o, r)
                } else if (void 0 !== i && (a = !0, oe.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(oe(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, r ? i : i.call(e[s], s, t(e[s], n)));
                return a ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Le = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = me.createDocumentFragment(),
                t = me.createElement("div"),
                n = me.createElement("input");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ie.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ie.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            e = t = n = null
        }(),
        function() {
            var t, n, i = me.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ie[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ie[t + "Bubbles"] = !1 === i.attributes[n].expando);
            i = null
        }();
        var De = /^(?:input|select|textarea)$/i,
            qe = /^key/,
            ze = /^(?:mouse|contextmenu)|click/,
            Oe = /^(?:focusinfocus|focusoutblur)$/,
            Pe = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
            global: {},
            add: function(e, t, n, i, a) {
                var o, r, s, l, c, d, u, h, f, p, m, g = oe._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, a = l.selector), n.guid || (n.guid = oe.guid++), (r = g.events) || (r = g.events = {}), (d = g.handle) || (d = g.handle = function(e) {
                            return typeof oe === ke || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Pe.exec(t[s]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (c = oe.event.special[f] || {},
                        f = (a ? c.delegateType : c.bindType) || f, c = oe.event.special[f] || {}, u = oe.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: a,
                            needsContext: a && oe.expr.match.needsContext.test(a),
                            namespace: p.join(".")
                        }, l), (h = r[f]) || (h = r[f] = [], h.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, p, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, u) : h.push(u), oe.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, a) {
                var o, r, s, l, c, d, u, h, f, p, m, g = oe.hasData(e) && oe._data(e);
                if (g && (d = g.events)) {
                    for (t = (t || "").match(be) || [""], c = t.length; c--;)
                        if (s = Pe.exec(t[c]) || [], f = m = s[1], p = (s[2] || "").split(".").sort(), f) {
                            for (u = oe.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, h = d[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) r = h[o], !a && m !== r.origType || n && n.guid !== r.guid || s && !s.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(o, 1), r.selector && h.delegateCount--, u.remove && u.remove.call(e, r));
                            l && !h.length && (u.teardown && !1 !== u.teardown.call(e, p, g.handle) || oe.removeEvent(e, f, g.handle), delete d[f])
                        } else
                            for (f in d) oe.event.remove(e, f + t[c], n, i, !0);
                    oe.isEmptyObject(d) && (delete g.handle, oe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, a) {
                var o, r, s, l, c, d, u, h = [i || me],
                    f = te.call(t, "type") ? t.type : t,
                    p = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), r = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), c = oe.event.special[f] || {}, a || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!a && !c.noBubble && !oe.isWindow(i)) {
                        for (l = c.delegateType || f, Oe.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), d = s;
                        d === (i.ownerDocument || me) && h.push(d.defaultView || d.parentWindow || e)
                    }
                    for (u = 0;
                        (s = h[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || f, o = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), o && o.apply(s, n), (o = r && s[r]) && o.apply && oe.acceptData(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = f, !a && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), n)) && oe.acceptData(i) && r && i[f] && !oe.isWindow(i)) {
                        d = i[r], d && (i[r] = null), oe.event.triggered = f;
                        try {
                            i[f]()
                        } catch (e) {}
                        oe.event.triggered = void 0, d && (i[r] = d)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = oe.event.fix(e);
                var t, n, i, a, o, r = [],
                    s = G.call(arguments),
                    l = (oe._data(this, "events") || {})[e.type] || [],
                    c = oe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (r = oe.event.handlers.call(this, e, l), t = 0;
                        (a = r[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = a.elem, o = 0;
                            (i = a.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, void 0 !== (n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, a, o, r = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (a = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === a[n] && (a[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), a[n] && a.push(i);
                            a.length && r.push({
                                elem: l,
                                handlers: a
                            })
                        }
                return s < t.length && r.push({
                    elem: this,
                    handlers: t.slice(s)
                }), r
            },
            fix: function(e) {
                if (e[oe.expando]) return e;
                var t, n, i, a = e.type,
                    o = e,
                    r = this.fixHooks[a];
                for (r || (this.fixHooks[a] = r = ze.test(a) ? this.mouseHooks : qe.test(a) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || me), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, a, o = t.button,
                        r = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || me, a = i.documentElement, n = i.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var a = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? oe.event.trigger(a, null, t) : oe.event.dispatch.call(t, a), a.isDefaultPrevented() && n.preventDefault()
            }
        }, oe.removeEvent = me.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === ke && (e[i] = null), e.detachEvent(i, n))
        }, oe.Event = function(e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? h : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = h, this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            oe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        a = e.relatedTarget,
                        o = e.handleObj;
                    return (!a || a !== i && !oe.contains(i, a)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ie.submitBubbles || (oe.event.special.submit = {
            setup: function() {
                return !oe.nodeName(this, "form") && void oe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                    n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), oe._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !oe.nodeName(this, "form") && void oe.event.remove(this, "._submit")
            }
        }), ie.changeBubbles || (oe.event.special.change = {
            setup: function() {
                return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), oe.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
                })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    De.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                    }), oe._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return oe.event.remove(this, "._change"), !De.test(this.nodeName)
            }
        }), ie.focusinBubbles || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                oe.event.simulate(t, e.target, oe.event.fix(e), !0)
            };
            oe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        a = oe._data(i, t);
                    a || i.addEventListener(e, n, !0), oe._data(i, t, (a || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        a = oe._data(i, t) - 1;
                    a ? oe._data(i, t, a) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
                }
            }
        }), oe.fn.extend({
            on: function(e, t, n, i, a) {
                var o, r;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], a);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = f;
                else if (!i) return this;
                return 1 === a && (r = i, i = function(e) {
                    return oe().off(e), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = oe.guid++)), this.each(function() {
                    oe.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = f), this.each(function() {
                    oe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    oe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            _e = / jQuery\d+="(?:null|\d+)"/g,
            He = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
            Ie = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Be = /<([\w:]+)/,
            Fe = /<tbody/i,
            We = /<|&#?\w+;/,
            $e = /<(?:script|style|link)/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ve = /^$|\/(?:java|ecma)script/i,
            Ye = /^true\/(.*)/,
            Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qe = m(me),
            Ke = Qe.appendChild(me.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
            clone: function(e, t, n) {
                var i, a, o, r, s, l = oe.contains(e.ownerDocument, e);
                if (ie.html5Clone || oe.isXMLDoc(e) || !He.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (i = g(o), s = g(e), r = 0; null != (a = s[r]); ++r) i[r] && k(a, i[r]);
                if (t)
                    if (n)
                        for (s = s || g(e), i = i || g(o), r = 0; null != (a = s[r]); r++) C(a, i[r]);
                    else C(e, o);
                return i = g(o, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = a = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var a, o, r, s, l, c, d, u = e.length, h = m(t), f = [], p = 0; u > p; p++)
                    if ((o = e[p]) || 0 === o)
                        if ("object" === oe.type(o)) oe.merge(f, o.nodeType ? [o] : o);
                        else if (We.test(o)) {
                    for (s = s || h.appendChild(t.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), d = Ge[l] || Ge._default, s.innerHTML = d[1] + o.replace(Re, "<$1></$2>") + d[2], a = d[0]; a--;) s = s.lastChild;
                    if (!ie.leadingWhitespace && Ie.test(o) && f.push(t.createTextNode(Ie.exec(o)[0])), !ie.tbody)
                        for (o = "table" !== l || Fe.test(o) ? "<table>" !== d[1] || Fe.test(o) ? 0 : s : s.firstChild, a = o && o.childNodes.length; a--;) oe.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (oe.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = h.lastChild
                } else f.push(t.createTextNode(o));
                for (s && h.removeChild(s), ie.appendChecked || oe.grep(g(f, "input"), v), p = 0; o = f[p++];)
                    if ((!i || -1 === oe.inArray(o, i)) && (r = oe.contains(o.ownerDocument, o), s = g(h.appendChild(o), "script"), r && w(s), n))
                        for (a = 0; o = s[a++];) Ve.test(o.type || "") && n.push(o);
                return s = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, a, o, r = 0, s = oe.expando, l = oe.cache, c = ie.deleteExpando, d = oe.event.special; null != (n = e[r]); r++)
                    if ((t || oe.acceptData(n)) && (a = n[s], o = a && l[a])) {
                        if (o.events)
                            for (i in o.events) d[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, o.handle);
                        l[a] && (delete l[a], c ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, X.push(a))
                    }
            }
        }), oe.fn.extend({
            text: function(e) {
                return je(this, function(e) {
                    return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        y(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? oe.filter(e, this) : this, a = 0; null != (n = i[a]); a++) t || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && oe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return oe.clone(this, e, t)
                })
            },
            html: function(e) {
                return je(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(_e, "") : void 0;
                    if (!("string" != typeof e || $e.test(e) || !ie.htmlSerialize && He.test(e) || !ie.leadingWhitespace && Ie.test(e) || Ge[(Be.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Re, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, oe.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Q.apply([], e);
                var n, i, a, o, r, s, l = 0,
                    c = this.length,
                    d = this,
                    u = c - 1,
                    h = e[0],
                    f = oe.isFunction(h);
                if (f || c > 1 && "string" == typeof h && !ie.checkClone && Ue.test(h)) return this.each(function(n) {
                    var i = d.eq(n);
                    f && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = oe.map(g(s, "script"), b), a = o.length; c > l; l++) i = s, l !== u && (i = oe.clone(i, !0, !0), a && oe.merge(o, g(i, "script"))), t.call(this[l], i, l);
                    if (a)
                        for (r = o[o.length - 1].ownerDocument, oe.map(o, x), l = 0; a > l; l++) i = o[l], Ve.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(r, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xe, "")));
                    s = n = null
                }
                return this
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            oe.fn[e] = function(e) {
                for (var n, i = 0, a = [], o = oe(e), r = o.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), oe(o[i])[t](n), K.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var Je, Ze = {};
        ! function() {
            var e, t, n = me.createElement("div");
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(e.style.opacity), ie.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, ie.shrinkWrapBlocks = function() {
                var e, n, i;
                if (null == t) {
                    if (!(e = me.getElementsByTagName("body")[0])) return;
                    "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), i = me.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== ke && (i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
                }
                return t
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
            at = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tt = function(e, t, n) {
            var i, a, o, r, s = e.style;
            return n = n || et(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== r || oe.contains(e.ownerDocument, e) || (r = oe.style(e, t)), it.test(r) && nt.test(t) && (i = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = i, s.minWidth = a, s.maxWidth = o)), void 0 === r ? r : r + ""
        }) : me.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var i, a, o, r, s = e.style;
            return n = n || et(e), r = n ? n[t] : void 0, null == r && s && s[t] && (r = s[t]), it.test(r) && !at.test(t) && (i = s.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : r, r = s.pixelLeft + "px", s.left = i, o && (a.left = o)), void 0 === r ? r : r + "" || "auto"
        }), ! function() {
            function t() {
                var t, n, i = me.getElementsByTagName("body")[0];
                i && (t = me.createElement("div"), n = me.createElement("div"), t.style.cssText = c, i.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", oe.swap(i, null != i.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    a = 4 === n.offsetWidth
                }), o = !0, r = !1, s = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(n, null) || {}).top, o = "4px" === (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), i.removeChild(t), n = i = null)
            }
            var n, i, a, o, r, s, l = me.createElement("div"),
                c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
            l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, oe.extend(ie, {
                reliableHiddenOffsets: function() {
                    if (null != i) return i;
                    var e, t, n, a = me.createElement("div"),
                        o = me.getElementsByTagName("body")[0];
                    return o ? (a.setAttribute("className", "t"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = me.createElement("div"), e.style.cssText = c, o.appendChild(e).appendChild(a), a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = a.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = n && 0 === t[0].offsetHeight, o.removeChild(e), a = o = null, i) : void 0
                },
                boxSizing: function() {
                    return null == a && t(), a
                },
                boxSizingReliable: function() {
                    return null == o && t(), o
                },
                pixelPosition: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    var t, n, i, a;
                    if (null == s && e.getComputedStyle) {
                        if (!(t = me.getElementsByTagName("body")[0])) return;
                        n = me.createElement("div"), i = me.createElement("div"), n.style.cssText = c, t.appendChild(n).appendChild(i), a = i.appendChild(me.createElement("div")), a.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", a.style.marginRight = a.style.width = "0", i.style.width = "1px", s = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight), t.removeChild(n)
                    }
                    return s
                }
            })
        }(), oe.swap = function(e, t, n, i) {
            var a, o, r = {};
            for (o in t) r[o] = e.style[o], e.style[o] = t[o];
            a = n.apply(e, i || []);
            for (o in t) e.style[o] = r[o];
            return a
        };
        var ot = /alpha\([^)]*\)/i,
            rt = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Se + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Se + ")", "i"),
            dt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ut = {
                letterSpacing: 0,
                fontWeight: 400
            },
            ht = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, o, r, s = oe.camelCase(t),
                        l = e.style;
                    if (t = oe.cssProps[s] || (oe.cssProps[s] = A(l, s)), r = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return r && "get" in r && void 0 !== (a = r.get(e, !1, i)) ? a : l[t];
                    if (o = typeof n, "string" === o && (a = ct.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(oe.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || oe.cssNumber[s] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i))))) try {
                        l[t] = "", l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var a, o, r, s = oe.camelCase(t);
                return t = oe.cssProps[s] || (oe.cssProps[s] = A(e.style, s)), r = oe.cssHooks[t] || oe.cssHooks[s], r && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (a = parseFloat(o), !0 === n || oe.isNumeric(a) ? a || 0 : o) : o
            }
        }), oe.each(["height", "width"], function(e, t) {
            oe.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? 0 === e.offsetWidth && st.test(oe.css(e, "display")) ? oe.swap(e, dt, function() {
                        return D(e, t, i)
                    }) : D(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var a = i && et(e);
                    return j(e, n, i ? L(e, t, i, ie.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, a), a) : 0)
                }
            }
        }), ie.opacity || (oe.cssHooks.opacity = {
            get: function(e, t) {
                return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    a = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, a) : o + " " + a)
            }
        }), oe.cssHooks.marginRight = S(ie.reliableMarginRight, function(e, t) {
            return t ? oe.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            oe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[e + Ae[i] + t] = o[i] || o[i - 2] || o[0];
                    return a
                }
            }, nt.test(e) || (oe.cssHooks[e + t].set = j)
        }), oe.fn.extend({
            css: function(e, t) {
                return je(this, function(e, t, n) {
                    var i, a, o = {},
                        r = 0;
                    if (oe.isArray(t)) {
                        for (i = et(e), a = t.length; a > r; r++) o[t[r]] = oe.css(e, t[r], !1, i);
                        return o
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ne(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = q, q.prototype = {
            constructor: q,
            init: function(e, t, n, i, a, o) {
                this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = q.propHooks[this.prop];
                return e && e.get ? e.get(this) : q.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = q.propHooks[this.prop];
                return this.pos = t = this.options.duration ? oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
            }
        }, q.prototype.init.prototype = q.prototype, q.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, oe.fx = q.prototype.init, oe.fx.step = {};
        var ft, pt, mt = /^(?:toggle|show|hide)$/,
            gt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [M],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        a = gt.exec(t),
                        o = a && a[3] || (oe.cssNumber[e] ? "" : "px"),
                        r = (oe.cssNumber[e] || "px" !== o && +i) && gt.exec(oe.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], a = a || [], r = +i || 1;
                        do {
                            s = s || ".5", r /= s, oe.style(n.elem, e, r + o)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return a && (r = n.start = +r || +i || 0, n.unit = o, n.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2]), n
                }]
            };
        oe.Animation = oe.extend(H, {
                tweener: function(e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, a = e.length; a > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), oe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
                }, i
            }, oe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ne).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var a = oe.isEmptyObject(e),
                        o = oe.speed(t, n, i),
                        r = function() {
                            var t = H(this, oe.extend({}, e), o);
                            (a || oe._data(this, "finish")) && t.stop(!0)
                        };
                    return r.finish = r, a || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            a = null != e && e + "queueHooks",
                            o = oe.timers,
                            r = oe._data(this);
                        if (a) r[a] && r[a].stop && i(r[a]);
                        else
                            for (a in r) r[a] && r[a].stop && vt.test(a) && i(r[a]);
                        for (a = o.length; a--;) o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(n), t = !1, o.splice(a, 1));
                        (t || !n) && oe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = oe._data(this),
                            i = n[e + "queue"],
                            a = n[e + "queueHooks"],
                            o = oe.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function(e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function(e, i, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, a)
                }
            }), oe.each({
                slideDown: O("show"),
                slideUp: O("hide"),
                slideToggle: O("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                oe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), oe.timers = [], oe.fx.tick = function() {
                var e, t = oe.timers,
                    n = 0;
                for (ft = oe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || oe.fx.stop(), ft = void 0
            }, oe.fx.timer = function(e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function() {
                pt || (pt = setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function() {
                clearInterval(pt), pt = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function(e, t) {
                return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, a = me.createElement("div");
                a.setAttribute("className", "t"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = a.getElementsByTagName("a")[0], n = me.createElement("select"), i = n.appendChild(me.createElement("option")), t = a.getElementsByTagName("input")[0], e.style.cssText = "top:1px", ie.getSetAttribute = "t" !== a.className, ie.style = /top/.test(e.getAttribute("style")), ie.hrefNormalized = "/a" === e.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = i.selected, ie.enctype = !!me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, t = me.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value, e = t = n = i = a = null
            }();
        var xt = /\r/g;
        oe.fn.extend({
            val: function(e) {
                var t, n, i, a = this[0];
                return arguments.length ? (i = oe.isFunction(e), this.each(function(n) {
                    var a;
                    1 === this.nodeType && (a = i ? e.call(this, n, oe(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : oe.isArray(a) && (a = oe.map(a, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                })) : a ? (t = oe.valHooks[a.type] || oe.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = oe.find.attr(e, "value");
                        return null != t ? t : oe.text(e)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, a = e.selectedIndex, o = "select-one" === e.type || 0 > a, r = o ? null : [], s = o ? a + 1 : i.length, l = 0 > a ? s : o ? a : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== a || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), o) return t;
                                r.push(t)
                            }
                        return r
                    },
                    set: function(e, t) {
                        for (var n, i, a = e.options, o = oe.makeArray(t), r = a.length; r--;)
                            if (i = a[r], oe.inArray(oe.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function() {
            oe.valHooks[this] = {
                set: function(e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
                }
            }, ie.checkOn || (oe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt, Ct, kt = oe.expr.attrHandle,
            Et = /^(?:checked|selected)$/i,
            Tt = ie.getSetAttribute,
            St = ie.input;
        oe.fn.extend({
            attr: function(e, t) {
                return je(this, oe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function(e, t, n) {
                var i, a, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Ct : wt)), void 0 === n ? i && "get" in i && null !== (a = i.get(e, t)) ? a : (a = oe.find.attr(e, t), null == a ? void 0 : a) : null !== n ? i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, a = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[a++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? St && Tt || !Et.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(Tt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Ct = {
            set: function(e, t, n) {
                return !1 === t ? oe.removeAttr(e, n) : St && Tt || !Et.test(n) ? e.setAttribute(!Tt && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = kt[t] || oe.find.attr;
            kt[t] = St && Tt || !Et.test(t) ? function(e, t, i) {
                var a, o;
                return i || (o = kt[t], kt[t] = a, a = null != n(e, t, i) ? t.toLowerCase() : null, kt[t] = o), a
            } : function(e, t, n) {
                return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), St && Tt || (oe.attrHooks.value = {
            set: function(e, t, n) {
                return oe.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
            }
        }), Tt || (wt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, kt.id = kt.name = kt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, oe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: wt.set
        }, oe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                wt.set(e, "" !== t && t, n)
            }
        }, oe.each(["width", "height"], function(e, t) {
            oe.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ie.style || (oe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var At = /^(?:input|select|textarea|button|object)$/i,
            Nt = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function(e, t) {
                return je(this, oe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = oe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), oe.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, a, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !oe.isXMLDoc(e), o && (t = oe.propFix[t] || t, a = oe.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : At.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ie.hrefNormalized || oe.each(["href", "src"], function(e, t) {
            oe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ie.optSelected || (oe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oe.propFix[this.toLowerCase()] = this
        }), ie.enctype || (oe.propFix.enctype = "encoding");
        var jt = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function(e) {
                var t, n, i, a, o, r, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                            for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            r = oe.trim(i), n.className !== r && (n.className = r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, a, o, r, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                            for (o = 0; a = t[o++];)
                                for (; i.indexOf(" " + a + " ") >= 0;) i = i.replace(" " + a + " ", " ");
                            r = e ? oe.trim(i) : "", n.className !== r && (n.className = r)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function(n) {
                    oe(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, i = 0, a = oe(this), o = e.match(be) || []; t = o[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else(n === ke || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : oe._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            oe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Lt = oe.now(),
            Dt = /\?/,
            qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                a = oe.trim(t + "");
            return a && !oe.trim(a.replace(qt, function(e, t, a, o) {
                return n && t && (i = 0), 0 === i ? e : (n = a || t, i += !o - !a, "")
            })) ? Function("return " + a)() : oe.error("Invalid JSON: " + t)
        }, oe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
        };
        var zt, Ot, Pt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            It = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ft = {},
            Wt = {},
            $t = "*/".concat("*");
        try {
            Ot = location.href
        } catch (e) {
            Ot = me.createElement("a"), Ot.href = "", Ot = Ot.href
        }
        zt = Bt.exec(Ot.toLowerCase()) || [], oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot,
                type: "GET",
                isLocal: Ht.test(zt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
            },
            ajaxPrefilter: I(Ft),
            ajaxTransport: I(Wt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var a, d, v, y, x, C = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, r = i || "", w.readyState = e > 0 ? 4 : 0, a = e >= 200 && 300 > e || 304 === e, n && (y = F(u, w, n)), y = W(u, y, w, a), a ? (u.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (oe.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (oe.etag[o] = x)), 204 === e || "HEAD" === u.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, d = y.data, v = y.error, a = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", a ? p.resolveWith(h, [d, C, w]) : p.rejectWith(h, [w, C, v]), w.statusCode(g), g = void 0, l && f.trigger(a ? "ajaxSuccess" : "ajaxError", [w, u, a ? d : v]), m.fireWith(h, [w, C]), l && (f.trigger("ajaxComplete", [w, u]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, a, o, r, s, l, c, d, u = oe.ajaxSetup({}, t),
                    h = u.context || u,
                    f = u.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                    p = oe.Deferred(),
                    m = oe.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!d)
                                    for (d = {}; t = _t.exec(r);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (u.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((e || u.url || Ot) + "").replace(Pt, "").replace(Rt, zt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = oe.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (i = Bt.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === zt[1] && i[2] === zt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (zt[3] || ("http:" === zt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = oe.param(u.data, u.traditional)), R(Ft, u, t, w), 2 === b) return w;
                l = u.global, l && 0 == oe.active++ && oe.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !It.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Dt.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Mt.test(o) ? o.replace(Mt, "$1_=" + Lt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + Lt++)), u.ifModified && (oe.lastModified[o] && w.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && w.setRequestHeader("If-None-Match", oe.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers) w.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (!1 === u.beforeSend.call(h, w, u) || 2 === b)) return w.abort();
                x = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[a](u[a]);
                if (c = R(Wt, u, t, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function(e, t) {
            oe[t] = function(e, n, i, a) {
                return oe.isFunction(n) && (a = a || i, i = n, n = void 0), oe.ajax({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: i
                })
            }
        }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            oe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), oe._evalUrl = function(e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, oe.fn.extend({
            wrapAll: function(e) {
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(oe.isFunction(e) ? function(t) {
                    oe(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = oe.isFunction(e);
                return this.each(function(n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
        }, oe.expr.filters.visible = function(e) {
            return !oe.expr.filters.hidden(e)
        };
        var Ut = /%20/g,
            Vt = /\[\]$/,
            Yt = /\r?\n/g,
            Xt = /^(?:submit|button|image|reset|file)$/i,
            Gt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function(e, t) {
            var n, i = [],
                a = function(e, t) {
                    t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
                a(this.name, this.value)
            });
            else
                for (n in e) $(n, e[n], t, a);
            return i.join("&").replace(Ut, "+")
        }, oe.fn.extend({
            serialize: function() {
                return oe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && Gt.test(this.nodeName) && !Xt.test(e) && (this.checked || !Le.test(e))
                }).map(function(e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Yt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Yt, "\r\n")
                    }
                }).get()
            }
        }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
        } : U;
        var Qt = 0,
            Kt = {},
            Jt = oe.ajaxSettings.xhr();
        e.ActiveXObject && oe(e).on("unload", function() {
            for (var e in Kt) Kt[e](void 0, !0)
        }), ie.cors = !!Jt && "withCredentials" in Jt, (Jt = ie.ajax = !!Jt) && oe.ajaxTransport(function(e) {
            if (!e.crossDomain || ie.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var a, o = e.xhr(),
                            r = ++Qt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) o[a] = e.xhrFields[a];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (a in n) void 0 !== n[a] && o.setRequestHeader(a, n[a] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, a) {
                            var s, l, c;
                            if (t && (a || 4 === o.readyState))
                                if (delete Kt[r], t = void 0, o.onreadystatechange = oe.noop, a) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (e) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && i(s, l, c, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[r] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), oe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = me.head || oe("head")[0] || me.documentElement;
                return {
                    send: function(i, a) {
                        t = me.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var Zt = [],
            en = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Zt.pop() || oe.expando + "_" + Lt++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var a, o, r, s = !1 !== t.jsonp && (en.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(en, "$1" + a) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
                return r || oe.error(a + " was not called"), r[0]
            }, t.dataTypes[0] = "json", o = e[a], e[a] = function() {
                r = arguments
            }, i.always(function() {
                e[a] = o, t[a] && (t.jsonpCallback = n.jsonpCallback, Zt.push(a)), r && oe.isFunction(o) && o(r[0]), r = o = void 0
            }), "script") : void 0
        }), oe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || me;
            var i = he.exec(e),
                a = !n && [];
            return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, a), a && a.length && oe(a).remove(), oe.merge([], i.childNodes))
        };
        var tn = oe.fn.load;
        oe.fn.load = function(e, t, n) {
            if ("string" != typeof e && tn) return tn.apply(this, arguments);
            var i, a, o, r = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = e.slice(s, e.length), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && oe.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments, r.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                r.each(n, a || [e.responseText, t, e])
            }), this
        }, oe.expr.filters.animated = function(e) {
            return oe.grep(oe.timers, function(t) {
                return e === t.elem
            }).length
        };
        var nn = e.document.documentElement;
        oe.offset = {
            setOffset: function(e, t, n) {
                var i, a, o, r, s, l, c, d = oe.css(e, "position"),
                    u = oe(e),
                    h = {};
                "static" === d && (e.style.position = "relative"), s = u.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === d || "fixed" === d) && oe.inArray("auto", [o, l]) > -1, c ? (i = u.position(), r = i.top, a = i.left) : (r = parseFloat(o) || 0, a = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + r), null != t.left && (h.left = t.left - s.left + a), "using" in t ? t.using.call(e, h) : u.css(h)
            }
        }, oe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    a = this[0],
                    o = a && a.ownerDocument;
                return o ? (t = o.documentElement, oe.contains(t, a) ? (typeof a.getBoundingClientRect !== ke && (i = a.getBoundingClientRect()), n = Y(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - oe.css(i, "marginTop", !0),
                        left: t.left - n.left - oe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || nn; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                    return e || nn
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            oe.fn[e] = function(i) {
                return je(this, function(e, i, a) {
                    var o = Y(e);
                    return void 0 === a ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? oe(o).scrollLeft() : a, n ? a : oe(o).scrollTop()) : e[i] = a)
                }, e, i, arguments.length, null)
            }
        }), oe.each(["top", "left"], function(e, t) {
            oe.cssHooks[t] = S(ie.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                oe.fn[i] = function(i, a) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        r = n || (!0 === i || !0 === a ? "margin" : "border");
                    return je(this, function(t, n, i) {
                        var a;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? oe.css(t, n, r) : oe.style(t, n, i, r)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), oe.fn.size = function() {
            return this.length
        }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return oe
        });
        var an = e.jQuery,
            on = e.$;
        return oe.noConflict = function(t) {
            return e.$ === oe && (e.$ = on), t && e.jQuery === oe && (e.jQuery = an), oe
        }, typeof t === ke && (e.jQuery = e.$ = oe), oe
    }),
    function(e, t) {
        var n = e(t);
        e.fn.lazyload = function(i) {
            var a, o = this,
                r = {
                    threshold: 0,
                    failure_limit: 200,
                    event: "scroll",
                    effect: "fadeIn",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    effect_speed: 300,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
                },
                s = function() {
                    var t = 0;
                    o.each(function() {
                        if (!e.contains(document.documentElement, this)) return void(o = o.not(this));
                        var n = e(this);
                        if (n.hasClass("lazyhero")) return void n.trigger("appear");
                        if (!r.skip_invisible || n.is(":visible"))
                            if (e.abovethetop(this, r) || e.leftofbegin(this, r));
                            else if (e.belowthefold(this, r) || e.rightoffold(this, r)) {
                            if (++t > r.failure_limit) return !1
                        } else n.trigger("appear")
                    }), o.size() || (a.unbind(r.event, l), n.unbind("resize", l), n.unbind("smoothscroll.move", l))
                },
                l = function() {
                    return s()
                };
            return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), e.extend(r, i)), o = e(o).filter(function() {
                var t = e(this);
                if (t.data("_lazyload")) {
                    if (r.load) {
                        var n = t.data("_lazyloadOnLoad");
                        e.isArray(n) || (n = []), n.push(r.load), t.data("_lazyloadOnLoad", n)
                    }
                    return !1
                }
                return "" !== e.trim(t.data(r.data_attribute)) && (t.attr("src") != t.data(r.data_attribute) || (r.load && r.load.call(this, o.length, r), !1))
            }), a = void 0 === r.container || r.container === t ? n : e(r.container), 0 === r.event.indexOf("scroll") && a.bind(r.event, l), o.each(function() {
                var t = this,
                    n = e(t);
                n.data("_lazyload", !0), n.data("originalSrc", n.attr("src") || ""), t.loaded = !1, !r.placeholder || void 0 !== n.attr("src") && !1 !== n.attr("src") || n.attr("src", r.placeholder), n.one("appear", function() {
                    if (!this.loaded) {
                        if (r.appear) {
                            var i = o.length;
                            r.appear.call(t, i, r)
                        }
                        e("<img />").bind("load error", function() {
                            var i = o.length,
                                a = n.data("_lazyloadOnLoad");
                            n.stop(!0).hide().attr("src", n.data(r.data_attribute)), null !== r.effect && ("fadeIn" == r.effect ? n.fadeTo(0, 0).stop(!0, !0).fadeTo(r.effect_speed, 1) : n[r.effect](r.effect_speed)), t.loaded = !0, r.load && r.load.call(t, i, r), e.isArray(a) && e.each(a, function() {
                                this.call(t, i, r)
                            }), n.removeData("_lazyloadOnLoad"), n.removeData("_lazyload"), e(this).remove()
                        }).attr("src", n.data(r.data_attribute))
                    }
                    o = o.not(t)
                }), 0 !== r.event.indexOf("scroll") && n.bind(r.event, function(e) {
                    t.loaded || n.trigger("appear")
                })
            }), n.bind("resize", l), n.bind("smoothscroll.move", l), "scroll" == r.event && n.trigger(r.event), this
        }, e.belowthefold = function(i, a) {
            return (void 0 === a.container || a.container === t ? n.height() + n.scrollTop() : e(a.container).offset().top + e(a.container).height()) <= e(i).offset().top - a.threshold
        }, e.rightoffold = function(i, a) {
            return (void 0 === a.container || a.container === t ? n.width() + n.scrollLeft() : e(a.container).offset().left + e(a.container).width()) <= e(i).offset().left - a.threshold
        }, e.abovethetop = function(i, a) {
            return (void 0 === a.container || a.container === t ? n.scrollTop() : e(a.container).offset().top) >= e(i).offset().top + a.threshold + e(i).height()
        }, e.leftofbegin = function(i, a) {
            return (void 0 === a.container || a.container === t ? n.scrollLeft() : e(a.container).offset().left) >= e(i).offset().left + a.threshold + e(i).width()
        }, e.inviewport = function(t, n) {
            return !e.belowthefold(t, n) && !e.abovethetop(t, n)
        }, e.extend(e.expr[":"], {
            "below-the-fold": function(t) {
                return e.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function(t) {
                return !e.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-screen": function(t) {
                return e.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-screen": function(t) {
                return !e.rightoffold(t, {
                    threshold: 0
                })
            },
            "in-viewport": function(t) {
                return e.inviewport(t, {
                    threshold: 0
                })
            },
            "above-the-fold": function(t) {
                return !e.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-fold": function(t) {
                return e.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-fold": function(t) {
                return !e.rightoffold(t, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window), define("lazyloading", ["jquery"], function() {}),
    function(e) {
        e.extend(e, {
            placeholder: {
                browser_supported: function() {
                    return void 0 !== this._supported ? this._supported : this._supported = !!("placeholder" in e('<input type="text">')[0])
                },
                shim: function(t) {
                    var n = {
                        color: "#888",
                        cls: "placeholder",
                        selector: "input[placeholder], textarea[placeholder]"
                    };
                    return e.extend(n, t), !this.browser_supported() && e(n.selector)._placeholder_shim(n)
                }
            }
        }), e.extend(e.fn, {
            _placeholder_shim: function(t) {
                function n(t) {
                    var n = e(t).offsetParent().offset(),
                        i = e(t).offset();
                    return {
                        top: i.top - n.top,
                        left: i.left - n.left,
                        width: e(t).width()
                    }
                }

                function i(t) {
                    var a = t.data("target");
                    void 0 !== a && (t.css(n(a)), e(window).one("resize", function() {
                        i(t)
                    }))
                }
                return this.each(function() {
                    var a = e(this);
                    if (a.is(":visible"), !0) {
                        if (a.data("placeholder")) {
                            return a.data("placeholder").css(n(a)), !0
                        }
                        var o = {};
                        a.is("textarea") || "auto" == a.css("height") || (o = {
                            lineHeight: a.css("height"),
                            whiteSpace: "nowrap"
                        });
                        var r = e("<label />").text(a.attr("placeholder")).addClass(t.cls).css(e.extend({
                            position: "absolute",
                            display: "inline",
                            float: "none",
                            overflow: "hidden",
                            textAlign: "left",
                            color: t.color,
                            cursor: "text",
                            paddingTop: a.css("padding-top"),
                            paddingRight: a.css("padding-right"),
                            paddingBottom: a.css("padding-bottom"),
                            paddingLeft: a.css("padding-left"),
                            fontSize: a.css("font-size"),
                            fontFamily: a.css("font-family"),
                            fontStyle: a.css("font-style"),
                            fontWeight: a.css("font-weight"),
                            textTransform: a.css("text-transform"),
                            backgroundColor: "transparent",
                            zIndex: 99
                        }, o)).css(n(this)).attr("for", this.id).data("target", a).click(function() {
                            e(this).data("target").focus()
                        }).insertBefore(this);
                        a.data("placeholder", r).keydown(function() {
                            r.hide()
                        }).blur(function() {
                            r[a.val().length ? "hide" : "show"]()
                        }).triggerHandler("blur"), e(window).one("resize", function() {
                            i(r)
                        })
                    }
                })
            }
        })
    }(jQuery), jQuery(document).add(window).bind("ready load", function() {
        jQuery.placeholder && jQuery.placeholder.shim()
    }), define("placeholderShim", ["jquery"], function() {}), define("lib/polyfills/bind", [], function() {
        function e() {}
        var t = Array.prototype.slice,
            n = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            };
        Function.prototype.bind || (Function.prototype.bind = function(i) {
            var a = this;
            if (!n(a)) throw new TypeError("Function.prototype.bind called on incompatible " + a);
            for (var o = t.call(arguments, 1), r = function() {
                    if (this instanceof d) {
                        var e = a.apply(this, o.concat(t.call(arguments)));
                        return Object(e) === e ? e : this
                    }
                    return a.apply(i, o.concat(t.call(arguments)))
                }, s = Math.max(0, a.length - o.length), l = [], c = 0; c < s; c++) l.push("$" + c);
            var d = Function("binder", "return function(" + l.join(",") + "){return binder.apply(this,arguments)}")(r);
            return a.prototype && (e.prototype = a.prototype, d.prototype = new e, e.prototype = null), d
        })
    }),
    function(e) {
        for (var t = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[n[i] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[i] + "CancelAnimationFrame"] || e[n[i] + "CancelRequestAnimationFrame"];
        e.requestAnimationFrame && e.cancelAnimationFrame || (e.requestAnimationFrame = function(n) {
            var i = +new Date,
                a = Math.max(0, 16 - (i - t)),
                o = e.setTimeout(function() {
                    n(i + a)
                }, a);
            return t = i + a, o
        }, e.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(window), define("lib/polyfills/rAF", function() {}),
    function(e, t) {
        "use strict";

        function n(e) {
            this.callback = e, this.ticking = !1
        }

        function i(e) {
            if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
            var t, n, a = e || {};
            for (n = 1; n < arguments.length; n++) {
                var o = arguments[n] || {};
                for (t in o) "object" == typeof a[t] ? a[t] = i(a[t], o[t]) : a[t] = a[t] || o[t]
            }
            return a
        }

        function a(e, t) {
            t = i(t, a.options), this.lastKnownScrollY = 0, this.elem = e, this.$elem = $(e), this.debouncer = new n(this.update.bind(this)), this.tolerance = t.tolerance, this.classes = t.classes, this.offset = t.offset, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop
        }
        var o = {
            bind: !! function() {}.bind
        };
        n.prototype = {
            constructor: n,
            update: function() {
                this.callback && this.callback(), this.ticking = !1
            },
            requestTick: function() {
                this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
            },
            handleEvent: function() {
                this.requestTick()
            }
        }, a.prototype = {
            constructor: a,
            init: function() {
                if (a.cutsTheMustard) return this.$elem.addClass(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this
            },
            destroy: function() {
                var t = this.classes;
                this.initialised = !1, $(e).off("scroll", this.debouncerHandle), $("body").off("touchmove", this.touchmoveHandler), this.$elem.removeClass(t.unpinned).removeClass(t.pinned).removeClass(t.top).removeClass(t.initial)
            },
            attachEvent: function() {
                this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scrollHandler = this.debouncer.handleEvent.bind(this.debouncer), this.touchmoveHandler = this.update.bind(this), $(e).on("scroll", this.scrollHandler), $("body").on("touchmove", this.touchmoveHandler), this.debouncer.handleEvent())
            },
            unpin: function() {
                var e = this.classes;
                !this.$elem.hasClass(e.pinned) && this.$elem.hasClass(e.unpinned) || (this.$elem.addClass(e.unpinned).removeClass(e.pinned), this.onUnpin && this.onUnpin.call(this))
            },
            pin: function() {
                var e = this.classes;
                this.$elem.hasClass(e.unpinned) && (this.$elem.removeClass(e.unpinned).addClass(e.pinned), this.onPin && this.onPin.call(this))
            },
            top: function() {
                var e = this.classes;
                this.$elem.hasClass(e.top) || (this.$elem.addClass(e.top).removeClass(e.notTop), this.onTop && this.onTop.call(this))
            },
            notTop: function() {
                var e = this.classes;
                this.$elem.hasClass(e.notTop) || (this.$elem.addClass(e.notTop).removeClass(e.top), this.onNotTop && this.onNotTop.call(this))
            },
            getScrollY: function() {
                return void 0 !== e.pageYOffset ? e.pageYOffset : (t.documentElement || t.body.parentNode || t.body).scrollTop
            },
            getViewportHeight: function() {
                return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
            },
            getDocumentHeight: function() {
                var e = t.body,
                    n = t.documentElement;
                return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight)
            },
            isOutOfBounds: function(e) {
                var t = e < 0,
                    n = e + this.getViewportHeight() > this.getDocumentHeight();
                return t || n
            },
            toleranceExceeded: function(e) {
                return Math.abs(e - this.lastKnownScrollY) >= this.tolerance
            },
            shouldUnpin: function(e, t) {
                var n = e > this.lastKnownScrollY,
                    i = e >= this.offset;
                return n && i && t
            },
            shouldPin: function(e, t) {
                var n = e < this.lastKnownScrollY,
                    i = e <= this.offset;
                return n && t || i
            },
            update: function() {
                var t = this.getScrollY(),
                    n = this.toleranceExceeded(t);
                if (e._scrollAnimation) return void this.unpin();
                this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t)
            }
        }, a.options = {
            tolerance: 0,
            offset: 0,
            classes: {
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                initial: "headroom"
            }
        }, a.cutsTheMustard = void 0 !== o && o.bind, e.Headroom = a
    }(window, document), define("lib/headroom", function() {}),
    function(e) {
        e && (e.fn.headroom = function(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("headroom"),
                    a = "object" == typeof t && t;
                a = e.extend(!0, {}, Headroom.options, a), i || (i = new Headroom(this, a), i.init(), n.data("headroom", i)), "string" == typeof t && i[t]()
            })
        }, e("[data-headroom]").each(function() {
            var t = e(this);
            t.headroom(t.data())
        }))
    }(window.Zepto || window.jQuery), define("headroom", ["jquery", "lib/polyfills/bind", "lib/polyfills/rAF", "lib/headroom"], function() {}),
    function(e, t, n) {
        function i(e, t) {
            return typeof e === t
        }

        function a(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }

        function o() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function r() {
            var e = t.body;
            return e || (e = o(C ? "svg" : "body"), e.fake = !0), e
        }

        function s(e, n, i, a) {
            var s, l, c, d, u = "modernizr",
                h = o("div"),
                f = r();
            if (parseInt(i, 10))
                for (; i--;) c = o("div"), c.id = a ? a[i] : u + (i + 1), h.appendChild(c);
            return s = o("style"), s.type = "text/css", s.id = "s" + u, (f.fake ? f : h).appendChild(s), f.appendChild(h), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), h.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", d = w.style.overflow, w.style.overflow = "hidden", w.appendChild(f)), l = n(h, e), f.fake ? (f.parentNode.removeChild(f), w.style.overflow = d, w.offsetHeight) : h.parentNode.removeChild(h), !!l
        }

        function l(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function d(e, t, n) {
            var a;
            for (var o in e)
                if (e[o] in t) return !1 === n ? e[o] : (a = t[e[o]], i(a, "function") ? c(a, n || t) : a);
            return !1
        }

        function u(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function h(t, n, i) {
            var a;
            if ("getComputedStyle" in e) {
                a = getComputedStyle.call(e, t, n);
                var o = e.console;
                if (null !== a) i && (a = a.getPropertyValue(i));
                else if (o) {
                    var r = o.error ? "error" : "log";
                    o[r].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else a = !n && t.currentStyle && t.currentStyle[i];
            return a
        }

        function f(t, i) {
            var a = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; a--;)
                    if (e.CSS.supports(u(t[a]), i)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var o = []; a--;) o.push("(" + u(t[a]) + ":" + i + ")");
                return o = o.join(" or "), s("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == h(e, null, "position")
                })
            }
            return n
        }

        function p(e, t, r, s) {
            function c() {
                u && (delete z.style, delete z.modElem)
            }
            if (s = !i(s, "undefined") && s, !i(r, "undefined")) {
                var d = f(e, r);
                if (!i(d, "undefined")) return d
            }
            for (var u, h, p, m, g, v = ["modernizr", "tspan", "samp"]; !z.style && v.length;) u = !0,
                z.modElem = o(v.shift()), z.style = z.modElem.style;
            for (p = e.length, h = 0; h < p; h++)
                if (m = e[h], g = z.style[m], l(m, "-") && (m = a(m)), z.style[m] !== n) {
                    if (s || i(r, "undefined")) return c(), "pfx" != t || m;
                    try {
                        z.style[m] = r
                    } catch (e) {}
                    if (z.style[m] != g) return c(), "pfx" != t || m
                }
            return c(), !1
        }

        function m(e, t, n, a, o) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                s = (e + " " + j.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? p(s, t, a, o) : (s = (e + " " + D.join(r + " ") + r).split(" "), d(s, t, n))
        }

        function g(e, t, i) {
            return m(e, n, n, t, i)
        }
        var v = [],
            y = [],
            b = {
                _version: "3.6.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        t(n[e])
                    }, 0)
                },
                addTest: function(e, t, n) {
                    y.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function(e) {
                    y.push({
                        name: null,
                        fn: e
                    })
                }
            },
            x = function() {};
        x.prototype = b, x = new x;
        var w = t.documentElement,
            C = "svg" === w.nodeName.toLowerCase();
        C || function(e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    i = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
            }

            function i() {
                var e = y.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function a(e, t) {
                var n = y.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, c(t)
            }

            function o(e) {
                var t = v[e[m]];
                return t || (t = {}, g++, e[m] = g, v[g] = t), t
            }

            function r(e, n, i) {
                if (n || (n = t), u) return n.createElement(e);
                i || (i = o(n));
                var a;
                return a = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !a.canHaveChildren || f.test(e) || a.tagUrn ? a : i.frag.appendChild(a)
            }

            function s(e, n) {
                if (e || (e = t), u) return e.createDocumentFragment();
                n = n || o(e);
                for (var a = n.frag.cloneNode(), r = 0, s = i(), l = s.length; r < l; r++) a.createElement(s[r]);
                return a
            }

            function l(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                    return y.shivMethods ? r(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-:]+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
            }

            function c(e) {
                e || (e = t);
                var i = o(e);
                return !y.shivCSS || d || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || l(e, i), e
            }
            var d, u, h = e.html5 || {},
                f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                m = "_html5shiv",
                g = 0,
                v = {};
            ! function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", d = "hidden" in e, u = 1 == e.childNodes.length || function() {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                    }()
                } catch (e) {
                    d = !0, u = !0
                }
            }();
            var y = {
                elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: "3.7.3",
                shivCSS: !1 !== h.shivCSS,
                supportsUnknownElements: u,
                shivMethods: !1 !== h.shivMethods,
                type: "default",
                shivDocument: c,
                createElement: r,
                createDocumentFragment: s,
                addElements: a
            };
            e.html5 = y, c(t), "object" == typeof module && module.exports && (module.exports = y)
        }(void 0 !== e ? e : this, t);
        var k = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        b._prefixes = k;
        var E = "CSS" in e && "supports" in e.CSS,
            T = "supportsCSS" in e;
        x.addTest("supports", E || T);
        var S = function() {
            var t = e.matchMedia || e.msMatchMedia;
            return t ? function(e) {
                var n = t(e);
                return n && n.matches || !1
            } : function(t) {
                var n = !1;
                return s("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                }), n
            }
        }();
        b.mq = S;
        var A = b.testStyles = s;
        x.addTest("touchevents", function() {
            var n;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
            else {
                var i = ["@media (", k.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                A(i, function(e) {
                    n = 9 === e.offsetTop
                })
            }
            return n
        });
        var N = "Moz O ms Webkit",
            j = b._config.usePrefixes ? N.split(" ") : [];
        b._cssomPrefixes = j;
        var L = function(t) {
            var i, a = k.length,
                o = e.CSSRule;
            if (void 0 === o) return n;
            if (!t) return !1;
            if (t = t.replace(/^@/, ""), (i = t.replace(/-/g, "_").toUpperCase() + "_RULE") in o) return "@" + t;
            for (var r = 0; r < a; r++) {
                var s = k[r];
                if (s.toUpperCase() + "_" + i in o) return "@-" + s.toLowerCase() + "-" + t
            }
            return !1
        };
        b.atRule = L;
        var D = b._config.usePrefixes ? N.toLowerCase().split(" ") : [];
        b._domPrefixes = D;
        var q = {
            elem: o("modernizr")
        };
        x._q.push(function() {
            delete q.elem
        });
        var z = {
            style: q.elem.style
        };
        x._q.unshift(function() {
            delete z.style
        }), b.testAllProps = m;
        b.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? L(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? m(e, t, n) : m(e, "pfx"))
        };
        b.testAllProps = g, x.addTest("csstransforms", function() {
                return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0)
            }), x.addTest("csstransforms3d", function() {
                return !!g("perspective", "1px", !0)
            }),
            function() {
                var e, t, n, a, o, r, s;
                for (var l in y)
                    if (y.hasOwnProperty(l)) {
                        if (e = [], t = y[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                        for (a = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) r = e[o], s = r.split("."), 1 === s.length ? x[s[0]] = a : (!x[s[0]] || x[s[0]] instanceof Boolean || (x[s[0]] = new Boolean(x[s[0]])), x[s[0]][s[1]] = a), v.push((a ? "" : "no-") + s.join("-"))
                    }
            }(),
            function(e) {
                var t = w.className,
                    n = x._config.classPrefix || "";
                if (C && (t = t.baseVal), x._config.enableJSClass) {
                    var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    t = t.replace(i, "$1" + n + "js$2")
                }
                x._config.enableClasses && (t += " " + n + e.join(" " + n), C ? w.className.baseVal = t : w.className = t)
            }(v), delete b.addTest, delete b.addAsyncTest;
        for (var O = 0; O < x._q.length; O++) x._q[O]();
        e.Modernizr = x
    }(window, document), define("modernizr", function() {}), define("module/globals/navigation", ["jquery", "lazyloading", "placeholderShim", "headroom", "modernizr"], function(e) {
        var t = window,
            n = e(t),
            i = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
            i[t] = function(t) {
                return Math.pow(t, e + 2)
            }
        }), e.each(i, function(t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
            }
        }), e(function() {
            e.placeholder.shim(), e(".share-item > a").off("click.active").on("click.active", function(t) {
                t.preventDefault(), e(this).parent().siblings().removeClass("active"), e(this).parent().toggleClass("active"), e(this).next("ul").slideToggle(o)
            })
        });
        var a = {},
            o = {
                duration: 150,
                easing: "easeInCubic"
            };
        return e(".nav-footer a").each(function() {
            var t = e(this);
            t.off("click.pulse").on("click.pulse", function() {
                t.toggleClass("pulse"), setTimeout(function() {
                    t.removeClass("pulse")
                }, 250)
            })
        }), e(".nav-menu > ul > li  ul a").each(function() {
            var t = e(this);
            t.off("click").click(function(e) {
                t.parent("li").hasClass("toggle-keyword") && (e.preventDefault(), t.parents("ul").first().find(".toggle-keyword").toggleClass("mobile-hide").find("input:visible").focus()), t.hasClass("projects_keyword_search_submit_button") && (e.preventDefault(), t.parents("form").submit()), t.toggleClass("pulse"), setTimeout(function() {
                    t.removeClass("pulse")
                }, 500)
            })
        }), e(".nav-menu > ul > li").each(function() {
            var n = e(this),
                i = n.find("> a");
            n.find("ul").size() > 0 && i.addClass("collapsed").append('<i class="icon-menu-state"></i>'), i.off("click").click(function(n) {
                if (i.toggleClass("pulse"), setTimeout(function() {
                        i.removeClass("pulse")
                    }, 500), !t.Gensler.isSmartphone()) return !0;
                var a = e(i.siblings("ul"));
                if (0 === a.size()) return !0;
                i.toggleClass("collapsed"), a.is(":visible") ? a.slideUp(o) : (e(".nav-menu > ul > li ul:visible").each(function() {
                    e(this).slideUp(o), e(this).parent().find("> a").addClass("collapsed")
                }), a.slideDown(o)), n.preventDefault()
            })
        }), a.openSearchMenu = function() {
            this.addClass("active"), a.mainContainer.addClass("search-menu-open"), e("form.search-menu").removeClass("mobile-hide").find("input[type=text]").focus()
        }, a.closeSearchMenu = function() {
            this.removeClass("active"), e("form.search-menu").addClass("mobile-hide"), a.mainContainer.removeClass("search-menu-open")
        }, a.showOverlay = function() {
            e("div.content-overlay").remove();
            var t = e(document.createElement("div")).addClass("content-overlay");
            t.on("click", a.closeNav), e("div.contents-wrapper").append(t), t.fadeIn(300)
        }, a.hideOverlay = function() {
            e("div.content-overlay").fadeOut(300, function() {
                e(this).remove()
            })
        }, a.openNav = function() {
            a.showOverlay(), e("body").addClass("mobile-nav-open"), n.scrollTop(0)
        }, a.closeNav = function() {
            a.hideOverlay(), e("body").removeClass("mobile-nav-open")
        }, a.toggleNav = function() {
            e("body").hasClass("mobile-nav-open") ? a.closeNav() : a.openNav()
        }, a.mainContainer = e(".contents-container"), a.gridBlocks = e([]), a.lazyBlocks = e([]), a.updateLazyBlocks = function(e) {
            !0 === e ? a.lazyBlocks = a.lazyBlocks.filter(".lazy-block-bg") : (a.gridBlocks = a.mainContainer.find(".grid-block").filter(":visible"), a.gridBlocks = a.gridBlocks.add(a.mainContainer.find(".scrollable:visible").find(".grid-block")), a.lazyBlocks = a.gridBlocks.find(".lazy-block.lazy-block-bg"))
        }, a.resetLazyBlocks = function() {
            var t = a.mainContainer.find(".grid-block .lazy-block").not(":visible");
            t.find("img.lazy").each(function() {
                this.src.indexOf(e(this).data("original")) >= 0 && (this.src = "/images/white_140x140-def7dd69.gif")
            }), t.addClass("lazy-block-bg transitions")
        }, a.doLazyLoading = function(n) {
            n && a.gridBlocks.find("img.lazy").lazyload(), a.lazyBlocks.size() && a.lazyBlocks.each(function() {
                var n = e(this);
                if (n.data("t")) return !0;
                var i = 400,
                    o = 300,
                    r = n.closest(".grid-container");
                void 0 !== r.data("min") && r.data("min"), void 0 !== r.data("max") && (i = r.data("max")), void 0 !== r.data("speed") && (o = r.data("speed"));
                var s = Math.min(i * Math.random() + 100, i),
                    l = setTimeout(function() {
                        e.belowthefold(n, {
                            container: t,
                            threshold: 0
                        }) || (n.removeClass("lazy-block-bg").trigger("update"), a.updateLazyBlocks(!0), setTimeout(function() {
                            n.removeClass("transitions")
                        }, o)), n.removeData("t")
                    }, s);
                n.data("t", l)
            })
        }, a.autoShareMenu = !(e(".slot-component-share").size() >= 1), a.openShareMenu = function() {
            e(".btn-link.btn-share").addClass("active"), e(".nav-share").show(), e(".search-menu").addClass("share-active"), e(".intra-nav").addClass("share-active"), e(".secondary-section").addClass("share-active")
        }, a.closeShareMenu = function() {
            e(".btn-link.btn-share").removeClass("active"), e(".nav-share").hide(), e(".search-menu").removeClass("share-active"), e(".intra-nav").removeClass("share-active"), e(".secondary-section").removeClass("share-active")
        }, a.toggleShareMenu = function() {
            var t = e(".nav-share"),
                n = !t.is(":visible");
            return n ? (a.closeSearchDropdown(), a.openShareMenu()) : a.closeShareMenu(), n
        }, a.openSearchDropdown = function() {
            var t = e(".btn-link.btn-search"),
                n = e(".search-menu"),
                i = n.find(".search-form-wrapper"),
                a = i.find("input");
            t.addClass("active"), i.addClass("active"), a.is(":focus") || a.focus(), n.addClass("search-active"), e.placeholder.shim()
        }, a.closeSearchDropdown = function() {
            var t = e(".btn-link.btn-search"),
                n = e(".search-menu"),
                i = n.find(".search-form-wrapper");
            t.removeClass("active"), i.removeClass("active"), n.removeClass("search-active")
        }, a.toggleSearchDropdown = function() {
            var t = e(".search-menu .search-form-wrapper"),
                n = !t.hasClass("active");
            return n ? (a.closeShareMenu(), a.openSearchDropdown()) : a.closeSearchDropdown(), n
        }, a.tabToggleInit = function() {
            var n = e(".submenu-container"),
                i = "collapsed";
            n.find(".tab-menu").size() > 0 && (n.addClass("mobile-tab-nav"), n.find("h1").off("click").on("click", function() {
                n.toggleClass(i), n.hasClass(i) ? (e(t).trigger("tabcollapse"), e("#paginator-top-container").addClass(i)) : (e(t).trigger("tabexpand"), e("#paginator-top-container").removeClass(i))
            }))
        }, a.getScrollY = function() {
            return void 0 !== t.pageYOffset ? t.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        }, a.headerInit = function() {
            if (!a.headerInitDone) {
                a.headerInitDone = !0;
                var i = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
                    o = e("#main-header"),
                    r = o.find(".main-nav-container > .container > .nav-menu"),
                    s = o.find(".search-menu-thin"),
                    l = o.find(".toggle-main-menu").eq(0),
                    c = o.find(".main-nav-container .nav-menu > ul > li").not(".mobile-nav-only"),
                    d = !1,
                    u = 0,
                    h = a.getScrollY,
                    f = function() {
                        var e = t,
                            n = "inner";
                        return "innerWidth" in t || (n = "client", e = document.documentElement || document.body), e[n + "Width"]
                    },
                    p = function(e, t, n) {
                        e[(n ? "add" : "remove") + "Class"](t)
                    };
                if (n.on("scroll.header", function() {
                        var t = h(),
                            n = f(),
                            i = l.is(":visible"),
                            s = t > o.height() && !i;
                        if (s && !d ? (d = !0, u = 0, a.autoShareMenu && a.openShareMenu(), e(".secondary-section").addClass("thin-header")) : !s && d && (d = !1, u = 0, e(".secondary-section").removeClass("thin-header"), a.autoShareMenu && a.closeShareMenu()), u != n)
                            if (u = n, i) r.css({
                                maxWidth: ""
                            }), c.css({
                                paddingLeft: "",
                                paddingRight: ""
                            });
                            else if (d && n < 845 && n > 767) {
                            var m = (n - 767) / 78,
                                g = 12 * m / 2;
                            c.stop(!0).animate({
                                paddingLeft: Math.floor(g) + "px",
                                paddingRight: Math.floor(g) + "px"
                            }, 150).promise().done(function() {
                                var t = 0;
                                c.each(function() {
                                    t += e(this).outerWidth(!0)
                                }), r.css({
                                    maxWidth: Math.ceil(t + 10) + "px"
                                })
                            })
                        } else c.css({
                            paddingLeft: "",
                            paddingRight: ""
                        }), r.css({
                            maxWidth: ""
                        });
                        p(o, "shadow animated", t > 0), p(o, "thin", s)
                    }).on("resize.header", function() {
                        e(this).trigger("scroll.header")
                    }).on("orientationchange.header", function() {
                        u = 0, n.trigger("scroll.header")
                    }).trigger("scroll"), s.on("click", ".thin-share", function(e) {
                        e.preventDefault(), e.stopPropagation(), a.autoShareMenu = !1, a.toggleShareMenu()
                    }).on("click", ".thin-search", function(e) {
                        e.preventDefault(), e.stopPropagation(), a.toggleSearchDropdown()
                    }), e("body").on("touchmove.header", function() {
                        var e = h();
                        p(o, "shadow", !d && e > 0 || d && e > o.height())
                    }), i) {
                    var m = function(e) {
                        return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1
                    };
                    o.on("focus", ".search-menu input", function() {
                        e("body").on("touchmove.navHeader", m), n.on("scroll.navHeader resize.navHeader orientationchange.navHeader", function() {
                            o.css({
                                top: h()
                            })
                        }), o.css({
                            position: "absolute",
                            top: h()
                        }), setTimeout(function() {
                            o.css({
                                top: h()
                            })
                        }, 16)
                    }).on("blur", ".search-menu input", function() {
                        n.off(".navHeader"), e("body").off(".navHeader"), o.css({
                            position: "",
                            top: ""
                        })
                    })
                }
            }
        }, a.winH = n.height(), a.winW = n.width(), a.getViewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }, a.start = function() {
            a.updateLazyBlocks();
            var t = 0;
            n.off(".nav").on("load.nav", function() {
                a.updateLazyBlocks(), a.doLazyLoading(!0)
            }).on("tabchange.nav", function(e, t) {
                t && a.resetLazyBlocks(), a.updateLazyBlocks(), a.doLazyLoading(!0)
            }).on("scroll.nav resize.nav", function() {
                a.doLazyLoading(!1)
            }).on("resize.nav", function() {
                a.winH = n.height(), a.winW = n.width();
                var e = a.winW;
                e >= 678 && a.closeNav(), (t < 678 && e >= 678 || t > 678 && e <= 678) && (a.updateLazyBlocks(), a.doLazyLoading(!0)), t = e
            }).trigger("resize.nav"), e(".share-menu").off("click").on("click", function(e) {
                e.stopPropagation()
            }).find("button").off("click").on("click", function(e) {
                e.preventDefault(), a.autoShareMenu = !1, a.toggleShareMenu()
            }), e(".search-menu .search-form-wrapper").off("click").on("click", function(e) {
                e.stopPropagation()
            }), e(".header-wrapper form").each(function() {
                var t = e(this),
                    n = e("input[name=q]", t);
                t.submit(function(e) {
                    var i = n.val().replace(/^\s+|\s+$/g, "");
                    n.val(i), "disabled" == t.find("button,.ui-button-1").attr("disabled") && e.preventDefault()
                }), n.on("input keyup", function() {
                    var e = n.val().replace(/^\s+/g, ""),
                        i = t.find("button,.ui-button-1");
                    e.length < 2 ? i.attr("disabled", "disabled") : i.attr("disabled", !1)
                }).trigger("input")
            }), e(".toggle-search-menu").off("click").on("click", function(t) {
                t.preventDefault(), e(this).hasClass("active") ? a.closeSearchMenu.apply(e(this), t) : a.openSearchMenu.apply(e(this), t)
            }), e(".toggle-main-menu").off("click").on("click", a.toggleNav), a.tabToggleInit(), a.headerInit(), e("#top-of-page").off("click").on("click", function(t) {
                t.preventDefault(), e("html, body").animate({
                    scrollTop: 0
                }, 400, "easeOutCubic")
            }), e(".contents-container").first().on("mouseenter", "a.highlight", function(t) {
                e(this).parents("tr:first, li:first, .highlight-parent:first").find(".highlight").addClass("hover")
            }).on("mouseleave", "a.highlight", function() {
                e(this).parents("tr:first, li:first, .highlight-parent:first").find(".highlight").removeClass("hover")
            })
        }, a
    }), define("module/globals/picturefill", ["jquery"], function(e) {
        var t = window,
            n = -1,
            i = ["data-url", "data-target", "data-caption", "data-overlay", "data-settings", "data-slideshow", "data-slideshow-tablet", "data-slideshow-mobile", "data-credits", "data-headline", "data-headline-pos", "data-headline-mobile", "data-fs-disabled"],
            a = function() {
                var e = t.innerWidth;
                n != e && (n = e, t.picturefill())
            },
            o = function(e, t) {
                if (!(e && e.getAttribute && t && t.setAttribute)) return !1;
                for (var n = 0, a = i.length; n < a; n++) {
                    var o = e.getAttribute(i[n]);
                    null !== o && t.setAttribute(i[n], o)
                }
                return !0
            },
            r = function(e, t) {
                return !!(e && e.className && t && (t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1))
            };
        return t.picturefill = function() {
            for (var n = t.document.getElementsByTagName("div"), i = 0, a = n.length; i < a; i++)
                if (n[i] && null !== n[i].getAttribute("data-picture")) {
                    for (var s = n[i].getElementsByTagName("div"), l = [], c = 0, d = s.length; c < d; c++) {
                        var u = s[c].getAttribute("data-media");
                        if (!u || t.matchMedia && t.matchMedia(u).matches) l.push(s[c]);
                        else if (!t.matchMedia || !t.matchMedia(u).matches) {
                            var h = u.match(/\d+\.?\d*/g),
                                f = window.innerWidth,
                                p = h[0];
                            f >= p && l.push(s[c])
                        }
                    }
                    var m = n[i].getElementsByTagName("img")[0];
                    if (l.length) {
                        m || (m = t.document.createElement("img"), m.alt = n[i].getAttribute("data-alt"), n[i].appendChild(m));
                        var g = l.pop(),
                            v = g.getAttribute("data-src");
                        o(n[i], m), r(m, "lazy") || r(m, "lazyhero") ? m.setAttribute("data-original", v) : m.src = v
                    } else m && n[i].removeChild(m)
                }
            e(t).trigger("picturefillComplete", !0)
        }, {
            start: function() {
                t.addEventListener ? (t.addEventListener("resize", a, !1), t.addEventListener("DOMContentLoaded", function() {
                    t.picturefill(), t.removeEventListener("load", t.picturefill, !1)
                }, !1), t.addEventListener("load", t.picturefill, !1)) : t.attachEvent && t.attachEvent("onload", t.picturefill)
            }
        }
    }), define("module/globals/global", ["jquery"], function(e) {
        var t = window;
        ! function(e) {
            t.isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)), t.isTablet = !t.isMobile && /android|ipad|playbook|silk/i.test(e)
        }(navigator.userAgent || navigator.vendor || t.opera), t.isMobile && e("html").addClass("device-mobile"), t.isTablet && e("html").addClass("device-tablet"), t.createCookie = function(e, t, n, i) {
            var a = "";
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + o.toGMTString()
            }
            document.cookie = e + "=" + t + a + "; path=" + (i || "/")
        }, t.readCookie = function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                for (var a = n[i];
                    " " == a.charAt(0);) a = a.substring(1, a.length);
                if (0 === a.indexOf(t)) return a.substring(t.length, a.length)
            }
            return null
        };
        var n = function() {
            for (var e, t = [], n = 0; n < 256; n++) {
                e = n;
                for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        };
        return t.crc32 = function(e) {
            for (var i = t.crcTable || (t.crcTable = n()), a = -1, o = 0; o < e.length; o++) a = a >>> 8 ^ i[255 & (a ^ e.charCodeAt(o))];
            return (-1 ^ a) >>> 0
        }, t.Gensler = t.Gensler || {}, t.Gensler = e.extend(t.Gensler, {
            global: {
                currentIndex: -1,
                moving: !1,
                scrollAPI: null,
                fade: !1
            },
            isSmartphone: function() {
                var e = !1;
                if (t.matchMedia) {
                    e = t.matchMedia("screen and (max-width: 767px)").matches
                } else e = t.innerWidth <= 767;
                return e
            },
            views: {},
            models: {},
            collections: {},
            routes: {}
        }), {
            start: function() {}
        }
    }), define("ellipsis", ["jquery"], function(e) {
        "use strict";

        function t(e) {
            var n = [];
            for (e = e.firstChild; e; e = e.nextSibling) 3 == e.nodeType ? n.push(e) : n = n.concat(t(e));
            return n
        }

        function n(n, o) {
            if (o.height) {
                n = e(n);
                var r = n.get(0),
                    s = 0;
                if (s = "auto" == o.height ? r.clientHeight : parseInt(o.height, 10)) {
                    n.data("ellipsis") && (l || r.scrollHeight <= s) && (i(r), n.data("ellipsis", !1));
                    var c = e.trim(n.text());
                    if ("auto" == o.breakWord && (n.hasClass("ellipsis-breakword") ? o.breakWord = !0 : o.breakWord = c.indexOf(" ") < 0), c && a(r) > s + 2) {
                        var d = t(r);
                        d.reverse();
                        for (var u = 0; u < d.length; u++) {
                            l ? e(d[u].parentNode).data("text" + u, d[u].data) : d[u].originalData || (d[u].originalData = d[u].data);
                            var h = o.ellipsis.length;
                            if (d[u].data += o.ellipsis, o.breakWord) {
                                for (; a(r) > s && d[u].data.length;)
                                    if (d[u].data = d[u].data.slice(0, -h - 1) + o.ellipsis, d[u].data.length <= h) {
                                        d[u].data = " ";
                                        break
                                    }
                            } else
                                for (; a(r) > s && d[u].data.length;)
                                    if (d[u].data = d[u].data.slice(0, -h).substring(0, d[u].data.lastIndexOf(" ")) + o.ellipsis, d[u].data.length <= h) {
                                        d[u].data = " ";
                                        break
                                    } if (d[u].data.length > h + 1) {
                                o.breakWord ? d[u].data = d[u].data.slice(0, -h).replace(/\s+$/, "") + o.ellipsis : d[u].data = d[u].data.slice(0, -h).replace(/\W+$/, "") + o.ellipsis;
                                break
                            }
                            if (" " == e(d[u].parentNode).text()) {
                                if (e(d[u].parentNode).is(n)) break;
                                e(d[u].parentNode).addClass("ellipsis-hide").hide().parents().each(function() {
                                    return !e(this).is(n) && ("" === e(this).text().replace(/\s+$/gm, "") && void e(this).addClass("ellipsis-hide").hide())
                                })
                            } else d[u].data = ""
                        }
                        n.data("ellipsis", !0)
                    }
                }
            }
        }

        function i(n) {
            var i = e(n),
                a = i.data();
            if (a.originalText) return void i.text(a.originalText);
            var o = t(n);
            o.reverse();
            for (var r in o)
                if (o[r].originalData) o[r].data = o[r].originalData, delete o[r].originalData;
                else {
                    var s = e(o[r].parentNode).data("text" + r);
                    s && (o[r].data = s, e(o[r].parentNode).removeData("text" + r))
                }
            i.find(".ellipsis-hide").show().removeClass(".ellipsis-hide")
        }

        function a(e) {
            var t = e.scrollHeight;
            return t || (t = o(e)), t
        }

        function o(t) {
            var n = 0;
            return e(t).children(":visible").each(function() {
                n += e(this).outerHeight(!0)
            }), n
        }

        function r(t, n, i) {
            t = e(t);
            var a, o, r = t.data();
            if (r.originalText || (r.originalText = t.text()), o = r.originalText, t.text(o), a = parseFloat(t.css("lineHeight")), !isNaN(a))
                for (; Math.round(t.innerHeight() / a) > i;) {
                    var s = o.lastIndexOf(" ");
                    if (-1 == s) break;
                    o = o.substring(0, s).replace(/\W+$/, ""), t.text(o + n.ellipsis)
                }
        }
        var s = {
                ellipsis: "...",
                height: "auto",
                breakWord: "auto"
            },
            l = function() {
                if (/Trident/.test(navigator.userAgent)) return !0;
                var e = document.createTextNode("");
                try {
                    if (e.originalData = "test", "test" != e.originalData) return !0
                } catch (e) {
                    return !0
                }
                return !1
            }();
        return e.fn.ellipsis = function(t) {
            if ("remove" == t) return e(this).each(function() {
                i(this)
            });
            var a, o = e.extend({}, t, s),
                l = n;
            return void 0 !== o.lines && o.lines > 0 && (l = r, a = o.lines), e(this).each(function(t, n) {
                o.auto && e(window).on("resize", function() {
                    setTimeout(function() {
                        l(n, o, a)
                    }, 0)
                }), setTimeout(function() {
                    l(n, o, a)
                }, 0)
            })
        }, {
            start: function() {}
        }
    }), define("adjusttext", ["jquery", "ellipsis"], function(e) {
        "use strict";

        function t(e) {
            return e !== document.body && document.body.contains(e)
        }

        function n(t, n) {
            this.node = t, this.container = e(t), this.options = e.extend({}, i, n), this.lsize = -1, this.children = [], this.setViewport(), this.setChildrenData(), this.container.on("update." + a, e.proxy(this.handleResize, this, !0)), this.container.on("updateText." + a, e.proxy(this.adjustOverflow, this)), this.options.noInitialResize || this.handleResize(), this.triggerCallbacks(this.container)
        }
        var i = {
                minRelativeFontSize: .85,
                minAbsoluteFontSize: 12,
                hideSelector: ".removeable, .desktop-only",
                noMinFontClass: "no-min-font",
                ellipsis: "...",
                ellipsisSelectors: [],
                noOverflowAdjust: !1,
                noEllipsis: [],
                dimension: "width",
                resizeOverflow: !1,
                ignoreElements: ["img", "br", "svg"],
                noInitialResize: !1
            },
            a = "adjustText",
            o = "adjustTextIdx",
            r = window,
            s = [],
            l = {},
            c = null,
            d = function() {
                if (null === c) {
                    var e = document.head || document.getElementsByTagName("head")[0];
                    c = document.createElement("style"), c.type = "text/css", e.appendChild(c)
                }
                return c
            },
            u = function() {
                var e = d(),
                    t = "";
                for (var n in l) l.hasOwnProperty(n) && (t += "." + n + "{", t += "font-size:" + l[n].fontSize + "px !important;", t += "line-height:" + l[n].lineHeight + " !important;", t += "}\n");
                e.styleSheet ? e.styleSheet.cssText = t : (e.innerHTML = "", e.appendChild(document.createTextNode(t)))
            };
        n.prototype.triggerCallbacks = function(e) {
            if (s.length) {
                var t, n = [];
                for (t = 0; t < s.length; t++) s[t].e && s[t].e.is(e) && (n.push(t), s[t].f && s[t].f.call(e));
                for (t = 0; t < n.length; t++) s.splice(n[t], 1)
            }
        }, n.prototype.setViewport = function() {
            var t = this.options;
            this.viewport = 0, "height" == t.dimension ? (this.getSize = e.proxy(this.container.innerHeight, this.container), t.viewport && t.viewport.height && (this.viewport = t.viewport.height)) : (this.getSize = e.proxy(this.container.innerWidth, this.container), t.viewport && t.viewport.width && (this.viewport = t.viewport.width)), this.viewport || (this.viewport = this.getSize())
        }, n.prototype.setChildrenData = function() {
            var t = this.options,
                n = this,
                i = this.container.find(t.ignoreElements.join(","));
            i = i.add(i.find("*")), this.container.find("*").not(i).each(function() {
                var i = e(this);
                if (!i.data(a) && !i.hasClass("resize-disable")) {
                    if (!i.hasClass("resize-force")) {
                        if (!i.contents().filter(function() {
                                if (3 == this.nodeType) return !!e.trim(e(this).text())
                            }).size()) return
                    }
                    var o = /resize-(\d+)/.exec(i.attr("class")),
                        r = {};
                    if (n.getFontSizeLineHeight.call(n, this, r), null !== o && o.length > 1) {
                        if (100 == (o = Math.min(Math.abs(parseInt(o[1], 10)), 100))) return;
                        r.minFontSize = r.fontSize * o / 100
                    } else r.minFontSize = Math.max(r.fontSize * t.minRelativeFontSize, t.minAbsoluteFontSize);
                    var s = a + "-" + n.viewport;
                    s += "-" + (r.fontSize && r.fontSize.toString ? r.fontSize.toString().replace(".", "_") : "none"), s += "-" + (r.lineHeight && r.lineHeight.toString ? r.lineHeight.toString().replace(".", "_") : "none"), s += "-" + (r.minFontSize && r.minFontSize.toString ? r.minFontSize.toString().replace(".", "_") : "none"), i.hasClass(t.noMinFontClass) && (s += "-1", r.noMinFont = !0), r.clsName = s, l[s] || (l[s] = {
                        fontSize: r.fontSize,
                        lineHeight: r.lineHeight
                    }), i.data(a, r), i.addClass(s), r.elm = this, r.cls = s, n.children.push(r)
                }
            })
        }, n.prototype.getFontSizeLineHeight = function(t, n) {
            var i, a, o;
            return !!t && (r.getComputedStyle ? (o = r.getComputedStyle(t, null), i = o.getPropertyValue("font-size"), a = o.getPropertyValue("line-height")) : t.style && (t.style.fontSize && (i = t.style.fontSize), t.style.lineHeight && (a = t.style.lineHeight)), i || (i = e(t).css("font-size")), a || (a = e(t).css("line-height")), i = parseFloat(i), a = ("" + a).endsWith("px") ? (1 == a ? i : parseFloat(a)) / i : parseFloat(a), isNaN(a) && (a = 1), n ? (n.fontSize = i, n.lineHeight = a, !0) : [i, a])
        }, n.prototype.handleResize = function(t) {
            if (null !== this.node.offsetParent) {
                var n = this.getSize(),
                    i = !0 === t;
                n <= 0 || Math.abs(this.lsize - n) < 2 && !i || (this.lsize = n, this.adjust(n), i && u(), this.options.noOverflowAdjust || r.requestAnimationFrame(e.proxy(this.adjustOverflow, this)))
            }
        }, n.prototype.adjust = function(e) {
            var t, n = e / this.viewport;
            for (t = 0; t < this.children.length; t++) {
                var i = this.children[t],
                    a = i.fontSize * n;
                i.noMinFont || (a = Math.max(a, i.minFontSize)), l[i.cls] = {
                    fontSize: a,
                    lineHeight: i.lineHeight
                }
            }
        }, n.prototype.adjustOverflow = function() {
            var e, t = this.node,
                n = this.container.find(this.options.hideSelector).show();
            if (t.clientHeight < t.scrollHeight) {
                if (this.options.resizeOverflow && this.adjust(!0), n.size())
                    for (n.filter(":visible").last().hide(); n.filter(":visible").size() && t.clientHeight < t.scrollHeight;) n.filter(":visible").last().hide();
                var i = !0;
                for (e = 0; e < this.options.noEllipsis.length; e++)
                    if (this.container.is(this.options.noEllipsis[e])) {
                        i = !1;
                        break
                    }
                i && this.container.ellipsis()
            } else this.container.data("ellipsis") && this.container.ellipsis();
            for (e = 0; e < this.options.ellipsisSelectors.length; e++) this.ellipsis.apply(this, this.options.ellipsisSelectors[e])
        }, n.prototype.ellipsis = function(t, n) {
            !t || n && !this.container.is(t) || this.container.find(n || t).each(function() {
                this.style.overflow = "hidden", e(this).ellipsis()
            })
        };
        var h = function() {
            function i(e, t) {
                for (var n = +new Date, i = t; i < s.length && e == d; i++) {
                    if (+new Date - n > 16) {
                        r.requestAnimationFrame(o(e, i));
                        break
                    }
                    s[i] && s[i].handleResize.call(s[i])
                }
                u()
            }

            function o(e, t) {
                return function() {
                    i(e, t)
                }
            }
            var s = [],
                l = 0,
                c = !1,
                d = 0,
                h = function() {
                    e(window).off("." + a).on("resize." + a, f).on("tabchange." + a, f), c = !0
                },
                f = function() {
                    i(++d, 0)
                };
            return {
                add: function(e, t) {
                    return c || h(), l++, s.push(new n(e, t)) - 1
                },
                get: function(e) {
                    return s[e] ? s[e] : null
                },
                count: function() {
                    return l
                },
                remove: function(e) {
                    s[e] && (s[e] = null, l--)
                },
                update: function(e) {
                    return void 0 === e ? (f(), l) : s[e] ? (s[e].handleResize.call(s[e]), 1) : void 0
                },
                checkAll: function() {
                    for (var e = 0; e < s.length; e++) s[e] && !t(s[e].node) && (s[e] = null, l--)
                }
            }
        }();
        return e.adjustText = {
            items: h,
            ready: function(t, n) {
                if (t = e(t), t.size()) {
                    var i = t.data(a);
                    return void 0 !== i && h.get(i) ? (n && n.call(t), !0) : (s.push({
                        e: t,
                        f: n
                    }), !1)
                }
            }
        }, e.fn.adjustText = function(t) {
            return t && "remove" === t ? (e(this).each(function() {
                var t = e(this).data();
                t && void 0 !== t[o] && (h.remove(t[o]), delete t[o])
            }), this) : (h.checkAll(), e(this).each(function() {
                if (!e.trim(e(this).text()).length) return !0;
                var n = e(this).data();
                n[o] || (n[o] = h.add(this, t))
            }), this)
        }, String.prototype.endsWith || (String.prototype.endsWith = function(e) {
            return -1 !== this.indexOf(e, this.length - e.length)
        }), {
            start: function() {}
        }
    }), define("modal", ["jquery"], function(e) {
        "use strict";
        var t = e(window),
            n = e(document),
            i = e(document.body),
            a = {
                clsOverlay: "modal-overlay",
                clsWrapper: "modal-wrapper",
                clsInner: "modal-content"
            },
            o = function(t) {
                var n = {
                    options: t,
                    overlay: e("<div/>").addClass(t.clsOverlay).hide(),
                    wrapper: e("<div/>").addClass(t.clsWrapper),
                    inner: e("<div/>").addClass(t.clsInner),
                    sc: 0
                };
                return n.inner.appendTo(n.wrapper.appendTo(n.overlay)), n.wrapper.append(e('<div class="modal-close"><i class="icon-cancel"></i></div>')), n
            },
            r = function(a) {
                a && (e.modal.close(), a.sc = t.scrollTop(), window.modal = a, i.css({
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    margin: 0,
                    padding: 0
                }).append(a.overlay.show()), t.trigger("modalOpen"), n.off(".modal").on("keydown.modal", function(e) {
                    if (40 == e.keyCode || 38 == e.keyCode || 32 == e.keyCode) return e.preventDefault(), !1;
                    27 == e.keyCode && s(a)
                }), a.wrapper.off().on("click", function() {
                    e.modal.close()
                }), a.inner.off().on("click", function(e) {
                    e.stopPropagation()
                }))
            },
            s = function(e) {
                e && (l(e), i.css({
                    width: "",
                    height: "",
                    overflow: "",
                    margin: "",
                    padding: ""
                }), t.off(".modal").trigger("resize").scrollTop(e.sc), n.off(".modal"), e.overlay.hide(), window.modal = !1)
            },
            l = function(e) {
                e && (e.inner.find("video").each(function() {
                    this.pause && this.pause()
                }), e.inner.find("iframe").each(function() {
                    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo"}', "*"), this.contentWindow.postMessage('{"method":"pause"}', "*")
                }))
            };
        return e.fn.modal = function(t) {
            return e(this).each(function() {
                var n = e(this);
                n.off("click").on("click", function(t) {
                    t.preventDefault();
                    var n = e(this).data(),
                        i = n.modal || !1;
                    if (i) {
                        if (n.iframe) i.inner.html('<iframe src="' + n.iframe + '" frameborder="0" allowTransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                        else if (n.contentId) {
                            var a = e(document.getElementById(n.contentId));
                            a.size() && i.inner.append(a.children())
                        }
                        r(i)
                    }
                }).data("modal", o(e.extend(t, a))), n.data("href") && n.attr("href", n.data("href"))
            }), this
        }, e.modal = {
            close: function() {
                window.modal && s(window.modal), t.trigger("modalClose")
            }
        }, {
            start: function() {
                e(".modal").modal()
            }
        }
    }), define("module/globals/tracking", ["jquery"], function(e) {
        function t() {
            var e, t, s, u, y, b = i(),
                x = n() + b,
                w = a();
            b > r && !l && (e = new Date, p = e.getTime(), t = Math.round((p - h) / 1e3), o && console.log("StartReading (time: %s)", t), v._gaq.push(["_trackEvent", "Reading", "StartReading", "", t]), l = !0), x >= g.innerHeight() && !c && (e = new Date, s = e.getTime(), u = Math.round((s - p) / 1e3), o && console.log("ContentBottom (time: %s)", u), v._gaq.push(["_trackEvent", "Reading", "ContentBottom", "", u]), c = !0), x >= w && !d && (e = new Date, y = e.getTime(), f = Math.round((y - p) / 1e3), f < 60 ? (o && console.log("ReaderType: Scanner"), v._gaq.push(["_setCustomVar", 5, "ReaderType", "Scanner", 2])) : (o && console.log("ReaderType: Reader"), v._gaq.push(["_setCustomVar", 5, "ReaderType", "Reader", 2])), o && console.log("PageBottom (time: %s)", f), v._gaq.push(["_trackEvent", "Reading", "PageBottom", m, f]), d = !0)
        }

        function n() {
            return v.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }

        function i() {
            return void 0 !== v.pageYOffset ? v.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        }

        function a() {
            var e = document.body,
                t = document.documentElement;
            return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
        }
        var o = !1,
            r = 150,
            s = 0,
            l = !1,
            c = !1,
            d = !1,
            u = new Date,
            h = u.getTime(),
            f = 0,
            p = h,
            m = document.title,
            g = e(".contents-container"),
            v = window;
        !v.location.hostname || 0 !== v.location.hostname.lastIndexOf("local.", 0) && 0 !== v.location.hostname.lastIndexOf("dev.", 0) || (o = !0), v._gaq = v._gaq || [], o && console.log("ArticleLoaded"), v._gaq.push(["_trackEvent", "Reading", "ArticleLoaded", "", null, !0]), e(v).on("scroll.tracking", function() {
                s && clearTimeout(s), d || (s = setTimeout(t, 100))
            }),
            function() {
                if (v.history && v.history.pushState) {
                    var t = v.location.pathname + v.location.search;
                    e(v).on("tabchange.tracking", function() {
                        var e = v.location.pathname + v.location.search;
                        t != e && (t = e, v._gaq || (v._gaq = []), v._gaq.push(["_trackPageview", e]), v.ga && v.ga("send", "pageview", e))
                    })
                }
            }(), v.tracking = {
                trackEvent: function(e, t, n) {
                    o && console.log("trackEvent", [e, t, n]), v._gaq.push(["_trackEvent", e, t, n])
                }
            }
    }), define("module/globals/grid", ["jquery", "adjusttext", "modal", "module/globals/tracking"], function(e) {
        function t(t, a, o) {
            for (var s = {
                    ellipsisSelectors: [
                        [".block-description > h4"],
                        [".widget-content-7", "p:first"],
                        [".widget-content-5", "p:eq(1)"],
                        [".job-postings", "li strong"]
                    ],
                    dimension: "height",
                    noEllipsis: [".no-ellipsis", ".block-image", ".block-content-child"],
                    viewport: {
                        height: 250
                    },
                    noInitialResize: !0
                }, l = e([]), c = 0; c < r.length; c++) l = l.add(e(r[c]));
            t || (t = document), e(".grid-container", t).each(function() {
                    var t = [],
                        r = [],
                        c = e(this).hasClass("double-grid-container");
                    if (e(this).find(".grid-block").each(function() {
                            e(this).find(".block-layout").each(function() {
                                var n = e(this),
                                    i = e([]);
                                n.hasClass("block-1-up") || n.hasClass("block-2-up-vertical") ? i = n.find(".block-content") : n.hasClass("block-3-up-left") ? i = n.find("> .block-1 .block-content") : n.hasClass("block-3-up-right") && (i = n.find("> .block-3 .block-content")), r.push.apply(r, i.not(l).toArray()), t.push.apply(t, n.find(".block-content").not(i).not(l).toArray())
                            })
                        }), t = e(t), r = e(r), c) {
                        s.viewport.height = 508, t.not(".block-image").adjustText(e.extend({}, s, {
                            minRelativeFontSize: .5
                        })), t.filter(".block-image").adjustText(e.extend({}, s, {
                            minRelativeFontSize: .5
                        })), r.adjustText(e.extend({}, s, {
                            minRelativeFontSize: .5,
                            viewport: {
                                height: 1024
                            }
                        }));
                        var d = 1024;
                        i.on("resize.grid", function() {
                            var t = i.width() <= 678 ? 508 : 1024;
                            t != d && (r.each(function() {
                                var n, i = e(this).data("adjustText");
                                i && (n = e.adjustText.items.get(i)) && (n.viewport = t)
                            }), d = t, r.trigger("update"))
                        })
                    } else s.viewport.height = 250, t.not(".block-image").adjustText(e.extend({}, s, {
                        minRelativeFontSize: .75
                    })), t.filter(".block-image").adjustText(s), r.adjustText(e.extend({}, s, {
                        viewport: {
                            height: 508
                        }
                    }));
                    a ? (r.trigger("update"), t.trigger("update")) : n.requestAnimationFrame(function() {
                        e.adjustText.items.update()
                    }), o && (r.trigger("updateText"), t.trigger("updateText"))
                }),
                function() {
                    i.off("resize.heroOverlay");
                    var t = e(".hero-overlay");
                    t.size() && i.on("resize.heroOverlay", function() {
                        Math.max(document.documentElement.clientWidth, n.innerWidth || 0) > 678 && (e(this).off("resize.heroOverlay"), t.each(function() {
                            e(this).adjustText("remove").adjustText({
                                dimension: "width",
                                minRelativeFontSize: .4,
                                minAbsoluteFontSize: 14,
                                viewport: {
                                    width: 508
                                }
                            })
                        }))
                    }).trigger("resize.heroOverlay")
                }()
        }
        var n = window,
            i = e(n),
            a = function() {
                for (var e = n.location.search.substring(1).split("&"), t = 0; t < e.length; t++)
                    if ("noresizeinit" == e[t].split("=")[0]) return !0;
                return !1
            }(),
            o = function() {
                for (var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", n[0];);
                return e > 4 ? e : void 0
            }(),
            r = [],
            s = !1;
        o && o < 9 && (r.push(".projects .block-image"), r.push(".people .block-image"));
        var l = e([]),
            c = function(n, i) {
                s || (s = !0, o && o < 9 && d(e("div.block-image")), a || t(i, !1, n && "tabchange" == n.type), l.find(".grid-block .modal, a.modal").modal(), s = !1)
            },
            d = function(t) {
                e(t).each(function() {
                    e(this).find(".block-outline").size() || e(this).append(e(document.createElement("div")).addClass("block-outline"))
                })
            };
        e(function() {
            l = e(".contents-container"), l.size() || (l = e(document)), l.on("mouseenter", ".grid-block .highlight", function() {
                e(this).parents(".grid-block:first").find(".highlight").addClass("hover")
            }).on("mouseleave", ".grid-block .highlight", function() {
                e(this).parents(".grid-block:first").find(".highlight").removeClass("hover")
            }), "webkitRequestAnimationFrame" in n && l.on("mouseenter", ".grid-block .block-image", function() {
                var t = e(this);
                t.parents(".block:first").innerWidth() - parseInt(t.css("left"), 10) < t.innerWidth() ? t.addClass("right1px") : t.removeClass("right1px")
            }), l.find(".breadcrumb-nav").ellipsis({
                auto: !0
            }), o && o < 9 && (i.on("table.update", function() {
                setTimeout(function() {
                    d(l.find("td.image").find(".highlight > div"))
                }, 20)
            }), d(l.find(".aside").find(".contact-image > div")), d(l.find("div.pages-list").find(".highlight > div")), d(l.find("div.resume-body").find(".resume-img")), d(l.find("td.image").find(".highlight > div"))), l.off("click.grid").on("click.grid", "a.grid-link", function(t) {
                var n, i, a = e(t.currentTarget),
                    o = a.closest(".grid-block").eq(0);
                o.size() && (n = o.attr("id").replace("grid-block-", ""), i = o.data("name"), tracking.trackEvent("GridBlocks", n + " " + i, location.pathname + location.search + location.hash, 1))
            })
        }), i.off(".grid").on("load.grid tabchange.grid", c), "complete" === document.readyState && c()
    }), define("module/globals/recaptcha", ["jquery"], function(e) {
        var t = window,
            n = e("body"),
            i = {
                sitekey: "6LcHlAMTAAAAAKfX98QDz0QHMkHv3yGIKo-C6HAm"
            },
            a = function() {
                t.grecaptcha || n.append('<script src="https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit" async defer><\/script>')
            };
        return t.recaptchaCallback = function() {
            n.find(".g-recaptcha").each(function() {
                if (!e(this).data("recaptcha")) {
                    var n, a = e(this),
                        o = e.extend({}, i, {
                            callback: t[a.data("callback")],
                            sitekey: a.data("sitekey"),
                            size: a.data("size"),
                            badge: a.data("badge")
                        });
                    n = t.grecaptcha.render(this, o), a.data("recaptcha", !0), a.data("recaptchaId", n)
                }
            })
        }, {
            render: function() {
                a(), t.grecaptcha && t.recaptchaCallback()
            },
            reset: function(e) {
                a(), t.grecaptcha && t.grecaptcha.reset(e)
            },
            execute: function(e) {
                a(), t.grecaptcha && t.grecaptcha.execute(e)
            },
            getResponse: function(e) {
                return a(), !!t.grecaptcha && t.grecaptcha.getResponse(e)
            }
        }
    }), define("module/globals/util", [], function() {
        var e = {};
        return e.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, e.getBrowserLanguages = function() {
            var e = window.navigator,
                t = e && e.languages ? e.languages : [];
            if (!t.length) {
                var n = e.language || e.browserLanguage || e.userLanguage;
                n && t.push(n)
            }
            if (t.length) {
                var i = [];
                return t.forEach(function(e) {
                    var t, n;
                    5 == e.length ? (t = e.substr(0, 2).toLowerCase(), n = e.substr(3, 2).toUpperCase()) : t = e.toLowerCase(), n && i.push(t + "-" + n), -1 == i.indexOf(t) && i.push(t)
                }), i
            }
            return []
        }, e
    }), define("module/globals/share", ["jquery", "module/globals/navigation", "module/globals/recaptcha", "module/globals/util", "module/globals/tracking"], function(e, t, n, i) {
        function a(e, t, n, i) {
            var a, o;
            a = window.screen.width / 2 - (n / 2 + 10), o = window.screen.height / 2 - (i / 2 + 50), window.open(e, t, "status=no,height=" + i + ",width=" + n + ",resizable=yes,left=" + a + ",top=" + o + ",screenX=" + a + ",screenY=" + o + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no")
        }

        function o() {
            h || (h = e('<div class="form-default form-popup"><form id="email-share" method="post" action="/share"><a class="icon-cancel close" href="#"></a><h2>Share this story</h2><label for="from_name" id="from_name_label">Your Name</label><input type="text" name="from_name" id="from_name"/><label for="from_email" id="from_email_label">Your Email</label><input type="email" name="from_email" id="from_email"/><label for="to_email" id="to_email_label">To <span>(max. 5 Email addresses, separate by commas)</span></label><input type="text" name="to_email" id="to_email"/><label for="email_message" id="email_message_label">Message <span>(optional, max 250 characters)</span></label><textarea name="message" id="email_message" cols="40" rows="8" maxlength="250"></textarea><input type="hidden" name="url" value=""><div class="g-recaptcha"></div><input type="submit" class="button submit" value="Share"/><input type="button" class="button cancel close" value="Cancel"/></form></div>'), h.fadeTo(0, 0).on("click", ".close", function(t) {
                t.preventDefault(), h.fadeTo(250, 0, function() {
                    e(window).off("resize.emailPopup"), h.hide()
                })
            }).on("submit", "form", function(t) {
                if (t.preventDefault(), !p) {
                    var i = e(this);
                    if (p = !0, i.find("[name=url]").val(window.location.pathname + window.location.search + window.location.hash), !r(i)) return p = !1, void i.on("input.validation keyup.validation", "input", function() {
                        r(i) && i.off(".validation")
                    });
                    var a = 0,
                        o = e("<div/>").addClass("status").text("Sending Email"),
                        s = setInterval(function() {
                            ++a > 4 && (a = 0), o.text("Sending Email" + Array(a).join("."))
                        }, 250);
                    i.hide(), h.append(o).css("margin-top", "-50px"), e(window).trigger("resize.emailPopup"), e.ajax({
                        url: i.attr("action"),
                        method: "post",
                        data: i.serialize(),
                        dataType: "json"
                    }).done(function(t) {
                        t.error ? (o.remove(), h.css("margin-top", ""), i.show(), n.reset(h.find("g-recaptcha").data("recaptchaId")), alert(t.error)) : (o.text("Your message has been sent!"), setTimeout(function() {
                            h.fadeTo(250, 0, function() {
                                e(window).off("resize.emailPopup"), h && h.remove(), h = null
                            })
                        }, 2e3))
                    }).fail(function() {
                        o.remove(), h.css("margin-top", ""), i.show(), alert("An error has occurred. Please try again later")
                    }).always(function() {
                        clearInterval(s), p = !1
                    })
                }
            }), e("body").append(h), n.render()), h.fadeTo(250, 1, function() {
                h.find("input").first().focus()
            }), e(window).on("resize.emailPopup", function() {
                var n = h.find("form");
                "absolute" == n.css("position") ? (n.css({
                    top: e(window).scrollTop() + 24
                }), h.height(e("body > .main-wrapper").height())) : (n.css({
                    top: ""
                }), h.height(""), e(window).height() < h.height() ? h.css({
                    position: "absolute",
                    top: Math.max(t.getScrollY() + 30 + h.height() / 2, 30)
                }) : h.css({
                    position: "",
                    top: ""
                }))
            }).trigger("resize.emailPopup")
        }

        function r(t) {
            var n = !1;
            if (l(t, "from_name"), l(t, "from_email"), l(t, "to_email"), t.find("[name=from_name]").val() || (s(t, "from_name", "Required."), n = !0), t.find("[name=from_email]").val()) {
                var i = m.exec(t.find("[name=from_email]").val());
                i ? t.find("[name=from_email]").val(i[0]) : s(t, "from_email", "Please enter a valid email address.")
            } else s(t, "from_email", "Required."), n = !0;
            if (t.find("[name=to_email]").val()) {
                var a, o = t.find("[name=to_email]").val().split(",");
                for (o.length > 5 && (s(t, "to_email", "Max. 5 Email addresses allowed."), n = !0), a = 0; a < o.length; a++) o[a] = e.trim(o[a]), o[a] && !m.exec(o[a]) && (s(t, "to_email", '"' + o[a] + '" is not a valid email address.'), n = !0)
            } else s(t, "to_email", "Required."), n = !0;
            return !n
        }

        function s(t, n, i) {
            t.find('label[for="' + n + '"]').append(e('<span class="error"></span>').text(i)), t.find('[id="' + n + '"]').addClass("error")
        }

        function l(e, t) {
            e.find('label[for="' + t + '"]').find(".error").remove(), e.find('[id="' + t + '"]').removeClass("error")
        }

        function c(t) {
            var n = t.data("network").toLowerCase();
            if (!n || !u[n]) return "";
            var i = window.location.href,
                a = e.trim((window.shareTitle || e('meta[property="og:title"]').attr("content") || document.title).split("|")[0]),
                o = e('meta[property="og:description"]').attr("content") || e("meta[name=description]").attr("content") || "";
            return u[n].replace(/\{url\}/g, encodeURIComponent(i)).replace(/\{title\}/g, encodeURIComponent(a)).replace(/\{summary\}/g, encodeURIComponent(o))
        }

        function d() {
            f || (f = e('<div class="form-popup qr-popup"><a class="icon-cancel close" href="#"></a><img src="/images/qr-wechat-a03d7f9.png" alt="WeChat QR Code"></div>'), f.fadeTo(0, 0).on("click", ".close", function(e) {
                e.preventDefault(), f.fadeTo(250, 0, function() {
                    f.hide()
                })
            }), e("body").append(f)), f.fadeTo(250, 1)
        }
        var u = {
                twitter: "http://twitter.com/share?text={title}&url={url}",
                google: "https://plus.google.com/share?url={url}",
                facebook: "http://www.facebook.com/sharer.php?u={url}",
                linkedin: "http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={summary}&source=Gensler",
                email: "mailto:?subject=" + encodeURIComponent("Shared from www.gensler.com: ") + "{title}&body=" + encodeURIComponent("Have a look at the following page from www.gensler.com:\r\n\r\n") + "{url}"
            },
            h = !1,
            f = !1,
            p = !1,
            m = i.emailRegex;
        e(".share-menu a, .footer-share-menu a, .slot-component-share a").on("click", function(t) {
            var n = e(this),
                i = c(n);
            i && (tracking.trackEvent("Share", "Click", n.data("network")), "Email" == n.data("network") ? (n.attr("href", i), n.hasClass("sendmail") && (t.preventDefault(), o())) : (t.preventDefault(), a(i, e(this).attr("data-network"), 600, 500)))
        }), e("body").on("click", "a.popup-wechat", function(e) {
            window.innerWidth > 678 && (e.preventDefault(), d())
        }), e(window).on("tabchange.share", function(t, n, i) {
            "string" === e.type(i) && (window.shareURL = i)
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("selectr", [], t) : "object" == typeof exports ? module.exports = t("Selectr") : e.Selectr = t("Selectr")
    }(this, function(e) {
        "use strict";

        function t(e, t) {
            return e.hasOwnProperty(t) && (!0 === e[t] || e[t].length)
        }

        function n(e, t, n) {
            e.parentNode ? e.parentNode.parentNode || t.appendChild(e.parentNode) : t.appendChild(e), a.removeClass(e, "excluded"), n || (e.textContent = e.textContent)
        }
        var i = function() {};
        i.prototype = {
            on: function(e, t) {
                this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(t)
            },
            off: function(e, t) {
                this._events = this._events || {}, e in this._events != !1 && this._events[e].splice(this._events[e].indexOf(t), 1)
            },
            emit: function(e) {
                if (this._events = this._events || {}, e in this._events != !1)
                    for (var t = 0; t < this._events[e].length; t++) this._events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }, i.mixin = function(e) {
            for (var t = ["on", "off", "emit"], n = 0; n < t.length; n++) "function" == typeof e ? e.prototype[t[n]] = i.prototype[t[n]] : e[t[n]] = i.prototype[t[n]];
            return e
        };
        var a = {
                escapeRegExp: function(e) {
                    var t = /[\\^$.*+?()[\]{}|]/g,
                        n = new RegExp(t.source);
                    return e && n.test(e) ? e.replace(t, "\\$&") : e
                },
                extend: function(e, t) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var i = t[n];
                            i && "[object Object]" === Object.prototype.toString.call(i) ? (e[n] = e[n] || {}, a.extend(e[n], i)) : e[n] = i
                        }
                    return e
                },
                each: function(e, t, n) {
                    if ("[object Object]" === Object.prototype.toString.call(e))
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, i, e[i], e);
                    else
                        for (var a = 0, o = e.length; a < o; a++) t.call(n, a, e[a], e)
                },
                createElement: function(e, t) {
                    var n = document,
                        i = n.createElement(e);
                    if (t && "[object Object]" === Object.prototype.toString.call(t)) {
                        var a;
                        for (a in t) a in i ? i[a] = t[a] : "html" === a ? i.innerHTML = t[a] : i.setAttribute(a, t[a])
                    }
                    return i
                },
                hasClass: function(e, t) {
                    if (e) return e.classList ? e.classList.contains(t) : !!e.className && !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
                },
                addClass: function(e, t) {
                    a.hasClass(e, t) || (e.classList ? e.classList.add(t) : e.className = e.className.trim() + " " + t)
                },
                removeClass: function(e, t) {
                    a.hasClass(e, t) && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " "))
                },
                closest: function(e, t) {
                    return e && e !== document.body && (t(e) ? e : a.closest(e.parentNode, t))
                },
                isInt: function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                },
                debounce: function(e, t, n) {
                    var i;
                    return function() {
                        var a = this,
                            o = arguments,
                            r = function() {
                                i = null, n || e.apply(a, o)
                            },
                            s = n && !i;
                        clearTimeout(i), i = setTimeout(r, t), s && e.apply(a, o)
                    }
                },
                rect: function(e, t) {
                    var n = window,
                        i = e.getBoundingClientRect(),
                        a = t ? n.pageXOffset : 0,
                        o = t ? n.pageYOffset : 0;
                    return {
                        bottom: i.bottom + o,
                        height: i.height,
                        left: i.left + a,
                        right: i.right + a,
                        top: i.top + o,
                        width: i.width
                    }
                },
                includes: function(e, t) {
                    return e.indexOf(t) > -1
                },
                startsWith: function(e, t) {
                    return e.substr(0, t.length) === t
                },
                truncate: function(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }
            },
            o = function() {
                if (this.items.length) {
                    var e = document.createDocumentFragment();
                    if (this.config.pagination) {
                        var t = this.pages.slice(0, this.pageIndex);
                        a.each(t, function(t, i) {
                            a.each(i, function(t, i) {
                                n(i, e, this.customOption)
                            }, this)
                        }, this)
                    } else a.each(this.items, function(t, i) {
                        n(i, e, this.customOption)
                    }, this);
                    e.childElementCount && (a.removeClass(this.items[this.navIndex], "active"), this.navIndex = (e.querySelector(".selectr-option.selected") || e.querySelector(".selectr-option")).idx, a.addClass(this.items[this.navIndex], "active")), this.tree.appendChild(e)
                }
            },
            r = function(e) {
                var t = e.target;
                this.container.contains(t) || !this.opened && !a.hasClass(this.container, "notice") || this.close()
            },
            s = function(e, t) {
                t = t || e;
                var n = {
                    class: "selectr-option",
                    role: "treeitem",
                    "aria-selected": !1
                };
                this.customOption ? n.html = this.config.renderOption(t) : n.textContent = e.textContent;
                var i = a.createElement("li", n);
                return i.idx = e.idx, this.items.push(i), e.defaultSelected && this.defaultSelected.push(e.idx), e.disabled && (i.disabled = !0, a.addClass(i, "disabled")), i
            },
            l = function() {
                this.requiresPagination = this.config.pagination && this.config.pagination > 0, t(this.config, "width") && (a.isInt(this.config.width) ? this.width = this.config.width + "px" : "auto" === this.config.width ? this.width = "100%" : a.includes(this.config.width, "%") && (this.width = this.config.width)), this.container = a.createElement("div", {
                    class: "selectr-container"
                }), this.config.customClass && a.addClass(this.container, this.config.customClass), this.mobileDevice ? a.addClass(this.container, "selectr-mobile") : a.addClass(this.container, "selectr-desktop"), this.el.tabIndex = -1, this.config.nativeDropdown || this.mobileDevice ? a.addClass(this.el, "selectr-visible") : a.addClass(this.el, "selectr-hidden"), this.selected = a.createElement("div", {
                    class: "selectr-selected",
                    disabled: this.disabled,
                    tabIndex: 0,
                    "aria-expanded": !1
                }), this.label = a.createElement(this.el.multiple ? "ul" : "span", {
                    class: "selectr-label"
                });
                var e = a.createElement("div", {
                    class: "selectr-options-container"
                });
                if (this.tree = a.createElement("ul", {
                        class: "selectr-options",
                        role: "tree",
                        "aria-hidden": !0,
                        "aria-expanded": !1
                    }), this.notice = a.createElement("div", {
                        class: "selectr-notice"
                    }), this.el.setAttribute("aria-hidden", !0), this.disabled && (this.el.disabled = !0), this.el.multiple ? (a.addClass(this.label, "selectr-tags"), a.addClass(this.container, "multiple"), this.tags = [], this.selectedValues = this.config.defaultSelected ? this.getSelectedProperties("value") : [], this.selectedIndexes = this.getSelectedProperties("idx")) : (this.selectedValue = null, this.selectedIndex = -1), this.selected.appendChild(this.label), this.config.clearable && (this.selectClear = a.createElement("button", {
                        class: "selectr-clear",
                        type: "button"
                    }), this.container.appendChild(this.selectClear), a.addClass(this.container, "clearable")), this.config.taggable) {
                    var n = a.createElement("li", {
                        class: "input-tag"
                    });
                    if (this.input = a.createElement("input", {
                            class: "selectr-tag-input",
                            placeholder: this.config.tagPlaceholder,
                            tagIndex: 0,
                            autocomplete: "off",
                            autocorrect: "off",
                            autocapitalize: "off",
                            spellcheck: "false",
                            role: "textbox",
                            type: "search"
                        }), n.appendChild(this.input), this.label.appendChild(n), a.addClass(this.container, "taggable"), this.tagSeperators = [","], this.config.tagSeperators) {
                        this.tagSeperators = this.tagSeperators.concat(this.config.tagSeperators);
                        for (var i = [], o = 0; o < this.tagSeperators.length; o++) i.push(a.escapeRegExp(this.tagSeperators[o]));
                        this.tagSeperatorsRegex = new RegExp(i.join("|"), "i")
                    } else this.tagSeperatorsRegex = new RegExp(",", "i")
                }
                this.config.searchable && (this.input = a.createElement("input", {
                    class: "selectr-input",
                    tagIndex: -1,
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off",
                    spellcheck: "false",
                    role: "textbox",
                    type: "search",
                    placeholder: this.config.messages.searchPlaceholder
                }), this.inputClear = a.createElement("button", {
                    class: "selectr-input-clear",
                    type: "button"
                }), this.inputContainer = a.createElement("div", {
                    class: "selectr-input-container"
                }), this.inputContainer.appendChild(this.input), this.inputContainer.appendChild(this.inputClear), e.appendChild(this.inputContainer)), e.appendChild(this.notice), e.appendChild(this.tree), this.items = [], this.options = [], this.el.options.length && (this.options = [].slice.call(this.el.options));
                var r = !1,
                    l = 0;
                if (this.el.children.length && a.each(this.el.children, function(e, t) {
                        "OPTGROUP" === t.nodeName ? (r = a.createElement("ul", {
                            class: "selectr-optgroup",
                            role: "group",
                            html: "<li class='selectr-optgroup--label'>" + t.label + "</li>"
                        }), a.each(t.children, function(e, t) {
                            t.idx = l, r.appendChild(s.call(this, t, r)), l++
                        }, this)) : (t.idx = l, s.call(this, t), l++)
                    }, this), this.config.data && Array.isArray(this.config.data)) {
                    this.data = [];
                    var c, d = !1;
                    r = !1, l = 0, a.each(this.config.data, function(e, n) {
                        t(n, "children") ? (d = a.createElement("optgroup", {
                            label: n.text
                        }), r = a.createElement("ul", {
                            class: "selectr-optgroup",
                            role: "group",
                            html: "<li class='selectr-optgroup--label'>" + n.text + "</li>"
                        }), a.each(n.children, function(e, n) {
                            c = new Option(n.text, n.value, !1, n.hasOwnProperty("selected") && !0 === n.selected), c.disabled = t(n, "disabled"), this.options.push(c), d.appendChild(c), c.idx = l, r.appendChild(s.call(this, c, n)), this.data[l] = n, l++
                        }, this), this.el.appendChild(d)) : (c = new Option(n.text, n.value, !1, n.hasOwnProperty("selected") && !0 === n.selected), c.disabled = t(n, "disabled"), this.options.push(c), c.idx = l, s.call(this, c, n), this.data[l] = n, l++)
                    }, this)
                }
                this.setSelected(!0);
                var u;
                this.navIndex = 0;
                for (var h = 0; h < this.items.length; h++)
                    if (u = this.items[h], !a.hasClass(u, "disabled")) {
                        a.addClass(u, "active"), this.navIndex = h;
                        break
                    }
                this.requiresPagination && (this.pageIndex = 1, this.paginate()), this.container.appendChild(this.selected), this.container.appendChild(e), this.placeEl = a.createElement("div", {
                    class: "selectr-placeholder"
                }), this.setPlaceholder(), this.selected.appendChild(this.placeEl), this.disabled && this.disable(), this.el.parentNode.insertBefore(this.container, this.el), this.container.appendChild(this.el)
            },
            c = function(e) {
                if (e = e || window.event, !this.items.length || !this.opened || !a.includes([13, 38, 40], e.which)) return void(this.navigating = !1);
                if (e.preventDefault(), 13 === e.which) return !(this.noResults || this.config.taggable && this.input.value.length > 0) && this.change(this.navIndex);
                var t, n = this.items[this.navIndex],
                    i = this.navIndex;
                switch (e.which) {
                    case 38:
                        t = 0, this.navIndex > 0 && this.navIndex--;
                        break;
                    case 40:
                        t = 1, this.navIndex < this.items.length - 1 && this.navIndex++
                }
                for (this.navigating = !0; a.hasClass(this.items[this.navIndex], "disabled") || a.hasClass(this.items[this.navIndex], "excluded");) {
                    if (!(this.navIndex > 0 && this.navIndex < this.items.length - 1)) {
                        this.navIndex = i;
                        break
                    }
                    if (t ? this.navIndex++ : this.navIndex--, this.searching) {
                        if (this.navIndex > this.tree.lastElementChild.idx) {
                            this.navIndex = this.tree.lastElementChild.idx;
                            break
                        }
                        if (this.navIndex < this.tree.firstElementChild.idx) {
                            this.navIndex = this.tree.firstElementChild.idx;
                            break
                        }
                    }
                }
                var o = a.rect(this.items[this.navIndex]);
                t ? (0 === this.navIndex ? this.tree.scrollTop = 0 : o.top + o.height > this.optsRect.top + this.optsRect.height && (this.tree.scrollTop = this.tree.scrollTop + (o.top + o.height - (this.optsRect.top + this.optsRect.height))), this.navIndex === this.tree.childElementCount - 1 && this.requiresPagination && h.call(this)) : 0 === this.navIndex ? this.tree.scrollTop = 0 : o.top - this.optsRect.top < 0 && (this.tree.scrollTop = this.tree.scrollTop + (o.top - this.optsRect.top)), n && a.removeClass(n, "active"), a.addClass(this.items[this.navIndex], "active")
            },
            d = function(e) {
                var t, n = this,
                    i = document.createDocumentFragment(),
                    o = this.options[e.idx],
                    r = this.data ? this.data[e.idx] : o,
                    s = {
                        class: "selectr-tag"
                    };
                this.customSelected ? s.html = this.config.renderSelection(r) : s.textContent = o.textContent;
                var l = a.createElement("li", s),
                    c = a.createElement("button", {
                        class: "selectr-tag-remove",
                        type: "button"
                    });
                if (l.appendChild(c), l.idx = e.idx, l.tag = o.value, this.tags.push(l), this.config.sortSelected) {
                    var d = this.tags.slice();
                    t = function(e, t) {
                        e.replace(/(\d+)|(\D+)/g, function(e, n, i) {
                            t.push([n || 1 / 0, i || ""])
                        })
                    }, d.sort(function(e, i) {
                        var a, o, r = [],
                            s = [];
                        for (!0 === n.config.sortSelected ? (a = e.tag, o = i.tag) : "text" === n.config.sortSelected && (a = e.textContent, o = i.textContent), t(a, r), t(o, s); r.length && s.length;) {
                            var l = r.shift(),
                                c = s.shift(),
                                d = l[0] - c[0] || l[1].localeCompare(c[1]);
                            if (d) return d
                        }
                        return r.length - s.length
                    }), a.each(d, function(e, t) {
                        i.appendChild(t)
                    }), this.label.innerHTML = ""
                } else i.appendChild(l);
                this.config.taggable ? this.label.insertBefore(i, this.input.parentNode) : this.label.appendChild(i)
            },
            u = function(e) {
                var t = !1;
                a.each(this.tags, function(n, i) {
                    i.idx === e.idx && (t = i)
                }, this), t && (this.label.removeChild(t), this.tags.splice(this.tags.indexOf(t), 1))
            },
            h = function() {
                var e = this.tree;
                if (e.scrollTop >= e.scrollHeight - e.offsetHeight && this.pageIndex < this.pages.length) {
                    var t = document.createDocumentFragment();
                    a.each(this.pages[this.pageIndex], function(e, i) {
                        n(i, t, this.customOption)
                    }, this), e.appendChild(t), this.pageIndex++, this.emit("selectr.paginate", {
                        items: this.items.length,
                        total: this.data.length,
                        page: this.pageIndex,
                        pages: this.pages.length
                    })
                }
            },
            f = function() {
                (this.config.searchable || this.config.taggable) && (this.input.value = null, this.searching = !1, this.config.searchable && a.removeClass(this.inputContainer, "active"), a.hasClass(this.container, "notice") && (a.removeClass(this.container, "notice"), a.addClass(this.container, "open"), this.input.focus()), a.each(this.items, function(e, t) {
                    a.removeClass(t, "excluded"), this.customOption || (t.textContent = t.textContent)
                }, this))
            },
            p = function(e, t) {
                var n = t.textContent,
                    i = new RegExp(e, "ig"),
                    a = i.exec(n);
                if (a) {
                    t.innerHTML = "";
                    var o = document.createElement("span");
                    return o.classList.add("selectr-match"), o.textContent = a[0], t.appendChild(document.createTextNode(n.substring(0, a.index))), t.appendChild(o), t.appendChild(document.createTextNode(n.substring(i.lastIndex))), !0
                }
                return !1
            },
            m = function(e, t) {
                if (!e) throw new Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");
                if (this.el = e, "string" == typeof e && (this.el = document.querySelector(e)), null === this.el) throw new Error("The element you passed to Selectr can not be found.");
                if ("select" !== this.el.nodeName.toLowerCase()) throw new Error("The element you passed to Selectr is not a HTMLSelectElement.");
                this.render(t)
            };
        return m.prototype.render = function(e) {
            if (!this.rendered) {
                var n = {
                    defaultSelected: !0,
                    width: "auto",
                    disabled: !1,
                    disabledMobile: !1,
                    searchable: !0,
                    clearable: !1,
                    sortSelected: !1,
                    allowDeselect: !1,
                    closeOnScroll: !1,
                    nativeDropdown: !1,
                    nativeKeyboard: !1,
                    placeholder: "Select an option...",
                    taggable: !1,
                    tagPlaceholder: "Enter a tag...",
                    messages: {
                        noResults: "No results.",
                        noOptions: "No options available.",
                        maxSelections: "A maximum of {max} items can be selected.",
                        tagDuplicate: "That tag is already in use.",
                        searchPlaceholder: "Search options..."
                    }
                };
                this.el.selectr = this, this.config = a.extend(n, e), this.originalType = this.el.type, this.originalIndex = this.el.tabIndex, this.defaultSelected = [], this.originalOptionCount = this.el.options.length, (this.config.multiple || this.config.taggable) && (this.el.multiple = !0), this.disabled = t(this.config, "disabled"), this.opened = !1, this.config.taggable && (this.config.searchable = !1), this.navigating = !1, this.mobileDevice = !1, !this.config.disabledMobile && /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) && (this.mobileDevice = !0), this.customOption = this.config.hasOwnProperty("renderOption") && "function" == typeof this.config.renderOption, this.customSelected = this.config.hasOwnProperty("renderSelection") && "function" == typeof this.config.renderSelection, this.supportsEventPassiveOption = this.detectEventPassiveOption(), i.mixin(this), l.call(this), this.bindEvents(), this.update(), this.optsRect = a.rect(this.tree), this.rendered = !0, this.el.multiple || (this.el.selectedIndex = this.selectedIndex);
                var o = this;
                setTimeout(function() {
                    o.emit("selectr.init")
                }, 20)
            }
        }, m.prototype.getSelected = function() {
            return this.el.querySelectorAll("option:checked")
        }, m.prototype.getSelectedProperties = function(e) {
            var t = this.getSelected();
            return [].slice.call(t).map(function(t) {
                return t[e]
            }).filter(function(e) {
                return null !== e && void 0 !== e
            })
        }, m.prototype.detectEventPassiveOption = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("test", null, t)
            } catch (e) {}
            return e
        }, m.prototype.bindEvents = function() {
            var e = this;
            if (this.events = {}, this.events.dismiss = r.bind(this), this.events.navigate = c.bind(this), this.events.reset = this.reset.bind(this), this.config.nativeDropdown || this.mobileDevice) {
                this.container.addEventListener("touchstart", function(t) {
                    t.changedTouches[0].target === e.el && e.toggle()
                }, !!this.supportsEventPassiveOption && {
                    passive: !0
                }), this.container.addEventListener("click", function(t) {
                    t.target === e.el && e.toggle()
                });
                var t = function(e, t) {
                    for (var n, i = [], a = e.slice(0), o = 0; o < t.length; o++) n = a.indexOf(t[o]), n > -1 ? a.splice(n, 1) : i.push(t[o]);
                    return [i, a]
                };
                this.el.addEventListener("change", function(n) {
                    if (!n.__selfTriggered)
                        if (e.el.multiple) {
                            var i = e.getSelectedProperties("idx"),
                                o = t(e.selectedIndexes, i);
                            a.each(o[0], function(t, n) {
                                e.select(n)
                            }, e), a.each(o[1], function(t, n) {
                                e.deselect(n)
                            }, e)
                        } else e.el.selectedIndex > -1 && e.select(e.el.selectedIndex)
                })
            }
            if (this.config.nativeDropdown && this.container.addEventListener("keydown", function(t) {
                    "Enter" === t.key && e.selected === document.activeElement && (e.toggle(), setTimeout(function() {
                        e.el.focus()
                    }, 200))
                }), this.selected.addEventListener("click", function(t) {
                    e.disabled || e.toggle(), t.preventDefault()
                }), this.config.nativeKeyboard) {
                var n = "";
                this.selected.addEventListener("keydown", function(t) {
                    if (!(e.disabled || e.selected !== document.activeElement || t.altKey || t.ctrlKey || t.metaKey)) {
                        if (" " === t.key || !e.opened && ["Enter", "ArrowUp", "ArrowDown"].indexOf(t.key) > -1) return e.toggle(), t.preventDefault(), void t.stopPropagation();
                        if (t.key.length <= 2 && String[String.fromCodePoint ? "fromCodePoint" : "fromCharCode"](t.key[String.codePointAt ? "codePointAt" : "charCodeAt"](0)) === t.key) {
                            if (e.config.multiple) e.open(), e.config.searchable && (e.input.value = t.key, e.input.focus(), e.search(null, !0));
                            else {
                                n += t.key;
                                var i = e.search(n, !0);
                                i && i.length && (e.clear(), e.setValue(i[0].value)), setTimeout(function() {
                                    n = ""
                                }, 1e3)
                            }
                            return t.preventDefault(), void t.stopPropagation()
                        }
                    }
                }), this.container.addEventListener("keyup", function(t) {
                    e.opened && "Escape" === t.key && (e.close(), t.stopPropagation(), e.selected.focus())
                })
            }
            this.label.addEventListener("click", function(t) {
                a.hasClass(t.target, "selectr-tag-remove") && e.deselect(t.target.parentNode.idx)
            }), this.selectClear && this.selectClear.addEventListener("click", this.clear.bind(this)), this.tree.addEventListener("mousedown", function(e) {
                e.preventDefault()
            }), this.tree.addEventListener("click", function(t) {
                var n = a.closest(t.target, function(e) {
                    return e && a.hasClass(e, "selectr-option")
                });
                n && (a.hasClass(n, "disabled") || (a.hasClass(n, "selected") ? (e.el.multiple || !e.el.multiple && e.config.allowDeselect) && e.deselect(n.idx) : e.select(n.idx), e.opened && !e.el.multiple && e.close())), t.preventDefault(), t.stopPropagation()
            }), this.tree.addEventListener("mouseover", function(t) {
                a.hasClass(t.target, "selectr-option") && (a.hasClass(t.target, "disabled") || (a.removeClass(e.items[e.navIndex], "active"), a.addClass(t.target, "active"), e.navIndex = [].slice.call(e.items).indexOf(t.target)))
            }), this.config.searchable && (this.input.addEventListener("focus", function(t) {
                    e.searching = !0
                }), this.input.addEventListener("blur", function(t) {
                    e.searching = !1
                }), this.input.addEventListener("keyup", function(t) {
                    e.search(), e.config.taggable || (this.value.length ? a.addClass(this.parentNode, "active") : a.removeClass(this.parentNode, "active"))
                }),
                this.inputClear.addEventListener("click", function(t) {
                    e.input.value = null, f.call(e), e.tree.childElementCount || o.call(e)
                })), this.config.taggable && this.input.addEventListener("keyup", function(t) {
                if (e.search(), e.config.taggable && this.value.length) {
                    var n = this.value.trim();
                    if (n.length && (13 === t.which || e.tagSeperatorsRegex.test(n))) {
                        var i = n.replace(e.tagSeperatorsRegex, "");
                        i = a.escapeRegExp(i), i = i.trim();
                        var o;
                        i.length && (o = e.add({
                            value: i,
                            textContent: i,
                            selected: !0
                        }, !0)), o ? (e.close(), f.call(e)) : (this.value = "", e.setMessage(e.config.messages.tagDuplicate))
                    }
                }
            }), this.update = a.debounce(function() {
                e.opened && e.config.closeOnScroll && e.close(), e.width && (e.container.style.width = e.width), e.invert()
            }, 50), this.requiresPagination && (this.paginateItems = a.debounce(function() {
                h.call(this)
            }, 50), this.tree.addEventListener("scroll", this.paginateItems.bind(this))), document.addEventListener("click", this.events.dismiss), window.addEventListener("keydown", this.events.navigate), window.addEventListener("resize", this.update), window.addEventListener("scroll", this.update), this.on("selectr.destroy", function() {
                document.removeEventListener("click", this.events.dismiss), window.removeEventListener("keydown", this.events.navigate), window.removeEventListener("resize", this.update), window.removeEventListener("scroll", this.update)
            }), this.el.form && (this.el.form.addEventListener("reset", this.events.reset), this.on("selectr.destroy", function() {
                this.el.form.removeEventListener("reset", this.events.reset)
            }))
        }, m.prototype.setSelected = function(e) {
            if (this.config.data || this.el.multiple || !this.el.options.length || (0 === this.el.selectedIndex && (this.el.options[0].defaultSelected || this.config.defaultSelected || (this.el.selectedIndex = -1)), this.selectedIndex = this.el.selectedIndex, this.selectedIndex > -1 && this.select(this.selectedIndex)), this.config.multiple && "select-one" === this.originalType && !this.config.data && this.el.options[0].selected && !this.el.options[0].defaultSelected && (this.el.options[0].selected = !1), a.each(this.options, function(e, t) {
                    t.selected && t.defaultSelected && this.select(t.idx)
                }, this), this.config.selectedValue && this.setValue(this.config.selectedValue), this.config.data) {
                !this.el.multiple && this.config.defaultSelected && this.el.selectedIndex < 0 && this.config.data.length > 0 && this.select(0);
                var n = 0;
                a.each(this.config.data, function(e, i) {
                    t(i, "children") ? a.each(i.children, function(e, t) {
                        t.hasOwnProperty("selected") && !0 === t.selected && this.select(n), n++
                    }, this) : (i.hasOwnProperty("selected") && !0 === i.selected && this.select(n), n++)
                }, this)
            }
        }, m.prototype.destroy = function() {
            this.rendered && (this.emit("selectr.destroy"), "select-one" === this.originalType && (this.el.multiple = !1), this.config.data && (this.el.innerHTML = ""), a.removeClass(this.el, "selectr-hidden"), this.container.parentNode.replaceChild(this.el, this.container), this.rendered = !1, delete this.el.selectr)
        }, m.prototype.change = function(e) {
            var t = this.items[e],
                n = this.options[e];
            n.disabled || (n.selected && a.hasClass(t, "selected") ? this.deselect(e) : this.select(e), this.opened && !this.el.multiple && this.close())
        }, m.prototype.select = function(e) {
            var t = this.items[e],
                n = [].slice.call(this.el.options),
                i = this.options[e];
            if (this.el.multiple) {
                if (a.includes(this.selectedIndexes, e)) return !1;
                if (this.config.maxSelections && this.tags.length === this.config.maxSelections) return this.setMessage(this.config.messages.maxSelections.replace("{max}", this.config.maxSelections), !0), !1;
                this.selectedValues.push(i.value), this.selectedIndexes.push(e), d.call(this, t)
            } else {
                var o = this.data ? this.data[e] : i;
                this.customSelected ? this.label.innerHTML = this.config.renderSelection(o) : this.label.textContent = i.textContent, this.selectedValue = i.value, this.selectedIndex = e, a.each(this.options, function(t, n) {
                    var i = this.items[t];
                    t !== e && (i && a.removeClass(i, "selected"), n.selected = !1, n.removeAttribute("selected"))
                }, this)
            }
            if (a.includes(n, i) || this.el.add(i), t.setAttribute("aria-selected", !0), a.addClass(t, "selected"), a.addClass(this.container, "has-selected"), i.selected = !0, i.setAttribute("selected", ""), this.emit("selectr.change", i), this.emit("selectr.select", i), "createEvent" in document) {
                var r = document.createEvent("HTMLEvents");
                r.initEvent("change", !0, !0), r.__selfTriggered = !0, this.el.dispatchEvent(r)
            } else this.el.fireEvent("onchange")
        }, m.prototype.deselect = function(e, t) {
            var n = this.items[e],
                i = this.options[e];
            if (this.el.multiple) {
                var o = this.selectedIndexes.indexOf(e);
                this.selectedIndexes.splice(o, 1);
                var r = this.selectedValues.indexOf(i.value);
                this.selectedValues.splice(r, 1), u.call(this, n), this.tags.length || a.removeClass(this.container, "has-selected")
            } else {
                if (!t && !this.config.clearable && !this.config.allowDeselect) return !1;
                this.label.innerHTML = "", this.selectedValue = null, this.el.selectedIndex = this.selectedIndex = -1, a.removeClass(this.container, "has-selected")
            }
            if (this.items[e].setAttribute("aria-selected", !1), a.removeClass(this.items[e], "selected"), i.selected = !1, i.removeAttribute("selected"), this.emit("selectr.change", null), this.emit("selectr.deselect", i), "createEvent" in document) {
                var s = document.createEvent("HTMLEvents");
                s.initEvent("change", !0, !0), s.__selfTriggered = !0, this.el.dispatchEvent(s)
            } else this.el.fireEvent("onchange")
        }, m.prototype.setValue = function(e) {
            var t = Array.isArray(e);
            if (t || (e = e.toString().trim()), !this.el.multiple && t) return !1;
            a.each(this.options, function(n, i) {
                (t && e.indexOf(i.value) > -1 || i.value === e) && this.change(i.idx)
            }, this)
        }, m.prototype.getValue = function(e, t) {
            var n;
            if (this.el.multiple) e ? this.selectedIndexes.length && (n = {}, n.values = [], a.each(this.selectedIndexes, function(e, t) {
                var i = this.options[t];
                n.values[e] = {
                    value: i.value,
                    text: i.textContent
                }
            }, this)) : n = this.selectedValues.slice();
            else if (e) {
                var i = this.options[this.selectedIndex];
                n = {
                    value: i.value,
                    text: i.textContent
                }
            } else n = this.selectedValue;
            return e && t && (n = JSON.stringify(n)), n
        }, m.prototype.add = function(e, t) {
            if (e) {
                if (this.data = this.data || [], this.items = this.items || [], this.options = this.options || [], Array.isArray(e)) a.each(e, function(e, n) {
                    this.add(n, t)
                }, this);
                else if ("[object Object]" === Object.prototype.toString.call(e)) {
                    if (t) {
                        var n = !1;
                        if (a.each(this.options, function(t, i) {
                                i.value.toLowerCase() === e.value.toLowerCase() && (n = !0)
                            }), n) return !1
                    }
                    var i = a.createElement("option", e);
                    return this.data.push(e), this.mobileDevice && this.el.add(i), this.options.push(i), i.idx = this.options.length > 0 ? this.options.length - 1 : 0, s.call(this, i), e.selected && this.select(i.idx), this.setPlaceholder(), i
                }
                return this.config.pagination && this.paginate(), !0
            }
        }, m.prototype.remove = function(e) {
            var t = [];
            if (Array.isArray(e) ? a.each(e, function(e, n) {
                    a.isInt(n) ? t.push(this.getOptionByIndex(n)) : "string" == typeof n && t.push(this.getOptionByValue(n))
                }, this) : a.isInt(e) ? t.push(this.getOptionByIndex(e)) : "string" == typeof e && t.push(this.getOptionByValue(e)), t.length) {
                var n;
                a.each(t, function(e, t) {
                    n = t.idx, this.el.remove(t), this.options.splice(n, 1);
                    var i = this.items[n].parentNode;
                    i && i.removeChild(this.items[n]), this.items.splice(n, 1), a.each(this.options, function(e, t) {
                        t.idx = e, this.items[e].idx = e
                    }, this)
                }, this), this.setPlaceholder(), this.config.pagination && this.paginate()
            }
        }, m.prototype.removeAll = function() {
            this.clear(!0), a.each(this.el.options, function(e, t) {
                this.el.remove(t)
            }, this), a.truncate(this.tree), this.items = [], this.options = [], this.data = [], this.navIndex = 0, this.requiresPagination && (this.requiresPagination = !1, this.pageIndex = 1, this.pages = []), this.setPlaceholder()
        }, m.prototype.search = function(e, t) {
            if (!this.navigating) {
                var i = !1;
                e || (e = this.input.value, i = !0, this.removeMessage(), a.truncate(this.tree));
                var r = [],
                    s = document.createDocumentFragment();
                if (e = e.trim().toLowerCase(), e.length > 0) {
                    var l = t ? a.startsWith : a.includes;
                    if (a.each(this.options, function(t, o) {
                            var c = this.items[o.idx];
                            l(o.textContent.trim().toLowerCase(), e) && !o.disabled ? (r.push({
                                text: o.textContent,
                                value: o.value
                            }), i && (n(c, s, this.customOption), a.removeClass(c, "excluded"), this.customOption || p(e, o))) : i && a.addClass(c, "excluded")
                        }, this), i) {
                        if (s.childElementCount) {
                            var c = this.items[this.navIndex],
                                d = s.querySelector(".selectr-option:not(.excluded)");
                            this.noResults = !1, a.removeClass(c, "active"), this.navIndex = d.idx, a.addClass(d, "active")
                        } else this.config.taggable || (this.noResults = !0, this.setMessage(this.config.messages.noResults));
                        this.tree.appendChild(s)
                    }
                } else o.call(this);
                return r
            }
        }, m.prototype.toggle = function() {
            this.disabled || (this.opened ? this.close() : this.open())
        }, m.prototype.open = function() {
            var e = this;
            return !!this.options.length && (this.opened || this.emit("selectr.open"), this.opened = !0, this.mobileDevice || this.config.nativeDropdown ? void(this.config.data && 0 === this.el.options.length && a.each(this.options, function(e, t) {
                this.el.add(t)
            }, this)) : (a.addClass(this.container, "open"), o.call(this), this.invert(), this.tree.scrollTop = 0, a.removeClass(this.container, "notice"), this.selected.setAttribute("aria-expanded", !0), this.tree.setAttribute("aria-hidden", !1), this.tree.setAttribute("aria-expanded", !0), void(this.config.searchable && !this.config.taggable && setTimeout(function() {
                e.input.focus(), e.input.tabIndex = 0
            }, 10))))
        }, m.prototype.close = function() {
            if (this.opened && this.emit("selectr.close"), this.opened = !1, this.navigating = !1, !this.mobileDevice && !this.config.nativeDropdown) {
                var e = a.hasClass(this.container, "notice");
                this.config.searchable && !e && (this.input.blur(), this.input.tabIndex = -1, this.searching = !1), e && (a.removeClass(this.container, "notice"), this.notice.textContent = ""), a.removeClass(this.container, "open"), a.removeClass(this.container, "native-open"), this.selected.setAttribute("aria-expanded", !1), this.tree.setAttribute("aria-hidden", !0), this.tree.setAttribute("aria-expanded", !1), a.truncate(this.tree), f.call(this)
            }
        }, m.prototype.enable = function() {
            this.disabled = !1, this.el.disabled = !1, this.selected.tabIndex = this.originalIndex, this.el.multiple && a.each(this.tags, function(e, t) {
                t.lastElementChild.tabIndex = 0
            }), a.removeClass(this.container, "selectr-disabled")
        }, m.prototype.disable = function(e) {
            e || (this.el.disabled = !0), this.selected.tabIndex = -1, this.el.multiple && a.each(this.tags, function(e, t) {
                t.lastElementChild.tabIndex = -1
            }), this.disabled = !0, a.addClass(this.container, "selectr-disabled")
        }, m.prototype.reset = function() {
            this.disabled || (this.clear(), this.setSelected(!0), a.each(this.defaultSelected, function(e, t) {
                this.select(t)
            }, this), this.emit("selectr.reset"))
        }, m.prototype.clear = function(e, t) {
            if (this.el.multiple) {
                if (this.selectedIndexes.length) {
                    var n = this.selectedIndexes.slice();
                    t ? this.deselect(n.slice(-1)[0]) : a.each(n, function(e, t) {
                        this.deselect(t)
                    }, this)
                }
            } else this.selectedIndex > -1 && this.deselect(this.selectedIndex, e);
            this.emit("selectr.clear")
        }, m.prototype.serialise = function(e) {
            var t = [];
            return a.each(this.options, function(e, n) {
                var i = {
                    value: n.value,
                    text: n.textContent
                };
                n.selected && (i.selected = !0), n.disabled && (i.disabled = !0), t[e] = i
            }), e ? JSON.stringify(t) : t
        }, m.prototype.serialize = function(e) {
            return this.serialise(e)
        }, m.prototype.setPlaceholder = function(e) {
            e = e || this.config.placeholder || this.el.getAttribute("placeholder"), this.options.length || (e = this.config.messages.noOptions), this.placeEl.innerHTML = e
        }, m.prototype.paginate = function() {
            if (this.items.length) {
                var e = this;
                return this.pages = this.items.map(function(t, n) {
                    return n % e.config.pagination == 0 ? e.items.slice(n, n + e.config.pagination) : null
                }).filter(function(e) {
                    return e
                }), this.pages
            }
        }, m.prototype.setMessage = function(e, t) {
            t && this.close(), a.addClass(this.container, "notice"), this.notice.textContent = e
        }, m.prototype.removeMessage = function() {
            a.removeClass(this.container, "notice"), this.notice.innerHTML = ""
        }, m.prototype.invert = function() {
            var e = a.rect(this.selected),
                t = this.tree.parentNode.offsetHeight,
                n = window.innerHeight;
            e.top + e.height + t > n ? (a.addClass(this.container, "inverted"), this.isInverted = !0) : (a.removeClass(this.container, "inverted"), this.isInverted = !1), this.optsRect = a.rect(this.tree)
        }, m.prototype.getOptionByIndex = function(e) {
            return this.options[e]
        }, m.prototype.getOptionByValue = function(e) {
            for (var t = !1, n = 0, i = this.options.length; n < i; n++)
                if (this.options[n].value.trim() === e.toString().trim()) {
                    t = this.options[n];
                    break
                }
            return t
        }, m
    }),
    function() {
        function e(e) {
            this.message = e
        }
        var t = "undefined" != typeof exports ? exports : self,
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        e.prototype = new Error, e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function(t) {
            for (var i, a, o = String(t), r = 0, s = n, l = ""; o.charAt(0 | r) || (s = "=", r % 1); l += s.charAt(63 & i >> 8 - r % 1 * 8)) {
                if ((a = o.charCodeAt(r += .75)) > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                i = i << 8 | a
            }
            return l
        }), t.atob || (t.atob = function(t) {
            var i = String(t).replace(/=+$/, "");
            if (i.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var a, o, r = 0, s = 0, l = ""; o = i.charAt(s++); ~o && (a = r % 4 ? 64 * a + o : o, r++ % 4) ? l += String.fromCharCode(255 & a >> (-2 * r & 6)) : 0) o = n.indexOf(o);
            return l
        })
    }(), define("lib/polyfills/base64", function() {}),
    function(e) {
        "function" == typeof define && define.amd ? define("lib/polyfills/jquery.placeholder", ["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(t) {
            var n = {},
                i = /^jQuery\d+$/;
            return e.each(t.attributes, function(e, t) {
                t.specified && !i.test(t.name) && (n[t.name] = t.value)
            }), n
        }

        function n(t, n) {
            var i = this,
                o = e(this);
            if (i.value === o.attr(s ? "placeholder-x" : "placeholder") && o.hasClass(f.customClass))
                if (i.value = "", o.removeClass(f.customClass), o.data("placeholder-password")) {
                    if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), !0 === t) return o[0].value = n, n;
                    o.focus()
                } else i == a() && i.select()
        }

        function i(i) {
            var a, o = this,
                r = e(this),
                l = o.id;
            if (!i || "blur" !== i.type || !r.hasClass(f.customClass))
                if ("" === o.value) {
                    if ("password" === o.type) {
                        if (!r.data("placeholder-textinput")) {
                            try {
                                a = r.clone().prop({
                                    type: "text"
                                })
                            } catch (n) {
                                a = e("<input>").attr(e.extend(t(this), {
                                    type: "text"
                                }))
                            }
                            a.removeAttr("name").data({
                                "placeholder-enabled": !0,
                                "placeholder-password": r,
                                "placeholder-id": l
                            }).bind("focus.placeholder", n), r.data({
                                "placeholder-textinput": a,
                                "placeholder-id": l
                            }).before(a)
                        }
                        o.value = "", r = r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", r.data("placeholder-id")).show()
                    } else {
                        var c = r.data("placeholder-password");
                        c && (c[0].value = "", r.attr("id", r.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                    }
                    r.addClass(f.customClass), r[0].value = r.attr(s ? "placeholder-x" : "placeholder")
                } else r.removeClass(f.customClass)
        }

        function a() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        var o, r, s = !1,
            l = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
            c = "placeholder" in document.createElement("input") && !l && !s,
            d = "placeholder" in document.createElement("textarea") && !l && !s,
            u = e.valHooks,
            h = e.propHooks,
            f = {};
        c && d ? (r = e.fn.placeholder = function() {
            return this
        }, r.input = !0, r.textarea = !0) : (r = e.fn.placeholder = function(t) {
            var a = {
                customClass: "placeholder"
            };
            return f = e.extend({}, a, t), this.filter((c ? "textarea" : ":input") + "[" + (s ? "placeholder-x" : "placeholder") + "]").not("." + f.customClass).not(":radio, :checkbox, [type=hidden]").bind({
                "focus.placeholder": n,
                "blur.placeholder": i
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }, r.input = c, r.textarea = d, o = {
            get: function(t) {
                var n = e(t),
                    i = n.data("placeholder-password");
                return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass(f.customClass) ? "" : t.value
            },
            set: function(t, o) {
                var r, s, l = e(t);
                return "" !== o && (r = l.data("placeholder-textinput"), s = l.data("placeholder-password"), r ? (n.call(r[0], !0, o) || (t.value = o), r[0].value = o) : s && (n.call(t, !0, o) || (s[0].value = o), t.value = o)), l.data("placeholder-enabled") ? ("" === o ? (t.value = o, t != a() && i.call(t)) : (l.hasClass(f.customClass) && n.call(t), t.value = o), l) : (t.value = o, l)
            }
        }, c || (u.input = o, h.value = o), d || (u.textarea = o, h.value = o), e(function() {
            e(document).delegate("form", "submit.placeholder", function() {
                var t = e("." + f.customClass, this).each(function() {
                    n.call(this, !0, "")
                });
                setTimeout(function() {
                    t.each(i)
                }, 10)
            })
        }), e(window).bind("beforeunload.placeholder", function() {
            var t = !0;
            try {
                "javascript:void(0)" === document.activeElement.toString() && (t = !1)
            } catch (e) {}
            t && e("." + f.customClass).each(function() {
                this.value = ""
            })
        }))
    }), define("module/globals/download", ["jquery", "module/globals/navigation", "module/globals/recaptcha", "module/globals/util", "selectr", "lib/polyfills/base64", "module/globals/global", "lib/polyfills/jquery.placeholder", "module/globals/tracking"], function(e, t, n, i, a) {
        function o(e) {
            return String(e).replace(p, function(e) {
                return f[e]
            })
        }

        function r(r, l, c, f, p, m) {
            var g, v, y, b = ++h,
                x = "download_form_" + b,
                w = !1;
            if (m.length) {
                g = e('<select name="lang" aria-label="Document Language" placeholder="Document Language" id="' + x + '_lang"></select>'), g.append('<option class="label" value="" disabled selected hidden>Document Language</option>'), e.each(m, function() {
                    g.append('<option value="' + this + '">' + d[this] + "</option>")
                });
                for (var C = i.getBrowserLanguages(), k = 0; k < C.length; k++) {
                    var E = g.find('option[value="' + C[k] + '"]');
                    if (E.size()) {
                        g.find("option:selected").attr("selected", !1), E.attr("selected", !0);
                        break
                    }
                }
            }
            v = e('<div class="form-default form-popup newsletter-popup newsletter-form"><form id="' + x + '" method="post" action="/download-form"><a class="icon-cancel close" href="#"></a><h2>' + (p ? "Register to receive" : "Download") + " " + o(r) + '</h2><div class="contact-form-cols">' + (m.length ? '<div class="contact-form-col">' : "") + '<label for="' + x + '_email">Email <span class="required">*</span></label><input type="text" name="email" id="' + x + '_email" maxlength="255"/>' + (m.length ? '</div><div class="contact-form-col">' + g.get(0).outerHTML + "</div>" : "") + '</div><div class="contact-form-cols"><div class="contact-form-col"><label for="' + x + '_first_name">First Name <span class="required">*</span></label><input type="text" name="first_name" id="' + x + '_first_name" maxlength="255"/></div><div class="contact-form-col"><label for="' + x + '_last_name">Last Name <span class="required">*</span></label><input type="text" name="last_name" id="' + x + '_last_name" maxlength="255"/></div></div><div class="contact-form-cols"><div class="contact-form-col"><label for="' + x + '_organization">Organization <span class="required">*</span></label><input type="text" name="organization" id="' + x + '_organization" maxlength="255"/></div><div class="contact-form-col"><select name="industry" id="' + x + '_industry"><option class="label required" value="" disabled selected hidden>Industry</option></select></div></div><div class="newsletter-chekbox"><input type="checkbox" name="optin" id="newsletter_optin" value="1"/><label for="newsletter_optin">I’d like to receive similar design research and publications from Gensler.</label></div><div class="g-recaptcha g-recaptcha-invisible" data-size="invisible" data-sitekey="6Lc1Z7MUAAAAAABy65CFBJN08zm1X1tSZZrH76UE" data-callback="downloadCaptchaCB' + b + '"></div><input type="hidden" name="g-recaptcha-invisible" value="1"><input type="submit" class="button submit" value="' + (p ? "Register" : "Download") + '"/><input type="button" class="button cancel close" value="Cancel"/><div class="g-recaptcha-notice">This site is protected by reCAPTCHA and the Google<br><a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.</div><div class="form-default-error"></div></form></div>'), y = v.find("form"), y.prepend(e(document.createElement("input")).attr({
                type: "hidden",
                name: "res_id"
            }).val(c)), y.prepend(e(document.createElement("input")).attr({
                type: "hidden",
                name: "res_t"
            }).val(l)), y.prepend(e(document.createElement("input")).attr({
                type: "hidden",
                name: "uri"
            }).val(location.pathname));
            var T = y.find("select[name=industry]");
            T.size() && e.each(u, function(t, n) {
                T.append(e(document.createElement("option")).attr({
                    value: n
                }).text(n))
            }), v.find("input[type=text]").on("click input keyup", function() {
                v.find("label[for=" + this.id + "]")[e(this).val().length > 0 ? "hide" : "show"]()
            }), v.off().on("click", ".close", function(t) {
                t.preventDefault(), v.stop(!0).fadeTo(250, 0, function() {
                    v.hide(), e(window).off("resize.popup" + b)
                })
            }), window["downloadCaptchaCB" + b] = function() {
                tracking.trackEvent("Download: Submit Modal", parseInt(c, 16) + " " + r, location.pathname + location.search + location.hash);
                var t = v.find(".status");
                e.ajax({
                    url: y.attr("action"),
                    method: "post",
                    data: y.serialize(),
                    dataType: "json"
                }).done(function(i) {
                    if (i.error) t.remove(), y.show(), v.css("margin-top", -v.outerHeight() / 2), n.reset(y.find(".g-recaptcha").data("recaptchaId")), alert(i.error);
                    else {
                        tracking.trackEvent("Download: Submit Modal Success", parseInt(c, 16) + " " + r, location.pathname + location.search + location.hash), window.pardotCallback = function() {
                            t.text(i.msg ? i.msg : "Success!"), setTimeout(function() {
                                v.fadeTo(250, 0, function() {
                                    e(window).off("resize.popup" + b), v.hide(), v.remove()
                                })
                            }, 5e3), m.length < 1 && i.cookie && createCookie(f, i.cookie, 30), i.url && setTimeout(function() {
                                window.location.href = i.url
                            }, 50)
                        };
                        var a = {
                            url: location.href,
                            doc_id: parseInt(c, 16),
                            doc_title: r,
                            doc_url: i.url,
                            doc_lang: y.find("select[name=lang]").val() || "",
                            email: y.find("input[name=email]").val(),
                            first_name: y.find("input[name=first_name]").val(),
                            last_name: y.find("input[name=last_name]").val(),
                            organization: y.find("input[name=organization]").val(),
                            industry: y.find("select[name=industry]").val() || "",
                            optin: y.find("input[name=optin]").is(":checked") ? 1 : 0
                        };
                        e.ajax({
                            url: "https://www2.gensler.com/l/484051/2020-03-03/qt43f",
                            data: a,
                            dataType: "jsonp"
                        })
                    }
                }).fail(function() {
                    t.remove(), y.show(), v.css("margin-top", -v.outerHeight() / 2), n.reset(y.find(".g-recaptcha").data("recaptchaId")), alert("An error has occurred. Please try again later")
                }).always(function() {
                    clearInterval(t.data("intStatus")), w = !1
                })
            }, y.off().on("submit", function(t) {
                if (t.preventDefault(), !w) {
                    if (w = !0, !s(y)) return w = !1, void y.on("input.validation change.validation click.validation keyup.validation", "input,select", function() {
                        s(y, !0) && y.off(".validation")
                    });
                    var i = 0,
                        a = v.find(".status"),
                        o = setInterval(function() {
                            ++i > 4 && (i = 0), a.text("Submitting" + Array(i).join("."))
                        }, 250);
                    a.size() || (a = e("<div/>").addClass("status").appendTo(v)), a.data("intStatus", o).text("Submitting"), y.hide(), v.css("margin-top", "-50px"), e(window).trigger("resize.popup" + b), n.execute(y.find(".g-recaptcha").data("recaptchaId"))
                }
            }), e(window).off("resize.popup" + b).on("resize.popup" + b, function() {
                "absolute" == y.css("position") ? v.css({
                    marginTop: ""
                }) : (y.css({
                    top: ""
                }), v.height(""), e(window).height() < v.height() ? v.css({
                    position: "absolute",
                    top: Math.max(t.getScrollY() + 30 + v.height() / 2, 30),
                    marginTop: ""
                }) : v.css({
                    position: "",
                    top: "",
                    marginTop: -v.outerHeight() / 2
                }))
            }).trigger("resize.popup" + b);
            var S = function(t) {
                return t = e(t), t.hasClass("label") ? '<span class="label">' + t.text() + "</span>" + (t.hasClass("required") ? ' <span class="required">*</span>' : "") : t.text()
            };
            y.find("select").each(function() {
                new a(this, {
                    searchable: !1,
                    renderOption: S,
                    renderSelection: S
                })
            }), v.fadeTo(0, 0), v.css({
                visibility: "hidden",
                display: "block"
            }), e("body").append(v), n.render(), v.css({
                visibility: "",
                marginTop: -v.outerHeight() / 2
            }), v.stop(!0).fadeTo(250, 1)
        }

        function s(t, n) {
            var a, o = !1,
                r = i.emailRegex;
            return c(t), n || (t.find("[name=first_name]").val(e.trim(t.find("[name=first_name]").val())), t.find("[name=last_name]").val(e.trim(t.find("[name=last_name]").val())), t.find("[name=organization]").val(e.trim(t.find("[name=organization]").val())), t.find("[name=email]").val(e.trim(t.find("[name=email]").val()))), t.find("[name=email]").val() ? (a = r.exec(t.find("[name=email]").val()), a ? t.find("[name=email]").val(a[0]) : (n || alert("Please input a valid email address."), l(t, "email", "Invalid address"), o = !0)) : (l(t, "email", "Required"), o = !0), t.find("[name=first_name]").val() || (l(t, "first_name", "Required"), o = !0), t.find("[name=last_name]").val() || (l(t, "last_name", "Required"), o = !0), t.find("[name=organization]").val() || (l(t, "organization", "Required"), o = !0), t.find("[name=industry]").val() || (l(t, "industry", "Required"), o = !0), !o
        }

        function l(t, n, i) {
            var n = t.find('[name="' + n + '"]'),
                a = t.find('label[for="' + n.attr("id") + '"]'),
                o = n.parent();
            n.addClass("error"), a.size() && a.append(e('<span class="error"></span>').text(i)), o.hasClass("selectr-container") && (o.addClass("error"), o.find(".selectr-label").append(e('<span class="error"></span>').text(i)))
        }

        function c(e) {
            e.find("span.error").remove(), e.find(".error").removeClass("error")
        }
        var d = {
                ab: "аҧсшәа",
                aa: "Afaraf",
                af: "Afrikaans",
                ak: "Akan",
                sq: "Shqip",
                am: "አማርኛ",
                ar: "العربية",
                "ar-AE": "العربية (U.A.E.)",
                "ar-BH": "العربية (Bahrain)",
                "ar-DZ": "العربية (Algeria)",
                "ar-EG": "العربية (Egypt)",
                "ar-IQ": "العربية (Iraq)",
                "ar-JO": "العربية (Jordan)",
                "ar-KW": "العربية (Kuwait)",
                "ar-LB": "العربية (Lebanon)",
                "ar-LY": "العربية (Libya)",
                "ar-MA": "العربية (Morocco)",
                "ar-OM": "العربية (Oman)",
                "ar-QA": "العربية (Qatar)",
                "ar-SA": "العربية (Saudi Arabia)",
                "ar-SY": "العربية (Syria)",
                "ar-TN": "العربية (Tunisia)",
                "ar-YE": "العربية (Yemen)",
                an: "Aragonés",
                hy: "Հայերեն",
                as: "অসমীয়া",
                ac: "Ástralic",
                av: "Авар",
                ae: "Avesta",
                ay: "Aymar aru",
                az: "Azərbaycan dili",
                bm: "Bamanankan",
                ba: "Башҡорт теле",
                eu: "Euskara",
                be: "беларуская мова",
                bn: "বাংলা",
                bh: "भोजपुरी",
                bi: "Bislama",
                bs: "Bosanski",
                br: "Brezhoneg",
                bg: "български език",
                my: "မြန်မာဘာသာ",
                ca: "Català",
                ch: "Chamoru",
                ce: "Нохчийн",
                ny: "Chichewa / Chinyanja",
                zh: "中文",
                "zh-CN": "中文 (S)",
                "zh-HK": "中文 (Hong Kong)",
                "zh-MO": "中文 (Macau)",
                "zh-SG": "中文 (Singapore)",
                "zh-TW": "中文 (T)",
                cv: "чӑваш чӗлхи",
                kw: "Kernewek",
                co: "Corsu",
                cr: "ᓀᐦᐃᔭᐍᐏᐣ",
                hr: "Hrvatski",
                "hr-BA": "Hrvatski (Bosnia and Herzegovina)",
                "hr-HR": "Hrvatski (Croatia)",
                cs: "Čeština",
                da: "Dansk",
                dv: "ދިވެހި",
                nl: "Nederlands",
                "nl-BE": "Nederlands (Belgium)",
                "nl-NL": "Nederlands (Netherlands)",
                dz: "རྫོང་ཁ",
                en: "English",
                "en-AU": "English (Australia)",
                "en-BZ": "English (Belize)",
                "en-CA": "English (Canada)",
                "en-CB": "English (Caribbean)",
                "en-GB": "English (United Kingdom)",
                "en-IE": "English (Ireland)",
                "en-JM": "English (Jamaica)",
                "en-NZ": "English (New Zealand)",
                "en-PH": "English (Republic of the Philippines)",
                "en-TT": "English (Trinidad and Tobago)",
                "en-US": "English (United States)",
                "en-ZA": "English (South Africa)",
                "en-ZW": "English (Zimbabwe)",
                eo: "Esperanto",
                et: "Eesti",
                ee: "Eʋegbe",
                fo: "Føroyskt",
                fj: "Vosa Vakaviti",
                fi: "Suomi",
                fr: "Français",
                "fr-BE": "Français (Belgium)",
                "fr-CA": "Français (Canada)",
                "fr-CH": "Français (Switzerland)",
                "fr-FR": "Français (France)",
                "fr-LU": "Français (Luxembourg)",
                "fr-MC": "Français (Principality of Monaco)",
                ff: "Fulfulde",
                gl: "Galego",
                ka: "ქართული",
                de: "Deutsch",
                "de-AT": "Deutsch (Austria)",
                "de-CH": "Deutsch (Switzerland)",
                "de-DE": "Deutsch (Germany)",
                "de-LI": "Deutsch (Liechtenstein)",
                "de-LU": "Deutsch (Luxembourg)",
                el: "Ελληνικά",
                gn: "Avañe'ẽ",
                gu: "ગુજરાતી",
                ht: "Kreyòl ayisyen",
                ha: "هَرْشَن هَوْسَ‎",
                he: "עברית",
                hz: "Otjiherero",
                hi: "हिन्दी",
                ho: "Hiri Motu",
                hu: "Magyar",
                ia: "Interlingua",
                id: "Bahasa Indonesia",
                ie: "Interlingue",
                ga: "Gaeilge",
                ig: "Asụsụ Igbo",
                ik: "Iñupiatun",
                io: "Ido",
                is: "Íslenska",
                it: "Italiano",
                "it-CH": "Italiano (Switzerland)",
                "it-IT": "Italiano (Italy)",
                iu: "ᐃᓄᒃᑎᑐᑦ",
                ja: "日本語",
                jv: "Basa Jawa",
                kl: "Kalaallisut",
                kn: "ಕನ್ನಡ",
                kr: "Kanuri",
                ks: "कश्मीरी / كشميري‎",
                kk: "қазақ тілі",
                km: "ភាសាខ្មែរ",
                ki: "Gĩkũyũ",
                rw: "Ikinyarwanda",
                ky: "Кыргызча",
                kv: "коми кыв",
                kg: "Kikongo",
                ko: "한국어",
                ku: "Kurdî / كوردی‎",
                kj: "Kuanyama",
                la: "Lingua latīna",
                lb: "Lëtzebuergesch",
                lg: "Luganda",
                li: "Limburgs",
                ln: "Lingála",
                lo: "ພາສາລາວ",
                lt: "Lietuvių",
                lu: "Tshiluba",
                lv: "Latviešu",
                gv: "Gaelg",
                mk: "Македонски",
                mg: "Malagasy",
                ms: "Bahasa Melayu",
                "ms-BN": "Bahasa Melayu (Brunei Darussalam)",
                "ms-MY": "Bahasa Melayu (Malaysia)",
                ml: "മലയാളം",
                mt: "Malti",
                mi: "Māori",
                mr: "मराठी",
                mh: "Kajin M̧ajeļ",
                mn: "Монгол",
                na: "Dorerin Naoero",
                nv: "Diné bizaad",
                nd: "isiNdebele",
                ne: "नेपाली",
                ng: "Owambo",
                nb: "Norsk bokmål",
                nn: "Norsk nynorsk",
                no: "Norsk",
                ii: "ꆈꌠ꒿",
                nr: "isiNdebele",
                oc: "Occitan",
                oj: "ᐊᓂᔑᓈᐯᒧᐎᓐ",
                cu: "ѩзыкъ словѣньскъ",
                om: "Afaan Oromoo",
                or: "ଓଡ଼ିଆ",
                os: "Ирон",
                pa: "ਪੰਜਾਬੀ",
                pi: "पाऴि",
                fa: "فارسی",
                pl: "Polski",
                ps: "پښتو",
                pt: "Português",
                "pt-BR": "Português (Brazil)",
                "pt-PT": "Português (Portugal)",
                qu: "Runa Simi",
                "qu-BO": "Runa Simi (Bolivia)",
                "qu-EC": "Runa Simi (Ecuador)",
                "qu-PE": "Runa Simi (Peru)",
                rm: "Rumantsch",
                rn: "Ikirundi",
                ro: "Română",
                ru: "Русский",
                sa: "संस्कृतम्",
                sc: "Sardu",
                sd: "سنڌي",
                se: "Davvisámegiella",
                "se-FI": "Davvisámegiella (Finland)",
                "se-NO": "Davvisámegiella (Norway)",
                "se-SE": "Davvisámegiella (Sweden)",
                sm: "Gagana Samoa",
                sg: "Sängö",
                sr: "Српски / srpski",
                "sr-BA": "Српски / srpski (Bosnia and Herzegovina)",
                "sr-SP": "Српски / srpski (Serbia and Montenegro)",
                gd: "Gàidhlig",
                sn: "chiShona",
                si: "සිංහල",
                sk: "Slovenčina",
                sl: "Slovenščina",
                so: "Soomaaliga, af Soomaali",
                st: "Sesotho",
                es: "Español",
                "es-AR": "Español (Argentina)",
                "es-BO": "Español (Bolivia)",
                "es-CL": "Español (Chile)",
                "es-CO": "Español (Colombia)",
                "es-CR": "Español (Costa Rica)",
                "es-DO": "Español (Dominican Republic)",
                "es-EC": "Español (Ecuador)",
                "es-ES": "Español (Spain)",
                "es-GT": "Español (Guatemala)",
                "es-HN": "Español (Honduras)",
                "es-MX": "Español (Mexico)",
                "es-NI": "Español (Nicaragua)",
                "es-PA": "Español (Panama)",
                "es-PE": "Español (Peru)",
                "es-PR": "Español (Puerto Rico)",
                "es-PY": "Español (Paraguay)",
                "es-SV": "Español (El Salvador)",
                "es-UY": "Español (Uruguay)",
                "es-VE": "Español (Venezuela)",
                su: "Basa Sunda",
                sw: "Kiswahili",
                ss: "SiSwati",
                sv: "Svenska",
                "sv-FI": "Svenska (Finland)",
                "sv-SE": "Svenska (Sweden)",
                ta: "தமிழ்",
                te: "తెలుగు",
                tg: "тоҷикӣ",
                th: "ไทย",
                ti: "ትግርኛ",
                bo: "བོད་ཡིག",
                tk: "Türkmençe",
                tl: "Wikang Tagalog / ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
                tn: "Setswana",
                to: "faka Tonga",
                tr: "Türkçe",
                ts: "Xitsonga",
                tt: "татар теле / tatar tele",
                tw: "Twi",
                ty: "Reo Tahiti",
                ug: "ئۇيغۇرچە / Uyghurche",
                uk: "Українська",
                ur: "اردو",
                uz: "Oʻzbek, Ўзбек, أۇزبېك‎",
                ve: "Tshivenḓa",
                vi: "Việt Nam",
                vo: "Volapük",
                wa: "Walon",
                cy: "Cymraeg",
                wo: "Wollof",
                fy: "Frysk",
                xh: "isiXhosa",
                yi: "ייִדיש",
                yo: "Yorùbá",
                za: "Saɯ cueŋƅ",
                zu: "isiZulu"
            },
            u = ["Education", "Energy", "Entertainment", "Financial", "Government", "Healthcare", "Hospitality", "Media", "Not for Profit", "Products", "Real Estate Development", "Retail", "Services", "Technology", "Transportation", "Other"],
            h = 0,
            f = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            },
            p = /[&<>"'\/]/g;
        e(function() {
            var t = !1;
            e(document).on("click", 'a[href*="/download-form/"]', function(n) {
                n.preventDefault();
                var i = e(n.currentTarget),
                    a = i.attr("href").split("/"),
                    o = a.indexOf("download-form");
                if (-1 === o) return !1;
                if (a.splice(0, o), a.length < 5 || "download-form" !== a[0]) return !1;
                var s = "",
                    l = a[1],
                    c = a[2],
                    d = "" + a[3],
                    u = "1" === a[5],
                    h = [],
                    f = "dl-" + l + "-" + c,
                    p = readCookie(f);
                try {
                    s = decodeURIComponent(escape(atob(a[4])))
                } catch (n) {}
                if (p) {
                    var m, g = atob(p),
                        v = "";
                    for (m = 0; m < g.length; m++) v += String.fromCharCode(g.charCodeAt(m) ^ d.charCodeAt(m % d.length));
                    if (crc32(v) == d) return void(t ? t = !1 : window.location.href = v)
                }
                a[6] && (a[6] = atob(a[6]), h = a[6].split(",")), tracking.trackEvent("Download: Launch Modal", parseInt(c, 16) + " " + s, location.pathname + location.search + location.hash), r(s, l, c, f, u, h)
            }), window.location.search.indexOf("download") >= 0 && (t = !0, e('a[href*="/download-form/"]').first().click())
        })
    }), define("module/globals/newsletter", ["jquery", "module/globals/navigation"], function(e, t) {
        function n() {
            i || (i = e('<div class="form-default form-popup newsletter-popup newsletter-form"><a class="icon-cancel close" href="#"></a><iframe src="https://www2.gensler.com/l/484051/2020-03-04/qtgsk" width="466" height="252" frameborder="0" allowtransparency></iframe></div>'), newsletterPopupWrapper = e('<div class="form-popup-wrapper"></div>').fadeTo(0, 0).append(i), i.fadeTo(0, 0).on("click", ".close", function(t) {
                t.preventDefault(), newsletterPopupWrapper.fadeTo(250, 0), i.fadeTo(250, 0, function() {
                    e(window).off("resize.newsletterPopup"), i.hide(), newsletterPopupWrapper.hide()
                })
            }), e("body").append(newsletterPopupWrapper)), newsletterPopupWrapper.fadeTo(150, 1), i.fadeTo(250, 1);
            var t = i.find("iframe").get(0).contentWindow;
            e(window).on("resize.newsletterPopup", function() {
                (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= 678 ? (t.postMessage("mobile", "*"), i.css("position", "fixed"), i.find("iframe").width("100%").height("100%")) : (t.postMessage("desktop", "*"), i.css("position", ""), i.find("iframe").width("").height(""))
            }).trigger("resize.newsletterPopup")
        }
        var i = !1;
        e("body").on("click", ".newsletter-form-popup", function(e) {
            e.preventDefault(), n()
        }), /[?&](dialogue-monthly|subscribe)/i.test(window.location.search) && n(), window.addEventListener("message", function(t) {
            "cancel" === t.data ? i.find(".close").click() : "load" === t.data && e(window).trigger("resize.newsletterPopup")
        }, !1)
    }), define("module/globals/videoTracking", ["jquery", "module/globals/tracking"], function(e) {
        var t = window,
            n = e(t),
            i = e("body"),
            a = !1,
            o = !1,
            r = [],
            s = !1,
            l = !1,
            c = [],
            d = function() {
                i.find("iframe").each(function() {
                    -1 !== this.src.indexOf("youtube.com") ? u(this) : -1 !== this.src.indexOf("vimeo.com") && h(this)
                })
            },
            u = function(t) {
                if (!o) return r.push(t), void(a || f());
                var n = e(t);
                if (!n.data("tracking")) {
                    var i = new YT.Player(t, {
                        events: {
                            onStateChange: function(e) {
                                switch (e) {
                                    case YT.PlayerState.ENDED:
                                        tracking.trackEvent("VideoENDED", n.data("id"), location.pathname + location.search + location.hash);
                                        break;
                                    case YT.PlayerState.PLAYING:
                                        tracking.trackEvent("VideoPLAY", n.data("id"), location.pathname + location.search + location.hash);
                                        break;
                                    case YT.PlayerState.PAUSED:
                                        tracking.trackEvent("VideoPAUSE", n.data("id"), location.pathname + location.search + location.hash)
                                }
                            }
                        }
                    });
                    n.data({
                        id: n.data("id") ? n.data("id") : t.src,
                        player: i,
                        tracking: !0
                    })
                }
            },
            h = function(t) {
                if (!l) return c.push(t), void(s || p());
                var n = e(t);
                if (!n.data("tracking")) {
                    var i = new Vimeo.Player(t);
                    i.on("play", function() {
                        tracking.trackEvent("VideoPLAY", n.data("id"), location.pathname + location.search + location.hash)
                    }), i.on("pause", function() {
                        tracking.trackEvent("VideoPAUSE", n.data("id"), location.pathname + location.search + location.hash)
                    }), i.on("ended", function() {
                        tracking.trackEvent("VideoENDED", n.data("id"), location.pathname + location.search + location.hash)
                    }), n.data({
                        id: n.data("id") ? n.data("id") : t.src,
                        player: i,
                        tracking: !0
                    })
                }
            },
            f = function() {
                var e = document.createElement("script");
                e.src = "https://www.youtube.com/player_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t), a = !0
            },
            p = function() {
                require(["https://player.vimeo.com/api/player.js"], function(e) {
                    t.Vimeo = {
                        Player: e
                    }, t.onVimeoPlayerAPIReady()
                }), s = !0
            };
        t.onYouTubePlayerAPIReady = function() {
            o = !0, e.each(r, function() {
                u(this)
            })
        }, t.onVimeoPlayerAPIReady = function() {
            l = !0, e.each(c, function() {
                h(this)
            })
        }, n.on("modalOpen", d), n.on("tabchange", d), e(d)
    }), define("module/globals/loading", ["jquery", "lib/polyfills/rAF"], function(e) {
        function t(t, n) {
            if (this.img = t, this.$container = e(n), !this.$container.size()) return !1;
            this.container = this.$container.get(0), this.index = -1, this.posX = 0, this.animationCallback = !1, this.$container.data("ImageAnimation", this), this.$container.on("remove", e.proxy(function() {
                this.stopAnimation(), this.imageElm = null, this.$container.removeData("ImageAnimation"), this.$container.remove()
            }, this)).on("startAnimation", e.proxy(function() {
                this.startAnimation()
            }, this)).on("stopAnimation", e.proxy(function() {
                this.stopAnimation()
            }, this)), this.loadImage()
        }
        var n = {
            src: "/images/loader/default-1075c066.png",
            width: 32,
            height: 32,
            frames: 12,
            frameWidth: 32,
            frameDuration: 90
        };
        t.prototype.loadImage = function() {
            this.imageElm = new Image, this.imageElm.onload = e.proxy(function() {
                this.startAnimation()
            }, this), this.imageElm.src = this.img.src
        }, t.prototype.startAnimation = function() {
            this.animationFrame = e.proxy(this.showNextFrame, this), this.animationCallback = e.proxy(function() {
                window.requestAnimationFrame(this.animationFrame)
            }, this), this.animCbT = !1, this.container.style.backgroundImage = "url(" + this.img.src + ")", this.container.style.width = this.img.width + "px", this.container.style.height = this.img.height + "px", this.showNextFrame()
        }, t.prototype.stopAnimation = function() {
            this.animCbT && clearTimeout(this.animCbT), this.animationFrame = null, this.animationCallback = null
        }, t.prototype.showNextFrame = function() {
            this.index += 1, this.index >= this.img.frames ? (this.posX = 0, this.index = 0) : this.posX += this.img.frameWidth, this.container.style.backgroundPosition = -this.posX + "px 0", this.animationCallback && (this.animCbT = setTimeout(this.animationCallback, this.img.frameDuration))
        }, e(function() {
            e(".loader-image").each(function() {
                e(this).data("ImageAnimation", new t(n, this))
            })
        })
    }), define("module/globals/audioplayer", ["jquery"], function(e) {
        if (window.audioPlayer) return void window.audioPlayer.start();
        ! function(e, t, n, i) {
            var a = "ontouchstart" in t,
                o = a ? "touchstart" : "mousedown",
                r = a ? "touchmove" : "mousemove",
                s = a ? "touchcancel" : "mouseup",
                l = function(e) {
                    var t = e / 3600,
                        n = Math.floor(t),
                        i = e % 3600 / 60,
                        a = Math.floor(i),
                        o = Math.ceil(e % 3600 % 60);
                    return o > 59 && (o = 0, a = Math.ceil(i)), a > 59 && (a = 0, n = Math.ceil(t)), (0 === n ? "" : n > 0 && n.toString().length < 2 ? "0" + n + ":" : n + ":") + (a.toString().length < 2 ? "0" + a : a) + ":" + (o.toString().length < 2 ? "0" + o : o)
                };
            e.fn.audioPlayer = function(t) {
                t = e.extend({
                    classPrefix: "audioplayer",
                    strPlay: "Play",
                    strPause: "Pause",
                    strVolume: "Volume"
                }, t);
                var n = {},
                    i = {
                        playPause: "playpause",
                        playing: "playing",
                        stopped: "stopped",
                        time: "time",
                        timeCurrent: "time-current",
                        timeDuration: "time-duration",
                        bar: "bar",
                        barLoaded: "bar-loaded",
                        barPlayed: "bar-played",
                        volume: "volume",
                        volumeButton: "volume-button",
                        volumeAdjust: "volume-adjust",
                        noVolume: "novolume",
                        muted: "muted",
                        mini: "mini"
                    };
                for (var c in i) i.hasOwnProperty(c) && (n[c] = t.classPrefix + "-" + i[c]);
                return this.each(function() {
                    if ("audio" != e(this).prop("tagName").toLowerCase()) return !1;
                    var i = e(this),
                        c = (i.attr("src"), i.get(0).getAttribute("autoplay")),
                        d = i.get(0).getAttribute("loop");
                    d = "" === d || "loop" === d, c = "" === c || "autoplay" === c, dataAutoPlay = void 0 !== i.data("autoplay");
                    var u = e('<div class="' + t.classPrefix + '"><div class="' + n.playPause + '" title="' + t.strPlay + '"><a href="#">' + t.strPlay + "</a></div></div>"),
                        h = i.eq(0);
                    u.insertAfter(i), h = h.get(0), u.prepend(h), u.find("audio").css({
                        width: 0,
                        height: 0,
                        visibility: "hidden"
                    }), u.append('<div class="' + n.time + " " + n.timeCurrent + '"></div><div class="' + n.bar + '"><div class="' + n.barLoaded + '"></div><div class="' + n.barPlayed + '"></div></div><div class="' + n.time + " " + n.timeDuration + '"></div><div class="' + n.volume + '"><div class="' + n.volumeButton + '" title="' + t.strVolume + '"><a href="#">' + t.strVolume + '</a></div><div class="' + n.volumeAdjust + '"><div><div></div></div></div></div>');
                    var f = u.find("." + n.bar),
                        p = u.find("." + n.barPlayed),
                        m = u.find("." + n.barLoaded),
                        g = u.find("." + n.timeCurrent),
                        v = u.find("." + n.timeDuration),
                        y = u.find("." + n.playPause),
                        b = u.parent().find(".player-control-btn"),
                        x = u.find("." + n.volumeButton),
                        w = u.find("." + n.volumeAdjust),
                        C = w.find(" > div"),
                        k = 0,
                        E = function(e) {
                            var t = a ? e.originalEvent.touches[0] : e;
                            h.currentTime = Math.round(h.duration * (t.pageX - f.offset().left) / f.width())
                        },
                        T = function(e) {
                            var t = a ? e.originalEvent.touches[0] : e,
                                n = (t.pageY - (C.offset().top + C.height())) / C.height();
                            h.volume = Math.abs(Math.max(-1, Math.min(0, n)))
                        },
                        S = function() {
                            var e = setInterval(function() {
                                if (h.buffered.length < 1) return !0;
                                m.width(h.buffered.end(0) / h.duration * 100 + "%"), Math.floor(h.buffered.end(0)) >= Math.floor(h.duration) && clearInterval(e)
                            }, 100)
                        },
                        A = function() {
                            v.html(e.isNumeric(h.duration) ? l(h.duration) : i.data("duration") ? i.data("duration") : "&hellip;")
                        },
                        N = h.volume,
                        j = h.volume = .111;
                    Math.round(1e3 * h.volume) / 1e3 == j ? h.volume = N : u.addClass(n.noVolume), g.html(l(0)), S(), A(), C.find("div").height(100 * h.volume + "%"), k = h.volume, h.addEventListener("loadeddata", function() {
                        S(), A(), C.find("div").height(100 * h.volume + "%"), k = h.volume
                    }), h.addEventListener("timeupdate", function() {
                        g.html(l(h.currentTime)), p.width(h.currentTime / h.duration * 100 + "%")
                    }), h.addEventListener("volumechange", function() {
                        C.find("div").height(100 * h.volume + "%"), h.volume > 0 && u.hasClass(n.muted) && u.removeClass(n.muted), h.volume <= 0 && !u.hasClass(n.muted) && u.addClass(n.muted)
                    }), h.addEventListener("ended", function() {
                        u.removeClass(n.playing).addClass(n.stopped)
                    }), h.addEventListener("pause", function() {
                        u.removeClass(n.playing).addClass(n.stopped)
                    }), h.addEventListener("playing", function() {
                        u.removeClass(n.stopped).addClass(n.playing)
                    }), h.addEventListener("play", function() {
                        u.removeClass(n.stopped).addClass(n.playing)
                    }), f.on(o, function(e) {
                        E(e), f.on(r, function(e) {
                            E(e)
                        })
                    }).on(s, function() {
                        f.unbind(r)
                    }), x.on("click", function() {
                        return u.hasClass(n.muted) ? (u.removeClass(n.muted), h.volume = k) : (u.addClass(n.muted), k = h.volume, h.volume = 0), !1
                    }), w.on(o, function(e) {
                        T(e), w.on(r, function(e) {
                            T(e)
                        })
                    }).on(s, function() {
                        w.unbind(r)
                    }), y.on("click", function() {
                        return u.hasClass(n.playing) ? (e(this).attr("title", t.strPlay).find("a").html(t.strPlay), u.removeClass(n.playing).addClass(n.stopped), h.pause(), b.removeClass("pause")) : (e(this).attr("title", t.strPause).find("a").html(t.strPause), u.addClass(n.playing).removeClass(n.stopped), h.play(), b.addClass("pause")), !1
                    }), b.on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), y.click()
                    }), u.addClass(c ? n.playing : n.stopped), dataAutoPlay && setTimeout(function() {
                        h.play()
                    }, 50)
                }), this
            }
        }(e, window, document), window.audioPlayer = {}, window.audioPlayer.elements = [], window.audioPlayer.start = function() {
            e("audio").each(function() {
                e(this).data("init") || (e(this).data("init", !0).audioPlayer({
                    classPrefix: "audioplayer",
                    strPlay: "Play",
                    strPause: "Pause",
                    strVolume: "Volume"
                }), window.audioPlayer.elements.push(this))
            })
        }, window.audioPlayer.pauseAll = function() {
            e.each(window.audioPlayer.elements, function() {
                this.pause()
            })
        }, e(window).on("tabchange.audioPlayer", function() {
            window.audioPlayer.start()
        }), e(function() {
            window.audioPlayer.start()
        })
    }),
    function(e) {
        "use strict";
        var t, n;
        t = function() {
            var t = document.getElementsByTagName("img");
            if (t)
                for (var n = 0; n < t.length; n++) {
                    var i = t[n].getAttribute("data-original");
                    i && i !== t[n].getAttribute("src") && (t[n].setAttribute("src", i), e.jQuery && e.jQuery(t[n]).fadeTo(0, 1))
                }
        }, e.addEventListener ? (addEventListener("beforeprint", t, !1), !("onbeforeprint" in e) && e.matchMedia && (n = matchMedia("print")) && n.addListener && n.addListener(function() {
            n.matches && t()
        })) : e.onbeforeprint = t
    }(window), define("module/globals/print", function() {}), define("module/globals/cookiemsg", ["jquery"], function(e) {
        var t = window,
            n = t.readCookie("cookie_msg");
        if (t.cookieMsg = 0, "dismissed" !== n) {
            var i = e(document.getElementById("cookie_msg")),
                a = e("body > .main-wrapper"),
                o = function() {
                    t.cookieMsg = i.outerHeight(), a.css({
                        paddingBottom: i.outerHeight()
                    })
                };
            i.show().on("click", ".close", function(n) {
                n.preventDefault(), t.cookieMsg = 0, i.hide(), a.css({
                    paddingBottom: ""
                }), e(t).off("resize.cookieMsg").trigger("resize").trigger("scroll"), t.createCookie("cookie_msg", "dismissed", 365)
            }), e(t).on("resize.cookieMsg", o), o()
        }
    }), define("GLOBALS/package", ["require", "module/globals/navigation", "module/globals/picturefill", "module/globals/global"], function(e) {
        return e(["module/globals/grid", "module/globals/share", "module/globals/download", "module/globals/newsletter", "module/globals/tracking", "module/globals/videoTracking", "module/globals/loading", "module/globals/audioplayer", "module/globals/print", "module/globals/cookiemsg"]), {
            Navigation: e("module/globals/navigation"),
            PictureFill: e("module/globals/picturefill"),
            Global: e("module/globals/global")
        }
    }), define("GLOBALS", ["GLOBALS/package"], function(e) {
        return e
    }), define("Controller", ["GLOBALS"], function(e) {
        "use strict";
        var t = function(e, t, n) {
                require([e], function(e) {
                    e.start(t), n && n(e)
                })
            },
            n = {
                homepage: {
                    index: function() {
                        t("module/homepage/index")
                    }
                },
                projects: {
                    detail: function() {
                        t("module/projects/detail")
                    }
                },
                people: {
                    detail: function() {
                        t("module/people/detail")
                    }
                },
                podcast: {
                    player: function() {}
                },
                newsletter: {
                    index: function() {},
                    unsubscribe: function() {},
                    feedback: function() {}
                }
            };
        return {
            start: function(i, a) {
                if (e.Navigation.start(), e.PictureFill.start(), e.Global.start(), i)
                    if (n[i] && n[i][a]) n[i][a].apply(this, Array.prototype.slice.call(arguments, 1));
                    else {
                        var o = "module/:module/index".replace(/:module/g, i).replace(/:action/g, a);
                        t(o)
                    }
            },
            stop: function() {}
        }
    }),
    function(e, t) {
        if (e.bustString = "e0d3311661", require.config({
                urlArgs: 14 != e.bustString.length ? e.bustString : +new Date,
                waitSeconds: 0
            }), !e.console) {
            var n = function() {};
            e.console = {
                log: n,
                debug: n,
                trace: n
            }
        }
        require(["config"], function() {
            require.onError = function(e) {
                requirejs.s.contexts._.config.config.debug && (console.log(e), console.trace && console.trace())
            }, e.loadModule = function(e, n) {
                require(["Controller"], function(i) {
                    var a = t.body;
                    a.getAttribute("data-controller") === e && a.getAttribute("data-action") === n || (i.stop(a.getAttribute("data-controller"), a.getAttribute("data-action")), a.setAttribute("data-controller", e), a.setAttribute("data-action", n)), i.start(e, n)
                })
            };
            var n = t.body;
            n && e.loadModule(n.getAttribute("data-controller"), n.getAttribute("data-action"))
        })
    }(window, document), define("app.bootstrap", function() {});