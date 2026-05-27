import { brand, stats, team } from "../data/db.js";
import "./About.css";

const values = [
  { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Uncompromising Quality", desc: "Every project is delivered to the highest standards with rigorous quality audits at each milestone." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Safety First", desc: "We maintain zero-tolerance safety protocols across all active sites, protecting workers and stakeholders." },
  { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75 M9 7a4 4 0 100 8 4 4 0 000-8z", title: "Client Partnership", desc: "We treat every client relationship as a long-term partnership built on transparency and mutual trust." },
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "On-Time Delivery", desc: "Our project management systems and disciplined approach ensure consistent on-schedule delivery." },
  { icon: "M2 20h.01 M7 20v-4 M12 20v-8 M17 20V8 M22 4v16", title: "Data-Driven Decisions", desc: "We leverage real-time dashboards and analytics to optimise project performance and resource allocation." },
  { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a1 1 0 110-2 1 1 0 010 2z", title: "Local Expertise", desc: "Deep knowledge of Gujarat's regulatory landscape, climate conditions, and construction ecosystem." },
];

const timeline = [
  { year: "2012", title: "Company Founded", desc: "Dip Projects established in Surat with a focus on residential construction management." },
  { year: "2015", title: "Commercial Expansion", desc: "Entered commercial segment with first Grade-A office project in Vadodara." },
  { year: "2018", title: "Industrial Division", desc: "Launched dedicated industrial infrastructure division serving manufacturing clients." },
  { year: "2021", title: "Digital Transformation", desc: "Deployed proprietary project management portals for clients and field engineers." },
  { year: "2023", title: "50+ Projects Milestone", desc: "Crossed 50 successfully delivered projects across 8 cities in Gujarat." },
  { year: "2026", title: "Continued Growth", desc: "Expanding consultancy division and onboarding high-complexity infrastructure projects." },
];

export default function About({ navigate }) {
  return (
    <div className="about-wrapper">

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="about-header">
        <div className="about-header__inner">
          <div className="about-header__breadcrumb">
            <button
              className="about-header__breadcrumb-btn"
              onClick={() => navigate("home")}
            >
              Home
            </button>
            <span className="about-header__breadcrumb-sep">/</span>
            <span className="about-header__breadcrumb-current">About</span>
          </div>
          <div className="about-header__content">
            <div className="about-header__label">Our Story</div>
            <h1 className="about-header__title">
              Building Gujarat's Skyline Since 2012
            </h1>
            <p className="about-header__desc">{brand.description}</p>
          </div>
        </div>
      </section>

      {/* ── MISSION + IMAGE ──────────────────────────────────── */}
      <section className="mission-section">
        <div>
          <div className="mission-label">Our Mission</div>
          <h2 className="mission-title">
            Delivering Excellence Through Every Phase
          </h2>
          <p className="mission-text">
            At Dip Projects, we believe that great construction is the product of
            meticulous planning, disciplined execution, and genuine care for the
            client's vision. We don't just manage projects — we build lasting
            relationships.
          </p>
          <p className="mission-text">
            Our team of certified engineers, experienced project managers, and
            dedicated support staff work in unison to ensure that every project we
            take on becomes a benchmark for quality in Gujarat's construction
            industry.
          </p>
          <div className="mission-stats">
            {stats.map((s) => (
              <div key={s.label} className="mission-stat-card">
                <div className="mission-stat-value">{s.value}</div>
                <div className="mission-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
            alt="Construction team"
          />
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="values-section">
        <div className="values-inner">
          <div className="values-header">
            <div className="values-label">What Drives Us</div>
            <h2 className="values-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-card-icon">
                  <svg
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="#f47b20" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 className="value-card-title">{v.title}</h3>
                <p className="value-card-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="timeline-section">
        <div className="timeline-header">
          <div className="timeline-label">Our Journey</div>
          <h2 className="timeline-title">Milestones That Define Us</h2>
        </div>

        <div className="timeline-track">
          <div className="timeline-track__line" />
          {timeline.map((t, i) => (
            <div
              key={t.year}
              className={`timeline-item ${i % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
            >
              <div className="timeline-card">
                <div className="timeline-card__year">{t.year}</div>
                <div className="timeline-card__title">{t.title}</div>
                <div className="timeline-card__desc">{t.desc}</div>
              </div>
              <div className="timeline-dot" />
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="team-section">
        <div className="team-inner">
          <div className="team-header">
            <div className="team-label">The People</div>
            <h2 className="team-title">Leadership Team</h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.id} className="team-card">
                <div className="team-card__avatar">{m.avatar}</div>
                <h3 className="team-card__name">{m.name}</h3>
                <div className="team-card__role">{m.role}</div>
                <p className="team-card__bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Ready to Work Together?</h2>
          <p className="about-cta-text">
            Tell us about your project and let's build something exceptional.
          </p>
          <button
            className="about-cta-btn"
            onClick={() => navigate("contact")}
          >
            Get In Touch
          </button>
        </div>
      </section>

    </div>
  );
}