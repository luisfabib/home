import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | 'Present';
  gpa?: string;
  thesis?: string;
  advisor?: string;
  achievements: string[];
  courses: string[];
  logo?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Ph.D.',
      field: 'Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      startYear: 2019,
      endYear: 2024,
      gpa: '3.95/4.0',
      thesis: 'Machine Learning Approaches for Large-Scale Data Processing and Analysis',
      advisor: 'Dr. Jennifer Martinez',
      achievements: [
        'NSF Graduate Research Fellowship',
        'Outstanding Teaching Assistant Award',
        'Best Paper Award at ICML 2023',
        'Phi Beta Kappa Honor Society'
      ],
      courses: [
        'Advanced Machine Learning',
        'Deep Learning',
        'Statistical Learning Theory',
        'Distributed Systems',
        'Computer Vision',
        'Natural Language Processing'
      ],
      logo: 'assets/images/stanford-logo.png'
    },
    {
      degree: 'M.S.',
      field: 'Artificial Intelligence',
      institution: 'MIT',
      location: 'Cambridge, MA',
      startYear: 2017,
      endYear: 2019,
      gpa: '3.92/4.0',
      thesis: 'Neural Network Optimization for Real-Time Applications',
      advisor: 'Dr. Robert Chen',
      achievements: [
        'Summa Cum Laude',
        'Outstanding Graduate Student Award',
        'Research Excellence Fellowship',
        'ACM Student Research Competition Winner'
      ],
      courses: [
        'Artificial Intelligence',
        'Machine Learning',
        'Computer Graphics',
        'Algorithms',
        'Software Engineering',
        'Human-Computer Interaction'
      ],
      logo: 'assets/images/mit-logo.png'
    },
    {
      degree: 'B.S.',
      field: 'Computer Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startYear: 2013,
      endYear: 2017,
      gpa: '3.88/4.0',
      achievements: [
        'Magna Cum Laude',
        'Dean Honor List (4 semesters)',
        'Engineering Excellence Scholarship',
        'IEEE Outstanding Student Award'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Computer Architecture',
        'Database Systems',
        'Operating Systems',
        'Software Design',
        'Digital Signal Processing'
      ],
      logo: 'assets/images/berkeley-logo.png'
    }
  ];

  getYearRange(education: Education): string {
    return `${education.startYear} - ${education.endYear}`;
  }

  getDegreeWithField(education: Education): string {
    return `${education.degree} in ${education.field}`;
  }
}
