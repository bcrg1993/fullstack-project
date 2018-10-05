import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';
import { HomeComponent } from '../function/home/home.component';
import { LoginComponent } from '../function/login/login.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'commerce', loadChildren: './commerce/commerce.module#CommerceModule' },
            { path: 'brand', loadChildren: './brand/brand.module#BrandModule' },
            { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}
