import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommerceComponent } from './list-commerce/list-commerce.component';
import { NewCommerceComponent } from './new-commerce/new-commerce.component';
import { CommercesListResolve } from '../core/resolve/commerces-list.resolve';
import { UpdateCommerceComponent } from './update-commerce/update-commerce.component';
import { CommerceDetailResolve } from '../core/resolve/commerce-detail.resolve';
import { CountriesListResolve } from '../core/resolve/countries-list.resolve';

const routes: Routes = [
    {
        path: '',
        component: ListCommerceComponent,
        resolve: {
            commercesList: CommercesListResolve
        }
    },
    {
        path: 'create',
        component: NewCommerceComponent,
        resolve: {
            countriesList: CountriesListResolve
        }
    },
    {
        path: 'update/:id',
        component: UpdateCommerceComponent,
        resolve: {
            commerce: CommerceDetailResolve,
            countriesList: CountriesListResolve
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommerceRoutingModule { }