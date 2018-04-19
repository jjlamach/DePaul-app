import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  buttonWasCliked = false;
  myRouter: Router;

  constructor(router: Router) {
    this.myRouter = router;
  }

  ngOnInit() {

  }


  /* Takes you to edit profile component.*/
  editProfile(clicked: boolean) {
    if (clicked) {
      this.buttonWasCliked = clicked;
      return;
    }
  }

  /* Shows the Profile component. */
  viewProfile(clicked: boolean) {

  }



}
