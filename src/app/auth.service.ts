/**
 * Created by T897060 on 30/12/2016.
 */
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {User} from "./login/user.model";
import {isUndefined} from "util";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(user: User): Observable<boolean> {

    let isUserPresent = this.isMockedUserPresent(user);
    console.log(isUserPresent);

    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = isUserPresent);
  }

  isMockedUserPresent(user: User): boolean {
    let allUsers = this.getMockedUsers();
    let isFound = false;

    return allUsers.some(savedUser => savedUser.username == user.username && savedUser.password == user.password);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getMockedUsers(): User[] {
    let user = new User();
    user.username = "admin";
    user.password = "admin123";

    let user2 = new User();
    user2.username = "admin";
    user2.password = "admin1234";
    return [user, user2];
  }

}
