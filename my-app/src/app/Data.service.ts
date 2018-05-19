import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';
import {Student} from "../models/Student";
import {xCourse} from '../models/xCourse';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * All the courses from the first table
   * @returns {Observable<Object>}
   */
  getCourses() {
    return this.http.get('http://localhost:3000/api/courses');
  }

  /**
   * Gets one course
   * @returns {Observable<Object>}
   */
  getCourse() {
    return this.http.get('http://localhost:3000/api/course/:id')
  }


  /**
   * Gets all the users.
   * @returns {Observable<User[]>}
   */
  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  /**
   * Gets all the students.
   * @returns {Observable<Student[]>}
   */
  getStudents() {
    return this.http.get<Student[]>('http://localhost:3000/api/students');
  }



  /**
   * Adds a new user
   * @param newUser
   * @returns {Observable<Object>}
   */
  addUser(newUser) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/user', newUser, {headers: headers});
  }

  /**
   * Adds a new Student.
   * @param newStudent
   * @returns {Observable<Object>}
   */
  addStudent(newStudent) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/student', newStudent, {headers: headers});
  }


  /**
   *
   * @param {number} DuId
   * @returns {Observable<Object>}
   */
  deleteStudent(DuId: number) {
    let headers = new HttpHeaders();
    return this.http.delete('http://localhost:3000/api/student/' + DuId, {headers: headers});
  }


  /**
   * Logins the user if it exists.
   * @param user
   */
  verifyUser(user) {
    // any to avoid errors
    return this.http.post<any>('http://localhost:3000/api/login', user);
  }

  loggedIn(userType){
    console.log(userType);
    return userType == 'Admin';
  }

  loggedIn2(userType){
    console.log(userType);
    return userType == 'Faculty';
  }

  /************************* Methods for new table start here ********************/
  getxCourses() {
    return this.http.get<xCourse[]>('http://localhost:3000/api/xcourses');
  }

  getSummerCourses() {
    return this.http.get<xCourse[]>('http://localhost:3000/api/summer');
  }

  getWinterCourses() {
    return this.http.get<xCourse[]>('http://localhost:3000/api/winter');
  }

  getSpringCourses() {
    return this.http.get<xCourse[]>('http://localhost:3000/api/spring');
  }

  getFallCourses() {
    return this.http.get<xCourse[]>('http://localhost:3000/api/fall');
  }

  addxCourse(xCourse) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/user', xCourse, {headers: headers});
  }
  /************************* Methods for new table end here ********************/

}
