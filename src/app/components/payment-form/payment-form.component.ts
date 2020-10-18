import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { BuyingProcessService } from 'src/app/servises/buying-process.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm: FormGroup;
  submited = false;
  ctrl: FormControl;
  listOfItemsInBag = [];
  monthList:string[] = ['ינואר', 'פבואר', 'מרס', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר', ]
  yearList:string[] = ['2025','2024','2023','2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008']


  constructor(private fb: FormBuilder, public buyerSVC: BuyingProcessService) { }

  ngOnInit(): void {
    
    this.listOfItemsInBag = this.buyerSVC.listOfItemToBeDisplay;
 
    this.paymentForm = this.fb.group({
      fullName: ['',[Validators.required, Validators.minLength(2)]],
      email:  ['',[Validators.required,Validators.email]],
      addrassSt: ['',[Validators.required, Validators.minLength(2)]],
      addrassCity: ['',[Validators.required, Validators.minLength(2)]],
      postNum: ['',[Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+$')]],
      phone: ['',[Validators.required,Validators.minLength(9), Validators.pattern('^[0-9]+$')]],

      cardOwnerName: ['',[Validators.required, Validators.minLength(2)]],
      cardNum:  ['',[Validators.required,Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]+$')]],
      cardValidityMonth: ['',[Validators.required]],
      cardValidityYear: ['',[Validators.required]],
      cvv: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(3), Validators.pattern('^[0-9]+$')]],
      id: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(9), Validators.pattern('^[0-9]+$')]],
    });
  }
  onSubmit(){
    console.log('sumbut form: out if ', this.submited);
    console.log('form', this.paymentForm.value);
    
    if(this.paymentForm.valid){
      this.submited = true;
      console.log('sumbut form: in if', this.submited);
    }
  }

}
