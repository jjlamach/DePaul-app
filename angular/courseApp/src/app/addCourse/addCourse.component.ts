import { Component, OnInit } from '@angular/core';
import {Course} from '../course-list/Course';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-addCourse',
  templateUrl: './addCourse.component.html',
  styleUrls: ['./addCourse.component.css']
})
export class AddCourseComponent implements OnInit {

  public courses: Course[];

  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.getCourses();
  }



  getCourses() {
    this.service.getCourses().subscribe((course: Course[]) => {
      console.log(course);
      this.courses = course;
    });
  }

  addCourse(event) {
    event.preventDefault();
    const newCourse = new Course();
    this.service.addCourse(newCourse).subscribe(course => {
      this.courses.push(newCourse);
    });
  }
}
