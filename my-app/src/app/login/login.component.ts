import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  depaulForm: FormGroup;



  /**
   Individually access so that it can be seen anywhere in the View.
   */
  username: AbstractControl;
  password: AbstractControl;


  constructor(private fb: FormBuilder, private router: Router) {

    this.depaulForm = fb.group( {
      // same as username: new FormControl('', Validators.required)
      username: [null, Validators.required],
      password: [null, Validators.required]
    });

    /* Setting the values of the username and password to the instance variables. */
    this.username = this.depaulForm.controls['username'];
    this.password = this.depaulForm.controls['password'];
  }



  // to see if it is valid and send to student page
  checkForm(form: FormGroup) {
    if (form.valid ) {
      this.router.navigateByUrl('/home');
      this.seeValues(form);
    }
  }

  // to see what username and password the form got
  seeValues(form: FormGroup) {
    console.log(form.value);
  }


  ngOnInit() {

  }

}
