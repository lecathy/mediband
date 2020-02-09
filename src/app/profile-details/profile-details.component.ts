import { Component, OnInit } from '@angular/core';
import { patient, patients } from 'src/app/patient';
import { TextfileConverterService } from '../textfile-converter.service';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  PATIENTS = patients;
  PATIENT: patient;
  old_size:any = 0;
  call_function:boolean = false;

  constructor(public textFileConverterService: TextfileConverterService) { 
  }

  getData(): Promise<string> {
    return this.textFileConverterService.getPatientId().toPromise();
  }

  async ngOnInit() {
    console.log("test details");
    while (!this.call_function) {
      var serial_output = await this.getData();
      var serial_output_array = serial_output.toString().trim().split("\n");
    
      var new_size = serial_output_array.length;

      if (new_size > this.old_size) {
        this.call_function = true;
      }
      this.old_size = new_size;
      var last_index = new_size - 1;
      var patient_id = serial_output_array[last_index];

      console.log(patient_id);
      if (this.call_function){
        // TODO: Call Marwan's API Get Request with patient_id & remove console.log
        console.log(patient_id);
        this.PATIENT = this.findPatient(patient_id, this.PATIENTS);
      }
      else {
        console.log("Bracelet was not tapped.")
      }
  }
}

  arrayToString (list:string[]): string {
    let s:string = "";
    list.forEach(item => {
      s.concat(item + ", ")
    });
    return s;
  }

  findPatient(patientId: string, patients: patient[]): patient {
    for(let patient of patients){
      if (patient.id == patientId) return patient;
    }
    return new patient;
  }
}
