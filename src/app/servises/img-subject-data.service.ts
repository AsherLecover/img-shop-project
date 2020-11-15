import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImgSubjectData } from '../data/img-subject-data';

@Injectable({
  providedIn: 'root'
})
export class ImgSubjectDataService {
  imgSubjecData = new ImgSubjectData()
  imgSubIddddd: number;
  lliisstt:any = []

  constructor(private http: HttpClient) {
   }
   getAllSubjectsImg(){
     
     return this.http.get(`${environment.apiUrl}/pic-sub-main-page`)
      
   }
 
}
