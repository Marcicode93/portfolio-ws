import { Component, OnInit } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

  defaultImage = 'assets/img/03_skills/Capa_1.png';
  hoverImage = 'assets/img/03_skills/react_vue.png';
  showHoverImage = false;

  changeImage() {
    this.showHoverImage = true;
  }

  resetImage() {
    this.showHoverImage = false;
  }

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
