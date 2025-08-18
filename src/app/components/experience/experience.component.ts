import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  duration: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
  companyWebsite?: string;
  teamSize?: string;
  reportingTo?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, TagModule, ButtonModule, AvatarModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Senior Machine Learning Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      startDate: 'January 2023',
      endDate: 'Present',
      duration: '2 years',
      employmentType: 'Full-time',
      description: 'Leading the development of next-generation ML algorithms for large-scale distributed systems, focusing on optimization and efficiency improvements for production environments.',
      responsibilities: [
        'Design and implement ML algorithms for distributed systems serving 1B+ users',
        'Lead a team of 5 ML engineers in developing scalable AI solutions',
        'Collaborate with product teams to integrate ML models into production systems',
        'Mentor junior engineers and conduct technical interviews',
        'Drive architectural decisions for ML infrastructure and model deployment'
      ],
      achievements: [
        'Improved model inference speed by 40% through novel optimization techniques',
        'Led the successful deployment of 3 major ML features to production',
        'Reduced training costs by 35% through efficient data pipeline optimization',
        'Published 2 papers at top-tier ML conferences (ICML, NeurIPS)',
        'Received "Outstanding Engineer" award for innovation in ML systems'
      ],
      technologies: [
        'TensorFlow',
        'PyTorch',
        'Python',
        'C++',
        'Kubernetes',
        'Google Cloud Platform',
        'BigQuery',
        'Apache Beam',
        'Docker',
        'Git'
      ],
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png',
      companyWebsite: 'https://google.com',
      teamSize: '5 direct reports, 20+ cross-functional',
      reportingTo: 'VP of Engineering, AI/ML'
    },
    {
      position: 'Machine Learning Scientist',
      company: 'Microsoft Research',
      location: 'Redmond, WA',
      startDate: 'June 2020',
      endDate: 'December 2022',
      duration: '2.5 years',
      employmentType: 'Full-time',
      description: 'Conducted cutting-edge research in deep learning and computer vision, with focus on developing novel architectures for real-time applications and publishing in top-tier venues.',
      responsibilities: [
        'Conduct fundamental research in deep learning and computer vision',
        'Develop prototypes and proof-of-concepts for new ML algorithms',
        'Collaborate with academic institutions and publish research findings',
        'Present research at international conferences and workshops',
        'Transfer research innovations to Microsoft product teams'
      ],
      achievements: [
        'Published 8 papers in top-tier conferences (CVPR, ICCV, ICML)',
        'Developed a novel neural architecture that became part of Azure AI services',
        'Received "Best Paper Award" at CVPR 2021',
        'Filed 3 patents for innovative ML algorithms',
        'Collaborated with 5+ universities on joint research projects'
      ],
      technologies: [
        'PyTorch',
        'TensorFlow',
        'Python',
        'CUDA',
        'OpenCV',
        'NumPy',
        'Azure ML',
        'Jupyter',
        'Git',
        'LaTeX'
      ],
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png',
      companyWebsite: 'https://microsoft.com',
      teamSize: '3-person research team',
      reportingTo: 'Principal Researcher'
    },
    {
      position: 'Software Engineer, AI/ML',
      company: 'Tesla',
      location: 'Palo Alto, CA',
      startDate: 'August 2018',
      endDate: 'May 2020',
      duration: '1 year 9 months',
      employmentType: 'Full-time',
      description: 'Developed and optimized machine learning models for autonomous driving systems, focusing on computer vision and sensor fusion for real-time vehicle perception and decision making.',
      responsibilities: [
        'Develop ML models for autonomous vehicle perception systems',
        'Optimize neural networks for real-time inference on vehicle hardware',
        'Implement computer vision algorithms for object detection and tracking',
        'Collaborate with hardware teams on model deployment strategies',
        'Analyze and improve model performance using real-world driving data'
      ],
      achievements: [
        'Improved object detection accuracy by 25% for autonomous driving systems',
        'Optimized model inference to run 3x faster on vehicle hardware',
        'Contributed to the deployment of Full Self-Driving beta features',
        'Reduced false positive rate in pedestrian detection by 40%',
        'Led integration of new sensor data streams into ML pipeline'
      ],
      technologies: [
        'PyTorch',
        'Python',
        'C++',
        'CUDA',
        'OpenCV',
        'ROS',
        'Linux',
        'Docker',
        'Git',
        'TensorRT'
      ],
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/120px-Tesla_Motors.svg.png',
      companyWebsite: 'https://tesla.com',
      teamSize: '8-person ML team',
      reportingTo: 'Senior Manager, AI Software'
    }
  ];

  getEmploymentTypeColor(type: string): string {
    const colors = {
      'Full-time': 'success',
      'Part-time': 'info',
      'Contract': 'warning',
      'Internship': 'secondary',
      'Freelance': 'primary'
    };
    return colors[type as keyof typeof colors] || 'secondary';
  }

  getCurrentPosition(): boolean {
    return this.experiences.some(exp => exp.endDate === 'Present');
  }

  openCompanyWebsite(url: string): void {
    window.open(url, '_blank');
  }

  getDateRange(experience: Experience): string {
    return `${experience.startDate} - ${experience.endDate}`;
  }
}
