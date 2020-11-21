import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImgData } from '../data/img=dateils-data';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ImgDataService {
  imgDataList = new ImgData();
  subId: number = 0;
  img_id: number = 0;
  imgListToBePushToServer = [];
  userId: number;
  userEmail: string;
  shppingcCartOrMainPageUrl = '/img-details/shpping-cart';
  userRole: string;
  userRole$ = new Subject();




  constructor(private http: HttpClient) {}

  getImg() {
    return this.http.get<any>(
      `${environment.apiUrl}/img-details/${this.subId}/${this.img_id}`
    );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

   async getPaylowdData() {
    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
      this.userEmail = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).email;

      this.userId = await this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).id;

      this.userRole$.next(
        this.getDecodedAccessToken(
          localStorage.getItem('accessToken')
        ).role
      );

      this.userRole = await this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).role;
    }
    return await  this.userId;
  }

  addImgListToServer(list) {
    // console.log('ffffffff', localStorage.getItem("accessToken"))
    return this.http.post<any>(`${environment.apiUrl}/img-details`, { list });
  }

  getBag(user_id: number) {
    this.shppingcCartOrMainPageUrl = '/img-details/shpping-cart';
    this.getPaylowdData();
    return this.http.post(
      `${environment.apiUrl}${this.shppingcCartOrMainPageUrl}`,
      { user_id }
    );
  }

  // getUserBag(){
  //   console.log('set user bag func');
    
  //   this.dataSVC.getBag(this.userId).subscribe((data:[]) => {
  //     this.buyingBagPerUser = data
  //     if(this.buyingBagPerUser.length > 0){
  //       this.buyerSvc.numOfItems = data.length
  //       this.buyingBagPerUser.forEach(img => {
  //         this.totalPrice += img.imgdata.price
  //       });
  //     }
  //   });
  //   this.totalPrice = 0;
  //   this.buyingBagPerUser = null
  // }

  getBagInHomePage(user_id: number) {
    // this.getPaylowdData();
    this.shppingcCartOrMainPageUrl = '/pic-sub-main-page';
    return this.http.post(
      `${environment.apiUrl}${this.shppingcCartOrMainPageUrl}`,
      { user_id }
    );
  }

  removeItemFromBag(imgId, userId) {
    let data = { userId, imgId}
    let body = new HttpParams({fromObject: data})

    //  httpParams.set('userId', userId);

    let options = { params: body };
    return this.http.delete(
      `${environment.apiUrl}/img-details/shpping-cart`,
      options
    );
  }
}
