import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  progressBarShow: boolean;

  constructor(private router: Router) {
    this.progressBarShow = false;
  }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.progressBarShow = true;
      }

      if (event instanceof NavigationEnd) {
        this.progressBarShow = false;
      }
    });
  }

  validateUserAccess(): boolean {
    const userData = localStorage.getItem('userData');
    return userData == null ? false : true;
  }

}
