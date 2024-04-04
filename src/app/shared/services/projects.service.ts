import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [    
    {
      name: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link: 'https://el-pollo-loco.hassan-ammar.com',
      github: 'https://github.com/a94hassan/el_pollo_loco',
      img: 'el_pollo_loco.png'
    },
    {
      name: 'Join',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://join.hassan-ammar.com',
      github: 'https://github.com/a94hassan/join',
      img: 'join.png'
    },
    {
      name: 'Pokedex',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Unlock the ultimate Pokémon encyclopedia with our REST API-powered archive. Discover all Pokémons and their details with ease',
      link: 'https://pokedex.hassan-ammar.com',
      github: 'https://github.com/a94hassan/pokedex',
      img: 'pokedex.png'
    }
  ]
}
