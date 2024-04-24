import { Component, inject, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { TranslationService } from './../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import AOS from "aos";
import 'aos/dist/aos.css';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {

  skillsService = inject(SkillsService);
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
