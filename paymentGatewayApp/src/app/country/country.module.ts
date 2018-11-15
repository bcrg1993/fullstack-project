import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { MaterialModule } from '../material/material.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ListCountryComponent } from './list-country/list-country.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { CountryRemoveDialogComponent } from './country-remove-dialog/country-remove-dialog.component';

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
    UpdateCountryComponent,
    CountryRemoveDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    CountryRemoveDialogComponent
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true }
    }
  ]
})
export class CountryModule { }
