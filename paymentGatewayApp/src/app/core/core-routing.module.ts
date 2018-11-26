import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';
import { AuthenticationGuard } from './resolve/authentication.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: '../login/login.module#LoginModule' },
    {
        path: '', component: AdminLayoutComponent, canActivate: [AuthenticationGuard], children: [
            { path: 'home', loadChildren: '../home/home.module#HomeModule' },
            { path: 'commerce', loadChildren: '../commerce/commerce.module#CommerceModule' },
            { path: 'country', loadChildren: '../country/country.module#CountryModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}
