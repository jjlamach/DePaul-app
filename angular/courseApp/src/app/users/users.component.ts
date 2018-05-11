import { Component, OnInit } from '@angular/core';

import {DataServiceService} from '../data-service.service';
import { User } from '../users/User';

/* For Tables from Angular Material*/
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public users: User[];

  constructor(private dataService: DataServiceService) { }



  ngOnInit() {
    this.getStudents();
  }


  getStudents() {
    this.dataService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }
}
