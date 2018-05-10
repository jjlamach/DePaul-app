import { Component, OnInit } from '@angular/core';

import {DataServiceService} from '../data-service.service';
import {User} from '../users/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User;

  constructor(private dataService: DataServiceService) { }



  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.dataService.getUsers().subscribe(user => {
      this.users = user;
    });
  }

}
