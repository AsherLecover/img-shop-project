import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactUsService } from '../../servises/contact-us.service'


@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private builder: FormBuilder, private contactUsService: ContactUsService) { }

  ngOnInit() {
    this.contactUsForm = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    console.log(this.contactUsForm.value);
    this.contactUsService.contactUsMassage(this.contactUsForm.value).subscribe( data => {
      console.log('data back from server;', data);
      if(data)this.contactUsForm.reset()
      
    })
  
  }

  cancel() {
    this.contactUsForm.reset()
  }
}