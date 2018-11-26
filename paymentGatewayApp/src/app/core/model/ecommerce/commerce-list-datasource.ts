import { ICommerce } from "./icommerce";
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from "rxjs";
import { CommerceService } from "../../service/commerce.service";
import { catchError } from "rxjs/Operators";

export class CommerceListDataSource implements DataSource<ICommerce> {

    private commercesSubject: BehaviorSubject<ICommerce[]>;

    constructor(private _commerceService: CommerceService) {
        this.commercesSubject = new BehaviorSubject<ICommerce[]>([]);
    }

    connect(): Observable<ICommerce[]> {
        return this.commercesSubject.asObservable();
    }

    disconnect(): void {
        this.commercesSubject.complete();
    }

    loadCommerces(): void {
        this._commerceService.getAllCommerces()
            .pipe(
                catchError(() => of([]))
            ).subscribe(commerces => {
                this.commercesSubject.next(commerces);
            });
    }

    loadCommercesFromResolve(commercesList: ICommerce[]): void {
        this.commercesSubject.next(commercesList);
    }

}