import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountryComponent } from './list-country/list-country.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { CountriesListResolve } from '../core/resolve/countries-list.resolve';

const routes: Routes = [
    { path: '', component: ListCountryComponent, resolve: { countriesList: CountriesListResolve } },
    { path: 'create', component: NewCountryComponent },
    { path: 'update/:id', component: UpdateCountryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule { }