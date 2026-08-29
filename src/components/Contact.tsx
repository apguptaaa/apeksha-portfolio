import { Github, Globe, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { CONTACT_EMAIL, contactLinks } from '../data/portfolioData';

interface ContactProps {
  onPlaceholderClick: (message: string) => void;
  onToast: (message: string) => void;
}

const CONTACT_ICONS: Record<string, JSX.Element> = {
  mail: <Mail />,
  phone: <Phone />,
  linkedin: <Linkedin />,
  github: <Github />,
  globe: <Globe />,
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact({ onPlaceholderClick, onToast }: ContactProps) {
  const [form, setForm] = useState<FormState>(initialForm);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`Hi Apeksha,\n\n${form.message}\n\n— ${form.name} (${form.email})`);

    onToast('Opening your email app — your message is ready to send.');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setForm(initialForm);
  }

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2 id="contact-title">Let's build something great</h2>
          <p className="section-desc">
            Have a project in mind, a role to discuss, or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Contact information</h3>
            <p>Reach out through any of these channels, or use the form — I usually respond within a day.</p>
            <ul className="contact-list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="contact-item"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (link.href === '#') {
                        e.preventDefault();
                        onPlaceholderClick(`Add your ${link.label.toLowerCase()} here.`);
                      }
                    }}
                  >
                    <span className="fact-icon">{CONTACT_ICONS[link.icon]}</span>
                    <div>
                      <span className="k">{link.label}</span>
                      <span className="v">{link.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="card contact-form reveal" style={{ ['--d' as string]: '.15s' }} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="cf-name">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-subject">
                Subject <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="cf-subject"
                name="subject"
                placeholder="What is this about?"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="cf-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="Tell me a little about your project or inquiry…"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <Send /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
