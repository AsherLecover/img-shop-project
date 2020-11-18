import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgSubListService {
  imgSubList = []
  imgListOrderBySobjects = []
  img_id: number;
  imgurlSelected: string;
  imgDescription: string;
  imgPrice: string;
  photographer: string;
  imgLongDes: string;
   params = new HttpParams()
   imgSubIdSelected: number;

  constructor(private http: HttpClient) { }

  getImgById(){

    let headers = new HttpHeaders()
    headers = headers.set('Authorization',`Bearer ${localStorage.getItem("accessToken")}` )

      return this.http.get<any>(`${environment.apiUrl}/pic-main-list-subjects/${this.imgSubIdSelected}`,
      {headers}).pipe( 
        map ( (token) => {
          console.log('token yuri!!!', token);
          return token
        })
      )
    }
}
