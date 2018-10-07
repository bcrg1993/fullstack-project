import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';

@NgModule({
    imports: [
        CommonModule,
        CommerceRoutingModule,
        MaterialModule
    ],
    declarations: [
        ListCommerceComponent,
        NewCommerceComponent
    ],
    exports: [
        MaterialModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CommerceModule { }
