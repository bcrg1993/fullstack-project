import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { ListCommerceResolver } from '../core/resolver/list-commerce-resolver';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';

const routes: Routes = [
    {
        path: '', component: ListCommerceComponent, resolve: { commerces: ListCommerceResolver }
    },
    {
        path: 'create', component: NewCommerceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommerceRoutingModule { }