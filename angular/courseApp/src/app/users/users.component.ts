import { Component, OnInit } from '@angular/core';


import {DataServiceService} from '../data-service.service';
import { User } from './User';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public users: User[] = [];

  constructor(private dataService: DataServiceService) { }



  ngOnInit() {
    this.getStudents();
  }


  getStudents() {
    this.dataService.getUsers().subscribe((user:User[]) => {
      this.users = user;
      console.log(user);
    })
  }
}
