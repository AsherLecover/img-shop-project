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


  constructor(private fb: FormBuilder, public buyerSVC: BuyingProcessService) { }

  ngOnInit(): void {
    
    this.listOfItemsInBag = this.buyerSVC.listOfItemToBeDisplay;
    console.log('listOfItemsInBag::::', this.listOfItemsInBag);

    this.paymentForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      companyName: ['', Validators.minLength(2)],
      id: ['',[Validators.required,Validators.minLength(9), Validators.pattern('^[0-9]+$')]],
      addrassSt: ['',[Validators.required, Validators.minLength(2)]],
      addrassCity: ['',[Validators.required, Validators.minLength(2)]],
      postNum: ['',[Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+$')]],
      phone: ['',[Validators.required,Validators.minLength(9), Validators.pattern('^[0-9]+$')]],
      email:  ['',[Validators.required,Validators.email]] 
    });
  }
  onSubmit(){
    if(this.paymentForm.valid){
      this.submited = true;
    }
  }

}
