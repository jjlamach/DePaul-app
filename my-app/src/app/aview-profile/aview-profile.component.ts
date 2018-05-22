import { Component, OnInit } from '@angular/core';
import * as type from "../globals";
import {DataService} from "../Data.service";

@Component({
  selector: 'app-aview-profile',
  templateUrl: './aview-profile.component.html',
  styleUrls: ['./aview-profile.component.css']
})
export class AviewProfileComponent implements OnInit {
  private studentuser: string;
  private studentaddress: string;
  private id: string;
  private degree: string;
  private email: string;
  private user: string;
  /**
   *
   * @param {DataService} service
   */
  constructor(private service: DataService) { }


  ngOnInit() {
    this.studentuser=type.firstName+" "+type.lastName;
    this.studentaddress=type.address+", "+type.city+", "+type.state+" "+type.zip;
    this.id=type.DepaulID;
    this.degree=type.degree;
    this.email=type.email;
    this.user=type.userName;
  }

}
