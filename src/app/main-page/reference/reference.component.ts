import { Component, OnInit } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

  references = [
    {
      img: '../../../assets/img/02_about/marcel ellipse fin.png',
      textKey: 'reference.text1',
      nameKey: 'reference.name1',
    },
    {
      img: '../../../assets/img/02_about/marcel ellipse fin.png',
      textKey: 'reference.text2',
      nameKey: 'reference.name2',
    },
    {
      img: '../../../assets/img/02_about/marcel ellipse fin.png',
      textKey: 'reference.text3',
      nameKey: 'reference.name3',
    },
    {
      img: '../../../assets/img/02_about/marcel ellipse fin.png',
      textKey: 'reference.text4',
      nameKey: 'reference.name4',
    },
    {
      img: '../../../assets/img/02_about/marcel ellipse fin.png',
      textKey: 'reference.text5',
      nameKey: 'reference.name5',
    },
  ];

  currentIndex: number = 0;

  leftArrowSrc = 'assets/img/05_reference/arrow_back.png';
  rightArrowSrc = 'assets/img/05_reference/arrow_forward.png';

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  previousImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
