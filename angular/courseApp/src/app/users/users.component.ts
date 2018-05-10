import { Component, OnInit } from '@angular/core';

import {DataServiceService} from '../data-service.service';
import { User } from './User.model';

/* For Tables from Angular Material*/
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public users = [];

  constructor(private dataService: DataServiceService) { }



  ngOnInit() {
    this.getStudents();
  }

  // to receive data subscribe to the observable.
  getStudents() {
    this.dataService.getUsers().subscribe(data => this.users = data);
  }


}
