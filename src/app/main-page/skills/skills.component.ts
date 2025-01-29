import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  defaultImage = 'assets/img/03_skills/Capa_1.png';
  hoverImage = 'assets/img/03_skills/Capa_2.png';
  currentImage = this.defaultImage;

  changeImage() {
    this.currentImage = this.hoverImage;
  }

  resetImage() {
    this.currentImage = this.defaultImage;
  }
}
