import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../../../shared/services/projects.service';
import { CommonModule } from '@angular/common';
import AOS from "aos";
import 'aos/dist/aos.css';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  
  projectsService = inject(ProjectsService);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }
}
