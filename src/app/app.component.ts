import { makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { PortfolioComponent } from "./main-page/portfolio/portfolio.component";
import { ReferenceComponent } from "./main-page/reference/reference.component";
import { ContactComponent } from "./main-page/contact/contact.component";
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainPageComponent, FooterComponent, PortfolioComponent, ReferenceComponent, ContactComponent, TranslatePipe,TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'folio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
}
}
