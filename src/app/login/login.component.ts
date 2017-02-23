/**
 * Created by T897060 on 30/12/2016.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {User} from "./user.model";
import {isLoggedIn} from "./login-information";

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
    this.authService.login(this.userModel.username, this.userModel.password).subscribe(
      () => {
        this.message = "Trying to login";
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.router.navigate([redirect]);
      },
      () => {
        this.isAuthenticationError = true;
        this.message = "Authentication Error: Please make sure your username and password are correct";
      });
  }

  logout() {
    this.authService.logout();
  }
}
