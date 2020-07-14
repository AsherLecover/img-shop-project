import { Injectable } from '@angular/core';
import { ImgData } from '../data/img=dateils-data';

@Injectable({
  providedIn: 'root'
})
export class ImgDataService {
  imgDataList = new ImgData()


  constructor() { }
}
