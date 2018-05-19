import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DataService } from './Data.service';
import {DataGuard} from "./data.guard";
import {Data2Guard} from "./data2.guard";

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
import { FviewProfileComponent } from './fview-profile/fview-profile.component';
import { FviewProfileStuComponent } from './fview-profile-stu/fview-profile-stu.component';
import { FrequirementsComponent } from './frequirements/frequirements.component';
import { FstartPlanComponent } from './fstart-plan/fstart-plan.component';
import { FeditProfileComponent } from './fedit-profile/fedit-profile.component';
import { FdegreeProgressComponent } from './fdegree-progress/fdegree-progress.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { AdminComponent } from './admin/admin.component';
import { AdegreeProgressComponent } from './adegree-progress/adegree-progress.component';
import { AeditProfileComponent } from './aedit-profile/aedit-profile.component';
import { ArequirementsComponent } from './arequirements/arequirements.component';
import { AstartPlanComponent } from './astart-plan/astart-plan.component';
import { AviewProfileComponent } from './aview-profile/aview-profile.component';
import { AviewProfileStuComponent } from './aview-profile-stu/aview-profile-stu.component';
import { AviewProfileFacComponent } from './aview-profile-fac/aview-profile-fac.component';
import { AcoursesComponent } from './acourses/acourses.component';
import { FcoursesComponent } from './fcourses/fcourses.component';
import { AenrollmentComponent } from './aenrollment/aenrollment.component';
import { AclassesComponent } from './aclasses/aclasses.component';
import { AprogramsComponent } from './aprograms/aprograms.component';
import { AstudentsComponent } from './astudents/astudents.component';
import { AremoveUserComponent } from './aremove-user/aremove-user.component';
import { AsearchIdComponent } from './asearch-id/asearch-id.component';
import { AllpagesComponent } from './allpages/allpages.component';
import { AccountcreationComponent } from './accountcreation/accountcreation.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DegreePlanFormComponent } from './degree-plan-form/degree-plan-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'allpages', pathMatch: 'full' },
  { path: 'home', component: StudentComponent },
  { path: 'home3', component: AdminComponent, canActivate: [DataGuard]},
  { path: 'home-faculty', component: FacultyComponent, canActivate: [Data2Guard]},
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'optin', component: OptinComponent },
  { path: 'registration-complete', component: RegistrationConfirmedComponent },
  { path: 'home-faculty', component: FacultyComponent },
  { path: 'SearchID', component: SearchIDComponent, canActivate: [Data2Guard] },
  { path: 'courses', component: CoursesComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'start-plan', component: StartplanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'degree-progress', component: DegreeprogressComponent },
  { path: 'logged-out', component: LoggedOutComponent },
  { path: 'view-profile1', component: FviewProfileStuComponent, canActivate: [Data2Guard] },
  { path: 'view-profile2', component: FviewProfileComponent, canActivate: [Data2Guard] },
  { path: 'start-plan1', component: FstartPlanComponent, canActivate: [Data2Guard] },
  { path: 'requirements1', component: FrequirementsComponent, canActivate: [Data2Guard] },
  { path: 'edit-profile1', component: FeditProfileComponent, canActivate: [Data2Guard] },
  { path: 'degree-progress1', component: FdegreeProgressComponent, canActivate: [Data2Guard] },
  { path: 'courses1', component: FcoursesComponent, canActivate: [Data2Guard] },
  { path: 'view-profile3', component: AviewProfileComponent, canActivate: [DataGuard] },
  { path: 'view-profile4', component: AviewProfileFacComponent, canActivate: [DataGuard] },
  { path: 'view-profile5', component: AviewProfileStuComponent, canActivate: [DataGuard] },
  { path: 'list-students', component: AstudentsComponent, canActivate: [DataGuard] },
  { path: 'start-plan3', component: AstartPlanComponent, canActivate: [DataGuard] },
  { path: 'degree-plan-form', component: DegreePlanFormComponent },
  { path: 'SearchID3', component: AsearchIdComponent, canActivate: [DataGuard] },
  { path: 'requirements3', component: ArequirementsComponent },



  // { path: 'remove', component: AremoveUserComponent, canActivate: [DataGuard] }, // Julio

  {path: 'remove', component: AremoveUserComponent},





  { path: 'allpages', component: AllpagesComponent },
  { path: 'programs', component: AprogramsComponent, canActivate: [DataGuard] },
  { path: 'enrollment', component: AenrollmentComponent, canActivate: [DataGuard] },
  { path: 'edit-profile3', component: AeditProfileComponent, canActivate: [DataGuard] },
  { path: 'degree-progress3', component: AdegreeProgressComponent, canActivate: [DataGuard] },
  { path: 'courses3', component: AcoursesComponent, canActivate: [DataGuard] },
  { path: 'classes', component: AclassesComponent, canActivate: [DataGuard] },
  { path: 'registration', component: AccountcreationComponent },
  { path: 'recover', component: RecoverPasswordComponent },

  // { path: 'add', component: AddUserComponent, canActivate: [DataGuard] },  // Julio

  {path: 'add', component: AddUserComponent},


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
    DegreeprogressComponent,
    FviewProfileComponent,
    FviewProfileStuComponent,
    FrequirementsComponent,
    FstartPlanComponent,
    FeditProfileComponent,
    FdegreeProgressComponent,
    LoggedOutComponent,
    AdminComponent,
    AdegreeProgressComponent,
    AeditProfileComponent,
    ArequirementsComponent,
    AstartPlanComponent,
    AviewProfileComponent,
    AviewProfileStuComponent,
    AviewProfileFacComponent,
    AcoursesComponent,
    FcoursesComponent,
    AenrollmentComponent,
    AclassesComponent,
    AprogramsComponent,
    AstudentsComponent,
    AremoveUserComponent,
    AsearchIdComponent,
    AllpagesComponent,
    AccountcreationComponent,
    RecoverPasswordComponent,
    AddUserComponent,
    DegreePlanFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService, DataGuard, Data2Guard],
  bootstrap: [AppComponent]
})


export class AppModule { }





