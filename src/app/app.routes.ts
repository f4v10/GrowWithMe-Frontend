import { Routes } from '@angular/router';
import {FarmerSignInComponent} from "./iam/pages/farmer/sign-in/sign-in.component";
import {FarmerSignUpComponent} from "./iam/pages/farmer/sign-up/sign-up.component";
import {ConsultantSignInComponent} from "./iam/pages/consultant/sign-in/sign-in.component";
import {ConsultantSignUpComponent} from "./iam/pages/consultant/sign-up/sign-up.component";
import {FarmerHomeComponent} from "./farmers/pages/farmer-home/farmer-home.component";
import {ConsultantHomeComponent} from "./consultants/pages/consultant-home/consultant-home.component";
import {CropsHomeComponent} from "./crops/pages/crops-home/crops-home.component";

export const routes: Routes = [
  {path: 'farmer-sign-in', component: FarmerSignInComponent},
  {path: 'farmer-sign-up', component: FarmerSignUpComponent},
  {path: 'consultant-sign-in', component: ConsultantSignInComponent},
  {path: 'consultant-sign-up', component: ConsultantSignUpComponent},
  {path: 'farmer/home', component: FarmerHomeComponent },
  {path: 'farmer/home/crops', component: CropsHomeComponent },
  {path: 'consultant/home', component: ConsultantHomeComponent },
  {path: '', redirectTo: '/farmer-sign-in', pathMatch: 'full'},
  {path: '**', redirectTo: '/farmer-sign-in'}
];
