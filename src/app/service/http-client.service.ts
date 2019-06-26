import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../Model/Employee';
import {Patient} from '../Model/Patient';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:8080/employee');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/employee' + '/' + employee.id);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/employee', employee);
  }

  getPatients() {
    console.log('test call');
    return this.httpClient.get<Patient[]>('http://localhost:8080/patients');
  }

  public deletePatient(patient)  {
    return this.httpClient.delete<Patient>('http://localhost:8080/patients' + '/' + patient.id);
  }

  public createPatient(patient) {
    return this.httpClient.post<Patient>('http://localhost:8080/patients', patient);
  }

}
