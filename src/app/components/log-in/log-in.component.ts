import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ctrl:FormControl;
  m: string = ''


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })}
    

    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'שדה חובה';
      }
  
      return this.email.hasError('email') ? 'כתובת דוא"ל אינה חוקית ' : '';
    }

    onSubmit(){}
    a(){
        if( this.registerForm.controls['firstName'].hasError('min')){
            return  'שם פרטי חייב להחיל 2 אותיות'

        
      }
    }

}