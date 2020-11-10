import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgSubListService {
  imgSubList = []
  imgListOrderBySobjects = []
  imgId: number;
  imgurlSelected: string;
  imgDescription: string;
  imgPrice: string;
  photographer: string;
  imgLongDes: string;
   params = new HttpParams()
   imgSubIdSelected: number;

  constructor(private http: HttpClient) { }

  getImgById(){
      return this.http.get<any>(`${environment.apiUrl}/pic-main-list-subjects/${this.imgSubIdSelected}`)
    }
  

  
}
