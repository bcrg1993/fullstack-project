import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CommerceModule } from '../commerce/commerce.module';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        CommerceModule
    ],
    declarations: [],
    exports: [
        CoreRoutingModule,
        CommerceModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CoreModule { }
