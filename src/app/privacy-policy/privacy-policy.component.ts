import { Component, inject } from '@angular/core';
import { TranslationService } from './../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  translate = inject(TranslationService);
}
