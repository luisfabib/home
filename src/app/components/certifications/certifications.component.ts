import { Component } from '@angular/core';
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
  credentialId: string;
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
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      issueDate: 'January 2024',
      expiryDate: 'January 2027',
      credentialId: 'AWS-PSA-123456789',
      verificationUrl: 'https://aws.amazon.com/verification',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization', 'Migration'],
      description: 'Validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform.',
      level: 'Expert',
      category: 'Cloud Computing',
      logo: 'assets/images/aws-logo.png',
      score: 850,
      maxScore: 1000
    },
    {
      title: 'Google Cloud Professional Machine Learning Engineer',
      issuer: 'Google Cloud',
      issueDate: 'November 2023',
      expiryDate: 'November 2025',
      credentialId: 'GCP-MLE-987654321',
      verificationUrl: 'https://cloud.google.com/certification/verify',
      skills: ['Machine Learning', 'TensorFlow', 'BigQuery ML', 'Vertex AI', 'MLOps'],
      description: 'Demonstrates ability to design, build, and productionize ML models to solve business challenges using Google Cloud technologies.',
      level: 'Expert',
      category: 'Machine Learning',
      logo: 'assets/images/gcp-logo.png',
      score: 92,
      maxScore: 100
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      issueDate: 'September 2023',
      expiryDate: 'September 2026',
      credentialId: 'CNCF-CKA-456789123',
      verificationUrl: 'https://training.linuxfoundation.org/certification/verify',
      skills: ['Kubernetes', 'Container Orchestration', 'Docker', 'DevOps', 'Cloud Native'],
      description: 'Validates skills, knowledge, and competency to perform the responsibilities of Kubernetes administrators.',
      level: 'Advanced',
      category: 'DevOps',
      logo: 'assets/images/kubernetes-logo.png',
      score: 88,
      maxScore: 100
    },
    {
      title: 'Microsoft Azure AI Engineer Associate',
      issuer: 'Microsoft',
      issueDate: 'July 2023',
      expiryDate: 'July 2025',
      credentialId: 'MSFT-AI-789123456',
      verificationUrl: 'https://learn.microsoft.com/credentials',
      skills: ['Azure Cognitive Services', 'Azure Machine Learning', 'Computer Vision', 'NLP', 'Bot Framework'],
      description: 'Validates skills in designing and implementing AI solutions using Azure Cognitive Services and Azure Applied AI services.',
      level: 'Advanced',
      category: 'Artificial Intelligence',
      logo: 'assets/images/azure-logo.png',
      score: 780,
      maxScore: 1000
    },
    {
      title: 'Certified Information Systems Security Professional (CISSP)',
      issuer: '(ISC)² International Information System Security Certification Consortium',
      issueDate: 'May 2023',
      expiryDate: 'May 2026',
      credentialId: 'ISC2-CISSP-321654987',
      verificationUrl: 'https://www.isc2.org/member-verification',
      skills: ['Information Security', 'Risk Management', 'Cryptography', 'Network Security', 'Incident Response'],
      description: 'Globally recognized standard of achievement that confirms knowledge in the field of information security.',
      level: 'Expert',
      category: 'Cybersecurity',
      logo: 'assets/images/cissp-logo.png',
      score: 750,
      maxScore: 1000
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      issueDate: 'March 2023',
      expiryDate: 'March 2026',
      credentialId: 'TF-DEV-654321987',
      verificationUrl: 'https://www.credential.net/verify',
      skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
      description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and machine learning problems.',
      level: 'Advanced',
      category: 'Machine Learning',
      logo: 'assets/images/tensorflow-logo.png',
      score: 95,
      maxScore: 100
    }
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
      'Cloud Computing': 'pi-cloud',
      'Machine Learning': 'pi-android',
      'DevOps': 'pi-cog',
      'Artificial Intelligence': 'pi-star',
      'Cybersecurity': 'pi-shield',
      'Software Development': 'pi-code'
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
