import {Component, inject, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    TranslateModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  onNavigateHome() {
    this.router.navigate(['/farmer/home']).then();
  }

  onNavigateLogin() {
    this.router.navigate(['/farmer-login']).then();
  }

  onNavigateRegister() {
    this.router.navigate(['/farmer-signup']).then();
  }
}
