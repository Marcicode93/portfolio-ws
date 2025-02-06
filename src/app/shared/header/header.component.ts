import { Component, HostListener, OnInit } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit  {
  menuOpen = false;
  isScrolled = false;
  currentLanguage = 'en';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || this.translate.getDefaultLang() || 'en';

  }
  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem('selectedLanguage', language); // Speichern
  }
  
  ngOnInit() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.changeLanguage(savedLanguage); // Wiederherstellen
    }
  }
  

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50; // Ändert Header-Styling nach 50px Scroll
  }
}
