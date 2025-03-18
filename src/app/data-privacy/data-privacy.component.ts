import { Component, OnInit } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-data-privacy',
  standalone: true,
  imports: [TranslatePipe, RouterModule, HeaderComponent],
  templateUrl: './data-privacy.component.html',
  styleUrl: './data-privacy.component.scss',
})
export class DataPrivacyComponent implements OnInit {
  constructor(private translate: TranslateService, private route: ActivatedRoute) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'top') {
        window.scroll(0, 0); // Sofort an den Anfang setzen
      }
    });
  }
}
