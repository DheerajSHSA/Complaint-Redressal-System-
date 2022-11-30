import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fname = ''
  lname = ''
  username = ''
  password = ''
  location = ''
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  signUp(): void {
    if (this.fname !== '' && this.lname !== '' && this.username !== '' && this.password !== '' && this.location !== '') {
      this.service.signUp(this.fname, this.lname, this.username, this.password, this.location);
    }
    else {
      alert("Please Fill out all the Fields")
    }
  }

}
