import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICommerce } from 'src/app/core/model/ecommerce/icommerce';

@Component({
    selector: 'app-update-commerce',
    templateUrl: './update-commerce.component.html',
    styleUrls: ['./update-commerce.component.scss']
})
export class UpdateCommerceComponent implements OnInit {

    commerce: ICommerce;
    commerceForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute) {
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
        this.commerce = this._activatedRoute.snapshot.data['commerce'];
        console.log(JSON.stringify(this.commerce));
        this.commerceForm.setValue({
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

    validateForm(): boolean {
        return this.commerceForm.valid;
    }

}
