import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {ConsultantSignInComponent} from "./iam/pages/consultant/signin/signin.component";
import {FarmerSignInComponent} from "./iam/pages/farmer/signin/signin.component";
import {ConsultantSignUpComponent} from "./iam/pages/consultant/signup/signup.component";
import {FarmerSignUpComponent} from "./iam/pages/farmer/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FarmerSignInComponent, ConsultantSignInComponent, ConsultantSignUpComponent, FarmerSignUpComponent],
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
