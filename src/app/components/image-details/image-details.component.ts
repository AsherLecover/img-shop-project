import { Component, OnInit } from '@angular/core';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ActivatedRoute } from '@angular/router';
import { MatRadioChange } from "@angular/material/radio";
import { MatExpansionPanel } from "@angular/material/expansion";
import { BuyingProcessService } from '../../servises/buying-process.service';
import { ImgDataService } from '../../servises/img-data.service';
import { log } from 'util';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  imagesList = [];
  public imgId;
  imgUrlToBedisplay: string;
  desToBeDisplay: string;
  imgPrice: string;
  photographer: string;
  imgLongDes: string;
  s: string = ".    "
  panelOpenState = false;
  radioBtnValue: string = "";
  expOnRadio:string = ""
  self: boolean = false;
  imgIdToBeDisplayInBag: number;
  imgPriceToBedisplay: number;
  imgNumOfItemsToBeDisplayInBag: number = 1;
  imgDesOfItemsToBeDisplayInBag: string;
  newList 
  

  
  
  constructor(public svc: ImgSubListService, private route: ActivatedRoute, public buyingSvc: BuyingProcessService,public dataSVC: ImgDataService) {
    this.imagesList = svc.imgListOrderBySobjects
    this.imgUrlToBedisplay = this.svc.imgurlSelected;
    this.desToBeDisplay = this.svc.imgDescription;
    this.imgPrice = this.svc.imgPrice;
    this.photographer = this.svc.photographer; 
    this.imgLongDes = this.svc.imgLongDes;
    this.imgIdToBeDisplayInBag = this.buyingSvc.itemImgIdToBeDisplayInBag;

    


  }
  
  
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgId = id;
    let ii: string
    let jj: string
    if(this.imagesList.length == 0){

      for (let [i, v] of this.dataSVC.imgDataList.imgListBySubjects.entries()) {
        ii = i.toString()
        for (let [j,w] of v.listOfImgUrlBysub.entries()) {
          jj = j.toString()

          if(this.route.snapshot.paramMap.get('id') == "imgId:" + ii + "subId:" + jj){
            console.log("yessssssssssss")
            this.imgUrlToBedisplay = this.dataSVC.imgDataList.imgListBySubjects[j].listOfImgUrlBysub[i].imgUrl
            this.desToBeDisplay = this.dataSVC.imgDataList.imgListBySubjects[j].listOfImgUrlBysub[i].imgDes
            this.imgPrice= this.dataSVC.imgDataList.imgListBySubjects[j].listOfImgUrlBysub[i].price
            this.photographer= this.dataSVC.imgDataList.imgListBySubjects[j].listOfImgUrlBysub[i].photographer
            this.imgLongDes= this.dataSVC.imgDataList.imgListBySubjects[j].listOfImgUrlBysub[i].imgLongDes
            this.imgIdToBeDisplayInBag = this.dataSVC.imgDataList.imgListBySubjects[j].listOfImgUrlBysub[i].imgId
          }
          
        }
      }
    }
    console.log("aaaaaaaaa", this.route.snapshot.paramMap.get('id'))

  }
  
  onChange(radio: MatRadioChange) {
    if(radio.value == "canvas"){
      this.expOnRadio = "בד הקנבס העוטף את מסגרת התמונה צבוע בלבן";
    }
    else if(radio.value == "glass"){
      this.expOnRadio = "לא הדבקה! תהליך כימי (דיאסק) באיכות גבוהה מאוד על גבי זכוכית אקרילית איכותית מבריקה או מאט על פי בחירתכם.";
    }
    else if(radio.value == "alominiom"){
      this.expOnRadio = "הטמעה/הדבקה על אלומיניום באיכות גבוהה ובאמידות גבוהה מאוד.";
    }
    else if(radio.value == "self"){
      this.expOnRadio = "אנו נשלח את קובץ המקור לבית הדפוס שאתם בחרתם וכך תוכלו להדפיס בכל גודל, על גבי כל משטח כרצונכם (אלומינים מוברש, זכוכית, עץ, פרספקס ועוד').";
      this.self = true;
    }
  }
  addItemToBag(){
    this.buyingSvc.itemAmount += 1;
    let url = this.buyingSvc.itemImgUrlToBeDisplayInBag = this.imgUrlToBedisplay;
    let imgId = this.buyingSvc.itemImgIdToBeDisplayInBag = this.imgIdToBeDisplayInBag;
    let price = this.buyingSvc.itemImgPriceToBeDisplayInBag = this.imgPrice;
    
    let numOfItems = this.buyingSvc.itemNumOfItemToBeDisplayInBag = this.imgNumOfItemsToBeDisplayInBag;
    let des = this.buyingSvc.itemImgDesToBeDisplayInBag = this.desToBeDisplay;
    this.buyingSvc.listOfItemToBeDisplay.push([{id: imgId,des: des,price: price, url: url, numOfItems: numOfItems}]);

  }

  

  
  
  
}
