/**
 * Created by T897060 on 30/12/2016.
 */
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {User} from "./login/user.model";

@Injectable()
export class AuthService {
  redirectUrl: string;
  token: string;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<boolean> {
    let errorGettingUser = undefined;

    this.getUserByUserNameAndPassword(username, password)
      .subscribe(
        returnedUser => {
          this.token = String(returnedUser.id);
          localStorage.setItem('token', String(returnedUser.id));
        },
        (error: any) => {
          errorGettingUser = error;
        }
      );

    if (errorGettingUser) {
      return Observable.throw(errorGettingUser);
    }

    return Observable.of(true).delay(1000);
  }

  getUserByUserNameAndPassword(username: string, password: string): Observable<User> {
    let allUsers = this.getMockedUsers();

    let authenticatedUsers = allUsers.filter(
      userFromSystem =>
      userFromSystem.username == username
      &&
      userFromSystem.password == password
    );

    if (authenticatedUsers.length == 1) {
      return Observable.from(authenticatedUsers);
    }

    return Observable.throw("User is not present in system");
  }

  logout(): Observable<boolean> {
    this.token = undefined;
    localStorage.removeItem('token');

    return Observable.of(true);
  }

  getMockedUsers(): User[] {
    let user = new User();
    user.username = "admin";
    user.password = "admin123";
    user.id = 1;

    let user2 = new User();
    user2.username = "admin";
    user2.password = "admin1234";
    user2.id = 2;

    return [user, user2];
  }

}
