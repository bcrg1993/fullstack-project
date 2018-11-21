import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatDialog } from '@angular/material';
import { CountryListDataSource } from 'src/app/core/model/country/country-list-datasource';
import { ICountry } from 'src/app/core/model/country/icountry';
import { CountryRemoveDialogComponent } from '../country-remove-dialog/country-remove-dialog.component';
import { CountryService } from '../../core/service/country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  displayedColumns: string[] = ['index', 'name', 'actions'];
  dataSource: CountryListDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dialog: MatDialog,
    private _countryService: CountryService,
    private _router: Router) { }

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.dataSource = new CountryListDataSource(this._countryService);
    this.dataSource.loadCountries();
  }

  calculateRowIndex(index: number): number {
    return (this.paginator.pageIndex * this.paginator.pageSize) + index;
  }

  openCountryRemoveDialog(countryRow: ICountry): void {
    const dialogRef = this._dialog.open(CountryRemoveDialogComponent, {
      width: '30em',
      data: { country: countryRow }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.loadCountries();
    });
  }

  goToAddCountry(): void {
    this._router.navigate(['/country', 'create']);
  }

}
