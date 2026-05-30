import { services } from "../data/db.js";
import { useState } from "react";
import "./Services.css";

const icons = {
  home:      "M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V10.5z",
  building:  "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z M6 12H4a2 2 0 00-2 2v8h4v-8z M18 9h2a2 2 0 012 2v11h-4V9z M10 6h4M10 10h4M10 14h4M10 18h4",
  industry:  "M2 20h20 M4 20V10l8-6 8 6v10 M12 14v6",
  clipboard: "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2 M9 2h6a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V3a1 1 0 011-1z",
  tools:     "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  wrench:    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
};

const process = [
  { step: "01", title: "Initial Consultation",   desc: "We meet to understand your vision, requirements, site conditions, and budget expectations." },
  { step: "02", title: "Feasibility & Proposal",  desc: "Our team prepares a detailed scope, timeline, and cost proposal within 5 working days." },
  { step: "03", title: "Planning & Design",       desc: "Coordinating structural, architectural, and MEP designs with all relevant approvals." },
  { step: "04", title: "Construction Phase",      desc: "Rigorous on-site execution with daily progress tracking and quality audits at every milestone." },
  { step: "05", title: "Quality Audit",           desc: "Independent quality checks before any phase sign-off to ensure zero defects at handover." },
  { step: "06", title: "Handover & Support",      desc: "Formal handover with complete documentation, warranties, and post-completion support." },
];

export default function Services({ navigate }) {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);

  return (
    <div className="sv">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="sv-hero">
        <div className="sv-hero-inner">
          <nav className="sv-breadcrumb">
            <button onClick={() => navigate("home")}>Home</button>
            <span>/</span>
            <span className="sv-breadcrumb-cur">Services</span>
          </nav>
          <span className="sv-eyebrow">What We Offer</span>
          <h1 className="sv-hero-h1">Our Services</h1>
          <p className="sv-hero-sub">
            End-to-end project management consultancy — from feasibility to final handover.
          </p>
        </div>
        <div className="sv-hero-deco" />
      </section>

      {/* ── TWO-COLUMN BODY ──────────────────────── */}
      <section className="sv-body">
        <div className="sv-body-inner">

          {/* SIDEBAR */}
          <aside className="sv-sidebar">
            <div className="sv-sidebar-label">Services</div>
            <nav className="sv-sidebar-nav">
              {services.map((s) => (
                <button
                  key={s.id}
                  className={`sv-nav-item${activeId === s.id ? " sv-nav-item--on" : ""}`}
                  onClick={() => setActiveId(s.id)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                    className="sv-nav-icon">
                    <path d={icons[s.icon] || icons.tools} />
                  </svg>
                  <span className="sv-nav-text">{s.title}</span>
                  <span className="sv-nav-arrow">›</span>
                </button>
              ))}
            </nav>
            <div className="sv-sidebar-cta">
              <p className="sv-sidebar-cta-text">
                Need a tailored solution for your project?
              </p>
              <button className="sv-sidebar-cta-btn" onClick={() => navigate("contact")}>
                Get a Consultation
              </button>
            </div>
          </aside>

          {/* MAIN */}
          <main className="sv-main" key={activeId}>
            <div className="sv-main-img-wrap">
              <img src={active.image} alt={active.title} className="sv-main-img" />
              <div className="sv-main-img-overlay" />
              <div className="sv-main-img-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[active.icon] || icons.tools} />
                </svg>
                {active.title}
              </div>
            </div>

            <div className="sv-main-card">
              <h2 className="sv-main-title">{active.title}</h2>
              <p className="sv-main-desc">{active.description}</p>
              <div className="sv-deliverables-label">Key Deliverables</div>
              <ul className="sv-deliverables">
                {active.highlights.map((h, i) => (
                  <li key={h} className="sv-deliverable">
                    <span className="sv-deliverable-num">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="sv-deliverable-text">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>

        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────── */}
      <section className="sv-process">
        <div className="sv-process-inner">
          <div className="sv-process-header">
            <span className="sv-eyebrow sv-eyebrow--gold">How We Work</span>
            <h2 className="sv-process-h2">Our Delivery Process</h2>
          </div>
          <div className="sv-process-grid">
            {process.map((p) => (
              <div key={p.step} className="sv-process-card">
                <div className="sv-process-step">{p.step}</div>
                <div className="sv-process-step-div" />
                <h3 className="sv-process-title">{p.title}</h3>
                <p className="sv-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="sv-cta">
        <div className="sv-cta-inner">
          <div className="sv-cta-text">
            <span className="sv-cta-eyebrow">Work With Us</span>
            <h2 className="sv-cta-h2">Need a Custom Service Solution?</h2>
            <p className="sv-cta-sub">
              Our consultants can design a tailored project management framework
              for your specific requirements.
            </p>
          </div>
          <button className="sv-cta-btn" onClick={() => navigate("contact")}>
            Request a Consultation
          </button>
        </div>
      </section>

    </div>
  );
}