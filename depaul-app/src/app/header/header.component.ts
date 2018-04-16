import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/* This is just the title of the form */
export class HeaderComponent implements OnInit {
  depaulLogo: any;

  constructor() {
    this.depaulLogo = './assets/images/depaul_logo.jpg';
  }

  ngOnInit() {
  }

}
