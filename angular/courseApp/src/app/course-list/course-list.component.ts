import { Component, OnInit } from '@angular/core';
import {Course} from './Course';
import {DataServiceService} from '../data-service.service';

@ Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList: Course[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCourses();
  }


  // get courses
  getCourses() {
    this.dataService.getCourses().subscribe(course => {
      console.log(course);
      this.courseList = course;
    });
  }
}
