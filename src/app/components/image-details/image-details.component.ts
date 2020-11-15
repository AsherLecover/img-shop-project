import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';
import { MatExpansionPanel } from '@angular/material/expansion';
import { BuyingProcessService } from '../../servises/buying-process.service';
import { ImgDataService } from '../../servises/img-data.service';
import { log } from 'util';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css'],
})
export class ImageDetailsComponent implements OnInit {
  imagesList = [];
  public imgId;
  imgUrlToBedisplay: string;
  desToBeDisplay: string;
  imgPrice: string;
  photographer: string;
  imgLongDes: string;
  s: string = '.    ';
  panelOpenState = false;
  radioBtnValue: string = '';
  expOnRadio: string = '';
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
  originalPrice1: number;

  link: string;
  stst = `whatsapp://send?text=רציתי לשתף אותך בתמונה יפה מהאתר PicPicture www.google.com`;
  href = 'http://localhost:4200/img-details/0/0';
  iframeSrc: SafeUrl;
  flag = true;
  message: string = 'המוצר התווסף לסל בהצלחה!';
  fff = false;

  printType: string = '';
  printSize: string = '';

  options = [
    { name: '50X33' },
    { name: '60X40' },
    { name: '70X47' },
    { name: '80X53' },
    { name: '90X60' },
    { name: '100X67' },
    { name: '110X73' },
    { name: '120X80' },
    { name: '130X87' },
    { name: '140X93' },
    { name: '150X100' },
    { name: '160X107' },
    { name: '170X113' },
    { name: '180X120' },
    { name: '190X127' },
    { name: '200X133' },
  ];

  imgDataFromServer

  constructor(
    public svc: ImgSubListService,
    private route: ActivatedRoute,
    public buyingSvc: BuyingProcessService,
    public dataSVC: ImgDataService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.link = this.router.url;
    let url = `whatsapp://send?text= PicPicture רציתי לשתף אותך בתמונה יפה מהאתר http://localhost:4200/${this.link}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    


    this.imgSubId = parseInt(this.route.snapshot.paramMap.get('subId'));
    this.imgId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('iimmgg  id: ', this.imgId);
    console.log(' subbbb iimmgg  id: ', this.imgSubId);
    

    //---------------------------------
    this.dataSVC.subId = this.imgSubId;
    this.dataSVC.imgId = this.imgId;

    this.dataSVC.getImg().subscribe( data => {
      this.imgDataFromServer = data;
      console.log('ddddaaaaaaaaaaabibi data: ', data);
      
    })

    


    //---------------------------------
    this.newList = this.dataSVC.imgDataList.imgListBySubjects;
    console.log('newList: ', this.newList);
    

    for (let item of this.newList) {
      if (this.imgSubId == item.subId) {
        this.sub1 = item.imagesSubject;

        for (let img of item.listOfImgUrlBysub) {
          if (this.imgId == img.imgId) {
            this.imgUrlToBedisplay1 = img.imgUrl;
            this.desToBeDisplay1 = img.imgDes;
            this.imgPrice1 = img.price;
            this.photographer1 = img.photographer;
            this.imgLongDes1 = img.imgLongDes;
            this.originalPrice1 = img.price;
          }
        }
      }
    }
  }

  onChange(radio: MatRadioChange) {
    if (radio.value == 'canvas') {
      this.printType = 'קנבס';
      this.buyingSvc.printType = this.printType;
      this.expOnRadio = 'בד הקנבס העוטף את מסגרת התמונה צבוע בלבן';
    } else if (radio.value == 'glass') {
      this.printType = 'זכוכית אקרילית';
      this.buyingSvc.printType = this.printType;
      this.expOnRadio =
        'לא הדבקה! תהליך כימי (דיאסק) באיכות גבוהה מאוד על גבי זכוכית אקרילית איכותית מבריקה או מאט על פי בחירתכם.';
    } else if (radio.value == 'alominiom') {
      this.printType = 'אלומניום';
      this.buyingSvc.printType = this.printType;
      this.expOnRadio =
        'הטמעה/הדבקה על אלומיניום באיכות גבוהה ובאמידות גבוהה מאוד.';
    } else if (radio.value == 'self') {
      this.printType = 'הדפסה עצמית';
      this.buyingSvc.printType = this.printType;
      this.expOnRadio =
        "אנו נשלח את קובץ המקור לבית הדפוס שאתם בחרתם וכך תוכלו להדפיס בכל גודל, על גבי כל משטח כרצונכם (אלומינים מוברש, זכוכית, עץ, פרספקס ועוד').";
      this.self = true;
    }
  }
  addItemToBag() {
    console.log('imgId from img details: ', this.imgId);
    console.log('imgId from img details: ');

    this.buyingSvc.printSize = this.printSize;
    this.buyingSvc.itemAmount += 1;
    let imgId = this.imgId;
    let url = this.imgUrlToBedisplay1;
    let price = this.imgPrice1;
    let originalPrice = this.originalPrice1;
    let numOfItems = (this.buyingSvc.itemNumOfItemToBeDisplayInBag = this.imgNumOfItemsToBeDisplayInBag);
    let des = (this.buyingSvc.itemImgDesToBeDisplayInBag = this.desToBeDisplay1);
    this.buyingSvc.listOfItemToBeDisplay.push([
      {
        id: imgId,
        des: des,
        price: price,
        url: url,
        numOfItems: numOfItems,
        originalPrice: originalPrice,
        printType: this.printType,
        printSize: this.printSize,
        totalPrice: 0
      },
    ]);
    this.flag = false;
    this.fff = true;
  }

  onClose() {
    this.fff = false;
  }
}
