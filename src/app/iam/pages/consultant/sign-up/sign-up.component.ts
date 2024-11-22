import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {BaseFormComponent} from "../../../../shared/components/base-form/base-form.component";
import {AuthenticationConsultantService} from "../../../services/consultant/authentication-consultant.service";
import {ConsultantSignUpRequest} from "../../../model/consultant/consultant-sign-up.request";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-consultant-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    TranslateModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatError,
    NgIf
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
      confirmPassword: [''],
      dni: [''],
      phone: ['']
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    let email = this.form.value.email;
    let password = this.form.value.password;
    let confirmPassword = this.form.value.confirmPassword;
    let dni = this.form.value.dni;
    let phone = this.form.value.phone;
    const signUpRequest = new ConsultantSignUpRequest(email, password, confirmPassword, dni, phone);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
    this.onNavigateConsultantSignIn();
  }

  onNavigateConsultantSignIn() {
    this.router.navigate(['consultant-sign-in']);
  }
}
