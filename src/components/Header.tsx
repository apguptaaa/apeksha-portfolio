import { FileText, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollState } from '../hooks/useScrollState';
import type { Theme } from '../hooks/useTheme';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);
  const { scrolled } = useScrollState();
  const activeId = useActiveSection(SECTION_IDS);

  // Mirrors the original vanilla-JS behavior: toggling a class on <body>
  // drives the mobile nav's max-height transition (see .nav rules in index.css).
  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setNavOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="Apeksha Gupta — home">
          <span className="logo-mark">AG</span>
          <span>
            Apeksha <em>Gupta</em>
          </span>
        </a>

        <nav className="nav" id="site-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${activeId === item.href.slice(1) ? ' active' : ''}`}
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#resume" className="btn btn-primary btn-sm" onClick={() => setNavOpen(false)}>
            <FileText /> Resume
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn theme-btn"
            aria-label="Toggle light / dark theme"
            onClick={onToggleTheme}
          >
            {theme === 'light' ? <Sun /> : <Moon />}
          </button>
          <button
            className="burger"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={18} /> : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
