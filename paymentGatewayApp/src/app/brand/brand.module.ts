import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';

import { ListBrandComponent } from './list-brand/list-brand.component';

@NgModule({
    imports: [
        CommonModule,
        BrandRoutingModule
    ],
    declarations: [ListBrandComponent]
})
export class BrandModule { }
