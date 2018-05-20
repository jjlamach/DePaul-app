import { Component, OnInit } from '@angular/core';
import {DataService} from "../Data.service";
import {xCourse} from "../../models/xCourse";

@Component({
  selector: 'app-acourses',
  templateUrl: './acourses.component.html',
  styleUrls: ['./acourses.component.css']
})
export class AcoursesComponent implements OnInit {
  private courses: xCourse[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAllCDMcourses();
  }

  /**
   * Get all the CDM courses available.
   */
  getAllCDMcourses() {
    this.service.getxCourses().subscribe((courses: xCourse[]) => {
      this.courses = courses;
      console.log(courses);
    });
  }
}
