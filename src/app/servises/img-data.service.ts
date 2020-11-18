import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImgData } from '../data/img=dateils-data';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class ImgDataService {
  imgDataList = new ImgData()
  subId: number = 0;
   img_id: number = 0;
   imgListToBePushToServer = []
   userId: number;
   userEmail:string;
   shppingcCartOrMainPageUrl = '/img-details/shpping-cart'



  constructor(private http: HttpClient) { }

  getImg(){
    return this.http.get<any>(`${environment.apiUrl}/img-details/${this.subId}/${this.img_id}`)
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getPaylowdData(){

    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
      this.userEmail = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).email;
  
      this.userId = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).id;
    }
  }



  addImgListToServer(list) {
    // console.log('ffffffff', localStorage.getItem("accessToken"))
    return this.http.post<any>(`${environment.apiUrl}/img-details`, {list}, 
   
    )
  }

 

  getBag(user_id: number){
    this.shppingcCartOrMainPageUrl = '/img-details/shpping-cart'
    this.getPaylowdData()
    return this.http.post(`${environment.apiUrl}${this.shppingcCartOrMainPageUrl}`, {user_id}); 
  }

  getBagInHomePage(user_id: number){
    this.getPaylowdData()
    this.shppingcCartOrMainPageUrl = '/pic-sub-main-page'
    return this.http.post(`${environment.apiUrl}${this.shppingcCartOrMainPageUrl}`, {user_id}); 
  }

  //--
  // this.imgDataService.getBagInHomePage(this.user_id).subscribe(
  //   data => {
  //     this.userBag = data
  //     console.log('main page user bag: ', this.userBag.length);
  //     this.buyingSvc.itemAmount = this.userBag.length
  //   }
  // )
  //--
    
}
