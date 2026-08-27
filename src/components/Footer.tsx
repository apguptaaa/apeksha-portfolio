import { Github, Linkedin, Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolioData';

interface FooterProps {
  onPlaceholderClick: (message: string) => void;
}

const SOCIAL_ICONS: Record<string, JSX.Element> = {
  github: <Github />,
  linkedin: <Linkedin />,
  mail: <Mail />,
};

export default function Footer({ onPlaceholderClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>
              {profile.name} {profile.surname}
            </h3>
            <p>
              {profile.role} · {profile.company}
            </p>
          </div>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="icon-btn"
                aria-label={social.label}
                onClick={(e) => {
                  e.preventDefault();
                  onPlaceholderClick(`Add your ${social.label} link here.`);
                }}
              >
                {SOCIAL_ICONS[social.icon]}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <span>{year}</span> {profile.name} {profile.surname}. All rights reserved.
          </span>
          <span>
            Designed &amp; built with <span className="heart">♥</span> by {profile.name} {profile.surname}
          </span>
        </div>
      </div>
    </footer>
  );
}
