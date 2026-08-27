import { Building2, Calendar, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Education</span>
          <h2 id="edu-title">Academic background</h2>
        </div>

        <article className="card edu-card reveal">
          <div className="edu-icon">
            <GraduationCap />
          </div>
          <div>
            <h3>{education.degree}</h3>
            <div className="edu-meta">
              <span>
                <Building2 /> {education.institution}
              </span>
              <span>
                <Calendar /> {education.year}
              </span>
            </div>
            <p>{education.details}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
