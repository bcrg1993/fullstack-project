import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatPaginator, MatDialog } from '@angular/material';
import { CommerceListDataSource } from '../../core/model/ecommerce/commerce-list-datasource';
import { ICommerce } from '../../core/model/ecommerce/icommerce';
import { CommerceRemoveDialogComponent } from '../commerce-remove-dialog/commerce-remove-dialog.component';
import { CommerceService } from 'src/app/core/service/commerce.service';

@Component({
    selector: 'app-list-commerce',
    templateUrl: './list-commerce.component.html',
    styleUrls: ['./list-commerce.component.scss']
})
export class ListCommerceComponent implements OnInit {

    displayedColumns: string[] = ['index', 'name', 'businessName', 'phone', 'address', 'actions'];
    dataSource: CommerceListDataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _dialog: MatDialog,
        private _commerceService: CommerceService) {
    }

    ngOnInit() {
        this.getAllCommerces();
    }

    getAllCommerces(): void {
        this.dataSource = new CommerceListDataSource(this._commerceService);
        this.dataSource.loadCommercesFromResolve(this._activatedRoute.snapshot.data['commercesList']);
    }

    addCommerce(): void {
        this._router.navigate(['/commerce', 'create']);
    }

    updateCommerce(commerce: ICommerce): void {
        this._router.navigate(['/commerce', 'update', commerce._id]);
    }

    removeCommerce(commerceRow: ICommerce): void {
        const dialogRef = this._dialog.open(CommerceRemoveDialogComponent, {
            width: '30em',
            data: { commerce: commerceRow }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.dataSource.loadCommerces();
        });
    }

}
