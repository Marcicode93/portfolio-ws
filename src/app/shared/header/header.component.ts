import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isScrolled = false;
  currentLanguage = 'en';

  burgerImage = 'assets/img/01_hero/Property 1=burger.png';
  closeImage = 'assets/img/01_hero/Property 1=CLOSE FINAL.png';
  showCloseImage = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.showCloseImage = true;
  }

  constructor(private translate: TranslateService) {
    this.currentLanguage =
      this.translate.currentLang || this.translate.getDefaultLang() || 'en';
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
