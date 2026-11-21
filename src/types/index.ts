export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Backend';
  technologies: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Skill {
  name: string;
  iconName?: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
  achievements: string[];
}

export interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  type: 'project' | 'collaboration' | 'certificate' | 'hackathon' | 'opensource';
  description: string;
  technologies?: string[];
  link?: string;
  verified: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
