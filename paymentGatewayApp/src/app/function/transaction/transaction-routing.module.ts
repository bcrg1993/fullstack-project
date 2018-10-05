import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';

const routes: Routes = [
    {
        path: '',
        component: ListTransactionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransactionRoutingModule { }