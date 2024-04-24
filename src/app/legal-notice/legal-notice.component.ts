import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from './../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }
}
