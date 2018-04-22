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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: StudentComponent },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'optin', component: OptinComponent },
  { path: 'registration-complete', component: RegistrationConfirmedComponent },
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
    RegistrationConfirmedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }





