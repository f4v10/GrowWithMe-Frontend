import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-consultant-home',
  standalone: true,
  imports: [
    MatButton,
    TranslateModule
  ],
  templateUrl: './consultant-home.component.html',
  styleUrl: './consultant-home.component.css'
})
export class ConsultantHomeComponent {

}
