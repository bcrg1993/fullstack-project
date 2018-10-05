import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';

import { ListTransactionComponent } from './list-transaction/list-transaction.component';

@NgModule({
    imports: [
        CommonModule,
        TransactionRoutingModule
    ],
    declarations: [ListTransactionComponent]
})
export class TransactionModule { }
