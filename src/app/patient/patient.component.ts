import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Patient} from '../Model/Patient';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[];
  deleted_patient: Patient;
  startDate: Date;
  endDate: Date;
  private end_date: string;
  private start_date: string;

  constructor(
    private httpClientService: HttpClientService, private router: Router,
    private modalService: NgbModal, private datepipe: DatePipe,
  ) {
  }

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
      .subscribe(data => {
        this.patients = this.patients.filter(u => u['id'] !== patient.id);
      });
  }

  editPatient(patient: Patient): void {
    this.router.navigate(['/editPatient/' + patient.id]);
  }

  updateDeletedPatient(patient: Patient) {
    this.deleted_patient = patient;
  }

  openDeleteModal(content) {
    this.modalService.open(content).result.then((result) => {
      console.log('in result ->' + result);
      this.deletePatient(this.deleted_patient);
    }, (reason) => {
    });
  }

  filterData() {
    console.log('this is test ');
    if (this.startDate === null || this.startDate === undefined) {
      this.start_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    } else {
      this.start_date = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    }
    if (this.endDate === null || this.endDate === undefined) {
      this.end_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    } else {
      this.end_date = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');
    }

    this.httpClientService.filterData(this.start_date, this.end_date).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

}
