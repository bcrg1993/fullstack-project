import { ICommerce } from "./icommerce";
import { DataSource } from '@angular/cdk/collections';
import { Observable, merge } from "rxjs";
import { map } from 'rxjs/Operators';
import { MatPaginator } from "@angular/material";
import { CommerceService } from "../service/commerce.service";

export class CommerceListDataSource extends DataSource<ICommerce> {

    renderedData: ICommerce[];
    totalRecords: number;

    constructor(private _commerceService: CommerceService,
        public _paginator: MatPaginator) {
        super();
        this.renderedData = [];
        this._paginator.pageIndex = 0;
        this.totalRecords = 0;
    }

    connect(): Observable<ICommerce[]> {
        const displayDataChanges = [
            this._commerceService.dataChange,
            this._paginator.page
        ];

        this._commerceService.getAllCommerces();
        this._commerceService.dataChange.subscribe(data => {
            this.totalRecords = data.length;
        });

        return merge(...displayDataChanges).pipe(map(() => {
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.renderedData = this._commerceService.data.splice(startIndex, this._paginator.pageSize);
            return this.renderedData;
        }));
    }

    disconnect(): void {

    }

}