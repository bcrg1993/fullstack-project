import { ICommerce } from "./icommerce";
import { DataSource } from '@angular/cdk/collections';
import { Observable, merge, of } from "rxjs";
import { map } from 'rxjs/Operators';
import { MatPaginator } from "@angular/material";

export class CommerceListDataSource extends DataSource<ICommerce> {

    commercesList: ICommerce[];
    renderedCommercesList: ICommerce[];

    constructor(private _paginator: MatPaginator, private _commercesList: ICommerce[]) {
        super();
        this.commercesList = [];
    }

    connect(): Observable<ICommerce[]> {
        const displayDataChanges = [
            of(this._commercesList),
            this._paginator.page
        ];

        return merge(...displayDataChanges).pipe(map(() => {
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.commercesList = this._commercesList;
            this.renderedCommercesList = this.commercesList.slice(startIndex, startIndex + this._paginator.pageSize);
            return this.renderedCommercesList;
        }));
    }

    disconnect(): void {
    }

}