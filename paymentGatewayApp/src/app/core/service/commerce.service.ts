import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ICommerce } from '../model/ecommerce/icommerce';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommerceService {

    commercesList$: BehaviorSubject<ICommerce[]>;

    constructor(private _httpClient: HttpClient) {
        this.commercesList$ = new BehaviorSubject<ICommerce[]>([]);
    }

    get commercesList(): ICommerce[] {
        return this.commercesList$.value;
    }

    getAllCommerces(): void {
        this._httpClient.get<ICommerce[]>(`${environment.API_URL}/users`).subscribe(
            (data: ICommerce[]) => {
                this.commercesList$.next(data);
            },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            }
        );
    }
}
