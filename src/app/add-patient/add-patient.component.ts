import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Patient} from '../Model/Patient';
import {NgForm} from '@angular/forms';
import {NgOption} from '@ng-select/ng-select';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient('', '', '', '', '', '', null, null);
  genders: NgOption[] = [
    {id: 'Male', name: 'Male'},
    {id: 'Female', name: 'Female'},
    {id: 'Other', name: 'Other'}
  ];
  constructor(
    private httpClientService: HttpClientService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
  }


  createPatient(ngForm: NgForm): void {
    console.log(this.datepipe.transform(this.patient.prescriptionDate, 'MMMM dd, yyyy'));
    console.log(this.patient);
    this.httpClientService.createPatient(this.patient)
      .subscribe( data => {
        alert('Employee created successfully.');
      });

  }

  ChangingValue(value) {
    console.log(value);
    this.patient.gender = value;
  }

}
