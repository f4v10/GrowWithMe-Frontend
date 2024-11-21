import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {environments} from "../../../../environments/environment";
import {FarmerSignUpRequest} from "../../model/farmer/farmer-sign-up.request";
import {FarmerSignUpResponse} from "../../model/farmer/farmer-sign-up.response";
import {FarmerSignInRequest} from "../../model/farmer/farmer-sign-in.request";
import {FarmerSignInResponse} from "../../model/farmer/farmer-sign-in.response";

/**
 * Authentication service
 * @summary
 * This service is responsible for handling sign-up, sign-in, and sign-out operations.
 * It uses the HttpClient to send HTTP requests to the server.
 * It uses the Router to navigate to different routes based on the response from the server.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationFarmerService {
  basePath: string = `${environments.serverBasePath}`;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) { }

  get isSignedIn() { return this.signedIn.asObservable();}

  get currentUserId() { return this.signedInUserId.asObservable(); }

  get currentEmail() { return this.signedInEmail.asObservable(); }

  /**
   * Sign up
   * @summary
   * This method sends a POST request to the server to sign up a new user.
   * @param signUpRequest - The sign-up request object containing the username and password.
   * @returns void
   */
  signUp(signUpRequest: FarmerSignUpRequest) {
    return this.http.post<FarmerSignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.email} with id ${response.id}`);
          this.router.navigate(['farmer-sign-in']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['farmer-sign-up']).then();
        }
      });
  }

  /**
   * Sign in
   * @summary
   * This method sends a POST request to the server to sign in an existing user.
   * @param signInRequest - The sign-in request object containing the username and password.
   * @returns void
   */
  signIn(signInRequest: FarmerSignInRequest) {
    return this.http.post<FarmerSignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInEmail.next(response.email);
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.email} with token ${response.token}`);
          this.router.navigate(['/']).then();
        },
        error: (error) => {
          console.error(`Error while signing in: ${error}`);
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInEmail.next('');
          localStorage.removeItem('token');
          this.router.navigate(['farmer-sign-in']).then();
        }
      });
  }

  /**
   * Sign out
   * @summary
   * This method signs out the current user by clearing the token and navigating to the sign-in page.
   * @returns void
   */
  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInEmail.next('');
    localStorage.removeItem('token');
    this.router.navigate(['farmer-sign-in']).then();
  }
}
