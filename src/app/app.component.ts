import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {ConsultantLoginComponent} from "./iam/pages/consultant/login/login.component";
import {FarmerLoginComponent} from "./iam/pages/farmer/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, LanguageSwitcherComponent, FarmerLoginComponent, ConsultantLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrowWithMe-Frontend';

  constructor(private translateService: TranslateService) {
    this.translateService.use('en');
    this.translateService.setDefaultLang('en');
  }
}
