import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ImgModel } from '../models/img-model'
import { ImgDataService } from './img-data.service';

@Injectable({
  providedIn: 'root'
})
export class BuyingProcessService {
  itemAmount: number = 0;
  imgToBeDisplayInBagModel: ImgModel
  itemImgDesToBeDisplayInBag: string = '';
  itemImgUrlToBeDisplayInBag: string = '';
  itemImgPriceToBeDisplayInBag: number = -1;
  itemimg_idToBeDisplayInBag: number = -1;
  itemNumOfItemToBeDisplayInBag: number = 1;
  numOfItems: number = 0;
  listOfItemToBeDisplay:any[] = [];
  bagIsEmpty: boolean;
  printType: string = ''
  printSize: string = ''

  bagListPerUserFromServer = []
  sumOfItems = new Subject();

  

  constructor() {

    // this.ImgDataService.shppingcCartOrMainPageUrl = '/pic-sub-main-page'
    // this.ImgDataService.getBagToHomePage(this.ImgDataService.userId).subscribe( data => {
    //   console.log('gggggggggg', data);
      
      // this.itemAmount = data.length

   // })
   }
}
