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
  self: boolean = false;

  
  
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

  
  
  
}
