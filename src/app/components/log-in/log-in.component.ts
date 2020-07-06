import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { log } from 'util';
import { ClinetsService } from '../../servises/clinets.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;
  userName: string;
  private _authService: ClinetsService

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialog2: MatDialog,
    public svcClinet:ClinetsService
  ) {
    this._authService = svcClinet;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required,Validators.minLength(8)],
        acceptTerms: [false, Validators.requiredTrue]});}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 

  getUserName(){
    console.log(this.registerForm.value.firstName);
    this.svcClinet.userName = ' ' + this.registerForm.value.firstName;
  }
  signInWithGoogle(){
    this._authService.signInWithGoogle();
    console.log('asher')
  }
    
  

  
  
}
