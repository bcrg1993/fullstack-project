import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatPaginator, MatDialog } from '@angular/material';
import { CommerceListDataSource } from '../../core/model/ecommerce/commerce-list-datasource';
import { CommerceDetailDialogComponent } from '../commerce-detail-dialog/commerce-detail-dialog.component';
import { ICommerce } from '../../core/model/ecommerce/icommerce';
import { CommerceRemoveDialogComponent } from '../commerce-remove-dialog/commerce-remove-dialog.component';

@Component({
    selector: 'app-list-commerce',
    templateUrl: './list-commerce.component.html',
    styleUrls: ['./list-commerce.component.scss']
})
export class ListCommerceComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'username', 'email', 'company', 'actions'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: CommerceListDataSource;

    constructor(private _router: Router,
        private dialog: MatDialog,
        private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getAllCommerces();
    }

    getAllCommerces(): void {
        this.dataSource = new CommerceListDataSource(this.paginator, this._activatedRoute.snapshot.data['commercesList']);
    }

    openCommerceDetailDialog(): void {
        const dialogRef = this.dialog.open(CommerceDetailDialogComponent, {
            width: '80em'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openCommerceRemoveDialog(commerceRow: ICommerce): void {
        const dialogRef = this.dialog.open(CommerceRemoveDialogComponent, {
            width: '30em',
            data: { commerce: commerceRow }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    goToAddCommerce(): void {
        this._router.navigate(['/commerce', 'create']);
    }

}
