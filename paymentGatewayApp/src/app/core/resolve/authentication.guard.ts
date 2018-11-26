import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {

    constructor(private _router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('userData') != null) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }

    canActivateChild(): boolean {
        return false;
    }
}