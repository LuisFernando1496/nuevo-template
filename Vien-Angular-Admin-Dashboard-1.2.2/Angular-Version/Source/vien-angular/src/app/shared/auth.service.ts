import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { getUserRole } from 'src/app/utils/util';
import { environment } from 'src/environments/environment';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  url = environment.apiUrl;

  headersWithoutToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  headersWithToken = {
    headers: new HttpHeaders({
      Authorization: localStorage.getItem('token')
    })
  };

  constructor(protected http: HttpClient) { }

  // tslint:disable-next-line:typedef
  signIn(credentials: ISignInCredentials) {
    return this.http.post(this.url + "login", credentials, this.headersWithoutToken);
    // .signInWithEmailAndPassword(credentials.email, credentials.password)
    // .then(({ user }) => {
    //   return user;
    // });
  }

  signOut(id) {
    return this.http.post(this.url + "logout", id, this.headersWithToken)
  }

  // tslint:disable-next-line:typedef
  register(credentials: ICreateCredentials) {
    return this.http.post(this.url + "register", credentials, this.headersWithoutToken);
    // .createUserWithEmailAndPassword(credentials.email, credentials.password)
    // .then(async ({ user }) => {
    //   user.updateProfile({
    //     displayName: credentials.displayName,
    //   });
    //   this.auth.updateCurrentUser(user);
    //   return user;
    // });
  }

  // tslint:disable-next-line:typedef
  sendPasswordEmail(email) {
    return this.http.post(this.url + "send/password", email, this.headersWithoutToken);
  }

  // tslint:disable-next-line:typedef
  resetPassword(credentials: IPasswordReset) {
    return this.http.post(this.url + "reset/Password", credentials, this.headersWithoutToken);
  }

  // tslint:disable-next-line:typedef
  // getUser() {
  //   const u = {
  //     displayName: localStorage.getItem("username")
  //   };
  //   return { ...u, role: getUserRole() };
  // }
}
