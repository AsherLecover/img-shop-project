import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { imgModel } from '../components/management/management.component';
import * as io from 'socket.io-client';
import * as uuid from 'uuid';


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
  uuid

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

  addImg(image: File, imgDataToAdd: imgModel) {
    let formData = new FormData()
    formData.append('image', image);
    this.uuid = uuid.v4()
    let headers = new HttpHeaders().set('uuid',this.uuid)

    
    this.addImgOtherData(imgDataToAdd)
    return this.http.post<any>(
      `${environment.apiUrl}/private-area/${this.user.id}`,formData,{headers});
  }

  addImgOtherData(imgDataToAdd: imgModel) {
    return this.http.post( `${environment.apiUrl}/private-area/${this.user.id}/other-data`,{imgDataToAdd,uuid:this.uuid}).subscribe( data => {
      console.log(data);
    })
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

  editImgToServer(image: File, id: any, imgDetailsToUpdate: any) {
    let imgId = imgDetailsToUpdate.imgUrl.substr(imgDetailsToUpdate.imgUrl.length - 36)
    
    let formData = new FormData()
    formData.append('image', image);
    let headers = new HttpHeaders().set('uuid',imgId);
    this.editImgOtherData(id, imgDetailsToUpdate)

    return this.http.post<any>(
      `${environment.apiUrl}/private-area/${this.user.id}`,formData,{headers});
  }

  editImgOtherData( id: any, imgDetailsToUpdate: any) {
    return this.http.patch( `${environment.apiUrl}/private-area/${id}/${this.user.id}`,
    { imgDetailsToUpdate: imgDetailsToUpdate }).subscribe( (data:imgModel[]) => {
      this.imgData$.next(data);
      setTimeout( ()=> {
        console.log('dataaaaaaaaaaaaaarrrr', data);
        
      },2000)

      // console.log(data);
    })
  }

  getAllUsers() {
    return this.http.get(`${environment.apiUrl}/private-area`);
  }

  setCardProfile(data, userId, colomnName) {
    return this.http.patch(`${environment.apiUrl}/private-area`, {
      data,
      userId,
      colomnName
    });
  }

  sendProfileImgFile(image: File, userId, clomnName) {

    let formData = new FormData()
    formData.append('image', image);

    let headers = new HttpHeaders().set('userId', userId.toString())
    // headers.set('clomnName', clomnName)
    return this.http.post(`${environment.apiUrl}/private-area/set-img-profile`,formData, { headers})
  }



}

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
