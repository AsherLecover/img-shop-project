import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgSubListService {
  imgSubList = []
  imgListOrderBySobjects = []
  imgId: number;
  imgurlSelected: string;
  imgDescription: string;
  aaa: string

  constructor() { }
}
