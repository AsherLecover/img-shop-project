import { Component, OnInit } from '@angular/core';
import { ImgDataService } from 'src/app/servises/img-data.service';
import { BuyingProcessService } from '../../servises/buying-process.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  bagIsEmpty: boolean = true;
  plusOrMinusTheItemToBag: number = 1;
  listOfItemsInBag
  likeBtn = false;
  totalPrice: number = 0;
  bagIsNotEmpty: boolean = false;
  totalItemPrice: number
  printType: string;
  printSize: string;
  buyingBagPerUser
  userId: number



  constructor(public buyerSvc: BuyingProcessService,
    public dataSVC: ImgDataService,
    ) {
      this.dataSVC.getPaylowdData()
     }

  ngOnInit(): void {
    this.userId = this.dataSVC.userId

    this.dataSVC.getBag(this.userId).subscribe((data) => {
      this.buyingBagPerUser = data
      if(this.buyingBagPerUser.length > 0){
        this.bagIsEmpty = true
        this.buyingBagPerUser.forEach(img => {
          this.totalPrice += img.imgdata.price
        });
      }
      console.log('YOUUUU$$$$$$$$$$$$$', data);
    });

    this.buyingBagPerUser = this.buyerSvc.bagListPerUserFromServer;
    console.log('bag per user', this.buyingBagPerUser);
    



    // this.bagIsEmpty = this.buyerSvc.bagIsEmpty;
    // this.listOfItemsInBag = this.buyerSvc.listOfItemToBeDisplay;
    // if (this.listOfItemsInBag.length > 0) {
    //   this.bagIsNotEmpty = true
    //   this.buyerSvc.bagIsEmpty = false
    //   for (let item of this.listOfItemsInBag) {
    //     for (let img of item) {
    //       this.totalPrice += img.price;
    //       this.buyerSvc.listOfItemToBeDisplay[0].totalPrice = this.totalPrice
    //     }
    //   }
    // }
  }

  // minusTheItemToBagFn(item) {
  //   if (item.numOfItems > 1) {
  //     item.numOfItems -= 1;
  //     item.price -= item.originalPrice
  //     this.totalPrice -= item.originalPrice;
  //     this.buyerSvc.listOfItemToBeDisplay[0].totalPrice = this.totalPrice

  //   }
  // }

  // plusTheItemToBagFn(item) {
  //   item.numOfItems += 1;
  //   item.price += item.originalPrice
  //   this.totalPrice += item.originalPrice;
  //   this.buyerSvc.listOfItemToBeDisplay[0].totalPrice = this.totalPrice

  // }

  // removeItemFromBag(index, item) {

  //   this.buyerSvc.listOfItemToBeDisplay.splice(index, 1);
  //   this.buyerSvc.itemAmount -= 1;
  //   console.log("index", index)
  //   this.totalPrice -= item.price
  //   this.buyerSvc.listOfItemToBeDisplay[0].totalPrice = this.totalPrice
  // }

  likeStatus() {
    this.likeBtn = !this.likeBtn;
  }
}
