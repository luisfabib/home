import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { education, Education } from './education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent {
  education = education

  getYearRange(education: Education): string {
    return `${education.startYear} - ${education.endYear}`;
  }

  getDegreeWithField(education: Education): string {
    return `${education.degree} in ${education.field}`;
  }

  openThesis(url: string): void {
    window.open(url, '_blank');
  }
}
