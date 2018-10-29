import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommerceRoutingModule } from './commerce-routing.module';
import { MaterialModule } from '../material/material.module';

import {
    MatPaginatorModule
} from '@angular/material';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';

@NgModule({
    imports: [
        CommonModule,
        CommerceRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule
    ],
    declarations: [
        ListCommerceComponent,
        NewCommerceComponent
    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CommerceModule { }
