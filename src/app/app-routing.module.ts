import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGaurdService} from './service/auth-gaurd.service';
import {PatientComponent} from './patient/patient.component';
import {AddPatientComponent} from './add-patient/add-patient.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent, canActivate: [AuthGaurdService]},
  { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AuthGaurdService]},
  { path: 'patients', component: PatientComponent, canActivate: [AuthGaurdService]},
  { path: 'addPatience', component: AddPatientComponent, canActivate: [AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
