import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { experience, Experience } from './experience.data';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule, AvatarModule, CarouselModule],
  templateUrl: './experience.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = this.sortExperiencesByDate(experience);

  // Carousel responsive options
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  private sortExperiencesByDate(experiences: Experience[]): Experience[] {
    return [...experiences].sort((a, b) => {
      // Convert dates to comparable format for sorting
      const dateA = this.getComparableDate(a.startDate, a.endDate);
      const dateB = this.getComparableDate(b.startDate, b.endDate);
      
      // Sort in descending order (most recent first)
      return dateB - dateA;
    });
  }

  private getComparableDate(startDate: string, endDate: string | 'Present'): number {
    // Use end date for comparison, or current date if 'Present'
    if (endDate === 'Present') {
      return new Date().getTime();
    }
    
    // Parse the end date string
    const endDateParsed = new Date(endDate);
    return endDateParsed.getTime();
  }

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
