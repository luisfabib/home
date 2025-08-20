import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  logo?: string;
  score?: number;
  maxScore?: number;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule, ProgressBarModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'Machine Learning with Python',
      issuer: 'FreeCodeCamp',
      issueDate: 'January 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/machine-learning-with-python-v7',
      skills: ['PyTorch', 'TensorFlow', 'SciKit-Learn', 'Pandas'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in machine learning using Python.',
      level: 'Intermediate',
      category: 'Machine Learning',
    },
    {
      title: 'Relational Databases',
      issuer: 'FreeCodeCamp',
      issueDate: 'February 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/relational-database-v8',
      skills: ['SQL', 'PostgreSQL', 'Database Design', 'Query Optimization'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in relational database management.',
      level: 'Intermediate',
      category: 'Databases',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      issueDate: 'February 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/responsive-web-design',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in responsive web design.',
      level: 'Beginner',
      category: 'Frontend Development',
    },
    {
      title: 'Frontend Development Libraries',
      issuer: 'FreeCodeCamp',
      issueDate: 'March 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/frontend-development-libraries',
      skills: ['React', 'Vue.js', 'Angular', 'Bootstrap'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in frontend development libraries.',
      level: 'Beginner',
      category: 'Frontend Development',
    },
    {
      title: 'Data Visualization',
      issuer: 'FreeCodeCamp',
      issueDate: 'March 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/data-visualization',
      skills: ['D3.js', 'Chart.js', 'Data Analysis', 'Data Storytelling'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in data visualization.',
      level: 'Beginner',
      category: 'Frontend Development',
    },
    {
      title: 'Legacy JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      issueDate: 'March 2023',
      verificationUrl: 'https://freecodecamp.org/certification/luisfabib/legacy-javascript-algorithms-and-data-structures',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      description: 'Developer certification representing approximately 300 hours of coursework and projects in legacy JavaScript algorithms and data structures.',
      level: 'Intermediate',
      category: 'Frontend Development',
    },
    {
      title: 'Project management for research',
      issuer: 'ETH Zurich',
      issueDate: 'March 2021',
      skills: ['Project Management', 'Research Methods', 'Team Collaboration'],
      description: 'Certification representing a three-day course on project management tailored for research environments.',
      level: 'Beginner',
      category: 'Project Management',
    },
  ];

  getLevelColor(level: string): string {
    const colors = {
      'Beginner': 'info',
      'Intermediate': 'warning',
      'Advanced': 'success',
      'Expert': 'danger'
    };
    return colors[level as keyof typeof colors] || 'secondary';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'Databases': 'pi-database',
      'Machine Learning': 'pi-android',
      'Frontend Development': 'pi-desktop',
      'Artificial Intelligence': 'pi-star',
      'Cybersecurity': 'pi-shield',
      'Software Development': 'pi-code',
      'Project Management': 'pi-briefcase'
    };
    return icons[category as keyof typeof icons] || 'pi-certificate';
  }

  getScorePercentage(cert: Certification): number {
    if (!cert.score || !cert.maxScore) return 0;
    return Math.round((cert.score / cert.maxScore) * 100);
  }

  isExpired(expiryDate: string | undefined): boolean {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  }

  isExpiringSoon(expiryDate: string | undefined): boolean {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return expiry < sixMonthsFromNow && expiry > new Date();
  }

  openVerification(url: string): void {
    window.open(url, '_blank');
  }
}
