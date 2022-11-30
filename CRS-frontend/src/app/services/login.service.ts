import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin = false;
  urlSearchParams: URLSearchParams = new URLSearchParams;
  constructor(private http: HttpClient) { }

  login(): void {
  }

  logout(): void {
    this.isLogin = false;
  }

  signUp(fname: string, lname: string, username: string, password: string, location: string): void{
    this.urlSearchParams.append('fname', fname);
    this.urlSearchParams.append('lname', lname);
    this.urlSearchParams.append('username', username);
    this.urlSearchParams.append('password', password);
    this.urlSearchParams.append('location', location);
    this.http.post('http://localhost:8080/signup', this.urlSearchParams).subscribe();
  }


}
