import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImgHomeLivingRoomService {
  imgSubIdRandom: number = Math.floor(Math.random() * 6) + 1 

  constructor(private http: HttpClient) { }

  getImgByRandomId(){
    console.log('imgSubIdRandom', this.imgSubIdRandom);
        return this.http.get(`${environment.apiUrl}/pic-main-list-subjects` )
    }

    getAllImg(){
          return this.http.get(`${environment.apiUrl}/img-home-living-room` )
      }
  
}
