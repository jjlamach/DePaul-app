import { Component, OnInit } from '@angular/core';
import * as type from "../globals";
import {User} from "../../models/User";
import {DataService} from "../Data.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private duMembers: User[] = [];
  private studentForm: string;
  private studentForms: string;
  private studentuser: string=type.userName;

  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }


  ngOnInit() {
    this.getUsers();
  }

  /**
   * Get all the users from the database.
   * @returns {Subscription}
   */
  getUsers() {
    return this.service.getUsers().subscribe((user: User[]) => {
      this.duMembers = user;
      console.log(this.duMembers);
    });
  }

  search() {
    this.studentForms="Us";
    for (let i = 0; i < this.duMembers.length; i++) {
      if (this.duMembers[i].userID == this.studentuser) {
        return this.studentForm = this.duMembers[i].firstName + " "+this.duMembers[i].lastName;
      }
    }
    return "User";
  }
}
