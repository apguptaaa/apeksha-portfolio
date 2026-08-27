export interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  current: boolean;
  dateRange: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  features: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface Certification {
  icon: 'award' | 'trophy' | 'medal';
  title: string;
  issuer: string;
  description: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}
