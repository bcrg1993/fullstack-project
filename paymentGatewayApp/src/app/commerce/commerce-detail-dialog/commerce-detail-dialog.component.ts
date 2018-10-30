import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ICommerce } from '../../core/model/ecommerce/icommerce';

@Component({
  selector: 'app-commerce-detail-dialog',
  templateUrl: './commerce-detail-dialog.component.html',
  styleUrls: ['./commerce-detail-dialog.component.scss']
})
export class CommerceDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public commerce: ICommerce) { }

  ngOnInit() {
    console.log(JSON.stringify(this.commerce));
  }

}
