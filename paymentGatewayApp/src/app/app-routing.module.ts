import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './private/home/home.component';
import { ListCommerceComponent } from './private/commerce/list-commerce/list-commerce.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'commerces',
    loadChildren: './private/private.module.ts#CommerceModule'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
