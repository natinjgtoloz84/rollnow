const { Button: SBtn, Badge: SBadge, Card: SCard } = window.RollNowDesignSystem_2adbdf;
const { useState: useStateS } = React;

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{ border: "2px solid var(--ink-900)", background: open ? "var(--surface-sunken)" : "#fff" }}>
      <button className="rn-faq-q" onClick={onToggle} style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 24px", textAlign: "left" }}>
        <span style={{ fontWeight: 800, fontSize: 17, color: "var(--ink-900)", fontFamily: "var(--font-body)" }}>{item.q}</span>
        <i className={"ph-bold " + (open ? "ph-minus" : "ph-plus")} style={{ fontSize: 22, color: "var(--red-600)", flexShrink: 0 }}></i>
      </button>
      {open ? (
        <p style={{ margin: 0, padding: "0 24px 22px", fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)", maxWidth: "70ch" }}>{item.a}</p>
      ) : null}
    </div>
  );
}

function Services() {
  const [openFaq, setOpenFaq] = useStateS(0);
  return (
    <React.Fragment>
      <Nav active="services" />
      <main className="rn-main">

        {/* Header */}
        <section className="rn-section rn-section--tight" style={{ borderBottom: "3px solid var(--ink-900)" }}>
          <div className="rn-wrap">
            <p className="eyebrow">Courses &amp; pricing</p>
            <h1 className="display display--xl" style={{ maxWidth: 820 }}>Pick your pace, pay by the hour</h1>
            <p className="lead" style={{ marginTop: 18 }}>
              Two simple courses, transparent hourly rates, and full protection gear included every time. No packages to decode, no lock-ins.
            </p>
          </div>
        </section>

        {/* Service items */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="Service items" title="Two ways to roll" />
            <div className="rn-grid rn-grid--2">
              {SERVICES.map((s, i) => <ServiceCard key={s.key} s={s} index={i} />)}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="rn-section" style={{ background: "var(--ink-900)" }}>
          <div className="rn-wrap">
            <SectionHead light eyebrow="How it works" title="Three steps to rolling"
              lead="From first message to first glide — it's quick." />
            <div className="rn-grid rn-grid--3">
              {PROCESS.map((p, i) => (
                <div key={p.n} style={{ background: "#fff", border: "2px solid #000", padding: 28, position: "relative" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 0.8,
                    color: ["var(--red-600)","var(--blue-500)","var(--green-500)"][i], display: "block", marginBottom: 12 }}>{p.n}</span>
                  <h3 className="display" style={{ fontSize: 28, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{p.desc}</p>
                  {i < PROCESS.length - 1 ? (
                    <i className="ph-fill ph-arrow-right" style={{ position: "absolute", right: -20, top: "50%",
                      transform: "translateY(-50%)", fontSize: 30, color: "var(--yellow-500)", zIndex: 2 }}></i>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="Simple pricing" title="Rates &amp; what's included"
              lead="Pay by the hour. Everything you need to skate is part of the price." />
            <div className="rn-grid rn-grid--2">
              {SERVICES.map((s, i) => (
                <div key={s.key} style={{ border: "3px solid var(--ink-900)", background: "#fff" }}>
                  <div style={{ background: i === 0 ? "var(--red-600)" : "var(--ink-900)", color: "#fff", padding: "22px 28px",
                    display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="display" style={{ fontSize: 30, color: "#fff" }}>{s.name}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1 }}>
                      {s.price}<span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700 }}> {s.unit}</span>
                    </span>
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                    {["Full protection kit + loaner skates", "Flexible time — slots till midnight", "Bukit Jalil or a location near you", ...s.points.slice(0,1)].map((p) => (
                      <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15.5, fontWeight: 600, color: "var(--ink-900)" }}>
                        <i className="ph-fill ph-check-circle" style={{ color: s.accent, fontSize: 20, flexShrink: 0 }}></i>{p}
                      </li>
                    ))}
                  </ul>
                  <div style={{ padding: "0 28px 28px" }}>
                    <SBtn variant={i === 0 ? "primary" : "dark"} size="md" style={{ width: "100%" }}
                      onClick={() => (window.location.href = "contact.html")}>Book — {s.price}{s.unit}</SBtn>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 20, fontSize: 14, color: "var(--text-muted)", fontWeight: 600 }}>
              Prices are per hour, per skater. Message us for multi-session or group enquiries.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="rn-section" style={{ background: "var(--surface-sunken)" }}>
          <div className="rn-wrap">
            <SectionHead eyebrow="Skater stories" title="Loved by our skaters" />
            <div className="rn-grid rn-grid--3">
              {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} t={t} />)}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rn-section">
          <div className="rn-wrap" style={{ maxWidth: 820 }}>
            <SectionHead eyebrow="Good to know" title="Frequently asked" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQ.map((item, i) => (
                <FaqItem key={i} item={item} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Services />);
