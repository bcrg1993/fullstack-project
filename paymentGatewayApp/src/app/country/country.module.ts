import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListCountryComponent } from './list-country/list-country.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],

  declarations: [
    ListCountryComponent,
    NewCountryComponent,
    UpdateCountryComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CountryModule { }
