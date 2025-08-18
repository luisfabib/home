import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [ChipModule, ProgressBarModule, AnimateOnScrollModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'pi pi-desktop',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      icon: 'pi pi-server',
      skills: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Java', 'C#', '.NET Core', 'REST APIs']
    },
    {
      name: 'Database',
      icon: 'pi pi-database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      name: 'DevOps & Tools',
      icon: 'pi pi-cog',
      skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Jenkins', 'Linux', 'VS Code', 'Figma']
    }
  ];

  topSkills: Skill[] = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'AWS', level: 65, category: 'Cloud' }
  ];
}
