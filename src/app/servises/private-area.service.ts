import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivateAreaService {
  user


  constructor(private http: HttpClient) {
    this.user = this.getDecodedAccessToken(localStorage.getItem('accessToken'));

   }

   getSubjectImgesById(subId) {
    return this.http.post<any>(`${environment.apiUrl}/private-area/${subId}`,this.user);
  }

   getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  
}
