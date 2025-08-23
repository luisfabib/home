import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  demoUrl?: string;
  documentationUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CardModule, ButtonModule, ChipModule, AnimateOnScrollModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Fhircraft',
      description: 'Fhircraft is a Python package that dynamically generates Pydantic FHIR (Fast Healthcare Interoperability Resources) resource models from FHIR specifications, enabling comprehensive data structuring, validation, and typing within Python. It also offers a fully functional FHIRPath engine and code generation features to facilitate integration with other systems.',
      image: 'images/fhicraft-thumbnail.png',
      technologies: ['Python', 'Pydantic', 'FHIR', 'FHIRPath', ],
      documentationUrl: 'https://luisfabib.github.io/fhircraft/',
      githubUrl: 'https://github.com/luisfabib/fhircraft/tree/main/fhircraft',
      featured: true
    },
    {
      id: 2,
      title: 'DeerLab',
      description: 'A comprehensive free scientific software package for Python focused on modeling, penalized least-squares regression, and uncertainty quantification. It provides highly specialized on the analysis of dipolar EPR (electron paramagnetic resonance) spectroscopy data.',
      image: 'images/deerlab-thumbnail.png',
      technologies: ['Python', 'Numpy', 'Scipy'],
      githubUrl: 'https://github.com/johndoe/taskapp',
      featured: true
    },
    {
      id: 3,
      title: 'Hyscorean',
      description: 'Hyscorean is an open-source package of EleXsys and MATLAB software with graphical user-interface for acquiring non-uniform sampled HYSCORE data and for analyzing, both, uniform and non-uniform HYSCORE data, including validation and EasySpin-based fitting.',
      image: 'images/hyscorean-thumbnail.png',
      technologies: ['Matlab', 'ProDel'],
      githubUrl: 'https://github.com/luisfabib/Hyscorean?tab=readme-ov-file',
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
