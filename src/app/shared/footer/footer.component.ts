import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
