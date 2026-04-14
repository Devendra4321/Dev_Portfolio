import { Skill } from '../core/models/portfolio.models';

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'Angular', icon: 'pi pi-box', category: 'frontend', proficiency: 95 },
  { name: 'JavaScript', icon: 'pi pi-code', category: 'frontend', proficiency: 90 },
  { name: 'TypeScript', icon: 'pi pi-code', category: 'frontend', proficiency: 95 },
  { name: 'HTML5', icon: 'pi pi-globe', category: 'frontend', proficiency: 95 },
  { name: 'CSS3/SCSS', icon: 'pi pi-palette', category: 'frontend', proficiency: 90 },
  { name: 'Angular Material', icon: 'pi pi-th-large', category: 'frontend', proficiency: 90 },
  { name: 'PrimeNG', icon: 'pi pi-prime', category: 'frontend', proficiency: 85 },
  { name: 'Tailwind', icon: 'pi pi-wind', category: 'frontend', proficiency: 85 },
  { name: 'Bootstrap', icon: 'pi pi-mobile', category: 'frontend', proficiency: 90 },
  { name: 'NgRx', icon: 'pi pi-box', category: 'frontend', proficiency: 80 },
  { name: 'Signals', icon: 'pi pi-bolt', category: 'frontend', proficiency: 85 },

  // Backend
  { name: 'Node.js', icon: 'pi pi-server', category: 'backend', proficiency: 85 },
  { name: 'Express.js', icon: 'pi pi-bolt', category: 'backend', proficiency: 85 },
  { name: 'MongoDB', icon: 'pi pi-database', category: 'backend', proficiency: 85 },
  { name: 'Mongoose', icon: 'pi pi-database', category: 'backend', proficiency: 80 },
  { name: 'RESTful APIs', icon: 'pi pi-link', category: 'backend', proficiency: 90 },
  { name: 'JWT Authentication', icon: 'pi pi-shield', category: 'backend', proficiency: 85 },
  { name: 'WebSockets', icon: 'pi pi-sync', category: 'backend', proficiency: 80 },
  { name: 'AI Integrations', icon: 'pi pi-sparkles', category: 'backend', proficiency: 75 },

  //Database
  { name: 'MySQL', icon: 'pi pi-database', category: 'database', proficiency: 85 },
  { name: 'MongoDB', icon: 'pi pi-database', category: 'database', proficiency: 85 },

  // Cloud & DevOps
  { name: 'AWS S3', icon: 'pi pi-cloud', category: 'devops', proficiency: 85 },
  { name: 'Cloudinary', icon: 'pi pi-cloud-upload', category: 'devops', proficiency: 80 },
  { name: 'Git', icon: 'pi pi-code', category: 'devops', proficiency: 95 },
  { name: 'GitHub', icon: 'pi pi-github', category: 'devops', proficiency: 90 },

  // Tools
  { name: 'VS Code', icon: 'pi pi-pencil', category: 'tools', proficiency: 95 },
  { name: 'Postman', icon: 'pi pi-send', category: 'tools', proficiency: 90 },
  { name: 'Linux', icon: 'pi pi-desktop', category: 'tools', proficiency: 80 },
  { name: 'Chrome DevTools', icon: 'pi pi-search', category: 'tools', proficiency: 85 }
];
