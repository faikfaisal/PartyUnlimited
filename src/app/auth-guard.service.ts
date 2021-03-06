/**
 * Created by T897060 on 30/12/2016.
 */
import {Injectable}     from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot}    from '@angular/router';
import {AuthService} from "./auth.service";
import {isLoggedIn} from "./login/login-information";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (isLoggedIn()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);

    return false;
  }
}
