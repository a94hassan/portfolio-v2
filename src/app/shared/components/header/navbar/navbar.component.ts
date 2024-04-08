import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  toggleIcon(navIcon: HTMLElement, dialog: HTMLElement) {
    navIcon.classList.toggle('open');
    dialog.classList.toggle('visible');
  }
}
