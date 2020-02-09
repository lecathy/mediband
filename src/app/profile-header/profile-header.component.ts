import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { patient, patient1 } from 'src/app/patient';
import { TextfileConverterService } from '../textfile-converter.service';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
  providers: [DatePipe],
})
export class ProfileHeaderComponent implements OnInit {
  PATIENT = patient1;

  constructor(public textFileConverterService: TextfileConverterService) { 
  }

  getData(): Promise<string> {
    return this.textFileConverterService.getPatientId().toPromise();
  }

  async ngOnInit() {
    var serial_output = await this.getData();
    var serial_output_array = serial_output.toString().trim().split("\n");
    var last_index = serial_output_array.length - 1;
    var patient_id = serial_output_array[last_index];
    console.log(patient_id);
  }

  getAge(date:string) : string {
    return "";
  }
}

}
