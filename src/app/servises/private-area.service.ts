import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { imgModel } from '../components/management/management.component';

@Injectable({
  providedIn: 'root',
})
export class PrivateAreaService {
  
 
  user: UserModel;
  imgData$ = new Subject<any>();

  
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
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          user: this.user,
        },
      };
      return this.http.delete(`${environment.apiUrl}/private-area/${imgId}`,options);
    }

    editImgToServer(id: any, imgDetailsToUpdate: any) {
      return this.http.patch(`${environment.apiUrl}/private-area/${id}/${this.user.id}`, { imgDetailsToUpdate: imgDetailsToUpdate});

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
