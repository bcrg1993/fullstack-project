import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ICommerce } from '../model/icommerce';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommerceService {

    dataChange: BehaviorSubject<ICommerce[]>;
    totalRecords: number;

    constructor(private _httpClient: HttpClient) {
        this.dataChange = new BehaviorSubject<ICommerce[]>([]);
    }

    get data(): ICommerce[] {
        return this.dataChange.value;
    }

    getAllCommerces(): void {
        this._httpClient.get<ICommerce[]>(`${environment.API_URL}/posts`).subscribe(
            data => {
                this.dataChange.next(data);
                this.totalRecords = data.length;
            },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            }
        );
    }
}
