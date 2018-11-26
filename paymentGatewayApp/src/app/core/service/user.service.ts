import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/login/iuser';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    behaviorUser: BehaviorSubject<IUser>;

    constructor(private _httpClient: HttpClient) {
        this.behaviorUser = new BehaviorSubject<IUser>({ name: '', lastName: '', username: '', password: '' });
    }

    validateUser(user: IUser): Observable<IUser> {
        return this._httpClient.post<IUser>(`${environment.API_URL}/user/validate`, user)
            .pipe(
                map(data => {
                    this.behaviorUser.next(data);
                    return data;
                })
            );
    }

    logout(): void {
        this.behaviorUser.next({ name: '', lastName: '', username: '', password: '' });
    }
}
