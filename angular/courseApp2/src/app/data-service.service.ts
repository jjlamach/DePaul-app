import { Injectable } from '@angular/core';
// import {Http, Response, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modeling through an interface
import {XCourse} from './course-list/xCourse';
// Modeling through a class.
import {Course} from './Course';




@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'http://localhost:3000/api/courses';  // it could be even /api/users

  constructor(private http: HttpClient) { }

  /* Fetch data from the backend.*/
  // Currently trying to get me the data following an interface.
  getCourses() {
    // return this.http.get<Course>(this.url);
    return this.http.get<XCourse>(this.url);  // return type xCourse
  }
}
