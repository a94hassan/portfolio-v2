import { Component, inject } from '@angular/core';
import { TranslationService } from './../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  translate = inject(TranslationService);
}
