import {Component, inject, OnInit} from '@angular/core';
import {ConsultantUser} from "../../../model/consultant-user.entity";
import {ConsultantUserService} from "../../../services/consultant-user.service";
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {BaseFormComponent} from "../../../../shared/components/base-form/base-form.component";
import {AuthenticationConsultantService} from "../../../services/consultant/authentication-consultant.service";

@Component({
  selector: 'app-consultant-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class ConsultantSignUpComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationConsultantService) {
    super();
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
    this.form = this.builder.group({
      email: [''],
      password: [''],
      dni: [''],
      phone: ['']
    })
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

    this.router.navigate(['consultant-sign-in']).then();
  }
}
