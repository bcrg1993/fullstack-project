import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICommerce } from '../model/icommerce';
import { delay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CommerceService {

    private commerceList: ICommerce[];

    constructor() {
        this.commerceList = [
            { name: 'Empresa Gloria S.A.C', address: 'Casimiro Ulloa 111, Lima 15047', phone: '543-9999', state: true },
            { name: 'Corporación Overal', address: 'Casimiro Ulloa 222, Lima 15047', phone: '543-8888', state: true },
            { name: 'Empresa Equifax', address: 'Casimiro Ulloa 333, Lima 15047', phone: '543-7777', state: true },
            { name: 'Alignet S.A.C', address: 'Casimiro Ulloa 444, Lima 15047', phone: '543-6666', state: true }
        ];
    }

    getCommerces(): Observable<ICommerce[]> {
        return of(this.commerceList)
            .pipe(delay(3000));
    }

    addCommerces(commerce: ICommerce): void {
        this.commerceList.push(commerce);
    }
}
