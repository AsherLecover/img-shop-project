import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { BuyingProcessService } from 'src/app/servises/buying-process.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ImgDataService } from 'src/app/servises/img-data.service';
import { ManagementService } from 'src/app/servises/management.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  paymentMode: boolean = false;
  submited = false;
  ctrl: FormControl;
  listOfItemsInBag = [];
  monthList: string[] = [
    'ינואר',
    'פבואר',
    'מרס',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ];
  yearList: string[] = [
    '2025',
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
  ];
  @ViewChild('ccNumber') ccNumberField: ElementRef;
  formIsInValid: boolean = true;
  userId: number;
  buyingBagPerUser;
  totalPrice: number = 0;
  alertBox: boolean = false;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    public buyerSVC: BuyingProcessService,
    public dataSVC: ImgDataService,
    private buyerSvc: BuyingProcessService,
    private managementService: ManagementService
  ) {}

  ngOnInit(): void {
    this.userId = this.dataSVC.userId;
    this.listOfItemsInBag = this.buyerSVC.listOfItemToBeDisplay;

    this.paymentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      addrassSt: ['', [Validators.required, Validators.minLength(2)]],
      addrassCity: ['', [Validators.required, Validators.minLength(2)]],
      postNum: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      cardOwnerName: ['', [Validators.required, Validators.minLength(2)]],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[ 0-9]*$'),
          Validators.minLength(17),
        ],
      ],
      cardValidityMonth: ['', [Validators.required]],
      cardValidityYear: ['', [Validators.required]],
      cvv: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
    });

    this.getUserBag();
  }

  getUserBag() {
    this.dataSVC.getBag(this.userId).subscribe((data: []) => {
      this.buyingBagPerUser = data;
      if (this.buyingBagPerUser.length > 0) {
        this.buyerSvc.sumOfItems.next(data.length);

        this.buyingBagPerUser.forEach((img) => {
          this.totalPrice += img.imgdata.price;
        });
      }
    });
  }

  onSubmit() {
    if (this.paymentForm.invalid) {
      this.formIsInValid = false;
    }

    if (this.paymentForm.valid) {
      this.submited = true;
      this.alertBox = true;
      setTimeout(() => {
        this.message = 'מבצע התקשרות לשרת...';
      }, 1000);

      setTimeout(() => {
        this.message = 'מאמת פרטים מול חברת האשראי...';
        this.paymentMode = true
      }, 5500);

      setTimeout(() => {
        this.message = 'מבצע תשלום...';
        this.paymentMode = true
      }, 8500);
      setTimeout(() => {
        this.paymentMode = false;
        this.message = 'התשלום בוצע בהצלחה! תודה שרכשת מאיתנו PicPicture';
      }, 11500);
      setTimeout(() => {
        this.message = 'פרטי הרכישה נשלחו אליך לאימייל';
      }, 15000);
      setTimeout(() => {
        this.alertBox = false;
        this.message = ''
      }, 21000);

      // console.log('form: ', this.paymentForm.value);
      this.sendEmailToClinet(this.paymentForm.value, this.buyingBagPerUser);
    }
  }

  sendEmailToClinet(paymentForm, userBag) {
    let imgsData = [];
    userBag.forEach((img) => {
      let { imgdata, ...rest } = img;
      rest = { ...rest, ...imgdata };
      rest.totalPrice = this.totalPrice;
      imgsData.push(rest);
    });

    return this.managementService
      .sendEmailToClinet(paymentForm, imgsData)
      .subscribe((data) => {});
  }

  cardNumberSpacing() {
    const input = this.ccNumberField.nativeElement;
    const { selectionStart } = input;
    const { cardNumber } = this.paymentForm.controls;

    let trimmedCardNum = cardNumber.value.replace(/\s+/g, '');

    if (trimmedCardNum.length > 16) {
      trimmedCardNum = trimmedCardNum.substr(0, 16);
    }

    /* Handle American Express 4-6-5 spacing format */
    const partitions =
      trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37')
        ? [4, 6, 5]
        : [4, 4, 4, 4];

    const numbers = [];
    let position = 0;
    partitions.forEach((partition) => {
      const part = trimmedCardNum.substr(position, partition);
      if (part) numbers.push(part);
      position += partition;
    });

    cardNumber.setValue(numbers.join(' '));

    /* Handle caret position if user edits the number later */
    if (selectionStart < cardNumber.value.length - 1) {
      input.setSelectionRange(selectionStart, selectionStart, 'none');
    }
  }

  onClose() {
    this.alertBox = false;
  }
}
