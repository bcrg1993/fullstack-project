import { Component, OnInit } from '@angular/core';
import { ICommerce } from '../model/icommerce';
import { CommerceService } from '../service/commerce.service';

@Component({
    selector: 'app-list-commerce',
    templateUrl: './list-commerce.component.html',
    styleUrls: ['./list-commerce.component.css']
})
export class ListCommerceComponent implements OnInit {

    displayedColumns: string[] = ['rowNumber', 'name', 'address', 'phone', 'actions'];
    dataSource: Array<ICommerce>;

    constructor(private commerceService: CommerceService) { }

    ngOnInit() {
        this.getCommerces();
    }

    getCommerces(): void {
        this.commerceService.getCommerces().subscribe(
            (response: Array<ICommerce>) => {
                this.dataSource = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

}
