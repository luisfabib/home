import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CommonModule } from '@angular/common';
import { languageSkills, personalSkills, professionalSkills, programmingSkills } from './skills.data';

interface Skill {
  name: string;
  rating: number; // 0-5 stars
  annotation: string;
  certification?: string; // Optional certification level (B1, B2, C1, C2)
  isNative?: boolean; // Indicates if the language is native
  frameworks?: string[]; // Optional frameworks/libraries for programming skills
  icon?: string; // Optional icon for professional expertise
}

interface SkillGroup {
  name: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CardModule, TagModule, ChipModule, AnimateOnScrollModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {
  professionalExpertise = professionalSkills

  skillGroups: SkillGroup[] = [
    {
      name: 'Programming Skills',
      icon: 'pi pi-code',
      skills: programmingSkills
    },
    {
      name: 'Language Skills',
      icon: 'pi pi-globe',
      skills: languageSkills
    },
    {
      name: 'Personal Skills',
      icon: 'pi pi-user',
      skills: personalSkills
    }
  ];

  // Helper method to generate star array for template
  getStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }
}
