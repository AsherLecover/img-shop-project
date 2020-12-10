import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { imgModel } from '../components/management/management.component';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class PrivateAreaService {
 
  messages = new Subject();
  private socket = null;
  user: UserModel;
  imgData$ = new Subject<any>();
  userData$ = new Subject();
  formData = new FormData()

  constructor(private http: HttpClient) {
    this.user = this.getDecodedAccessToken(localStorage.getItem('accessToken'));
  }

  getAllSubjectImgesById(subId) {
    return this.http.get(`${environment.apiUrl}/private-area/${subId}`);
  }

  getAllImgByUserId() {
    return this.http.post<any>(
      `${environment.apiUrl}/private-area/`,
      this.user
    );
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
    return this.http.post<any>(
      `${environment.apiUrl}/private-area/${this.user.id}`,
      { imgDataToAdd }
    );
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
    return this.http.delete(
      `${environment.apiUrl}/private-area/${imgId}`,
      options
    );
  }

  editImgToServer(id: any, imgDetailsToUpdate: any) {
    return this.http.patch(
      `${environment.apiUrl}/private-area/${id}/${this.user.id}`,
      { imgDetailsToUpdate: imgDetailsToUpdate }
    );
  }

  getAllUsers() {
    return this.http.get(`${environment.apiUrl}/private-area`);
  }

  setCardProfile(data, userId,colomnName) {
    return this.http.patch(`${environment.apiUrl}/private-area`, {
      data,
      userId,
      colomnName
    });
  }

  sendProfileImgFile(image: any,  userId) {
    console.log(image); 
    
    this.formData.append('image', image );
    console.log(userId);
    console.log('this.formData: ' ,this.formData);
    let headers = new HttpHeaders().set('userId',userId.toString()) 
     this.http.post(`${environment.apiUrl}/private-area/set-img-profile`
     ,this.formData, {headers}).subscribe(
       data => {
         console.log(data);
       }
     );  
  }
  uploadImage(image: File,id) {
    console.log(image); 
    let formData = new FormData()
    formData.append('image', image );
    console.log(id);
    console.log(formData);
    let headers = new HttpHeaders().set('id',id) 
    this.http.post(`/playrs/upload` , formData,{headers}).subscribe() ;  
  }


}
// profession

export interface UserModel {
  id: number;
  imgProfile: string;
  profession: string;
  instagram_link: string;
  facebook_link: string;
  linkedin_link: string;
  twitter_link: string;
  email: string;
  exp: number;
  iat: number;
  role: string;
  username: string;
}
