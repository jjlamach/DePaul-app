import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})





export class FormComponentComponent implements OnInit {
  theForm: FormControl;


  /* Inject dependency of Router to this component.*/
  constructor(private router: Router) {
    this.theForm = new FormControl(Validators.required);
  }



  ngOnInit() {

  }

  goToFaculty() {
    this.router.navigateByUrl('/faculty');
  }


  onLogIn(form: any): void {
    this.theForm = form;
  }

  checkFields(username, password) {
    if (username.length <= 0 && password.length <= 0) {
      alert('Fields cannot be empty.');
    } else if (username.length <= 0) {
      alert('Username field cannot be empty.');
    } else if (password.length <= 0) {
      alert('Password field cannot be empty.');
    } else {
      this.goToFaculty();
    }
  }



}
