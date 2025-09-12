import { Component } from '@angular/core';
import { CvPdfGeneratorService } from '../../services/cv-pdf-generator.service';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cv-download',
  standalone: true,
  imports: [ButtonModule, ToastModule],
  providers: [MessageService],
  template: `
    <div class="cv-download-container">
      <p-toast></p-toast>
      <p-button 
        label="Download CV (PDF)" 
        icon="pi pi-download" 
        severity="secondary"
        [loading]="isGenerating"
        (onClick)="downloadCV()"
        styleClass="cv-download-btn">
      </p-button>
    </div>
  `,
  styles: [`
    .cv-download-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    
    .cv-download-btn {
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .cv-download-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `]
})
export class CvDownloadComponent {
  isGenerating = false;

  constructor(
    private cvGenerator: CvPdfGeneratorService,
    private messageService: MessageService
  ) {}

  async downloadCV() {
    this.isGenerating = true;
    
    try {
      await this.cvGenerator.generateCV();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'CV downloaded successfully!'
      });
    } catch (error) {
      console.error('Error generating CV:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to generate CV. Please try again.'
      });
    } finally {
      this.isGenerating = false;
    }
  }
}
