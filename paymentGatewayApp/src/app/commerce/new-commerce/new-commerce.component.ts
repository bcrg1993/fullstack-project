import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-new-commerce',
    templateUrl: './new-commerce.component.html',
    styleUrls: ['./new-commerce.component.scss']
})
export class NewCommerceComponent implements OnInit {

    commerceForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private router: Router) {
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
