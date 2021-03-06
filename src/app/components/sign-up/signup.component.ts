import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { log } from 'util';
import { ClinetsService, User } from '../../servises/clinets.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../servises/auth.service';
import { SignInComponent } from '../sign-in/signin.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private authSer: AuthService;
  currentUser: Observable<User>;
  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;
  userName: string;
  public _authService: ClinetsService;
  errorMessageFromServer:string[] = [];
  errorFromServiceEmailExixt: string = ''



  constructor(private fb: FormBuilder,public dialog: MatDialog,
              public svcClinet:ClinetsService,authSer: AuthService) {
              this.authSer = authSer;
  }

  ngOnInit(): void {
    this.svcClinet.getusernamePaylowdData()

    this.currentUser = this.authSer.currentUser$;

    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
      });}

  onSubmit() {
    this.signup();
  }

  signup(){
    this.svcClinet.signup(
      this.registerForm.value.firstName,
      this.registerForm.value.email,
      this.registerForm.value.password).subscribe(
        data =>{
          if (this.registerForm.valid) {
            this.submitted = true;
            this.userName = this.registerForm.value
            console.log('register datails: ', this.registerForm.value);
          }
        
          this.dialog.closeAll()
          this.openDialog()

        },
        error => {
          console.log('eeee:', error.error);
          
          this.errorFromServiceEmailExixt = error.error.message;
          console.log('error from servic: ', this.errorFromServiceEmailExixt);
          
          
      });
      
  }

  onReset() {
    this.submitted = false;
    this.registerForm.valid
    this.registerForm.reset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignInComponent);
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
  signupWithFacebook(){
    console.log(12121212);
    
    this.authSer.signupWithFacebook().subscribe(
      data => {
        console.log('Facebook',data);
        
      }
    )
  }
  closeDialog(){
    this.dialog.closeAll()
  }
}



