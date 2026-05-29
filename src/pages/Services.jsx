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
  { step: "01", title: "Initial Consultation",  desc: "We meet to understand your vision, requirements, site conditions, and budget expectations." },
  { step: "02", title: "Feasibility & Proposal", desc: "Our team prepares a detailed scope, timeline, and cost proposal within 5 working days." },
  { step: "03", title: "Planning & Design",      desc: "Coordinating structural, architectural, and MEP designs with all relevant approvals." },
  { step: "04", title: "Construction Phase",     desc: "Rigorous on-site execution with daily progress tracking and quality audits at every milestone." },
  { step: "05", title: "Quality Audit",          desc: "Independent quality checks before any phase sign-off to ensure zero defects at handover." },
  { step: "06", title: "Handover & Support",     desc: "Formal handover with complete documentation, warranties, and post-completion support." },
];

export default function Services({ navigate }) {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);

  return (
    <div className="services-wrapper">

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="svc-hero__inner">
          <div className="svc-hero__breadcrumb">
            <button className="svc-hero__bc-btn" onClick={() => navigate("home")}>Home</button>
            <span className="svc-hero__bc-sep">/</span>
            <span className="svc-hero__bc-current">Services</span>
          </div>
          <h1 className="svc-hero__title">Our Services</h1>
          <p className="svc-hero__sub">
            End-to-end project management consultancy — from feasibility to final handover.
          </p>
        </div>
        <div className="svc-hero__overlay" />
      </section>

      {/* ── TWO-COLUMN LAYOUT ─────────────────────────────────── */}
      <section className="svc-body">
        <div className="svc-body__inner">

          {/* LEFT SIDEBAR */}
          <aside className="svc-sidebar">
            <div className="svc-sidebar__label">Services</div>
            <nav className="svc-sidebar__nav">
              {services.map((s) => (
                <button
                  key={s.id}
                  className={`svc-sidebar__item${activeId === s.id ? " svc-sidebar__item--active" : ""}`}
                  onClick={() => setActiveId(s.id)}
                >
                  <svg
                    className="svc-sidebar__icon"
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d={icons[s.icon] || icons.tools} />
                  </svg>
                  {s.title}
                  <span className="svc-sidebar__arrow">›</span>
                </button>
              ))}
            </nav>

            {/* CTA box in sidebar */}
            <div className="svc-sidebar__cta">
              <p className="svc-sidebar__cta-text">
                Need a tailored solution for your project?
              </p>
              <button
                className="svc-sidebar__cta-btn"
                onClick={() => navigate("contact")}
              >
                Get a Consultation
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="svc-main" key={activeId}>
            {/* Service image */}
            <div className="svc-main__img-wrap">
              <img src={active.image} alt={active.title} className="svc-main__img" />
              <div className="svc-main__img-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[active.icon] || icons.tools} />
                </svg>
                {active.title}
              </div>
            </div>

            {/* Service body */}
            <div className="svc-main__content">
              <h2 className="svc-main__title">{active.title}</h2>
              <p className="svc-main__desc">{active.description}</p>

              <div className="svc-main__section-label">Key Deliverables</div>
              <ul className="svc-main__deliverables">
                {active.highlights.map((h, i) => (
                  <li key={h} className="svc-main__deliverable">
                    <span className="svc-main__d-num">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="svc-main__d-text">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <div className="process-label">How We Work</div>
            <h2 className="process-title">Our Delivery Process</h2>
          </div>
          <div className="process-grid">
            {process.map((p) => (
              <div key={p.step} className="process-card">
                <div className="process-card__step">{p.step}</div>
                <h3 className="process-card__title">{p.title}</h3>
                <p className="process-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="services-cta-section">
        <div className="services-cta-inner">
          <div>
            <h2 className="services-cta-title">Need a custom service solution?</h2>
            <p className="services-cta-text">
              Our consultants can design a tailored project management framework for your specific requirements.
            </p>
          </div>
          <button className="services-cta-btn" onClick={() => navigate("contact")}>
            Request a Consultation
          </button>
        </div>
      </section>

    </div>
  );
}