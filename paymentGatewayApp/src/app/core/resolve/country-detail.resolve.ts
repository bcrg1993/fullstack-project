import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ICountry } from '../model/country/icountry';
import { CountryService } from '../service/country.service';

@Injectable({
    providedIn: 'root'
})
export class CountryDetailResolve implements Resolve<Observable<ICountry>> {

    constructor(private _countryService: CountryService) { }

    resolve(_route: ActivatedRouteSnapshot): Observable<ICountry> {
        const countryId = _route.params.id;
        return this._countryService.getCountry(countryId);
    }
}