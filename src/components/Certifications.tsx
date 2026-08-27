import { Award, Medal, Trophy } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const CERT_ICONS: Record<string, JSX.Element> = {
  award: <Award />,
  trophy: <Trophy />,
  medal: <Medal />,
};

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="cert-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Certifications &amp; Achievements</span>
          <h2 id="cert-title">Milestones along the way</h2>
          <p className="section-desc">Certifications, awards, and accomplishments — add yours below.</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <article className="card cert-card reveal" key={cert.title} style={{ ['--d' as string]: `${i * 0.1}s` }}>
              <div className="cert-icon">{CERT_ICONS[cert.icon]}</div>
              <h3>{cert.title}</h3>
              <p className="cert-meta">{cert.issuer}</p>
              <p>{cert.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
