import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImgSubListService } from '../../servises/img-sub-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';
import { MatExpansionPanel } from '@angular/material/expansion';
import { BuyingProcessService } from '../../servises/buying-process.service';
import { ImgDataService } from '../../servises/img-data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import jwt_decode from 'jwt-decode';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css'],
})
export class ImageDetailsComponent implements OnInit {
  imagesList = [];
  public img_id;
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
  img_idToBeDisplayInBag: number;
  imgPriceToBedisplay: number;
  imgNumOfItemsToBeDisplayInBag: number = 1;
  imgDesOfItemsToBeDisplayInBag: string;
  newList = [];
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
  alertBox = false;
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

  imgDataFromServer;
  userEmail: string;
  userId: number;
  imgDetailsForm: FormGroup;
  formIsInValid: boolean = true;

  constructor(
    public svc: ImgSubListService,
    private route: ActivatedRoute,
    public buyingSvc: BuyingProcessService,
    public dataSVC: ImgDataService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.link = this.router.url;
    let url = `whatsapp://send?text= PicPicture רציתי לשתף אותך בתמונה יפה מהאתר http://localhost:4200/${this.link}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this.imgDetailsForm = this.fb.group({
      printType: ['', [Validators.required]],
      printSize: ['', [Validators.required]],
    });
    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
      this.userEmail = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).email;

      this.dataSVC.userId = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).id;
      this.userId = this.dataSVC.userId;
    }

    this.imgSubId = parseInt(this.route.snapshot.paramMap.get('subId'));
    this.img_id = parseInt(this.route.snapshot.paramMap.get('id'));

    //---------------------------------
    this.dataSVC.subId = this.imgSubId;
    this.dataSVC.img_id = this.img_id;

    this.dataSVC.getImg().subscribe((data) => {
      this.imgDataFromServer = data;
      console.log(data);
    });

    //---------------------------------
    this.newList = this.dataSVC.imgDataList.imgListBySubjects;

  }

  addImgToLoacalList() {
    // if (this.printSize != '' && this.printType != '') {
    if (this.userEmail != null) {
      this.dataSVC.imgListToBePushToServer.push({
        user_id: this.dataSVC.userId,
        email: this.userEmail,
        img_id: this.imgDataFromServer.id,
        numOfItems: 1,
        printSize: this.printSize,
        printType: this.printType,
      });
      //  }
      this.newList = this.dataSVC.imgListToBePushToServer;
      this.dataSVC.addImgListToServer(this.newList).subscribe((data) => {
        this.buyingSvc.bagListPerUserFromServer = data
      });
    }

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  

  onChange(radio: MatRadioChange) {
    if (radio.value == 'CANVAS') {
      console.log('radio: ', radio);

      this.printType = 'CANVAS';
      this.self = false;
      // this.buyingSvc.printType = this.printType;
      this.expOnRadio = 'בד הקנבס העוטף את מסגרת התמונה צבוע בלבן';
    } else if (radio.value == 'ACRYLIC_GLASS') {
      this.self = false;
      this.printType = 'ACRYLIC_GLASS';
      // this.buyingSvc.printType = this.printType;
      this.expOnRadio =
        'לא הדבקה! תהליך כימי (דיאסק) באיכות גבוהה מאוד על גבי זכוכית אקרילית איכותית מבריקה או מאט על פי בחירתכם.';
    } else if (radio.value == 'ALUMINUM') {
      this.self = false;
      this.printType = 'ALUMINUM';
      // this.buyingSvc.printType = this.printType;
      this.expOnRadio =
        'הטמעה/הדבקה על אלומיניום באיכות גבוהה ובאמידות גבוהה מאוד.';
    } else if (radio.value == 'SELF') {
      this.printType = 'SELF';
      // this.buyingSvc.printType = this.printType;
      this.expOnRadio =
        "אנו נשלח את קובץ המקור לבית הדפוס שאתם בחרתם וכך תוכלו להדפיס בכל גודל, על גבי כל משטח כרצונכם (אלומינים מוברש, זכוכית, עץ, פרספקס ועוד').";
      this.self = true;
    }
  }
  addItemToBag() {
    this.buyingSvc.printSize = this.printSize;
    this.buyingSvc.itemAmount += 1;
    let img_id = this.img_id;
    let url = this.imgUrlToBedisplay1;
    let price = this.imgPrice1;
    let originalPrice = this.originalPrice1;
    let numOfItems = (this.buyingSvc.itemNumOfItemToBeDisplayInBag = this.imgNumOfItemsToBeDisplayInBag);
    let des = (this.buyingSvc.itemImgDesToBeDisplayInBag = this.desToBeDisplay1);
    this.buyingSvc.listOfItemToBeDisplay.push([
      {
        id: img_id,
        des: des,
        price: price,
        url: url,
        numOfItems: numOfItems,
        originalPrice: originalPrice,
        printType: this.printType,
        printSize: this.printSize,
        totalPrice: 0,
      },
    ]);
  }

  onSubmit() {
    if (this.imgDetailsForm.valid) {
      this.formIsInValid = false;
      this.flag = false;
      this.alertBox = true;
      this.addImgToLoacalList();
      this.addItemToBag();

      console.log('on submit: ', this.imgDetailsForm.value);
    }
  }

 

  onClose() {
    this.alertBox = false;
  }
}
