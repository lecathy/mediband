import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { patient, patient1 } from 'src/app/patient';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
  providers: [DatePipe],
})

export class ProfileHeaderComponent implements OnInit {

  PATIENT = patient1;

  constructor() { 
  }

  ngOnInit() {
  }

  getAge(date:string) : string {
    return "";
  }

}
