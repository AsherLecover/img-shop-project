import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { imgModel } from '../components/management/management.component';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {

  imgData$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  getSubjectImgesById(subId) {
    return this.http.get<any>(`${environment.apiUrl}/management/${subId}`);
  }

  deleteImg(id: number, subId: number) {
    return this.http.delete(`${environment.apiUrl}/management/${id}/${subId}`);
  }

  editImgFromServer(id: any, imgDetailsToUpdate: {}, subId) {
    return this.http.patch(`${environment.apiUrl}/management/${id}/${subId}`, { imgDetailsToUpdate });
  }
  addImgToServer(imgDataToAdd) {
    return this.http.post(`${environment.apiUrl}/management`, { imgDataToAdd })
  }

  sendEmailToClinet(paymentForm: any, userBag: any) {
    return this.http.post(`${environment.apiUrl}/management/sendemail`, { paymentForm, userBag })

  }
}
