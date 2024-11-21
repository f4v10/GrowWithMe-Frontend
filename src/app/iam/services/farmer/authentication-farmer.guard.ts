import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationConsultantService} from "../consultant/authentication-consultant.service";
import {map, take} from "rxjs";

export const authenticationFarmerGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationConsultantService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1), map(isSignedIn => {
      if (isSignedIn) return true;
      else {
        router.navigate(['farmer-sign-in']).then();
        return false;
      }
    }));
};
