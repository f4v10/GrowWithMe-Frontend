import {Component, inject, OnInit} from '@angular/core';
import {ConsultantUser} from "../../../model/consultant-user.entity";
import {ConsultantUserService} from "../../../services/consultant-user.service";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-consultant-signup',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class ConsultantSignUpComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  dni = '';
  phone = '';

  private consultantUserService: ConsultantUserService = inject(ConsultantUserService);

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
    const user: ConsultantUser = {
      id: 0,
      email: this.email,
      password: this.password,
      dni: this.dni,
      phone: this.phone
    };
    this.consultantUserService.create(user).subscribe((response: ConsultantUser) => {});

    this.router.navigate(['consultant-signin']).then();
  }
}
