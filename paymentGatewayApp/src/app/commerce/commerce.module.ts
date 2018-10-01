import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { MaterialModule } from './../material/material.module';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';

@NgModule({
  imports: [
    CommonModule,
    CommerceRoutingModule,
    MaterialModule
  ],
  declarations: [ListCommerceComponent]
})
export class CommerceModule { }
