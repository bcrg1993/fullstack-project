import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [
        AdminLayoutComponent,
        ToolboxComponent
    ],
    exports: [
        MaterialModule,
        AdminLayoutComponent,
        ToolboxComponent,
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
