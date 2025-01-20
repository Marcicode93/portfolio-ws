import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ReferenceComponent } from "./reference/reference.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, ReferenceComponent, ContactComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
