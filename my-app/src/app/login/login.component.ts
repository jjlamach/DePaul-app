import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from '../Data.service';  // service
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public user: User;



  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userID: new FormControl(),
      password: new FormControl()
    });
  }
  /**
   * Logs in an existing user.
   * @param form
   */
  logIn(form) {
      if(form.valid) {
        this.user = this.loginForm.value;
        this.service.verifyUser(this.user).subscribe(user =>{
          console.log('User exists');
          console.log('User logged in');
          this.router.navigateByUrl('/home');
        });
      }
      else {
        return;
      }
    }
}
