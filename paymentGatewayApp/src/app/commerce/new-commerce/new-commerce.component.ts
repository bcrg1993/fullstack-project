import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommerceService } from '../../core/service/commerce.service';
import { ICommerce } from '../../core/model/ecommerce/icommerce';

@Component({
    selector: 'app-new-commerce',
    templateUrl: './new-commerce.component.html',
    styleUrls: ['./new-commerce.component.scss']
})
export class NewCommerceComponent implements OnInit {

    commerceForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private router: Router, private commerceService: CommerceService) {
        this.commerceForm = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    validateInput(field: string): boolean {
        console.log(this.commerceForm);
        return this.commerceForm.controls[field].invalid;
    }

    validateForm(): boolean {
        return this.commerceForm.valid;
    }

    addCommerce(): void {
    }

    cancel(): void {
        this.router.navigate(['/', 'commerce']);
    }

}
