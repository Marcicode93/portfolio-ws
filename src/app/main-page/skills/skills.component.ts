import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {

  ngOnInit():void{
    AOS.init();
  }

  defaultImage = 'assets/img/03_skills/Capa_1.png';
  hoverImage = 'assets/img/03_skills/Property 1=Group 19.png';
  currentImage = this.defaultImage;

  changeImage() {
    this.currentImage = this.hoverImage;
  }

  resetImage() {
    this.currentImage = this.defaultImage;
  }
}
