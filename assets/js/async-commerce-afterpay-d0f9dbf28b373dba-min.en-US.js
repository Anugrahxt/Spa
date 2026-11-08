"use strict";
(globalThis.rspackChunkextract_css || = []).push([
    [5745], {
        116688(x) {
            x.exports = {
                afterpayPdpCopy: "fxDAOstF8AxqMCeP",
                inRange: "jUn_AwSxNDkYFvof",
                outOfRange: "gXOi7M5BRgScGlD6",
                pillAfterpay: "qFP3FLm4rc6ZdZqJ",
                pillClearpay: "FY4x8RM7apkOa3ZX",
                info: "NXOgm3CwAO3KKMZ8",
                closeButton: "idIDWcRAlHc2au72",
                hidden: "srnRxKNu_8kfnyT3",
                afterpayPdpModal: "GMifhjHm9gtqDddy",
                pdpOverlay: "o1p3CWQIDFE_wP1a"
            }
        },
        235490(x, E, e) {
            e.r(E);
            var d = e(533186),
                L = e(638793),
                b = e.n(L),
                A = e(352295),
                f = e(226735),
                M = e(116688),
                c = e.n(M),
                u = e(327946),
                B = e(750182),
                h = e(848390),
                R = e(906394),
                F = e.n(R),
                D = e(185734),
                P = e.n(D),
                k = e(780662),
                I = e(499043),
                T = "[data-afterpay]",
                j = "[data-modal-overlay]",
                N = "[data-afterpay-modal]",
                S = "";

            function U(o) {
                var p = o.querySelectorAll("button, a[href], textarea, input, select"),
                    m = p.length - 1,
                    t = p[0],
                    a = 0;
                t.focus({
                    preventScroll: !0
                }), o.addEventListener("keydown", function(r) {
                    var s = r.key === "Tab" || r.keyCode === 9;
                    s && (r.shiftKey ? a = a === 0 ? m : a - 1 : a = a === m ? 0 : a + 1, p[a].focus(), r.preventDefault())
                })
            }

            function Y(o) {
                var p = P()(window, "Static.SQUARESPACE_CONTEXT.itemId");
                if (!p) return;
                var m = document.querySelectorAll(T),
                    t = K(m[0], p);
                if (!t) return;
                var a = t.afterPayMin,
                    r = t.afterPayMax,
                    s = B.A.getStoreCurrency(),
                    n = (0, h.sp)(o, s),
                    _ = (0, u.O_)(n),
                    g = (0, u._$)(n, a, r, s),
                    H = n.compare((0, h.sp)(a, s)) === 1 && n.compare((0, h.sp)(r, s)) !== 1,
                    y = document.createElement("span");
                y.setAttribute("class", "afterpayString");
                var Z = t.shopperLanguage,
                    $ = t.stripeAccountCountry,
                    O = (0, u.jc)({
                        shopperLanguage: Z,
                        stripeCountryCode: $
                    }),
                    l = (0, u.Kg)(c().pillAfterpay, c().pillClearpay, O),
                    v = (0, u.Kg)(u.nl, u.m4, O),
                    i = document.createElement("button");
                i.classList.add("afterpayPill", l), i.innerHTML = v, (0, u.tn)(".section-background") && (i.style.filter = "invert(1)");
                var C = document.createElement("button");
                C.classList.add("infoButton", c().info), C.innerHTML = "&#9432;", C.setAttribute("aria-label", (0, A.t)("Button to Afterpay Information Popup", null, {
                    project: "apps.Commerce"
                }));
                var X = document.querySelector(N),
                    z = document.querySelector(j);
                if (!X || !z) return;

                function G(V) {
                    (0, k.xP)(I.AFTERPAY_PDP_OPEN_MODAL), S = V.target, X.style.visibility = "visible", z.style.display = "block", U(X)
                }
                if (i.addEventListener("click", G), C.addEventListener("click", G), !H) {
                    var Q = document.createTextNode(g);
                    return i.classList.add(c().outOfRange), y.append(i), y.append(Q), y.append(C), y
                }
                var J = document.createTextNode((0, A.t)("or {installmentStr} with", {
                    installmentStr: _
                }, {
                    notes: "States the number of installments",
                    project: "apps.Commerce"
                }));
                return i.classList.add(c().inRange), y.append(J), y.append(i), y.append(C), y
            }

            function K(o, p) {
                var m = null;
                try {
                    m = JSON.parse(o.getAttribute("data-current-context"))[p]
                } catch (t) {
                    (0, f.v4)(function(a) {
                        a.setTag("app", "commerce-merch"), (0, f.Cp)(t)
                    })
                }
                return m
            }

            function W(o, p) {
                if (!p || p.productType !== 1 || p.subscribable) return;
                var m = o.querySelector(".product-price").textContent,
                    t = o.querySelectorAll(T);
                if (!m || !t[0]) return;
                var a = P()(window, "Static.SQUARESPACE_CONTEXT.itemId"),
                    r = K(t[0], a);
                if (!r || !r.afterPayAvailable) return;
                var s = o.getElementById("siteWrapper"),
                    n = o.createElement("div"),
                    _ = o.createElement("div");
                s.appendChild(n), s.appendChild(_), n.setAttribute("aria-label", (0, A.t)("Afterpay Information Popup", null, {
                    project: "apps.Commerce"
                })), n.setAttribute("role", "dialog"), n.setAttribute("aria-modal", "true"), n.classList.add(c().afterpayPdpModal), n.setAttribute("data-afterpay-modal", !0), _.classList.add(c().pdpOverlay), _.setAttribute("data-modal-overlay", !0), t.forEach(function(l) {
                    var v = o.createElement("div");
                    v.setAttribute("class", b()(c().afterpayPdpCopy, "pdp_after_pay_element")), l.append(v);
                    var i = Y(parseFloat(m.replace(/[^0-9\.,-]+/g, "")) * 100);
                    v.append(i)
                }), (0, k.xP)(I.AFTERPAY_PDP_LOAD);
                var g = o.createElement("button");
                g.setAttribute("aria-label", (0, A.t)("Close", null, {
                    project: "apps.Commerce"
                })), g.classList.add("closeButton", c().closeButton);
                var H = o.createElement("img");
                H.src = F(), g.appendChild(H);
                var y = r.shopperLanguage,
                    Z = r.stripeAccountCountry,
                    $ = function() {
                        fetch((0, u.L9)({
                            shopperLanguage: y,
                            stripeCountryCode: Z
                        })).then(function(l) {
                            return l.text()
                        }).then(function(l) {
                            n.innerHTML = l;
                            var v = n.querySelector(".grid-container");
                            v && (v.id = "modalContent", n.setAttribute("aria-describedby", "modalContent"));
                            var i = o.querySelector(".afterpay-modal-wrapper");
                            i && i.appendChild(g)
                        }).catch(function(l) {
                            console.warn("Unable to retrieve Afterpay modal", l)
                        })
                    };
                $();

                function O() {
                    n.style.visibility = "hidden", _.style.display = "none", S.focus()
                }
                o.onkeydown = function(l) {
                    (l.key === "Escape" || l.key === "Esc" || l.keyCode === 27) && O()
                }, g.addEventListener("click", O), o.addEventListener("click", function(l) {
                    var v = o.querySelector(".afterpayPill"),
                        i = o.querySelector(".infoButton");
                    if (!(!v || !i)) {
                        var C = !n.contains(l.target);
                        n.style.visibility === "visible" && l.target !== v && l.target !== i && C && O()
                    }
                })
            }
            e.d(E, {
                initializeAfterpay: () => W,
                showAfterpay: () => Y
            })
        },
        54295(x, E, e) {
            var d = e(730573),
                L = e(472141),
                b = e(801019),
                A = e(588486);
            const f = (0, A.k)(),
                M = new d.default(f),
                c = new L.default(f),
                u = new b.default(f),
                {
                    formatIcuMessage: B
                } = M,
                {
                    parseNumber: h
                } = c,
                {
                    T: R,
                    Plural: F
                } = u,
                {
                    formatNumber: D,
                    formatMoney: P,
                    formatCurrency: k,
                    formatCurrencyToParts: I,
                    getCurrencyFractions: T,
                    getCurrencySymbol: j,
                    formatQuantity: N
                } = f,
                S = f.translate,
                U = f.pluralize;
            e.d(E, {}, {
                T: R,
                j2: T,
                t: S,
                up: P
            })
        },
        327946(x, E, e) {
            var d = e(54295),
                L = e(899574),
                b = e(350478),
                A = e.n(b),
                f = e(677095),
                M = e.n(f),
                c = e(277549),
                u = e.n(c),
                B = e(424138),
                h = e.n(B);
            const R = (t, a) => (0, d.t)("{numInstallments} interest-free payments of {amount}", {
                    numInstallments: a,
                    amount: (0, d.up)(t)
                }, {
                    notes: "States the number of installments",
                    project: "commerce-afterpay"
                }),
                F = (t, a) => (0, d.t)("or {numInstallments} interest-free payments of {amount} with", {
                    numInstallments: a,
                    amount: (0, d.up)(t)
                }, {
                    notes: "States the number of installments",
                    project: "commerce-afterpay"
                }),
                D = function(t) {
                    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
                    return (arguments.length > 2 ? arguments[2] : void 0) === "oneline" ? F(t.divide(a), a) : R(t.divide(a), a)
                },
                P = (t, a, r, s) => {
                    const n = (0, d.j2)(t.currencyCode).digits,
                        _ = t.toSubunits(n) > r,
                        g = _ ? new L.default(r / 100, s) : new L.default(a / 100, s);
                    return _ ? (0, d.t)("available for orders up to {amount}", {
                        amount: (0, d.up)(g)
                    }, {
                        project: "commerce-afterpay"
                    }) : (0, d.t)("available for orders over {amount}", {
                        amount: (0, d.up)(g)
                    }, {
                        project: "commerce-afterpay"
                    })
                },
                k = {
                    US: ["en"],
                    CA: ["en", "fr"],
                    AU: ["en"],
                    NZ: ["en"],
                    GB: ["en"]
                },
                I = new Set(["en_US", "en_CA", "fr_CA", "en_AU", "en_NZ"]),
                T = new Set(["en_GB"]),
                j = "Afterpay",
                N = "Clearpay",
                S = t => {
                    let {
                        shopperLanguage: a = "",
                        stripeCountryCode: r = ""
                    } = t;
                    const s = r.toUpperCase(),
                        n = k[s];
                    return n ? `${A()(n.find(M()(a.toLowerCase())),n[0])}_${s}` : void 0
                },
                U = t => {
                    const a = document.querySelector(t),
                        r = window.getComputedStyle(a).backgroundColor;
                    return u()(r)
                };

            function Y(t) {
                return h()[t.productType] === h().PHYSICAL
            }
            const K = t => !t || !t.items ? .length ? !1 : t.items.every(a => Y(a)),
                W = "https://static.afterpay.com/modal",
                o = "en_US",
                p = t => {
                    let {
                        shopperLanguage: a,
                        stripeCountryCode: r
                    } = t;
                    const s = S({
                        shopperLanguage: a,
                        stripeCountryCode: r
                    }) ? ? o;
                    return `${W}/${s}-theme-white.html`
                },
                m = (t, a, r) => {
                    if (!(typeof r > "u")) {
                        if (I.has(r)) return t;
                        if (T.has(r)) return a
                    }
                };
            e.d(E, {}, {
                Kg: m,
                L9: p,
                O_: D,
                _$: P,
                jc: S,
                m4: N,
                nW: K,
                nl: j,
                tn: U
            })
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/4a451d482c62ce2b/async-commerce-afterpay-d0f9dbf28b373dba-min.en-US.js.map