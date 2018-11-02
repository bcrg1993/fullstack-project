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

  constructor(private formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute) {
    this.commerceForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.commerce = this._activatedRoute.snapshot.data['commerce'];
    this.commerceForm.setValue({
      name: this.commerce.name,
      address: this.commerce.address.street,
      phone: this.commerce.phone
    });
  }

  validateInput(field: string): boolean {
    return this.commerceForm.controls[field].invalid;
  }

  validateForm(): boolean {
    return this.commerceForm.valid;
  }

}
