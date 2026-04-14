import { Project } from '../core/models/portfolio.models';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'EduNova',
    description: 'AI-powered modular academic ERP platform for higher education, powering 13+ workflow modules across admissions, academics, exams, and placements. Features semantic theming system and smart form engine with AI recommendations.',
    image: '',
    technologies: ['Angular', 'NgRx', 'Signals', 'AWS S3', 'AI Integrations', 'TypeScript'],
    githubUrl: '',
    demoUrl: '',
    featured: true,
    associateWith: 'DigitalEDU IT Solutions PVT LTD'
  },
  {
    id: 2,
    title: 'ImTransporter',
    description: 'Scalable Porter-like logistics platform with real-time tracking, secure APIs, and intuitive Angular frontend. Features JWT authentication with RBAC, WebSocket integration, and MVC backend architecture.',
    image: '',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'WebSocket', 'JWT', 'Bootstrap'],
    githubUrl: '',
    demoUrl: '',
    featured: true,
    associateWith: 'Kalibroida Technology Solutions PVT LTD'
  },
  {
    id: 5,
    title: 'Rider Webapp',
    description: 'Rider Webapp is a platform that connects riders with drivers for convenient and efficient transportation services. The application aims to provide a seamless experience for users to book rides, track their journeys, and make payments securely. It includes real-time ride tracking, fare estimation, wallets, and multiple payment options. The platform offers a user-friendly interface, secure authentication, and efficient communication between riders and drivers. Additionally, it supports various payment methods, digital wallets, and coupons, ensuring a smooth and hassle-free transaction process.',
    image: 'assets/images/riderApp.png',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap', 'Razorpay', 'WebSockets', 'Nodemailer'],
    githubUrl: 'https://github.com/Devendra4321/Rider_Webapp',
    demoUrl: 'https://rider-webapp-ia1oxpado-devendra-bholes-projects.vercel.app/home',
    featured: false,
    associateWith: 'Self-Project'
  },
  {
    id: 6,
    title: 'On Road Assistance System',
    description: 'On-Road Vehicle Breakdown Assistance System designed to revolutionize roadside help! It provides real-time assistance to drivers facing vehicle breakdowns, connecting them with nearby mechanics and tow trucks. The platform features GPS-based tracking, secure payments, and a rating system for mechanics. It also includes a dashboard for mechanics to manage their services and track their earnings. The system is built with ReactJs for the frontend and Node.js for the backend, with MongoDB for the database. It uses JWT for authentication. The platform also supports various payment methods, including Razorpay, and uses Nodemailer for sending notifications.',
    image: '',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap', 'Razorpay', 'Nodemailer'],
    githubUrl: 'https://github.com/Devendra4321/On-Road-Assistance-System',
    demoUrl: '',
    featured: false,
    associateWith: 'Dy Patil Institute Of Master Of Computer Application And Management'
  },
  {
    id: 7,
    title: 'Wanderlust',
    description: 'Wanderlust, a dynamic Airbnb-inspired website for travel enthusiasts! 🌍✈️. It allows users to book hotels, apartments, and other accommodations for their trips. The platform offers a seamless experience for users to browse properties, add them to their cart. It includes real-time property tracking, fare estimation. The platform offers a user-friendly interface, secure authentication.',
    image: '',
    technologies: ['Node.js', 'EJS', 'Express.js', 'MongoDB', 'Bootstrap'],
    githubUrl: 'https://github.com/Devendra4321/Wanderlust',
    demoUrl: 'https://devendra4321.onrender.com/',
    featured: false,
    associateWith: 'Self-Project'
  },
  {
    id: 8,
    title: 'Bus Depo Management System',
    description: 'Bus Depo Management System is a platform that manages bus depots and their operations. It provides a seamless experience for users to book tickets, track their journeys. The system also includes a dashboard for bus depot managers to manage their buses, routes, and schedules. The platform is built with HTML, CSS, and JavaScript for the frontend and Java for the backend, with MySQL for the database.',
    image: '',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'JSP', 'MySQL'],
    githubUrl: 'https://github.com/Devendra4321/Bus-Depo-Management-System',
    demoUrl: '',
    featured: false,
    associateWith: 'Dy Patil Institute Of Master Of Computer Application And Management'
  },
  {
    id: 9,
    title: 'Voting Application',
    description: 'This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting. It uses socket.io for real-time voting updates. It uses JWT for authentication.',
    image: '',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
    githubUrl: 'https://github.com/Devendra4321/Voting_app',
    demoUrl: '',
    featured: false,
    associateWith: 'Self-Project'
  }
];
