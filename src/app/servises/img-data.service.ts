import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImgData } from '../data/img=dateils-data';

@Injectable({
  providedIn: 'root'
})
export class ImgDataService {
  imgDataList = new ImgData()
  subId: number = 0;
   imgId: number = 0;
   imgListToBePushToServer = []



  constructor(private http: HttpClient) { }

  getImg(){
    return this.http.get<any>(`${environment.apiUrl}/img-details/${this.subId}/${this.imgId}`)
  }

  addImgListToServer(list) {
    // let headers = new HttpHeaders()
    // headers = headers.set(`Authorization`,`Bearer ${localStorage.getItem("accessToken")}` )
    console.log('ffffffff', localStorage.getItem("accessToken"));
    
    return this.http.post<any>(`${environment.apiUrl}/shpping-cart`, list, 
    // { headers }).pipe( 
    //   map ( (token) => {
    //     console.log('token yuri!!!', token);
    //     localStorage.setItem('accessToken', token.accessToken);
    //     return token
    //   } )
    )
  }

  // getBag(){
  //   return this.http.get(`${environment.apiUrl}/shpping-cart`)
  // }
    
}
