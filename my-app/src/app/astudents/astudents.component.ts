import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/Student";
import {DataService} from "../Data.service";

@Component({
  selector: 'app-astudents',
  templateUrl: './astudents.component.html',
  styleUrls: ['./astudents.component.css']
})
export class AstudentsComponent implements OnInit {
  students: Student[] = [];


  constructor(private service: DataService) { }

  ngOnInit() {
    this.getStudents();
  }


  /**
   * Get all the students.
   */
  getStudents() {
    this.service.getStudents().subscribe((stdnts: Student[]) => {
      this.students = stdnts;
      console.log(this.students);
      this.students.forEach((x) => console.log(x));
    });
  }
}

