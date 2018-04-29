import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OptinComponent } from './optin/optin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationConfirmedComponent } from './registration-confirmed/registration-confirmed.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SearchIDComponent } from './search-id/search-id.component';
import { CoursesComponent } from './courses/courses.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { StartplanComponent } from './startplan/startplan.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DegreeprogressComponent } from './degreeprogress/degreeprogress.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: StudentComponent },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'optin', component: OptinComponent },
  { path: 'registration-complete', component: RegistrationConfirmedComponent },
  { path: 'home-faculty', component: FacultyComponent },
  { path: 'SearchID', component: SearchIDComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'start-plan', component: StartplanComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'degree-progress', component: DegreeprogressComponent},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ViewProfileComponent,
    EditProfileComponent,
    OptinComponent,
    NotFoundComponent,
    RegistrationConfirmedComponent,
    FacultyComponent,
    SearchIDComponent,
    CoursesComponent,
    RequirementsComponent,
    StartplanComponent,
    LoginComponent,
    DegreeprogressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }





