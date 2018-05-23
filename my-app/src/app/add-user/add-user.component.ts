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

   studentCollection: Student[];
   userCollection: User[];

   registration: FormGroup;
   user: User = new User();
   student: Student = new Student();
   wasSubmitted: boolean = false;
   studentExists: boolean = false;
   facultyExists: boolean = false;

  constructor(private service: DataService) {
  }

  /**
   * Gets all the students and users first to prevent adding existing users or students.
   */
  ngOnInit() {
    this.getStudents();
    this.getUsers();

    this.registration = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      depaulID: new FormControl('', Validators.pattern('^[1-9]\d{0,2}$')),
      degree: new FormControl('')
    });
  }

  /**
   *
   * @param {FormGroup} form
   */
  create(form: FormGroup) {
    if (form == null) return;
    if (form.get('userType').value === 'Student' && form.get('degree').value != null) {
      this.student = form.value;
      let randId = <HTMLInputElement> document.getElementById('IDgenerator');

      if (randId != null) {
        this.student.depaulID = Number(randId.value);
      }
      // search for the student
      for (let i = 0; i < this.studentCollection.length; i++) {
        if (this.studentCollection[i].firstName === this.student.firstName &&
          this.studentCollection[i].lastName === this.student.lastName &&
          this.studentCollection[i].address === this.student.address) {
          console.log('This student is already in the database.');
          this.studentExists = true;
          this.wasSubmitted = false;
          return;
        }
      }
      this.service.addStudent(this.student).subscribe((student: Student) => {
        console.log('Student was added.');
        this.wasSubmitted = true;
        return;
      });
      // else it must be faculty
    } else {
      this.user = form.value;
      let randId = <HTMLInputElement> document.getElementById('IDgenerator');
      if (randId != null) {
        this.user.depaulID = Number(randId.value);
      }
      // search for faculty
      for (let i = 0; i < this.userCollection.length; i++) {
        if (this.userCollection[i].firstName === this.user.firstName &&
          this.userCollection[i].lastName === this.user.lastName &&
          this.userCollection[i].address === this.user.address) {
          console.log('Faculty member is already in the database.');
          this.facultyExists = true;
          this.wasSubmitted = false;
          return;
        }
      }
      this.service.addUser(this.user).subscribe((user: User) => {
        console.log('Faculty member added.');
        this.wasSubmitted = true;
        return;
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
    location.reload();
    this.wasSubmitted = false;
    this.studentExists = false;
    this.facultyExists = false;
  }

  /**
   * Get all the students.
   */
  getStudents() {
    this.service.getStudents().subscribe(x => {
      this.studentCollection = x;
      console.log(this.studentCollection);
    });
  }

  /**
   * Get all the users.
   */
  getUsers() {
    this.service.getUsers().subscribe(x => {
      this.userCollection = x;
      console.log(this.userCollection);
    })
  }
}
