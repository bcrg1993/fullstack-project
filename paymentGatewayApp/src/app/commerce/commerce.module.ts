import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { MaterialModule } from './../material/material.module';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';

@NgModule({
  imports: [
    CommonModule,
    CommerceRoutingModule,
    MaterialModule
  ],
  declarations: [ListCommerceComponent, NewCommerceComponent]
})
export class CommerceModule { }
