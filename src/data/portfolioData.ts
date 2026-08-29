import type {
  QuickFact,
  Skill,
  ExperienceItem,
  Project,
  EducationItem,
  Certification,
  ContactLink,
  SocialLink,
} from '../types';

// ── Edit everything in this file with your real information ──

export const profile = {
  name: 'Apeksha',
  surname: 'Gupta',
  role: 'Software Developer | Software Engineer',
  company: 'Ubitech Solutions',
  tagline: 'Designing and developing responsive web applications with a focus on UI implementation and API integration.',
  intro:
    "I'm a Software Developer with 1+ year of professional experience designing and developing web applications using Angular, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Node.js, and REST APIs. Experienced in frontend and backend development, responsive UI implementation, API integration, and working with relational databases including MySQL and PostgreSQL.",
};

export const aboutParagraphs: string[] = [
  "I'm Apeksha Gupta, a Software Developer currently working as a Software Engineer at Ubitech Solutions, contributing to HRMS software development using Angular, AdonisJS, TypeScript, and MySQL.",
  "I have a strong understanding of web application development, debugging, Git-based version control, and database-driven applications. I enjoy turning ideas into polished, responsive user interfaces with a focus on usability and consistent application behavior.",
  "I am seeking a Software Developer opportunity in an MNC where I can contribute to scalable applications and continue expanding my technical expertise."
];

export const quickFacts: QuickFact[] = [
  { icon: 'briefcase', label: 'Role', value: 'Software Developer' },
  { icon: 'building-2', label: 'Company', value: 'Ubitech Solutions' },
  { icon: 'map-pin', label: 'Location', value: 'Gwalior, Madhya Pradesh' },
  { icon: 'target', label: 'Focus', value: 'Full-Stack Development' },
];

export const skills: Skill[] = [
  {
    icon: 'layout-template',
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and clean interfaces.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Tailwind CSS'],
  },
  {
    icon: 'server',
    title: 'Backend Development',
    description: 'Building robust backend services and APIs.',
    items: ['Node.js', 'AdonisJS', 'REST APIs'],
  },
  {
    icon: 'database',
    title: 'Databases',
    description: 'Designing and working with structured data.',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    icon: 'wrench',
    title: 'Tools & Technologies',
    description: 'The tools I use for source control and debugging.',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'MySQL Workbench'],
  }
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Ubitech Solutions Pvt. Ltd.',
    current: true,
    dateRange: 'July 2025 — Present',
    location: 'Gwalior',
    responsibilities: [
      'Developed and maintained web application interfaces using Angular, TypeScript, HTML, CSS, and Tailwind CSS.',
      'Designed and implemented responsive user interfaces with a focus on usability and consistent application behavior.',
      'Integrated frontend applications with REST APIs for retrieving, submitting, and updating application data.',
      'Used TypeScript to develop reusable and maintainable frontend functionality.',
      'Collaborated with backend services built using AdonisJS and Node.js.',
      'Worked with MySQL databases for application data and database-driven functionality.',
      'Tested and troubleshooted APIs using Postman and resolved frontend and integration-related issues.'
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AdonisJS', 'MySQL', 'Git'],
    achievements: [
      'Contributed to HRMS software development combining both frontend and backend development activities.',
      'Successfully integrated complex REST APIs and built reusable frontend functionality.'
    ],
  },
];

export const projects: Project[] = [
  {
    tag: 'Enterprise Application',
    title: 'HRMS Software',
    description: 'An HRMS web application with a focus on frontend development and user interface implementation.',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AdonisJS', 'MySQL'],
    role: 'Software Engineer',
    features: [
      'Developed application screens and reusable UI components using Angular and TypeScript.',
      'Implemented responsive layouts using Tailwind CSS.',
      'Integrated frontend components with backend REST APIs.',
      'Worked with MySQL-backed application functionality and data-driven interfaces.'
    ],
    codeUrl: '',
    demoUrl: '',
  }
];

export const education: EducationItem = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'ITM Universe, Gwalior',
  year: '2023 — 2025',
  details: 'Achieved a CGPA of 9.20 / 10',
};

export const certifications: Certification[] = [
  {
    icon: 'award',
    title: 'Palo Alto Networks Certification',
    issuer: 'Palo Alto Networks · 2024',
    description: 'Professional certification in network security.',
  }
];

export const resumeUrl = ''; // Set this to your resume PDF path, e.g. '/Apeksha-Gupta-Resume.pdf'

export const contactLinks: ContactLink[] = [
  { icon: 'mail', label: 'Email', value: 'guptaap783@gmail.com', href: 'mailto:guptaap783@gmail.com' },
  { icon: 'phone', label: 'Phone', value: '+91 91311 38550', href: 'tel:+919131138550' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Apeksha Gupta', href: 'https://www.linkedin.com/in/apeksha-gupta-783b67260' },
];

export const socialLinks: SocialLink[] = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/apeksha-gupta-783b67260' },
  { icon: 'mail', label: 'Email', href: 'mailto:guptaap783@gmail.com' },
];

export const CONTACT_EMAIL = 'guptaap783@gmail.com';
