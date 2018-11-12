import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: '../login/login.module#LoginModule' },
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'home', loadChildren: '../home/home.module#HomeModule' },
            { path: 'commerce', loadChildren: '../commerce/commerce.module#CommerceModule' },
            { path: 'country', loadChildren: '../country/country.module#CountryModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}
