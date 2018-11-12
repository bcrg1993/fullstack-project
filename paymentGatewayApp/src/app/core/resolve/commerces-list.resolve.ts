import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICommerce } from '../model/ecommerce/icommerce';
import { CommerceService } from '../service/commerce.service';

@Injectable({
  providedIn: 'root'
})
export class CommercesListResolve implements Resolve<Observable<ICommerce[]>> {

  constructor(private _commerceService: CommerceService) { }

  resolve(): Observable<ICommerce[]> {
    return this._commerceService.getAllCommerces();
  }
}