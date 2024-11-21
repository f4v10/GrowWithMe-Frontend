import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ConsultantUserService} from "../../../services/consultant-user.service";
import {ConsultantUser} from "../../../model/consultant-user.entity";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-consultant-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class ConsultantSignInComponent implements OnInit {
  dni = "";
  password = "";

  protected consultantUserService: ConsultantUserService = inject(ConsultantUserService);
  protected consultantUserData: ConsultantUser;
  protected dataSource!: MatTableDataSource<any>;

  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.dataSource = new MatTableDataSource();
    this.consultantUserData = new ConsultantUser();
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  protected logIn() {
    this.consultantUserService.create(this.consultantUserData).subscribe((response: ConsultantUser) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    })

    this.router.navigate(['consultant/home']).then();
  }

  onNavigateConsultantSignUp() {
    this.router.navigate(['consultant-signup']).then();
  }

  onNavigateFarmerSignIn() {
    this.router.navigate(['farmer-signin']).then();
  }
}
