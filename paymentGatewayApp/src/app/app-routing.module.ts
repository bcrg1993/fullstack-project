import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
    { path: '', loadChildren: './starter/starter.module#StarterModule' },
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'commerce', loadChildren: './commerce/commerce.module#CommerceModule' },
            { path: 'brand', loadChildren: './brand/brand.module#BrandModule' },
            { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionModule' }
        ]
    }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
