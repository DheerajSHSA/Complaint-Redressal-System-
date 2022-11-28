import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin = false;
  constructor() { }

  login(username: string, password: string): void {
    if(username === 'Admin' && password === 'Admin')
      this.isLogin = true
    else
      this.isLogin = false
  }

  logout(): void {
    this.isLogin = false;
  }

}
