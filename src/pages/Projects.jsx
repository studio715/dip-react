import { useState } from "react";
import { projects } from "../data/db.js";
import "./Projects.css";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
const statuses   = ["All", "Completed", "Ongoing"];

export default function Projects({ navigate }) {
  const [cat,    setCat]    = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = projects.filter(
    (p) =>
      (cat    === "All" || p.category === cat) &&
      (status === "All" || p.status   === status)
  );

  const featured = projects[0];

  return (
    <div className="pp">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="pp-hero">
        <div className="pp-hero-bg">
          <img src={featured.image} alt={featured.title} className="pp-hero-img" />
          <div className="pp-hero-overlay" />
        </div>
        <div className="pp-hero-inner">
          <nav className="pp-breadcrumb">
            <button onClick={() => navigate("home")}>Home</button>
            <span>/</span>
            <span className="pp-breadcrumb-cur">Projects</span>
          </nav>
          <div className="pp-hero-content">
            <span className="pp-eyebrow">Our Portfolio</span>
            <h1 className="pp-hero-h1">
              Projects That<br />
              <em>Define Our Legacy</em>
            </h1>
            <p className="pp-hero-sub">
              200+ completed projects across residential, commercial, and industrial sectors —
              delivered on schedule, within budget, across Gujarat.
            </p>
            <div className="pp-hero-stats">
              {[
                { v: "200+", l: "Projects" },
                { v: "30+",  l: "Years" },
                { v: "6",    l: "Cities" },
                { v: "100%", l: "On-Time" },
              ].map((s) => (
                <div key={s.l} className="pp-hero-stat">
                  <span className="pp-hero-stat-val">{s.v}</span>
                  <span className="pp-hero-stat-lbl">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ─────────────────────────────── */}
      <section className="pp-featured">
        <div className="pp-featured-inner">
          <span className="pp-label">Featured Project</span>
          <div className="pp-featured-card">
            <div className="pp-featured-img-wrap">
              <img src={featured.image} alt={featured.title} className="pp-featured-img" />
              <div className="pp-featured-img-overlay" />
              <span className={`pp-featured-badge pp-featured-badge--${featured.status === "Completed" ? "done" : "wip"}`}>
                {featured.status}
              </span>
            </div>
            <div className="pp-featured-info">
              <span className="pp-featured-cat">{featured.category}</span>
              <h2 className="pp-featured-title">{featured.title}</h2>
              <p className="pp-featured-desc">{featured.description}</p>
              <div className="pp-featured-meta">
                {[
                  { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z", val: featured.location },
                  { icon: "M3 4h18v16H3V4zM16 2v4M8 2v4M3 10h18", val: featured.year },
                  { icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", val: featured.area },
                ].map((m) => (
                  <div key={m.val} className="pp-featured-meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={m.icon} />
                    </svg>
                    {m.val}
                  </div>
                ))}
              </div>
              <div className="pp-featured-tags">
                {featured.tags.map((t) => <span key={t} className="pp-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTERS ──────────────────────────────── */}
      <div className="pp-filters">
        <div className="pp-filters-inner">
          <div className="pp-filter-group">
            <span className="pp-filter-label">Category</span>
            {categories.map((c) => (
              <button
                key={c}
                className={`pp-filter-btn${cat === c ? " pp-filter-btn--on" : ""}`}
                onClick={() => setCat(c)}
              >{c}</button>
            ))}
          </div>
          <div className="pp-filter-sep" />
          <div className="pp-filter-group">
            <span className="pp-filter-label">Status</span>
            {statuses.map((s) => (
              <button
                key={s}
                className={`pp-filter-btn${status === s ? " pp-filter-btn--on" : ""}`}
                onClick={() => setStatus(s)}
              >{s}</button>
            ))}
          </div>
          <div className="pp-filter-count">
            <span className="pp-filter-count-num">{filtered.length}</span>
            <span className="pp-filter-count-lbl"> project{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

      {/* ── GRID ─────────────────────────────────── */}
      <section className="pp-grid-section">
        <div className="pp-grid-inner">
          {filtered.length === 0 ? (
            <div className="pp-empty">
              <div className="pp-empty-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <p className="pp-empty-text">No projects match the selected filters.</p>
              <button className="pp-empty-reset" onClick={() => { setCat("All"); setStatus("All"); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="pp-grid">
              {filtered.map((p, i) => (
                <div key={p.id} className={`pp-card${i === 0 ? " pp-card--wide" : ""}`}>
                  <div className="pp-card-media">
                    <img src={p.image} alt={p.title} className="pp-card-img" />
                    <div className="pp-card-overlay" />
                    <div className="pp-card-top">
                      <span className="pp-card-cat">{p.category}</span>
                      <span className={`pp-card-status pp-card-status--${p.status === "Completed" ? "done" : "wip"}`}>
                        <span className="pp-card-dot" />
                        {p.status}
                      </span>
                    </div>
                    <div className="pp-card-foot">
                      <div className="pp-card-year">{p.year}</div>
                      <h3 className="pp-card-title">{p.title}</h3>
                    </div>
                  </div>
                  <div className="pp-card-body">
                    <div className="pp-card-meta">
                      <span className="pp-card-meta-item">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                        {p.location}
                      </span>
                      <span className="pp-card-meta-sep">·</span>
                      <span className="pp-card-meta-item">{p.area}</span>
                    </div>
                    <p className="pp-card-desc">{p.description}</p>
                    <div className="pp-card-tags">
                      {p.tags.map((t) => <span key={t} className="pp-tag pp-tag--sm">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────── */}
      <section className="pp-stats-band">
        <div className="pp-stats-band-inner">
          <div className="pp-stats-band-left">
            <span className="pp-eyebrow pp-eyebrow--gold">Track Record</span>
            <h2 className="pp-stats-band-h2">Numbers That<br />Speak for Themselves</h2>
          </div>
          <div className="pp-stats-band-grid">
            {[
              { val: "200+", lbl: "Projects Delivered" },
              { val: "30+",  lbl: "Years Experience" },
              { val: "6",    lbl: "Cities in Gujarat" },
              { val: "150+", lbl: "Satisfied Clients" },
            ].map((s) => (
              <div key={s.lbl} className="pp-stats-card">
                <div className="pp-stats-val">{s.val}</div>
                <div className="pp-stats-div" />
                <div className="pp-stats-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="pp-cta">
        <div className="pp-cta-inner">
          <div className="pp-cta-text">
            <span className="pp-cta-eyebrow">Start Today</span>
            <h2 className="pp-cta-h2">Your Project Could Be Next</h2>
            <p className="pp-cta-sub">
              We're actively accepting new projects across Gujarat. Let's discuss
              how we can bring your vision to life — on time, on budget.
            </p>
          </div>
          <div className="pp-cta-actions">
            <a
              href="https://wa.me/919099406405?text=Hello%20Dip%20Projects%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noopener noreferrer"
              className="pp-btn-wa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L.054 23.448a.5.5 0 00.611.61l5.682-1.49A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.371l-.361-.214-3.734.979.995-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <button className="pp-btn-primary" onClick={() => navigate("contact")}>
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}