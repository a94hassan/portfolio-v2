import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { TranslationService } from './../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }

  get isGerman(): boolean {
    return localStorage.getItem('selectedLanguage') === 'de';
  }
}
