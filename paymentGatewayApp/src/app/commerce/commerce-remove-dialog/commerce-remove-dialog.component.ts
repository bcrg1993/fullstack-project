import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CommerceService } from 'src/app/core/service/commerce.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-commerce-remove-dialog',
    templateUrl: './commerce-remove-dialog.component.html',
    styleUrls: ['./commerce-remove-dialog.component.scss']
})
export class CommerceRemoveDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) private _dataDialog: any,
        public _dialogRef: MatDialogRef<CommerceRemoveDialogComponent>,
        private _commerceService: CommerceService,
        private _router: Router) { }

    ngOnInit() {
    }

    removeCommerce(): void {
        this._commerceService.removeCommerce(this._dataDialog.commerce._id).subscribe(
            data => {
                this._dialogRef.close();
                this._router.navigate(['/commerce']);
            },
            err => {
                this._dialogRef.close();
                this._router.navigate(['/commerce']);
            }
        );
    }

}
