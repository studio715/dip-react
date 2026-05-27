import { brand, navLinks, services } from "../data/db.js";
import "./Footer.css";

const socialIcons = [
  {
    href: brand.social.linkedin,
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    href: brand.social.instagram,
    path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 15a3 3 0 110-6 3 3 0 010 6z M17.5 6.5h.01",
  },
  {
    href: brand.social.twitter,
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
];


const contactItems = [
  {
    id: "address",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    text: brand.contact.address,
  },
  {
    id: "phone",
    icon: "M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 015.13 12.7 19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.9.33 1.78.63 2.63a2 2 0 01-.45 2.11L8.1 9.91a16 16 0 006 6l1.44-1.14a2 2 0 012.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0122 16.92z",
    text: brand.contact.phone,
  },
  {
    id: "email",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
    text: brand.contact.email,
  },
];

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer__grid">

        {/* ── Brand ──────────────────────────────────────────── */}
        <div className="footer__brand">
          <div className="footer__brand-logo">
          <div className="footer__brand-mark footer__brand-mark--plain">
            <img
              src="/logo.png"
              alt="Dip Projects Logo"
              className="footer__logo-img"
            />
          </div>
            <div>
              <div className="footer__brand-name">{brand.name}</div>
              <div className="footer__brand-sub">Civil Project Management</div>
            </div>
          </div>

          <p className="footer__brand-desc">{brand.description}</p>

          <div className="footer__socials">
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Social link ${i + 1}`}
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="#9a8078" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── Navigation ─────────────────────────────────────── */}
        <div>
          <div className="footer__col-heading">Navigation</div>
          {navLinks.map((l) => (
            <button
              key={l.href}
              className="footer__nav-btn"
              onClick={() => navigate(l.href.replace("#", ""))}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* ── Services ───────────────────────────────────────── */}
        <div>
          <div className="footer__col-heading">Services</div>
          {services.map((s) => (
            <button
              key={s.id}
              className="footer__nav-btn"
              onClick={() => navigate("services")}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* ── Contact ────────────────────────────────────────── */}
        <div>
          <div className="footer__col-heading">Contact</div>
          {contactItems.map((c) => (
            <div key={c.id} className="footer__contact-item">
              <svg
                className="footer__contact-icon"
                width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="#f47b20" strokeWidth="1.8" strokeLinecap="round"
              >
                <path d={c.icon} />
              </svg>
              <span className="footer__contact-text">{c.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="footer__bottom">
        <span className="footer__bottom-text">
          © 2026 {brand.name}. All Rights Reserved.
        </span>
        <span className="footer__bottom-text">
          Built with precision. Delivered with trust.
        </span>
      </div>
    </footer>
  );
}