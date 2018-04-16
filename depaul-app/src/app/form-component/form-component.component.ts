import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})



export class FormComponentComponent implements OnInit {
  myForm: FormControl;

  constructor() {
    this.myForm = new FormControl(Validators.required);
  }

  ngOnInit() {

  }


  onLogIn(form: any): void {
    this.myForm = form;
  }

  checkFields(username, password) {
    if (username.length <= 0 && password.length <= 0) {
      console.log('Fields cannot be empty.');
    } else if (username.length <= 0) {
      console.log('Username field cannot be empty.');
    } else if (password.length <= 0) {
      console.log('Password field cannot be empty.');
    }
  }

}
