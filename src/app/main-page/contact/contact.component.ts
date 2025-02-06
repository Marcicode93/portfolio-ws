import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  imports: [FormsModule, TranslateDirective, TranslatePipe],
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

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.isChecked
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.formSubmitted = false;
            this.messageSent = true; 
            setTimeout(() => this.messageSent = false, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.log('Data sent: ', this.contactData),
        });
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.isChecked
    ) {
      ngForm.resetForm();
      this.formSubmitted = false;
    }
  }

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
