import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { experience, Experience } from './experience.data';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule, AvatarModule],
  templateUrl: './experience.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = experience

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
