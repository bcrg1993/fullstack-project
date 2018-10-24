import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICommerce } from '../../core/model/icommerce';

@Component({
    selector: 'app-list-commerce',
    templateUrl: './list-commerce.component.html',
    styleUrls: ['./list-commerce.component.scss']
})
export class ListCommerceComponent implements OnInit {

    displayedColumns: string[] = ['index', 'name', 'address', 'phone', 'actions'];
    dataSource: Array<ICommerce>;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.getCommerces();
    }

    getCommerces(): void {
        this.dataSource = this.activatedRoute.snapshot.data['commerces'];
    }

    goToAddCommerce(): void {
        this.router.navigate(['/commerce', 'create']);
    }

}
