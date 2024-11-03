import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {ConsultantUser} from "../../../iam/model/consultant-user.entity";

@Component({
  selector: 'app-farmer-home',
  standalone: true,
    imports: [
        MatButton,
        TranslateModule
    ],
  templateUrl: './farmer-home.component.html',
  styleUrl: './farmer-home.component.css'
})
export class FarmerHomeComponent implements OnInit{
  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  onNavigateCrops() {
    this.router.navigate(['/farmer/home/crops']).then();
  }
}
