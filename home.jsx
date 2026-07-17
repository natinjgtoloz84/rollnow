const { Button: HBtn, Badge: HBadge, Card: HCard } = window.RollNowDesignSystem_2adbdf;
const { useState: useStateH, useEffect: useEffectH } = React;

function HeroBanner() {
  const words = ["ROLLING", "GLIDING", "CARVING", "FLYING"];
  const [i, setI] = useStateH(0);
  useEffectH(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);
  const marquee = ["ROLL NOW", "BEGINNERS WELCOME", "GEAR INCLUDED", "SKATE TILL MIDNIGHT", "BUKIT JALIL"];
  return (
    <section className="rn-banner">
      <div className="rn-banner__photo" style={{ backgroundImage: "url('assets/skater-hero.jpg')" }}></div>
      <div className="rn-banner__scrim"></div>
      {/* spinning skate wheels */}
      <div className="rn-wheel" style={{ width: 76, height: 76, top: "15%", right: "9%" }}></div>
      <div className="rn-wheel" style={{ width: 50, height: 50, top: "36%", right: "18%", animationDuration: "1.9s" }}></div>
      <div className="rn-wheel" style={{ width: 62, height: 62, bottom: "22%", right: "11%", animationDuration: "3.2s" }}></div>
      <i className="ph-fill ph-arrow-right rn-banner__arrow"></i>

      <div className="rn-banner__content">
        <div className="rn-wrap">
          <div className="rn-pop" style={{ marginBottom: 20 }}><Dots /></div>
          <p className="eyebrow eyebrow--light rn-pop" style={{ marginBottom: 14 }}>Inline Skate Training · Kuala Lumpur</p>
          <h1 className="display display--on-dark rn-pop-2" style={{ fontSize: "clamp(52px, 10vw, 118px)", lineHeight: 0.9 }}>
            Stop walking.<br/>
            Start <span className="rn-word"><span key={i}>{words[i]}</span></span>.
          </h1>
          <p className="lead rn-pop-3" style={{ color: "#D7D8E0", marginTop: 22, fontWeight: 600 }}>
            1-to-1 coaching that takes you from your first wobble to a smooth glide — on your schedule, with all the gear.
          </p>
          <div className="rn-pop-3" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <HBtn variant="primary" size="lg" onClick={() => (window.location.href = "contact.html")}>Book a Session</HBtn>
            <HBtn variant="secondary" size="lg" onClick={() => (window.location.href = "services.html")}>See Courses</HBtn>
          </div>
        </div>
      </div>

      <div className="rn-marquee">
        <div className="rn-marquee__track">
          {[0, 1].map((dup) => (
            <span key={dup}>
              {marquee.map((m, k) => (
                <React.Fragment key={k}>{m}<i className="ph-fill ph-arrow-right" style={{ fontSize: 18 }}></i></React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const photos = [
    { src: "assets/gallery/g1.jpg", w: 210, h: 280, rot: -5, cap: "Marina laps" },
    { src: "assets/gallery/g5.jpg", w: 320, h: 220, rot: 3, cap: "First jumps" },
    { src: "assets/gallery/g2.jpg", w: 200, h: 290, rot: 4, cap: "Good vibes" },
    { src: "assets/gallery/g4.jpg", w: 330, h: 225, rot: -3, cap: "Session time" },
    { src: "assets/gallery/g7.jpg", w: 205, h: 285, rot: 5, cap: "Lacing up" },
    { src: "assets/gallery/g6.jpg", w: 210, h: 300, rot: -4, cap: "Boardwalk" },
    { src: "assets/gallery/g3.jpg", w: 300, h: 210, rot: 2, cap: "Ramp drop" },
    { src: "assets/gallery/g8.jpg", w: 320, h: 215, rot: -2, cap: "Wheels ready" },
  ];
  const doubled = [...photos, ...photos];
  return (
    <div className="rn-gallery rn-gallery--dark">
      <div className="rn-gallery__track">
        {doubled.map((p, i) => (
          <div key={i} className="rn-frame" style={{ width: p.w, transform: `rotate(${p.rot}deg)` }} aria-hidden={i >= photos.length}>
            <div className="rn-frame__pic" style={{ height: p.h }}>
              {/* SEO: descriptive, keyword-rich alt for every montage photo */}
              <img src={p.src} alt={`${p.cap} — Roll Now inline skate training in Kuala Lumpur`} loading="lazy" />
            </div>
            <div className="rn-frame__cap">{p.cap}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  useEffectH(() => {
    const els = document.querySelectorAll(".rn-reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <React.Fragment>
      <Nav active="home" />
      <main className="rn-main">

        {/* ANIMATED HERO BANNER */}
        <HeroBanner />

        {/* BRAND INTRO */}
        <section className="rn-section" style={{ background: "var(--surface-sunken)" }}>
          <div className="rn-wrap" style={{ textAlign: "center", maxWidth: 820 }}>
            <Dots style={{ marginBottom: 20 }} />
            <p className="display display--md" style={{ lineHeight: 1.08 }}>
              We turn nervous first-timers into confident skaters — one patient session at a time.
            </p>
            <p className="lead" style={{ margin: "22px auto 0", textAlign: "center" }}>
              No group classes, no rushing, no judgment. Just focused inline skate coaching that fits your life and gets you rolling faster than you'd think.
            </p>
          </div>
        </section>

        {/* FEATURED SERVICES */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="What we offer" title="Featured Courses"
              lead="Two ways to roll — whether you've never laced up or you're chasing your next trick." />
            <div className="rn-grid rn-grid--2">
              {SERVICES.map((s, i) => (
                <div key={s.key} className="rn-reveal" style={{ transitionDelay: `${i * 130}ms`, display: "flex", flexDirection: "column" }}>
                  <ServiceCard s={s} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="rn-section" style={{ background: "var(--ink-900)" }}>
          <div className="rn-wrap">
            <SectionHead light eyebrow="Why Roll Now" title="Built around you"
              lead="Three reasons skaters keep coming back." />
            <div className="rn-grid rn-grid--3">
              {WHY.map((w, i) => (
                <div key={w.title} className="rn-reveal" style={{ transitionDelay: `${i * 130}ms`, background: "#fff", border: "2px solid #000", padding: 28 }}>
                  <div style={{ width: 56, height: 56, background: w.color, border: "2px solid #000",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <i className={"ph-bold " + w.icon} style={{ fontSize: 28, color: "var(--ink-900)" }}></i>
                  </div>
                  <h3 className="display" style={{ fontSize: 26, marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section style={{ background: "var(--ink-900)", paddingTop: 56, borderTop: "3px solid var(--ink-900)" }}>
          <div className="rn-wrap">
            <SectionHead light eyebrow="On the ground" title="Life at Roll Now"
              lead="Real skaters, real sessions — a glimpse of the fun." />
          </div>
          <GalleryStrip />
        </section>

        {/* TESTIMONIALS */}
        <section className="rn-section">
          <div className="rn-wrap">
            <SectionHead eyebrow="Skater stories" title="What our skaters say" />
            <div className="rn-grid rn-grid--3">
              {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} t={t} />)}
            </div>
          </div>
        </section>

        {/* CTA to contact */}
        <section className="rn-section--tight rn-section" style={{ background: "var(--yellow-500)", borderTop: "var(--border-width-default) solid var(--ink-900)" }}>
          <div className="rn-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div>
              <h2 className="display display--md" style={{ marginBottom: 8 }}>Your first glide is one message away.</h2>
              <p style={{ fontWeight: 600, fontSize: 17, margin: 0, color: "var(--ink-900)" }}>Call or WhatsApp 012-1234567 — we'll sort out a time.</p>
            </div>
            <HBtn variant="dark" size="lg" onClick={() => (window.location.href = "contact.html")}>Contact Us →</HBtn>
          </div>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
