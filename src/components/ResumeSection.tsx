import { Download, FileText } from 'lucide-react';
import resumePdf from '../assets/Apeksha_Gupta.pdf';

interface ResumeSectionProps {
  onPlaceholderClick: (message: string) => void;
}

export default function ResumeSection({ onPlaceholderClick: _onPlaceholderClick }: ResumeSectionProps) {
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
            href={resumePdf}
            download="Apeksha_Gupta_Resume.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
