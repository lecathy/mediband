import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextfileConverterService {

  single_id:any;

  constructor(private http:HttpClient) {}

  getPatientId(): Observable<string> {
    return this.http.get('assets/nfctags.txt', {responseType: 'text'});
  }
}
