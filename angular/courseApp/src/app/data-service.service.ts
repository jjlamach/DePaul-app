import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



import {Course} from './course-list/Course';
import { User } from './users/User';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // so far these two urls are the only ones that have our info
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

  /**
   *
   *
   * @param {any} newUser
   * @memberof DataServiceService
   */
    addUser(newUser) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/user', JSON.stringify(newUser), {headers: headers});
  }

  /**
   *
   *
   * @param {any} newCourse
   * @memberof DataServiceService
   */
  addCourse(newCourse) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/course', JSON.stringify(newCourse), {headers: headers});
  }

  // TODO FIX this
  deleteUser(id) {
    return this.http.delete('http://localhost:3000/api/user/' + id);
  }


}
