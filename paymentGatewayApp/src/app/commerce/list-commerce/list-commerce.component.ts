import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatPaginator, MatDialog } from '@angular/material';
import { CommerceListDataSource } from '../../core/model/ecommerce/commerce-list-datasource';
import { ICommerce } from '../../core/model/ecommerce/icommerce';
import { CommerceRemoveDialogComponent } from '../commerce-remove-dialog/commerce-remove-dialog.component';

@Component({
    selector: 'app-list-commerce',
    templateUrl: './list-commerce.component.html',
    styleUrls: ['./list-commerce.component.scss']
})
export class ListCommerceComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'username', 'email', 'company', 'actions'];
    dataSource: CommerceListDataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private _router: Router,
        private _dialog: MatDialog,
        private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getAllCommerces();
    }

    getAllCommerces(): void {
        this.dataSource = new CommerceListDataSource(this.paginator, this._activatedRoute.snapshot.data['commercesList']);
    }

    goToUpdateCommerce(commerce: ICommerce): void {
        this._router.navigate(['/commerce', 'update', commerce.id]);
    }

    openCommerceRemoveDialog(commerceRow: ICommerce): void {
        const dialogRef = this._dialog.open(CommerceRemoveDialogComponent, {
            width: '30em',
            data: { commerce: commerceRow }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    goToAddCommerce(): void {
        this._router.navigate(['/commerce', 'create']);
    }

}
