import "./ComparisonComingSoon.css";

export default function ComparisonComingSoon({
  navigate,
}) {
  return (
    <div className="coming-wrapper">

      <div className="coming-bg-grid" />

      <div className="coming-card">

        <div className="coming-icon">
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4v18" />
            <path d="M19 21V11l-6-4" />
          </svg>
        </div>

        <div className="coming-badge">
          404 • Under Development
        </div>

        <h1 className="coming-title">
          Comparison Tool
          <span>Coming Soon</span>
        </h1>

        <p className="coming-desc">
          We're building an advanced
          comparison engine with
          contractor-grade civil analytics,
          smart BOQ insights, and premium
          project benchmarking tools.
        </p>

        <button
          className="coming-btn"
          onClick={() => navigate("home")}
        >
          Back To Home
        </button>

      </div>
    </div>
  );
}