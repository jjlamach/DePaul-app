import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {CourseListComponent} from './course-list/course-list.component';
import { DataServiceService } from './data-service.service';
import { UsersComponent } from './users/users.component';

/* Paths */
const routes = [
  {path: 'users', component: UsersComponent},
  {path: 'courses', component: CourseListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    UsersComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
