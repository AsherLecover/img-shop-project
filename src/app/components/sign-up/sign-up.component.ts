import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { ClinetsService } from 'src/app/servises/clinets.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;
  userName: string;

  constructor(
    private fb: FormBuilder,
    public svcClinet:ClinetsService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  onSubmit() {
    console.log("(this.submitted",this.submitted)
    if (this.registerForm.valid) {
      this.submitted = true;
      console.log(this.submitted)
      console.log('form::',this.registerForm.value.firstName);
      this.svcClinet.userName = ' ' + this.registerForm.value.firstName;

      
      this.userName = this.registerForm.value
    }
  }

}
