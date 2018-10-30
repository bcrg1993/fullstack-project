import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommerceRoutingModule } from './commerce-routing.module';
import { MaterialModule } from '../material/material.module';

import {
    MatPaginatorModule, MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';
import { CommerceDetailDialogComponent } from './commerce-detail-dialog/commerce-detail-dialog.component';
import { CommerceRemoveDialogComponent } from './commerce-remove-dialog/commerce-remove-dialog.component';

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
        NewCommerceComponent,
        CommerceDetailDialogComponent,
        CommerceRemoveDialogComponent
    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    entryComponents: [
        CommerceDetailDialogComponent,
        CommerceRemoveDialogComponent
    ],
    providers: [
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: { hasBackdrop: true }
        }
    ]
})
export class CommerceModule { }
