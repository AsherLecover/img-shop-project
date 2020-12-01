import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  contactUsMassage(masseageForm){
    return this.http.post(`${environment.apiUrl}/contact-us`,{ masseageForm })
  }
}
