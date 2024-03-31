import { Component, inject, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {
  skillsService = inject(SkillsService);
  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }
}
