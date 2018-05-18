import { Component, OnInit } from '@angular/core';
import {DataService} from "../Data.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

}
