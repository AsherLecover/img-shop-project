import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  newRegForm = this.fb.group({
    name:   ['', Validators.required],
    age:    ['', [Validators.pattern("^[0-9]*$"), Validators.min(3), Validators.max(17)]],
    girraf: ['', [Validators.required, Validators.minLength(2)]],
    email:  ['', Validators.email],
  })

  ngOnInit(): void {
  }

}
