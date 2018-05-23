import { Component, OnInit } from '@angular/core';
import {DataService} from "../Data.service";
import {xCourse} from "../../models/xCourse";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   courses: xCourse[] = [];

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

