import { useState } from "react";
import { projects } from "../data/db.js";
import "./Projects.css";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
const statuses = ["All", "Completed", "Ongoing"];

export default function Projects({ navigate }) {
  const [cat, setCat] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = projects.filter(p =>
    (cat === "All" || p.category === cat) &&
    (status === "All" || p.status === status)
  );

  return (
    <div className="projects-page">

      {/* PAGE HEADER */}
      <section className="projects-header">
        <div className="projects-header__inner">
          <div className="projects-header__breadcrumb">
            <button
              className="projects-header__breadcrumb-btn"
              onClick={() => navigate("home")}
            >
              Home
            </button>
            <span className="projects-header__breadcrumb-sep">/</span>
            <span className="projects-header__breadcrumb-current">Projects</span>
          </div>
          <div className="projects-header__content">
            <div className="projects-header__eyebrow">Portfolio</div>
            <h1 className="projects-header__title">
              Projects That Define Our Legacy
            </h1>
            <p className="projects-header__desc">
              A curated selection of our residential, commercial, and industrial work across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="projects-filters">
        <div className="projects-filters__inner">
          <div className="projects-filters__group">
            <span className="projects-filters__label">Category:</span>
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn${cat === c ? " filter-btn--active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="projects-filters__group">
            <span className="projects-filters__label">Status:</span>
            {statuses.map(s => (
              <button
                key={s}
                className={`filter-btn${status === s ? " filter-btn--active" : ""}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="projects-filters__count">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <section className="projects-grid">
        {filtered.length === 0 ? (
          <div className="projects-grid__empty">
            <svg
              className="projects-grid__empty-icon"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ddd"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            No projects match the selected filters.
          </div>
        ) : (
          <div className="projects-grid__list">
            {filtered.map(p => (
              <div key={p.id} className="proj-card">
                <div className="proj-card__media">
                  <img src={p.image} alt={p.title} className="proj-img" />
                  <div className="proj-card__overlay" />
                  <div className="proj-card__badge">{p.category}</div>
                  <div className={`proj-card__status proj-card__status--${p.status === "Completed" ? "completed" : "ongoing"}`}>
                    {p.status}
                  </div>
                  <div className="proj-card__title-wrap">
                    <h3 className="proj-card__title">{p.title}</h3>
                  </div>
                </div>
                <div className="proj-card__body">
                  <div className="proj-card__meta">
                    <div className="proj-card__meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      </svg>
                      {p.location}
                    </div>
                    <div className="proj-card__meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      {p.year}
                    </div>
                    <div className="proj-card__meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      </svg>
                      {p.area}
                    </div>
                  </div>
                  <p className="proj-card__desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <div className="projects-cta__inner">
          <div>
            <h2 className="projects-cta__title">Your Project Could Be Next</h2>
            <p className="projects-cta__desc">
              We're actively accepting new projects across Gujarat. Let's discuss how we can bring your vision to life.
            </p>
          </div>
          <button className="projects-cta__btn" onClick={() => navigate("contact")}>
            Start Your Project
          </button>
        </div>
      </section>

    </div>
  );
}