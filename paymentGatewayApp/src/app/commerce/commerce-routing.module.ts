import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';
import { CommercesListResolver } from '../core/resolver/commerces-list.resolver';
import { UpdateCommerceComponent } from './update-commerce/update-commerce.component';
import { CommerceDetailResolver } from '../core/resolver/commerce-detail.resolver';

const routes: Routes = [
    { path: '', component: ListCommerceComponent, resolve: { commercesList: CommercesListResolver } },
    { path: 'create', component: NewCommerceComponent },
    { path: 'update/:id', component: UpdateCommerceComponent, resolve: { commerce: CommerceDetailResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommerceRoutingModule { }