import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  depaulLogo: any;

  constructor() {
    this.depaulLogo = 'assets/images/depaul_logo.jpg';
  }

  ngOnInit() {

  }

  // show what the user typed as input
  showStuff(userID) {
    alert(userID.value);
  }



}
