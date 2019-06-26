import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Patient} from '../Model/Patient';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient('', '', '', '', '', '', null, null);
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }


  createPatient(ngForm: NgForm): void {
    this.httpClientService.createPatient(this.patient)
      .subscribe( data => {
        alert('Employee created successfully.');
      });

  }

}
