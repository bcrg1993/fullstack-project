import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from './../model/ilogin';
import { Constant } from './../constant/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: ILogin;
  inputPasswordType: string;
  inputPasswordShow: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.inputPasswordType = Constant.INPUT_PASSWORD_TYPE_PASS;
    this.inputPasswordShow = false;
  }

  login(): void {
    this.router.navigate(['home']);
  }

  changeInputPasswordType(): void {
    if (this.inputPasswordType === Constant.INPUT_PASSWORD_TYPE_PASS) {
      this.inputPasswordType = Constant.INPUT_PASSWORD_TYPE_TEXT;
      this.inputPasswordShow = true;
    } else {
      this.inputPasswordType = Constant.INPUT_PASSWORD_TYPE_PASS;
      this.inputPasswordShow = false;
    }
  }

}
