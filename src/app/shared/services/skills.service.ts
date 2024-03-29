import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  constructor() { }

  skills: Skill[] = [
    {
      name: 'Angular',
      icon: 'angular.png',
    },
    {
      name: 'TypeScript',
      icon: 'typescript.png',
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
    },
    {
      name: 'HTML',
      icon: 'html.png',
    },
    {
      name: 'Firebase',
      icon: 'firebase.png',
    },
    {
      name: 'GIT',
      icon: 'git.png',
    },
    {
      name: 'CSS',
      icon: 'css.png',
    },
    {
      name: 'Rest-API',
      icon: 'rest_api.png',
    },
    {
      name: 'Scrum',
      icon: 'scrum.png',
    },
    {
      name: 'Material Design',
      icon: 'material_design.png',
    }
  ]
}
