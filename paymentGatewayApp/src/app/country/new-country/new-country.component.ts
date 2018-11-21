import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../core/service/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss']
})
export class NewCountryComponent implements OnInit {

  countryForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _countryService: CountryService,
    private _router: Router) {
    this.countryForm = this._formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  validateInput(field: string): boolean {
    return this.countryForm.controls[field].invalid;
  }

  validateForm(): boolean {
    return this.countryForm.valid;
  }

  addCountry(): void {
    this._countryService.addCountry(this.countryForm.getRawValue()).subscribe(
      () => {
        this._router.navigate(['/', 'country']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
