import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); 
    let storedLanguage = localStorage.getItem('selectedLanguage');
    this.switchLanguage(storedLanguage ? storedLanguage : 'en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
  }
}

