import { Check, ExternalLink, Github, Image } from 'lucide-react';
import { projects } from '../data/portfolioData';

interface ProjectsProps {
  onPlaceholderClick: (message: string) => void;
}

export default function Projects({ onPlaceholderClick }: ProjectsProps) {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Projects</span>
          <h2 id="projects-title">Selected work</h2>
          <p className="section-desc">
            A showcase of projects I've built — replace these placeholders with your real projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article className="card project-card reveal" key={project.title + i} style={{ ['--d' as string]: `${i * 0.1}s` }}>
              <div className="project-thumb">
                <Image aria-hidden="true" />
                <span>Project screenshot</span>
              </div>
              <div className="project-body">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-row" style={{ marginBottom: 16 }}>
                  {project.technologies.map((tech) => (
                    <span className="chip ph-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="project-role">
                  Role: <b>{project.role}</b>
                </p>
                <ul className="project-feats">
                  {project.features.map((feat, fi) => (
                    <li key={fi}>
                      <Check />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.codeUrl || '#'}
                    className="btn btn-ghost"
                    onClick={(e) => {
                      e.preventDefault();
                      onPlaceholderClick('Add the GitHub repository link for this project.');
                    }}
                  >
                    <Github /> Code
                  </a>
                  <a
                    href={project.demoUrl || '#'}
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      onPlaceholderClick('Add the live demo link for this project.');
                    }}
                  >
                    <ExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
