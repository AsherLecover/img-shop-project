import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ImgHomeLivingRoomService } from '../../servises/img-home-living-room.service';
import { Router } from '@angular/router';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { BuyingProcessService } from '../../servises/buying-process.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'img-home-living-room',
  templateUrl: './img-home-living-room.component.html',
  styleUrls: ['./img-home-living-room.component.css'],
})
export class ImgHomeLivingRoomComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  imgDataFromServrer: [];
  imgListSubject: string = '';
  randomNumber: number = 0;
  listToDisplay: [] = [];

  constructor(
    private imgHomeLivingRoomService: ImgHomeLivingRoomService,
    private router: Router,

    public svc: ImgSubListService,
    public buyingSvc: BuyingProcessService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem('livingRoomList')){
      this.listToDisplay =  JSON.parse(localStorage.getItem("livingRoomList") || "[]");
    }
    else{

      this.imgHomeLivingRoomService.getAllImg().subscribe((data: []) => {
        this.imgDataFromServrer = data;
  
        for (let i = 0; i < 12; i++) {
  
          this.listToDisplay.push(
            this.imgDataFromServrer[this.getRandomNumber()]
          );
        }
        localStorage.setItem('livingRoomList',  JSON.stringify( this.listToDisplay))
        
      });
    }
  }

  getRandomNumber() {
    return (this.randomNumber = Math.floor(Math.random() * 55) + 1);
  }

  onImgSelected(img) {
    console.log('444444444444444', img);
    
    this.router.navigate([
      '/img-details',
      img.subId,
      img.img_id,
    ]);
    this.svc.imgurlSelected = img.imgUrl;
    this.svc.imgDescription = img.imgDes;
    this.svc.imgPrice = img.price;
    this.svc.photographer = img.photographer;
    this.svc.imgLongDes = img.imgLongDes;
  }

  omImgSelectedToBuy(img) {
    let id = (this.buyingSvc.itemimg_idToBeDisplayInBag = img.img_id);
    let des = (this.buyingSvc.itemImgDesToBeDisplayInBag = img.imgDes);
    let price = (this.buyingSvc.itemImgPriceToBeDisplayInBag = img.price);
    let originalPrice = (this.buyingSvc.itemImgPriceToBeDisplayInBag =
      img.price);
    let url = (this.buyingSvc.itemImgUrlToBeDisplayInBag = img.imgUrl);
    let numOfItems = this.buyingSvc.numOfItems;
    this.buyingSvc.listOfItemToBeDisplay.push([
      {
        id: id,
        des: des,
        price: price,
        url: url,
        numOfItems: numOfItems,
        originalPrice: originalPrice,
      },
    ]);

    this.buyingSvc.itemAmount += 1;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
