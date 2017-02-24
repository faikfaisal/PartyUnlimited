import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {isLoggedIn} from "../../login/login-information";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: 'navigation-bar.component.html',
  styleUrls: ['navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  goToAboutPage() {
    this.router.navigate(['/about'])
  }

  goToLoginPage() {
    this.router.navigate(['/login'])
  }

  isUserLoggedIn() : boolean
  {
    return isLoggedIn();
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([''])
  }
}
