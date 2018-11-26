import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICountry } from 'src/app/core/model/country/icountry';
import { CountryService } from 'src/app/core/service/country.service';

@Component({
    selector: 'app-update-country',
    templateUrl: './update-country.component.html',
    styleUrls: ['./update-country.component.scss']
})
export class UpdateCountryComponent implements OnInit {

    countryForm: FormGroup;
    country: ICountry;

    constructor(private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _countryService: CountryService) {
        this.countryForm = this._formBuilder.group({
            _id: ['', Validators.required],
            name: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.country = this._activatedRoute.snapshot.data['country'];
        this.countryForm.setValue({
            _id: this.country._id,
            name: this.country.name
        });
    }

    validateInput(field: string): boolean {
        return this.countryForm.controls[field].invalid;
    }

    validateForm(): boolean {
        return this.countryForm.valid;
    }

    updateCountry(): void {
        this.country = this.countryForm.getRawValue();
        console.log(JSON.stringify(this.country));
        this._countryService.updateCountry(this.country).subscribe(
            data => this._router.navigate(['country']),
            error => console.log(error)
        );
    }

    cancel(): void {
        this._router.navigate(['country']);
    }

}
