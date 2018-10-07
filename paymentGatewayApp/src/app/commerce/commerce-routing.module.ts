import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCommerceComponent } from './list-commerce/list-commerce.component';

const routes: Routes = [
    {
        path: '', component: ListCommerceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommerceRoutingModule { }