import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { MaterialModule } from './../material/material.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StarterRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class StarterModule { }
