import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/Student";
import {User} from "../../models/User";
import {DataService} from "../Data.service";

@Component({
  selector: 'app-aremove-user',
  templateUrl: './aremove-user.component.html',
  styleUrls: ['./aremove-user.component.css']
})
export class AremoveUserComponent implements OnInit {

   students: Student[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getStudents();
  }


  /**
   * Get all the students.
   */
  getStudents() {
    this.service.getStudents().subscribe((stdnts: Student[]) => {
      this.students = stdnts;
      console.log(this.students);
      this.students.forEach((x) => console.log(x));
    });
  }


  /**
   *
   * @param {number} id
   */
  delete(id: number) {
    this.service.deleteStudent(id).subscribe(res =>{
      console.log('Deleted');
    }, (error) =>{
      console.log(error);
    });
    // delete it also from the view
    for(let i = 0; i < this.students.length; i++) {
      if(this.students[i].depaulID === id) {
        this.students.splice(i, 1);
        break;
      }
    }
  }
}
