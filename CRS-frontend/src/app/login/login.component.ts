import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  log() {
  }
}
