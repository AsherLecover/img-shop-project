import { Component, OnInit } from '@angular/core';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ActivatedRoute } from '@angular/router';
import { MatRadioChange } from "@angular/material/radio";
import { MatExpansionPanel } from "@angular/material/expansion";
import { BuyingProcessService } from '../../servises/buying-process.service';
import { ImgDataService } from '../../servises/img-data.service';
import { log } from 'util';
import { ImgSubjectDataService } from '../../servises/img-subject-data.service';

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
  newList;
  imgSubId: number;
  imgUrlToBedisplay1: string;
  desToBeDisplay1: string;
  imgPrice1: string;
  photographer1: string;
  imgLongDes1: string;
  sub1: string;
  numOfItem1: number;

  link: string 
  

  href = "http://localhost:4200/img-details/0/0"
  
  constructor(public svc: ImgSubListService,
     private route: ActivatedRoute, 
     public buyingSvc: BuyingProcessService,
     public dataSVC: ImgDataService,
     private imgSubDataSVC: ImgSubjectDataService) {

  }
  
  
  ngOnInit(): void {

    this.imgSubId = parseInt(this.route.snapshot.paramMap.get('subId'))
    console.log("imgSubId:: ", this.imgSubId)
    this.imgId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("this.imgId:: ", this.imgId)
    this.newList = this.dataSVC.imgDataList.imgListBySubjects;



    for(let item of this.newList){
      if(this.imgSubId == item.subId){
        this.sub1 = item.imagesSubject
     
      for(let img of item.listOfImgUrlBysub){
        if(this.imgId == img.imgId){
          this.imgUrlToBedisplay1 = img.imgUrl;
          this.desToBeDisplay1 = img.imgDes;
          this.imgPrice1 = img.price;
          this.photographer1 = img.photographer;
          this.imgLongDes1 = img.imgLongDes
        }
      }
    }
  }

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
    let url = this.imgUrlToBedisplay1
    let imgId = this.imgId
    let price =    this.imgPrice1
    let numOfItems = this.buyingSvc.itemNumOfItemToBeDisplayInBag = this.imgNumOfItemsToBeDisplayInBag;
    let des = this.buyingSvc.itemImgDesToBeDisplayInBag = this.desToBeDisplay;
    this.buyingSvc.listOfItemToBeDisplay.push([{id: imgId,des: des,price: price, url: url, numOfItems: numOfItems}]);

  }
}
