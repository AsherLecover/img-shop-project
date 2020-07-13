import { Component, OnInit } from '@angular/core';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ActivatedRoute } from '@angular/router';
import { MatRadioChange } from "@angular/material/radio";
import { MatExpansionPanel } from "@angular/material/expansion";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  imagesList = [];
  public imgId;
  ingUrlToBedisplay: string;
  desToBeDisplay: string;
  imgPrice: string;
  photographer: string;
  imgLongDes: string;
  s: string = ".    "
  panelOpenState = false;
  radioBtnValue: string = "";
  expOnRadio:string = ""

  
  
  constructor(public svc: ImgSubListService, private route: ActivatedRoute) {
    this.imagesList = svc.imgListOrderBySobjects
    this.ingUrlToBedisplay = this.svc.imgurlSelected;
    this.desToBeDisplay = this.svc.imgDescription;
    this.imgPrice = this.svc.imgPrice;
    this.photographer = this.svc.photographer; 
    this.imgLongDes = this.svc.imgLongDes;
  }
  
  
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgId = id;
  }
  
  onChange(radio: MatRadioChange) {
    if(radio.value == "canvas"){
      this.expOnRadio = "aaaa";
    }
    else if(radio.value == "glass"){
      this.expOnRadio = "bbbbb";
    }
    else if(radio.value == "alominiom"){
      this.expOnRadio = "ccccc";
    }
    else if(radio.value == "self"){
      this.expOnRadio = "ddddd";
    }


    console.log(radio)
  }
  
  
}
