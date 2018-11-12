import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ILogin } from '../../core/model/login/ilogin';
import { LoginConstant } from '../../core/constant/loginconstant';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginData: ILogin;
    loginForm: FormGroup;
    inputPasswordType: string;
    inputPasswordShow: boolean;

    constructor(private router: Router,
        private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.inputPasswordType = LoginConstant.INPUT_PASSWORD_TYPE_PASS;
        this.inputPasswordShow = false;
    }

    login(): void {
        if(this.validateForm()) {
            this.loginData = this.loginForm.getRawValue();
            this.router.navigate(['home']);
        }
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

    validateInput(field: string): boolean {
        return this.loginForm.controls[field].invalid;
    }

    validateForm(): boolean {
        return this.loginForm.valid;
    }

}
