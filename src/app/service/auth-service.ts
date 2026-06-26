import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isAuthorizedUser(name: string, pwd: string) {
    if (name === 'Lavanya' && pwd === '123') {
      sessionStorage.setItem('loggedIn', 'true');
    } else {
      sessionStorage.setItem('loggedIn', 'false');
    }
  }
}
