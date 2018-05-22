import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from '../Data.service';  // service
import { User } from '../../models/User';
import * as type from "../globals";


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
      password: new FormControl(),
    });
  }


  /**
   * Logs in an existing user.
   * @param form
   */
  logIn(form) {
    if (form.valid) {
      this.user = this.loginForm.value;
      let otherUser = new User();
      this.service.verifyUser(this.user).subscribe(user => {
        console.log('User exists');
        console.log('User logged in');
        otherUser = user;
        type.setValue(otherUser.userType);
        type.setValue(otherUser.userID);
        console.log("type: " + type.userType)
        console.log(this.user);
        console.log(user);
        console.log(otherUser);
        if (type.userType == 'Student') {
          this.router.navigateByUrl('/home');
        }
        else if (type.userType == 'Admin') {
          this.router.navigateByUrl('/home3');
        }
        else if (type.userType == 'Faculty') {
          this.router.navigateByUrl('/home-faculty');
        }
      });
    }
    else {
      return;
    }
  }
}
