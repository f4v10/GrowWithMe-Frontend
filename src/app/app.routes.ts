
import { Routes } from '@angular/router';
import {CropsHomeComponent} from "./crops/pages/crops-home/crops-home.component";

export const routes: Routes = [
  { path: 'crops', component: CropsHomeComponent },
  { path: '', redirectTo: 'crops', pathMatch: 'full' },
];
