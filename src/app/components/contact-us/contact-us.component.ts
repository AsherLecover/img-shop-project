import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'


@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.contactUsForm = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required]),
      massage: new FormControl('', [Validators.required])
    });
  }


  onSubmit() {
    console.log(this.contactUsForm.value)
  //   this.contact.PostMessage(FormData)
  //     .subscribe(response => {
  //       location.href = 'https://mailthis.to/confirm'
  //       console.log(response)
  //     }, error => {
  //       console.warn(error.responseText)
  //       console.log({ error })
  //     })
  }

  cancel() {
    this.contactUsForm.reset()
  }
}