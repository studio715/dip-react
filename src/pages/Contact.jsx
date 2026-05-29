import { useState } from "react";
import { brand, faqs } from "../data/db.js";
import "./Contact.css";
import emailjs from "@emailjs/browser";   

const contactInfo = [
  {
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z",
    label: "Office Address",
    value: brand.contact.address,
  },
  {
    icon: "M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 015.13 12.7 19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.9.33 1.78.63 2.63a2 2 0 01-.45 2.11L8.1 9.91a16 16 0 006 6l1.44-1.14a2 2 0 012.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0122 16.92z",
    label: "Phone",
    value: brand.contact.phone,
  },
  {
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
    label: "Email",
    value: brand.contact.email,
  },
  {
    icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2",
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM",
  },
];

const portals = [
  { label: "Client Portal", href: "https://script.google.com/macros/s/AKfycbzj1gJhzE7jLH4Y80n4G7KuptmpF65n56k-XLp0CUEZssIyHfR4di71ZMC4kZweRxhi/exec" },
  { label: "Office Portal", href: "https://script.google.com/macros/s/AKfycbzy1Zhk4L04Y0LJM84VvPTI4tCn_IjBkMNYFwXB8JN-PZfueNjC731E-8Ohz0D109qz/exec" },
  { label: "Engineer Portal", href: "https://script.google.com/macros/s/AKfycbz76SAsGFH8WZxj5FFVhCxMiWvPb8pq1uCX5j4Lg9qC46gC3Q9hYjWpdOWOCFBNQuQQzQ/exec" },
];

const timeline = [
  { time: "Within 24 hrs", label: "Initial acknowledgment" },
  { time: "1–2 business days", label: "Detailed response from our team" },
  { time: "Within 5 days", label: "Site visit scheduling (if applicable)" },
];

export default function Contact({ navigate }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    emailjs
      .send(
        "service_lrw1yjt",
        "template_094l3ek",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          project: form.project,
          message: form.message,
        },
        "4UgVATVay3-q0KqxN"
      )
      .then(() => {
        setSubmitted(true);
  
        setForm({
          name: "",
          email: "",
          phone: "",
          project: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
  
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div className="contact-page">

      {/* PAGE HEADER */}
      <section className="contact-header">
        <div className="contact-header__inner">
          <div className="contact-header__breadcrumb">
            <button
              className="contact-header__breadcrumb-btn"
              onClick={() => navigate("home")}
            >
              Home
            </button>
            <span className="contact-header__breadcrumb-sep">/</span>
            <span className="contact-header__breadcrumb-current">Contact</span>
          </div>
          <div className="contact-header__content">
            <div className="contact-header__eyebrow">Let's Connect</div>
            <h1 className="contact-header__title">Start a Conversation</h1>
            <p className="contact-header__desc">
              Whether you have a project in mind or just want to understand how we work, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="contact-info">
      <div className="contact-info__map-bg">
        <iframe
          title="Dip Projects Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0205087808517!2d72.7828812860216!3d21.191344231907777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8a757f2d3b%3A0x16a8f8a6c0f0deb0!2sDip%20Projects%20(Project%20management%20consultant)!5e0!3m2!1sen!2sus!4v1779949677718!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
        <div className="contact-info__grid">
          {contactInfo.map(c => (
            <div key={c.label} className="contact-info__card">
              <div className="contact-info__icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f47b20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={c.icon} />
                </svg>
              </div>
              <div>
                <div className="contact-info__label">{c.label}</div>
                {/* <div className="contact-info__value">{c.value}</div> */}
                {c.label === "Office Address" ? (
                <a
                  href="https://maps.app.goo.gl/wWmnhxCDZCnfbjZA6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__value contact-info__value--link"
                >
                  {c.value}
                </a>
              ) : (
                <div className="contact-info__value">
                  {c.value}
                </div>
              )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="contact-body">

        {/* FORM */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-form__success">
              <div className="contact-form__success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="contact-form__success-title">Message Sent</h3>
              <p className="contact-form__success-desc">
                Thank you for reaching out. A member of our team will contact you within 1–2 business days.
              </p>
              <button className="contact-form__success-btn" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="contact-form__title">Send Us a Message</h2>
              <p className="contact-form__subtitle">Fill out the form and we'll respond within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label className="contact-form__label">Full Name *</label>
                    <input
                      required
                      className="input-field"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rajesh Mehta"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Email Address *</label>
                    <input
                      required
                      type="email"
                      className="input-field"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rajesh@company.com"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label className="contact-form__label">Phone Number</label>
                    <input
                      className="input-field"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Project Type</label>
                    <select
                      className="input-field input-field--select"
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Consultancy</option>
                      <option>Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form__field contact-form__field--full">
                  <label className="contact-form__label">Project Details *</label>
                  <textarea
                    required
                    className="input-field input-field--textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project — location, scope, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className={`contact-form__submit ${
                    loading
                      ? "contact-form__submit--loading"
                      : ""
                  }`}
                  disabled={loading}
                >
                  {loading
                    ? "Sending Message..."
                    : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="contact-sidebar">

          {/* Portals */}
          <div className="contact-portals">
            <h3 className="contact-portals__title">Already a Client?</h3>
            <p className="contact-portals__desc">
              Access your project dashboard directly through your dedicated portal.
            </p>
            <div className="contact-portals__list">
            {portals
                .filter(p => p.label === "Client Portal")
                .map(p => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-portals__link"
                >
                  {p.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="contact-timeline">
            <div className="contact-timeline__heading">What to Expect</div>
            {timeline.map(r => (
              <div key={r.label} className="contact-timeline__item">
                <div className="contact-timeline__dot" />
                <div>
                  <div className="contact-timeline__time">{r.time}</div>
                  <div className="contact-timeline__label">{r.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="contact-faq__inner">
          <div className="contact-faq__header">
            <div className="contact-faq__eyebrow">Common Questions</div>
            <h2 className="contact-faq__title">Frequently Asked Questions</h2>
          </div>
          <div className="contact-faq__list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-item__trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <svg
                    className={`faq-item__icon${openFaq === i ? " faq-item__icon--open" : ""}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9a8078"
                    strokeWidth="2.2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="faq-item__body">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}