import { Injectable } from '@angular/core';
import { ImgModel } from '../models/img-model'

@Injectable({
  providedIn: 'root'
})
export class BuyingProcessService {
  itemAmount: number = 0;
  // imgToBeDisplayInBag: ImgModel
  itemImgDesToBeDisplayInBag: string;
  itemImgUrlToBeDisplayInBag: string;
  itemImgPriceToBeDisplayInBag: number;
  itemImgIdToBeDisplayInBag: number

  constructor() { }
}
