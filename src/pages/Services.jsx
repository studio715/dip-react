import { services } from "../data/db.js";
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
  return (
    <div className="services-wrapper">

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="services-header-section">
        <div className="services-header-section__inner">
          <div className="services-header-section__breadcrumb">
            <button
              className="services-header-section__breadcrumb-btn"
              onClick={() => navigate("home")}
            >
              Home
            </button>
            <span className="services-header-section__breadcrumb-sep">/</span>
            <span className="services-header-section__breadcrumb-current">
              Services
            </span>
          </div>
          <div className="services-header-section__content">
            <div className="services-header-section__label">What We Offer</div>
            <h1 className="services-header-section__title">
              Comprehensive Construction Services
            </h1>
            <p className="services-header-section__desc">
              From feasibility to final handover, our integrated services ensure
              every aspect of your project is handled with expertise and precision.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="svc-grid-section">
        <div className="svc-grid">
          {services.map((s) => (
            <div key={s.id} className="svc-card">
              <div className="svc-card__img-wrap">
                <img src={s.image} alt={s.title} className="svc-img" />
              </div>
              <div className="svc-card__body">
                <div className="svc-card__icon">
                  <svg
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="#f47b20" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d={icons[s.icon] || icons.tools} />
                  </svg>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.description}</p>
                <div className="svc-card__divider">
                  <div className="svc-card__highlights-label">
                    Key Deliverables
                  </div>
                  <div className="svc-card__tags">
                    {s.highlights.map((h) => (
                      <span key={h} className="svc-card__tag">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            <h2 className="services-cta-title">
              Need a custom service solution?
            </h2>
            <p className="services-cta-text">
              Our consultants can design a tailored project management framework
              for your specific requirements.
            </p>
          </div>
          <button
            className="services-cta-btn"
            onClick={() => navigate("contact")}
          >
            Request a Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
