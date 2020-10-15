import { Injectable } from '@angular/core';
import { ImgModel } from '../models/img-model'

@Injectable({
  providedIn: 'root'
})
export class BuyingProcessService {
  itemAmount: number = 0;

  imgToBeDisplayInBagModel: ImgModel
  itemImgDesToBeDisplayInBag: string = '';
  itemImgUrlToBeDisplayInBag: string = '';
  itemImgPriceToBeDisplayInBag: number = -1;
  itemImgIdToBeDisplayInBag: number = -1;
  itemNumOfItemToBeDisplayInBag: number = 1;
  numOfItems: number = 1;
  listOfItemToBeDisplay:any[] = [];
  bagIsEmpty: boolean;

  printType: string = ''
  printSize: string = ''
  

  constructor() { }
}
