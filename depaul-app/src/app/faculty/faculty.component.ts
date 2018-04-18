import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  buttonWasCliked = false;
  viewProfileWasClicked = false;

  constructor() {

  }

  ngOnInit() {
  }


  editProfile(clicked: boolean) {
    if (clicked) {
      this.buttonWasCliked = clicked;
      return;
    }
  }

  viewProfile(clicked: boolean) {

  }



}
