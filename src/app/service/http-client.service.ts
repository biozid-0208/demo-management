import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
