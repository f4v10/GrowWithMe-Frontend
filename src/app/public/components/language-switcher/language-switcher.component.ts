import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {OverlayModule} from "@angular/cdk/overlay";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatSelect,
    MatOption,
    NgForOf,
    OverlayModule
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  currentLang = 'en';
  languages = ['es', 'en'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string): void {
    this.currentLang= language;
    this.translate.use(language);
  }
}
