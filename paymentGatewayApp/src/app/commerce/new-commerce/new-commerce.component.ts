import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ICountry } from 'src/app/core/model/country/icountry';
import { CommerceService } from 'src/app/core/service/commerce.service';

@Component({
    selector: 'app-new-commerce',
    templateUrl: './new-commerce.component.html',
    styleUrls: ['./new-commerce.component.scss']
})
export class NewCommerceComponent implements OnInit {

    commerceForm: FormGroup;
    countriesList: ICountry[];

    constructor(private _formBuilder: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
        private _commerceService: CommerceService) {
        this.commerceForm = this._formBuilder.group({
            name: ['', Validators.required],
            businessName: ['', Validators.required],
            phone: ['', Validators.required],
            country: ['', Validators.required],
            address: ['', Validators.required],
            representative: this._formBuilder.group({
                name: ['', Validators.required],
                phone: ['', Validators.required]
            })
        });
    }

    ngOnInit() {
        this.countriesList = this._activatedRoute.snapshot.data['countriesList'];
    }

    validateInput(field: string): boolean {
        return this.commerceForm.controls[field].invalid;
    }

    validateRepresentativeInput(field: string) {
        this.commerceForm.controls.representative['controls'][field].invalid;
    }

    validateForm(): boolean {
        return this.commerceForm.valid;
    }

    addCommerce(): void {
        this._commerceService.addCommerce(this.commerceForm.getRawValue())
            .subscribe(
                data => this._router.navigate(['commerce']),
                error => console.log(error)
            );
    }

    cancel(): void {
        this._router.navigate(['commerce']);
    }

}
