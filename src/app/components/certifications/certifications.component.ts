import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { Certification, certifications } from './certifications.data';


@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule, ProgressBarModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CertificationsComponent {
  certifications: Certification[] = certifications;

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
