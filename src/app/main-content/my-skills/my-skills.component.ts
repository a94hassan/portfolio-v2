import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { TranslationService } from './../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillsService = inject(SkillsService);
  translate = inject(TranslationService);

  get isGerman(): boolean {
    return localStorage.getItem('selectedLanguage') === 'de';
  }
}
