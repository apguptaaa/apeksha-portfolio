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
  role: 'Web Developer',
  company: 'Ubitech Solutions',
  tagline: 'Building modern, responsive, and user-focused web experiences.',
  intro:
    "I'm a Web Developer at Ubitech Solutions, crafting clean, high-quality websites and web applications that feel fast, work on every device, and put real user needs first.",
};

export const aboutParagraphs: string[] = [
  "I'm Apeksha Gupta, a Web Developer currently working at Ubitech Solutions. I enjoy turning ideas into polished, responsive websites and web applications — the kind that are pleasant to use, perform well, and are easy to maintain.",
  'My approach is simple: understand the problem first, write clean and reliable code, and pay attention to the small details that make an interface feel right. I care deeply about responsiveness, usability, and quality — building experiences that work well for everyone, on every device.',
  "I'm genuinely curious about the web and enjoy exploring new tools and technologies to keep sharpening my craft. My goal is to keep growing as a developer and to take on work that is meaningful, well-built, and truly user-focused.",
];

export const quickFacts: QuickFact[] = [
  { icon: 'briefcase', label: 'Role', value: 'Web Developer' },
  { icon: 'building-2', label: 'Company', value: 'Ubitech Solutions' },
  { icon: 'map-pin', label: 'Location', value: 'City, Country' },
  { icon: 'target', label: 'Focus', value: 'Responsive & user-friendly web' },
];

export const skills: Skill[] = [
  {
    icon: 'layout-template',
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and pixel-conscious interfaces with clean, maintainable code.',
    items: ['Skill 01', 'Skill 02', 'Skill 03', 'Skill 04'],
  },
  {
    icon: 'server',
    title: 'Backend Development',
    description: 'Building the logic and APIs that power reliable, well-structured web applications.',
    items: ['Skill 01', 'Skill 02', 'Skill 03', 'Skill 04'],
  },
  {
    icon: 'database',
    title: 'Databases',
    description: 'Designing and working with structured data that keeps applications consistent and fast.',
    items: ['Skill 01', 'Skill 02', 'Skill 03'],
  },
  {
    icon: 'wrench',
    title: 'Tools & Technologies',
    description: 'The everyday tooling that keeps my workflow smooth, collaborative, and productive.',
    items: ['Tool 01', 'Tool 02', 'Tool 03', 'Tool 04'],
  },
  {
    icon: 'sparkles',
    title: 'Other Skills',
    description: 'Complementary strengths — communication, problem-solving, and teamwork — that make me a better developer.',
    items: ['Skill 01', 'Skill 02', 'Skill 03'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Web Developer',
    company: 'Ubitech Solutions',
    current: true,
    dateRange: 'Joining date — Present',
    location: 'Location / Remote',
    responsibilities: [
      'Describe a core responsibility — what you build and own day to day.',
      'Describe another key responsibility or area you contribute to.',
      'Describe how you collaborate with your team or clients.',
    ],
    technologies: ['Tech 01', 'Tech 02', 'Tech 03', 'Tech 04'],
    achievements: [
      'Highlight a major contribution — a feature, improvement, or delivery.',
      'Highlight an achievement or measurable impact from your work.',
    ],
  },
];

export const projects: Project[] = [
  {
    tag: 'Project 01',
    title: 'Project Title',
    description: 'One or two lines describing the problem it solves and what you built.',
    technologies: ['Tech 01', 'Tech 02', 'Tech 03'],
    role: 'e.g., Frontend Developer / Full-stack',
    features: ['Key feature or highlight', 'Another key feature'],
    codeUrl: '',
    demoUrl: '',
  },
  {
    tag: 'Project 02',
    title: 'Project Title',
    description: 'One or two lines describing the problem it solves and what you built.',
    technologies: ['Tech 01', 'Tech 02', 'Tech 03'],
    role: 'e.g., Frontend Developer / Full-stack',
    features: ['Key feature or highlight', 'Another key feature'],
    codeUrl: '',
    demoUrl: '',
  },
  {
    tag: 'Project 03',
    title: 'Project Title',
    description: 'One or two lines describing the problem it solves and what you built.',
    technologies: ['Tech 01', 'Tech 02', 'Tech 03'],
    role: 'e.g., Frontend Developer / Full-stack',
    features: ['Key feature or highlight', 'Another key feature'],
    codeUrl: '',
    demoUrl: '',
  },
];

export const education: EducationItem = {
  degree: 'Degree / Course Name',
  institution: 'Institution / University',
  year: 'Graduation Year',
  details: 'Add relevant details here — specialization, notable coursework, projects, or academic achievements.',
};

export const certifications: Certification[] = [
  {
    icon: 'award',
    title: 'Certification / Achievement Title',
    issuer: 'Issuer / Event · Year',
    description: 'One line about what it covers or why it matters.',
  },
  {
    icon: 'trophy',
    title: 'Award / Hackathon Title',
    issuer: 'Organizer · Year',
    description: 'One line about the accomplishment and what you contributed.',
  },
  {
    icon: 'medal',
    title: 'Workshop / Achievement Title',
    issuer: 'Issuer / Event · Year',
    description: 'One line describing the workshop or achievement.',
  },
];

export const contactLinks: ContactLink[] = [
  { icon: 'mail', label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { icon: 'phone', label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/your-profile', href: '#' },
  { icon: 'github', label: 'GitHub', value: 'github.com/your-username', href: '#' },
  { icon: 'globe', label: 'Other', value: 'Other professional link', href: '#' },
];

export const socialLinks: SocialLink[] = [
  { icon: 'github', label: 'GitHub', href: '#' },
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'mail', label: 'Email', href: '#' },
];

export const CONTACT_EMAIL = 'your.email@example.com';
