import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CardModule, ButtonModule, ChipModule, AnimateOnScrollModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with Angular frontend, Node.js backend, and PostgreSQL database. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker'],
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, team collaboration, and project tracking capabilities.',
      image: 'assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      demoUrl: 'https://demo-taskapp.com',
      githubUrl: 'https://github.com/johndoe/taskapp',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather, forecasts, and historical data. Built with Angular and integrates multiple weather APIs.',
      image: 'assets/images/project3.jpg',
      technologies: ['Angular', 'Chart.js', 'OpenWeather API', 'SCSS'],
      demoUrl: 'https://demo-weather.com',
      githubUrl: 'https://github.com/johndoe/weather',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and PrimeNG. Features smooth animations, dark theme, and optimized performance.',
      image: 'assets/images/project4.jpg',
      technologies: ['Angular', 'PrimeNG', 'SCSS', 'TypeScript'],
      demoUrl: 'https://johndoe-portfolio.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
      featured: false
    }
  ];

  featuredProjects = this.projects.filter(project => project.featured);

  openUrl(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
