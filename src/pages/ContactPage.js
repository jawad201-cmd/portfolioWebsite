import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const TO_EMAIL = "youremail@example.com"; // ← change to your address

/** Contact form that opens user's email client (no backend required). */
export default function ContactPage() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || "New portfolio inquiry";
    const message = form.message.value.trim();

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const mailto = `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
  }, []);

  useEffect(() => {
    document.title = "Contact • ML/DS Portfolio Website";
  }, []);

  return (
    <div className="contact-viewport">
      <header className="contact-header">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-actions">
          <Link className="btn" to="/">Home</Link>
        </div>
      </header>

      <div className="contact-split">
        {/* Left: form */}
        <section className="contact-card">
          <h2>Send a message</h2>
          <p className="muted">This opens your email app with the message pre‑filled.</p>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="row"><label>Name</label><input name="name" placeholder="Your name" required /></div>
            <div className="row"><label>Email</label><input type="email" name="email" placeholder="you@example.com" required /></div>
            <div className="row"><label>Subject</label><input name="subject" placeholder="Project inquiry" /></div>
            <div className="row"><label>Message</label><textarea name="message" placeholder="Tell me about your project…" required /></div>
            <button className="btn" type="submit">Send</button>
          </form>
        </section>

        {/* Right: direct links + marketplaces */}
        <aside className="contact-card" id="direct-links">
          <h2>Direct links</h2>

          <div className="icon-grid" aria-label="Contact and social links">
            <a className="icon-btn" href="mailto:jawadprod1999@gmail.com" aria-label="Email" title="Email">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5z" /></svg>
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/jawad-ahmad-05b33036b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.14 0-3.5 1.17-3.5 3.1V21h4v-6.3c0-.86.62-1.7 1.86-1.7 1.19 0 1.64.78 1.64 1.94V21h4v-7.17C22.5 10.65 20.61 9 18.1 9c-1.45 0-2.59.55-3.1 1.36V9h-.5z" /></svg>
            </a>
            <a className="icon-btn" href="https://wa.me/923306774795" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.1.56 4.09 1.54 5.82L0 24l6.53-1.7a11.8 11.8 0 0 0 5.54 1.41h.01c6.55 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.14-3.42-8.33zM12.08 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.88 1 1.04-3.78-.22-.35a9.42 9.42 0 0 1-1.44-4.99c0-5.2 4.24-9.44 9.46-9.44 2.52 0 4.88.98 6.66 2.76a9.38 9.38 0 0 1 2.78 6.68c0 5.2-4.24 9.43-9.46 9.43zm5.48-7.15c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.45-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.07-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.22 3.1.15.2 2.12 3.25 5.14 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.26-.2-.56-.35z" /></svg>
            </a>
          </div>

          <h3 style={{ marginTop: 18 }}>Place Order</h3>
          <div className="icon-grid icon-grid--small" aria-label="Order on marketplaces">
            <a className="icon-btn" href="https://www.fiverr.com/s/Q7WB4z3" target="_blank" rel="noopener noreferrer" aria-label="Fiverr" title="Fiverr">
              <span className="mask-icon" style={{ "--icon": "url(https://cdn.simpleicons.org/fiverr)" }} />
            </a>
            <a className="icon-btn" href="https://www.upwork.com/freelancers/~011b1d11b648058edc?mp_source=share" target="_blank" rel="noopener noreferrer" aria-label="Upwork" title="Upwork">
              <span className="mask-icon" style={{ "--icon": "url(https://cdn.simpleicons.org/upwork)" }} />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
