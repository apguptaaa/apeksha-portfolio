import { ArrowRight, Briefcase, ChevronDown, Code, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  onPlaceholderClick: (message: string) => void;
}

const SOCIAL_ICONS: Record<string, JSX.Element> = {
  github: <Github />,
  linkedin: <Linkedin />,
  mail: <Mail />,
};

export default function Hero({ onPlaceholderClick }: HeroProps) {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge fade-in" style={{ animationDelay: '.05s' }}>
            <span className="pulse-dot" aria-hidden="true"></span>
            {profile.role} · {profile.company}
          </span>

          <h1 className="fade-in" style={{ animationDelay: '.15s' }}>
            {profile.name} <span className="grad">{profile.surname}</span>
          </h1>

          <p className="hero-tagline fade-in" style={{ animationDelay: '.25s' }}>
            <Code aria-hidden="true" style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />
            {profile.tagline}
          </p>

          <p className="hero-intro fade-in" style={{ animationDelay: '.35s' }}>
            I'm a {profile.role} at <strong>{profile.company}</strong>, crafting clean, high-quality websites
            and web applications that feel fast, work on every device, and put real user needs first.
          </p>

          <div className="hero-ctas fade-in" style={{ animationDelay: '.45s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail /> Contact Me
            </a>
          </div>

          <div className="hero-socials fade-in" style={{ animationDelay: '.55s' }}>
            <span className="label">Find me on</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="icon-btn"
                aria-label={social.label}
                target={social.href !== '#' ? '_blank' : undefined}
                rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (social.href === '#') {
                    e.preventDefault();
                    onPlaceholderClick(`Add your ${social.label} link here.`);
                  }
                }}
              >
                {SOCIAL_ICONS[social.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual fade-in" style={{ animationDelay: '.3s' }}>
          <div className="blob" aria-hidden="true"></div>
          <div className="blob b2" aria-hidden="true"></div>

          <div className="avatar-ring">
            <div className="avatar">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </div>
          </div>

          <div className="float-card fc-1">
            <span className="fc-icon">
              <Briefcase />
            </span>
            <div>
              <strong>{profile.role}</strong>
              <span>{profile.company}</span>
            </div>
          </div>
          <div className="float-card fc-2">
            <span className="fc-icon">
              <Smartphone />
            </span>
            <div>
              <strong>Responsive First</strong>
              <span>Every screen, every device</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About section">
        <ChevronDown />
      </a>
    </section>
  );
}
