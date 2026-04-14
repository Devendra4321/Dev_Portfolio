import { Education } from '../core/models/portfolio.models';

export const EDUCATION_DATA: Education[] = [
  {
    id: 1,
    institution: 'Dy Patil Institute Of Master Of Computer Application And Management, Akurdi, Pune',
    logo: '',
    degree: 'Master of Computer Application',
    field: 'Computer Applications',
    duration: '2022 - 2024',
    startDate: new Date('2022-07-01'),
    endDate: new Date('2024-05-30'),
    achievements: [
      'CGPA: 8.21'
    ]
  },
  {
    id: 2,
    institution: 'Arts, Science P. O. Nahata Commerce College, Bhusawal',
    logo: '',
    degree: 'Bachelor of Computer Application',
    field: 'Computer Applications',
    duration: '2019 - 2022',
    startDate: new Date('2019-07-01'),
    endDate: new Date('2022-05-30'),
    achievements: [
      'Percentage: 87.67%'
    ]
  }
];
