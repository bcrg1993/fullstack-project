import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';

const routes: Routes = [
    {
        path: '', component: ListCommerceComponent
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