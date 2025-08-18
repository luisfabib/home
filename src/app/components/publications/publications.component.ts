import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { PaginatorModule } from 'primeng/paginator';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  doi?: string;
  publicationUrl?: string;
  pdfUrl?: string;
  thumbnail?: string;
  keywords: string[];
  citationCount?: number;
  type: 'journal' | 'conference' | 'preprint' | 'book-chapter';
}

@Component({
  selector: 'app-publications',
  imports: [
    CardModule,
    ButtonModule,
    ChipModule,
    PaginatorModule,
    AnimateOnScrollModule,
    DialogModule,
    ScrollPanelModule,
    TagModule
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      id: 1,
      title: 'Advanced Machine Learning Techniques for Web Application Security',
      authors: ['John Doe', 'Jane Smith', 'Robert Johnson'],
      journal: 'IEEE Transactions on Software Engineering',
      year: 2024,
      abstract: 'This paper presents novel machine learning approaches for detecting and preventing security vulnerabilities in modern web applications. We propose a hybrid model combining deep learning and traditional static analysis techniques to achieve 95% accuracy in vulnerability detection. Our methodology was tested on over 10,000 web applications and demonstrates significant improvements over existing approaches. The results show promise for real-world deployment in enterprise environments.',
      doi: '10.1109/TSE.2024.1234567',
      publicationUrl: 'https://ieeexplore.ieee.org/document/1234567',
      pdfUrl: 'https://example.com/papers/ml-web-security.pdf',
      thumbnail: 'assets/images/paper1-thumb.jpg',
      keywords: ['Machine Learning', 'Web Security', 'Vulnerability Detection', 'Deep Learning'],
      citationCount: 45,
      type: 'journal'
    },
    {
      id: 2,
      title: 'Scalable Microservices Architecture Patterns for Cloud-Native Applications',
      authors: ['John Doe', 'Alice Williams'],
      journal: 'Proceedings of the International Conference on Software Architecture',
      year: 2023,
      abstract: 'We investigate design patterns and best practices for building scalable microservices architectures in cloud-native environments. This research introduces a novel framework for service decomposition and inter-service communication optimization. Our experimental results demonstrate up to 40% improvement in system throughput and 60% reduction in latency compared to monolithic architectures.',
      doi: '10.1145/3563123.3563456',
      publicationUrl: 'https://dl.acm.org/doi/10.1145/3563123.3563456',
      pdfUrl: 'https://example.com/papers/microservices-patterns.pdf',
      thumbnail: 'assets/images/paper2-thumb.jpg',
      keywords: ['Microservices', 'Cloud Computing', 'Software Architecture', 'Scalability'],
      citationCount: 23,
      type: 'conference'
    },
    {
      id: 3,
      title: 'Real-time Data Processing with Angular and WebSocket Technologies',
      authors: ['John Doe', 'Michael Chen', 'Sarah Davis'],
      journal: 'Journal of Web Engineering',
      year: 2023,
      abstract: 'This study explores efficient methods for implementing real-time data processing in Angular applications using WebSocket technologies. We present a comprehensive framework for handling large-scale real-time data streams with minimal latency. The proposed solution includes optimized data binding strategies and memory management techniques that result in 70% better performance compared to traditional polling methods.',
      doi: '10.1007/s11280-023-1234-5',
      publicationUrl: 'https://link.springer.com/article/10.1007/s11280-023-1234-5',
      pdfUrl: 'https://example.com/papers/angular-websocket.pdf',
      thumbnail: 'assets/images/paper3-thumb.jpg',
      keywords: ['Angular', 'WebSocket', 'Real-time Processing', 'Frontend Development'],
      citationCount: 18,
      type: 'journal'
    },
    {
      id: 4,
      title: 'DevOps Automation Strategies for Continuous Integration and Deployment',
      authors: ['John Doe', 'Lisa Anderson'],
      journal: 'Software: Practice and Experience',
      year: 2022,
      abstract: 'An empirical study on DevOps automation strategies focusing on CI/CD pipeline optimization. This research evaluates various automation tools and methodologies, providing guidelines for implementing efficient development workflows. Our findings show that proper automation strategies can reduce deployment time by 80% and significantly improve code quality through automated testing and validation processes.',
      doi: '10.1002/spe.3098',
      publicationUrl: 'https://onlinelibrary.wiley.com/doi/10.1002/spe.3098',
      pdfUrl: 'https://example.com/papers/devops-automation.pdf',
      thumbnail: 'assets/images/paper4-thumb.jpg',
      keywords: ['DevOps', 'CI/CD', 'Automation', 'Software Engineering'],
      citationCount: 31,
      type: 'journal'
    },
    {
      id: 5,
      title: 'Blockchain Integration in Modern Web Applications: Challenges and Solutions',
      authors: ['John Doe', 'David Wilson', 'Emily Zhang'],
      journal: 'arXiv preprint',
      year: 2024,
      abstract: 'This preprint explores the integration of blockchain technology in contemporary web applications, addressing scalability, security, and usability challenges. We propose a lightweight blockchain framework optimized for web environments and demonstrate its effectiveness through several case studies. The research provides practical insights for developers looking to incorporate blockchain features while maintaining application performance.',
      doi: 'arXiv:2024.1234.5678',
      publicationUrl: 'https://arxiv.org/abs/2024.1234.5678',
      pdfUrl: 'https://arxiv.org/pdf/2024.1234.5678.pdf',
      thumbnail: 'assets/images/paper5-thumb.jpg',
      keywords: ['Blockchain', 'Web Development', 'Distributed Systems', 'Security'],
      type: 'preprint'
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques for Angular Applications',
      authors: ['John Doe'],
      journal: 'Handbook of Modern Frontend Development',
      year: 2023,
      abstract: 'A comprehensive guide to optimizing Angular application performance, covering lazy loading, change detection strategies, and bundle optimization techniques. This chapter provides practical methods for improving application startup time, runtime performance, and memory usage. The techniques presented have been validated in production environments and show consistent performance improvements.',
      publicationUrl: 'https://publisher.com/handbook/chapter15',
      pdfUrl: 'https://example.com/papers/angular-optimization.pdf',
      thumbnail: 'assets/images/paper6-thumb.jpg',
      keywords: ['Angular', 'Performance', 'Optimization', 'Frontend'],
      citationCount: 12,
      type: 'book-chapter'
    }
  ];

  // Pagination properties
  first: number = 0;
  rows: number = 3;
  totalRecords: number = this.publications.length;
  
  // Dialog properties
  displayAbstractDialog: boolean = false;
  selectedPublication: Publication | null = null;

  get paginatedPublications(): Publication[] {
    const start = this.first;
    const end = this.first + this.rows;
    return this.publications.slice(start, end);
  }

  get totalCitations(): number {
    return this.publications.reduce((sum, pub) => sum + (pub.citationCount || 0), 0);
  }

  get uniqueYears(): number {
    const years = new Set(this.publications.map(p => p.year));
    return years.size;
  }

  get journalArticlesCount(): number {
    return this.publications.filter(p => p.type === 'journal').length;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  openAbstract(publication: Publication) {
    this.selectedPublication = publication;
    this.displayAbstractDialog = true;
  }

  openUrl(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'journal': return 'Journal Article';
      case 'conference': return 'Conference Paper';
      case 'preprint': return 'Preprint';
      case 'book-chapter': return 'Book Chapter';
      default: return 'Publication';
    }
  }

  getTypeSeverity(type: string): 'success' | 'info' | 'warning' | 'secondary' {
    switch (type) {
      case 'journal': return 'success';
      case 'conference': return 'info';
      case 'preprint': return 'warning';
      case 'book-chapter': return 'secondary';
      default: return 'info';
    }
  }
}
