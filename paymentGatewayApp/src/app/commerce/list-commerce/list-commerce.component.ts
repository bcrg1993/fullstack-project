import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator, MatDialog } from '@angular/material';
import { CommerceService } from '../../core/service/commerce.service';
import { CommerceListDataSource } from '../../core/model/ecommerce/commerce-list-datasource';
import { CommerceDetailDialogComponent } from '../commerce-detail-dialog/commerce-detail-dialog.component';

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
        private _commerceService: CommerceService) {
    }

    ngOnInit() {
        this.getAllCommerces();
    }

    getAllCommerces(): void {
        this.dataSource = new CommerceListDataSource(this.paginator, this._commerceService);
    }

    openCommerceDetailDialog(): void {
        const dialogRef = this.dialog.open(CommerceDetailDialogComponent, {
            width: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openCommerceRemoveDialog(): void {
        const dialogRef = this.dialog.open(CommerceDetailDialogComponent, {
            width: '250px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    goToAddCommerce(): void {
        this._router.navigate(['/commerce', 'create']);
    }

}
