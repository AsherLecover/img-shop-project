import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ClinetsService } from 'src/app/servises/clinets.service';
import jwt_decode from 'jwt-decode';
import { BuyingProcessService } from 'src/app/servises/buying-process.service';
import { ImgDataService } from 'src/app/servises/img-data.service';
import { AuthService } from 'src/app/servises/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../sign-up/signup.component';



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
  errorMessageFromServerrr: string[]
  buyingBagPerUser
  userId: number
  totalPrice: number = 0
  userRole: string;




  constructor(
    private fb: FormBuilder,
    public svcClinet: ClinetsService,
    public buyerSvc: BuyingProcessService,
    public dataSVC: ImgDataService,
    public buyingSvc: BuyingProcessService,
    public authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.svcClinet.username$.subscribe((name: string) => { this.userName = name })

    this.userId = this.dataSVC.userId
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submitted = true;

      this.signin();
      setTimeout( ()=> {
        this.dialog.closeAll()
      },1000)


    }
  }

  signin() {
    this.svcClinet.signin(this.registerForm.value.email, this.registerForm.value.password).subscribe(
      data => {

        let payload = this.getDecodedAccessToken(data.accessToken);
        console.log(payload);
        this.svcClinet.userProfileImg$.next(payload.imgProfile)
        
        this.userId = payload.id
        this.dataSVC.userRole$.next(payload.role)
        this.getUserBag();
        this.authService.userSighnedIn.next(true);

      },
      error => {
        this.errorMessageFromServerrr = error
      });
  }



  getUserBag() {
    this.getPaylowdData()
    this.dataSVC.getBag(this.userId).subscribe((data: []) => {
      this.buyingBagPerUser = data
      console.log(' data from sign in', data);
      console.log(' data length', data.length);

      this.buyerSvc.sumOfItems.next(this.buyingBagPerUser.length);
      if (this.buyingBagPerUser.length > 0) {
        this.buyingBagPerUser.forEach(img => {
          this.totalPrice += img.imgdata.price
        });
      }
    });
    this.totalPrice = 0;
    this.buyingBagPerUser = null
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getPaylowdData() {
    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
      this.userId = this.getDecodedAccessToken(
        localStorage.getItem('accessToken')
      ).id;

      this.svcClinet.userName = ' ' + this.getDecodedAccessToken(localStorage.getItem('accessToken')
      ).username;
      this.svcClinet.username$.next(
        this.getDecodedAccessToken(
          localStorage.getItem('accessToken')
        ).username
      );

    }
    return this.userId;
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent);
     dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  closeDialog(){
    this.dialog.closeAll()
  }
}
