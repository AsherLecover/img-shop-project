import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { log } from 'util';
import { ClinetsService, User } from '../../servises/clinets.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../servises/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private authSer: AuthService;
  currentUser: Observable<User>;
  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;
  userName: string;
  public _authService: ClinetsService;

  constructor(private fb: FormBuilder,public dialog: MatDialog,public dialog2: MatDialog,
              public svcClinet:ClinetsService,authSer: AuthService) {
              this.authSer = authSer;
  }

  ngOnInit(): void {
    this.currentUser = this.authSer.currentUser$;

    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });}

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

  onReset() {
    this.submitted = false;
    this.registerForm.valid
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
  signInGoogle() {
    this.authSer.signInWithGoogle();
  }
  signOut() {
    this.authSer.signOut();
  }
}



