import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {AuthenticationConsultantService} from "../../../services/consultant/authentication-consultant.service";
import {BaseFormComponent} from "../../../../shared/components/base-form/base-form.component";
import {ConsultantSignInRequest} from "../../../model/consultant/consultant-sign-in.request";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-consultant-sign-in',
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
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class ConsultantSignInComponent extends BaseFormComponent implements OnInit {
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    let email = this.form.value.email;
    let password = this.form.value.password;
    const signInRequest = new ConsultantSignInRequest(email, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
    this.onNavigateConsultantHome();
  }

  onNavigateConsultantHome() {
    this.router.navigate(['consultant/home']).then();
  }

  onNavigateConsultantSignUp() {
    this.router.navigate(['consultant-sign-up']).then();
  }

  onNavigateFarmerSignIn() {
    this.router.navigate(['farmer-sign-in']).then();
  }
}
