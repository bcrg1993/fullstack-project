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

    getCountry(_id: string): Observable<ICountry> {
        return this._httpClient.get<ICountry>(`${environment.API_URL}/country/${_id}`);
    }

    addCountry(country: ICountry): Observable<any> {
        return this._httpClient.post(`${environment.API_URL}/country`, country);
    }

    updateCountry(country: ICountry): Observable<any> {
        return this._httpClient.put(`${environment.API_URL}/country/${country._id}`, country);
    }

    removeCountry(_id: string): Observable<any> {
        return this._httpClient.delete<any>(`${environment.API_URL}/country/${_id}`);
    }
}
