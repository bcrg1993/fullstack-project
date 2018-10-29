import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICommerce } from '../../core/model/icommerce';
import { CommerceService } from 'src/app/core/service/commerce.service';
import { MatPaginator } from '@angular/material';
import { CommerceListDataSource } from 'src/app/core/model/commerce-list-datasource';

@Component({
    selector: 'app-list-commerce',
    templateUrl: './list-commerce.component.html',
    styleUrls: ['./list-commerce.component.scss']
})
export class ListCommerceComponent implements OnInit {

    displayedColumns: string[] = ['id', 'title', 'body', 'actions'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: CommerceListDataSource;

    constructor(private _router: Router,
        private _commerceService: CommerceService) {
    }

    ngOnInit() {
        this.getAllCommerces();
    }

    getAllCommerces(): void {
        this.dataSource = new CommerceListDataSource(this._commerceService, this.paginator);
    }

    goToAddCommerce(): void {
        this._router.navigate(['/commerce', 'create']);
    }

}
