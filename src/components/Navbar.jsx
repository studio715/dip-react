    import { useState, useEffect, useRef } from "react";
    import { brand, navLinks, portals } from "../data/db.js";
    import "./Navbar.css";

    export default function Navbar({ current, navigate }) {
      const [loginOpen, setLoginOpen]           = useState(false);
      const [mobileOpen, setMobileOpen]         = useState(false);
      const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
      const [mobile, setMobile]                 = useState(window.innerWidth < 820);
      const ref = useRef();

      useEffect(() => {
        const handler = () => setMobile(window.innerWidth < 820);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
      }, []);

      useEffect(() => {
        const close = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            setLoginOpen(false);
            setMobileOpen(false);
            setMobileLoginOpen(false);
          }
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
      }, []);

      const go = (p) => {
        navigate(p);
        setMobileOpen(false);
        setMobileLoginOpen(false);
      };

      return (
        <nav className="navbar" ref={ref}>
          <div className="navbar__inner">

            {/* ── Logo ─────────────────────────────────────────── */}
            <div className="navbar__logo" onClick={() => go("home")}>
            <div className="navbar__logo-mark">
              <img
                src="/logo.png"
                alt="Dip Projects Logo"
                className="navbar__logo-img"
              />
            </div>
              <div className="navbar__logo-text">
                <div className="navbar__logo-name">{brand.name}</div>
              </div>
            </div>

            {/* ── Desktop ──────────────────────────────────────── */}
            {!mobile && (
              <div className="navbar__desktop">
                {/* Nav links */}
                <div className="navbar__links">
                  {navLinks.map((l) => {
                    const page = l.href.replace("#", "");
                    return (
                      <button
                        key={l.href}
                        className={`navbar__link ${current === page ? "navbar__link--active" : ""}`}
                        onClick={() => go(page)}
                      >
                        {l.label}
                      </button>
                    );
                  })}
                </div>

                {/* Portal Access + dropdown */}
                <div
                  className="navbar__login-wrap"
                  onMouseEnter={() => setLoginOpen(true)}
                  onMouseLeave={() => setLoginOpen(false)}
                >
                  <button className="navbar__login-btn">
                    Portal Access
                    <svg
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="white" strokeWidth="2.5"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  <div className={`navbar__dropdown ${loginOpen ? "navbar__dropdown--open" : ""}`}>
                    <div className="navbar__dropdown-header">
                      <span className="navbar__dropdown-label">Select your role</span>
                    </div>
                    {portals.map((p) => (
                      <a
                        key={p.id}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar__drop-item"
                      >
                        <div className="navbar__drop-item-label">
                          <span>{p.title}</span>
                          <span className="navbar__drop-item-sub">{p.subtitle}</span>
                        </div>
                        <svg
                          width="14" height="14" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Mobile ───────────────────────────────────────── */}
            {mobile && (
              <div className="navbar__mobile">

                {/* Mobile Login button + dropdown */}
                <div className="navbar__login-wrap">
                  <button
                    className="navbar__login-btn navbar__login-btn--mobile"
                    onClick={() => {
                      setMobileLoginOpen((v) => !v);
                      setMobileOpen(false);
                    }}
                  >
                    Login
                  </button>

                  <div
                    className={`navbar__dropdown navbar__dropdown--mobile ${
                      mobileLoginOpen ? "navbar__dropdown--open" : ""
                    }`}
                  >
                    {portals.map((p) => (
                      <a
                        key={p.id}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar__drop-item"
                      >
                        <div className="navbar__drop-item-label">
                          <span>{p.title}</span>
                          <span className="navbar__drop-item-sub">{p.subtitle}</span>
                        </div>
                        <svg
                          width="14" height="14" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hamburger */}
                <button
                  className={`navbar__hamburger ${mobileOpen ? "navbar__hamburger--open" : ""}`}
                  onClick={() => {
                    setMobileOpen((v) => !v);
                    setMobileLoginOpen(false);
                  }}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar__hamburger-bar" />
                  <span className="navbar__hamburger-bar" />
                  <span className="navbar__hamburger-bar" />
                </button>

                {/* Mobile nav popup */}
                {mobileOpen && (
                  <div className="navbar__mobile-menu">
                    {navLinks.map((l) => {
                      const page = l.href.replace("#", "");
                      return (
                        <button
                          key={l.href}
                          className={`navbar__mobile-link ${
                            current === page ? "navbar__mobile-link--active" : ""
                          }`}
                          onClick={() => go(page)}
                        >
                          {l.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

          </div>
        </nav>
      );
    }