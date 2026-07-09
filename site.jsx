/* Shared chrome for the ROLL NOW site: top nav + footer + small primitives.
   Exposed on window so each page script can use them. */
const { useState, useEffect } = React;
const RN = window.RollNowDesignSystem_2adbdf || {};
const { Button, Badge, Card } = RN;

const NAV = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About Us", href: "about.html", key: "about" },
  { label: "Services", href: "services.html", key: "services" },
  { label: "Shop", href: "products.html", key: "products" },
  { label: "Contact", href: "contact.html", key: "contact" },
];

const SOCIAL = [
  { icon: "ph-instagram-logo", label: "Instagram", href: "https://www.instagram.com/natingtoloz?igsh=MWIweHIxbmxwdDg3cA%3D%3D&utm_source=qr", color: "#E1306C", grad: true },
  { icon: "ph-facebook-logo", label: "Facebook", href: "https://www.facebook.com/share/19AEJHzGhK/?mibextid=wwXIfr", color: "#1877F2" },
  { icon: "ph-note", label: "RedNote", href: "https://xhslink.com/m/2omPPTkFxzm", color: "#FF2442" },
];

function Dots({ style }) {
  return (
    <span className="rn-dots" style={style}><span></span><span></span><span></span></span>
  );
}

function Ph({ name, size = 20, weight = "bold", style }) {
  return <i className={`ph-${weight} ${name}`} style={{ fontSize: size, lineHeight: 1, ...style }}></i>;
}

function useCartCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const read = () => {
      try {
        const c = JSON.parse(localStorage.getItem("rn-cart") || "{}");
        setCount(Object.values(c).reduce((s, n) => s + n, 0));
      } catch (e) { setCount(0); }
    };
    read();
    window.addEventListener("rn-cart-change", read);
    window.addEventListener("storage", read);
    return () => { window.removeEventListener("rn-cart-change", read); window.removeEventListener("storage", read); };
  }, []);
  return count;
}

function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const cartCount = useCartCount();
  return (
    <React.Fragment>
      <nav className="rn-nav">
        <div className="rn-nav__inner">
          <a className="rn-nav__logo" href="index.html" aria-label="Roll Now home">
            <img src="assets/logo.png" alt="Roll Now" />
          </a>
          <div className="rn-nav__links">
            {NAV.map((n) => (
              <a key={n.key} href={n.href}
                 className={"rn-nav__link" + (active === n.key ? " rn-nav__link--active" : "")}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="rn-nav__cta">
            <Button variant="primary" size="sm" onClick={() => (window.location.href = "contact.html")}>
              Book a Session
            </Button>
          </div>
          <a href="checkout.html" className="rn-nav__cart" aria-label={"Cart, " + cartCount + " items"}>
            <i className="ph-bold ph-shopping-cart-simple" style={{ fontSize: 22 }}></i>
            {cartCount > 0 ? <span className="rn-nav__cart-badge">{cartCount}</span> : null}
          </a>
          <button className="rn-nav__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <Ph name={open ? "ph-x" : "ph-list"} size={22} style={{ color: "#fff" }} />
          </button>
        </div>
      </nav>
      <div className={"rn-mobile" + (open ? " is-open" : "")}>
        {NAV.map((n) => (
          <a key={n.key} href={n.href}
             className={active === n.key ? "rn-nav__link--active" : ""}>{n.label}</a>
        ))}
        <a href="checkout.html">Cart{cartCount > 0 ? " (" + cartCount + ")" : ""}</a>
        <a href="contact.html" style={{ color: "var(--red-600)" }}>Book a Session →</a>
      </div>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <footer className="rn-footer">
      {/* CTA band */}
      <div className="rn-foot-cta">
        <div className="rn-wrap">
          <Dots style={{ marginBottom: 18 }} />
          <h2 className="display display--lg display--on-dark" style={{ marginBottom: 18 }}>
            Ready to roll?
          </h2>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: 600, maxWidth: 540, margin: "0 auto 28px" }}>
            Book your first session and skate on your own schedule — gear included.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="dark" size="lg" onClick={() => (window.location.href = "contact.html")}>
              Book a Session
            </Button>
            <Button variant="secondary" size="lg" onClick={() => (window.location.href = "services.html")}>
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* columns */}
      <div className="rn-wrap">
        <div className="rn-foot-grid rn-foot">
          <div>
            <div className="rn-foot__logo" style={{ marginBottom: 16 }}>
              <img src="assets/logo.png" alt="Roll Now" />
            </div>
            <p style={{ color: "#B9BAC6", fontSize: 15, lineHeight: 1.6, maxWidth: 300, margin: "0 0 14px" }}>
              1-to-1 inline skate training in Kuala Lumpur. Flexible times, full gear, your pace.
            </p>
            <div className="rn-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  <i className={"ph-bold " + s.icon + (s.grad ? " rn-ig-grad" : "")}
                     style={{ fontSize: 20, lineHeight: 1, color: s.grad ? undefined : s.color }}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.map((n) => (<li key={n.key}><a href={n.href}>{n.label}</a></li>))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+60121234567">012-1234567</a></li>
              <li><a href="https://wa.me/60121234567" target="_blank" rel="noreferrer">WhatsApp us</a></li>
              <li>Stadium Bukit Jalil,<br/>Kuala Lumpur</li>
            </ul>
          </div>

          <div>
            <h4>Session Times</h4>
            <ul>
              <li>Tuesday — 10:00 AM</li>
              <li>Friday — 9:00 AM</li>
              <li style={{ color: "#7DCD85", fontWeight: 700 }}>Flexible slots till midnight</li>
            </ul>
            <div style={{ marginTop: 16 }}>
              <Button variant="primary" size="sm" onClick={() => (window.location.href = "contact.html")}>
                Get Rolling →
              </Button>
            </div>
          </div>
        </div>
        <div className="rn-foot__bottom">
          <span>© 2026 Roll Now. All rights reserved.</span>
          <span>Head coach: Steven Ong</span>
        </div>
      </div>
    </footer>
  );
}

/* Section header helper */
function SectionHead({ eyebrow, title, lead, light, titleClass = "display--md" }) {
  return (
    <div className="section-head">
      {eyebrow ? <p className={"eyebrow" + (light ? " eyebrow--light" : "")}>{eyebrow}</p> : null}
      <h2 className={"display " + titleClass + (light ? " display--on-dark" : "")}>{title}</h2>
      {lead ? <p className="lead" style={{ marginTop: 18, color: light ? "#C7C8D2" : undefined }}>{lead}</p> : null}
    </div>
  );
}

Object.assign(window, { Nav, Footer, Dots, Ph, SectionHead, RN });

/* ---- custom spinning-wheel cursor with black trail ---- */
(function setupWheelCursor() {
  if (window.__rnCursor) return;
  if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  window.__rnCursor = true;
  document.documentElement.classList.add("rn-has-cursor");

  const cursor = document.createElement("div");
  cursor.className = "rn-cursor";
  cursor.innerHTML = '<div class="rn-cursor__w"></div>';
  document.body.appendChild(cursor);

  let last = 0;
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
    cursor.style.opacity = "1";
    const now = e.timeStamp;
    if (now - last > 38) {
      last = now;
      const dot = document.createElement("div");
      dot.className = "rn-trail";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 650);
    }
  });
  document.addEventListener("mouseleave", () => { cursor.style.opacity = "0"; });
  document.addEventListener("mouseenter", () => { cursor.style.opacity = "1"; });
})();
