import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '../users/User.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {

  users: User[];
  someUser: User;

  depaulID: number;
  firstName: string;
  lastName: string;
  password: number;
  userType: string;


  constructor(private service: DataServiceService) { }

  ngOnInit() {
  }

  addUser(event) {
    event.preventDefault(); // dont submit, just for testing.
    console.log('working!');

    const newUser = {
      depaulID: this.depaulID,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      userType: this.userType
    };
    this.service.addUser(newUser).subscribe(user => {
      this.users.push(user);
    });
  }

  getUser() {
    this.service.getUser().subscribe(user => {
      this.someUser = user;
    });
  }

}
