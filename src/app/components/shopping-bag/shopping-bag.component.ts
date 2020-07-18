import { Component, OnInit } from '@angular/core';
import { BuyingProcessService } from '../../servises/buying-process.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  bagIsEmpty: boolean = true;
  plusOrMinusTheItemToBag: number = 1;
  listOfItemsInBag = [];
  likeBtn = false;
  totalPrice: number = 0;
  bagIsNotEmpty: boolean = false;
  totalItemPrice: number



  constructor(public buyerSvc: BuyingProcessService) {}

  ngOnInit(): void {
    this.bagIsEmpty = this.buyerSvc.bagIsEmpty;
    this.listOfItemsInBag = this.buyerSvc.listOfItemToBeDisplay;
    if (this.listOfItemsInBag.length > 0) {
      this.bagIsNotEmpty = true
      this.buyerSvc.bagIsEmpty = false
      for (let item of this.listOfItemsInBag) {
        for (let img of item) {
          this.totalPrice += img.price;
        }
      }
    }
  }

  minusTheItemToBagFn(item) {
    if (item.numOfItems > 1) {
      item.numOfItems -= 1;
      item.price -= item.originalPrice      
      this.totalPrice -= item.originalPrice;
    }
  }

  plusTheItemToBagFn(item) {
    item.numOfItems += 1;
    item.price += item.originalPrice
    this.totalPrice += item.originalPrice;

  
  }
   
  removeItemFromBag(index, item) {

    this.buyerSvc.listOfItemToBeDisplay.splice(index, 1);
    this.buyerSvc.itemAmount -= 1;
    console.log("index", index)
    this.totalPrice -= item.price

  }
  likeStatus() {
    this.likeBtn = !this.likeBtn;
  }
}
