import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LoginModule { }
