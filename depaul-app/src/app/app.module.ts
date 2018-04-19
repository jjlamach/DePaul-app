import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';

// the Forms module to use.
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FacultyComponent } from './faculty/faculty.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdministratorComponent } from './administrator/administrator.component';

/* All the routes from Sign In to faculty. */
const allRoutes: Routes = [

  {path: 'home', component: FormComponentComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'faculty', component: FacultyComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'administrator', component: AdministratorComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HeaderComponent,
    FacultyComponent,
    ProfileComponent,
    AdministratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(allRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent] // <- render the app starting from this component
})



export class AppModule { }
