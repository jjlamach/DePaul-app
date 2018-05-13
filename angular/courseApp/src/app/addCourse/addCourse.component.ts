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
  }

}
