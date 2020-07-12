import { Component, OnInit } from '@angular/core';
import { BuyingProcessService } from '../../servises/buying-process.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  bagIsNotEmpty: boolean;
  plusOrMinusTheItemToBag: number = 1
  listOfItemsInBag = [];

  constructor(public buyerSvc: BuyingProcessService) { }

  ngOnInit(): void {
    this.bagIsNotEmpty = this.buyerSvc.bagIsNotEmpty;
    this.listOfItemsInBag = this.buyerSvc.listOfItemToBeDisplay
  }
 
  minusTheItemToBagFn(item){
    if(item.numOfItems > 1){
      item.numOfItems -= 1;
    }
    
  }
  plusTheItemToBagFn(item){
    item.numOfItems +=1;
   }
   removeItemFromBag(index){
     this.buyerSvc.listOfItemToBeDisplay.splice(index,1);
     this.buyerSvc.itemAmount -= 1
     console.log("index: ",index)
   }



}
