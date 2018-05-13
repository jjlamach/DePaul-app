import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

import { User } from '../users/User'; // class User // to register a user!

@Component({
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








  /**
   *
   *
   * @memberof AddUserComponent
   * Gets all users at  http://localhost:3000/api/users
   */
  getUsers() {
    this.service.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }



  /**
   *
   *
   * @param {any} event
   * @memberof AddUserComponent
   * adds a new user at  http://localhost:3000/api/user
   */
  addUser(event) {
    event.preventDefault();
    const newUser = new User();
    this.service.addUser(newUser).subscribe(user => {
      this.users.push(newUser);
    });
  }

}
