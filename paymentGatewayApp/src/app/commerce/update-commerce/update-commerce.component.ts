import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommerce } from 'src/app/core/model/ecommerce/icommerce';
import { ICountry } from 'src/app/core/model/country/icountry';
import { CommerceService } from 'src/app/core/service/commerce.service';

@Component({
    selector: 'app-update-commerce',
    templateUrl: './update-commerce.component.html',
    styleUrls: ['./update-commerce.component.scss']
})
export class UpdateCommerceComponent implements OnInit {

    commerce: ICommerce;
    commerceForm: FormGroup;
    countriesList: ICountry[];

    constructor(private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _commerceService: CommerceService,
        private _router: Router) {
        this.commerceForm = this._formBuilder.group({
            _id: ['', Validators.required],
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
        this.commerce = this._activatedRoute.snapshot.data['commerce'];
        this.countriesList = this._activatedRoute.snapshot.data['countriesList'];
        this.commerceForm.setValue({
            _id: this.commerce._id,
            name: this.commerce.name,
            businessName: this.commerce.businessName,
            address: this.commerce.address,
            phone: this.commerce.phone,
            country: this.commerce.country._id,
            representative: {
                name: this.commerce.representative.name,
                phone: this.commerce.representative.phone
            }
        });
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

    updateCommerce(): void {
        this.commerce = this.commerceForm.getRawValue();
        this._commerceService.updateCommerce(this.commerce)
            .subscribe(
                data => {
                    this._router.navigate(['commerce']);
                },
                error => {
                    console.log(error);
                }
            );
    }

    cancel(): void {
        this._router.navigate(['commerce']);
    }

}
