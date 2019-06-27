import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Patient} from '../Model/Patient';
import {NgForm, NgModel} from '@angular/forms';
import {NgOption} from '@ng-select/ng-select';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'

  ],
  encapsulation: ViewEncapsulation.None
})
export class AddPatientComponent implements OnInit {

  patientId: any;
  @ViewChild('prescriptionDate') prescriptionDate: NgModel;
  patient: Patient  ;
  genders: NgOption[] = [
    {id: 'Male', name: 'Male'},
    {id: 'Female', name: 'Female'},
    {id: 'Other', name: 'Other'}
  ];
  constructor(
    private httpClientService: HttpClientService,
    private datepipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.patient = new Patient();
    this.route.params.subscribe(params => {
      this.patientId = params.id;
      if (this.patientId) {
        this.httpClientService.getPatient(this.patientId).subscribe(
          response => {
            this.patient = response.entity;
            this.patient.prescriptionDate = new Date(this.patient.prescriptionDate);
            if (this.patient.nextVisitDate) {
              this.patient.nextVisitDate = new Date(this.patient.nextVisitDate);
            }

            console.log(this.patient);
          }, error => {
            console.log(error);

          }
        );
      } else {
        this.patient.prescriptionDate = new Date();
      }
    });

  }


  createPatient(ngForm: NgForm): void {
    this.httpClientService.createPatient(this.patient)
      .subscribe( data => {
        alert('Employee created successfully.');
      });

  }

  ChangingValue(value) {
    this.patient.gender = value;
  }

  checkValidDate() {
    this.prescriptionDate.control.setErrors(null);
    if  (this.patient.prescriptionDate === null ) {
      this.prescriptionDate.control.setErrors({'invalid Date': true});
    }
  }
  assignVal() {
    this.patient.prescriptionDate = new Date();
  }
}
