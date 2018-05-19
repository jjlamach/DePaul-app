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

  private studentCollection: Student[];
  private userCollection: User[];

  private registration: FormGroup;
  private user: User = new User();
  private student: Student = new Student();
  private wasSubmitted: boolean;
  private studentExists: boolean = false;
  private facultyExists: boolean = false;

  constructor(private service: DataService) { }

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
      for(let i = 0; i < this.studentCollection.length; i++) {
        if(this.studentCollection[i].firstName === this.student.firstName
        && this.studentCollection[i].lastName === this.student.lastName) {
          console.log('Could not add existing student.');
          this.studentExists = true;
          this.wasSubmitted = false;
          return;
        }
      }
      /* If the student does not exist then we register him.*/
      this.service.addStudent(this.student).subscribe((stu => {
        console.log('Student added to Student table');
      }));
    } else {
      this.user = form.value;
      let facID = <HTMLInputElement> document.getElementById('IDgenerator');
      if (facID != null) {
        this.user.depaulID = Number(facID.value);
      }

      for(let i = 0; i < this.userCollection.length; i++) {
        if(this.userCollection[i].firstName === this.user.firstName
        && this.userCollection[i].lastName === this.user.lastName) {
          console.log('Could not add existing faculty.');
          this.facultyExists = true;
          this.wasSubmitted = false;
          return;
        }
      }
      /* If faculty does not exist then we register him.*/
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
    this.wasSubmitted = false;
    this.studentExists = false;
    this.facultyExists = false;
  }

  /**
   * Get all the students.
   */
  getStudents() {
    this.service.getStudents().subscribe(x =>{
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
