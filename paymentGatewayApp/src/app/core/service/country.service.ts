import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../model/country/icountry';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpClient: HttpClient) {
  }

  getAllCountries(): Observable<ICountry[]> {
    return this._httpClient.get<ICountry[]>(`${environment.API_URL}/country`);
  }

  removeCountry(countryId: number): Observable<any> {
    return this._httpClient.delete<any>(`${environment.API_URL}/country/${countryId}`);
  }
}
