const { Button: KBtn, Badge: KBadge, Card: KCard } = window.RollNowDesignSystem_2adbdf;
const { useState: useStateK, useEffect: useEffectK } = React;

const KRM = (n) => "RM " + n.toLocaleString("en-MY");

function KQty({ qty, setQty }) {
  const btn = { width: 40, height: 40, border: "2px solid var(--ink-900)", background: "#fff",
    fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1, cursor: "pointer", color: "var(--ink-900)" };
  return (
    <div style={{ display: "flex" }}>
      <button className="rn-qty-btn" style={btn} aria-label="Decrease" onClick={() => setQty(qty - 1)}>–</button>
      <span style={{ minWidth: 46, display: "flex", alignItems: "center", justifyContent: "center",
        borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)", fontWeight: 800, fontSize: 16 }}>{qty}</span>
      <button className="rn-qty-btn" style={btn} aria-label="Increase" onClick={() => setQty(qty + 1)}>+</button>
    </div>
  );
}

function Checkout() {
  const [cart, setCart] = useStateK(() => {
    try { return JSON.parse(localStorage.getItem("rn-cart") || "{}"); } catch (e) { return {}; }
  });

  useEffectK(() => {
    localStorage.setItem("rn-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("rn-cart-change"));
  }, [cart]);

  const setQtyFor = (id, qty) => setCart((c) => {
    const n = { ...c }; if (qty <= 0) delete n[id]; else n[id] = qty; return n;
  });

  const lines = Object.keys(cart)
    .map((id) => ({ ...(window.PRODUCTS || []).find((p) => p.id === id), qty: cart[id] }))
    .filter((l) => l.id);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);

  const checkout = () => {
    if (!lines.length) return;
    let msg = "Hi Roll Now! I'd like to place an order:\n\n";
    lines.forEach((l) => {
      msg += `• ${l.name} (${l.color})\n   Qty: ${l.qty} × ${KRM(l.price)} = ${KRM(l.price * l.qty)}\n`;
    });
    msg += `\nTotal (${count} item${count > 1 ? "s" : ""}): ${KRM(total)}`;
    window.open("https://wa.me/60121234567?text=" + encodeURIComponent(msg), "_blank");
  };

  return (
    <React.Fragment>
      <Nav active="products" />
      <main className="rn-main">

        {/* Header */}
        <section className="rn-section rn-section--tight" style={{ borderBottom: "3px solid var(--ink-900)" }}>
          <div className="rn-wrap">
            <p className="eyebrow">Your order</p>
            <h1 className="display display--xl">Checkout</h1>
            <p className="lead" style={{ marginTop: 14 }}>
              Review your skates, then send the order straight to us on WhatsApp to confirm sizes and payment.
            </p>
          </div>
        </section>

        <section className="rn-section">
          <div className="rn-wrap">
            {lines.length === 0 ? (
              <div style={{ border: "3px solid var(--ink-900)", padding: "56px 32px", textAlign: "center" }}>
                <i className="ph-bold ph-shopping-cart-simple" style={{ fontSize: 52, color: "var(--ink-300)" }}></i>
                <h2 className="display display--md" style={{ margin: "16px 0 10px" }}>Your cart is empty</h2>
                <p className="lead" style={{ margin: "0 auto 26px" }}>Browse the shop and add a pair of skates to get started.</p>
                <KBtn variant="primary" size="lg" onClick={() => (window.location.href = "products.html")}>Back to Shop</KBtn>
              </div>
            ) : (
              <div className="rn-checkout-grid">
                {/* Items */}
                <div style={{ border: "3px solid var(--ink-900)" }}>
                  <div className="rn-co-head">
                    <span className="rn-co-col-item">Item</span>
                    <span className="rn-co-col-qty">Qty</span>
                    <span className="rn-co-col-amt">Amount</span>
                  </div>
                  {lines.map((l) => (
                    <div key={l.id} className="rn-co-line">
                      <div className="rn-co-col-item" style={{ display: "flex", gap: 14, alignItems: "center", minWidth: 0 }}>
                        <a href={"product-detail.html?id=" + encodeURIComponent(l.id)}
                          style={{ width: 72, height: 72, background: "var(--surface-sunken)", border: "2px solid var(--ink-900)",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <img src={l.img} alt={l.name} style={{ width: 60, height: 60, objectFit: "contain", mixBlendMode: "multiply" }} />
                        </a>
                        <div style={{ minWidth: 0 }}>
                          <a href={"product-detail.html?id=" + encodeURIComponent(l.id)} style={{ color: "inherit" }}>
                            <div style={{ fontWeight: 800, fontSize: 16, color: "var(--ink-900)" }}>{l.name}</div>
                          </a>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{l.color}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-500)", marginTop: 2 }}>{KRM(l.price)} each</div>
                          <button className="rn-cart-remove" style={{ marginTop: 6 }} onClick={() => setQtyFor(l.id, 0)}>Remove</button>
                        </div>
                      </div>
                      <div className="rn-co-col-qty">
                        <KQty qty={l.qty} setQty={(q) => setQtyFor(l.id, q)} />
                      </div>
                      <div className="rn-co-col-amt" style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--red-600)", whiteSpace: "nowrap" }}>
                        {KRM(l.price * l.qty)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <aside className="rn-co-summary">
                  <div style={{ border: "3px solid var(--ink-900)", position: "sticky", top: 96 }}>
                    <div style={{ background: "var(--ink-900)", color: "#fff", padding: "16px 22px" }}>
                      <span className="display" style={{ fontSize: 26, color: "#fff" }}>Order Summary</span>
                    </div>
                    <div style={{ padding: 22 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                        {lines.map((l) => (
                          <div key={l.id} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                            <span style={{ fontWeight: 600, color: "var(--text-body)" }}>{l.name} <span style={{ color: "var(--ink-300)" }}>×{l.qty}</span></span>
                            <span style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{KRM(l.price * l.qty)}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ borderTop: "2px solid var(--ink-900)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                        <span style={{ fontWeight: 800, fontSize: 16 }}>Total</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 44, color: "var(--ink-900)", lineHeight: 1 }}>{KRM(total)}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, margin: "0 0 18px" }}>{count} item{count > 1 ? "s" : ""} · fitting session included</p>
                      <KBtn variant="primary" size="lg" style={{ width: "100%" }} onClick={checkout}>
                        <i className="ph-bold ph-whatsapp-logo" style={{ fontSize: 20, marginRight: 8 }}></i> Checkout on WhatsApp
                      </KBtn>
                      <a href="products.html" style={{ display: "block", textAlign: "center", marginTop: 14, fontWeight: 700, fontSize: 14 }}>← Continue shopping</a>
                      <button className="rn-cart-clear" onClick={() => setCart({})}>Clear cart</button>
                    </div>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Checkout />);
