import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Award, awards } from './awards.data';


@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AwardsComponent {
  awards: Award[] = awards
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
