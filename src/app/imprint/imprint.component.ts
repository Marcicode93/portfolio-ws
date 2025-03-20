import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, RouterModule, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
