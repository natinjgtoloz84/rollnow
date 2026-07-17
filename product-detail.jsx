const { Button: DBtn, Badge: DBadge, Card: DCard } = window.RollNowDesignSystem_2adbdf;
const { useState: useStateD, useEffect: useEffectD } = React;

const DRM = (n) => "RM " + n.toLocaleString("en-MY");

function getParamId() {
  const m = new URLSearchParams(window.location.search).get("id");
  return m;
}

function addToCartLS(id, qty) {
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem("rn-cart") || "{}"); } catch (e) { cart = {}; }
  cart[id] = (cart[id] || 0) + qty;
  localStorage.setItem("rn-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("rn-cart-change"));
}

function DQty({ qty, setQty }) {
  const btn = { width: 42, height: 42, border: "2px solid var(--ink-900)", background: "#fff",
    fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1, cursor: "pointer", color: "var(--ink-900)" };
  return (
    <div style={{ display: "flex" }}>
      <button className="rn-qty-btn" style={btn} aria-label="Decrease" onClick={() => setQty(Math.max(1, qty - 1))}>–</button>
      <span style={{ minWidth: 50, display: "flex", alignItems: "center", justifyContent: "center",
        borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)", fontWeight: 800, fontSize: 17 }}>{qty}</span>
      <button className="rn-qty-btn" style={btn} aria-label="Increase" onClick={() => setQty(qty + 1)}>+</button>
    </div>
  );
}

function NotFound() {
  return (
    <React.Fragment>
      <Nav active="products" />
      <main className="rn-main">
        <section className="rn-section" style={{ textAlign: "center" }}>
          <div className="rn-wrap">
            <h1 className="display display--lg" style={{ marginBottom: 16 }}>Product not found</h1>
            <p className="lead" style={{ margin: "0 auto 28px" }}>We couldn't find that skate. Head back to the shop to browse the range.</p>
            <DBtn variant="primary" size="lg" onClick={() => (window.location.href = "products.html")}>Back to Shop</DBtn>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

function ProductDetail() {
  const id = getParamId();
  const product = (window.PRODUCTS || []).find((p) => p.id === id);
  const [qty, setQty] = useStateD(1);
  const [toast, setToast] = useStateD(null);

  // SEO: set dynamic title/description/canonical/OG + inject Product & Breadcrumb JSON-LD per product
  useEffectD(() => {
    if (!product) return;
    const base = "https://www.rollnow.com.my"; // TODO: replace with your live domain
    const p = product;
    const url = base + "/product-detail.html?id=" + encodeURIComponent(p.id);
    const desc = `${p.name} (${p.color}) — ${p.tagline} ${DRM(p.price)}. Buy inline skates from Roll Now Kuala Lumpur and check out on WhatsApp.`;
    document.title = `${p.name} ${p.color} — Buy Inline Skates | Roll Now`;
    const upsert = (selector, create) => {
      let el = document.head.querySelector(selector);
      if (!el) { el = create(); document.head.appendChild(el); }
      return el;
    };
    const meta = (name, content, prop) => {
      const key = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      const el = upsert(key, () => { const m = document.createElement("meta"); m.setAttribute(prop ? "property" : "name", name); return m; });
      el.setAttribute("content", content);
    };
    meta("description", desc);
    meta("og:title", document.title, true);
    meta("og:description", desc, true);
    meta("og:url", url, true);
    meta("og:image", base + "/" + p.img, true);
    meta("twitter:title", document.title);
    meta("twitter:description", desc);
    const canon = upsert('link[rel="canonical"]', () => { const l = document.createElement("link"); l.rel = "canonical"; return l; });
    canon.setAttribute("href", url);
    const old = document.getElementById("ld-product");
    if (old) old.remove();
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "ld-product";
    s.textContent = JSON.stringify([
      { "@context": "https://schema.org", "@type": "Product", name: `${p.name} ${p.color}`, image: base + "/" + p.img,
        description: p.tagline, brand: { "@type": "Brand", name: "Rollerblade" }, category: p.category,
        offers: { "@type": "Offer", priceCurrency: "MYR", price: p.price, availability: "https://schema.org/InStock", url } },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
        { "@type": "ListItem", position: 2, name: "Shop", item: base + "/products.html" },
        { "@type": "ListItem", position: 3, name: p.name } ] },
    ]);
    document.head.appendChild(s);
  }, []);

  if (!product) return <NotFound />;
  const p = product;
  const related = (window.PRODUCTS || []).filter((x) => x.id !== p.id).slice(0, 3);

  const add = () => {
    addToCartLS(p.id, qty);
    setToast(`${qty} × ${p.name} added to cart`);
    setTimeout(() => setToast(null), 2600);
  };

  return (
    <React.Fragment>
      <Nav active="products" />
      <main className="rn-main">

        {/* Breadcrumb */}
        <div style={{ borderBottom: "2px solid var(--ink-100)" }}>
          <div className="rn-wrap" style={{ padding: "16px 24px", fontSize: 14, fontWeight: 700 }}>
            <a href="products.html" style={{ color: "var(--ink-500)" }}>Shop</a>
            <span style={{ color: "var(--ink-300)", margin: "0 8px" }}>/</span>
            <span style={{ color: "var(--ink-900)" }}>{p.name}</span>
          </div>
        </div>

        {/* Hero: image + buy box */}
        <section className="rn-section rn-section--tight">
          <div className="rn-wrap">
            <div className="split-grid" style={{ alignItems: "stretch" }}>
              {/* image */}
              <div style={{ border: "3px solid var(--ink-900)", background: "var(--surface-sunken)", position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380, padding: 32 }}>
                <span style={{ position: "absolute", top: 18, left: 18 }}><DBadge tone="dark">{p.badge}</DBadge></span>
                <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: p.accent }}></span>
                <img src={p.img} alt={p.name + " " + p.color}
                  style={{ width: "100%", maxWidth: 420, objectFit: "contain", mixBlendMode: "multiply" }} />
              </div>
              {/* buy box */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="eyebrow" style={{ marginBottom: 10 }}>{p.category}</p>
                <h1 className="display display--lg" style={{ marginBottom: 8 }}>{p.name}</h1>
                <p style={{ fontWeight: 700, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>{p.color}</p>
                <p style={{ fontSize: 18, fontWeight: 600, color: "var(--text-body)", margin: "0 0 20px" }}>{p.tagline}</p>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, color: "var(--red-600)", lineHeight: 1, marginBottom: 24 }}>{DRM(p.price)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 16 }}>
                  <DQty qty={qty} setQty={setQty} />
                  <DBtn variant="primary" size="lg" style={{ flex: 1, minWidth: 190 }} onClick={add}>Add to Cart</DBtn>
                </div>
                <a href="products.html" style={{ fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <i className="ph-bold ph-shopping-cart-simple" style={{ fontSize: 16 }}></i> View cart &amp; checkout in Shop
                </a>
                <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Free protection-kit fitting session", "Size confirmed on WhatsApp before payment", "Coach-recommended setup"].map((t) => (
                    <li key={t} style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 600, fontSize: 15 }}>
                      <i className="ph-fill ph-check-circle" style={{ color: p.accent, fontSize: 20 }}></i>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="rn-section" style={{ background: "var(--surface-sunken)" }}>
          <div className="rn-wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Overview</p>
            <h2 className="display display--md" style={{ marginBottom: 18 }}>About this skate</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>{p.description}</p>
          </div>
        </section>

        {/* Technology */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="Technology" title="Built to perform" lead="The engineering behind the ride." />
            <div className="rn-grid rn-grid--2">
              {p.tech.map((t) => (
                <div key={t.title} style={{ border: "2px solid var(--ink-900)", padding: 26, display: "flex", gap: 16 }}>
                  <div style={{ width: 46, height: 46, background: p.accent, border: "2px solid var(--ink-900)", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="ph-bold ph-gear-six" style={{ fontSize: 24, color: "var(--ink-900)" }}></i>
                  </div>
                  <div>
                    <h3 className="display" style={{ fontSize: 24, margin: "0 0 6px" }}>{t.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for + specs */}
        <section className="rn-section" style={{ background: "var(--ink-900)" }}>
          <div className="rn-wrap">
            <div className="split-grid" style={{ alignItems: "start" }}>
              <div>
                <p className="eyebrow eyebrow--light">Who it's for</p>
                <h2 className="display display--md display--on-dark" style={{ marginBottom: 18 }}>Is this your skate?</h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "#C7C8D2", margin: "0 0 24px" }}>{p.target}</p>
                <div style={{ display: "inline-flex", background: p.accent, border: "2px solid #fff", padding: "12px 18px",
                  fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ink-900)", letterSpacing: "0.03em" }}>
                  {p.category}
                </div>
              </div>
              <div style={{ background: "#fff", border: "2px solid #000" }}>
                <div style={{ background: p.accent, borderBottom: "2px solid #000", padding: "14px 22px" }}>
                  <span className="display" style={{ fontSize: 24 }}>Specifications</span>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {Object.keys(p.specs).map((k, i) => (
                      <tr key={k} style={{ borderBottom: i < Object.keys(p.specs).length - 1 ? "1px solid var(--ink-100)" : "none" }}>
                        <td style={{ padding: "14px 22px", fontWeight: 800, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--ink-500)", width: "42%" }}>{k}</td>
                        <td style={{ padding: "14px 22px", fontWeight: 600, fontSize: 15, color: "var(--ink-900)" }}>{p.specs[k]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="Keep browsing" title="You might also like" />
            <div className="rn-grid rn-grid--3">
              {related.map((r) => (
                <a key={r.id} href={"product-detail.html?id=" + encodeURIComponent(r.id)} className="rn-prod-link"
                  style={{ color: "inherit", border: "2px solid var(--ink-900)", display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "var(--surface-sunken)", borderBottom: "2px solid var(--ink-900)", padding: 18,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={r.img} alt={r.name} style={{ height: 150, objectFit: "contain", mixBlendMode: "multiply" }} />
                  </div>
                  <div style={{ padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <div>
                      <div className="display" style={{ fontSize: 22 }}>{r.name}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-500)", textTransform: "uppercase" }}>{r.color}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--red-600)" }}>{DRM(r.price)}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {toast ? (
        <div className="rn-toast">
          <i className="ph-fill ph-check-circle" style={{ fontSize: 20, color: "var(--green-500)" }}></i>{toast}
          <a href="products.html" style={{ color: "var(--yellow-500)", fontWeight: 800, marginLeft: 6 }}>View cart</a>
        </div>
      ) : null}

      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProductDetail />);
