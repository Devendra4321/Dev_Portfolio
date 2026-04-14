import { Experience } from '../core/models/portfolio.models';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    company: 'DigitalEDU IT Solutions PVT LTD',
    logo: 'assets/images/digitaledu_it_solutions_pvt_ltd_logo.jpg',
    role: 'Software Developer',
    duration: 'Aug 2025 - Present',
    startDate: new Date('2025-08-01'),
    current: true,
    location: 'Pune',
    description: [
      'Designed a highly reusable UI component library supporting form-driven UIs via JSON schemas, declarative form rendering, and super-grid systems',
      'Delivered secure S3 file upload capabilities via pre-signed AWS URLs, decoupling file I/O from backend dependencies',
      'Integrated Eazbuzz payment gateway using modular, component-based payment service',
      'Spearheaded the adoption of Signal-based state management and real-time data syncing, improving responsiveness and user personalization across the platform.'
    ],
    technologies: ['Angular', 'JSON Schema', 'AWS S3', 'Payment Gateway', 'TypeScript', 'Signals', 'Ngrx Store', 'Mobile First Approach']
  },
  {
    id: 2,
    company: 'Kalibroida Technology Solutions PVT LTD',
    logo: 'assets/images/kalibroida_logo.jpg',
    role: 'Junior Software Developer',
    duration: 'Mar 2024 - Feb 2025',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2025-02-28'),
    current: false,
    location: 'Pune',
    description: [
      'Implemented WebSocket technology to enhance real-time data exchange',
      'Designed a clean MVC architecture for the backend using Node.js and MongoDB, ensuring maintainability and horizontal scalability.',
      'Integrated RESTful APIs with Angular services for seamless data synchronization',
      'Secured the platform with JWT-based authentication combined with role-based access control (RBAC) for granular permission management',
      'Designed and developed dynamic, mobile-friendly interfaces using Bootstrap'
    ],
    technologies: ['Angular', 'WebSocket', 'RESTful APIs', 'Bootstrap', 'Node.js', 'MongoDB', 'JWT', 'RBAC']
  }
];
