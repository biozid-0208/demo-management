import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Patient} from '../Model/Patient';
import {Router} from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[];

  constructor(
    private httpClientService: HttpClientService, private router: Router,
  ) { }

  ngOnInit() {
    this.httpClientService.getPatients().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.patients = response.entity;
  }

  deletePatient(patient: Patient): void {
    this.httpClientService.deletePatient(patient)
      .subscribe( data => {
        this.patients = this.patients.filter(u => u['id'] !== patient.id);
      });
  }

  editPatient(patient: Patient): void {
    this.router.navigate(['/editPatient/' + patient.id]);
  }



}
