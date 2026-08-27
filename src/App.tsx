import { useCallback, useEffect, useRef, useState } from 'react';
import About from './components/About';
import BackToTop from './components/BackToTop';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import Skills from './components/Skills';
import Toast from './components/Toast';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [toastMessage, setToastMessage] = useState('');
  const [toastShow, setToastShow] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastShow(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastShow(false), 3800);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  // Re-observes .reveal elements once the full page has mounted.
  useScrollReveal([]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero onPlaceholderClick={showToast} />
        <About />
        <Skills />
        <Experience />
        <Projects onPlaceholderClick={showToast} />
        <Education />
        <Certifications />
        <ResumeSection onPlaceholderClick={showToast} />
        <Contact onPlaceholderClick={showToast} onToast={showToast} />
      </main>

      <Footer onPlaceholderClick={showToast} />
      <BackToTop />
      <Toast message={toastMessage} show={toastShow} />
    </>
  );
}
