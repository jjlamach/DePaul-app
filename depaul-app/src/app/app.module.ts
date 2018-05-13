import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';


// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProfileComponent } from './profile/profile.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { StudentComponent } from './student/student.component';

/* All the routes from Sign In to faculty. */
const allRoutes: Routes = [

  {path: 'home', component: FormComponentComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'faculty', component: FacultyComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'student', component: StudentComponent},
  {path: 'administrator', component: AdministratorComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HeaderComponent,
    FacultyComponent,
    ProfileComponent,
    AdministratorComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(allRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent] // <- render the app starting from this component
})



export class AppModule { }
