import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommerceRoutingModule } from './commerce-routing.module';
import { MaterialModule } from '../material/material.module';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';
import { CommerceRemoveDialogComponent } from './commerce-remove-dialog/commerce-remove-dialog.component';
import { UpdateCommerceComponent } from './update-commerce/update-commerce.component';

@NgModule({
    imports: [
        CommonModule,
        CommerceRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ListCommerceComponent,
        NewCommerceComponent,
        CommerceRemoveDialogComponent,
        UpdateCommerceComponent
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
