import { Download, FileText } from 'lucide-react';

interface ResumeSectionProps {
  onPlaceholderClick: (message: string) => void;
}

export default function ResumeSection({ onPlaceholderClick }: ResumeSectionProps) {
  return (
    <section id="resume" aria-labelledby="resume-title">
      <div className="container">
        <div className="card resume-card reveal">
          <div className="resume-icon">
            <FileText />
          </div>
          <h2 id="resume-title">Grab my resume</h2>
          <p>
            Get a complete, at-a-glance overview of my experience, skills, education, and achievements — all in
            one neatly formatted document.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              onPlaceholderClick('Add your resume PDF file to enable the download.');
            }}
          >
            <Download /> Download Resume
          </a>
          <span className="resume-note ph">
            Link this button to your resume file (e.g., Apeksha-Gupta-Resume.pdf)
          </span>
        </div>
      </div>
    </section>
  );
}
