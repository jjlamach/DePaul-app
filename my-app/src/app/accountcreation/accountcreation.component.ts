import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
  depaulForm2: FormGroup;

  username: AbstractControl;
  password: AbstractControl;
  firstname: AbstractControl;
  lastname: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zipcode: AbstractControl;
  depaulID: AbstractControl;
  degree: AbstractControl;
  email: AbstractControl;
  confirmpassword: AbstractControl;

  constructor(private fb: FormBuilder, private router: Router) {
    this.depaulForm2 = fb.group( {
      // same as username: new FormControl('', Validators.required)
      username: [null, Validators.required],
      password: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, Validators.required],
      depaulID: [null, Validators.required],
      degree: [null, Validators.required],
      email: [null, Validators.required],
      confirmpassword: [null, Validators.required],
    }, {validator: this.matchingPasswords('password', 'confirmpassword')}
    );
    this.username = this.depaulForm2.controls['username'];
    this.password = this.depaulForm2.controls['password'];
    this.firstname = this.depaulForm2.controls['firstname'];
    this.lastname = this.depaulForm2.controls['lastname'];
    this.address = this.depaulForm2.controls['address'];
    this.city = this.depaulForm2.controls['city'];
    this.state = this.depaulForm2.controls['state'];
    this.zipcode = this.depaulForm2.controls['zipcode'];
    this.depaulID = this.depaulForm2.controls['depaulID'];
    this.degree = this.depaulForm2.controls['degree'];
    this.email = this.depaulForm2.controls['email'];
    this.confirmpassword = this.depaulForm2.controls['confirmpassword'];
  }
  checkForm(form: FormGroup) {
    if (form.valid ) {
      this.router.navigateByUrl('/optin');
      this.seeValues(form);
    }
  }
  seeValues(form: FormGroup) {
    console.log(form.value);
  }
  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      }
    };
  }

  ngOnInit() {
  }

}
