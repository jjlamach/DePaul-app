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



  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @returns
   * @memberof DataServiceService
   */
  getCourses() {
    return this.http.get('http://localhost:3000/api/courses');
  }


  getCourse() {
    return this.http.get('http://localhost:3000/api/course/:id')
  }



  // get users
    getUsers() {
    return this.http.get('http://localhost:3000/api/users');
    }

    /*
    Should add user.
    */
    addUser(newUser) {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/user', newUser, {headers: headers});
    }
}
