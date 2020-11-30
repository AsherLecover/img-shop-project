import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { imgModel } from '../components/management/management.component';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  user

  imgData$ = new Subject<any>();

  constructor(private http: HttpClient) {
    this.user = this.getDecodedAccessToken(localStorage.getItem('accessToken'));
   }

  getSubjectImgesById(subId) {
    return this.http.post<any>(`${environment.apiUrl}/management/${subId}`,this.user);
  }

  deleteImg(id: number, subId: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        role: this.user.role,
        name: 'test',
      },
    };

    return this.http.delete(`${environment.apiUrl}/management/${id}/${subId}`,options);
  }

  editImgFromServer(id: any, imgDetailsToUpdate: {}, subId) {
    return this.http.patch(`${environment.apiUrl}/management/${id}/${subId}`, { imgDetailsToUpdate: imgDetailsToUpdate, role: this.user.role});
  }
  addImgToServer(imgDataToAdd) {
    return this.http.post(`${environment.apiUrl}/management`, { imgDataToAdd: imgDataToAdd, role: this.user.role  })
  }

  sendEmailToClinet(paymentForm: any, userBag: any) {
    return this.http.post(`${environment.apiUrl}/management/sendemail`, { paymentForm, userBag })
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
