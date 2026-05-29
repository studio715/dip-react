import { useState, useEffect, useRef } from "react";
import "./Home.css";

import {
  brand,
  stats,
  portals,
  services,
  projects as projectData,
  testimonials
} from "../data/db.js";

/* ── Portal icon paths ──────────────────────────────────────── */
const portalIcons = {
  client:   "M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V10.5z",
  office:   "M3 3h18v18H3V3z M9 3v18 M3 9h18",
  engineer: "M2 17h20v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z M12 3a8 8 0 018 8v2H4v-2a8 8 0 018-8z",
};

const serviceIcons = {
  home:      "M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V10.5z",
  building:  "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z M6 12H4a2 2 0 00-2 2v8h4v-8z M18 9h2a2 2 0 012 2v11h-4V9z",
  industry:  "M2 20h20 M4 20V10l8-6 8 6v10 M12 14v6",
  clipboard: "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2 M9 2h6a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V3a1 1 0 011-1z",
  tools:     "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  wrench:    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
};

/* ── StatCard with intersection observer counter ────────────── */
function StatCard({ value, label, delay }) {
  const [count, setCount]     = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();
  const finalValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = finalValue / (1800 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= finalValue) { setCount(finalValue); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, finalValue]);

  return (
    <div ref={ref} className="stat-card" style={{ animation: `fadeUp 0.7s ${delay}s ease both` }}>
      <div className="stat-num">{count}{value.includes("+") ? "+" : ""}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ── PortalCard ─────────────────────────────────────────────── */
function PortalCard({ portal }) {
  const accentLight = portal.accent + "18";
  return (
    <a href={portal.href} target="_blank" rel="noopener noreferrer" className="portal-card-inner">
      <div className="portal-icon-wrap" style={{ background: `linear-gradient(135deg,${accentLight},${portal.accent}22)` }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
          stroke={portal.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d={portalIcons[portal.id]} />
        </svg>
      </div>
      <div className="portal-subtitle" style={{ color: portal.accent }}>{portal.subtitle}</div>
      <h3 className="portal-title">{portal.title}</h3>
      <p className="portal-description">{portal.description}</p>
      <ul className="portal-features">
        {portal.features.map((f) => (
          <li key={f} className="portal-feature-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={portal.accent} strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="portal-access-link" style={{ color: portal.accent }}>
        Access Portal
        <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
    </a>
  );
}

/* ── Home ───────────────────────────────────────────────────── */
export default function Home({ navigate }) {
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home-wrapper">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="hero-section">

        {/* Left */}
        <div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Gujarat's Trusted PMC Since 1995
          </div>

          <h1 className="hero-heading hero-title">
            Where <span className="hero-heading-accent">Strategy</span><br />
            Meets<br />Execution
          </h1>

          <p className="hero-description hero-sub">
            Dip Projects is a premium Project Management Consultancy delivering
            end-to-end execution across residential, commercial, and industrial
            developments in Gujarat — on time, on budget, zero compromise.
          </p>

          <div className="hero-trust-row">
            {["RERA Compliant", "30+ Yrs Experience", "200+ Projects"].map((t) => (
              <span key={t} className="hero-trust-chip">{t}</span>
            ))}
          </div>

          <div className="hero-btns">
            <button className="btn-primary"
              onClick={() => document.getElementById("portals").scrollIntoView({ behavior: "smooth" })}>
              Access Portals
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => navigate("contact")}>
              Get a Free Consultation
            </button>
          </div>
        </div>

        {/* Right — image */}
        <div className="hero-img hero-img-wrapper">
          <div className="hero-img-frame">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
              alt="Dip Projects construction site" />
            <div className="hero-img-overlay" />
          </div>

          <div className="hero-float-card float-card">
            <div className="hero-float-card-num">200+</div>
            <div className="hero-float-card-label">Projects Delivered</div>
          </div>

          <div className="hero-live-badge">
            <div className="hero-live-badge-inner">
              <span className="hero-live-dot" />
              <span className="hero-live-text">Live Tracking Active</span>
            </div>
          </div>

          <div className="hero-location-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f47b20" strokeWidth="2.2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            Surat · Ahmedabad · Vadodara
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT STRIP  ← NEW
      ══════════════════════════════════════════════════════ */}
      <section className="about-strip">
        <div className="about-strip__inner">
          <div className="about-strip__left">
            <div className="about-strip__avatar">
              <span>CS</span>
            </div>
            <div className="about-strip__badge">Founder</div>
          </div>
          <div className="about-strip__body">
            <div className="section-label">Who We Are</div>
            <h2 className="about-strip__heading">
              30 Years of Building Gujarat's Skyline
            </h2>
            <p className="about-strip__text">
              Founded in 1995 by <strong>Mr. Chirag Shah</strong>, Dip Projects has grown into
              Gujarat's most trusted Project Management Consultancy. From boutique villas
              in Navsari to industrial parks in Bharuch, we've delivered 200+ projects
              with one philosophy — the client's vision, executed flawlessly.
            </p>
            <div className="about-strip__pillars">
              {["Transparency", "On-Time Delivery", "Zero Compromise Quality", "Client-First Approach"].map((p) => (
                <span key={p} className="about-strip__pillar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f47b20" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {p}
                </span>
              ))}
            </div>
            <button className="btn-outline-dark" onClick={() => navigate("about")}>
              Our Full Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PORTALS
      ══════════════════════════════════════════════════════ */}
      <section id="portals" className="portals-section">
        <div className="portals-header">
          <div className="section-label">Role-Based Access</div>
          <h2 className="section-heading">Select Your Portal</h2>
          <p className="section-subtext">
            Secure, role-specific dashboards for every stakeholder in the project lifecycle.
          </p>
          {/* Guidance for new visitors */}
          <div className="portals-guidance">
            <div className="portals-guidance__item portals-guidance__item--existing">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
              Already a client or team member? Jump straight to your portal below.
            </div>
            <div className="portals-guidance__item portals-guidance__item--new">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
              </svg>
              New here? Scroll down to explore our services and projects.
            </div>
          </div>
        </div>

        <div className="portals-grid">
          {portals.map((p) => <PortalCard key={p.id} portal={p} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════ */}
      <section className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <div className="section-label">What We Do</div>
              <h2 className="section-heading section-heading--light">Our Core Services</h2>
            </div>
            <button className="btn-ghost-light" onClick={() => navigate("services")}>
              View All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="services-grid">
            {services.slice(0, 3).map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-card-img">
                  <img src={s.image} alt={s.title} />
                  <div className="service-card-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="#f47b20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={serviceIcons[s.icon] || serviceIcons.tools} />
                    </svg>
                  </div>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{s.title}</h3>
                  <p className="service-card-desc">{s.shortDesc}</p>
                  <button className="service-card-link" onClick={() => navigate("services")}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why PMC strip inside services section */}
          <div className="why-pmc">
            <div className="why-pmc__label">Why Hire a PMC?</div>
            <div className="why-pmc__grid">
            {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              ),
              title: "Faster Delivery",
              desc: "Optimised scheduling reduces timelines by up to 20%."
            },

            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1v22" />
                  <path d="M17 5H9a3 3 0 000 6h6a3 3 0 010 6H7" />
                </svg>
              ),
              title: "Cost Control",
              desc: "Prevent overruns with real-time budget monitoring."
            },

            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ),
              title: "Zero Defects",
              desc: "Independent quality audits at every milestone."
            },

            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8M8 12h8M8 17h5" />
                </svg>
              ),
              title: "Single Contact",
              desc: "One professional interface for all consultants & contractors."
            }
          ].map((w, index) => (
            <div
              key={w.title}
              className={`why-pmc__card ${
                index % 2 === 0
                  ? "why-pmc__card--left"
                  : "why-pmc__card--right"
              }`}
            >
              <div className="why-pmc__icon">
                {w.icon}
              </div>
              <h4 className="why-pmc__title">{w.title}</h4>
              <p className="why-pmc__desc">{w.desc}</p>
            </div>
          ))}
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════════════ */}
      <section className="projects-section">
        <div className="projects-header">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-heading--light">Featured Projects</h2>
          </div>
          <button className="btn-ghost-dark" onClick={() => navigate("projects")}>
            All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="projects-grid">
          {projectData.slice(0, 3).map((p) => (
            <div key={p.id} className="proj-card">
              <div className="proj-card-img-wrap">
                <img src={p.image} alt={p.title} className="proj-img" />
                <div className={`proj-status-badge ${p.status === "Completed" ? "proj-status-badge--completed" : "proj-status-badge--inprogress"}`}>
                  {p.status}
                </div>
                <div className="proj-area-badge">{p.area}</div>
              </div>
              <div className="proj-card-body">
                <div className="proj-card-meta">{p.category} · {p.year}</div>
                <h3 className="proj-card-title">{p.title}</h3>
                <div className="proj-card-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sectors row */}
        <div className="sectors-row">
          {["Residential", "Commercial", "Industrial", "Institutional", "Community", "Infrastructure"].map((s) => (
            <button key={s} className="sector-chip" onClick={() => navigate("projects")}>{s}</button>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="section-label">Client Feedback</div>
          <h2 className="section-heading testimonials-heading">What Our Clients Say</h2>

          <div className="testimonial-card">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">{testimonials[tIdx].quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{testimonials[tIdx].avatar}</div>
              <div className="testimonial-author-info">
                <div className="testimonial-author-name">{testimonials[tIdx].name}</div>
                <div className="testimonial-author-role">{testimonials[tIdx].role}</div>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)}
                className={`testimonial-dot ${i === tIdx ? "testimonial-dot--active" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA  — WhatsApp-first
      ══════════════════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="cta-inner">
          <div>
            <div className="cta-label">Get Started Today</div>
            <h2 className="cta-heading">Ready to Build Something Extraordinary?</h2>
            <p className="cta-subtext">
              Tell us about your project — we'll schedule a site visit and send you a
              detailed proposal within 5 working days. No obligation, no spam.
            </p>
            <div className="cta-contact-row">
              <a href={`tel:${brand.contact.phone}`} className="cta-contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                {brand.contact.phone}
              </a>
              <a href={`mailto:${brand.contact.email}`} className="cta-contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                {brand.contact.email}
              </a>
            </div>
          </div>

          <div className="cta-actions">
            <a
              href="https://wa.me/919099406405?text=Hello%20Dip%20Projects%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L.054 23.448a.5.5 0 00.611.61l5.682-1.49A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.371l-.361-.214-3.734.979.995-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <button className="btn-cta" onClick={() => navigate("contact")}>
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}