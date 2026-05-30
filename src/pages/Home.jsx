import { useState, useEffect, useRef } from "react";
import "./Home.css";
import img from "../chirag-shah.png";
import {
  brand, stats, portals, services,
  projects as projectData, testimonials
} from "../data/db.js";
import Reviews from "./Reviews";

// const portalIcons = {
//   client:   "M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V10.5z",
//   office:   "M3 3h18v18H3V3z M9 3v18 M3 9h18",
//   engineer: "M2 17h20v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z M12 3a8 8 0 018 8v2H4v-2a8 8 0 018-8z",
// };
const serviceIcons = {
  home:      "M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V10.5z",
  building:  "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z M6 12H4a2 2 0 00-2 2v8h4v-8z M18 9h2a2 2 0 012 2v11h-4V9z",
  industry:  "M2 20h20 M4 20V10l8-6 8 6v10 M12 14v6",
  clipboard: "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2 M9 2h6a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V3a1 1 0 011-1z",
  tools:     "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  wrench:    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
};

function StatCard({ value, label, delay }) {
  const [count, setCount]     = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();
  const finalValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let s = 0;
    const inc = finalValue / (1800 / 16);
    const t = setInterval(() => {
      s += inc;
      if (s >= finalValue) { setCount(finalValue); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [started, finalValue]);

  return (
    <div ref={ref} className="stat-card" style={{ animationDelay: `${delay}s` }}>
      <div className="stat-num">{count}{value.includes("+") ? "+" : ""}</div>
      <div className="stat-divider" />
      <div className="stat-label">{label}</div>
    </div>
  );
}

function PortalCard({ portal }) {
  return (
    <a href={portal.href} target="_blank" rel="noopener noreferrer" className="portal-card">
      <div className="portal-card-header">
        <span className="portal-tag" style={{ color: portal.accent, borderColor: portal.accent + "40", background: portal.accent + "10" }}>
          {portal.subtitle}
        </span>
        <svg className="portal-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
      <h3 className="portal-title">{portal.title}</h3>
      <p className="portal-desc">{portal.description}</p>
      <ul className="portal-features">
        {portal.features.map((f) => (
          <li key={f}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={portal.accent} strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="portal-cta" style={{ color: portal.accent }}>Access Portal →</div>
    </a>
  );
}

export default function Home({ navigate }) {
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home">

      {/* ── HERO ───────────────────────────── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            Gujarat's Trusted PMC Since 1995
          </div>
          <h1 className="hero-h1">
            Where<br />
            <em>Strategy</em><br />
            Meets<br />
            Execution
          </h1>
          <p className="hero-sub">
            Dip Projects delivers end-to-end project management across
            residential, commercial, and industrial developments in Gujarat —
            on time, on budget, zero compromise.
          </p>
          <div className="hero-chips">
            {["RERA Compliant", "30+ Years Experience", "200+ Projects"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById("portals").scrollIntoView({ behavior: "smooth" })}>
              Access Portals
            </button>
            <button className="btn-ghost" onClick={() => navigate("contact")}>
              Free Consultation →
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-frame">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
              alt="Dip Projects construction" />
            <div className="hero-img-vignette" />
          </div>
          <div className="hero-metric-card">
            <span className="metric-val">200+</span>
            <span className="metric-lbl">Projects Delivered</span>
          </div>
          <div className="hero-live-pill">
            <span className="live-dot" />
            Live Tracking Active
          </div>
          <div className="hero-geo-pill">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            Surat · Ahmedabad · Vadodara
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────── */}
      <section className="stats-bar">
        {stats.map((s, i) => (
          <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
        ))}
      </section>

      {/* ── ABOUT ──────────────────────────── */}
      <section className="about">
        <div className="about-inner">
          <div className="about-media">
            <div className="about-avatar">
              <img src={img} alt="Chirag Shah" />
            </div>
            <div className="about-badge-wrap">
              <span className="about-badge">Founder & Principal</span>
              <span className="about-year-badge">Est. 1995</span>
            </div>
          </div>
          <div className="about-body">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-h2">30 Years of Building<br />Gujarat's Skyline</h2>
            <p className="about-text">
              Founded in 1995 by <strong>Mr. Chirag Shah</strong>, Dip Projects has grown into
              Gujarat's most trusted Project Management Consultancy. From boutique villas
              in Navsari to industrial parks in Bharuch, we've delivered 200+ projects
              with one philosophy — the client's vision, executed flawlessly.
            </p>
            <div className="about-pillars">
              {["Transparency", "On-Time Delivery", "Zero Compromise Quality", "Client-First Approach"].map((p) => (
                <div key={p} className="pillar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c8902a" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {p}
                </div>
              ))}
            </div>
            <button className="btn-outline" onClick={() => navigate("about")}>
              Our Full Story →
            </button>
          </div>
        </div>
      </section>

      {/* ── PORTALS ────────────────────────── */}
      <section id="portals" className="portals">
        <div className="portals-inner">
          <div className="portals-header">
            <span className="section-eyebrow">Role-Based Access</span>
            <h2 className="section-h2">Select Your Portal</h2>
            <p className="section-sub">Secure, role-specific dashboards for every stakeholder in the project lifecycle.</p>
          </div>
          <div className="portals-grid">
            {portals.map((p) => <PortalCard key={p.id} portal={p} />)}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────── */}
      <section className="services">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <span className="section-eyebrow section-eyebrow--light">What We Do</span>
              <h2 className="section-h2 section-h2--light">Core Services</h2>
            </div>
            <button className="btn-outline-light" onClick={() => navigate("services")}>
              All Services →
            </button>
          </div>
          <div className="services-grid">
            {services.slice(0, 3).map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-img-wrap">
                  <img src={s.image} alt={s.title} />
                  <div className="service-img-overlay" />
                  <div className="service-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8902a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={serviceIcons[s.icon] || serviceIcons.tools} />
                    </svg>
                  </div>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.shortDesc}</p>
                  <button className="service-link" onClick={() => navigate("services")}>
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why PMC */}
          <div className="why-pmc">
            <div className="why-pmc-label">Why Hire a PMC?</div>
            <div className="why-pmc-grid">
              {[
                { icon: "M12 7v5l3 3 M12 22a10 10 0 100-20 10 10 0 000 20z", title: "Faster Delivery", desc: "Optimised scheduling reduces timelines by up to 20%." },
                { icon: "M12 1v22 M17 5H9a3 3 0 000 6h6a3 3 0 010 6H7",        title: "Cost Control",   desc: "Prevent overruns with real-time budget monitoring." },
                { icon: "M20 6L9 17l-5-5",                                       title: "Zero Defects",  desc: "Independent quality audits at every milestone." },
                { icon: "M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z M8 7h8M8 12h8M8 17h5", title: "Single Contact", desc: "One interface for all consultants & contractors." },
              ].map((w) => (
                <div key={w.title} className="why-card">
                  <div className="why-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8902a" strokeWidth="1.6">
                      <path d={w.icon} />
                    </svg>
                  </div>
                  <h4 className="why-title">{w.title}</h4>
                  <p className="why-desc">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────── */}
      <section className="projects">
        <div className="projects-inner">
          <div className="projects-header">
            <div>
              <span className="section-eyebrow">Our Work</span>
              <h2 className="section-h2">Featured Projects</h2>
            </div>
            <button className="btn-outline" onClick={() => navigate("projects")}>All Projects →</button>
          </div>
          <div className="projects-grid">
            {projectData.slice(0, 3).map((p) => (
              <div key={p.id} className="proj-card">
                <div className="proj-img-wrap">
                  <img src={p.image} alt={p.title} />
                  <span className={`proj-status ${p.status === "Completed" ? "proj-status--done" : "proj-status--active"}`}>
                    {p.status}
                  </span>
                  <span className="proj-area">{p.area}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-meta">{p.category} · {p.year}</div>
                  <h3 className="proj-title">{p.title}</h3>
                  <div className="proj-loc">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    {p.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sector-row">
            {["Residential", "Commercial", "Industrial", "Institutional", "Community", "Infrastructure"].map((s) => (
              <button key={s} className="sector-tag" onClick={() => navigate("projects")}>{s}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────── */}
      <section className="testi">
        <div className="testi-inner">
          <span className="section-eyebrow section-eyebrow--light">Client Feedback</span>
          <h2 className="section-h2 section-h2--light testi-h2">What Our Clients Say</h2>
          <div className="testi-card">
            <div className="testi-quote">"</div>
            <p className="testi-text">{testimonials[tIdx].quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">{testimonials[tIdx].avatar}</div>
              <div>
                <div className="testi-name">{testimonials[tIdx].name}</div>
                <div className="testi-role">{testimonials[tIdx].role}</div>
              </div>
            </div>
          </div>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testi-dot ${i === tIdx ? "testi-dot--on" : ""}`} onClick={() => setTIdx(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────── */}
      <Reviews />

      {/* ── CTA ────────────────────────────── */}
      <section className="cta">
        <div className="cta-inner">
          <div className="cta-text">
            <span className="cta-eyebrow">Get Started Today</span>
            <h2 className="cta-h2">Ready to Build Something Extraordinary?</h2>
            <p className="cta-sub">
              Tell us about your project — we'll schedule a site visit and deliver a detailed
              proposal within 5 working days. No obligation, no spam.
            </p>
            <div className="cta-contacts">
              <a href={`tel:${brand.contact.phone}`} className="cta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                {brand.contact.phone}
              </a>
              <a href={`mailto:${brand.contact.email}`} className="cta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {brand.contact.email}
              </a>
            </div>
          </div>
          <div className="cta-actions">
            <a href={`https://wa.me/919099406405?text=Hello%20Dip%20Projects%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
               target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L.054 23.448a.5.5 0 00.611.61l5.682-1.49A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.371l-.361-.214-3.734.979.995-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <button className="btn-primary btn-primary--light" onClick={() => navigate("contact")}>
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}