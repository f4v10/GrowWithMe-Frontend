import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {ConsultantSignUpComponent} from "./iam/pages/consultant/signup/signup.component";
import {FarmerSignUpComponent} from "./iam/pages/farmer/signup/signup.component";
import {ConsultantSignInComponent} from "./iam/pages/consultant/signin/signin.component";
import {FarmerSignInComponent} from "./iam/pages/farmer/signin/signin.component";
import {FooterComponent} from "./public/components/footer/footer.component";
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, LanguageSwitcherComponent, ConsultantSignInComponent, FarmerSignInComponent, ConsultantSignUpComponent, FarmerSignUpComponent, FooterComponent, ToolbarComponent],
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
