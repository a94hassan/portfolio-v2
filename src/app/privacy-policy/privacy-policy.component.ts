import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from './../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {

  translate = inject(TranslationService);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }
}
