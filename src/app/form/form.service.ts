import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  sendFormData(formData: FormData) {
    this.http.post(API_URL + '/form-data', formData, {responseType: 'text'}).subscribe(
      (response) => console.log('Form Sent to DataBase: ' + JSON.stringify(response)),
      (error) => console.log('Error while sending form data: ' + JSON.stringify(error))
    );
  }
}
