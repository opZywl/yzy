"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [601], {
        327: function(t, e, i) {
            i.d(e, {
                default: function() {
                    return n.a
                }
            });
            var r = i(8714),
                n = i.n(r)
        },
        6323: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = i(8009),
                n = i(6546),
                s = i(9368),
                o = n._(i(6041)),
                a = r._(i(6067)),
                l = r._(i(8860)),
                u = i(5902),
                h = i(3020),
                d = i(1024);
            i(7979);
            let c = i(2673),
                p = r._(i(4281)),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(t, e, i, r, n, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && n(!0), null == i ? void 0 : i.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let r = !1,
                                n = !1;
                            i.current({
                                ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => n,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, e.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(t)
                    }
                }))
            }

            function g(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let v = (0, o.forwardRef)((t, e) => {
                let {
                    src: i,
                    srcSet: r,
                    sizes: n,
                    height: a,
                    width: l,
                    decoding: u,
                    className: h,
                    style: d,
                    fetchPriority: c,
                    placeholder: p,
                    loading: f,
                    unoptimized: v,
                    fill: y,
                    onLoadRef: b,
                    onLoadingCompleteRef: x,
                    setBlurComplete: w,
                    setShowAltText: P,
                    sizesInput: S,
                    onLoad: T,
                    onError: A,
                    ...C
                } = t;
                return (0, s.jsx)("img", {
                    ...C,
                    ...g(c),
                    loading: f,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": y ? "fill" : "1",
                    className: h,
                    style: d,
                    sizes: n,
                    srcSet: r,
                    src: i,
                    ref: (0, o.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && m(t, p, b, x, w, v, S))
                    }, [i, p, b, x, w, A, v, S, e]),
                    onLoad: t => {
                        m(t.currentTarget, p, b, x, w, v, S)
                    },
                    onError: t => {
                        P(!0), "empty" !== p && w(!0), A && A(t)
                    }
                })
            });

            function y(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: i
                } = t, r = {
                    as: "image",
                    imageSrcSet: i.srcSet,
                    imageSizes: i.sizes,
                    crossOrigin: i.crossOrigin,
                    referrerPolicy: i.referrerPolicy,
                    ...g(i.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(i.src, r), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: i.srcSet ? void 0 : i.src,
                        ...r
                    }, "__nimg-" + i.src + i.srcSet + i.sizes)
                })
            }
            let b = (0, o.forwardRef)((t, e) => {
                let i = (0, o.useContext)(c.RouterContext),
                    r = (0, o.useContext)(d.ImageConfigContext),
                    n = (0, o.useMemo)(() => {
                        let t = f || r || h.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            i = t.deviceSizes.sort((t, e) => t - e);
                        return {
                            ...t,
                            allSizes: e,
                            deviceSizes: i
                        }
                    }, [r]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    m = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    m.current = a
                }, [a]);
                let g = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [b, x] = (0, o.useState)(!1), [w, P] = (0, o.useState)(!1), {
                    props: S,
                    meta: T
                } = (0, u.getImgProps)(t, {
                    defaultLoader: p.default,
                    imgConf: n,
                    blurComplete: b,
                    showAltText: w
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(v, {
                        ...S,
                        unoptimized: T.unoptimized,
                        placeholder: T.placeholder,
                        fill: T.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: g,
                        setBlurComplete: x,
                        setShowAltText: P,
                        sizesInput: t.sizes,
                        ref: e
                    }), T.priority ? (0, s.jsx)(y, {
                        isAppRouter: !i,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        4412: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = i(8009)._(i(6041)).default.createContext({})
        },
        4117: function(t, e) {
            function i(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: i = !1,
                    hasQuery: r = !1
                } = void 0 === t ? {} : t;
                return e || i && r
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        5902: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), i(7979);
            let r = i(7230),
                n = i(3020);

            function s(t) {
                return void 0 !== t.default
            }

            function o(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var i;
                let a, l, u, {
                        src: h,
                        sizes: d,
                        unoptimized: c = !1,
                        priority: p = !1,
                        loading: f,
                        className: m,
                        quality: g,
                        width: v,
                        height: y,
                        fill: b = !1,
                        style: x,
                        overrideSrc: w,
                        onLoad: P,
                        onLoadingComplete: S,
                        placeholder: T = "empty",
                        blurDataURL: A,
                        fetchPriority: C,
                        layout: k,
                        objectFit: E,
                        objectPosition: M,
                        lazyBoundary: D,
                        lazyRoot: V,
                        ...j
                    } = t,
                    {
                        imgConf: R,
                        showAltText: L,
                        blurComplete: F,
                        defaultLoader: O
                    } = e,
                    B = R || n.imageConfigDefault;
                if ("allSizes" in B) a = B;
                else {
                    let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
                        e = B.deviceSizes.sort((t, e) => t - e);
                    a = {
                        ...B,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === O) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let I = j.loader || O;
                delete j.loader, delete j.srcSet;
                let z = "__next_img_default" in I;
                if (z) {
                    if ("custom" === a.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = I;
                    I = e => {
                        let {
                            config: i,
                            ...r
                        } = e;
                        return t(r)
                    }
                }
                if (k) {
                    "fill" === k && (b = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    } [k];
                    t && (x = {
                        ...x,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    } [k];
                    e && !d && (d = e)
                }
                let _ = "",
                    $ = o(v),
                    W = o(y);
                if ("object" == typeof(i = h) && (s(i) || void 0 !== i.src)) {
                    let t = s(h) ? h.default : h;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, A = A || t.blurDataURL, _ = t.src, !b) {
                        if ($ || W) {
                            if ($ && !W) {
                                let e = $ / t.width;
                                W = Math.round(t.height * e)
                            } else if (!$ && W) {
                                let e = W / t.height;
                                $ = Math.round(t.width * e)
                            }
                        } else $ = t.width, W = t.height
                    }
                }
                let U = !p && ("lazy" === f || void 0 === f);
                (!(h = "string" == typeof h ? h : _) || h.startsWith("data:") || h.startsWith("blob:")) && (c = !0, U = !1), a.unoptimized && (c = !0), z && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0), p && (C = "high");
                let N = o(g),
                    X = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: E,
                        objectPosition: M
                    } : {}, L ? {} : {
                        color: "transparent"
                    }, x),
                    G = F || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: $,
                        heightInt: W,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: A || "",
                        objectFit: X.objectFit
                    }) + '")' : 'url("' + T + '")',
                    Y = G ? {
                        backgroundSize: X.objectFit || "cover",
                        backgroundPosition: X.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: G
                    } : {},
                    K = function(t) {
                        let {
                            config: e,
                            src: i,
                            unoptimized: r,
                            width: n,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (r) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, i) {
                            let {
                                deviceSizes: r,
                                allSizes: n
                            } = t;
                            if (i) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let r; r = t.exec(i); r) e.push(parseInt(r[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: n.filter(e => e >= r[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: n,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => n.find(e => e >= t) || n[n.length - 1]))],
                                kind: "x"
                            }
                        }(e, n, o), h = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, r) => a({
                                config: e,
                                src: i,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : r + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: i,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: a,
                        src: h,
                        unoptimized: c,
                        width: $,
                        quality: N,
                        sizes: d,
                        loader: I
                    });
                return {
                    props: {
                        ...j,
                        loading: U ? "lazy" : f,
                        fetchPriority: C,
                        width: $,
                        height: W,
                        decoding: "async",
                        className: m,
                        style: {
                            ...X,
                            ...Y
                        },
                        sizes: K.sizes,
                        srcSet: K.srcSet,
                        src: w || K.src
                    },
                    meta: {
                        unoptimized: c,
                        priority: p,
                        placeholder: T,
                        fill: b
                    }
                }
            }
        },
        8860: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return m
                    },
                    defaultHead: function() {
                        return d
                    }
                });
            let r = i(8009),
                n = i(6546),
                s = i(9368),
                o = n._(i(6041)),
                a = r._(i(295)),
                l = i(4412),
                u = i(4323),
                h = i(4117);

            function d(t) {
                void 0 === t && (t = !1);
                let e = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function c(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            i(7979);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function f(t, e) {
                let {
                    inAmpMode: i
                } = e;
                return t.reduce(c, []).reverse().concat(d(i).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        i = new Set,
                        r = {};
                    return n => {
                        let s = !0,
                            o = !1;
                        if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                            o = !0;
                            let e = n.key.slice(n.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                e.has(n.type) ? s = !1 : e.add(n.type);
                                break;
                            case "meta":
                                for (let t = 0, e = p.length; t < e; t++) {
                                    let e = p[t];
                                    if (n.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) i.has(e) ? s = !1 : i.add(e);
                                        else {
                                            let t = n.props[e],
                                                i = r[e] || new Set;
                                            ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), r[e] = i)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let r = t.key || e;
                    if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = {
                            ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
                    }
                    return o.default.cloneElement(t, {
                        key: r
                    })
                })
            }
            let m = function(t) {
                let {
                    children: e
                } = t, i = (0, o.useContext)(l.AmpStateContext), r = (0, o.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(a.default, {
                    reduceComponentsToState: f,
                    headManager: r,
                    inAmpMode: (0, h.isInAmpMode)(i),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        7230: function(t, e) {
            function i(t) {
                let {
                    widthInt: e,
                    heightInt: i,
                    blurWidth: r,
                    blurHeight: n,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = r ? 40 * r : e, l = n ? 40 * n : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        1024: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = i(8009)._(i(6041)),
                n = i(3020),
                s = r.default.createContext(n.imageConfigDefault)
        },
        3020: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return i
                    },
                    imageConfigDefault: function() {
                        return r
                    }
                });
            let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        8714: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let r = i(8009),
                n = i(5902),
                s = i(6323),
                o = r._(i(4281));

            function a(t) {
                let {
                    props: e
                } = (0, n.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        4281: function(t, e) {
            function i(t) {
                let {
                    config: e,
                    src: i,
                    width: r,
                    quality: n
                } = t;
                return e.path + "?url=" + encodeURIComponent(i) + "&w=" + r + "&q=" + (n || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), i.__next_img_default = !0;
            let r = i
        },
        2673: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = i(8009)._(i(6041)).default.createContext(null)
        },
        295: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = i(6041),
                n = "undefined" == typeof window,
                s = n ? () => {} : r.useLayoutEffect,
                o = n ? () => {} : r.useEffect;

            function a(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: i
                } = t;

                function a() {
                    if (e && e.mountedInstances) {
                        let n = r.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(i(n, t))
                    }
                }
                if (n) {
                    var l;
                    null == e || null == (l = e.mountedInstances) || l.add(t.children), a()
                }
                return s(() => {
                    var i;
                    return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
                        var i;
                        null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                    }
                }), s(() => (e && (e._pendingUpdate = a), () => {
                    e && (e._pendingUpdate = a)
                })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        4488: function(t, e, i) {
            i.d(e, {
                W: function() {
                    return r
                }
            });

            function r() {
                for (var t, e, i = 0, r = "", n = arguments.length; i < n; i++)(t = arguments[i]) && (e = function t(e) {
                    var i, r, n = "";
                    if ("string" == typeof e || "number" == typeof e) n += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var s = e.length;
                            for (i = 0; i < s; i++) e[i] && (r = t(e[i])) && (n && (n += " "), n += r)
                        } else
                            for (r in e) e[r] && (n && (n += " "), n += r)
                    }
                    return n
                }(t)) && (r && (r += " "), r += e);
                return r
            }
        },
        5079: function(t, e, i) {
            i.d(e, {
                v: function() {
                    return d
                }
            });
            var r = i(6382),
                n = i(6876),
                s = i(3518),
                o = i(7722),
                a = i(2976),
                l = i(1939);
            let u = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (l.P.test(t) || "0" === t) && !t.startsWith("url("));
            var h = i(6422);
            class d {
                constructor({
                                autoplay: t = !0,
                                delay: e = 0,
                                type: i = "keyframes",
                                repeat: n = 0,
                                repeatDelay: s = 0,
                                repeatType: o = "loop",
                                ...a
                            }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = r.X.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: s,
                        repeatType: o,
                        ...a
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (0, n.m)(), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = r.X.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: n,
                        velocity: l,
                        delay: d,
                        onComplete: c,
                        onUpdate: p,
                        isGenerator: f
                    } = this.options;
                    if (!f && ! function(t, e, i, r) {
                        let n = t[0];
                        if (null === n) return !1;
                        if ("display" === e || "visibility" === e) return !0;
                        let s = t[t.length - 1],
                            l = u(n, e),
                            h = u(s, e);
                        return (0, a.K)(l === h, `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`), !!l && !!h && (function(t) {
                            let e = t[0];
                            if (1 === t.length) return !0;
                            for (let i = 0; i < t.length; i++)
                                if (t[i] !== e) return !0
                        }(t) || ("spring" === i || (0, o.xD)(i)) && r)
                    }(t, i, n, l)) {
                        if (s.c.current || !d) {
                            p && p((0, h.$)(t, this.options, e)), c && c(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let m = this.initPlayback(t, e);
                    !1 !== m && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...m
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }
        },
        1108: function(t, e, i) {
            i.d(e, {
                s: function() {
                    return $
                },
                y: function() {
                    return W
                }
            });
            var r = i(7722),
                n = i(889),
                s = i(6876),
                o = i(8993),
                a = i(7342),
                l = i(9521),
                u = i(5286);

            function h(t, e, i) {
                let r = Math.max(e - 5, 0);
                return (0, u.R)(i - t(r), e - r)
            }
            let d = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };
            var c = i(2976);

            function p(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let f = ["duration", "bounce"],
                m = ["stiffness", "damping", "mass"];

            function g(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function v(t = d.visualDuration, e = d.bounce) {
                let i;
                let s = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: a,
                        restDelta: l
                    } = s,
                    u = s.keyframes[0],
                    v = s.keyframes[s.keyframes.length - 1],
                    y = {
                        done: !1,
                        value: u
                    },
                    {
                        stiffness: b,
                        damping: x,
                        mass: w,
                        duration: P,
                        velocity: S,
                        isResolvedFromDuration: T
                    } = function(t) {
                        let e = {
                            velocity: d.velocity,
                            stiffness: d.stiffness,
                            damping: d.damping,
                            mass: d.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!g(t, m) && g(t, f)) {
                            if (t.visualDuration) {
                                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                                    r = i * i,
                                    n = 2 * (0, o.u)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                                e = {
                                    ...e,
                                    mass: d.mass,
                                    stiffness: r,
                                    damping: n
                                }
                            } else {
                                let i = function({
                                                     duration: t = d.duration,
                                                     bounce: e = d.bounce,
                                                     velocity: i = d.velocity,
                                                     mass: r = d.mass
                                                 }) {
                                    let s, a;
                                    (0, c.K)(t <= (0, n.w)(d.maxDuration), "Spring duration must be 10 seconds or less");
                                    let l = 1 - e;
                                    l = (0, o.u)(d.minDamping, d.maxDamping, l), t = (0, o.u)(d.minDuration, d.maxDuration, (0, n.X)(t)), l < 1 ? (s = e => {
                                        let r = e * l,
                                            n = r * t;
                                        return .001 - (r - i) / p(e, l) * Math.exp(-n)
                                    }, a = e => {
                                        let r = e * l * t,
                                            n = Math.pow(l, 2) * Math.pow(e, 2) * t,
                                            o = p(Math.pow(e, 2), l);
                                        return (r * i + i - n) * Math.exp(-r) * (-s(e) + .001 > 0 ? -1 : 1) / o
                                    }) : (s = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), a = e => t * t * (i - e) * Math.exp(-e * t));
                                    let u = function(t, e, i) {
                                        let r = i;
                                        for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                                        return r
                                    }(s, a, 5 / t);
                                    if (t = (0, n.w)(t), isNaN(u)) return {
                                        stiffness: d.stiffness,
                                        damping: d.damping,
                                        duration: t
                                    };
                                    {
                                        let e = Math.pow(u, 2) * r;
                                        return {
                                            stiffness: e,
                                            damping: 2 * l * Math.sqrt(r * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = {
                                    ...e,
                                    ...i,
                                    mass: d.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return e
                    }({
                        ...s,
                        velocity: -(0, n.X)(s.velocity || 0)
                    }),
                    A = S || 0,
                    C = x / (2 * Math.sqrt(b * w)),
                    k = v - u,
                    E = (0, n.X)(Math.sqrt(b / w)),
                    M = 5 > Math.abs(k);
                if (a || (a = M ? d.restSpeed.granular : d.restSpeed.default), l || (l = M ? d.restDelta.granular : d.restDelta.default), C < 1) {
                    let t = p(E, C);
                    i = e => v - Math.exp(-C * E * e) * ((A + C * E * k) / t * Math.sin(t * e) + k * Math.cos(t * e))
                } else if (1 === C) i = t => v - Math.exp(-E * t) * (k + (A + E * k) * t);
                else {
                    let t = E * Math.sqrt(C * C - 1);
                    i = e => {
                        let i = Math.exp(-C * E * e),
                            r = Math.min(t * e, 300);
                        return v - i * ((A + C * E * k) * Math.sinh(r) + t * k * Math.cosh(r)) / t
                    }
                }
                let D = {
                    calculatedDuration: T && P || null,
                    next: t => {
                        let e = i(t);
                        if (T) y.done = t >= P;
                        else {
                            let r = 0;
                            C < 1 && (r = 0 === t ? (0, n.w)(A) : h(i, t, e));
                            let s = Math.abs(r) <= a,
                                o = Math.abs(v - e) <= l;
                            y.done = s && o
                        }
                        return y.value = y.done ? v : e, y
                    },
                    toString: () => {
                        let t = Math.min((0, r.iI)(D), r.EO),
                            e = (0, r.wk)(e => D.next(t * e).value, t, 30);
                        return t + "ms " + e
                    }
                };
                return D
            }

            function y({
                           keyframes: t,
                           velocity: e = 0,
                           power: i = .8,
                           timeConstant: r = 325,
                           bounceDamping: n = 10,
                           bounceStiffness: s = 500,
                           modifyTarget: o,
                           min: a,
                           max: l,
                           restDelta: u = .5,
                           restSpeed: d
                       }) {
                let c, p;
                let f = t[0],
                    m = {
                        done: !1,
                        value: f
                    },
                    g = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    y = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    b = i * e,
                    x = f + b,
                    w = void 0 === o ? x : o(x);
                w !== x && (b = w - f);
                let P = t => -b * Math.exp(-t / r),
                    S = t => w + P(t),
                    T = t => {
                        let e = P(t),
                            i = S(t);
                        m.done = Math.abs(e) <= u, m.value = m.done ? w : i
                    },
                    A = t => {
                        g(m.value) && (c = t, p = v({
                            keyframes: [m.value, y(m.value)],
                            velocity: h(S, t, m.value),
                            damping: n,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: d
                        }))
                    };
                return A(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (p || void 0 !== c || (e = !0, T(t), A(t)), void 0 !== c && t >= c) ? p.next(t - c) : (e || T(t), m)
                    }
                }
            }
            var b = i(3602);
            let x = (0, b._)(.42, 0, 1, 1),
                w = (0, b._)(0, 0, .58, 1),
                P = (0, b._)(.42, 0, .58, 1),
                S = t => Array.isArray(t) && "number" != typeof t[0];
            var T = i(4102),
                A = i(1787),
                C = i(4307),
                k = i(903);
            let E = {
                    linear: T.Z,
                    easeIn: x,
                    easeInOut: P,
                    easeOut: w,
                    circIn: k.Z7,
                    circInOut: k.X7,
                    circOut: k.Bn,
                    backIn: C.G2,
                    backInOut: C.XL,
                    backOut: C.CG,
                    anticipate: A.L
                },
                M = t => {
                    if ((0, r.qE)(t)) {
                        (0, c.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, r, n] = t;
                        return (0, b._)(e, i, r, n)
                    }
                    return "string" == typeof t ? ((0, c.k)(void 0 !== E[t], `Invalid easing type '${t}'`), E[t]) : t
                };
            var D = i(5523),
                V = i(2474),
                j = i(6994);

            function R({
                           duration: t = 300,
                           keyframes: e,
                           times: i,
                           ease: r = "easeInOut"
                       }) {
                let n = S(r) ? r.map(M) : M(r),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = (i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let r = 1; r <= e; r++) {
                                let n = (0, V.Y)(0, e, r);
                                t.push((0, j.t)(i, 1, n))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t),
                    a = (0, D.s)(o, e, {
                        ease: Array.isArray(n) ? n : e.map(() => n || P).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = a(e), s.done = e >= t, s)
                }
            }
            var L = i(5079),
                F = i(6382),
                O = i(6366);
            let B = t => {
                let e = ({
                             timestamp: e
                         }) => t(e);
                return {
                    start: () => O.Wi.update(e, !0),
                    stop: () => (0, O.Pn)(e),
                    now: () => O.frameData.isProcessing ? O.frameData.timestamp : F.X.now()
                }
            };
            var I = i(6422);
            let z = {
                    decay: y,
                    inertia: y,
                    tween: R,
                    keyframes: R,
                    spring: v
                },
                _ = t => t / 100;
            class $ extends L.v {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: r,
                        keyframes: n
                    } = this.options, o = (null == r ? void 0 : r.KeyframeResolver) || s.e;
                    this.resolver = new o(n, (t, e) => this.onKeyframesResolved(t, e), e, i, r), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: n = "keyframes",
                        repeat: s = 0,
                        repeatDelay: o = 0,
                        repeatType: u,
                        velocity: h = 0
                    } = this.options, d = (0, r.xD)(n) ? n : z[n] || R;
                    d !== R && "number" != typeof t[0] && (e = (0, l.z)(_, (0, a.C)(t[0], t[1])), t = [0, 100]);
                    let c = d({
                        ...this.options,
                        keyframes: t
                    });
                    "mirror" === u && (i = d({
                        ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -h
                    })), null === c.calculatedDuration && (c.calculatedDuration = (0, r.iI)(c));
                    let {
                        calculatedDuration: p
                    } = c, f = p + o;
                    return {
                        generator: c,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: p,
                        resolvedDuration: f,
                        totalDuration: f * (s + 1) - o
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: r,
                        generator: n,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: a,
                        keyframes: l,
                        calculatedDuration: u,
                        totalDuration: h,
                        resolvedDuration: d
                    } = i;
                    if (null === this.startTime) return n.next(0);
                    let {
                        delay: c,
                        repeat: p,
                        repeatType: f,
                        repeatDelay: m,
                        onUpdate: g
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - h / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? v < 0 : v > h;
                    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = h);
                    let b = this.currentTime,
                        x = n;
                    if (p) {
                        let t = Math.min(this.currentTime, h) / d,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, p + 1)) % 2 && ("reverse" === f ? (i = 1 - i, m && (i -= m / d)) : "mirror" === f && (x = s)), b = (0, o.u)(0, 1, i) * d
                    }
                    let w = y ? {
                        done: !1,
                        value: l[0]
                    } : x.next(b);
                    a && (w.value = a(w.value));
                    let {
                        done: P
                    } = w;
                    y || null === u || (P = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
                    let S = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
                    return S && void 0 !== r && (w.value = (0, I.$)(l, this.options, r)), g && g(w.value), S && this.finish(), w
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? (0, n.X)(t.calculatedDuration) : 0
                }
                get time() {
                    return (0, n.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, n.w)(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, n.X)(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = B,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let r = this.driver.now();
                    null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }

            function W(t) {
                return new $(t)
            }
        },
        6422: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return n
                }
            });
            let r = t => null !== t;

            function n(t, {
                repeat: e,
                repeatType: i = "loop"
            }, n) {
                let s = t.filter(r),
                    o = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                return o && void 0 !== n ? n : s[o]
            }
        },
        4658: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return r
                }
            });
            let r = (0, i(6041).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        1787: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return n
                }
            });
            var r = i(4307);
            let n = t => (t *= 2) < 1 ? .5 * (0, r.G2)(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        4307: function(t, e, i) {
            i.d(e, {
                CG: function() {
                    return o
                },
                G2: function() {
                    return a
                },
                XL: function() {
                    return l
                }
            });
            var r = i(3602),
                n = i(8356),
                s = i(9403);
            let o = (0, r._)(.33, 1.53, .69, .99),
                a = (0, s.M)(o),
                l = (0, n.o)(a)
        },
        903: function(t, e, i) {
            i.d(e, {
                Bn: function() {
                    return o
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return s
                }
            });
            var r = i(8356),
                n = i(9403);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, n.M)(s),
                a = (0, r.o)(s)
        },
        3602: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return s
                }
            });
            var r = i(4102);
            let n = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function s(t, e, i, s) {
                if (t === e && i === s) return r.Z;
                let o = e => (function(t, e, i, r, s) {
                    let o, a;
                    let l = 0;
                    do(o = n(a = e + (i - e) / 2, r, s) - t) > 0 ? i = a : e = a; while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : n(o(t), e, s)
            }
        },
        8356: function(t, e, i) {
            i.d(e, {
                o: function() {
                    return r
                }
            });
            let r = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        9403: function(t, e, i) {
            i.d(e, {
                M: function() {
                    return r
                }
            });
            let r = t => e => 1 - t(1 - e)
        },
        6170: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return s
                }
            });
            var r = i(9209);
            let n = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function s(t, e) {
                let i = !1,
                    s = !0,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    a = () => i = !0,
                    l = n.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            i = new Set,
                            r = !1,
                            n = !1,
                            s = new WeakSet,
                            o = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            s.has(e) && (l.schedule(e), t()), e(o)
                        }
                        let l = {
                            schedule: (t, n = !1, o = !1) => {
                                let a = o && r ? e : i;
                                return n && s.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (o = t, r) {
                                    n = !0;
                                    return
                                }
                                r = !0, [e, i] = [i, e], e.forEach(a), e.clear(), r = !1, n && (n = !1, l.process(t))
                            }
                        };
                        return l
                    }(a), t), {}),
                    {
                        read: u,
                        resolveKeyframes: h,
                        update: d,
                        preRender: c,
                        render: p,
                        postRender: f
                    } = l,
                    m = () => {
                        let n = r.c.useManualTiming ? o.timestamp : performance.now();
                        i = !1, o.delta = s ? 1e3 / 60 : Math.max(Math.min(n - o.timestamp, 40), 1), o.timestamp = n, o.isProcessing = !0, u.process(o), h.process(o), d.process(o), c.process(o), p.process(o), f.process(o), o.isProcessing = !1, i && e && (s = !1, t(m))
                    },
                    g = () => {
                        i = !0, s = !0, o.isProcessing || t(m)
                    };
                return {
                    schedule: n.reduce((t, e) => {
                        let r = l[e];
                        return t[e] = (t, e = !1, n = !1) => (i || g(), r.schedule(t, e, n)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < n.length; e++) l[n[e]].cancel(t)
                    },
                    state: o,
                    steps: l
                }
            }
        },
        6366: function(t, e, i) {
            i.d(e, {
                Pn: function() {
                    return s
                },
                Wi: function() {
                    return n
                },
                frameData: function() {
                    return o
                },
                yL: function() {
                    return a
                }
            });
            var r = i(4102);
            let {
                schedule: n,
                cancel: s,
                state: o,
                steps: a
            } = (0, i(6170).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z, !0)
        },
        6382: function(t, e, i) {
            let r;
            i.d(e, {
                X: function() {
                    return a
                }
            });
            var n = i(9209),
                s = i(6366);

            function o() {
                r = void 0
            }
            let a = {
                now: () => (void 0 === r && a.set(s.frameData.isProcessing || n.c.useManualTiming ? s.frameData.timestamp : performance.now()), r),
                set: t => {
                    r = t, queueMicrotask(o)
                }
            }
        },
        4527: function(t, e, i) {
            function r(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            i.d(e, {
                E: function() {
                    return rk
                }
            });
            let n = t => Array.isArray(t);

            function s(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let r = 0; r < i; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function o(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function a(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function l(t, e, i, r) {
                if ("function" == typeof e) {
                    let [n, s] = a(r);
                    e = e(void 0 !== i ? i : t.custom, n, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [n, s] = a(r);
                    e = e(void 0 !== i ? i : t.custom, n, s)
                }
                return e
            }

            function u(t, e, i) {
                let r = t.getProps();
                return l(r, e, void 0 !== i ? i : r.custom, t)
            }
            let h = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                d = ["initial", ...h];
            var c, p, f, m = i(7722),
                g = i(4398);
            let v = new Set(["width", "height", "top", "left", "right", "bottom", ...g._]),
                y = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                b = t => n(t) ? t[t.length - 1] || 0 : t;
            var x = i(8157),
                w = i(1389);

            function P(t, e) {
                let i = t.getValue("willChange");
                if ((0, w.i)(i) && i.add) return i.add(e)
            }
            let S = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                T = "data-" + S("framerAppearId");
            var A = i(889),
                C = i(6366),
                k = i(9209),
                E = i(3518),
                M = i(4102),
                D = i(1787),
                V = i(4307),
                j = i(903);
            let R = t => /^0[^.\s]+$/u.test(t);
            var L = i(1939),
                F = i(7313);
            let O = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function B(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [r] = i.match(F.K) || [];
                if (!r) return t;
                let n = i.replace(r, ""),
                    s = O.has(e) ? 1 : 0;
                return r !== i && (s *= 100), e + "(" + s + n + ")"
            }
            let I = /\b([a-z-]*)\(.*?\)/gu,
                z = {
                    ...L.P,
                    getAnimatableNone: t => {
                        let e = t.match(I);
                        return e ? e.map(B).join(" ") : t
                    }
                };
            var _ = i(9295),
                $ = i(4058),
                W = i(6654);
            let U = {
                    borderWidth: W.px,
                    borderTopWidth: W.px,
                    borderRightWidth: W.px,
                    borderBottomWidth: W.px,
                    borderLeftWidth: W.px,
                    borderRadius: W.px,
                    radius: W.px,
                    borderTopLeftRadius: W.px,
                    borderTopRightRadius: W.px,
                    borderBottomRightRadius: W.px,
                    borderBottomLeftRadius: W.px,
                    width: W.px,
                    maxWidth: W.px,
                    height: W.px,
                    maxHeight: W.px,
                    top: W.px,
                    right: W.px,
                    bottom: W.px,
                    left: W.px,
                    padding: W.px,
                    paddingTop: W.px,
                    paddingRight: W.px,
                    paddingBottom: W.px,
                    paddingLeft: W.px,
                    margin: W.px,
                    marginTop: W.px,
                    marginRight: W.px,
                    marginBottom: W.px,
                    marginLeft: W.px,
                    backgroundPositionX: W.px,
                    backgroundPositionY: W.px
                },
                N = {
                    rotate: W.RW,
                    rotateX: W.RW,
                    rotateY: W.RW,
                    rotateZ: W.RW,
                    scale: $.bA,
                    scaleX: $.bA,
                    scaleY: $.bA,
                    scaleZ: $.bA,
                    skew: W.RW,
                    skewX: W.RW,
                    skewY: W.RW,
                    distance: W.px,
                    translateX: W.px,
                    translateY: W.px,
                    translateZ: W.px,
                    x: W.px,
                    y: W.px,
                    z: W.px,
                    perspective: W.px,
                    transformPerspective: W.px,
                    opacity: $.Fq,
                    originX: W.$C,
                    originY: W.$C,
                    originZ: W.px
                },
                X = {
                    ...$.Rx,
                    transform: Math.round
                },
                G = {
                    ...U,
                    ...N,
                    zIndex: X,
                    size: W.px,
                    fillOpacity: $.Fq,
                    strokeOpacity: $.Fq,
                    numOctaves: X
                },
                Y = {
                    ...G,
                    color: _.$,
                    backgroundColor: _.$,
                    outlineColor: _.$,
                    fill: _.$,
                    stroke: _.$,
                    borderColor: _.$,
                    borderTopColor: _.$,
                    borderRightColor: _.$,
                    borderBottomColor: _.$,
                    borderLeftColor: _.$,
                    filter: z,
                    WebkitFilter: z
                },
                K = t => Y[t];

            function q(t, e) {
                let i = K(t);
                return i !== z && (i = L.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let H = new Set(["auto", "none", "0"]);
            var Z = i(6876),
                J = i(2976);
            let Q = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
            var tt = i(6780);
            let te = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var ti = i(5448);
            let tr = t => e => e.test(t),
                tn = [$.Rx, W.px, W.aQ, W.RW, W.vw, W.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                ts = t => tn.find(tr(t));
            class to extends Z.e {
                constructor(t, e, i, r, n) {
                    super(t, e, i, r, n, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if ("string" == typeof r && (r = r.trim(), (0, tt.t)(r))) {
                            let n = function t(e, i, r = 1) {
                                (0, J.k)(r <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [n, s] = function(t) {
                                    let e = te.exec(t);
                                    if (!e) return [, ];
                                    let [, i, r, n] = e;
                                    return [`--${null!=i?i:r}`, n]
                                }(e);
                                if (!n) return;
                                let o = window.getComputedStyle(i).getPropertyValue(n);
                                if (o) {
                                    let t = o.trim();
                                    return Q(t) ? parseFloat(t) : t
                                }
                                return (0, tt.t)(s) ? t(s, i, r + 1) : s
                            }(r, e.current);
                            void 0 !== n && (t[i] = n), i === t.length - 1 && (this.finalKeyframe = r)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !v.has(i) || 2 !== t.length) return;
                    let [r, n] = t, s = ts(r), o = ts(n);
                    if (s !== o) {
                        if ((0, ti.mP)(s) && (0, ti.mP)(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var r;
                        ("number" == typeof(r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || R(r)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let r, n = 0;
                        for (; n < t.length && !r;) {
                            let e = t[n];
                            "string" == typeof e && !H.has(e) && (0, L.V)(e).values.length && (r = t[n]), n++
                        }
                        if (r && i)
                            for (let n of e) t[n] = q(i, r)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ti.lw[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let r = e[e.length - 1];
                    void 0 !== r && t.getValue(i, r).jump(r, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: r
                    } = this;
                    if (!e || !e.current) return;
                    let n = e.getValue(i);
                    n && n.jump(this.measuredOrigin, !1);
                    let s = r.length - 1,
                        o = r[s];
                    r[s] = ti.lw[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }
            var ta = i(5079),
                tl = i(1108);
            let tu = new Set(["opacity", "clipPath", "filter", "transform"]);
            var th = i(6422);
            let td = (0, i(227).X)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                tc = {
                    anticipate: D.L,
                    backInOut: V.XL,
                    circInOut: j.X7
                };
            class tp extends ta.v {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: r,
                        keyframes: n
                    } = this.options;
                    this.resolver = new to(n, (t, e) => this.onKeyframesResolved(t, e), e, i, r), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i;
                    let {
                        duration: r = 300,
                        times: n,
                        ease: s,
                        type: o,
                        motionValue: a,
                        name: l,
                        startTime: u
                    } = this.options;
                    if (!a.owner || !a.owner.current) return !1;
                    if ("string" == typeof s && (0, m.Vc)() && s in tc && (s = tc[s]), i = this.options, (0, m.xD)(i.type) || "spring" === i.type || !(0, m.hR)(i.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: a,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let i = new tl.s({
                                    ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                r = {
                                    done: !1,
                                    value: t[0]
                                },
                                n = [],
                                s = 0;
                            for (; !r.done && s < 2e4;) n.push((r = i.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: n,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), r = h.duration, n = h.times, s = h.ease, o = "keyframes"
                    }
                    let h = function(t, e, i, {
                        delay: r = 0,
                        duration: n = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a = "easeInOut",
                        times: l
                    } = {}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let h = (0, m.eB)(a, n);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: r,
                            duration: n,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(a.owner.current, l, t, {
                        ...this.options,
                        duration: r,
                        times: n,
                        ease: s
                    });
                    return h.startTime = null != u ? u : this.calcStartTime(), this.pendingTimeline ? ((0, m._F)(h, this.pendingTimeline), this.pendingTimeline = void 0) : h.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        a.set((0, th.$)(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: h,
                        duration: r,
                        times: n,
                        type: o,
                        ease: s,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return (0, A.X)(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return (0, A.X)(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = (0, A.w)(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return M.Z;
                        let {
                            animation: i
                        } = e;
                        (0, m._F)(i, t)
                    } else this.pendingTimeline = t;
                    return M.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: r,
                        type: n,
                        ease: s,
                        times: o
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: a,
                            element: l,
                            ...u
                        } = this.options, h = new tl.s({
                            ...u,
                            keyframes: i,
                            duration: r,
                            type: n,
                            ease: s,
                            times: o,
                            isGenerator: !0
                        }), d = (0, A.w)(this.time);
                        t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: r,
                        repeatType: n,
                        damping: s,
                        type: o
                    } = t;
                    if (!e || !e.owner || !(e.owner.current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: a,
                        transformTemplate: l
                    } = e.owner.getProps();
                    return td() && i && tu.has(i) && !a && !l && !r && "mirror" !== n && 0 !== s && "inertia" !== o
                }
            }
            let tf = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                tm = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                tg = {
                    type: "keyframes",
                    duration: .8
                },
                tv = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                ty = (t, {
                    keyframes: e
                }) => e.length > 2 ? tg : g.G.has(t) ? t.startsWith("scale") ? tm(e[1]) : tf : tv,
                tb = (t, e, i, r = {}, n, s) => o => {
                    let a = (0, m.ev)(r, t) || {},
                        l = a.delay || r.delay || 0,
                        {
                            elapsed: u = 0
                        } = r;
                    u -= (0, A.w)(l);
                    let h = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...a,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: s ? void 0 : n
                    };
                    ! function({
                                   when: t,
                                   delay: e,
                                   delayChildren: i,
                                   staggerChildren: r,
                                   staggerDirection: n,
                                   repeat: s,
                                   repeatType: o,
                                   repeatDelay: a,
                                   from: l,
                                   elapsed: u,
                                   ...h
                               }) {
                        return !!Object.keys(h).length
                    }(a) && (h = {
                        ...h,
                        ...ty(t, h)
                    }), h.duration && (h.duration = (0, A.w)(h.duration)), h.repeatDelay && (h.repeatDelay = (0, A.w)(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                    let d = !1;
                    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (d = !0)), (E.c.current || k.c.skipAnimations) && (d = !0, h.duration = 0, h.delay = 0), d && !s && void 0 !== e.get()) {
                        let t = (0, th.$)(h.keyframes, a);
                        if (void 0 !== t) return C.Wi.update(() => {
                            h.onUpdate(t), h.onComplete()
                        }), new m.sP([])
                    }
                    return !s && tp.supports(h) ? new tp(h) : new tl.s(h)
                };

            function tx(t, e, {
                delay: i = 0,
                transitionOverride: r,
                type: n
            } = {}) {
                var s;
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e;
                r && (o = r);
                let h = [],
                    d = n && t.animationState && t.animationState.getState()[n];
                for (let e in l) {
                    let r = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null),
                        n = l[e];
                    if (void 0 === n || d && function({
                                                          protectedKeys: t,
                                                          needsAnimating: e
                                                      }, i) {
                        let r = t.hasOwnProperty(i) && !0 !== e[i];
                        return e[i] = !1, r
                    }(d, e)) continue;
                    let a = {
                            delay: i,
                            ...(0, m.ev)(o || {}, e)
                        },
                        u = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = t.props[T];
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, C.Wi);
                            null !== t && (a.startTime = t, u = !0)
                        }
                    }
                    P(t, e), r.start(tb(e, r, n, t.shouldReduceMotion && v.has(e) ? {
                        type: !1
                    } : a, t, u));
                    let c = r.animation;
                    c && h.push(c)
                }
                return a && Promise.all(h).then(() => {
                    C.Wi.update(() => {
                        a && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: r = {},
                                ...n
                            } = u(t, e) || {};
                            for (let e in n = {
                                ...n,
                                ...i
                            }) {
                                let i = b(n[e]);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, x.BX)(i))
                            }
                        }(t, a)
                    })
                }), h
            }

            function tw(t, e, i = {}) {
                var r;
                let n = u(t, e, "exit" === i.type ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = n ? () => Promise.all(tx(t, n, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: n = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, r = 0, n = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * r,
                                l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                            return Array.from(t.variantChildren).sort(tP).forEach((t, r) => {
                                t.notify("AnimationStart", e), o.push(tw(t, e, {
                                    ...s,
                                    delay: i + l(r)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, n + r, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function tP(t, e) {
                return t.sortNodePosition(e)
            }
            let tS = d.length,
                tT = [...h].reverse(),
                tA = h.length;

            function tC(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function tk() {
                return {
                    animate: tC(!0),
                    whileInView: tC(),
                    whileHover: tC(),
                    whileTap: tC(),
                    whileDrag: tC(),
                    whileFocus: tC(),
                    exit: tC()
                }
            }
            class tE {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class tM extends tE {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                                            animation: e,
                                                            options: i
                                                        }) => (function(t, e, i = {}) {
                                let r;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) r = Promise.all(e.map(e => tw(t, e, i)));
                                else if ("string" == typeof e) r = tw(t, e, i);
                                else {
                                    let n = "function" == typeof e ? u(t, e, i.custom) : e;
                                    r = Promise.all(tx(t, n, i))
                                }
                                return r.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = tk(),
                            a = !0,
                            l = e => (i, r) => {
                                var n;
                                let s = u(t, r, "exit" === e ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...r
                                    } = s;
                                    i = {
                                        ...i,
                                        ...r,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function h(u) {
                            let {
                                props: h
                            } = t, c = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < tS; t++) {
                                    let r = d[t],
                                        n = e.props[r];
                                    (o(n) || !1 === n) && (i[r] = n)
                                }
                                return i
                            }(t.parent) || {}, p = [], f = new Set, m = {}, g = 1 / 0;
                            for (let e = 0; e < tA; e++) {
                                var v;
                                let d = tT[e],
                                    y = i[d],
                                    b = void 0 !== h[d] ? h[d] : c[d],
                                    x = o(b),
                                    w = d === u ? y.isActive : null;
                                !1 === w && (g = e);
                                let P = b === c[d] && b !== h[d] && x;
                                if (P && a && t.manuallyAnimateOnMount && (P = !1), y.protectedKeys = {
                                    ...m
                                }, !y.isActive && null === w || !b && !y.prevProp || r(b) || "boolean" == typeof b) continue;
                                let S = (v = y.prevProp, "string" == typeof b ? b !== v : !!Array.isArray(b) && !s(b, v)),
                                    T = S || d === u && y.isActive && !P && x || e > g && x,
                                    A = !1,
                                    C = Array.isArray(b) ? b : [b],
                                    k = C.reduce(l(d), {});
                                !1 === w && (k = {});
                                let {
                                    prevResolvedValues: E = {}
                                } = y, M = {
                                    ...E,
                                    ...k
                                }, D = e => {
                                    T = !0, f.has(e) && (A = !0, f.delete(e)), y.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in M) {
                                    let e = k[t],
                                        i = E[t];
                                    if (!m.hasOwnProperty(t))(n(e) && n(i) ? s(e, i) : e === i) ? void 0 !== e && f.has(t) ? D(t) : y.protectedKeys[t] = !0 : null != e ? D(t) : f.add(t)
                                }
                                y.prevProp = b, y.prevResolvedValues = k, y.isActive && (m = {
                                    ...m,
                                    ...k
                                }), a && t.blockInitialAnimation && (T = !1);
                                let V = !(P && S) || A;
                                T && V && p.push(...C.map(t => ({
                                    animation: t,
                                    options: {
                                        type: d
                                    }
                                })))
                            }
                            if (f.size) {
                                let e = {};
                                f.forEach(i => {
                                    let r = t.getBaseTarget(i),
                                        n = t.getValue(i);
                                    n && (n.liveStyle = !0), e[i] = null != r ? r : null
                                }), p.push({
                                    animation: e
                                })
                            }
                            let y = !!p.length;
                            return a && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1), a = !1, y ? e(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: h,
                            setActive: function(e, r) {
                                var n;
                                if (i[e].isActive === r) return Promise.resolve();
                                null === (n = t.variantChildren) || void 0 === n || n.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
                                }), i[e].isActive = r;
                                let s = h(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = tk(), a = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    r(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let tD = 0;
            class tV extends tE {
                constructor() {
                    super(...arguments), this.id = tD++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let r = this.node.animationState.setActive("exit", !t);
                    e && !t && r.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }

            function tj(t, e, i, r = {
                passive: !0
            }) {
                return t.addEventListener(e, i, r), () => t.removeEventListener(e, i)
            }

            function tR(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let tL = t => e => (0, m.DJ)(e) && t(e, tR(e));

            function tF(t, e, i, r) {
                return tj(t, e, tL(i), r)
            }
            let tO = (t, e) => Math.abs(t - e);
            var tB = i(9521);
            class tI {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: r,
                    dragSnapToOrigin: n = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                        var t, e;
                        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                        let i = t$(this.lastMoveEventInfo, this.history),
                            r = null !== this.startEvent,
                            n = (t = i.offset, e = {
                                x: 0,
                                y: 0
                            }, Math.sqrt(tO(t.x, e.x) ** 2 + tO(t.y, e.y) ** 2) >= 3);
                        if (!r && !n) return;
                        let {
                            point: s
                        } = i, {
                            timestamp: o
                        } = C.frameData;
                        this.history.push({
                            ...s,
                            timestamp: o
                        });
                        let {
                            onStart: a,
                            onMove: l
                        } = this.handlers;
                        r || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                    }, this.handlePointerMove = (t, e) => {
                        this.lastMoveEvent = t, this.lastMoveEventInfo = tz(e, this.transformPagePoint), C.Wi.update(this.updatePoint, !0)
                    }, this.handlePointerUp = (t, e) => {
                        this.end();
                        let {
                            onEnd: i,
                            onSessionEnd: r,
                            resumeAnimation: n
                        } = this.handlers;
                        if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                        let s = t$("pointercancel" === t.type ? this.lastMoveEventInfo : tz(e, this.transformPagePoint), this.history);
                        this.startEvent && i && i(t, s), r && r(t, s)
                    }, !(0, m.DJ)(t)) return;
                    this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.contextWindow = r || window;
                    let s = tz(tR(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = C.frameData;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, t$(s, this.history)), this.removeListeners = (0, tB.z)(tF(this.contextWindow, "pointermove", this.handlePointerMove), tF(this.contextWindow, "pointerup", this.handlePointerUp), tF(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, C.Pn)(this.updatePoint)
                }
            }

            function tz(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function t_(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function t$({
                            point: t
                        }, e) {
                return {
                    point: t,
                    delta: t_(t, tW(e)),
                    offset: t_(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            r = null,
                            n = tW(t);
                        for (; i >= 0 && (r = t[i], !(n.timestamp - r.timestamp > (0, A.w)(.1)));) i--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, A.X)(n.timestamp - r.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (n.x - r.x) / s,
                            y: (n.y - r.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function tW(t) {
                return t[t.length - 1]
            }

            function tU(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            var tN = i(2474),
                tX = i(6994);

            function tG(t) {
                return t.max - t.min
            }

            function tY(t, e, i, r = .5) {
                t.origin = r, t.originPoint = (0, tX.t)(e.min, e.max, t.origin), t.scale = tG(i) / tG(e), t.translate = (0, tX.t)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function tK(t, e, i, r) {
                tY(t.x, e.x, i.x, r ? r.originX : void 0), tY(t.y, e.y, i.y, r ? r.originY : void 0)
            }

            function tq(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + tG(e)
            }

            function tH(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + tG(e)
            }

            function tZ(t, e, i) {
                tH(t.x, e.x, i.x), tH(t.y, e.y, i.y)
            }
            var tJ = i(8993);

            function tQ(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function t0(t, e) {
                let i = e.min - t.min,
                    r = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, r] = [r, i]), {
                    min: i,
                    max: r
                }
            }

            function t1(t, e, i) {
                return {
                    min: t2(t, e),
                    max: t2(t, i)
                }
            }

            function t2(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let t3 = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                t5 = () => ({
                    x: t3(),
                    y: t3()
                }),
                t9 = () => ({
                    min: 0,
                    max: 0
                }),
                t6 = () => ({
                    x: t9(),
                    y: t9()
                });

            function t4(t) {
                return [t("x"), t("y")]
            }

            function t8({
                            top: t,
                            left: e,
                            right: i,
                            bottom: r
                        }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: r
                    }
                }
            }

            function t7(t) {
                return void 0 === t || 1 === t
            }

            function et({
                            scale: t,
                            scaleX: e,
                            scaleY: i
                        }) {
                return !t7(t) || !t7(e) || !t7(i)
            }

            function ee(t) {
                return et(t) || ei(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function ei(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function er(t, e, i, r, n) {
                return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e
            }

            function en(t, e = 0, i = 1, r, n) {
                t.min = er(t.min, e, i, r, n), t.max = er(t.max, e, i, r, n)
            }

            function es(t, {
                x: e,
                y: i
            }) {
                en(t.x, e.translate, e.scale, e.originPoint), en(t.y, i.translate, i.scale, i.originPoint)
            }

            function eo(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function ea(t, e, i, r, n = .5) {
                let s = (0, tX.t)(t.min, t.max, n);
                en(t, e, i, s, r)
            }

            function el(t, e) {
                ea(t.x, e.x, e.scaleX, e.scale, e.originX), ea(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function eu(t, e) {
                return t8(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let eh = ({
                          current: t
                      }) => t ? t.ownerDocument.defaultView : null,
                ed = new WeakMap;
            class ec {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = t6(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: r
                    } = this.getProps();
                    this.panSession = new tI(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(tR(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: r,
                                onDragStart: n
                            } = this.getProps();
                            if (i && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, m.KV)(i), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), t4(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (W.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let r = i.layout.layoutBox[t];
                                        if (r) {
                                            let t = tG(r);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), n && C.Wi.postRender(() => n(t, e)), P(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: r,
                                onDirectionLock: n,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: o
                            } = e;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => t4(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: r,
                        contextWindow: eh(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: r
                    } = e;
                    this.startAnimation(r);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && C.Wi.postRender(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!i || !ep(t, r, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, r) {
                        return void 0 !== e && t < e ? t = r ? (0, tX.t)(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? (0, tX.t)(i, t, r.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), n.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, n = this.constraints;
                    e && tU(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: r,
                        right: n
                    }) {
                        return {
                            x: tQ(t.x, i, n),
                            y: tQ(t.y, e, r)
                        }
                    }(r.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: t1(t, "left", "right"),
                            y: t1(t, "top", "bottom")
                        }
                    }(i), n !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && t4(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(r.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !tU(e)) return !1;
                    let r = e.current;
                    (0, J.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let s = function(t, e, i) {
                            let r = eu(t, i),
                                {
                                    scroll: n
                                } = e;
                            return n && (eo(r.x, n.offset.x), eo(r.y, n.offset.y)), r
                        }(r, n.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: t0((t = n.layout.layoutBox).x, s.x),
                            y: t0(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                                               x: t,
                                               y: e
                                           }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = t8(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: r,
                        dragTransition: n,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(t4(o => {
                        if (!ep(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return P(this.visualElement, t), i.start(tb(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    t4(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    t4(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    t4(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!ep(e, i, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (r && r.layout) {
                            let {
                                min: i,
                                max: s
                            } = r.layout.layoutBox[e];
                            n.set(t[e] - (0, tX.t)(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!tU(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    t4(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            r[t] = function(t, e) {
                                let i = .5,
                                    r = tG(t),
                                    n = tG(e);
                                return n > r ? i = (0, tN.Y)(e.min, e.max - r, t.min) : r > n && (i = (0, tN.Y)(t.min, t.max - n, e.min)), (0, tJ.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), t4(e => {
                        if (!ep(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: s
                            } = this.constraints[e];
                        i.set((0, tX.t)(n, s, r[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    ed.set(this.visualElement, this);
                    let t = tF(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            tU(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        r = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), C.Wi.read(e);
                    let n = tj(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                                                                 delta: t,
                                                                 hasLayoutChanged: e
                                                             }) => {
                            this.isDragging && e && (t4(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        n(), t(), r(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: r = !1,
                            dragConstraints: n = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: r,
                        dragConstraints: n,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function ep(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class ef extends tE {
                constructor(t) {
                    super(t), this.removeGroupControls = M.Z, this.removeListeners = M.Z, this.controls = new ec(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || M.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let em = t => (e, i) => {
                t && C.Wi.postRender(() => t(e, i))
            };
            class eg extends tE {
                constructor() {
                    super(...arguments), this.removePointerDownListener = M.Z
                }
                onPointerDown(t) {
                    this.session = new tI(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: eh(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: r
                    } = this.node.getProps();
                    return {
                        onSessionStart: em(t),
                        onStart: em(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, r && C.Wi.postRender(() => r(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = tF(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var ev = i(9368),
                ey = i(6041);
            let eb = (0, ey.createContext)(null),
                ex = (0, ey.createContext)({}),
                ew = (0, ey.createContext)({}),
                eP = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function eS(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let eT = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!W.px.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let i = eS(t, e.target.x),
                            r = eS(t, e.target.y);
                        return `${i}% ${r}%`
                    }
                },
                eA = {},
                {
                    schedule: eC,
                    cancel: ek
                } = (0, i(6170).Z)(queueMicrotask, !1);
            class eE extends ey.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: r
                    } = this.props, {
                        projection: n
                    } = t;
                    Object.assign(eA, eD), n && (e.group && e.group.add(n), i && i.register && r && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({
                        ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), eP.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: r,
                        isPresent: n
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = n, r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === n || (n ? s.promote() : s.relegate() || C.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), eC.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: r
                    } = t;
                    r && (r.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(r), i && i.deregister && i.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function eM(t) {
                let [e, i] = function(t = !0) {
                    let e = (0, ey.useContext)(eb);
                    if (null === e) return [!0, null];
                    let {
                        isPresent: i,
                        onExitComplete: r,
                        register: n
                    } = e, s = (0, ey.useId)();
                    (0, ey.useEffect)(() => {
                        t && n(s)
                    }, [t]);
                    let o = (0, ey.useCallback)(() => t && r && r(s), [s, r, t]);
                    return !i && r ? [!1, o] : [!0]
                }(), r = (0, ey.useContext)(ex);
                return (0, ev.jsx)(eE, {
                    ...t,
                    layoutGroup: r,
                    switchLayoutGroup: (0, ey.useContext)(ew),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let eD = {
                borderRadius: {
                    ...eT,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: eT,
                borderTopRightRadius: eT,
                borderBottomLeftRadius: eT,
                borderBottomRightRadius: eT,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let r = L.P.parse(t);
                        if (r.length > 5) return t;
                        let n = L.P.createTransformer(t),
                            s = "number" != typeof r[0] ? 1 : 0,
                            o = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        r[0 + s] /= o, r[1 + s] /= a;
                        let l = (0, tX.t)(o, a, .5);
                        return "number" == typeof r[2 + s] && (r[2 + s] /= l), "number" == typeof r[3 + s] && (r[3 + s] /= l), n(r)
                    }
                }
            };
            var eV = i(6382),
                ej = i(6273);
            let eR = (t, e) => t.depth - e.depth;
            class eL {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, ej.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, ej.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(eR), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var eF = i(2467);

            function eO(t) {
                let e = (0, w.i)(t) ? t.get() : t;
                return y(e) ? e.toValue() : e
            }
            let eB = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                eI = eB.length,
                ez = t => "string" == typeof t ? parseFloat(t) : t,
                e_ = t => "number" == typeof t || W.px.test(t);

            function e$(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let eW = eN(0, .5, j.Bn),
                eU = eN(.5, .95, M.Z);

            function eN(t, e, i) {
                return r => r < t ? 0 : r > e ? 1 : i((0, tN.Y)(t, e, r))
            }

            function eX(t, e) {
                t.min = e.min, t.max = e.max
            }

            function eG(t, e) {
                eX(t.x, e.x), eX(t.y, e.y)
            }

            function eY(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function eK(t, e, i, r, n) {
                return t -= e, t = r + 1 / i * (t - r), void 0 !== n && (t = r + 1 / n * (t - r)), t
            }

            function eq(t, e, [i, r, n], s, o) {
                ! function(t, e = 0, i = 1, r = .5, n, s = t, o = t) {
                    if (W.aQ.test(e) && (e = parseFloat(e), e = (0, tX.t)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = (0, tX.t)(s.min, s.max, r);
                    t === s && (a -= e), t.min = eK(t.min, e, i, a, n), t.max = eK(t.max, e, i, a, n)
                }(t, e[i], e[r], e[n], e.scale, s, o)
            }
            let eH = ["x", "scaleX", "originX"],
                eZ = ["y", "scaleY", "originY"];

            function eJ(t, e, i, r) {
                eq(t.x, e, eH, i ? i.x : void 0, r ? r.x : void 0), eq(t.y, e, eZ, i ? i.y : void 0, r ? r.y : void 0)
            }

            function eQ(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function e0(t) {
                return eQ(t.x) && eQ(t.y)
            }

            function e1(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function e2(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function e3(t, e) {
                return e2(t.x, e.x) && e2(t.y, e.y)
            }

            function e5(t) {
                return tG(t.x) / tG(t.y)
            }

            function e9(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class e6 {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, ej.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, ej.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = t.options;
                        !1 === r && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let e4 = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                e8 = "undefined" != typeof window && void 0 !== window.MotionDebug,
                e7 = ["", "X", "Y", "Z"],
                it = {
                    visibility: "hidden"
                },
                ie = 0;

            function ii(t, e, i, r) {
                let {
                    latestValues: n
                } = e;
                n[t] && (i[t] = n[t], e.setStaticValue(t, 0), r && (r[t] = 0))
            }

            function ir({
                            attachResizeListener: t,
                            defaultParent: e,
                            measureScroll: i,
                            checkIsScrollRoot: r,
                            resetTransform: n
                        }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = ie++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, e8 && (e4.totalNodes = e4.resolvedTargetDeltas = e4.recalculatedProjection = 0), this.nodes.forEach(ia), this.nodes.forEach(im), this.nodes.forEach(ig), this.nodes.forEach(il), e8 && window.MotionDebug.record(e4)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new eL)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new eF.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: r,
                            layout: n,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (n || r) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let r = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = eV.X.now(),
                                        r = ({
                                                 timestamp: e
                                             }) => {
                                            let n = e - i;
                                            n >= 250 && ((0, C.Pn)(r), t(n - 250))
                                        };
                                    return C.Wi.read(r, !0), () => (0, C.Pn)(r)
                                }(r, 0), eP.hasAnimatedSinceResize && (eP.hasAnimatedSinceResize = !1, this.nodes.forEach(ip))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && s && (r || n) && this.addEventListener("didUpdate", ({
                                                                                                                                                            delta: t,
                                                                                                                                                            hasLayoutChanged: e,
                                                                                                                                                            hasRelativeTargetChanged: i,
                                                                                                                                                            layout: r
                                                                                                                                                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let n = this.options.transition || s.getDefaultTransition() || iP,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !e3(this.targetLayout, r) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = {
                                    ...(0, m.ev)(n, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ip(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, C.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(iv), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                            if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                            let {
                                visualElement: i
                            } = e.options;
                            if (!i) return;
                            let r = i.props[T];
                            if (window.MotionHasOptimisedAnimation(r, "transform")) {
                                let {
                                    layout: t,
                                    layoutId: i
                                } = e.options;
                                window.MotionCancelOptimisedAnimation(r, "transform", C.Wi, !(t || i))
                            }
                            let {
                                parent: n
                            } = e;
                            n && !n.hasCheckedOptimisedAppear && t(n)
                        }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let r = this.getTransformTemplate();
                        this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ih);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(id), this.isUpdating = !1, this.nodes.forEach(ic), this.nodes.forEach(is), this.nodes.forEach(io), this.clearAllSnapshots();
                        let t = eV.X.now();
                        C.frameData.delta = (0, tJ.u)(0, 1e3 / 60, t - C.frameData.timestamp), C.frameData.timestamp = t, C.frameData.isProcessing = !0, C.yL.update.process(C.frameData), C.yL.preRender.process(C.frameData), C.yL.render.process(C.frameData), C.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, eC.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(iu), this.sharedNodes.forEach(iy)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, C.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        C.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = t6(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = r(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !e0(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            r = i ? i(this.latestValues, "") : void 0,
                            s = r !== this.prevTransformTemplateValue;
                        t && (e || ee(this.latestValues) || s) && (n(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            r = this.removeElementScroll(i);
                        return t && (r = this.removeTransform(r)), iA((e = r).x), iA(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return t6();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(ik))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (eo(i.x, t.offset.x), eo(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = t6();
                        if (eG(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e],
                                {
                                    scroll: n,
                                    options: s
                                } = r;
                            r !== this.root && n && s.layoutScroll && (n.wasRoot && eG(i, t), eo(i.x, n.offset.x), eo(i.y, n.offset.y))
                        }
                        return i
                    }
                    applyTransform(t, e = !1) {
                        let i = t6();
                        eG(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            !e && r.options.layoutScroll && r.scroll && r !== r.root && el(i, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }), ee(r.latestValues) && el(i, r.latestValues)
                        }
                        return ee(this.latestValues) && el(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = t6();
                        eG(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !ee(i.latestValues)) continue;
                            et(i.latestValues) && i.updateSnapshot();
                            let r = t6();
                            eG(r, i.measurePageBox()), eJ(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, r)
                        }
                        return ee(this.latestValues) && eJ(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== C.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, r, n;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = C.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = t6(), this.relativeTargetOrigin = t6(), tZ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), eG(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = t6(), this.targetWithTransforms = t6()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, r = this.relativeTarget, n = this.relativeParent.target, tq(i.x, r.x, n.x), tq(i.y, r.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eG(this.target, this.layout.layoutBox), es(this.target, this.targetDelta)) : eG(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = t6(), this.relativeTargetOrigin = t6(), tZ(this.relativeTargetOrigin, this.target, t.target), eG(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                e8 && e4.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || et(this.parent.latestValues) || ei(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            r = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === C.frameData.timestamp && (r = !1), r) return;
                        let {
                            layout: n,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || s)) return;
                        eG(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, r = !1) {
                            let n, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (n = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = n.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && el(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, es(t, s)), r && ee(n.latestValues) && el(t, n.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = t6());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (eY(this.prevProjectionDelta.x, this.projectionDelta.x), eY(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), tK(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && e9(this.projectionDelta.x, this.prevProjectionDelta.x) && e9(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), e8 && e4.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = t5(), this.projectionDelta = t5(), this.projectionDeltaWithTransform = t5()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let r = this.snapshot,
                            n = r ? r.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            o = t5();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = t6(),
                            l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(iw));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let r = e / 1e3;
                            if (ib(o.x, t.x, r), ib(o.y, t.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, c, p, f;
                                tZ(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, ix(p.x, f.x, a.x, r), ix(p.y, f.y, a.y, r), i && (u = this.relativeTarget, c = i, e1(u.x, c.x) && e1(u.y, c.y)) && (this.isProjectionDirty = !1), i || (i = t6()), eG(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, r, n, s) {
                                n ? (t.opacity = (0, tX.t)(0, void 0 !== i.opacity ? i.opacity : 1, eW(r)), t.opacityExit = (0, tX.t)(void 0 !== e.opacity ? e.opacity : 1, 0, eU(r))) : s && (t.opacity = (0, tX.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                                for (let n = 0; n < eI; n++) {
                                    let s = `border${eB[n]}Radius`,
                                        o = e$(e, s),
                                        a = e$(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || e_(o) === e_(a) ? (t[s] = Math.max((0, tX.t)(ez(o), ez(a), r), 0), (W.aQ.test(a) || W.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, tX.t)(e.rotate || 0, i.rotate || 0, r))
                            }(s, n, this.latestValues, r, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, C.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = C.Wi.update(() => {
                            eP.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let r = (0, w.i)(0) ? 0 : (0, x.BX)(0);
                                return r.start(tb("", r, 1e3, i)), r.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: r,
                                latestValues: n
                            } = t;
                        if (e && i && r) {
                            if (this !== t && this.layout && r && iC(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                i = this.target || t6();
                                let e = tG(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let r = tG(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + r
                            }
                            eG(e, i), el(e, n), tK(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new e6), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                                needsReset: t,
                                transition: e,
                                preserveFollowOpacity: i
                            } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let r = {};
                        i.z && ii("z", t, r, this.animationValues);
                        for (let e = 0; e < e7.length; e++) ii(`rotate${e7[e]}`, t, r, this.animationValues), ii(`skew${e7[e]}`, t, r, this.animationValues);
                        for (let e in t.render(), r) t.setStaticValue(e, r[e]), this.animationValues && (this.animationValues[e] = r[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return it;
                        let r = {
                                visibility: ""
                            },
                            n = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = eO(null == t ? void 0 : t.pointerEvents) || "", r.transform = n ? n(this.latestValues, "") : "none", r;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = eO(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !ee(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), r.transform = function(t, e, i) {
                            let r = "",
                                n = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = (null == i ? void 0 : i.z) || 0;
                            if ((n || s || o) && (r = `translate3d(${n}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (r += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: n,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (r = `perspective(${t}px) ${r}`), e && (r += `rotate(${e}deg) `), n && (r += `rotateX(${n}deg) `), s && (r += `rotateY(${s}deg) `), o && (r += `skewX(${o}deg) `), a && (r += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), n && (r.transform = n(o, r.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in r.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, eA) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = eA[t], n = "none" === r.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) r[i[e]] = n
                            } else r[t] = n
                        }
                        return this.options.layoutId && (r.pointerEvents = s === this ? eO(null == t ? void 0 : t.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ih), this.root.sharedNodes.clear()
                    }
                }
            }

            function is(t) {
                t.updateLayout()
            }

            function io(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: r
                    } = t.layout, {
                        animationType: n
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === n ? t4(t => {
                        let r = s ? i.measuredBox[t] : i.layoutBox[t],
                            n = tG(r);
                        r.min = e[t].min, r.max = r.min + n
                    }) : iC(n, i.layoutBox, e) && t4(r => {
                        let n = s ? i.measuredBox[r] : i.layoutBox[r],
                            o = tG(e[r]);
                        n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[r].max = t.relativeTarget[r].min + o)
                    });
                    let o = t5();
                    tK(o, e, i.layoutBox);
                    let a = t5();
                    s ? tK(a, t.applyTransform(r, !0), i.measuredBox) : tK(a, e, i.layoutBox);
                    let l = !e0(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let r = t.getClosestProjectingParent();
                        if (r && !r.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: s
                            } = r;
                            if (n && s) {
                                let o = t6();
                                tZ(o, i.layoutBox, n.layoutBox);
                                let a = t6();
                                tZ(a, e, s.layoutBox), e3(o, a) || (u = !0), r.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = r)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function ia(t) {
                e8 && e4.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function il(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function iu(t) {
                t.clearSnapshot()
            }

            function ih(t) {
                t.clearMeasurements()
            }

            function id(t) {
                t.isLayoutDirty = !1
            }

            function ic(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ip(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function im(t) {
                t.resolveTargetDelta()
            }

            function ig(t) {
                t.calcProjection()
            }

            function iv(t) {
                t.resetSkewAndRotation()
            }

            function iy(t) {
                t.removeLeadSnapshot()
            }

            function ib(t, e, i) {
                t.translate = (0, tX.t)(e.translate, 0, i), t.scale = (0, tX.t)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function ix(t, e, i, r) {
                t.min = (0, tX.t)(e.min, i.min, r), t.max = (0, tX.t)(e.max, i.max, r)
            }

            function iw(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let iP = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                iS = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                iT = iS("applewebkit/") && !iS("chrome/") ? Math.round : M.Z;

            function iA(t) {
                t.min = iT(t.min), t.max = iT(t.max)
            }

            function iC(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(e5(e) - e5(i)))
            }

            function ik(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let iE = ir({
                    attachResizeListener: (t, e) => tj(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                iM = {
                    current: void 0
                },
                iD = ir({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!iM.current) {
                            let t = new iE({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), iM.current = t
                        }
                        return iM.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function iV(t, e, i) {
                let {
                    props: r
                } = t;
                t.animationState && r.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let n = r["onHover" + i];
                n && C.Wi.postRender(() => n(e, tR(e)))
            }
            class ij extends tE {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = (0, m.Mr)(t, t => (iV(this.node, t, "Start"), t => iV(this.node, t, "End"))))
                }
                unmount() {}
            }
            class iR extends tE {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, tB.z)(tj(this.node.current, "focus", () => this.onFocus()), tj(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function iL(t, e, i) {
                let {
                    props: r
                } = t;
                t.animationState && r.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let n = r["onTap" + ("End" === i ? "" : i)];
                n && C.Wi.postRender(() => n(e, tR(e)))
            }
            class iF extends tE {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = (0, m.OD)(t, t => (iL(this.node, t, "Start"), (t, {
                        success: e
                    }) => iL(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let iO = new WeakMap,
                iB = new WeakMap,
                iI = t => {
                    let e = iO.get(t.target);
                    e && e(t)
                },
                iz = t => {
                    t.forEach(iI)
                },
                i_ = {
                    some: 0,
                    all: 1
                };
            class i$ extends tE {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: r = "some",
                        once: n
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof r ? r : i_[r]
                    };
                    return function(t, e, i) {
                        let r = function({
                                             root: t,
                                             ...e
                                         }) {
                            let i = t || document;
                            iB.has(i) || iB.set(i, {});
                            let r = iB.get(i),
                                n = JSON.stringify(e);
                            return r[n] || (r[n] = new IntersectionObserver(iz, {
                                root: t,
                                ...e
                            })), r[n]
                        }(e);
                        return iO.set(t, i), r.observe(t), () => {
                            iO.delete(t), r.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: r
                        } = this.node.getProps(), s = e ? i : r;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                                                                   viewport: t = {}
                                                               }, {
                                                                   viewport: e = {}
                                                               } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let iW = (0, ey.createContext)({
                strict: !1
            });
            var iU = i(4658);
            let iN = (0, ey.createContext)({});

            function iX(t) {
                return r(t.animate) || d.some(e => o(t[e]))
            }

            function iG(t) {
                return !!(iX(t) || t.variants)
            }

            function iY(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var iK = i(5972);
            let iq = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                iH = {};
            for (let t in iq) iH[t] = {
                isEnabled: e => iq[t].some(t => !!e[t])
            };
            let iZ = Symbol.for("motionComponentSymbol");
            var iJ = i(8590);
            let iQ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function i0(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (iQ.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            var i1 = i(3604);
            let i2 = t => (e, i) => {
                    let n = (0, ey.useContext)(iN),
                        s = (0, ey.useContext)(eb),
                        o = () => (function({
                                                scrapeMotionValuesFromProps: t,
                                                createRenderState: e,
                                                onUpdate: i
                                            }, n, s, o) {
                            let a = {
                                latestValues: function(t, e, i, n) {
                                    let s = {},
                                        o = n(t, {});
                                    for (let t in o) s[t] = eO(o[t]);
                                    let {
                                        initial: a,
                                        animate: u
                                    } = t, h = iX(t), d = iG(t);
                                    e && d && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === u && (u = e.animate));
                                    let c = !!i && !1 === i.initial,
                                        p = (c = c || !1 === a) ? u : a;
                                    if (p && "boolean" != typeof p && !r(p)) {
                                        let e = Array.isArray(p) ? p : [p];
                                        for (let i = 0; i < e.length; i++) {
                                            let r = l(t, e[i]);
                                            if (r) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...i
                                                } = r;
                                                for (let t in i) {
                                                    let e = i[t];
                                                    if (Array.isArray(e)) {
                                                        let t = c ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (s[t] = e)
                                                }
                                                for (let e in t) s[e] = t[e]
                                            }
                                        }
                                    }
                                    return s
                                }(n, s, o, t),
                                renderState: e()
                            };
                            return i && (a.onMount = t => i({
                                props: n,
                                current: t,
                                ...a
                            }), a.onUpdate = t => i(t)), a
                        })(t, e, n, s);
                    return i ? o() : (0, i1.h)(o)
                },
                i3 = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                i5 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                i9 = g._.length;

            function i6(t, e, i) {
                let {
                    style: r,
                    vars: n,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (g.G.has(t)) {
                        o = !0;
                        continue
                    }
                    if ((0, tt.f)(t)) {
                        n[t] = i;
                        continue
                    } {
                        let e = i3(i, G[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : r[t] = e
                    }
                }
                if (!e.transform && (o || i ? r.transform = function(t, e, i) {
                    let r = "",
                        n = !0;
                    for (let s = 0; s < i9; s++) {
                        let o = g._[s],
                            a = t[o];
                        if (void 0 === a) continue;
                        let l = !0;
                        if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                            let t = i3(a, G[o]);
                            if (!l) {
                                n = !1;
                                let e = i5[o] || o;
                                r += `${e}(${t}) `
                            }
                            i && (e[o] = t)
                        }
                    }
                    return r = r.trim(), i ? r = i(e, n ? "" : r) : n && (r = "none"), r
                }(e, t.transform, i) : r.transform && (r.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = s;
                    r.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let i4 = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                i8 = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function i7(t, e, i) {
                return "string" == typeof t ? t : W.px.transform(e + i * t)
            }

            function rt(t, {
                attrX: e,
                attrY: i,
                attrScale: r,
                originX: n,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, d) {
                if (i6(t, u, d), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: c,
                    style: p,
                    dimensions: f
                } = t;
                c.transform && (f && (p.transform = c.transform), delete c.transform), f && (void 0 !== n || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                    let r = i7(e, t.x, t.width),
                        n = i7(i, t.y, t.height);
                    return `${r} ${n}`
                }(f, void 0 !== n ? n : .5, void 0 !== s ? s : .5)), void 0 !== e && (c.x = e), void 0 !== i && (c.y = i), void 0 !== r && (c.scale = r), void 0 !== o && function(t, e, i = 1, r = 0, n = !0) {
                    t.pathLength = 1;
                    let s = n ? i4 : i8;
                    t[s.offset] = W.px.transform(-r);
                    let o = W.px.transform(e),
                        a = W.px.transform(i);
                    t[s.array] = `${o} ${a}`
                }(c, o, a, l, !1)
            }
            let re = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                ri = () => ({
                    ...re(),
                    attrs: {}
                }),
                rr = t => "string" == typeof t && "svg" === t.toLowerCase();

            function rn(t, {
                style: e,
                vars: i
            }, r, n) {
                for (let s in Object.assign(t.style, e, n && n.getProjectionStyles(r)), i) t.style.setProperty(s, i[s])
            }
            let rs = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function ro(t, e, i, r) {
                for (let i in rn(t, e, void 0, r), e.attrs) t.setAttribute(rs.has(i) ? i : S(i), e.attrs[i])
            }

            function ra(t, {
                layout: e,
                layoutId: i
            }) {
                return g.G.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!eA[t] || "opacity" === t)
            }

            function rl(t, e, i) {
                var r;
                let {
                    style: n
                } = t, s = {};
                for (let o in n)((0, w.i)(n[o]) || e.style && (0, w.i)(e.style[o]) || ra(o, t) || (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r ? void 0 : r.liveStyle) !== void 0) && (s[o] = n[o]);
                return s
            }

            function ru(t, e, i) {
                let r = rl(t, e, i);
                for (let i in t)((0, w.i)(t[i]) || (0, w.i)(e[i])) && (r[-1 !== g._.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return r
            }
            let rh = ["x", "y", "width", "height", "cx", "cy", "r"],
                rd = {
                    useVisualState: i2({
                        scrapeMotionValuesFromProps: ru,
                        createRenderState: ri,
                        onUpdate: ({
                                       props: t,
                                       prevProps: e,
                                       current: i,
                                       renderState: r,
                                       latestValues: n
                                   }) => {
                            if (!i) return;
                            let s = !!t.drag;
                            if (!s) {
                                for (let t in n)
                                    if (g.G.has(t)) {
                                        s = !0;
                                        break
                                    }
                            }
                            if (!s) return;
                            let o = !e;
                            if (e)
                                for (let i = 0; i < rh.length; i++) {
                                    let r = rh[i];
                                    t[r] !== e[r] && (o = !0)
                                }
                            o && C.Wi.read(() => {
                                ! function(t, e) {
                                    try {
                                        e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                                    } catch (t) {
                                        e.dimensions = {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0
                                        }
                                    }
                                }(i, r), C.Wi.render(() => {
                                    rt(r, n, rr(i.tagName), t.transformTemplate), ro(i, r)
                                })
                            })
                        }
                    })
                },
                rc = {
                    useVisualState: i2({
                        scrapeMotionValuesFromProps: rl,
                        createRenderState: re
                    })
                };

            function rp(t, e, i) {
                for (let r in e)(0, w.i)(e[r]) || ra(r, i) || (t[r] = e[r])
            }
            let rf = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function rm(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rf.has(t)
            }
            let rg = t => !rm(t);
            try {
                (c = require("@emotion/is-prop-valid").default) && (rg = t => t.startsWith("on") ? !rm(t) : c(t))
            } catch (t) {}
            let rv = {
                    current: null
                },
                ry = {
                    current: !1
                },
                rb = [...tn, _.$, L.P],
                rx = t => rb.find(tr(t)),
                rw = new WeakMap,
                rP = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class rS {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                                parent: t,
                                props: e,
                                presenceContext: i,
                                reducedMotionConfig: r,
                                blockInitialAnimation: n,
                                visualState: s
                            }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Z.e, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = eV.X.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, C.Wi.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l,
                        onUpdate: u
                    } = s;
                    this.onUpdate = u, this.latestValues = a, this.baseTarget = {
                        ...a
                    }, this.initialValues = e.initial ? {
                        ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!n, this.isControllingVariants = iX(e), this.isVariantNode = iG(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: h,
                        ...d
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in d) {
                        let e = d[t];
                        void 0 !== a[t] && (0, w.i)(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, rw.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), ry.current || function() {
                        if (ry.current = !0, iK.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => rv.current = t.matches;
                                t.addListener(e), e()
                            } else rv.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rv.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in rw.delete(this.current), this.projection && this.projection.unmount(), (0, C.Pn)(this.notifyUpdate), (0, C.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let r = g.G.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && C.Wi.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        n(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in iH) {
                        let e = iH[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: r
                        } = e;
                        if (!this.features[t] && r && i(this.props) && (this.features[t] = new r(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : t6()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < rP.length; e++) {
                        let i = rP[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let r = t["on" + i];
                        r && (this.propEventSubscriptions[i] = this.on(i, r))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let r in e) {
                            let n = e[r],
                                s = i[r];
                            if ((0, w.i)(n)) t.addValue(r, n);
                            else if ((0, w.i)(s)) t.addValue(r, (0, x.BX)(n, {
                                owner: t
                            }));
                            else if (s !== n) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, (0, x.BX)(void 0 !== e ? e : n, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let r in i) void 0 === e[r] && t.removeValue(r);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, x.BX)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let r = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != r && ("string" == typeof r && (Q(r) || R(r)) ? r = parseFloat(r) : !rx(r) && L.P.test(e) && (r = q(t, e)), this.setBaseTarget(t, (0, w.i)(r) ? r.get() : r)), (0, w.i)(r) ? r.get() : r
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: r
                    } = this.props;
                    if ("string" == typeof r || "object" == typeof r) {
                        let n = l(this.props, r, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        n && (i = n[t])
                    }
                    if (r && void 0 !== i) return i;
                    let n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || (0, w.i)(n) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : n
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new eF.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class rT extends rS {
                constructor() {
                    super(...arguments), this.KeyframeResolver = to
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, w.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class rA extends rT {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = rn
                }
                readValueFromInstance(t, e) {
                    if (g.G.has(e)) {
                        let t = K(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            r = ((0, tt.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return eu(t, e)
                }
                build(t, e, i) {
                    i6(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rl(t, e, i)
                }
            }
            class rC extends rT {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = t6
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (g.G.has(e)) {
                        let t = K(e);
                        return t && t.default || 0
                    }
                    return e = rs.has(e) ? e : S(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return ru(t, e, i)
                }
                build(t, e, i) {
                    rt(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, r) {
                    ro(t, e, i, r)
                }
                mount(t) {
                    this.isSVGTag = rr(t.tagName), super.mount(t)
                }
            }
            let rk = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, r) => "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r))
                })
            }((p = {
                animation: {
                    Feature: tM
                },
                exit: {
                    Feature: tV
                },
                inView: {
                    Feature: i$
                },
                tap: {
                    Feature: iF
                },
                focus: {
                    Feature: iR
                },
                hover: {
                    Feature: ij
                },
                pan: {
                    Feature: eg
                },
                drag: {
                    Feature: ef,
                    ProjectionNode: iD,
                    MeasureLayout: eM
                },
                layout: {
                    ProjectionNode: iD,
                    MeasureLayout: eM
                }
            }, f = (t, e) => i0(t) ? new rC(e) : new rA(e, {
                allowProjection: t !== ey.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    var e, i;
                    let {
                        preloadedFeatures: r,
                        createVisualElement: n,
                        useRender: s,
                        useVisualState: a,
                        Component: l
                    } = t;

                    function u(t, e) {
                        var i;
                        let r;
                        let u = {
                                ...(0, ey.useContext)(iU._),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, ey.useContext)(ex).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: h
                            } = u,
                            d = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if (iX(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || o(e) ? e : void 0,
                                            animate: o(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, ey.useContext)(iN));
                                return (0, ey.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [iY(e), iY(i)])
                            }(t),
                            c = a(t, h);
                        if (!h && iK.j) {
                            (0, ey.useContext)(iW).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = iH;
                                if (!e && !i) return {};
                                let r = {
                                    ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? r.MeasureLayout : void 0,
                                    ProjectionNode: r.ProjectionNode
                                }
                            }(u);
                            r = t.MeasureLayout, d.visualElement = function(t, e, i, r, n) {
                                var s, o;
                                let {
                                    visualElement: a
                                } = (0, ey.useContext)(iN), l = (0, ey.useContext)(iW), u = (0, ey.useContext)(eb), h = (0, ey.useContext)(iU._).reducedMotion, d = (0, ey.useRef)(null);
                                r = r || l.renderer, !d.current && r && (d.current = r(t, {
                                    visualState: e,
                                    parent: a,
                                    props: i,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: h
                                }));
                                let c = d.current,
                                    p = (0, ey.useContext)(ew);
                                c && !c.projection && n && ("html" === c.type || "svg" === c.type) && function(t, e, i, r) {
                                    let {
                                        layoutId: n,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: n,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && tU(a),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: r,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(d.current, i, n, p);
                                let f = (0, ey.useRef)(!1);
                                (0, ey.useInsertionEffect)(() => {
                                    c && f.current && c.update(i, u)
                                });
                                let m = i[T],
                                    g = (0, ey.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                                return (0, iJ.L)(() => {
                                    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), eC.render(c.render), g.current && c.animationState && c.animationState.animateChanges())
                                }), (0, ey.useEffect)(() => {
                                    c && (!g.current && c.animationState && c.animationState.animateChanges(), g.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                    }), g.current = !1))
                                }), c
                            }(l, c, u, n, t.ProjectionNode)
                        }
                        return (0, ev.jsxs)(iN.Provider, {
                            value: d,
                            children: [r && d.visualElement ? (0, ev.jsx)(r, {
                                visualElement: d.visualElement,
                                ...u
                            }) : null, s(l, t, (i = d.visualElement, (0, ey.useCallback)(t => {
                                t && c.onMount && c.onMount(t), i && (t ? i.mount(t) : i.unmount()), e && ("function" == typeof e ? e(t) : tU(e) && (e.current = t))
                            }, [i])), c, h, d.visualElement)]
                        })
                    }
                    r && function(t) {
                        for (let e in t) iH[e] = {
                            ...iH[e],
                            ...t[e]
                        }
                    }(r), u.displayName = "motion.".concat("string" == typeof l ? l : "create(".concat(null !== (i = null !== (e = l.displayName) && void 0 !== e ? e : l.name) && void 0 !== i ? i : "", ")"));
                    let h = (0, ey.forwardRef)(u);
                    return h[iZ] = l, h
                }({
                    ...i0(t) ? rd : rc,
                    preloadedFeatures: p,
                    useRender: function(t = !1) {
                        return (e, i, r, {
                            latestValues: n
                        }, s) => {
                            let o = (i0(e) ? function(t, e, i, r) {
                                    let n = (0, ey.useMemo)(() => {
                                        let i = ri();
                                        return rt(i, e, rr(r), t.transformTemplate), {
                                            ...i.attrs,
                                            style: {
                                                ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        rp(e, t.style, t), n.style = {
                                            ...e,
                                            ...n.style
                                        }
                                    }
                                    return n
                                } : function(t, e) {
                                    let i = {},
                                        r = function(t, e) {
                                            let i = t.style || {},
                                                r = {};
                                            return rp(r, i, t), Object.assign(r, function({
                                                                                              transformTemplate: t
                                                                                          }, e) {
                                                return (0, ey.useMemo)(() => {
                                                    let i = re();
                                                    return i6(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), r
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = r, i
                                })(i, n, s, e),
                                a = function(t, e, i) {
                                    let r = {};
                                    for (let n in t)("values" !== n || "object" != typeof t.values) && (rg(n) || !0 === i && rm(n) || !e && !rm(n) || t.draggable && n.startsWith("onDrag")) && (r[n] = t[n]);
                                    return r
                                }(i, "string" == typeof e, t),
                                l = e !== ey.Fragment ? {
                                    ...a,
                                    ...o,
                                    ref: r
                                } : {},
                                {
                                    children: u
                                } = i,
                                h = (0, ey.useMemo)(() => (0, w.i)(u) ? u.get() : u, [u]);
                            return (0, ey.createElement)(e, {
                                ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: f,
                    Component: t
                })
            }))
        },
        6780: function(t, e, i) {
            i.d(e, {
                f: function() {
                    return n
                },
                t: function() {
                    return o
                }
            });
            let r = t => e => "string" == typeof e && e.startsWith(t),
                n = r("--"),
                s = r("var(--"),
                o = t => !!s(t) && a.test(t.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        5448: function(t, e, i) {
            i.d(e, {
                Ei: function() {
                    return d
                },
                lw: function() {
                    return c
                },
                mP: function() {
                    return o
                }
            });
            var r = i(4058),
                n = i(6654),
                s = i(4398);
            let o = t => t === r.Rx || t === n.px,
                a = (t, e) => parseFloat(t.split(", ")[e]),
                l = (t, e) => (i, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let n = r.match(/^matrix3d\((.+)\)$/u);
                    if (n) return a(n[1], e);
                    {
                        let e = r.match(/^matrix\((.+)\)$/u);
                        return e ? a(e[1], t) : 0
                    }
                },
                u = new Set(["x", "y", "z"]),
                h = s._.filter(t => !u.has(t));

            function d(t) {
                let e = [];
                return h.forEach(i => {
                    let r = t.getValue(i);
                    void 0 !== r && (e.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
                }), e
            }
            let c = {
                width: ({
                            x: t
                        }, {
                            paddingLeft: e = "0",
                            paddingRight: i = "0"
                        }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({
                             y: t
                         }, {
                             paddingTop: e = "0",
                             paddingBottom: i = "0"
                         }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                             y: t
                         }, {
                             top: e
                         }) => parseFloat(e) + (t.max - t.min),
                right: ({
                            x: t
                        }, {
                            left: e
                        }) => parseFloat(e) + (t.max - t.min),
                x: l(4, 13),
                y: l(5, 14)
            };
            c.translateX = c.x, c.translateY = c.y
        },
        4398: function(t, e, i) {
            i.d(e, {
                G: function() {
                    return n
                },
                _: function() {
                    return r
                }
            });
            let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                n = new Set(r)
        },
        6876: function(t, e, i) {
            i.d(e, {
                e: function() {
                    return d
                },
                m: function() {
                    return h
                }
            });
            var r = i(5448),
                n = i(6366);
            let s = new Set,
                o = !1,
                a = !1;

            function l() {
                if (a) {
                    let t = Array.from(s).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = (0, r.Ei)(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var r;
                            null === (r = t.getValue(e)) || void 0 === r || r.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                a = !1, o = !1, s.forEach(t => t.complete()), s.clear()
            }

            function u() {
                s.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (a = !0)
                })
            }

            function h() {
                u(), l()
            }
            class d {
                constructor(t, e, i, r, n, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = r, this.element = n, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (s.add(this), o || (o = !0, n.Wi.read(u), n.Wi.resolveKeyframes(l))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: r
                    } = this;
                    for (let n = 0; n < t.length; n++)
                        if (null === t[n]) {
                            if (0 === n) {
                                let n = null == r ? void 0 : r.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== n) t[0] = n;
                                else if (i && e) {
                                    let r = i.readValue(e, s);
                                    null != r && (t[0] = r)
                                }
                                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0])
                            } else t[n] = t[n - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), s.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, s.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
        },
        9209: function(t, e, i) {
            i.d(e, {
                c: function() {
                    return r
                }
            });
            let r = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        6273: function(t, e, i) {
            function r(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function n(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            i.d(e, {
                cl: function() {
                    return n
                },
                y4: function() {
                    return r
                }
            })
        },
        8993: function(t, e, i) {
            i.d(e, {
                u: function() {
                    return r
                }
            });
            let r = (t, e, i) => i > e ? e : i < t ? t : i
        },
        5523: function(t, e, i) {
            i.d(e, {
                s: function() {
                    return u
                }
            });
            var r = i(4102),
                n = i(2976),
                s = i(2474),
                o = i(8993),
                a = i(7342),
                l = i(9521);

            function u(t, e, {
                clamp: i = !0,
                ease: u,
                mixer: h
            } = {}) {
                let d = t.length;
                if ((0, n.k)(d === e.length, "Both input and output ranges must be the same length"), 1 === d) return () => e[0];
                if (2 === d && e[0] === e[1]) return () => e[1];
                let c = t[0] === t[1];
                t[0] > t[d - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let p = function(t, e, i) {
                        let n = [],
                            s = i || a.C,
                            o = t.length - 1;
                        for (let i = 0; i < o; i++) {
                            let o = s(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || r.Z : e;
                                o = (0, l.z)(t, o)
                            }
                            n.push(o)
                        }
                        return n
                    }(e, u, h),
                    f = p.length,
                    m = i => {
                        if (c && i < t[0]) return e[0];
                        let r = 0;
                        if (f > 1)
                            for (; r < t.length - 2 && !(i < t[r + 1]); r++);
                        let n = (0, s.Y)(t[r], t[r + 1], i);
                        return p[r](n)
                    };
                return i ? e => m((0, o.u)(t[0], t[d - 1], e)) : m
            }
        },
        5972: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return r
                }
            });
            let r = "undefined" != typeof window
        },
        7342: function(t, e, i) {
            i.d(e, {
                C: function() {
                    return A
                }
            });
            var r = i(6994),
                n = i(2976);

            function s(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var o = i(6988),
                a = i(9085),
                l = i(859);

            function u(t, e) {
                return i => i > 0 ? e : t
            }
            let h = (t, e, i) => {
                    let r = t * t,
                        n = i * (e * e - r) + r;
                    return n < 0 ? 0 : Math.sqrt(n)
                },
                d = [o.$, a.m, l.J],
                c = t => d.find(e => e.test(t));

            function p(t) {
                let e = c(t);
                if ((0, n.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === l.J && (i = function({
                                                      hue: t,
                                                      saturation: e,
                                                      lightness: i,
                                                      alpha: r
                                                  }) {
                    t /= 360, i /= 100;
                    let n = 0,
                        o = 0,
                        a = 0;
                    if (e /= 100) {
                        let r = i < .5 ? i * (1 + e) : i + e - i * e,
                            l = 2 * i - r;
                        n = s(l, r, t + 1 / 3), o = s(l, r, t), a = s(l, r, t - 1 / 3)
                    } else n = o = a = i;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * a),
                        alpha: r
                    }
                }(i)), i
            }
            let f = (t, e) => {
                let i = p(t),
                    n = p(e);
                if (!i || !n) return u(t, e);
                let s = {
                    ...i
                };
                return t => (s.red = h(i.red, n.red, t), s.green = h(i.green, n.green, t), s.blue = h(i.blue, n.blue, t), s.alpha = (0, r.t)(i.alpha, n.alpha, t), a.m.transform(s))
            };
            var m = i(9521),
                g = i(9295),
                v = i(1939),
                y = i(6780);
            let b = new Set(["none", "hidden"]);

            function x(t, e) {
                return i => (0, r.t)(t, e, i)
            }

            function w(t) {
                return "number" == typeof t ? x : "string" == typeof t ? (0, y.t)(t) ? u : g.$.test(t) ? f : T : Array.isArray(t) ? P : "object" == typeof t ? g.$.test(t) ? f : S : u
            }

            function P(t, e) {
                let i = [...t],
                    r = i.length,
                    n = t.map((t, i) => w(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < r; e++) i[e] = n[e](t);
                    return i
                }
            }

            function S(t, e) {
                let i = {
                        ...t,
                        ...e
                    },
                    r = {};
                for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (r[n] = w(t[n])(t[n], e[n]));
                return t => {
                    for (let e in r) i[e] = r[e](t);
                    return i
                }
            }
            let T = (t, e) => {
                let i = v.P.createTransformer(e),
                    r = (0, v.V)(t),
                    s = (0, v.V)(e);
                return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? b.has(t) && !s.values.length || b.has(e) && !r.values.length ? b.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : (0, m.z)(P(function(t, e) {
                    var i;
                    let r = [],
                        n = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][n[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        r[s] = l, n[o]++
                    }
                    return r
                }(r, s), s.values), i) : ((0, n.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), u(t, e))
            };

            function A(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, r.t)(t, e, i) : w(t)(t, e)
            }
        },
        6994: function(t, e, i) {
            i.d(e, {
                t: function() {
                    return r
                }
            });
            let r = (t, e, i) => t + (e - t) * i
        },
        9521: function(t, e, i) {
            i.d(e, {
                z: function() {
                    return n
                }
            });
            let r = (t, e) => i => e(t(i)),
                n = (...t) => t.reduce(r)
        },
        2467: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return n
                }
            });
            var r = i(6273);
            class n {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, r.y4)(this.subscriptions, t), () => (0, r.cl)(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](t, e, i);
                        else
                            for (let n = 0; n < r; n++) {
                                let r = this.subscriptions[n];
                                r && r(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        3604: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return n
                }
            });
            var r = i(6041);

            function n(t) {
                let e = (0, r.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        3518: function(t, e, i) {
            i.d(e, {
                c: function() {
                    return r
                }
            });
            let r = {
                current: !1
            }
        },
        8590: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return n
                }
            });
            var r = i(6041);
            let n = i(5972).j ? r.useLayoutEffect : r.useEffect
        },
        5286: function(t, e, i) {
            i.d(e, {
                R: function() {
                    return r
                }
            });

            function r(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        8157: function(t, e, i) {
            i.d(e, {
                BX: function() {
                    return h
                },
                S1: function() {
                    return l
                }
            });
            var r = i(6382),
                n = i(2467),
                s = i(5286),
                o = i(6366);
            let a = t => !isNaN(parseFloat(t)),
                l = {
                    current: void 0
                };
            class u {
                constructor(t, e = {}) {
                    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = r.X.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = r.X.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new n.L);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), o.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = r.X.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, s.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function h(t, e) {
                return new u(t, e)
            }
        },
        6988: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return n
                }
            });
            var r = i(9085);
            let n = {
                test: (0, i(5466).i)("#"),
                parse: function(t) {
                    let e = "",
                        i = "",
                        r = "",
                        n = "";
                    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), r = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), r = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, r += r, n += n), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(r, 16),
                        alpha: n ? parseInt(n, 16) / 255 : 1
                    }
                },
                transform: r.m.transform
            }
        },
        859: function(t, e, i) {
            i.d(e, {
                J: function() {
                    return a
                }
            });
            var r = i(4058),
                n = i(6654),
                s = i(7595),
                o = i(5466);
            let a = {
                test: (0, o.i)("hsl", "hue"),
                parse: (0, o.d)("hue", "saturation", "lightness"),
                transform: ({
                                hue: t,
                                saturation: e,
                                lightness: i,
                                alpha: o = 1
                            }) => "hsla(" + Math.round(t) + ", " + n.aQ.transform((0, s.N)(e)) + ", " + n.aQ.transform((0, s.N)(i)) + ", " + (0, s.N)(r.Fq.transform(o)) + ")"
            }
        },
        9295: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return o
                }
            });
            var r = i(6988),
                n = i(859),
                s = i(9085);
            let o = {
                test: t => s.m.test(t) || r.$.test(t) || n.J.test(t),
                parse: t => s.m.test(t) ? s.m.parse(t) : n.J.test(t) ? n.J.parse(t) : r.$.parse(t),
                transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.m.transform(t) : n.J.transform(t)
            }
        },
        9085: function(t, e, i) {
            i.d(e, {
                m: function() {
                    return u
                }
            });
            var r = i(8993),
                n = i(4058),
                s = i(7595),
                o = i(5466);
            let a = t => (0, r.u)(0, 255, t),
                l = {
                    ...n.Rx,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, o.i)("rgb", "red"),
                    parse: (0, o.d)("red", "green", "blue"),
                    transform: ({
                                    red: t,
                                    green: e,
                                    blue: i,
                                    alpha: r = 1
                                }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0, s.N)(n.Fq.transform(r)) + ")"
                }
        },
        5466: function(t, e, i) {
            i.d(e, {
                i: function() {
                    return s
                },
                d: function() {
                    return o
                }
            });
            var r = i(7313);
            let n = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                s = (t, e) => i => !!("string" == typeof i && n.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                o = (t, e, i) => n => {
                    if ("string" != typeof n) return n;
                    let [s, o, a, l] = n.match(r.K);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(o),
                        [i]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        1939: function(t, e, i) {
            i.d(e, {
                V: function() {
                    return h
                },
                P: function() {
                    return f
                }
            });
            var r = i(9295);
            let n = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var s = i(7313),
                o = i(7595);
            let a = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function h(t) {
                let e = t.toString(),
                    i = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [],
                    o = 0,
                    h = e.replace(u, t => (r.$.test(t) ? (n.color.push(o), s.push(l), i.push(r.$.parse(t))) : t.startsWith("var(") ? (n.var.push(o), s.push("var"), i.push(t)) : (n.number.push(o), s.push(a), i.push(parseFloat(t))), ++o, "${}")).split("${}");
                return {
                    values: i,
                    split: h,
                    indexes: n,
                    types: s
                }
            }

            function d(t) {
                return h(t).values
            }

            function c(t) {
                let {
                    split: e,
                    types: i
                } = h(t), n = e.length;
                return t => {
                    let s = "";
                    for (let u = 0; u < n; u++)
                        if (s += e[u], void 0 !== t[u]) {
                            let e = i[u];
                            e === a ? s += (0, o.N)(t[u]) : e === l ? s += r.$.transform(t[u]) : s += t[u]
                        } return s
                }
            }
            let p = t => "number" == typeof t ? 0 : t,
                f = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(s.K)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(n)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: d,
                    createTransformer: c,
                    getAnimatableNone: function(t) {
                        let e = d(t);
                        return c(t)(e.map(p))
                    }
                }
        },
        4058: function(t, e, i) {
            i.d(e, {
                Fq: function() {
                    return s
                },
                Rx: function() {
                    return n
                },
                bA: function() {
                    return o
                }
            });
            var r = i(8993);
            let n = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = {
                    ...n,
                    transform: t => (0, r.u)(0, 1, t)
                },
                o = {
                    ...n,
                    default: 1
                }
        },
        6654: function(t, e, i) {
            i.d(e, {
                $C: function() {
                    return u
                },
                RW: function() {
                    return n
                },
                aQ: function() {
                    return s
                },
                px: function() {
                    return o
                },
                vh: function() {
                    return a
                },
                vw: function() {
                    return l
                }
            });
            let r = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                n = r("deg"),
                s = r("%"),
                o = r("px"),
                a = r("vh"),
                l = r("vw"),
                u = {
                    ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        7313: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return r
                }
            });
            let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        7595: function(t, e, i) {
            i.d(e, {
                N: function() {
                    return r
                }
            });
            let r = t => Math.round(1e5 * t) / 1e5
        },
        1389: function(t, e, i) {
            i.d(e, {
                i: function() {
                    return r
                }
            });
            let r = t => !!(t && t.getVelocity)
        },
        7722: function(t, e, i) {
            i.d(e, {
                sP: function() {
                    return o
                },
                _F: function() {
                    return d
                },
                iI: function() {
                    return u
                },
                wk: function() {
                    return g
                },
                ev: function() {
                    return a
                },
                Mr: function() {
                    return S
                },
                qE: function() {
                    return c
                },
                xD: function() {
                    return h
                },
                DJ: function() {
                    return A
                },
                hR: function() {
                    return v
                },
                eB: function() {
                    return function t(e, i) {
                        if (e) return "function" == typeof e && f() ? g(e, i) : c(e) ? y(e) : Array.isArray(e) ? e.map(e => t(e, i) || b.easeOut) : b[e]
                    }
                },
                EO: function() {
                    return l
                },
                OD: function() {
                    return j
                },
                KV: function() {
                    return R
                },
                Vc: function() {
                    return f
                }
            });
            var r = i(227);
            let n = (0, r.X)(() => void 0 !== window.ScrollTimeline);
            class s {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                get finished() {
                    return Promise.all(this.animations.map(t => "finished" in t ? t.finished : t))
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t, e) {
                    let i = this.animations.map(i => n() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                    return () => {
                        i.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            class o extends s {
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
            }

            function a(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
            let l = 2e4;

            function u(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < l;) e += 50, i = t.next(e);
                return e >= l ? 1 / 0 : e
            }

            function h(t) {
                return "function" == typeof t
            }

            function d(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let c = t => Array.isArray(t) && "number" == typeof t[0],
                p = {
                    linearEasing: void 0
                },
                f = function(t, e) {
                    let i = (0, r.X)(t);
                    return () => {
                        var t;
                        return null !== (t = p[e]) && void 0 !== t ? t : i()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing");
            var m = i(2474);
            let g = (t, e, i = 10) => {
                let r = "",
                    n = Math.max(Math.round(e / i), 2);
                for (let e = 0; e < n; e++) r += t((0, m.Y)(0, n - 1, e)) + ", ";
                return `linear(${r.substring(0,r.length-2)})`
            };

            function v(t) {
                return !!("function" == typeof t && f() || !t || "string" == typeof t && (t in b || f()) || c(t) || Array.isArray(t) && t.every(v))
            }
            let y = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
                b = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: y([0, .65, .55, 1]),
                    circOut: y([.55, 0, 1, .45]),
                    backIn: y([.31, .01, .66, -.59]),
                    backOut: y([.33, 1.53, .69, .99])
                },
                x = {
                    x: !1,
                    y: !1
                };

            function w(t, e) {
                let i = function(t, e, i) {
                        if (t instanceof Element) return [t];
                        if ("string" == typeof t) {
                            let e = document.querySelectorAll(t);
                            return e ? Array.from(e) : []
                        }
                        return Array.from(t)
                    }(t),
                    r = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: r.signal
                }, () => r.abort()]
            }

            function P(t) {
                return e => {
                    "touch" === e.pointerType || x.x || x.y || t(e)
                }
            }

            function S(t, e, i = {}) {
                let [r, n, s] = w(t, i), o = P(t => {
                    let {
                        target: i
                    } = t, r = e(t);
                    if ("function" != typeof r || !i) return;
                    let s = P(t => {
                        r(t), i.removeEventListener("pointerleave", s)
                    });
                    i.addEventListener("pointerleave", s, n)
                });
                return r.forEach(t => {
                    t.addEventListener("pointerenter", o, n)
                }), s
            }
            let T = (t, e) => !!e && (t === e || T(t, e.parentElement)),
                A = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
                C = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                k = new WeakSet;

            function E(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function M(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let D = (t, e) => {
                let i = t.currentTarget;
                if (!i) return;
                let r = E(() => {
                    if (k.has(i)) return;
                    M(i, "down");
                    let t = E(() => {
                        M(i, "up")
                    });
                    i.addEventListener("keyup", t, e), i.addEventListener("blur", () => M(i, "cancel"), e)
                });
                i.addEventListener("keydown", r, e), i.addEventListener("blur", () => i.removeEventListener("keydown", r), e)
            };

            function V(t) {
                return A(t) && !(x.x || x.y)
            }

            function j(t, e, i = {}) {
                let [r, n, s] = w(t, i), o = t => {
                    let r = t.currentTarget;
                    if (!V(t) || k.has(r)) return;
                    k.add(r);
                    let s = e(t),
                        o = (t, e) => {
                            window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), V(t) && k.has(r) && (k.delete(r), "function" == typeof s && s(t, {
                                success: e
                            }))
                        },
                        a = t => {
                            o(t, i.useGlobalTarget || T(r, t.target))
                        },
                        l = t => {
                            o(t, !1)
                        };
                    window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", l, n)
                };
                return r.forEach(t => {
                    C.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0), (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n), t.addEventListener("focus", t => D(t, n), n)
                }), s
            }

            function R(t) {
                return "x" === t || "y" === t ? x[t] ? null : (x[t] = !0, () => {
                    x[t] = !1
                }) : x.x || x.y ? null : (x.x = x.y = !0, () => {
                    x.x = x.y = !1
                })
            }
            i(889), i(4102)
        },
        2976: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return n
                },
                k: function() {
                    return s
                }
            });
            var r = i(4102);
            let n = r.Z,
                s = r.Z
        },
        227: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return r
                }
            });

            function r(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
        },
        4102: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return r
                }
            });
            let r = t => t
        },
        2474: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return r
                }
            });
            let r = (t, e, i) => {
                let r = e - t;
                return 0 === r ? 1 : (i - t) / r
            }
        },
        889: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return n
                },
                w: function() {
                    return r
                }
            });
            let r = t => 1e3 * t,
                n = t => t / 1e3
        },
        9010: function(t, e, i) {
            i.d(e, {
                m6: function() {
                    return q
                }
            });
            let r = t => {
                    let e = a(t),
                        {
                            conflictingClassGroups: i,
                            conflictingClassGroupModifiers: r
                        } = t;
                    return {
                        getClassGroupId: t => {
                            let i = t.split("-");
                            return "" === i[0] && 1 !== i.length && i.shift(), n(i, e) || o(t)
                        },
                        getConflictingClassGroupIds: (t, e) => {
                            let n = i[t] || [];
                            return e && r[t] ? [...n, ...r[t]] : n
                        }
                    }
                },
                n = (t, e) => {
                    if (0 === t.length) return e.classGroupId;
                    let i = t[0],
                        r = e.nextPart.get(i),
                        s = r ? n(t.slice(1), r) : void 0;
                    if (s) return s;
                    if (0 === e.validators.length) return;
                    let o = t.join("-");
                    return e.validators.find(({
                                                  validator: t
                                              }) => t(o))?.classGroupId
                },
                s = /^\[(.+)\]$/,
                o = t => {
                    if (s.test(t)) {
                        let e = s.exec(t)[1],
                            i = e?.substring(0, e.indexOf(":"));
                        if (i) return "arbitrary.." + i
                    }
                },
                a = t => {
                    let {
                        theme: e,
                        prefix: i
                    } = t, r = {
                        nextPart: new Map,
                        validators: []
                    };
                    return d(Object.entries(t.classGroups), i).forEach(([t, i]) => {
                        l(i, r, t, e)
                    }), r
                },
                l = (t, e, i, r) => {
                    t.forEach(t => {
                        if ("string" == typeof t) {
                            ("" === t ? e : u(e, t)).classGroupId = i;
                            return
                        }
                        if ("function" == typeof t) {
                            if (h(t)) {
                                l(t(r), e, i, r);
                                return
                            }
                            e.validators.push({
                                validator: t,
                                classGroupId: i
                            });
                            return
                        }
                        Object.entries(t).forEach(([t, n]) => {
                            l(n, u(e, t), i, r)
                        })
                    })
                },
                u = (t, e) => {
                    let i = t;
                    return e.split("-").forEach(t => {
                        i.nextPart.has(t) || i.nextPart.set(t, {
                            nextPart: new Map,
                            validators: []
                        }), i = i.nextPart.get(t)
                    }), i
                },
                h = t => t.isThemeGetter,
                d = (t, e) => e ? t.map(([t, i]) => [t, i.map(t => "string" == typeof t ? e + t : "object" == typeof t ? Object.fromEntries(Object.entries(t).map(([t, i]) => [e + t, i])) : t)]) : t,
                c = t => {
                    if (t < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let e = 0,
                        i = new Map,
                        r = new Map,
                        n = (n, s) => {
                            i.set(n, s), ++e > t && (e = 0, r = i, i = new Map)
                        };
                    return {
                        get(t) {
                            let e = i.get(t);
                            return void 0 !== e ? e : void 0 !== (e = r.get(t)) ? (n(t, e), e) : void 0
                        },
                        set(t, e) {
                            i.has(t) ? i.set(t, e) : n(t, e)
                        }
                    }
                },
                p = t => {
                    let {
                        separator: e,
                        experimentalParseClassName: i
                    } = t, r = 1 === e.length, n = e[0], s = e.length, o = t => {
                        let i;
                        let o = [],
                            a = 0,
                            l = 0;
                        for (let u = 0; u < t.length; u++) {
                            let h = t[u];
                            if (0 === a) {
                                if (h === n && (r || t.slice(u, u + s) === e)) {
                                    o.push(t.slice(l, u)), l = u + s;
                                    continue
                                }
                                if ("/" === h) {
                                    i = u;
                                    continue
                                }
                            }
                            "[" === h ? a++ : "]" === h && a--
                        }
                        let u = 0 === o.length ? t : t.substring(l),
                            h = u.startsWith("!"),
                            d = h ? u.substring(1) : u;
                        return {
                            modifiers: o,
                            hasImportantModifier: h,
                            baseClassName: d,
                            maybePostfixModifierPosition: i && i > l ? i - l : void 0
                        }
                    };
                    return i ? t => i({
                        className: t,
                        parseClassName: o
                    }) : o
                },
                f = t => {
                    if (t.length <= 1) return t;
                    let e = [],
                        i = [];
                    return t.forEach(t => {
                        "[" === t[0] ? (e.push(...i.sort(), t), i = []) : i.push(t)
                    }), e.push(...i.sort()), e
                },
                m = t => ({
                    cache: c(t.cacheSize),
                    parseClassName: p(t),
                    ...r(t)
                }),
                g = /\s+/,
                v = (t, e) => {
                    let {
                        parseClassName: i,
                        getClassGroupId: r,
                        getConflictingClassGroupIds: n
                    } = e, s = [], o = t.trim().split(g), a = "";
                    for (let t = o.length - 1; t >= 0; t -= 1) {
                        let e = o[t],
                            {
                                modifiers: l,
                                hasImportantModifier: u,
                                baseClassName: h,
                                maybePostfixModifierPosition: d
                            } = i(e),
                            c = !!d,
                            p = r(c ? h.substring(0, d) : h);
                        if (!p) {
                            if (!c || !(p = r(h))) {
                                a = e + (a.length > 0 ? " " + a : a);
                                continue
                            }
                            c = !1
                        }
                        let m = f(l).join(":"),
                            g = u ? m + "!" : m,
                            v = g + p;
                        if (s.includes(v)) continue;
                        s.push(v);
                        let y = n(p, c);
                        for (let t = 0; t < y.length; ++t) {
                            let e = y[t];
                            s.push(g + e)
                        }
                        a = e + (a.length > 0 ? " " + a : a)
                    }
                    return a
                };

            function y() {
                let t, e, i = 0,
                    r = "";
                for (; i < arguments.length;)(t = arguments[i++]) && (e = b(t)) && (r && (r += " "), r += e);
                return r
            }
            let b = t => {
                    let e;
                    if ("string" == typeof t) return t;
                    let i = "";
                    for (let r = 0; r < t.length; r++) t[r] && (e = b(t[r])) && (i && (i += " "), i += e);
                    return i
                },
                x = t => {
                    let e = e => e[t] || [];
                    return e.isThemeGetter = !0, e
                },
                w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                P = /^\d+\/\d+$/,
                S = new Set(["px", "full", "screen"]),
                T = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                E = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                M = t => V(t) || S.has(t) || P.test(t),
                D = t => N(t, "length", X),
                V = t => !!t && !Number.isNaN(Number(t)),
                j = t => N(t, "number", V),
                R = t => !!t && Number.isInteger(Number(t)),
                L = t => t.endsWith("%") && V(t.slice(0, -1)),
                F = t => w.test(t),
                O = t => T.test(t),
                B = new Set(["length", "size", "percentage"]),
                I = t => N(t, B, G),
                z = t => N(t, "position", G),
                _ = new Set(["image", "url"]),
                $ = t => N(t, _, K),
                W = t => N(t, "", Y),
                U = () => !0,
                N = (t, e, i) => {
                    let r = w.exec(t);
                    return !!r && (r[1] ? "string" == typeof e ? r[1] === e : e.has(r[1]) : i(r[2]))
                },
                X = t => A.test(t) && !C.test(t),
                G = () => !1,
                Y = t => k.test(t),
                K = t => E.test(t),
                q = function(t, ...e) {
                    let i, r, n;
                    let s = function(a) {
                        return r = (i = m(e.reduce((t, e) => e(t), t()))).cache.get, n = i.cache.set, s = o, o(a)
                    };

                    function o(t) {
                        let e = r(t);
                        if (e) return e;
                        let s = v(t, i);
                        return n(t, s), s
                    }
                    return function() {
                        return s(y.apply(null, arguments))
                    }
                }(() => {
                    let t = x("colors"),
                        e = x("spacing"),
                        i = x("blur"),
                        r = x("brightness"),
                        n = x("borderColor"),
                        s = x("borderRadius"),
                        o = x("borderSpacing"),
                        a = x("borderWidth"),
                        l = x("contrast"),
                        u = x("grayscale"),
                        h = x("hueRotate"),
                        d = x("invert"),
                        c = x("gap"),
                        p = x("gradientColorStops"),
                        f = x("gradientColorStopPositions"),
                        m = x("inset"),
                        g = x("margin"),
                        v = x("opacity"),
                        y = x("padding"),
                        b = x("saturate"),
                        w = x("scale"),
                        P = x("sepia"),
                        S = x("skew"),
                        T = x("space"),
                        A = x("translate"),
                        C = () => ["auto", "contain", "none"],
                        k = () => ["auto", "hidden", "clip", "visible", "scroll"],
                        E = () => ["auto", F, e],
                        B = () => [F, e],
                        _ = () => ["", M, D],
                        N = () => ["auto", V, F],
                        X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                        G = () => ["solid", "dashed", "dotted", "double", "none"],
                        Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                        K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                        q = () => ["", "0", F],
                        H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                        Z = () => [V, F];
                    return {
                        cacheSize: 500,
                        separator: ":",
                        theme: {
                            colors: [U],
                            spacing: [M, D],
                            blur: ["none", "", O, F],
                            brightness: Z(),
                            borderColor: [t],
                            borderRadius: ["none", "", "full", O, F],
                            borderSpacing: B(),
                            borderWidth: _(),
                            contrast: Z(),
                            grayscale: q(),
                            hueRotate: Z(),
                            invert: q(),
                            gap: B(),
                            gradientColorStops: [t],
                            gradientColorStopPositions: [L, D],
                            inset: E(),
                            margin: E(),
                            opacity: Z(),
                            padding: B(),
                            saturate: Z(),
                            scale: Z(),
                            sepia: q(),
                            skew: Z(),
                            space: B(),
                            translate: B()
                        },
                        classGroups: {
                            aspect: [{
                                aspect: ["auto", "square", "video", F]
                            }],
                            container: ["container"],
                            columns: [{
                                columns: [O]
                            }],
                            "break-after": [{
                                "break-after": H()
                            }],
                            "break-before": [{
                                "break-before": H()
                            }],
                            "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }],
                            "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }],
                            box: [{
                                box: ["border", "content"]
                            }],
                            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                            float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }],
                            clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }],
                            isolation: ["isolate", "isolation-auto"],
                            "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }],
                            "object-position": [{
                                object: [...X(), F]
                            }],
                            overflow: [{
                                overflow: k()
                            }],
                            "overflow-x": [{
                                "overflow-x": k()
                            }],
                            "overflow-y": [{
                                "overflow-y": k()
                            }],
                            overscroll: [{
                                overscroll: C()
                            }],
                            "overscroll-x": [{
                                "overscroll-x": C()
                            }],
                            "overscroll-y": [{
                                "overscroll-y": C()
                            }],
                            position: ["static", "fixed", "absolute", "relative", "sticky"],
                            inset: [{
                                inset: [m]
                            }],
                            "inset-x": [{
                                "inset-x": [m]
                            }],
                            "inset-y": [{
                                "inset-y": [m]
                            }],
                            start: [{
                                start: [m]
                            }],
                            end: [{
                                end: [m]
                            }],
                            top: [{
                                top: [m]
                            }],
                            right: [{
                                right: [m]
                            }],
                            bottom: [{
                                bottom: [m]
                            }],
                            left: [{
                                left: [m]
                            }],
                            visibility: ["visible", "invisible", "collapse"],
                            z: [{
                                z: ["auto", R, F]
                            }],
                            basis: [{
                                basis: E()
                            }],
                            "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }],
                            "flex-wrap": [{
                                flex: ["wrap", "wrap-reverse", "nowrap"]
                            }],
                            flex: [{
                                flex: ["1", "auto", "initial", "none", F]
                            }],
                            grow: [{
                                grow: q()
                            }],
                            shrink: [{
                                shrink: q()
                            }],
                            order: [{
                                order: ["first", "last", "none", R, F]
                            }],
                            "grid-cols": [{
                                "grid-cols": [U]
                            }],
                            "col-start-end": [{
                                col: ["auto", {
                                    span: ["full", R, F]
                                }, F]
                            }],
                            "col-start": [{
                                "col-start": N()
                            }],
                            "col-end": [{
                                "col-end": N()
                            }],
                            "grid-rows": [{
                                "grid-rows": [U]
                            }],
                            "row-start-end": [{
                                row: ["auto", {
                                    span: [R, F]
                                }, F]
                            }],
                            "row-start": [{
                                "row-start": N()
                            }],
                            "row-end": [{
                                "row-end": N()
                            }],
                            "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }],
                            "auto-cols": [{
                                "auto-cols": ["auto", "min", "max", "fr", F]
                            }],
                            "auto-rows": [{
                                "auto-rows": ["auto", "min", "max", "fr", F]
                            }],
                            gap: [{
                                gap: [c]
                            }],
                            "gap-x": [{
                                "gap-x": [c]
                            }],
                            "gap-y": [{
                                "gap-y": [c]
                            }],
                            "justify-content": [{
                                justify: ["normal", ...K()]
                            }],
                            "justify-items": [{
                                "justify-items": ["start", "end", "center", "stretch"]
                            }],
                            "justify-self": [{
                                "justify-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            "align-content": [{
                                content: ["normal", ...K(), "baseline"]
                            }],
                            "align-items": [{
                                items: ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "align-self": [{
                                self: ["auto", "start", "end", "center", "stretch", "baseline"]
                            }],
                            "place-content": [{
                                "place-content": [...K(), "baseline"]
                            }],
                            "place-items": [{
                                "place-items": ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "place-self": [{
                                "place-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            p: [{
                                p: [y]
                            }],
                            px: [{
                                px: [y]
                            }],
                            py: [{
                                py: [y]
                            }],
                            ps: [{
                                ps: [y]
                            }],
                            pe: [{
                                pe: [y]
                            }],
                            pt: [{
                                pt: [y]
                            }],
                            pr: [{
                                pr: [y]
                            }],
                            pb: [{
                                pb: [y]
                            }],
                            pl: [{
                                pl: [y]
                            }],
                            m: [{
                                m: [g]
                            }],
                            mx: [{
                                mx: [g]
                            }],
                            my: [{
                                my: [g]
                            }],
                            ms: [{
                                ms: [g]
                            }],
                            me: [{
                                me: [g]
                            }],
                            mt: [{
                                mt: [g]
                            }],
                            mr: [{
                                mr: [g]
                            }],
                            mb: [{
                                mb: [g]
                            }],
                            ml: [{
                                ml: [g]
                            }],
                            "space-x": [{
                                "space-x": [T]
                            }],
                            "space-x-reverse": ["space-x-reverse"],
                            "space-y": [{
                                "space-y": [T]
                            }],
                            "space-y-reverse": ["space-y-reverse"],
                            w: [{
                                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, e]
                            }],
                            "min-w": [{
                                "min-w": [F, e, "min", "max", "fit"]
                            }],
                            "max-w": [{
                                "max-w": [F, e, "none", "full", "min", "max", "fit", "prose", {
                                    screen: [O]
                                }, O]
                            }],
                            h: [{
                                h: [F, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "min-h": [{
                                "min-h": [F, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "max-h": [{
                                "max-h": [F, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            size: [{
                                size: [F, e, "auto", "min", "max", "fit"]
                            }],
                            "font-size": [{
                                text: ["base", O, D]
                            }],
                            "font-smoothing": ["antialiased", "subpixel-antialiased"],
                            "font-style": ["italic", "not-italic"],
                            "font-weight": [{
                                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", j]
                            }],
                            "font-family": [{
                                font: [U]
                            }],
                            "fvn-normal": ["normal-nums"],
                            "fvn-ordinal": ["ordinal"],
                            "fvn-slashed-zero": ["slashed-zero"],
                            "fvn-figure": ["lining-nums", "oldstyle-nums"],
                            "fvn-spacing": ["proportional-nums", "tabular-nums"],
                            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                            tracking: [{
                                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
                            }],
                            "line-clamp": [{
                                "line-clamp": ["none", V, j]
                            }],
                            leading: [{
                                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, F]
                            }],
                            "list-image": [{
                                "list-image": ["none", F]
                            }],
                            "list-style-type": [{
                                list: ["none", "disc", "decimal", F]
                            }],
                            "list-style-position": [{
                                list: ["inside", "outside"]
                            }],
                            "placeholder-color": [{
                                placeholder: [t]
                            }],
                            "placeholder-opacity": [{
                                "placeholder-opacity": [v]
                            }],
                            "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }],
                            "text-color": [{
                                text: [t]
                            }],
                            "text-opacity": [{
                                "text-opacity": [v]
                            }],
                            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                            "text-decoration-style": [{
                                decoration: [...G(), "wavy"]
                            }],
                            "text-decoration-thickness": [{
                                decoration: ["auto", "from-font", M, D]
                            }],
                            "underline-offset": [{
                                "underline-offset": ["auto", M, F]
                            }],
                            "text-decoration-color": [{
                                decoration: [t]
                            }],
                            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                            "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }],
                            indent: [{
                                indent: B()
                            }],
                            "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
                            }],
                            whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }],
                            break: [{
                                break: ["normal", "words", "all", "keep"]
                            }],
                            hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }],
                            content: [{
                                content: ["none", F]
                            }],
                            "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }],
                            "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }],
                            "bg-opacity": [{
                                "bg-opacity": [v]
                            }],
                            "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }],
                            "bg-position": [{
                                bg: [...X(), z]
                            }],
                            "bg-repeat": [{
                                bg: ["no-repeat", {
                                    repeat: ["", "x", "y", "round", "space"]
                                }]
                            }],
                            "bg-size": [{
                                bg: ["auto", "cover", "contain", I]
                            }],
                            "bg-image": [{
                                bg: ["none", {
                                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, $]
                            }],
                            "bg-color": [{
                                bg: [t]
                            }],
                            "gradient-from-pos": [{
                                from: [f]
                            }],
                            "gradient-via-pos": [{
                                via: [f]
                            }],
                            "gradient-to-pos": [{
                                to: [f]
                            }],
                            "gradient-from": [{
                                from: [p]
                            }],
                            "gradient-via": [{
                                via: [p]
                            }],
                            "gradient-to": [{
                                to: [p]
                            }],
                            rounded: [{
                                rounded: [s]
                            }],
                            "rounded-s": [{
                                "rounded-s": [s]
                            }],
                            "rounded-e": [{
                                "rounded-e": [s]
                            }],
                            "rounded-t": [{
                                "rounded-t": [s]
                            }],
                            "rounded-r": [{
                                "rounded-r": [s]
                            }],
                            "rounded-b": [{
                                "rounded-b": [s]
                            }],
                            "rounded-l": [{
                                "rounded-l": [s]
                            }],
                            "rounded-ss": [{
                                "rounded-ss": [s]
                            }],
                            "rounded-se": [{
                                "rounded-se": [s]
                            }],
                            "rounded-ee": [{
                                "rounded-ee": [s]
                            }],
                            "rounded-es": [{
                                "rounded-es": [s]
                            }],
                            "rounded-tl": [{
                                "rounded-tl": [s]
                            }],
                            "rounded-tr": [{
                                "rounded-tr": [s]
                            }],
                            "rounded-br": [{
                                "rounded-br": [s]
                            }],
                            "rounded-bl": [{
                                "rounded-bl": [s]
                            }],
                            "border-w": [{
                                border: [a]
                            }],
                            "border-w-x": [{
                                "border-x": [a]
                            }],
                            "border-w-y": [{
                                "border-y": [a]
                            }],
                            "border-w-s": [{
                                "border-s": [a]
                            }],
                            "border-w-e": [{
                                "border-e": [a]
                            }],
                            "border-w-t": [{
                                "border-t": [a]
                            }],
                            "border-w-r": [{
                                "border-r": [a]
                            }],
                            "border-w-b": [{
                                "border-b": [a]
                            }],
                            "border-w-l": [{
                                "border-l": [a]
                            }],
                            "border-opacity": [{
                                "border-opacity": [v]
                            }],
                            "border-style": [{
                                border: [...G(), "hidden"]
                            }],
                            "divide-x": [{
                                "divide-x": [a]
                            }],
                            "divide-x-reverse": ["divide-x-reverse"],
                            "divide-y": [{
                                "divide-y": [a]
                            }],
                            "divide-y-reverse": ["divide-y-reverse"],
                            "divide-opacity": [{
                                "divide-opacity": [v]
                            }],
                            "divide-style": [{
                                divide: G()
                            }],
                            "border-color": [{
                                border: [n]
                            }],
                            "border-color-x": [{
                                "border-x": [n]
                            }],
                            "border-color-y": [{
                                "border-y": [n]
                            }],
                            "border-color-s": [{
                                "border-s": [n]
                            }],
                            "border-color-e": [{
                                "border-e": [n]
                            }],
                            "border-color-t": [{
                                "border-t": [n]
                            }],
                            "border-color-r": [{
                                "border-r": [n]
                            }],
                            "border-color-b": [{
                                "border-b": [n]
                            }],
                            "border-color-l": [{
                                "border-l": [n]
                            }],
                            "divide-color": [{
                                divide: [n]
                            }],
                            "outline-style": [{
                                outline: ["", ...G()]
                            }],
                            "outline-offset": [{
                                "outline-offset": [M, F]
                            }],
                            "outline-w": [{
                                outline: [M, D]
                            }],
                            "outline-color": [{
                                outline: [t]
                            }],
                            "ring-w": [{
                                ring: _()
                            }],
                            "ring-w-inset": ["ring-inset"],
                            "ring-color": [{
                                ring: [t]
                            }],
                            "ring-opacity": [{
                                "ring-opacity": [v]
                            }],
                            "ring-offset-w": [{
                                "ring-offset": [M, D]
                            }],
                            "ring-offset-color": [{
                                "ring-offset": [t]
                            }],
                            shadow: [{
                                shadow: ["", "inner", "none", O, W]
                            }],
                            "shadow-color": [{
                                shadow: [U]
                            }],
                            opacity: [{
                                opacity: [v]
                            }],
                            "mix-blend": [{
                                "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
                            }],
                            "bg-blend": [{
                                "bg-blend": Y()
                            }],
                            filter: [{
                                filter: ["", "none"]
                            }],
                            blur: [{
                                blur: [i]
                            }],
                            brightness: [{
                                brightness: [r]
                            }],
                            contrast: [{
                                contrast: [l]
                            }],
                            "drop-shadow": [{
                                "drop-shadow": ["", "none", O, F]
                            }],
                            grayscale: [{
                                grayscale: [u]
                            }],
                            "hue-rotate": [{
                                "hue-rotate": [h]
                            }],
                            invert: [{
                                invert: [d]
                            }],
                            saturate: [{
                                saturate: [b]
                            }],
                            sepia: [{
                                sepia: [P]
                            }],
                            "backdrop-filter": [{
                                "backdrop-filter": ["", "none"]
                            }],
                            "backdrop-blur": [{
                                "backdrop-blur": [i]
                            }],
                            "backdrop-brightness": [{
                                "backdrop-brightness": [r]
                            }],
                            "backdrop-contrast": [{
                                "backdrop-contrast": [l]
                            }],
                            "backdrop-grayscale": [{
                                "backdrop-grayscale": [u]
                            }],
                            "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [h]
                            }],
                            "backdrop-invert": [{
                                "backdrop-invert": [d]
                            }],
                            "backdrop-opacity": [{
                                "backdrop-opacity": [v]
                            }],
                            "backdrop-saturate": [{
                                "backdrop-saturate": [b]
                            }],
                            "backdrop-sepia": [{
                                "backdrop-sepia": [P]
                            }],
                            "border-collapse": [{
                                border: ["collapse", "separate"]
                            }],
                            "border-spacing": [{
                                "border-spacing": [o]
                            }],
                            "border-spacing-x": [{
                                "border-spacing-x": [o]
                            }],
                            "border-spacing-y": [{
                                "border-spacing-y": [o]
                            }],
                            "table-layout": [{
                                table: ["auto", "fixed"]
                            }],
                            caption: [{
                                caption: ["top", "bottom"]
                            }],
                            transition: [{
                                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
                            }],
                            duration: [{
                                duration: Z()
                            }],
                            ease: [{
                                ease: ["linear", "in", "out", "in-out", F]
                            }],
                            delay: [{
                                delay: Z()
                            }],
                            animate: [{
                                animate: ["none", "spin", "ping", "pulse", "bounce", F]
                            }],
                            transform: [{
                                transform: ["", "gpu", "none"]
                            }],
                            scale: [{
                                scale: [w]
                            }],
                            "scale-x": [{
                                "scale-x": [w]
                            }],
                            "scale-y": [{
                                "scale-y": [w]
                            }],
                            rotate: [{
                                rotate: [R, F]
                            }],
                            "translate-x": [{
                                "translate-x": [A]
                            }],
                            "translate-y": [{
                                "translate-y": [A]
                            }],
                            "skew-x": [{
                                "skew-x": [S]
                            }],
                            "skew-y": [{
                                "skew-y": [S]
                            }],
                            "transform-origin": [{
                                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
                            }],
                            accent: [{
                                accent: ["auto", t]
                            }],
                            appearance: [{
                                appearance: ["none", "auto"]
                            }],
                            cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
                            }],
                            "caret-color": [{
                                caret: [t]
                            }],
                            "pointer-events": [{
                                "pointer-events": ["none", "auto"]
                            }],
                            resize: [{
                                resize: ["none", "y", "x", ""]
                            }],
                            "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }],
                            "scroll-m": [{
                                "scroll-m": B()
                            }],
                            "scroll-mx": [{
                                "scroll-mx": B()
                            }],
                            "scroll-my": [{
                                "scroll-my": B()
                            }],
                            "scroll-ms": [{
                                "scroll-ms": B()
                            }],
                            "scroll-me": [{
                                "scroll-me": B()
                            }],
                            "scroll-mt": [{
                                "scroll-mt": B()
                            }],
                            "scroll-mr": [{
                                "scroll-mr": B()
                            }],
                            "scroll-mb": [{
                                "scroll-mb": B()
                            }],
                            "scroll-ml": [{
                                "scroll-ml": B()
                            }],
                            "scroll-p": [{
                                "scroll-p": B()
                            }],
                            "scroll-px": [{
                                "scroll-px": B()
                            }],
                            "scroll-py": [{
                                "scroll-py": B()
                            }],
                            "scroll-ps": [{
                                "scroll-ps": B()
                            }],
                            "scroll-pe": [{
                                "scroll-pe": B()
                            }],
                            "scroll-pt": [{
                                "scroll-pt": B()
                            }],
                            "scroll-pr": [{
                                "scroll-pr": B()
                            }],
                            "scroll-pb": [{
                                "scroll-pb": B()
                            }],
                            "scroll-pl": [{
                                "scroll-pl": B()
                            }],
                            "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }],
                            "snap-stop": [{
                                snap: ["normal", "always"]
                            }],
                            "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }],
                            "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }],
                            touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }],
                            "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }],
                            "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }],
                            "touch-pz": ["touch-pinch-zoom"],
                            select: [{
                                select: ["none", "text", "all", "auto"]
                            }],
                            "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", F]
                            }],
                            fill: [{
                                fill: [t, "none"]
                            }],
                            "stroke-w": [{
                                stroke: [M, D, j]
                            }],
                            stroke: [{
                                stroke: [t, "none"]
                            }],
                            sr: ["sr-only", "not-sr-only"],
                            "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }]
                        },
                        conflictingClassGroups: {
                            overflow: ["overflow-x", "overflow-y"],
                            overscroll: ["overscroll-x", "overscroll-y"],
                            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                            "inset-x": ["right", "left"],
                            "inset-y": ["top", "bottom"],
                            flex: ["basis", "grow", "shrink"],
                            gap: ["gap-x", "gap-y"],
                            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                            px: ["pr", "pl"],
                            py: ["pt", "pb"],
                            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                            mx: ["mr", "ml"],
                            my: ["mt", "mb"],
                            size: ["w", "h"],
                            "font-size": ["leading"],
                            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                            "fvn-ordinal": ["fvn-normal"],
                            "fvn-slashed-zero": ["fvn-normal"],
                            "fvn-figure": ["fvn-normal"],
                            "fvn-spacing": ["fvn-normal"],
                            "fvn-fraction": ["fvn-normal"],
                            "line-clamp": ["display", "overflow"],
                            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                            "rounded-s": ["rounded-ss", "rounded-es"],
                            "rounded-e": ["rounded-se", "rounded-ee"],
                            "rounded-t": ["rounded-tl", "rounded-tr"],
                            "rounded-r": ["rounded-tr", "rounded-br"],
                            "rounded-b": ["rounded-br", "rounded-bl"],
                            "rounded-l": ["rounded-tl", "rounded-bl"],
                            "border-spacing": ["border-spacing-x", "border-spacing-y"],
                            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                            "border-w-x": ["border-w-r", "border-w-l"],
                            "border-w-y": ["border-w-t", "border-w-b"],
                            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                            "border-color-x": ["border-color-r", "border-color-l"],
                            "border-color-y": ["border-color-t", "border-color-b"],
                            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                            "scroll-mx": ["scroll-mr", "scroll-ml"],
                            "scroll-my": ["scroll-mt", "scroll-mb"],
                            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                            "scroll-px": ["scroll-pr", "scroll-pl"],
                            "scroll-py": ["scroll-pt", "scroll-pb"],
                            touch: ["touch-x", "touch-y", "touch-pz"],
                            "touch-x": ["touch"],
                            "touch-y": ["touch"],
                            "touch-pz": ["touch"]
                        },
                        conflictingClassGroupModifiers: {
                            "font-size": ["leading"]
                        }
                    }
                })
        }
    }
]);