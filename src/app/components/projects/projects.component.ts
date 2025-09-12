import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Project, projects } from './projects.data';


@Component({
  selector: 'app-projects',
  imports: [CardModule, ButtonModule, ChipModule, AnimateOnScrollModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  projects: Project[] = projects;

  featuredProjects = this.projects.filter(project => project.featured);

  openUrl(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
