import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from './../../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  translate = inject(TranslationService);

  options: { text: string; image: string }[] = 
    [
      { text: 'EN', image: './../../../../../assets/img/0_header/united_kingdom_icon.png'},
      { text: 'DE', image: './../../../../../assets/img/0_header/germany_icon.png'},
    ];

  selectedIndex = localStorage.getItem('selectedLanguage') === 'en' ? 0 : 1;
  selectedOption: { text: string; image: string } = this.options[this.selectedIndex];
  showDropdown = false;

  toggleIcon(navIcon: HTMLElement, dialog: HTMLElement) {
    navIcon.classList.toggle('open');
    dialog.classList.toggle('visible');
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(index: number): void {
    this.selectedOption = this.options[index];
    this.selectedIndex = index;
    this.showDropdown = false;
    this.toggleDropdown();
  }
}
