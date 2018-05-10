import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


import {Course} from './course-list/Course';
import { User } from './users/User';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'http://localhost:3000/api/courses';
  private url2 = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @returns
   * @memberof DataServiceService
   */
  getCourses() {
    return this.http.get<Course[]>(this.url);
  }


  /**
   *
   *
   * @returns {Observable<User[]>}
   * @memberof DataServiceService
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url2);
  }
  /**
   *
   *
   * @returns {Observable<User>}
   * @memberof DataServiceService
   */
  getUser(): Observable<User> {
    return this.http.get<User>(this.url2);
  }

  /*
  TODO doing it
  */
  addUser(newUser) {

  }


}
