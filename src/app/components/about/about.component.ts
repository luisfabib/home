import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CommonModule } from '@angular/common';
import { highlights, testimonials } from './about.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardModule, AnimateOnScrollModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = highlights
  testimonials = testimonials
  yearsOfExperience = new Date().getFullYear() - 2018;
}
