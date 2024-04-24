import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from './../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }
}

