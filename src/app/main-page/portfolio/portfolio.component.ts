import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

    ngOnInit():void{
      AOS.init();
    }
}
