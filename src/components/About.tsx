import { Briefcase, Building2, MapPin, Sparkles, Target } from 'lucide-react';
import { aboutParagraphs, quickFacts } from '../data/portfolioData';

const FACT_ICONS: Record<string, JSX.Element> = {
  briefcase: <Briefcase />,
  'building-2': <Building2 />,
  'map-pin': <MapPin />,
  target: <Target />,
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About Me</span>
          <h2 id="about-title">A developer who cares about the details</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="card facts-card reveal" style={{ ['--d' as string]: '.15s' }} aria-label="Quick facts">
            <h3>
              <Sparkles /> Quick Facts
            </h3>
            {quickFacts.map((fact) => (
              <div className="fact" key={fact.label}>
                <span className="fact-icon">{FACT_ICONS[fact.icon]}</span>
                <div>
                  <span className="k">{fact.label}</span>
                  <span className="v">{fact.value}</span>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
