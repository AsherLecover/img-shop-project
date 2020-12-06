import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { imgModel } from '../components/management/management.component';

@Injectable({
  providedIn: 'root',
})
export class PrivateAreaService {
 
  user: UserModel;
  
  constructor(private http: HttpClient) {
    this.user = this.getDecodedAccessToken(localStorage.getItem('accessToken'));
  }
  
  getAllSubjectImgesById(subId) {
    return this.http.get(`${environment.apiUrl}/private-area/${subId}`);
  }
  
  getAllImgByUserId() {
    return this.http.post<any>( `${environment.apiUrl}/private-area/`, this.user);
    }
    
    getDecodedAccessToken(token: string): any {
      try {
        return jwt_decode(token);
      } catch (Error) {
        return null;
      }
    }
    
    getUserId() {
      return this.user.id;
    }


    addImg(imgDataToAdd: imgModel) {
      return this.http.post<any>( `${environment.apiUrl}/private-area/${this.user.id}`, {imgDataToAdd},);
    }

    deleteFromServer(imgId: number) {
      return this.http.delete(`${environment.apiUrl}/private-area/${imgId}`);
    }
  }

  
  
  export interface UserModel {
    email: string;
  exp: number;
  iat: number;
  id: number;
  role: string;
  username: string;
}
