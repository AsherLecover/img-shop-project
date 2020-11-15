import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImgData } from '../data/img=dateils-data';

@Injectable({
  providedIn: 'root'
})
export class ImgDataService {
  imgDataList = new ImgData()
  subId: number = 0;
   imgId: number = 0;



  constructor(private http: HttpClient) { }

  getImg(){
    return this.http.get<any>(`${environment.apiUrl}/img-details/${this.subId}/${this.imgId}`)
  }
}
