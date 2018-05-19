import {Component, OnInit} from '@angular/core';
import {DataService} from "../Data.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {Student} from "../../models/Student";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  private registration: FormGroup;
  private user: User = new User();
  private student: Student = new Student();
  private isStudent: boolean;
  private wasSubmitted: boolean;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.registration = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      degree: new FormControl()
    });
  }

  /**
   *
   * @param {FormGroup} form
   */
  create(form: FormGroup) {
    if (form.invalid) {
      this.resetForm();
    }
    this.wasSubmitted = true;
    if (form.get('userType').value === 'Student') {
      this.student = form.value;
      let stuID = <HTMLInputElement> document.getElementById('IDgenerator');
      if (stuID !== null) {
        this.student.depaulID = Number(stuID.value);
      }
      // console.log(this.student);
      this.service.addStudent(this.student).subscribe((stu => {
        console.log('Student added to Student table');
      }));
    } else {
      this.user = form.value;
      let facID = <HTMLInputElement> document.getElementById('IDgenerator');
      if (facID != null) {
        this.user.depaulID = Number(facID.value);
      }
      // console.log(this.user);
      this.service.addUser(this.user).subscribe((user) => {
        console.log('Faculty or Admin added to User table.');
      });
    }
  }

  /**
   * Generates a random ID.
   */
  generateID() {
    let digits = Math.floor(Math.random() * 90000) + 1000000;
    let result = <HTMLInputElement> document.getElementById('IDgenerator');
    result.value = String(digits);
  }

  /**
   * Reset the form.
   */
  resetForm() {
    this.registration.reset();
    this.isStudent = false;
    this.wasSubmitted = false;
  }
}
