import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CommerceModule } from '../commerce/commerce.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        CommerceModule,
        HttpClientModule
    ],
    declarations: [],
    exports: [
        CoreRoutingModule,
        CommerceModule,
        HttpClientModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CoreModule { }
