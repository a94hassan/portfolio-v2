import { Component, OnInit, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslationService } from './../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }
}
