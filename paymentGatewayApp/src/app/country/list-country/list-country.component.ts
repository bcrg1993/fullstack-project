import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material';
import { CountryListDataSource } from 'src/app/core/model/country/country-list-datasource';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'name', 'actions'];
  dataSource: CountryListDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.dataSource = new CountryListDataSource(this.paginator, this._activatedRoute.snapshot.data['countriesList']);
  }

}
