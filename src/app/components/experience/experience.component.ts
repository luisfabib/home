import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  duration: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
  companyWebsite?: string;
  teamSize?: string;
  reportingTo?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule, AvatarModule],
  templateUrl: './experience.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Physical Chemistry Researcher',
      company: 'ETH Zurich',
      location: 'Zurich, Switzerland',
      startDate: 'September 2018',
      endDate: 'December 2022',
      duration: '4 years',
      employmentType: 'Full-time',
      description: 'Conductred cutting-edge research in physical chemistry, focusing on the development of advanced data analysis methods and theoretical models for spectroscopic data interpretation.',
      responsibilities: [
        'Managing own research, from project planning and research strategy to data analysis and manuscript preparation',
        'Present research at international conferences and workshops',
        'Maintain network and code infrastructure for research group',
        'Teach advanced courses in physical chemistry and signal processing',
        'Visit and collaborate with researchers at the University of Washington, Seattle, USA.'
      ],
      achievements: [
        'Developed Deerlab, a state-of-the-art, open-source software package in Python for rigorous and robust statistical analysis of arbitrary data models.',
        'Headed organization and instruction of a successful international workshop in Seattle, attracting 100+ attendees and featuring multiple instructors.',
        'Developed other software with graphical user interfaces for signal processing and analysis of spectroscopic signals.',
        'Earned doctorate with a data science dissertation "that met the highest standards of scholarship", as noted by Prof. Dr. Jeschke.',
      ],
      technologies: [
        'Python',
        'MATLAB',
        'C++',
        'NumPy',
        'SciPy',
        'Jupyter',
        'Git',
        'LaTeX',

      ],
      companyLogo: 'images/eth-logo.png',
      companyWebsite: 'https://ethz.ch',
      teamSize: '12-16 person research team',
      reportingTo: 'Principal Researchers'
    },
  ];

  getEmploymentTypeColor(type: string): string {
    const colors = {
      'Full-time': 'success',
      'Part-time': 'info',
      'Contract': 'warning',
      'Internship': 'secondary',
      'Freelance': 'primary'
    };
    return colors[type as keyof typeof colors] || 'secondary';
  }

  getCurrentPosition(): boolean {
    return this.experiences.some(exp => exp.endDate === 'Present');
  }

  openCompanyWebsite(url: string): void {
    window.open(url, '_blank');
  }

  getDateRange(experience: Experience): string {
    return `${experience.startDate} - ${experience.endDate}`;
  }
}
