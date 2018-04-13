import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'DePaul University';
  }

  ngOnInit() {
  }


}
