import { useState, useEffect } from "react";
import "./Home.css";

import {
  brand,
  stats,
  portals,
  services,
  projects as projectData,
  testimonials,
} from "../data/db.js";

/* ── Portal icon paths ──────────────────────────────────────── */
const portalIcons = {
  client:   "M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V10.5z",
  office:   "M3 3h18v18H3V3z M9 3v18 M3 9h18",
  engineer: "M2 17h20v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z M12 3a8 8 0 018 8v2H4v-2a8 8 0 018-8z",
};

/* ── StatCard ───────────────────────────────────────────────── */
function StatCard({ value, label, delay }) {
  return (
    <div
      className="stat-card"
      style={{ animation: `fadeUp 0.7s ${delay}s ease both` }}
    >
      <div className="stat-num">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ── PortalCard ─────────────────────────────────────────────── */
function PortalCard({ portal }) {
  const accentLight = portal.accent + "18";
  return (
    <a
      href={portal.href}
      target="_blank"
      rel="noopener noreferrer"
      className="portal-card-inner"
    >
      {/* Icon */}
      <div
        className="portal-icon-wrap"
        style={{
          background: `linear-gradient(135deg,${accentLight},${portal.accent}22)`,
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke={portal.accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={portalIcons[portal.id]} />
        </svg>
      </div>

      <div
        className="portal-subtitle"
        style={{ color: portal.accent }}
      >
        {portal.subtitle}
      </div>

      <h3 className="portal-title">{portal.title}</h3>
      <p className="portal-description">{portal.description}</p>

      <ul className="portal-features">
        {portal.features.map((f) => (
          <li key={f} className="portal-feature-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={portal.accent}
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <div
        className="portal-access-link"
        style={{ color: portal.accent }}
      >
        Access Portal
        <svg
          className="arrow-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
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
    const t = setInterval(
      () => setTIdx((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home-wrapper">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section">
        {/* Left column */}
        <div>

          <h1 className="hero-heading hero-title">
            We Build{" "}
            <span className="hero-heading-accent">Modern</span>
            <br />
            Spaces &<br />
            Experiences
          </h1>

          <p className="hero-description hero-sub">
            One powerful platform for clients, office staff, and site engineers.
            Manage projects, updates, documents, and operations from a single
            elegant dashboard.
          </p>

          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("portals")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Access Portals
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("projects")}
            >
              View Our Projects
            </button>
          </div>
        </div>

        {/* Right column — image */}
        <div className="hero-img hero-img-wrapper">
          <div className="hero-img-frame">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
              alt="Modern construction"
            />
          </div>

          <div className="hero-float-card float-card">
            <div className="hero-float-card-num">50+</div>
            <div className="hero-float-card-label">Projects Delivered</div>
          </div>

          <div className="hero-live-badge">
            <div className="hero-live-badge-inner">
              <span className="hero-live-dot" />
              <span className="hero-live-text">Live Tracking Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              label={s.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* ── PORTALS ──────────────────────────────────────────── */}
      <section id="portals" className="portals-section">
        <div className="portals-header">
          <div className="section-label">Role-Based Access</div>
          <h2 className="section-heading">Select Your Portal</h2>
          <p className="section-subtext">
            Secure, role-specific access for every stakeholder in the project
            lifecycle.
          </p>
        </div>

        <div className="portals-grid">
          {portals.map((p) => (
            <PortalCard key={p.id} portal={p} />
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <div className="section-label">What We Do</div>
              <h2 className="section-heading section-heading--light">
                Our Services
              </h2>
            </div>

            <button
              className="btn-ghost-light"
              onClick={() => navigate("services")}
            >
              View All Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="services-grid">
            {services.slice(0, 3).map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-card-img">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{s.title}</h3>
                  <p className="service-card-desc">{s.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="projects-section">
        <div className="projects-header">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-heading section-heading--light">Featured Projects</h2>
          </div>

          <button
            className="btn-ghost-dark"
            onClick={() => navigate("projects")}
          >
            All Projects
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="projects-grid">
          {projectData.slice(0, 3).map((p) => (
            <div key={p.id} className="proj-card">
              <div className="proj-card-img-wrap">
                <img src={p.image} alt={p.title} className="proj-img" />
                <div
                  className={`proj-status-badge ${
                    p.status === "Completed"
                      ? "proj-status-badge--completed"
                      : "proj-status-badge--inprogress"
                  }`}
                >
                  {p.status}
                </div>
              </div>
              <div className="proj-card-body">
                <div className="proj-card-meta">
                  {p.category} · {p.year}
                </div>
                <h3 className="proj-card-title">{p.title}</h3>
                <div className="proj-card-location">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="section-label">Client Feedback</div>
          <h2 className="section-heading testimonials-heading">
            What Our Clients Say
          </h2>

          <div className="testimonial-card">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">{testimonials[tIdx].quote}</p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonials[tIdx].avatar}
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-author-name">
                  {testimonials[tIdx].name}
                </div>
                <div className="testimonial-author-role">
                  {testimonials[tIdx].role}
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIdx(i)}
                className={`testimonial-dot ${
                  i === tIdx ? "testimonial-dot--active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div>
            <div className="cta-label">Get Started Today</div>
            <h2 className="cta-heading">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="cta-subtext">
              Let's discuss your project requirements and create a roadmap to
              deliver results that exceed expectations.
            </p>
          </div>

          <button className="btn-cta" onClick={() => navigate("contact")}>
            Start a Conversation
          </button>
        </div>
      </section>

    </div>
  );
}