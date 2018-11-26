import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { IUser } from 'src/app/core/model/login/iuser';
import { UserService } from 'src/app/core/service/user.service';

@Component({
    selector: 'app-toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

    progressBarShow: boolean;
    user: IUser;

    constructor(private router: Router,
        private _userService: UserService) {
        this.progressBarShow = false;
        this._userService.behaviorUser.subscribe(
            data => {
                if (data.username == '') {
                    this.user = JSON.parse(localStorage.getItem('userData'));
                } else {
                    this.user = data;
                }
            }
        );
    }

    ngOnInit() {
        this.router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                this.progressBarShow = true;
            }

            if (event instanceof NavigationEnd) {
                this.progressBarShow = false;
            }
        });
    }

    logout(): void {
        localStorage.removeItem('userData');
        this._userService.logout();
        setTimeout(() => {
            this.router.navigate(['login']);
        }, 500);
    }

}
