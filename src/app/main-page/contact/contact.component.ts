import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  ngOnInit(): void {
    AOS.init();
  }

  isChecked: boolean = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  messageSent: boolean = false;

  http = inject(HttpClient);

  mailTest = true;
  formSubmitted = false;

  post = {
    endPoint: 'https://marcel-steffen.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  handleLinkClick(event: Event) {
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'A' &&
      target.getAttribute('href') === 'data-privacy'
    ) {
      event.preventDefault();
      this.router.navigate(['/data-privacy']);
    }
  }

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid) {
      if (this.isChecked) {
        this.submitForm(ngForm);
      } else {
        this.resetForm(ngForm);
      }
    }
  }

  private submitForm(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => this.handleSuccess(ngForm),
        error: (error) => console.error(error),
        complete: () => console.log('Data sent: ', this.contactData),
      });
  }

  private handleSuccess(ngForm: NgForm) {
    ngForm.resetForm();
    this.formSubmitted = false;
    this.messageSent = true;
    setTimeout(() => (this.messageSent = false), 5000);
  }

  private resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.formSubmitted = false;
  }

  constructor(private translate: TranslateService, private router: Router) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
