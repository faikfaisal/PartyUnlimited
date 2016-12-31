/**
 * Created by T897060 on 30/12/2016.
 */
import {Component}   from '@angular/core';
import {Router}      from '@angular/router';
import {AuthService} from "../auth.service";
import {User} from "./user.model";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message: string;
  isAuthenticationError: boolean = false;
  userModel: User = new User();


  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.userModel).subscribe(() => {
      this.message = "Trying to login";
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // Redirect the user
        this.router.navigate([redirect]);
      } else {
        this.isAuthenticationError = true;
        this.message = "Authentication Error: Please make sure your username and password are correct";
      }
    });
  }

  logout() {
    this.authService.logout();
  }


}
