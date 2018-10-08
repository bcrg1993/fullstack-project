import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { CommerceService } from '../service/commerce.service';

@Injectable({
    providedIn: 'root'
})
export class ListCommerceResolver implements Resolve<any> {

    constructor(private commerceService: CommerceService) {
    }

    resolve() {
        return this.commerceService.getCommerces();
    }

}
