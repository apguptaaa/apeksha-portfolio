import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2 id="exp-title">Where I've worked</h2>
          <p className="section-desc">My professional journey so far.</p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article className="tl-item reveal" key={job.company}>
              <span className="tl-dot" aria-hidden="true"></span>
              <div className="card tl-card">
                <div className="tl-head">
                  <h3>{job.role}</h3>
                  <span className="tl-company">· {job.company}</span>
                  {job.current && (
                    <span className="badge-current">
                      <span className="pulse-dot" style={{ width: 6, height: 6 }} aria-hidden="true"></span>
                      Current
                    </span>
                  )}
                </div>

                <div className="tl-meta">
                  <span>
                    <Calendar /> {job.dateRange}
                  </span>
                  <span>
                    <MapPin /> {job.location}
                  </span>
                </div>

                <h4 className="tl-sub">Responsibilities</h4>
                <ul className="tl-list">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h4 className="tl-sub">Technologies Used</h4>
                <div className="chip-row">
                  {job.technologies.map((tech) => (
                    <span className="chip ph-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="tl-sub">Contributions &amp; Achievements</h4>
                <ul className="tl-list">
                  {job.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
