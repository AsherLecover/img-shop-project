import { Component, OnInit } from '@angular/core';
import { BuyingProcessService } from 'src/app/servises/buying-process.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {

  constructor(public buyerSvc: BuyingProcessService) { }

  ngOnInit(): void {
    
  }

}
