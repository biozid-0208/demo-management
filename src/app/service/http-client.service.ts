import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../Model/Employee';
import {Patient} from '../Model/Patient';
import {Observable} from 'rxjs/Rx';


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

  getPatient(id): Observable<any> {
    console.log('test call');
    return this.httpClient.get<Patient>('http://localhost:8080/patients/' + id);
  }


  public deletePatient(patient): Observable<any>  {
    return this.httpClient.delete<Patient>('http://localhost:8080/patients' + '/' + patient.id);
  }

  public createPatient(patient): Observable<any> {
    return this.httpClient.post<Patient>('http://localhost:8080/patients', patient);
  }

}
