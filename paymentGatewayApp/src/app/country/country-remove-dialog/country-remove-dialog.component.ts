import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CountryService } from 'src/app/core/service/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-remove-dialog',
  templateUrl: './country-remove-dialog.component.html',
  styleUrls: ['./country-remove-dialog.component.scss']
})
export class CountryRemoveDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private _dataDialog: any,
    public _dialogRef: MatDialogRef<CountryRemoveDialogComponent>,
    private _countryService: CountryService,
    private _router: Router) {
  }

  ngOnInit() {
  }

  removeCountry(): void {
    this._countryService.removeCountry(this._dataDialog.country._id).subscribe(
      data => {
        this._dialogRef.close();
        this._router.navigate(['/country']);
      },
      err => {
        this._dialogRef.close();
        this._router.navigate(['/country']);
      }
    );
  }

}
