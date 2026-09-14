import { useEffect, useRef, useState } from "react";
import profilePhoto from "@/imports/Timothy_Alum.jpeg";

/* ── data ─────────────────────────────────────────────────────────────────── */

const NAV_LINKS = ["About", "Skills", "Experience", "Education", "Contact"];

const COMPETENCIES = [
  { label: "HSE Supervision", pct: 95 },
  { label: "Drone Operations & Surveillance", pct: 92 },
  { label: "Regulatory Compliance (OSHA/ISO/DPR)", pct: 90 },
  { label: "Emergency Response & Crisis Management", pct: 88 },
  { label: "Incident Investigation & Root Cause Analysis", pct: 87 },
  { label: "Environmental Remediation", pct: 85 },
  { label: "Safety Training & Workforce Development", pct: 90 },
  { label: "Hazardous Waste Management", pct: 83 },
];

const EXPERIENCES = [
  {
    role: "HSE / Training Administrator",
    company: "Westend Diamond Energy Limited",
    location: "Port Harcourt, Nigeria",
    period: "Jan 2025 – Present",
    current: true,
    icon: "🛡️",
    bullets: [
      "Draft proposals, bids and engage stakeholders on contracts and prospective clients on training services.",
      "Develop and manage budgets aligned with job plans and client requirements.",
      "Conduct training for personnel on safe work procedures, achieving 100% compliance during drilling operations.",
      "Conduct emergency drills (fire, medivac, shallow gas diverter, security breach), improving average response time to 5 minutes.",
      "Champion HSE campaigns on drilling rigs and recommend corrective action points.",
      "Performed inspections of HSE critical equipment achieving 100% operational readiness.",
    ],
  },
  {
    role: "Drone Surveillance Operations Specialist",
    company: "Harvard Industrial Farms Limited",
    location: "Benue State, Nigeria",
    period: "Feb 2023 – Dec 2024",
    current: false,
    icon: "🚁",
    bullets: [
      "Conducted persistent aerial surveillance of high-value agricultural assets, contributing to a 15% reduction in operational losses.",
      "Expanded surveillance coverage across 45 hectares, enhancing situational awareness.",
      "Improved threat detection by analyzing drone-captured data to identify vulnerabilities proactively.",
      "Managed and trained a team of remote pilots and visual observers.",
      "Implemented structured data management for actionable intelligence delivery to management.",
    ],
  },
  {
    role: "Drone Operator",
    company: "Freelance",
    location: "Benue State, Nigeria",
    period: "Feb 2022 – Jan 2023",
    current: false,
    icon: "🎯",
    bullets: [
      "Safely piloted multi-rotor drones for daily surveillance missions over assets.",
      "Conducted pre-flight inspections and ensured compliance with local aviation regulations.",
      "Monitored live video feeds to identify unauthorized activity and security breaches.",
      "Captured high-resolution photos and video for asset documentation and incident evidence.",
      "Generated clear daily patrol reports logging flight hours and incident observations.",
    ],
  },
  {
    role: "HSE Supervisor",
    company: "Prompts Technological Services Limited",
    location: "Port Harcourt, Nigeria",
    period: "Jul 2020 – Jan 2022",
    current: false,
    icon: "⚙️",
    bullets: [
      "Supervised on-site operations ensuring compliance with HSE best practices.",
      "Implemented health and safety policies including illness and injury prevention programs.",
      "Facilitated toolbox meetings and safety training sessions fostering continuous improvement.",
      "Spearheaded bid document preparation contributing to major environmental restoration contracts.",
      "Developed and maintained effective emergency response plans and protocols.",
    ],
  },
  {
    role: "QHSSE Officer",
    company: "Prompts Technological Services Limited",
    location: "Port Harcourt, Nigeria",
    period: "Jun 2018 – Jun 2020",
    current: false,
    icon: "📋",
    bullets: [
      "Supervised on-site activities ensuring compliance with health, safety, and environmental regulations.",
      "Designed and managed comprehensive waste management procedures from collection to disposal.",
      "Maintained accurate HSE documentation including MSDS, inspection logs, and compliance records.",
      "Investigated workplace incidents and near misses, implementing corrective actions to prevent recurrence.",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "NEBOSH International General Certificate (IGC)", year: "2023", color: "#f59e0b" },
  { name: "IWCF Well Control Level 1", year: "2025", color: "#38bdf8" },
  { name: "IWCF Well Operations Crew Resource Management", year: "2025", color: "#38bdf8" },
  { name: "Recreational UAS Safety Test (TRUST)", year: "2026", color: "#a78bfa" },
  { name: "HSE Levels 1–3", year: "2019", color: "#34d399" },
  { name: "Environmental Impact Assessment (EIA)", year: "2019", color: "#34d399" },
  { name: "Basic First Aid / CPR", year: "2019", color: "#fb7185" },
  { name: "Process Safety Management", year: "2019", color: "#fb923c" },
  { name: "BSc Geography — First Class Honours", year: "2017", color: "#f59e0b" },
];

const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "100%", label: "Compliance Rate" },
  { value: "15%", label: "Loss Reduction" },
  { value: "45ha", label: "Surveillance Coverage" },
];

/* ── hooks ────────────────────────────────────────────────────────────────── */

function useInView(threshold = 0.18) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useScrollSpy() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      for (const id of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(id.toLowerCase());
        if (el && el.offsetTop <= y) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

/* ── sub-components ───────────────────────────────────────────────────────── */

function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref, visible } = useInView();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-reveal${visible ? " visible" : ""}`}
    >
      {children}
    </section>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <span
        style={{ fontFamily: "var(--font-mono)", color: "#f59e0b", fontSize: "0.75rem", letterSpacing: "0.2em" }}
        className="uppercase tracking-widest"
      >
        {label}
      </span>
      <h2
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}
        className="mt-2 text-white font-bold"
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg,#f59e0b,#38bdf8)" }} />
    </div>
  );
}

function SkillBar({ label, pct, delay, animate }: { label: string; pct: number; delay: number; animate: boolean }) {
  return (
    <div style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span style={{ fontFamily: "var(--font-mono)", color: "#f59e0b", fontSize: "0.78rem" }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "#1e2d4a" }}>
        <div
          className="skill-bar-fill h-full rounded-full"
          style={{
            "--skill-width": `${pct}%`,
            background: "linear-gradient(90deg,#f59e0b,#38bdf8)",
            width: animate ? `${pct}%` : "0%",
            transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

/* ── particles ────────────────────────────────────────────────────────────── */
function Particles() {
  const items = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    dur: 6 + Math.random() * 10,
    delay: Math.random() * 6,
    dx: (Math.random() - 0.5) * 80,
    dy: (Math.random() - 0.5) * 80,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.id % 3 === 0 ? "#f59e0b" : p.id % 3 === 1 ? "#38bdf8" : "#a78bfa",
            opacity: 0.4,
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            animation: `particle-drift ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ── Typewriter ────────────────────────────────────────────────────────────── */
function Typewriter({ phrases }: { phrases: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    if (!deleting && displayed.length < phrase.length) {
      const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
    }
  }, [displayed, deleting, idx, phrases]);

  return (
    <span>
      {displayed}
      <span style={{ animation: "blink 1s step-end infinite", color: "#f59e0b" }}>|</span>
    </span>
  );
}

/* ── main ─────────────────────────────────────────────────────────────────── */

export default function App() {
  const active = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);
  const { ref: skillsSectionRef, visible: skillsVisible } = useInView(0.15);

  function scrollTo(id: string) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <div style={{ background: "#080d1a", color: "#f1f5f9", fontFamily: "var(--font-body)" }}>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: "rgba(8,13,26,0.88)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid #1e2d4a",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontFamily: "var(--font-display)", color: "#f59e0b", fontSize: "1.25rem", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
          >
            T.T. Alum
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${active === link ? "active" : ""}`}
                style={{ color: active === link ? "#f59e0b" : "#94a3b8", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
              >
                {link}
              </button>
            ))}
            <a
              href="mailto:alumtimothy666@gmail.com"
              style={{
                background: "linear-gradient(135deg,#f59e0b,#d97706)",
                color: "#080d1a", fontWeight: 700, fontSize: "0.825rem",
                padding: "8px 20px", borderRadius: "6px",
                textDecoration: "none", letterSpacing: "0.04em",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: 22, height: 2, background: "#f59e0b", borderRadius: 1, transition: "transform 0.3s", transform: menuOpen && i === 1 ? "scaleX(0)" : "none" }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            maxHeight: menuOpen ? 320 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s ease",
            background: "#0f1629",
            borderTop: menuOpen ? "1px solid #1e2d4a" : "none",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{ color: "#f1f5f9", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontSize: "1rem", padding: "4px 0" }}
              >
                {link}
              </button>
            ))}
            <a
              href="mailto:alumtimothy666@gmail.com"
              style={{ color: "#f59e0b", fontWeight: 700, textDecoration: "none" }}
            >
              Hire Me →
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 60% 50%, #1a2a4a 0%, #080d1a 70%)",
          }}
        />
        <div className="hero-grid-overlay absolute inset-0" />
        <Particles />

        {/* Glowing orbs */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, #f59e0b1a 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, #38bdf81a 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <div
                className="animate-fade-in"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#f59e0b18", border: "1px solid #f59e0b44",
                  borderRadius: 100, padding: "6px 16px", marginBottom: 24,
                  fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#f59e0b",
                  letterSpacing: "0.12em",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", display: "inline-block", animation: "pulse-glow 2s ease-in-out infinite" }} />
                Available for opportunities
              </div>

              <h1
                className="animate-fade-up delay-100"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                  fontWeight: 900, lineHeight: 1.05,
                  color: "#f1f5f9",
                  marginBottom: 16,
                }}
              >
                Timothy
                <br />
                <span style={{ color: "#f59e0b" }}>Terhemba</span> Alum
              </h1>

              <p
                className="animate-fade-up delay-200"
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "clamp(1rem,2.5vw,1.35rem)",
                  color: "#94a3b8", marginBottom: 28, minHeight: "2em",
                }}
              >
                <Typewriter phrases={[
                  "HSE Specialist",
                  "Drone Operations Expert",
                  "NEBOSH IGC Certified",
                  "Safety Culture Champion",
                  "Environmental Compliance Pro",
                ]} />
              </p>

              <p
                className="animate-fade-up delay-300"
                style={{ color: "#94a3b8", lineHeight: 1.75, maxWidth: 520, marginBottom: 36, fontSize: "0.975rem" }}
              >
                7+ years driving operational excellence across oil &amp; gas and agriculture sectors.
                Zero-incident track record. NEBOSH IGC, IWCF certified. Based in Port Harcourt, Nigeria.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("Experience")}
                  style={{
                    background: "linear-gradient(135deg,#f59e0b,#d97706)",
                    color: "#080d1a", fontWeight: 700, fontSize: "0.9rem",
                    padding: "13px 28px", borderRadius: 8, border: "none",
                    cursor: "pointer", letterSpacing: "0.04em",
                    boxShadow: "0 8px 24px #f59e0b33",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 32px #f59e0b44"; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px #f59e0b33"; }}
                >
                  View Experience
                </button>
                <a
                  href="mailto:alumtimothy666@gmail.com"
                  style={{
                    color: "#f1f5f9", fontWeight: 600, fontSize: "0.9rem",
                    padding: "13px 28px", borderRadius: 8,
                    border: "1px solid #1e2d4a",
                    textDecoration: "none", letterSpacing: "0.04em",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = "#f59e0b88"; e.currentTarget.style.color = "#f59e0b"; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = "#1e2d4a"; e.currentTarget.style.color = "#f1f5f9"; }}
                >
                  Get In Touch →
                </a>
              </div>

              {/* Stats row */}
              <div className="animate-fade-up delay-500 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {STATS.map((s) => (
                  <div key={s.label} style={{ borderTop: "2px solid #f59e0b44", paddingTop: 12 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: 4, letterSpacing: "0.05em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="animate-scale-in delay-200 flex justify-center lg:justify-end">
              <div style={{ position: "relative" }}>
                {/* Rotating ring */}
                <div
                  className="animate-spin-slow"
                  style={{
                    position: "absolute", inset: -16,
                    borderRadius: "50%",
                    border: "2px dashed #f59e0b44",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    width: "clamp(260px, 35vw, 380px)",
                    height: "clamp(260px, 35vw, 380px)",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid #f59e0b",
                    boxShadow: "0 0 60px #f59e0b44, 0 0 120px #f59e0b22",
                    position: "relative",
                  }}
                >
                  <img
                    src={profilePhoto}
                    alt="Timothy Terhemba Alum — HSE Specialist and Drone Operations Expert"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="animate-float"
                  style={{
                    position: "absolute", bottom: 16, right: -20,
                    background: "linear-gradient(135deg,#f59e0b,#d97706)",
                    color: "#080d1a", borderRadius: 12, padding: "10px 16px",
                    fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.4,
                    boxShadow: "0 8px 24px #f59e0b44",
                    textAlign: "center",
                  }}
                >
                  NEBOSH IGC<br/>Certified
                </div>

                <div
                  className="animate-float delay-300"
                  style={{
                    position: "absolute", top: 24, left: -24,
                    background: "#0f1629", border: "1px solid #38bdf844",
                    color: "#38bdf8", borderRadius: 12, padding: "10px 14px",
                    fontSize: "0.78rem", fontWeight: 700,
                    boxShadow: "0 8px 24px #38bdf822",
                    textAlign: "center",
                  }}
                >
                  7+ Years<br/>HSE Excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            color: "#64748b", fontSize: "0.72rem", letterSpacing: "0.1em",
          }}
        >
          <span>SCROLL</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(#f59e0b, transparent)", animation: "fadeIn 2s ease 1s both" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <SectionWrapper id="about">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeading label="Who I Am" title="Professional Summary" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p style={{ color: "#cbd5e1", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: 20 }}>
                A highly skilled and versatile HSE and Drone Operations Professional with a strong academic
                foundation spanning occupational health and safety, environmental management, and aerial
                surveillance. Proven expertise in implementing robust HSE policies, conducting site inspections,
                leading emergency response drills, and ensuring regulatory compliance across oil &amp; gas and
                agricultural sectors.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "0.975rem" }}>
                Holds a B.Sc. in Geography (First Class Honours) from Ahmadu Bello University, Zaria.
                Adept at leveraging drone technology for surveillance, security, and precision agriculture —
                with demonstrated success in reducing operational losses and enhancing threat detection.
                Committed to fostering a culture of safety, continuous improvement, and operational excellence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["NEBOSH IGC", "IWCF Certified", "UAS / TRUST", "OSHA/ISO 45001", "DPR Compliance"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#f59e0b18", border: "1px solid #f59e0b44",
                      color: "#f59e0b", borderRadius: 6, padding: "4px 12px",
                      fontSize: "0.78rem", fontFamily: "var(--font-mono)", letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div style={{ background: "#0f1629", border: "1px solid #1e2d4a", borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "#f59e0b", marginBottom: 18 }}>
                  Contact Details
                </h3>
                {[
                  { icon: "📍", label: "Port Harcourt, Rivers, Nigeria" },
                  { icon: "✉️", label: "alumtimothy666@gmail.com", href: "mailto:alumtimothy666@gmail.com" },
                  { icon: "📞", label: "+234 810 591 7666", href: "tel:+2348105917666" },
                  { icon: "🔗", label: "linkedin.com/in/alum-timothy", href: "https://linkedin.com/in/alum-timothy" },
                ].map((item) => (
                  <div key={item.label} className="contact-link flex items-start gap-3 mb-4">
                    <span style={{ fontSize: "1rem", marginTop: 2 }}>{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ color: "#94a3b8", fontSize: "0.88rem", textDecoration: "none", wordBreak: "break-all", transition: "color 0.2s" }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#f59e0b")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#94a3b8")}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "0.88rem" }}>{item.label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Drone image */}
              <div style={{ marginTop: 16, borderRadius: 16, overflow: "hidden", height: 180, position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=300&fit=crop&auto=format"
                  alt="Drone flying for aerial surveillance"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080d1a88, transparent)" }} />
                <div style={{
                  position: "absolute", bottom: 12, left: 12,
                  fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                  color: "#f59e0b", letterSpacing: "0.1em",
                }}>
                  DRONE OPERATIONS SPECIALIST
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── SKILLS ── */}
      <SectionWrapper id="skills">
        <section
          ref={skillsSectionRef as React.RefObject<HTMLElement>}
          style={{ background: "#0a0f1e", borderTop: "1px solid #1e2d4a", borderBottom: "1px solid #1e2d4a" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-24">
            <SectionHeading label="Core Competencies" title="Skills & Expertise" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {COMPETENCIES.map((skill, i) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  pct={skill.pct}
                  delay={i * 80}
                  animate={skillsVisible}
                />
              ))}
            </div>

            {/* Additional competencies grid */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                "Flight Logging", "Aerial Security Surveillance",
                "HSE Documentation", "Bid Preparation",
                "Contract Negotiation", "Process Safety Management",
                "Geographic Mapping", "MS Office Suite",
                "Drone Maintenance", "Pre-flight Inspections",
                "Weather Assessment", "Hazardous Waste Mgmt",
              ].map((comp) => (
                <div
                  key={comp}
                  style={{
                    background: "#141e35", border: "1px solid #1e2d4a",
                    borderRadius: 10, padding: "12px 14px",
                    fontSize: "0.8rem", color: "#94a3b8",
                    transition: "border-color 0.25s, color 0.25s, background 0.25s",
                    cursor: "default",
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#f59e0b44";
                    el.style.color = "#f1f5f9";
                    el.style.background = "#1a2235";
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#1e2d4a";
                    el.style.color = "#94a3b8";
                    el.style.background = "#141e35";
                  }}
                >
                  {comp}
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── EXPERIENCE ── */}
      <SectionWrapper id="experience">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeading label="Career Journey" title="Professional Experience" />

          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute", left: 20, top: 0, bottom: 0, width: 2,
                background: "linear-gradient(to bottom, #f59e0b, #38bdf8, #a78bfa)",
                borderRadius: 1,
              }}
              className="hidden md:block"
            />

            <div className="flex flex-col gap-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={exp.role + exp.company} className="exp-card md:pl-16" style={{ position: "relative", borderLeft: "2px solid #1e2d4a", paddingLeft: 20 }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute", left: -9, top: 24, width: 16, height: 16,
                      borderRadius: "50%", background: exp.current ? "#f59e0b" : "#1e2d4a",
                      border: `2px solid ${exp.current ? "#f59e0b" : "#38bdf8"}`,
                      boxShadow: exp.current ? "0 0 12px #f59e0b88" : "none",
                    }}
                    className="hidden md:block"
                  />

                  <div
                    style={{
                      background: "#0f1629", border: "1px solid #1e2d4a",
                      borderRadius: 14, padding: "24px 28px",
                      borderLeft: `3px solid ${i === 0 ? "#f59e0b" : i === 1 ? "#38bdf8" : "#a78bfa"}`,
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ fontSize: "1.2rem" }}>{exp.icon}</span>
                          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "#f1f5f9" }}>
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span style={{
                              background: "#34d39922", border: "1px solid #34d39944",
                              color: "#34d399", borderRadius: 100, padding: "2px 10px",
                              fontSize: "0.68rem", fontFamily: "var(--font-mono)", letterSpacing: "0.08em",
                            }}>
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p style={{ color: "#f59e0b", fontSize: "0.88rem", fontWeight: 600 }}>{exp.company}</p>
                        <p style={{ color: "#64748b", fontSize: "0.8rem", marginTop: 2 }}>{exp.location}</p>
                      </div>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.78rem",
                        color: "#64748b", background: "#141e35",
                        border: "1px solid #1e2d4a", borderRadius: 6,
                        padding: "4px 10px", whiteSpace: "nowrap",
                      }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>
                          <span style={{ color: "#f59e0b", marginTop: "0.35em", flexShrink: 0, fontSize: "0.6rem" }}>◆</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── EDUCATION & CERTS ── */}
      <SectionWrapper id="education">
        <section style={{ background: "#0a0f1e", borderTop: "1px solid #1e2d4a" }}>
          <div className="max-w-7xl mx-auto px-6 py-24">
            <SectionHeading label="Credentials" title="Education & Certifications" />

            {/* Education card */}
            <div
              style={{
                background: "linear-gradient(135deg, #1a2a4a 0%, #0f1629 100%)",
                border: "1px solid #38bdf844",
                borderRadius: 16, padding: "28px 32px",
                marginBottom: 32,
                display: "flex", alignItems: "center", gap: 20,
                flexWrap: "wrap",
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "linear-gradient(135deg,#f59e0b,#d97706)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.8rem", flexShrink: 0,
              }}>
                🎓
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#38bdf8", letterSpacing: "0.15em", marginBottom: 4 }}>UNDERGRADUATE DEGREE</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 2 }}>
                  BSc Geography — First Class Honours
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>Ahmadu Bello University, Zaria &nbsp;·&nbsp; 2017</p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span style={{
                  background: "#f59e0b22", border: "1px solid #f59e0b66",
                  color: "#f59e0b", borderRadius: 8, padding: "6px 14px",
                  fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-mono)",
                }}>
                  First Class
                </span>
              </div>
            </div>

            {/* Certs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="cert-card"
                  style={{
                    background: "#0f1629",
                    border: `1px solid ${cert.color}33`,
                    borderRadius: 14, padding: "20px 20px",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: cert.color, borderRadius: "14px 14px 0 0" }} />
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    color: cert.color, letterSpacing: "0.1em", marginBottom: 10,
                  }}>
                    {cert.year}
                  </div>
                  <p style={{ color: "#f1f5f9", fontSize: "0.875rem", lineHeight: 1.5, fontWeight: 500 }}>
                    {cert.name}
                  </p>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: `${cert.color}22`, border: `1px solid ${cert.color}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: 14, fontSize: "0.85rem",
                  }}>
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── CONTACT ── */}
      <SectionWrapper id="contact">
        <section style={{ borderTop: "1px solid #1e2d4a" }}>
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
            <SectionHeading label="Get In Touch" title="Let's Work Together" />

            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: 48, maxWidth: 540, margin: "0 auto 48px" }}>
              Available for HSE consulting, drone operations contracts, and safety management roles.
              Reach out and let us discuss how I can add value to your organization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {[
                { icon: "✉️", label: "Email", value: "alumtimothy666@gmail.com", href: "mailto:alumtimothy666@gmail.com" },
                { icon: "📞", label: "Phone", value: "+234 810 591 7666", href: "tel:+2348105917666" },
                { icon: "🔗", label: "LinkedIn", value: "alum-timothy", href: "https://linkedin.com/in/alum-timothy" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "#0f1629", border: "1px solid #1e2d4a",
                    borderRadius: 14, padding: "24px 20px",
                    textDecoration: "none",
                    transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "#f59e0b88";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px #f59e0b18";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "#1e2d4a";
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{c.icon}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#f59e0b", letterSpacing: "0.12em", marginBottom: 6 }}>{c.label}</div>
                  <div style={{ color: "#f1f5f9", fontSize: "0.85rem", fontWeight: 500, wordBreak: "break-all" }}>{c.value}</div>
                </a>
              ))}
            </div>

            <a
              href="mailto:alumtimothy666@gmail.com"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#f59e0b,#d97706)",
                color: "#080d1a", fontWeight: 700, fontSize: "1rem",
                padding: "15px 40px", borderRadius: 10,
                textDecoration: "none", letterSpacing: "0.05em",
                boxShadow: "0 8px 32px #f59e0b44",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px #f59e0b55"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 32px #f59e0b44"; }}
            >
              Send Me a Message →
            </a>
          </div>
        </section>
      </SectionWrapper>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #1e2d4a", padding: "24px 24px", textAlign: "center" }}>
        <p style={{ color: "#334155", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
          © 2026 Timothy Terhemba Alum · HSE &amp; Drone Operations Professional · Port Harcourt, Nigeria
        </p>
      </footer>

    </div>
  );
}
