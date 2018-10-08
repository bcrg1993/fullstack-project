import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: '../login/login.module#LoginModule' },
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'commerce', loadChildren: '../commerce/commerce.module#CommerceModule' },
            { path: 'home', loadChildren: '../home/home.module#HomeModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}
