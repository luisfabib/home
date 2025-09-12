import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CvDataService, CVData } from './cv-data.service';


// Modern colors - using a sophisticated palette
const primaryColor = '#1a1a1a'; // Deep charcoal
const accentColor = '#6366f1'; // Modern indigo
const textColor = '#374151'; // Modern gray
const lightAccent = '#f1f5f9'; // Light slate
const mutedText = '#6b7280'; // Muted gray

@Injectable({
  providedIn: 'root'
})
export class CvPdfGeneratorService {

  constructor(private cvDataService: CvDataService) { }

  async generateCV(): Promise<void> {
    const cvData = this.cvDataService.getCVData();
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // A4 dimensions in mm
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 12;
    const contentWidth = pageWidth - (2 * margin);
    
    let yPosition = margin;
    
    // Modern header with gradient-like effect using rectangles
    pdf.setFillColor(lightAccent);
    pdf.rect(margin, yPosition, contentWidth, 40, 'F');
    
    // Accent bar at top
    pdf.setFillColor(accentColor);
    pdf.rect(margin, yPosition, contentWidth, 3, 'F');

    // Load and add profile picture on the left
    try {
      // Try to load profile picture using base64 approach first
      const profileImg = await this.loadImageAsBase64();
      if (profileImg) {
        const profileSize = 35;
        // Position on the left side of header with some padding
        pdf.addImage(profileImg, 'PNG', margin, yPosition + 3, profileSize+2, profileSize+2);
      } else {
        console.warn('Could not load profile picture');
      }
    } catch (error) {
      console.warn('Error in profile picture loading process:', error);
    }

    
    // Name with modern typography - adjusted for left profile picture
    pdf.setTextColor(textColor);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(cvData.personalInfo.name, margin + 50, yPosition + 15); // Moved right to accommodate profile picture
    
    // Title with lighter weight
    pdf.setFontSize(11);
    pdf.setTextColor(accentColor);
    pdf.setFont('helvetica', 'normal');
    pdf.text(cvData.personalInfo.title, margin + 50, yPosition + 21); // Moved right to accommodate profile picture
    
    pdf.setFontSize(9);
    pdf.setTextColor(textColor);
    const contactY = yPosition + 27;
    pdf.setFontSize(5);
    pdf.setTextColor(mutedText);
    pdf.text('EMAIL', margin + 50, contactY); 
    pdf.setFontSize(8);
    pdf.setTextColor(textColor);
    pdf.text(cvData.personalInfo.email, margin + 50, contactY+3); 

    const locationY = contactY + 7;
    pdf.setFontSize(5);
    pdf.setTextColor(mutedText);
    pdf.text('LOCATION', margin + 50, locationY); 
    pdf.setFontSize(8);
    pdf.setTextColor(textColor);
    pdf.text(cvData.personalInfo.location, margin + 50, locationY+3); 
    
    pdf.setFontSize(9);
    pdf.setTextColor(textColor);
    const linkedinY = yPosition + 27;
    pdf.setFontSize(5);
    pdf.setTextColor(mutedText);
    pdf.text('LINKEDIN', margin + 85, linkedinY); 
    pdf.setFontSize(8);
    pdf.setTextColor(textColor);
    pdf.text(cvData.personalInfo.linkedin, margin + 85, linkedinY+3); 

    const homepageY = linkedinY + 7;
    pdf.setFontSize(5);
    pdf.setTextColor(mutedText);
    pdf.text('HOMEPAGE', margin + 85, homepageY); 
    pdf.setFontSize(8);
    pdf.setTextColor(textColor);
    pdf.text('www.luisfabregas.com', margin + 85, homepageY+3); 


    pdf.setFontSize(9);
    pdf.setTextColor(textColor);
    const nationalityY = yPosition + 27;
    pdf.setFontSize(5);
    pdf.setTextColor(mutedText);
    pdf.text('NATIONALITY', margin + 120, nationalityY); 
    pdf.setFontSize(8);
    pdf.setTextColor(textColor);
    pdf.text('Spain', margin + 120, nationalityY+3); 

    const ageY = nationalityY + 7;
    pdf.setFontSize(5);
    pdf.setTextColor(mutedText);
    pdf.text('AGE', margin + 120, ageY); 
    pdf.setFontSize(8);
    pdf.setTextColor(textColor);
    // Calculate age from April 1995
    const birthDate = new Date(1995, 3, 1); // Months are 0-based, so 3 = April
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    pdf.text(`${age} years (1995)`, margin + 120, ageY+3); 

    
    yPosition += 45;
    
    // Two-column layout setup
    const leftColumnWidth = (contentWidth * 0.6) - 5;
    const rightColumnWidth = (contentWidth * 0.4) - 5;
    const rightColumnX = margin + leftColumnWidth + 10;
    
    // Add summary text on the left
    pdf.setTextColor(textColor);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    const summaryLines = pdf.splitTextToSize(cvData.summary, leftColumnWidth);
    const summaryStartY = yPosition + 2;
    pdf.text(summaryLines, margin, summaryStartY);
    const summaryEndY = summaryStartY + summaryLines.length * 4.5;

    // Add testimonial on the right (no header)
    if (cvData.testimonials.length > 0) {
      this.addTestimonialNoHeader(pdf, cvData.testimonials[0], summaryStartY, rightColumnX, rightColumnWidth, textColor);
    }
    
    yPosition = summaryEndY; // Adjust based on summary height
    
    // Two-column layout for the rest
    let leftY = yPosition;
    let rightY = yPosition+6;
    
    // Left column - Experience
    leftY = this.addSection(pdf, 'PROFESSIONAL EXPERIENCE', leftY, margin, leftColumnWidth, accentColor);
    leftY = this.addExperience(pdf, cvData.experience, leftY, margin, leftColumnWidth, textColor);
    
    // Left column - Education (moved to last)
    leftY = this.addSection(pdf, 'EDUCATION', leftY, margin, leftColumnWidth, accentColor);
    leftY = this.addEducation(pdf, cvData.education, leftY, margin, leftColumnWidth, textColor);
    
    // Right column - Languages
    rightY = this.addSection(pdf, 'LANGUAGES', rightY, rightColumnX, rightColumnWidth, accentColor);
    rightY = this.addLanguages(pdf, cvData.skills.languages, rightY, rightColumnX, rightColumnWidth, textColor);
    
    // Right column - Professional Skills
    rightY += 4; // Increased spacing
    rightY = this.addSection(pdf, 'PROFESSIONAL SKILLS', rightY, rightColumnX, rightColumnWidth, accentColor);
    rightY = this.addProfessionalSkills(pdf, cvData.skills.professional, rightY, rightColumnX, rightColumnWidth, textColor);
    
    // Right column - Skills
    rightY = this.addSection(pdf, 'TECHNICAL SKILLS', rightY, rightColumnX, rightColumnWidth, accentColor);
    rightY = this.addSkills(pdf, cvData.skills.programming, rightY, rightColumnX, rightColumnWidth, textColor);
    
    // Right column - Publications and Awards summary
    rightY += 3; // Increased spacing
    rightY = this.addSection(pdf, 'PUBLICATIONS & AWARDS', rightY, rightColumnX, rightColumnWidth, accentColor);
    rightY = this.addPublicationsAwardsSummary(pdf, cvData, rightY, rightColumnX, rightColumnWidth, textColor);
    
    // Save the PDF
    pdf.save('Luis_Fabregas_CV.pdf');
  }
  
  private addSection(pdf: jsPDF, title: string, yPosition: number, x: number, width: number, color: string): number {
    // Modern section header with subtle background - more compact

    pdf.setFillColor(lightAccent); // Very light background
    pdf.rect(x, yPosition, width, 6, 'F'); // Reduced height
    
    // Accent line on the left
    pdf.setFillColor(color);
    pdf.rect(x, yPosition, 3, 6, 'F'); // Reduced height
    
    // Section title
    pdf.setTextColor(26, 26, 26); // Dark text
    pdf.setFontSize(10); // Slightly smaller
    pdf.setFont('helvetica', 'bold');
    pdf.text(title, x + 8, yPosition + 4); // Adjusted position
    
    return yPosition + 12; // Reduced spacing
  }
  
  private addExperience(pdf: jsPDF, experiences: any[], yPosition: number, x: number, width: number, color: string): number {
    pdf.setTextColor(color);
    
    experiences.forEach((exp, index) => {
      if (index >= 3) return; // Limit to 3 entries for space
      
      // Position with modern typography
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(exp.position, x, yPosition);
      yPosition += 5;
      
      // Company and duration
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(99, 102, 241); // Accent color for company
      pdf.text(exp.company, x, yPosition);
      
      pdf.setTextColor(107, 114, 128); // Muted color for dates
      const dateText = `${exp.startDate} - ${exp.endDate}`;
      pdf.text(dateText, x + width - pdf.getTextWidth(dateText), yPosition);
      
      yPosition += 5;
      pdf.setTextColor(color);
      
      // Responsibilities list instead of description
      if (exp.responsibilities && exp.responsibilities.length > 0) {
        yPosition += 1; // Reduced spacing
        pdf.setFont('helvetica', 'bold');
        pdf.text('Responsibilities:', x, yPosition);
        yPosition += 4;
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        
        exp.responsibilities.slice(0, 4).forEach((responsibility: string) => {
          const respLines = pdf.splitTextToSize(`• ${responsibility}`, width - 10);
          respLines.forEach((line: string) => {
            pdf.text(line, x + 5, yPosition);
            yPosition += 4; // Increased line height
          });
        });
      }
      
      // Key achievements if available
      if (exp.achievements && exp.achievements.length > 0) {
        yPosition += 1; // Reduced spacing
        pdf.setFont('helvetica', 'bold');
        pdf.text('Key Achievements:', x, yPosition);
        yPosition += 4;
        
        pdf.setFont('helvetica', 'normal');
        exp.achievements.slice(0, 2).forEach((achievement: string) => {
          const achLines = pdf.splitTextToSize(`• ${achievement}`, width - 10);
          achLines.forEach((line: string) => {
            pdf.text(line, x + 5, yPosition);
            yPosition += 4; // Increased line height
          });
        });
      }
      
      yPosition += 4; // Reduced spacing between experiences
    });
    
    return yPosition;
  }
  
  private addEducation(pdf: jsPDF, education: any[], yPosition: number, x: number, width: number, color: string): number {
    pdf.setTextColor(color);
    
    education.forEach((edu, index) => {
      // Degree with modern styling
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.degree, x, yPosition);
      yPosition += 5;
      
      // Institution and years
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(99, 102, 241); // Accent color
      pdf.text(edu.institution, x, yPosition);
      
      pdf.setTextColor(107, 114, 128); // Muted color for dates
      const dateText = `${edu.startYear} - ${edu.endYear}`;
      pdf.text(dateText, x + width - pdf.getTextWidth(dateText), yPosition);
      
      yPosition += 5;
      pdf.setTextColor(color);
      
      // Thesis - no truncation
      if (edu.thesis) {
        pdf.setFontSize(9);        
        pdf.setFont('helvetica', 'normal');
        const thesisLines = pdf.splitTextToSize(edu.thesis, width - 5);
        thesisLines.forEach((line: string) => {
          pdf.text(line, x, yPosition);
          yPosition += 4; // Increased line height
        });
      }
      
      // GPA if available
      if (edu.gpa) {
        pdf.setFontSize(8);
        pdf.setTextColor(107, 114, 128);
        pdf.text(`GPA: ${edu.gpa}`, x, yPosition);
        yPosition += 3;
        pdf.setTextColor(color);
      }
      
      yPosition += 3; // Reduced spacing between education entries
    });
    
    return yPosition;
  }
  
  private addSkills(pdf: jsPDF, skills: any[], yPosition: number, x: number, width: number, color: string): number {
    pdf.setTextColor(color);
    
    skills.forEach((skill) => {
      // Skill name with modern progress indicator - more compact
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text(skill.name, x, yPosition);
      
      // Compact progress bar
      const barWidth = 30;
      const barHeight = 2;
      const barX = x + width - barWidth;
      const barY = yPosition - 1.5;
      
      // Background bar
      pdf.setFillColor(229, 231, 235); // Light gray
      pdf.rect(barX, barY, barWidth, barHeight, 'F');
      
      // Filled bar based on rating
      const fillWidth = (skill.rating / 5) * barWidth;
      pdf.setFillColor(99, 102, 241); // Accent color
      pdf.rect(barX, barY, fillWidth, barHeight, 'F');
      
      yPosition += 5; // Increased spacing between skills
    });
    
    return yPosition;
  }
  
  private addProfessionalSkills(pdf: jsPDF, skills: any[], yPosition: number, x: number, width: number, color: string): number {
    pdf.setTextColor(color);
    
    skills.forEach((skill) => {
      // Skill name with compact progress bar
      pdf.setFontSize(9);
      pdf.setTextColor(textColor); // Dark text
      pdf.setFont('helvetica', 'bold');
      pdf.text(skill.name, x, yPosition);
      
      // Compact progress bar
      const barWidth = 25;
      const barHeight = 2;
      const barX = x + width - barWidth;
      const barY = yPosition - 1.5;
      
      // Background
      pdf.setFillColor(229, 231, 235);
      pdf.rect(barX, barY, barWidth, barHeight, 'F');
      
      // Fill
      const fillWidth = (skill.rating / 5) * barWidth;
      pdf.setFillColor(99, 102, 241);
      pdf.rect(barX, barY, fillWidth, barHeight, 'F');
      
      yPosition += 4; // Increased spacing

      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(107, 114, 128); // Muted color
        const lines = pdf.splitTextToSize(`${skill.annotation}`, width);
        lines.forEach((line: string) => {
            pdf.text(line, x, yPosition);
            yPosition += 3; // Increased line height
        });

      yPosition += 3; // Increased spacing
    });
    
    return yPosition;
  }
  
  private addLanguages(pdf: jsPDF, languages: any[], yPosition: number, x: number, width: number, color: string): number {
    pdf.setTextColor(color);
    
    // Calculate horizontal distribution
    const languagesPerRow = Math.min(3, languages.length); // Max 3 languages per row
    const columnWidth = width / languagesPerRow;
    
    let currentRow = 0;
    let currentCol = 0;
    
    languages.forEach((language, index) => {
      const currentX = x + (currentCol * columnWidth);
      const currentY = yPosition + (currentRow * 9); // 12 units per row (level + name + spacing)
      
      // Level/certification above the language name
      pdf.setFontSize(7);
      pdf.setTextColor(99, 102, 241); // Accent color
      let levelText = '';
      if (language.isNative) {
        levelText = 'Native';
      } else if (language.certification) {
        levelText = language.certification;
      }
      if (levelText === 'C2') levelText = 'Proficient (C2)';
      if (levelText === 'C1') levelText = 'Advanced (C1)';
      if (levelText === 'B2') levelText = 'Intermediate (B2)';
      
      if (levelText) {
        // Center the level text above the language name
        pdf.text(levelText, currentX, currentY);
      }
      
      // Language name below the level
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(color);
      pdf.text(language.name, currentX, currentY + 4);
      
      // Move to next position
      currentCol++;
      if (currentCol >= languagesPerRow) {
        currentCol = 0;
        currentRow++;
      }
    });
    
    // Calculate final Y position based on number of rows
    const totalRows = Math.ceil(languages.length / languagesPerRow);
    return yPosition + ((totalRows - 1) * 9) + 4; // Extra spacing after languages section
  }
  
  private addTestimonialNoHeader(pdf: jsPDF, testimonial: any, yPosition: number, x: number, width: number, color: string): number {
    // Quote with modern styling - no header

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(color);
    
    // Add quote marks
    const quoteText = `"${testimonial.quote}"`;
    const quoteLines = pdf.splitTextToSize(quoteText, width - 10);
    
    quoteLines.forEach((line: string) => {
      pdf.text(line, x + 5, yPosition);
      yPosition += 4;
    });
    
    yPosition += 2;
    
    // Author and position
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(8);
    pdf.setTextColor(99, 102, 241); // Accent color
    pdf.text(`— ${testimonial.author}`, x + 5, yPosition);
    
    yPosition += 3;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(107, 114, 128); // Muted color
    pdf.text(`${testimonial.position}, ${testimonial.company}`, x + 5, yPosition);
    
    return yPosition + 5;
  }
  
  private addPublicationsAwardsSummary(pdf: jsPDF, cvData: CVData, yPosition: number, x: number, width: number, color: string): number {
    // Define the statistics to display
    const stats = [
      { number: cvData.stats.publications, label: 'Publications' },
      { number: cvData.stats.awards, label: 'Awards' },
      { number: `${cvData.stats.citations}+`, label: 'Citations' }
    ];
    
    // Calculate horizontal distribution
    const columnWidth = width / stats.length;
    
    stats.forEach((stat, index) => {
      const currentX = x + (index * columnWidth);
      const centerX = currentX + (columnWidth / 2);
      
      // Big accented number
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(99, 102, 241); // Accent color
      
      const numberText = stat.number.toString();
      const numberWidth = pdf.getTextWidth(numberText);
      pdf.text(numberText, centerX - (numberWidth / 2), yPosition);
      
      // Centered label below the number
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(color);
      
      const labelWidth = pdf.getTextWidth(stat.label);
      pdf.text(stat.label, centerX - (labelWidth / 2), yPosition + 4);
    });
    
    return yPosition + 12; // Extra spacing after the stats section
  }
  
  private loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Handle CORS issues
      img.onload = () => {
        console.log(`Image loaded successfully: ${url}`);
        resolve(img);
      };
      img.onerror = (error) => {
        console.error(`Failed to load image: ${url}`, error);
        reject(error);
      };
      
      // Set a timeout to prevent hanging
      setTimeout(() => {
        reject(new Error(`Image loading timeout: ${url}`));
      }, 10000);
      
      img.src = url;
    });
  }

  private async loadImageAsBase64(): Promise<string | null> {
    try {
      // Use fetch to get the image data
      const response = await fetch('images/profile-picture.png');
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
      // Convert blob to base64
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          console.log('Successfully converted image to base64');
          resolve(base64String);
        };
        reader.onerror = (error) => {
          console.error('Error converting image to base64:', error);
          reject(error);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error loading image as base64:', error);
      return null;
    }
  }
}
