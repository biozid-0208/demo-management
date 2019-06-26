import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {BasicAuthHtppInterceptService} from './service/basic-auth-http-intercept.service';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    PatientComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
