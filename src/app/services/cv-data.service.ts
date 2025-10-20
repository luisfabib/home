import { Injectable } from '@angular/core';
import { contactInfo } from '../components/contact/contact.data';
import { experience } from '../components/experience/experience.data';
import { education } from '../components/education/education.data';
import { publications } from '../components/publications/publications.data';
import { projects } from '../components/projects/projects.data';
import { awards } from '../components/awards/awards.data';
import { certifications } from '../components/certifications/certifications.data';
import { programmingSkills, professionalSkills, languageSkills } from '../components/skills/skills.data';
import { highlights, testimonials, description } from '../components/about/about.data';

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone?: string;
    location: string;
    linkedin: string;
    github: string;
    website?: string;
    profilePicture: string;
  };
  summary: string;
  experience: any[];
  education: any[];
  stats: {
    publications: number;
    awards: number;
    experienceYears: number;
    citations: number;
  };
  projects: any[];
  awards: any[];
  certifications: any[];
  skills: {
    programming: any[];
    professional: any[];
    languages: any[];
  };
  highlights: any[];
  testimonials: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor() { }

  getCVData(): CVData {
    // Extract contact information
    const email = contactInfo.find(c => c.label === 'Email')?.value || '';
    const location = contactInfo.find(c => c.label === 'Location')?.value || '';
    const linkedin = contactInfo.find(c => c.label === 'LinkedIn')?.value || '';
    const github = contactInfo.find(c => c.label === 'GitHub')?.value || '';

    // Get latest entries but don't overly restrict - let PDF generator handle space optimization
    const latestExperience = experience.slice(0, 2);
    const latestPublications = publications.slice(0, 3);
    const latestProjects = projects.slice(0, 3);
    const latestAwards = awards.slice(0, 3);
    const latestCertifications = certifications.slice(0, 3);
    
    // Include all programming and professional skills
    const topProgrammingSkills = programmingSkills;
    const topProfessionalSkills = professionalSkills;

    return {
      personalInfo: {
        name: 'Luis Fábregas-Ibáñez',
        title: 'Scientific Software Engineer',
        email: email,
        location: location,
        linkedin: linkedin,
        github: github,
        profilePicture: 'assets/images/profile-picture.png'
      },
      summary: description,
      experience: latestExperience,
      education: education.slice(0, 1), // Only latest entry (PhD)
    stats: {
      publications: publications.length,
      citations: Number((document.querySelector('#total-citations') as HTMLElement)?.textContent) || 0,
      awards: awards.length,
      experienceYears: 8
    },
    projects: latestProjects,
    awards: latestAwards,
    certifications: latestCertifications,
    skills: {
      programming: topProgrammingSkills,
      professional: topProfessionalSkills,
      languages: languageSkills
    },
    highlights: highlights,
    testimonials: testimonials.slice(0, 1) // First testimonial
    };
  }
}
