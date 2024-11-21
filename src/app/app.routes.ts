import { Routes } from '@angular/router';
import {FarmerSignInComponent} from "./iam/pages/farmer/signin/signin.component";
import {FarmerSignUpComponent} from "./iam/pages/farmer/signup/signup.component";
import {ConsultantSignInComponent} from "./iam/pages/consultant/signin/signin.component";
import {ConsultantSignUpComponent} from "./iam/pages/consultant/signup/signup.component";
import {FarmerHomeComponent} from "./farmers/pages/farmer-home/farmer-home.component";
import {ConsultantHomeComponent} from "./consultants/pages/consultant-home/consultant-home.component";
import {CropsHomeComponent} from "./crops/pages/crops-home/crops-home.component";

export const routes: Routes = [
  {path: 'farmer-login', component: FarmerSignInComponent},
  {path: 'farmer-signup', component: FarmerSignUpComponent},
  {path: 'consultant-login', component: ConsultantSignInComponent},
  {path: 'consultant-signup', component: ConsultantSignUpComponent},
  {path: 'farmer/home', component: FarmerHomeComponent },
  {path: 'farmer/home/crops', component: CropsHomeComponent },
  {path: 'consultant/home', component: ConsultantHomeComponent },
  {path: '', redirectTo: '/farmer-login', pathMatch: 'full'},
  {path: '**', redirectTo: '/farmer-login'}
];
