const { Button: PBtn, Badge: PBadge, Card: PCard } = window.RollNowDesignSystem_2adbdf;
const { useState: useStateP, useEffect: useEffectP } = React;

const PRODUCTS = window.PRODUCTS;

const RM = (n) => "RM " + n.toLocaleString("en-MY");

function QtyStepper({ qty, setQty }) {
  const btn = { width: 38, height: 38, border: "2px solid var(--ink-900)", background: "#fff",
    fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1, cursor: "pointer", color: "var(--ink-900)" };
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <button className="rn-qty-btn" style={btn} aria-label="Decrease" onClick={() => setQty(Math.max(1, qty - 1))}>–</button>
      <span style={{ minWidth: 44, display: "flex", alignItems: "center", justifyContent: "center",
        borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)", fontWeight: 800, fontSize: 16 }}>{qty}</span>
      <button className="rn-qty-btn" style={btn} aria-label="Increase" onClick={() => setQty(qty + 1)}>+</button>
    </div>
  );
}

function ProductCard({ p, onAdd }) {
  const [qty, setQty] = useStateP(1);
  const href = "product-detail.html?id=" + encodeURIComponent(p.id);
  return (
    <PCard accent={p.accent} padding="0" style={{ display: "flex", flexDirection: "column" }}>
      <a href={href} className="rn-prod-link" style={{ display: "block", color: "inherit" }}>
        <div style={{ background: "var(--surface-sunken)", padding: 20, borderBottom: "2px solid var(--ink-900)",
          display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <span style={{ position: "absolute", top: 12, left: 12 }}><PBadge tone="dark">{p.badge}</PBadge></span>
          <img src={p.img} alt={p.name + " " + p.color} loading="lazy"
            style={{ width: "100%", maxWidth: 220, height: 190, objectFit: "contain", display: "block", mixBlendMode: "multiply" }} />
        </div>
      </a>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
            <a href={href} className="rn-prod-link" style={{ color: "inherit" }}>
              <h3 className="display" style={{ fontSize: 30, margin: 0, lineHeight: 1 }}>{p.name}</h3>
            </a>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--red-600)", lineHeight: 1, whiteSpace: "nowrap" }}>{RM(p.price)}</span>
          </div>
          <p style={{ margin: "6px 0 0", fontWeight: 700, color: "var(--ink-500)", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.color}</p>
        </div>
        <a href={href} style={{ fontWeight: 700, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}>
          View details <i className="ph-bold ph-arrow-right" style={{ fontSize: 14 }}></i>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto", flexWrap: "wrap" }}>
          <QtyStepper qty={qty} setQty={setQty} />
          <PBtn variant="primary" size="md" style={{ flex: 1, minWidth: 150 }}
            onClick={() => { onAdd(p, qty); setQty(1); }}>Add to Cart</PBtn>
        </div>
      </div>
    </PCard>
  );
}

function Products() {
  const [cart, setCart] = useStateP(() => {
    try { return JSON.parse(localStorage.getItem("rn-cart") || "{}"); } catch (e) { return {}; }
  });
  const [toast, setToast] = useStateP(null);

  useEffectP(() => {
    localStorage.setItem("rn-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("rn-cart-change"));
  }, [cart]);

  const addToCart = (p, qty) => {
    setCart((c) => ({ ...c, [p.id]: (c[p.id] || 0) + qty }));
    setToast(`${qty} × ${p.name} added`);
    setTimeout(() => setToast(null), 2200);
  };

  const lines = Object.keys(cart).map((id) => ({ ...PRODUCTS.find((p) => p.id === id), qty: cart[id] })).filter((l) => l.id);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);

  return (
    <React.Fragment>
      <Nav active="products" />
      <main className="rn-main">

        {/* Header */}
        <section className="rn-section rn-section--tight" style={{ borderBottom: "3px solid var(--ink-900)" }}>
          <div className="rn-wrap">
            <p className="eyebrow">The shop</p>
            <h1 className="display display--xl" style={{ maxWidth: 820 }}>Gear up &amp; roll out</h1>
            <p className="lead" style={{ marginTop: 18 }}>
              Premium Rollerblade skates, hand-picked by our coaches. Add to cart and check out in one tap on WhatsApp.
            </p>
          </div>
        </section>

        {/* Product grid */}
        <section className="rn-section">
          <div className="rn-wrap">
            <div className="rn-grid rn-grid--3">
              {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
            </div>
            <p style={{ marginTop: 22, fontSize: 14, color: "var(--text-muted)", fontWeight: 600 }}>
              Prices include a full protection kit fitting session. Sizes confirmed on WhatsApp before payment.
            </p>
          </div>
        </section>

      </main>

      {/* Floating cart button → checkout page */}
      {count > 0 ? (
        <a className="rn-cart-fab" href="checkout.html">
          <i className="ph-bold ph-shopping-cart-simple" style={{ fontSize: 24 }}></i>
          <span>{count} · {RM(total)}</span>
        </a>
      ) : null}

      {/* Toast */}
      {toast ? (
        <div className="rn-toast">
          <i className="ph-fill ph-check-circle" style={{ fontSize: 20, color: "var(--green-500)" }}></i>{toast}
        </div>
      ) : null}

      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Products />);
