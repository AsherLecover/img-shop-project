import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { ClinetsService } from 'src/app/servises/clinets.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;
  userName: string;
  errorMessageFromServerrr:string[]

  constructor(
    private fb: FormBuilder,
    public svcClinet:ClinetsService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submitted = true;
      // this.svcClinet.userName = ' ' + this.registerForm.value.firstName;
      // this.userName = this.registerForm.value
      this.signin()
    }
  }

  signin(){
    this.svcClinet.signin(this.registerForm.value.email, this.registerForm.value.password).subscribe(
      data =>{
        console.log('succsessssssssssssssssss', data);
        
      },
      error => {
        this.errorMessageFromServerrr = error

        console.log('error from server: ', this.errorMessageFromServerrr);
        
    });

    

    
  }

}
