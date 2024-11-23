import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {AuthenticationFarmerService} from "../../../services/farmer/authentication-farmer.service";
import {FarmerSignUpRequest} from "../../../model/farmer/farmer-sign-up.request";
import {BaseFormComponent} from "../../../../shared/components/base-form/base-form.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-farmer-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    TranslateModule,
    MatLabel,
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
    NgIf,
    MatSelect,
    MatOption
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class FarmerSignUpComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationFarmerService) {
    super();
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
    this.form = this.builder.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      documentType: [''],
      valueDocumentType: [''],
      phone: ['']
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    let email = this.form.value.email;
    let password = this.form.value.password;
    let confirmPassword = this.form.value.confirmPassword;
    let documentType = this.form.value.documentType;
    let valueDocumentType = this.form.value.valueDocumentType;
    let phone = this.form.value.phone;
    const signUpRequest = new FarmerSignUpRequest(email, password, confirmPassword, documentType, valueDocumentType, phone);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
    this.onNavigateFarmerSignIn();
  }

  onNavigateFarmerSignIn() {
    this.router.navigate(['farmer-sign-in']);
  }
}
