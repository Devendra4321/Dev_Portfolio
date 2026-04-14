import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { environment } from '../../../environments/environment';
import emailjs from '@emailjs/browser';
import { DataService } from '../../core/services/data.service';
import { Profile } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);
  private dataService = inject(DataService);

  contactForm: FormGroup;
  isSubmitting = false;
  profile: Profile = {} as Profile;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
        },
        environment.emailjs.publicKey
      );

      this.isSubmitting = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Your message has been sent successfully!'
      });
      this.contactForm.reset();
    } catch (error) {
      this.isSubmitting = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to send message. Please try again.'
      });
    }
  }
}