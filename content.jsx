/* Shared content data + reusable content blocks for ROLL NOW */
const { Button: RBtn, Badge: RBadge, Card: RCard } = window.RollNowDesignSystem_2adbdf;

const SERVICES = [
  {
    key: "beginner",
    name: "1-to-1 Beginner Course",
    price: "RM100",
    unit: "/ hour",
    accent: "var(--red-600)",
    badge: "Most Popular",
    tone: "primary",
    tagline: "From your very first steps.",
    desc: "Never skated before? We start at zero — standing up, balance, safe stopping, falling without fear, and your first real glides. One coach, all eyes on you.",
    points: ["Complete beginners welcome", "Balance, braking & falling safely", "Full protection kit provided"],
    img: "assets/courses/beginner.jpg",
  },
  {
    key: "skill",
    name: "Skill Training",
    price: "RM80",
    unit: "/ hour",
    accent: "var(--blue-500)",
    badge: "Level Up",
    tone: "info",
    tagline: "For skaters ready to push further.",
    desc: "Already rolling? Sharpen your control. Crossovers, backward skating, tight turns, agility and the confidence to handle any surface with speed.",
    points: ["Crossovers & backward skating", "Agility, control & speed", "Personalised drills each session"],
    img: "assets/courses/skill.jpg",
  },
];

const WHY = [
  {
    icon: "ph-moon-stars",
    color: "var(--yellow-500)",
    title: "Skate Till Midnight",
    desc: "Day job, night owl, weekend warrior — book flexible slots right up to midnight. Your schedule sets the pace.",
  },
  {
    icon: "ph-shield-check",
    color: "var(--green-500)",
    title: "Full Protection Kit",
    desc: "Helmet, wrist guards, knee and elbow pads — plus loaner skates. Just show up in comfy clothes and roll.",
  },
  {
    icon: "ph-map-pin",
    color: "var(--blue-500)",
    title: "Flexible Location",
    desc: "We meet at Stadium Bukit Jalil by default, or pick a smooth spot near you. Wherever you skate, we come to coach.",
  },
];

const PROCESS = [
  { n: "01", title: "Consult", desc: "Tell us your level and goals. We match you to the right course and answer every question." },
  { n: "02", title: "Book Time & Location", desc: "Choose a slot that fits your week — anytime up to midnight — and where you'd like to skate." },
  { n: "03", title: "Start Training", desc: "Gear on, coach ready. Show up and start rolling from your very first session." },
];

const TESTIMONIALS = [
  { quote: "Went from wobbling on the spot to carving smooth laps in three sessions. Steven never once rushed me.", name: "Rachel Lim", role: "Beginner Course", accent: "var(--green-500)" },
  { quote: "I booked a 10 PM slot after work and loved every minute. No more excuses about being too busy.", name: "Daniel Tan", role: "Skill Training", accent: "var(--yellow-500)" },
  { quote: "Full gear was provided so I just turned up and skated. Felt safe the whole way through.", name: "Priya Nair", role: "Beginner Course", accent: "var(--blue-500)" },
];

const FAQ = [
  { q: "Do I need my own skates or gear?", a: "No. A full protection kit — helmet, wrist guards, knee and elbow pads — plus loaner skates are provided. Just wear comfortable clothes and bring water." },
  { q: "Can I really book a session till midnight?", a: "Yes. We run flexible slots right up to midnight, subject to availability. Message us and we'll find a time that fits your week." },
  { q: "Where do the sessions take place?", a: "Our home base is Stadium Bukit Jalil, but location is flexible. If there's a smoother, closer spot that works for you, we can meet you there." },
  { q: "I've genuinely never skated before — is that okay?", a: "Absolutely. The 1-to-1 Beginner Course is built for total first-timers. We start from standing and balance, at your pace, with zero pressure." },
  { q: "How do I book and pay?", a: "Message us at 012-1234567 or on WhatsApp to lock in your time and location. We'll confirm everything before your session." },
];

/* ---- reusable blocks ---- */
function ServiceCard({ s, index }) {
  return (
    <RCard accent={s.accent} padding="0" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "28px 28px 0" }}>
        {s.img ? (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <div style={{ width: 132, height: 132, borderRadius: "50%", overflow: "hidden",
              border: "4px solid var(--ink-900)", background: s.accent, flexShrink: 0 }}>
              <img src={s.img} alt={s.name} loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        ) : null}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
          <RBadge tone={s.tone}>{s.badge}</RBadge>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1, color: "var(--ink-900)" }}>
            {s.price}<span style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, color: "var(--ink-500)" }}> {s.unit}</span>
          </span>
        </div>
        <h3 className="display display--md" style={{ fontSize: 34, marginBottom: 8 }}>{s.name}</h3>
        <p style={{ fontWeight: 700, color: "var(--red-600)", margin: "0 0 12px", fontSize: 15 }}>{s.tagline}</p>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{s.desc}</p>
      </div>
      <ul style={{ listStyle: "none", padding: "20px 28px 0", margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {s.points.map((p) => (
          <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15, fontWeight: 600, color: "var(--ink-900)" }}>
            <i className="ph-fill ph-check-circle" style={{ color: s.accent, fontSize: 20 }}></i>{p}
          </li>
        ))}
      </ul>
      <div style={{ padding: 28, marginTop: "auto" }}>
        <RBtn variant={index === 0 ? "primary" : "dark"} size="md" style={{ width: "100%" }}
              onClick={() => (window.location.href = "contact.html")}>
          Book This Course
        </RBtn>
      </div>
    </RCard>
  );
}

function TestimonialCard({ t }) {
  return (
    <RCard accent={t.accent} padding="28px">
      <div style={{ display: "flex", gap: 4, marginBottom: 14, color: "var(--yellow-500)" }}>
        {[0,1,2,3,4].map((i) => <i key={i} className="ph-fill ph-star" style={{ fontSize: 18 }}></i>)}
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.55, fontWeight: 600, color: "var(--ink-900)", margin: "0 0 20px" }}>
        “{t.quote}”
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 40, height: 40, background: t.accent, border: "2px solid var(--ink-900)",
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)",
          fontSize: 20, color: "var(--ink-900)" }}>{t.name.charAt(0)}</span>
        <div>
          <div style={{ fontWeight: 800, color: "var(--ink-900)", fontSize: 15 }}>{t.name}</div>
          <div style={{ fontSize: 13, color: "var(--ink-500)", fontWeight: 600 }}>{t.role}</div>
        </div>
      </div>
    </RCard>
  );
}

Object.assign(window, { SERVICES, WHY, PROCESS, TESTIMONIALS, FAQ, ServiceCard, TestimonialCard });
