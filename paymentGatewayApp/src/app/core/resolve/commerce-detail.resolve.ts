import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ICommerce } from '../model/ecommerce/icommerce';
import { CommerceService } from '../service/commerce.service';

@Injectable({
  providedIn: 'root'
})
export class CommerceDetailResolve implements Resolve<Observable<ICommerce>> {

  constructor(private _commmerceService: CommerceService) { }

  resolve(_route: ActivatedRouteSnapshot): Observable<ICommerce> {
    const commerceId = +_route.params.id;
    return this._commmerceService.getCommerce(commerceId);
  }
}
