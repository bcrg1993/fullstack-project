import { ICountry } from "./icountry";
import { DataSource } from '@angular/cdk/collections';
import { Observable, merge, of } from "rxjs";
import { map } from 'rxjs/Operators';
import { MatPaginator } from "@angular/material";

export class CountryListDataSource extends DataSource<ICountry> {

    countriesList: ICountry[];
    renderedCountriesList: ICountry[];

    constructor(private _paginator: MatPaginator, private _countriesList: ICountry[]) {
        super();
        this.countriesList = [];
    }

    connect(): Observable<ICountry[]> {
        const displayDataChanges = [
            of(this._countriesList),
            this._paginator.page
        ];

        return merge(...displayDataChanges).pipe(map(() => {
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.countriesList = this._countriesList;
            this.renderedCountriesList = this.countriesList.slice(startIndex, startIndex + this._paginator.pageSize);
            return this.renderedCountriesList;
        }));
    }

    disconnect(): void {
    }

}