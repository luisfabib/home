import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MegaMenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  
  menuItems: MegaMenuItem[] = [
    {
      label: 'Navigation',
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

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const header = target.closest('.header');
    
    // Close mobile menu if clicking outside header
    if (!header && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    // Close mobile menu on window resize to handle orientation changes
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after navigation
      this.isMobileMenuOpen = false;
    }
  }
}
