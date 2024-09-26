import {Component, inject, OnInit} from '@angular/core';
import {ConsultantUserService} from "../../../services/consultant-user.service";
import {FarmerUser} from "../../../model/farmer-user.entity";
import {FarmerUserService} from "../../../services/farmer-user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  email = "";
  password = "";
  documentType = "";
  valueDocumentType = "";
  phone = "";

  private farmerUserService: FarmerUserService = inject(FarmerUserService);

  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  signUp() {
    const user: FarmerUser = {
      id: 0,
      email: this.email,
      password: this.password,
      documentType: this.documentType,
      valueDocumentType: this.valueDocumentType,
      phone: this.phone
    };
    this.farmerUserService.create(user).subscribe((response: FarmerUser) => {})

    this.router.navigate(['login-farmer']).then();
  }
}
