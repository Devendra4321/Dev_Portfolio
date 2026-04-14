export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  associateWith?: string;
}

export interface Experience {
  id: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  logo: string;
  degree: string;
  field: string;
  duration: string;
  startDate: Date;
  endDate: Date;
  achievements: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  footerTagline: string;
  bio: string;
  avatar: string;
  image: string;
  location: string;
  email: string;
  phone: string;
  yearsExperience: number;
  projectsCompleted: number;
  happyClients: number;
  resumeUrl: string;
  socialLinks: SocialLink[];
}