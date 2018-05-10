import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../users/User'; // class User

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {

  public users: User[];



  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }

}
