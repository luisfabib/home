import { Component } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MegaMenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MegaMenuItem[] = [
    {
      label: 'Portfolio',
      icon: 'pi pi-home',
      items: [
        [
          {
            label: 'Overview',
            items: [
              {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.scrollToSection('hero')
              },
              {
                label: 'About Me',
                icon: 'pi pi-user',
                command: () => this.scrollToSection('about')
              },
              {
                label: 'Skills',
                icon: 'pi pi-cog',
                command: () => this.scrollToSection('skills')
              }
            ]
          }
        ],
        [
          {
            label: 'Professional',
            items: [
              {
                label: 'Experience',
                icon: 'pi pi-briefcase',
                command: () => this.scrollToSection('experience')
              },
              {
                label: 'Projects',
                icon: 'pi pi-folder',
                command: () => this.scrollToSection('projects')
              },
              {
                label: 'Publications',
                icon: 'pi pi-book',
                command: () => this.scrollToSection('publications')
              }
            ]
          }
        ],
        [
          {
            label: 'Achievements',
            items: [
              {
                label: 'Education',
                icon: 'pi pi-graduation-cap',
                command: () => this.scrollToSection('education')
              },
              {
                label: 'Awards',
                icon: 'pi pi-trophy',
                command: () => this.scrollToSection('awards')
              },
              {
                label: 'Certifications',
                icon: 'pi pi-verified',
                command: () => this.scrollToSection('certifications')
              }
            ]
          }
        ]
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      command: () => this.scrollToSection('contact')
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
