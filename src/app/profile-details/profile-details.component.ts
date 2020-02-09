import { Component, OnInit } from '@angular/core';
import { patient, patient1 } from 'src/app/patient';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  PATIENT = patient1;

  constructor() { }

  ngOnInit() {
  }

  arrayToString (list:string[]): string {
    let s:string = "";
    list.forEach(item => {
      s.concat(item + ", ")
    });
    return s;
  }

}
