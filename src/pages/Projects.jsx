import { useState } from "react";
import { projects} from "../data/db.js";
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

  /* featured = first project */
  const featured = projects[0];

  return (
    <div className="projects-page">

      {/* ══════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════ */}
      <section className="pp-hero">
        <div className="pp-hero__bg">
          <img src={featured.image} alt={featured.title} className="pp-hero__bg-img" />
          <div className="pp-hero__bg-overlay" />
        </div>

        <div className="pp-hero__inner">
          {/* breadcrumb */}
          <div className="pp-hero__breadcrumb">
            <button className="pp-hero__bc-btn" onClick={() => navigate("home")}>Home</button>
            <span className="pp-hero__bc-sep">/</span>
            <span className="pp-hero__bc-cur">Projects</span>
          </div>

          <div className="pp-hero__content">
            <div className="pp-hero__eyebrow">Our Portfolio</div>
            <h1 className="pp-hero__title">
              Projects That<br />
              <span className="pp-hero__title-accent">Define Our Legacy</span>
            </h1>
            <p className="pp-hero__sub">
              200+ completed projects across residential, commercial, and industrial sectors —
              delivered on schedule, within budget, across Gujarat.
            </p>

            {/* quick stat pills */}
            <div className="pp-hero__pills">
              {[
                { v: "200+", l: "Projects" },
                { v: "30+",  l: "Years" },
                { v: "6",    l: "Cities" },
                { v: "100%", l: "On-Time" },
              ].map((s) => (
                <div key={s.l} className="pp-hero__pill">
                  <span className="pp-hero__pill-val">{s.v}</span>
                  <span className="pp-hero__pill-lbl">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED PROJECT SPOTLIGHT
      ══════════════════════════════════════════════════ */}
      <section className="pp-featured">
        <div className="pp-featured__inner">
          <div className="pp-featured__label">Featured Project</div>

          <div className="pp-featured__card">
            {/* image */}
            <div className="pp-featured__img-wrap">
              <img src={featured.image} alt={featured.title} className="pp-featured__img" />
              <div className="pp-featured__img-overlay" />
              <div className={`pp-featured__status pp-featured__status--${featured.status === "Completed" ? "done" : "wip"}`}>
                {featured.status}
              </div>
            </div>

            {/* info */}
            <div className="pp-featured__info">
              <div className="pp-featured__cat">{featured.category}</div>
              <h2 className="pp-featured__title">{featured.title}</h2>
              <p className="pp-featured__desc">{featured.description}</p>

              <div className="pp-featured__meta">
                {[
                  { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z", val: featured.location },
                  { icon: "M3 4h18v18H3V4zM16 2v4M8 2v4M3 10h18",                                     val: featured.year },
                  { icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", val: featured.area },
                ].map((m) => (
                  <div key={m.val} className="pp-featured__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={m.icon} />
                    </svg>
                    {m.val}
                  </div>
                ))}
              </div>

              <div className="pp-featured__tags">
                {featured.tags.map((t) => (
                  <span key={t} className="pp-featured__tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STICKY FILTERS
      ══════════════════════════════════════════════════ */}
      <div className="pp-filters">
        <div className="pp-filters__inner">
          <div className="pp-filters__group">
            <span className="pp-filters__lbl">Category</span>
            {categories.map((c) => (
              <button
                key={c}
                className={`pp-filter-btn${cat === c ? " pp-filter-btn--active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="pp-filters__divider" />

          <div className="pp-filters__group">
            <span className="pp-filters__lbl">Status</span>
            {statuses.map((s) => (
              <button
                key={s}
                className={`pp-filter-btn${status === s ? " pp-filter-btn--active" : ""}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="pp-filters__count">
            <span className="pp-filters__count-num">{filtered.length}</span>
            <span className="pp-filters__count-lbl"> project{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          PROJECTS GRID
      ══════════════════════════════════════════════════ */}
      <section className="pp-grid-section">
        <div className="pp-grid-inner">
          {filtered.length === 0 ? (
            <div className="pp-empty">
              <div className="pp-empty__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c8b8b0" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <p className="pp-empty__text">No projects match the selected filters.</p>
              <button className="pp-empty__reset" onClick={() => { setCat("All"); setStatus("All"); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="pp-grid">
              {filtered.map((p, i) => (
                <div key={p.id} className={`pp-card${i === 0 ? " pp-card--wide" : ""}`}>

                  {/* Media */}
                  <div className="pp-card__media">
                    <img src={p.image} alt={p.title} className="pp-card__img" />
                    <div className="pp-card__overlay" />

                    {/* top badges */}
                    <div className="pp-card__top">
                      <span className="pp-card__cat">{p.category}</span>
                      <span className={`pp-card__status pp-card__status--${p.status === "Completed" ? "done" : "wip"}`}>
                        <span className="pp-card__status-dot" />
                        {p.status}
                      </span>
                    </div>

                    {/* bottom title overlay */}
                    <div className="pp-card__title-wrap">
                      <div className="pp-card__year">{p.year}</div>
                      <h3 className="pp-card__title">{p.title}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="pp-card__body">
                    <div className="pp-card__meta">
                      <span className="pp-card__meta-item">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                        {p.location}
                      </span>
                      <span className="pp-card__meta-dot">·</span>
                      <span className="pp-card__meta-item">{p.area}</span>
                    </div>
                    <p className="pp-card__desc">{p.description}</p>
                    <div className="pp-card__tags">
                      {p.tags.map((t) => (
                        <span key={t} className="pp-card__tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DARK STATS BAND
      ══════════════════════════════════════════════════ */}
      <section className="pp-stats-band">
        <div className="pp-stats-band__inner">
          <div className="pp-stats-band__left">
            <div className="pp-stats-band__eyebrow">Track Record</div>
            <h2 className="pp-stats-band__heading">Numbers That Speak for Themselves</h2>
          </div>
          <div className="pp-stats-band__grid">
            {[
              { val: "200+", lbl: "Projects Delivered" },
              { val: "30+",  lbl: "Years Experience" },
              { val: "6",    lbl: "Cities in Gujarat" },
              { val: "150+", lbl: "Satisfied Clients" },
            ].map((s) => (
              <div key={s.lbl} className="pp-stats-band__card">
                <div className="pp-stats-band__val">{s.val}</div>
                <div className="pp-stats-band__lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════ */}
      <section className="pp-cta">
        <div className="pp-cta__inner">
          <div className="pp-cta__left">
            <div className="pp-cta__eyebrow">Start Today</div>
            <h2 className="pp-cta__title">Your Project Could Be Next</h2>
            <p className="pp-cta__desc">
              We're actively accepting new projects across Gujarat. Let's discuss
              how we can bring your vision to life — on time, on budget.
            </p>
          </div>
          <div className="pp-cta__actions">
            <a
              href="https://wa.me/919099406405?text=Hello%20Dip%20Projects%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noopener noreferrer"
              className="pp-cta__btn-wa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L.054 23.448a.5.5 0 00.611.61l5.682-1.49A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.371l-.361-.214-3.734.979.995-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <button className="pp-cta__btn-primary" onClick={() => navigate("contact")}>
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}