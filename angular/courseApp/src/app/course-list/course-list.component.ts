import { Component, OnInit } from '@angular/core';
import {Course} from '../Course';
import {DataServiceService} from '../data-service.service';
import {XCourse} from './xCourse';

@ Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // courseList: Course[] = [];  // save service's response here
  // public courseList: Course[] = [];

  public courseList: XCourse; // using xCourse interface

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCourses();
  }


  getCourses() {
    this.dataService.getCourses().subscribe(course => { // subscribe to the Observable
      this.courseList = course;
    });
  }

}
