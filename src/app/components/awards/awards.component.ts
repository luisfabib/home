import { Component } from '@angular/core';
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
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  awards: Award[] = [
    {
      title: 'Best Paper Award',
      organization: 'International Conference on Machine Learning (ICML)',
      year: 2024,
      category: 'Research Excellence',
      description: 'Recognized for outstanding research contribution in deep learning optimization techniques for large-scale distributed systems.',
      level: 'International',
      achievements: ['Top 1% of submissions', 'Oral presentation', 'Featured in conference highlights'],
      image: 'assets/images/icml-award.png',
      link: 'https://icml.cc/awards'
    },
    {
      title: 'Outstanding Graduate Student Award',
      organization: 'IEEE Computer Society',
      year: 2023,
      category: 'Academic Achievement',
      description: 'Annual award recognizing exceptional academic performance and research contributions in computer science.',
      amount: '$5,000',
      level: 'International',
      achievements: ['GPA > 3.9', 'Multiple publications', 'Research impact'],
      image: 'assets/images/ieee-award.png',
      link: 'https://ieee.org/awards'
    },
    {
      title: 'Innovation Excellence Award',
      organization: 'Google Research',
      year: 2023,
      category: 'Industry Innovation',
      description: 'Recognition for developing novel AI algorithms that improve computational efficiency by 40% in production systems.',
      amount: '$10,000',
      level: 'International',
      achievements: ['Production deployment', 'Patent filing', 'Team collaboration'],
      image: 'assets/images/google-award.png',
      link: 'https://research.google.com/awards'
    },
    {
      title: 'Young Researcher Award',
      organization: 'Association for Computing Machinery (ACM)',
      year: 2022,
      category: 'Research Promise',
      description: 'Awarded to promising young researchers under 30 for significant contributions to artificial intelligence research.',
      amount: '$3,000',
      level: 'International',
      achievements: ['Under 30 years old', 'Peer nomination', 'Research impact'],
      image: 'assets/images/acm-award.png',
      link: 'https://acm.org/awards'
    },
    {
      title: 'Dean Excellence Fellowship',
      organization: 'Stanford University',
      year: 2021,
      category: 'Academic Excellence',
      description: 'Prestigious fellowship awarded to top-performing PhD students demonstrating exceptional research potential.',
      amount: '$25,000',
      level: 'Institutional',
      achievements: ['Top 5% of PhD students', 'Research excellence', 'Teaching contribution'],
      image: 'assets/images/stanford-fellowship.png'
    },
    {
      title: 'Best Student Paper Award',
      organization: 'Neural Information Processing Systems (NeurIPS)',
      year: 2021,
      category: 'Research Excellence',
      description: 'Recognized for groundbreaking work in neural network architecture optimization and efficiency improvements.',
      level: 'International',
      achievements: ['Student first author', 'Novel methodology', 'Reproducible results'],
      image: 'assets/images/neurips-award.png',
      link: 'https://neurips.cc/awards'
    }
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
