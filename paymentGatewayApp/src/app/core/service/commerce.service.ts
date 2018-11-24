import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ICommerce } from '../model/ecommerce/icommerce';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommerceService {

    constructor(private _httpClient: HttpClient) {
    }

    getAllCommerces(): Observable<ICommerce[]> {
        return this._httpClient.get<ICommerce[]>(`${environment.API_URL}/commerce`);
    }

    addCommerce(commerce: ICommerce): Observable<any> {
        return this._httpClient.post<any>(`${environment.API_URL}/commerce/`, commerce);
    }

    getCommerce(_id: string): Observable<ICommerce> {
        return this._httpClient.get<ICommerce>(`${environment.API_URL}/commerce/${_id}`);
    }

    removeCommerce(_id: string): Observable<any> {
        return this._httpClient.delete<any>(`${environment.API_URL}/commerce/${_id}`);
    }
}
