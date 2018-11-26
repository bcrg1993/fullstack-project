import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { IUser } from '../../core/model/login/iuser';
import { LoginConstant } from '../../core/constant/loginconstant';
import { UserService } from 'src/app/core/service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user: IUser;
    loginForm: FormGroup;
    inputPasswordType: string;
    inputPasswordShow: boolean;
    incorrectDataMessageFlag: boolean;

    constructor(private _formBuilder: FormBuilder,
        private _router: Router,
        private _userService: UserService) {
        this.loginForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.incorrectDataMessageFlag = false;
    }

    ngOnInit() {
        this.inputPasswordType = LoginConstant.INPUT_PASSWORD_TYPE_PASS;
        this.inputPasswordShow = false;
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

    login(): void {
        if (this.validateForm()) {
            this.user = this.loginForm.getRawValue();
            this._userService.validateUser(this.user).subscribe(
                (data: any) => {
                    if (data.status == 401) {
                        this.incorrectDataMessageFlag = true;
                    } else {
                        this._router.navigate(['home']);
                        localStorage.setItem('userData', JSON.stringify(data));
                    }
                },
                error => {
                    console.log('error', error);
                }
            );

        }
    }

}
