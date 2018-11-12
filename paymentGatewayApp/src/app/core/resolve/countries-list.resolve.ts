import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountry } from '../model/country/icountry';
import { CountryService } from '../service/country.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesListResolve implements Resolve<Observable<ICountry[]>> {

  constructor(private _countryService: CountryService) { }

  resolve(): Observable<ICountry[]> {
    return this._countryService.getAllCountries();
  }
}
