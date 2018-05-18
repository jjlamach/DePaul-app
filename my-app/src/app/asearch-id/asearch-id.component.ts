import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { User } from '../../models/User';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-asearch-id',
  templateUrl: './asearch-id.component.html',
  styleUrls: ['./asearch-id.component.css']
})
export class AsearchIdComponent implements OnInit {

  private  userList: User[] = [];

  private student: User = new User();
  private isFound: boolean;
  private studentInfo: FormGroup;

  constructor(private service: DataService) { }


  ngOnInit() {
    this.getUsers();
    this.studentInfo = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      depaulID: new FormControl(null)
    });
  }


  /*
  Get all users.
  */
  getUsers() {
    return this.service.getUsers().subscribe((user: User[]) => {
      this.userList = user;
      console.log(this.userList);
    });
  }


  /*
   * If the form is valid it searches for the student name and ID.
   * @param {FormGroup} form
   */
  verify(form: FormGroup) {
    if (!form) {
      form.reset();
    }
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].firstName == form.get('firstName').value && this.userList[i].depaulID == form.get('depaulID').value) {
        this.student = form.value;
        this.isFound = true;
      }
    }
  }

  /*
   * Reset the form.
   */
  reset() {
    this.studentInfo.reset();
    this.isFound = false;
  }
}









