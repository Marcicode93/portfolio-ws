import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'app-data-privacy',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './data-privacy.component.html',
  styleUrl: './data-privacy.component.scss'
})
export class DataPrivacyComponent {

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
