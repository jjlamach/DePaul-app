import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// modeling data
import {Course} from './course-list/Course';
import {User} from './users/User';




@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'http://localhost:3000/api/courses';
  private url2 = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  /* Fetch data from the backend.*/
  getCourses() {
    return this.http.get<Course[]>(this.url); // interface
  }


  /* get users.*/
  getUsers() {
    return this.http.get<User>(this.url2);
  }
}
