import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { CommerceModule } from './commerce/commerce.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CommerceModule
  ],
  declarations: [HomeComponent],
  exports: [
    MaterialModule,
    CommerceModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrivateModule { }
