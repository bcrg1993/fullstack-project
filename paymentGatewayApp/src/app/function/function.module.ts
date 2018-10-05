import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandModule } from './brand/brand.module';
import { CommerceModule } from './commerce/commerce.module';
import { TransactionModule } from './transaction/transaction.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 

@NgModule({
  imports: [
    CommonModule,
    BrandModule,
    CommerceModule,
    TransactionModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  exports: [
    BrandModule,
    CommerceModule,
    TransactionModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FunctionModule { }
