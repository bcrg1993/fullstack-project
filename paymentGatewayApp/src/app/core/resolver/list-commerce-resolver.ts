import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { CommerceService } from '../service/commerce.service';
import { Observable } from 'rxjs';
import { ICommerce } from '../model/icommerce';
/*
@Injectable({
    providedIn: 'root'
})
export class ListCommerceResolver implements Resolve<any> {

    constructor(private commerceService: CommerceService) {
    }

    resolve(): Observable<ICommerce[]> {
        return this.commerceService.getAllCommerces();
    }

}
*/