import { ICountry } from "./icountry";
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from "rxjs";
import { CountryService } from "../../service/country.service";
import { catchError } from "rxjs/Operators";

export class CountryListDataSource implements DataSource<ICountry> {

    private countriesSubject: BehaviorSubject<ICountry[]>;

    constructor(private _countryService: CountryService) {
        this.countriesSubject = new BehaviorSubject<ICountry[]>([]);
    }

    connect(): Observable<ICountry[]> {
        return this.countriesSubject.asObservable();
    }

    disconnect(): void {
        this.countriesSubject.complete();
    }

    loadCountries(): void {
        this._countryService.getAllCountries()
            .pipe(
                catchError(() => of([]))
            ).subscribe(countries => {
                this.countriesSubject.next(countries);
            });
    }

    loadCountriesFromResolve(countriesList: ICountry[]): void {
        this.countriesSubject.next(countriesList);
    }
}