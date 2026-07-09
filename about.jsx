const { Button: ABtn, Badge: ABadge, Card: ACard } = window.RollNowDesignSystem_2adbdf;

const VALUES = [
  { icon: "ph-hand-heart", title: "Patience first", desc: "We move at your pace. No drills you're not ready for, no ego, no rush." },
  { icon: "ph-user-focus", title: "One-on-one only", desc: "Every session is fully yours. All the coaching attention, none of the group noise." },
  { icon: "ph-lightning", title: "Real progress", desc: "Structured steps that build fast — you'll feel the difference session to session." },
];

function About() {
  return (
    <React.Fragment>
      <Nav active="about" />
      <main className="rn-main">

        {/* Page header */}
        <section className="rn-section rn-section--tight" style={{ background: "var(--ink-900)", borderBottom: "3px solid var(--ink-900)" }}>
          <div className="rn-wrap">
            <Dots style={{ marginBottom: 18 }} />
            <p className="eyebrow eyebrow--light">Who we are</p>
            <h1 className="display display--xl display--on-dark" style={{ maxWidth: 900 }}>The story behind the wheels</h1>
            <p className="lead" style={{ color: "#C7C8D2", marginTop: 18 }}>
              Roll Now started with one coach, a set of loaner skates, and a simple belief: anyone can learn to skate if someone patient shows them how.
            </p>
          </div>
        </section>

        {/* Brand story */}
        <section className="rn-section">
          <div className="rn-wrap">
            <div className="split-grid">
              <div>
                <p className="eyebrow">Our story</p>
                <h2 className="display display--md" style={{ marginBottom: 20 }}>Born on the late-night rink</h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text-body)", marginBottom: 16 }}>
                  It began at Stadium Bukit Jalil, after hours. Steven noticed the same thing every week — people who wanted to skate but felt too old, too nervous, or too busy to ever start. Group classes moved too fast. Watching videos didn't build real balance.
                </p>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text-body)", marginBottom: 16 }}>
                  So Roll Now was built around the opposite idea: one skater, one coach, one flexible time slot. Beginners start from standing up and falling safely. More experienced skaters sharpen crossovers and control. Everyone gets the full protection kit and all the attention.
                </p>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>
                  Today that's still the whole mission — make inline skating approachable, safe, and genuinely fun, on a schedule that fits real life.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { big: "1-to-1", label: "Every session, fully yours", color: "var(--red-600)", dark: true },
                  { big: "Till 12", label: "Flexible slots up to midnight", color: "var(--yellow-500)" },
                  { big: "0 → Roll", label: "Complete beginners welcome", color: "var(--green-500)" },
                ].map((b) => (
                  <div key={b.label} style={{ background: b.color, border: "3px solid var(--ink-900)", padding: "24px 28px",
                    display: "flex", alignItems: "baseline", gap: 18, color: b.dark ? "#fff" : "var(--ink-900)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 46, lineHeight: 0.9 }}>{b.big}</span>
                    <span style={{ fontWeight: 700, fontSize: 16 }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="rn-section" style={{ background: "var(--surface-sunken)" }}>
          <div className="rn-wrap">
            <SectionHead eyebrow="What we stand for" title="How we coach" />
            <div className="rn-grid rn-grid--3">
              {VALUES.map((v) => (
                <div key={v.title} style={{ background: "#fff", border: "2px solid #000", padding: 28 }}>
                  <i className={"ph-bold " + v.icon} style={{ fontSize: 34, color: "var(--red-600)" }}></i>
                  <h3 className="display" style={{ fontSize: 26, margin: "16px 0 10px" }}>{v.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="rn-section">
          <div className="rn-wrap">
            <p className="eyebrow">The founder</p>
            <h2 className="display display--md" style={{ marginBottom: 36 }}>Meet your coach</h2>
            <ACard padding="0" accent="var(--red-600)">
              <div className="split-grid" style={{ gap: 0, alignItems: "stretch" }}>
                <div style={{ background: "var(--ink-900)", minHeight: 320, position: "relative", display: "flex",
                  alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage:
                    "repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0 18px, transparent 18px 36px)" }}></div>
                  <div style={{ width: 150, height: 150, background: "var(--yellow-500)", border: "3px solid #fff",
                    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)",
                    fontSize: 88, color: "var(--ink-900)", position: "relative" }}>SO</div>
                  <div style={{ position: "absolute", bottom: 20, left: 20 }}><Dots /></div>
                </div>
                <div style={{ padding: "40px 40px" }}>
                  <ABadge tone="primary">Founder &amp; Head Coach</ABadge>
                  <h3 className="display display--md" style={{ fontSize: 44, margin: "16px 0 6px" }}>Steven Ong</h3>
                  <p style={{ fontWeight: 700, color: "var(--red-600)", margin: "0 0 18px" }}>The one who'll be right beside you.</p>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", marginBottom: 16 }}>
                    Steven has spent years on eight wheels — and just as long teaching others to find their balance. He built Roll Now so that first-timers never feel silly and improvers never feel stuck.
                  </p>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>
                    Calm, encouraging, and relentlessly patient, he'll have you rolling before you even notice the nerves are gone.
                  </p>
                  <div style={{ marginTop: 26 }}>
                    <ABtn variant="primary" size="md" onClick={() => (window.location.href = "contact.html")}>Train with Steven</ABtn>
                  </div>
                </div>
              </div>
            </ACard>
          </div>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<About />);
