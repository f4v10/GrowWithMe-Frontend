
import { Routes } from '@angular/router';
import { CropPageComponent } from './crop/pages/crop-page.component';

export const routes: Routes = [
  { path: 'crops', component: CropPageComponent },
  { path: '', redirectTo: '/crops', pathMatch: 'full' },
];
