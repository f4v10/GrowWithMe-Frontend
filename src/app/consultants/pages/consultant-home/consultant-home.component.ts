import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";

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
export class ConsultantHomeComponent implements OnInit {
  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  onNavigateMonitoring() {
    this.router.navigate(['consultant/home/monitoring']);
  }

  onNavigateContracts() {
    this.router.navigate(['consultant/home/contracts']);
  }
}
