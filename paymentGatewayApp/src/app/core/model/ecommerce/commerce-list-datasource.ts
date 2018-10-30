import { ICommerce } from "./icommerce";
import { DataSource } from '@angular/cdk/collections';
import { Observable, merge, of, BehaviorSubject } from "rxjs";
import { map } from 'rxjs/Operators';
import { MatPaginator } from "@angular/material";
import { CommerceService } from "../../service/commerce.service";

export class CommerceListDataSource extends DataSource<ICommerce> {

    commercesList: ICommerce[];
    renderedCommercesList: ICommerce[];

    constructor(private _paginator: MatPaginator, private _commerceService: CommerceService) {
        super();
        this._paginator.pageIndex = 0;
        this.commercesList = [];
        this.renderedCommercesList = [];
    }

    connect(): Observable<ICommerce[]> {
        const displayDataChanges = [
            this._commerceService.commercesList$,
            this._paginator.page
        ];

        this._commerceService.getAllCommerces();

        return merge(...displayDataChanges).pipe(map(() => {
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.commercesList = this._commerceService.commercesList;
            this.renderedCommercesList = this.commercesList.slice(startIndex, startIndex + this._paginator.pageSize);
            return this.renderedCommercesList;
        }));
    }

    disconnect(): void {
    }

}