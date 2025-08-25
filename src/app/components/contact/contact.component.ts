import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    CardModule,
    ButtonModule,
    MessageModule,
    TooltipModule,
    AnimateOnScrollModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'pi pi-envelope',
      label: 'Email',
      value: 'mail@luisfabregas.com',
      link: 'mailto:mail@luisfabregas.com'
    },
    {
      icon: 'pi pi-map-marker',
      label: 'Location',
      value: 'Zurich, Switzerland'
    },
    {
      icon: 'pi pi-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/luisfabib',
      link: 'https://linkedin.com/in/luisfabib'
    },
    {
      icon: 'pi pi-github',
      label: 'GitHub',
      value: 'github.com/luisfabib',
      link: 'https://github.com/luisfabib'
    }
  ];


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  openLink(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (control.errors['minlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is too short`;
      }
    }
    return '';
  }
}
