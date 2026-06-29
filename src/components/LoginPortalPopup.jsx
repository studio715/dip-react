import { useState, useEffect } from "react";

/**
 * LoginPortalPopup
 * ─────────────────
 * Shows once per browser session (sessionStorage key "dip_portal_popup_seen").
 * Closing it prevents it from appearing again until the tab/window is closed
 * and the URL is reopened.
 *
 * Props:
 *   portals  – array from db.js  (id, title, subtitle, description, href, accent)
 *   onClose  – optional callback when popup is dismissed
 */
export default function LoginPortalPopup({ portals, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("dip_portal_popup_seen");
    if (!seen) setVisible(true);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("dip_portal_popup_seen", "1");
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className="lpp-backdrop" onClick={handleClose}>
      <div
        className="lpp-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Select your portal"
      >
        {/* ── Header ── */}
        <div className="lpp-header">
          <div className="lpp-eyebrow">Welcome to Dip Projects</div>
          <h2 className="lpp-title">Select Your Portal</h2>
          <button
            className="lpp-close"
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Portal cards ── */}
        <div className="lpp-grid">
          {portals.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lpp-card"
              onClick={() => sessionStorage.setItem("dip_portal_popup_seen", "1")}
              style={{ "--accent": p.accent }}
            >
              <div className="lpp-card-top">
                <span className="lpp-tag" style={{ color: p.accent, borderColor: p.accent + "60", background: p.accent + "12" }}>
                  {p.subtitle}
                </span>
                <svg className="lpp-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <h3 className="lpp-card-title">{p.title}</h3>
              <p className="lpp-card-desc">{p.description}</p>
              <div className="lpp-card-cta" style={{ color: p.accent }}>
                Access Portal →
              </div>
            </a>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="lpp-footer">
          <button className="lpp-skip" onClick={handleClose}>
            Just browsing — take me to the site
          </button>
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        /* Backdrop */
        .lpp-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(30, 20, 5, 0.45);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: lppFadeIn 0.25s ease;
        }
        @keyframes lppFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Modal shell */
        .lpp-modal {
          background: #ffffff;
          border: 1px solid rgba(200, 144, 42, 0.18);
          border-radius: 18px;
          width: 100%;
          max-width: 780px;
          margin-top:70px;
          max-height: 70vh;
          overflow-y: auto;
          padding: 36px 32px 28px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(200, 144, 42, 0.08);
          animation: lppSlideUp 0.3s cubic-bezier(.22,.68,0,1.2);
        }
        @keyframes lppSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        /* Header */
        .lpp-header {
          text-align: center;
          margin-bottom: 28px;
          position: relative;
        }
        .lpp-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c8902a;
          margin-bottom: 10px;
        }
        .lpp-title {
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 700;
          color: #1a1208;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .lpp-sub {
          font-size: 14px;
          color: #7a6a52;
          max-width: 380px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .lpp-close {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #f5f0e8;
          border: 1px solid #e8dcc8;
          border-radius: 8px;
          color: #9a8a72;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .lpp-close:hover {
          background: #ede5d6;
          color: #1a1208;
          border-color: #d4c4a8;
        }

        /* Portal grid */
        .lpp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }
        @media (max-width: 620px) {
          .lpp-grid { grid-template-columns: 1fr; }
          .lpp-modal { padding: 28px 20px 22px; }
        }

        /* Portal card */
        .lpp-card {
          display: flex;
          flex-direction: column;
          background: #fdfaf5;
          border: 1px solid #ede5d5;
          border-radius: 12px;
          padding: 18px 16px 16px;
          text-decoration: none;
          transition: background 0.18s, border-color 0.18s, transform 0.18s, box-shadow 0.18s;
          cursor: pointer;
        }
        .lpp-card:hover {
          background: #fff8ee;
          border-color: var(--accent, #c8902a);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(200, 144, 42, 0.12);
        }
        .lpp-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .lpp-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 20px;
          border: 1px solid;
        }
        .lpp-arrow {
          color: #c8b89a;
          transition: color 0.15s, transform 0.15s;
        }
        .lpp-card:hover .lpp-arrow {
          color: var(--accent, #c8902a);
          transform: translate(2px, -2px);
        }
        .lpp-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1208;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }
        .lpp-card-desc {
          font-size: 12.5px;
          color: #7a6a52;
          line-height: 1.55;
          margin: 0 0 14px;
          flex: 1;
        }
        .lpp-card-cta {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-top: auto;
        }

        /* Footer */
        .lpp-footer {
          text-align: center;
          border-top: 1px solid #ede5d5;
          padding-top: 18px;
        }
        .lpp-skip {
          background: none;
          border: none;
          color: #b0a08a;
          font-size: 12.5px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: color 0.15s;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .lpp-skip:hover { color: #7a6a52; }
      `}</style>
    </div>
  );
}