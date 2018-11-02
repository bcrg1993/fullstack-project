import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ICommerce } from '../model/ecommerce/icommerce';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommerceService {

    constructor(private _httpClient: HttpClient) {
    }

    getAllCommerces(): Observable<ICommerce[]> {
        return this._httpClient.get<ICommerce[]>(`${environment.API_URL}/users`);
    }

    getCommerce(commerceId: number): Observable<ICommerce> {
        return this._httpClient.get<ICommerce>(`${environment.API_URL}/users/${commerceId}`);
    }
}
