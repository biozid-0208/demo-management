import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Report} from '../Model/Report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  visitReport: Report[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getReport().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.visitReport = response.entity;
  }


}
