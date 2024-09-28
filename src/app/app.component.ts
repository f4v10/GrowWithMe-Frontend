import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatToolbar, 
    MatAnchor, 
    MatButton, 
    MatCard, 
    MatCardActions, 
    MatCardContent, 
    MatCardHeader, 
    MatCardTitle, 
    MatSnackBar, 
    MatSnackBarModule, 
    MatInputModule],
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
