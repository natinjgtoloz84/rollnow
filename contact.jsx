const { Button: CBtn, Badge: CBadge, Card: CCard, Input: CInput, Select: CSelect } = window.RollNowDesignSystem_2adbdf;

const CONTACT_METHODS = [
  { icon: "ph-phone-call", label: "Call us", value: "012-1234567", href: "tel:+60121234567", color: "var(--red-600)" },
  { icon: "ph-whatsapp-logo", label: "WhatsApp", value: "Message to book", href: "https://wa.me/60121234567", color: "var(--green-500)" },
  { icon: "ph-instagram-logo", label: "Instagram", value: "@natingtoloz", href: "https://www.instagram.com/natingtoloz?igsh=MWIweHIxbmxwdDg3cA%3D%3D&utm_source=qr", color: "var(--blue-500)" },
];

const SOCIAL_C = [
  { icon: "ph-instagram-logo", label: "Instagram", href: "https://www.instagram.com/natingtoloz?igsh=MWIweHIxbmxwdDg3cA%3D%3D&utm_source=qr", color: "#E1306C", grad: true },
  { icon: "ph-facebook-logo", label: "Facebook", href: "https://www.facebook.com/share/19AEJHzGhK/?mibextid=wwXIfr", color: "#1877F2" },
  { icon: "ph-note", label: "RedNote", href: "https://xhslink.com/m/2omPPTkFxzm", color: "#FF2442" },
];

function Contact() {
  return (
    <React.Fragment>
      <Nav active="contact" />
      <main className="rn-main">

        {/* Header */}
        <section className="rn-section rn-section--tight" style={{ background: "var(--red-600)", borderBottom: "3px solid var(--ink-900)" }}>
          <div className="rn-wrap">
            <Dots style={{ marginBottom: 18 }} />
            <h1 className="display display--xl display--on-dark" style={{ maxWidth: 820 }}>Let's get you rolling</h1>
            <p className="lead" style={{ color: "#fff", marginTop: 16, fontWeight: 600 }}>
              One message is all it takes. Tell us your level and when you're free — we'll handle the rest.
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="Reach us" title="Get in touch" lead="Pick whichever's easiest — we reply fast." />
            <div className="rn-grid rn-grid--3">
              {CONTACT_METHODS.map((m) => (
                <a key={m.label} href={m.href} target="_blank" rel="noreferrer"
                  style={{ background: "#fff", border: "2px solid var(--ink-900)", padding: 28, display: "block", color: "inherit" }}>
                  <div style={{ width: 56, height: 56, background: m.color, border: "2px solid #000",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <i className={"ph-bold " + m.icon} style={{ fontSize: 28, color: "var(--ink-900)" }}></i>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--red-600)", marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--ink-900)" }}>{m.value}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Hours + Location + Form */}
        <section className="rn-section" style={{ background: "var(--surface-sunken)" }}>
          <div className="rn-wrap">
            <div className="split-grid" style={{ alignItems: "start" }}>

              {/* Left: hours + location */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <CCard accent="var(--yellow-500)" padding="28px">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <i className="ph-bold ph-clock" style={{ fontSize: 26, color: "var(--ink-900)" }}></i>
                    <h3 className="display" style={{ fontSize: 28, margin: 0 }}>Session Times</h3>
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-100)", paddingBottom: 10, fontWeight: 600 }}>
                      <span>Tuesday</span><span style={{ fontWeight: 800 }}>10:00 AM</span></li>
                    <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--ink-100)", paddingBottom: 10, fontWeight: 600 }}>
                      <span>Friday</span><span style={{ fontWeight: 800 }}>9:00 AM</span></li>
                    <li style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--ink-900)", fontWeight: 700, background: "var(--green-500)", border: "2px solid #000", padding: "10px 12px", marginTop: 4 }}>
                      <i className="ph-fill ph-moon-stars" style={{ fontSize: 18 }}></i> Flexible slots available till midnight</li>
                  </ul>
                </CCard>

                <CCard accent="var(--blue-500)" padding="28px">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <i className="ph-bold ph-map-pin" style={{ fontSize: 26, color: "var(--ink-900)" }}></i>
                    <h3 className="display" style={{ fontSize: 28, margin: 0 }}>Where We Skate</h3>
                  </div>
                  <p style={{ fontWeight: 800, fontSize: 18, margin: "0 0 4px", color: "var(--ink-900)" }}>Stadium Bukit Jalil</p>
                  <p style={{ margin: "0 0 16px", color: "var(--text-body)", fontWeight: 600 }}>Kuala Lumpur, Malaysia</p>
                  <div style={{ border: "2px solid #000", height: 190, overflow: "hidden" }}>
                    <iframe
                      title="Stadium Bukit Jalil map"
                      src="https://www.google.com/maps?q=Stadium+Bukit+Jalil,+Kuala+Lumpur&output=embed"
                      style={{ border: 0, width: "100%", height: "100%", display: "block", filter: "grayscale(0.1) contrast(1.05)" }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen></iframe>
                  </div>
                  <a href="https://maps.app.goo.gl/DV1R4atsjDPKDnB58" target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontWeight: 700, fontSize: 14 }}>
                    <i className="ph-bold ph-navigation-arrow" style={{ fontSize: 16 }}></i> Open in Google Maps
                  </a>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, marginBottom: 0, fontWeight: 600 }}>
                    Prefer a spot closer to you? Ask us — location is flexible.
                  </p>
                </CCard>
              </div>

              {/* Right: quick enquiry form */}
              <CCard accent="var(--red-600)" padding="32px">
                <h3 className="display display--md" style={{ fontSize: 32, marginBottom: 6 }}>Quick enquiry</h3>
                <p style={{ margin: "0 0 22px", color: "var(--text-body)", fontSize: 15 }}>
                  Send your details and we'll reply with a time. Or just call 012-1234567.
                </p>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const inputs = form.querySelectorAll("input");
                  const sel = form.querySelector("select");
                  const name = (inputs[0] && inputs[0].value.trim()) || "-";
                  const phone = (inputs[1] && inputs[1].value.trim()) || "-";
                  const day = (inputs[2] && inputs[2].value.trim()) || "-";
                  const course = sel ? sel.options[sel.selectedIndex].text : "-";
                  const msg =
                    "Hi Roll Now! I'd like to book a session.\n\n" +
                    "Name: " + name + "\n" +
                    "Phone / WhatsApp: " + phone + "\n" +
                    "Course: " + course + "\n" +
                    "Preferred day / time: " + day;
                  window.open("https://wa.me/60121234567?text=" + encodeURIComponent(msg), "_blank");
                  const t = document.getElementById("rn-sent");
                  if (t) t.style.display = "flex";
                  form.reset();
                }}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <CInput label="Your name" placeholder="e.g. Rachel Lim" />
                  <CInput label="Phone / WhatsApp" placeholder="012-3456789" type="tel" />
                  <CSelect label="Which course?" options={[
                    { value: "beginner", label: "1-to-1 Beginner Course — RM100/hr" },
                    { value: "skill", label: "Skill Training — RM80/hr" },
                    { value: "unsure", label: "Not sure yet — help me choose" },
                  ]} />
                  <CInput label="Preferred day / time" placeholder="e.g. Friday evening" />
                  <CBtn variant="primary" size="lg" type="submit" style={{ width: "100%" }}>Send Enquiry →</CBtn>
                  <div id="rn-sent" style={{ display: "none", alignItems: "center", gap: 8, background: "var(--green-500)",
                    border: "2px solid #000", padding: "12px 14px", fontWeight: 700, color: "var(--ink-900)", fontSize: 14 }}>
                    <i className="ph-fill ph-check-circle" style={{ fontSize: 20 }}></i> Opening WhatsApp — just hit send to reach us!
                  </div>
                </form>
              </CCard>

            </div>
          </div>
        </section>

        {/* Social + CTA */}
        <section className="rn-section" style={{ background: "var(--ink-900)", textAlign: "center" }}>
          <div className="rn-wrap">
            <p className="eyebrow eyebrow--light">Follow the roll</p>
            <h2 className="display display--lg display--on-dark" style={{ marginBottom: 24 }}>Catch us on social</h2>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 34, flexWrap: "wrap" }}>
              {SOCIAL_C.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  style={{ width: 58, height: 58, background: "#fff", border: "2px solid #000", display: "flex",
                    alignItems: "center", justifyContent: "center", color: "var(--ink-900)" }}>
                  <i className={"ph-bold " + s.icon + (s.grad ? " rn-ig-grad" : "")}
                     style={{ fontSize: 26, color: s.grad ? undefined : s.color }}></i>
                </a>
              ))}
            </div>
            <CBtn variant="primary" size="lg" onClick={() => (window.location.href = "https://wa.me/60121234567")}>Book a Session Now</CBtn>
          </div>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Contact />);
