import { Database, LayoutTemplate, Server, Sparkles, Wrench } from 'lucide-react';
import { PenLine } from 'lucide-react';
import { skills } from '../data/portfolioData';

const SKILL_ICONS: Record<string, JSX.Element> = {
  'layout-template': <LayoutTemplate />,
  server: <Server />,
  database: <Database />,
  wrench: <Wrench />,
  sparkles: <Sparkles />,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Skills</span>
          <h2 id="skills-title">Tools of the trade</h2>
          <p className="section-desc">
            An organized snapshot of the technologies and tools I work with across the stack.
          </p>
        </div>

        <div className={`skills-grid ${skills.length === 1 ? 'grid-1' : skills.length === 2 ? 'grid-2' : ''}`}>
          {skills.map((skill, i) => (
            <article
              className="card skill-card reveal"
              key={skill.title}
              style={{ ['--d' as string]: `${i * 0.08}s` }}
            >
              <div className="skill-icon">{SKILL_ICONS[skill.icon]}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="chip-row">
                {skill.items.map((item) => (
                  <span className="chip ph-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="edit-hint">
          <PenLine /> Replace the dashed placeholders with your actual skills.
        </p>
      </div>
    </section>
  );
}
