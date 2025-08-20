import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

interface Award {
  title: string;
  organization: string;
  year: number;
  category: string;
  description: string;
  amount?: string;
  level: 'International' | 'National' | 'Regional' | 'Local' | 'Institutional';
  achievements?: string[];
  image?: string;
  link?: string;
}

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AwardsComponent {
  awards: Award[] = [
    {
      title: 'IES Best Paper Award',
      organization: 'International EPR Society',
      year: 2021,
      category: 'Research Excellence',
      description: 'Honored for significant advances and breakthrough developments in the field of Electron Paramagnetic Resonance (EPR) spectroscopy.',
      level: 'International',
      link: 'https://ieprs.org/best-paper-award/'
    },
    {
      title: 'SCNAT Chemistry Travel Award',
      organization: 'Swiss Academy of Sciences',
      year: 2022,
      category: 'Research Promise',
      description: 'Awarded for outstanding PhD research and academic excellence in Chemistry in Switzerland.',
      level: 'National',
    },
    {
      title: 'JEOL Student Lecture Competition',
      organization: 'JEOL (UK) Ltd.',
      year: 2022,
      category: 'Academic Excellence',
      description: 'Annual award recognizing the best student lectures at the Royal Society of Chemistry ESR Meeting.',
      level: 'International',
    },
    {
      title: 'IES Poster Award',
      organization: 'International EPR Society',
      year: 2021,
      category: 'Academic Excellence',
      description: 'Recognized for presenting one of the top posters at the 54th Annual International Meeting of the ESR Spectroscopy Group of the Royal Society of Chemistry.',
      level: 'International',
    },
    {
      title: 'Springer Prize Winner',
      organization: 'Springer Science + Business Media',
      year: 2019,
      category: 'Academic Excellence',
      description: 'Awarded for presenting an outstanding poster at the 6th Annual Rocky Mountain Conference on Magnetic Resonance.',
      level: 'International',
    },
    {
      title: 'IES Poster Award',
      organization: 'International EPR Society',
      year: 2019,
      category: 'Academic Excellence',
      description: 'Recognized for presenting one of the top posters at the 54th Annual International Meeting of the ESR Spectroscopy Group of the Royal Society of Chemistry.',
      level: 'International',
    },
  ];

  getLevelColor(level: string): string {
    const colors = {
      'International': 'success',
      'National': 'info',
      'Regional': 'warning',
      'Local': 'secondary',
      'Institutional': 'primary'
    };
    return colors[level as keyof typeof colors] || 'secondary';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'Research Excellence': 'pi-star',
      'Academic Achievement': 'pi-graduation-cap',
      'Industry Innovation': 'pi-cog',
      'Research Promise': 'pi-lightbulb',
      'Academic Excellence': 'pi-trophy'
    };
    return icons[category as keyof typeof icons] || 'pi-award';
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
