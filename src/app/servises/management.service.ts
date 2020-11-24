import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {
 
  constructor(private http: HttpClient) {}

  getSubjectImgesById(subId) {
    return this.http.get<any>(`${environment.apiUrl}/management/${subId}`);
  }

  deleteImg(id:number) {
    return this.http.delete(`${environment.apiUrl}/management/${id}`);
  }

  editImgFromServer(id: any, imgDetailsToUpdate:{}) {
    return this.http.patch(`${environment.apiUrl}/management/${id}`, {imgDetailsToUpdate})
  }
}
