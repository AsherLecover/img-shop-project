import { Component, OnInit } from '@angular/core';
import { ImgDataService } from 'src/app/servises/img-data.service';
import { BuyingProcessService } from '../../servises/buying-process.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css'],
})
export class ShoppingBagComponent implements OnInit {
  bagIsEmpty: boolean = true;
  likeBtn = false;
  totalPrice: number = 0;
  bagIsNotEmpty: boolean = false;

  buyingBagPerUser;
  userId: number;

  constructor(
    public buyerSvc: BuyingProcessService,
    public dataSVC: ImgDataService
  ) {
    // this.dataSVC.getPaylowdData()
  }

  ngOnInit(): void {
    this.userId = this.dataSVC.userId;
    this.getUserBag();

    this.buyingBagPerUser = this.buyerSvc.bagListPerUserFromServer;
  }

  getUserBag() {
    this.dataSVC.getBag(this.userId).subscribe((data: []) => {
      this.buyingBagPerUser = data;
      if (this.buyingBagPerUser.length > 0) {
        this.bagIsEmpty = true;
        this.buyerSvc.sumOfItems.next(data.length);
        // this.buyerSvc.numOfItems = data.length;
        this.buyingBagPerUser.forEach((img) => {
          this.totalPrice += img.imgdata.price;
        });
      }
    });
    this.totalPrice = 0;
  }

  likeStatus() {
    this.likeBtn = !this.likeBtn;
  }

  removeItemFromBag(itemId, userId) {
    console.log('removrd item', itemId, 'userid: ', userId);
    this.dataSVC.removeItemFromBag(itemId, userId).subscribe((data: []) => {
      this.buyerSvc.sumOfItems.next(data.length);
      this.getUserBag();
      console.log('delete func', data);
    });
  }
}
