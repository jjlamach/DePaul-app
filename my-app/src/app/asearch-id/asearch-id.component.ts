import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { User } from '../add-user/User';

@Component({
  selector: 'app-asearch-id',
  templateUrl: './asearch-id.component.html',
  styleUrls: ['./asearch-id.component.css']
})
export class AsearchIdComponent implements OnInit {

  private userList: User[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getUsers();
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

}
