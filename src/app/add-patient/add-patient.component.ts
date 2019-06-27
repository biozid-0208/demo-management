import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Patient} from '../Model/Patient';
import {NgForm} from '@angular/forms';
import {NgOption} from '@ng-select/ng-select';

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
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }


  createPatient(ngForm: NgForm): void {
    console.log(this.patient);
    this.httpClientService.createPatient(this.patient)
      .subscribe( data => {
        alert('Employee created successfully.');
      });

  }

}
