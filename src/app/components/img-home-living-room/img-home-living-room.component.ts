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
import { ClinetsService } from 'src/app/servises/clinets.service';
import { ImgDataService } from 'src/app/servises/img-data.service';
import { AuthService } from 'src/app/servises/auth.service';
import jwt_decode from 'jwt-decode';


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
  userId:number;
  buyingBagPerUser

  constructor(
    private imgHomeLivingRoomService: ImgHomeLivingRoomService,
    private router: Router,
    public svcClinet: ClinetsService,
    public buyerSvc: BuyingProcessService,
    public dataSVC: ImgDataService,
    public authService: AuthService,
    public svc: ImgSubListService,
    public buyingSvc: BuyingProcessService
  ) {}

  ngOnInit(): void {
    this.userId = this.dataSVC.userId
    this.getUserBag()

    if (localStorage.getItem('livingRoomList')) {
      this.listToDisplay = JSON.parse(
        localStorage.getItem('livingRoomList') || '[]'
      );
    } else {
      this.imgHomeLivingRoomService.getAllImg().subscribe((data: []) => {
        this.imgDataFromServrer = data;

        for (let i = 0; i < 12; i++) {
          this.listToDisplay.push(
            this.imgDataFromServrer[this.getRandomNumber()]
          );
        }
        localStorage.setItem(
          'livingRoomList',
          JSON.stringify(this.listToDisplay)
        );
      });
    }
  }

  getRandomNumber() {
    return (this.randomNumber = Math.floor(Math.random() * 55) + 1);
  }

  onImgSelected(img) {
    this.router.navigate(['/img-details', img.subId, img.img_id]);
    this.svc.imgurlSelected = img.imgUrl;
    this.svc.imgDescription = img.imgDes;
    this.svc.imgPrice = img.price;
    this.svc.photographer = img.photographer;
    this.svc.imgLongDes = img.imgLongDes;
  }

 

  getUserBag() {
    this.getPaylowdData()
    this.dataSVC.getBag(this.userId).subscribe((data: []) => {
      this.buyingBagPerUser = data
      console.log(' data from sign in', data);
      console.log(' data length', data.length);

      this.buyerSvc.sumOfItems.next(this.buyingBagPerUser.length);
    
    });
    this.buyingBagPerUser = null
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getPaylowdData() {
    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
      this.userId = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).id;

      this.svcClinet.userName = ' ' + this.getDecodedAccessToken(localStorage.getItem('accessToken')
      ).username;
      this.svcClinet.username$.next(
        this.getDecodedAccessToken(
          localStorage.getItem('accessToken')
        ).username
      );

    }
    return this.userId;
  }
}
