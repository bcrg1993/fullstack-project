import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-commerce-remove-dialog',
  templateUrl: './commerce-remove-dialog.component.html',
  styleUrls: ['./commerce-remove-dialog.component.scss']
})
export class CommerceRemoveDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private dataDialog: any) { }

  ngOnInit() {
  }

}
