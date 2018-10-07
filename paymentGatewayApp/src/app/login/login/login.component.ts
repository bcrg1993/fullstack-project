import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from '../../core/model/ilogin';
import { LoginConstant } from '../../core/constant/loginconstant';

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
        this.inputPasswordType = LoginConstant.INPUT_PASSWORD_TYPE_PASS;
        this.inputPasswordShow = false;
    }

    login(): void {
        this.router.navigate(['home']);
    }

    changeInputPasswordType(): void {
        if (this.inputPasswordType === LoginConstant.INPUT_PASSWORD_TYPE_PASS) {
            this.inputPasswordType = LoginConstant.INPUT_PASSWORD_TYPE_TEXT;
            this.inputPasswordShow = true;
        } else {
            this.inputPasswordType = LoginConstant.INPUT_PASSWORD_TYPE_PASS;
            this.inputPasswordShow = false;
        }
    }

}
