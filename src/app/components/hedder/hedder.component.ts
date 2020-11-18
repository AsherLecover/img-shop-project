import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servises/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { ClinetsService } from '../../servises/clinets.service';
import { BuyingProcessService } from '../../servises/buying-process.service';



import home from "@iconify/icons-mdi/home";
import accountCheck from "@iconify/icons-mdi/account-check";
import { SignupComponent } from '../sign-up/signup.component';

@Component({
  selector: 'app-hedder',
  templateUrl: './hedder.component.html',
  styleUrls: ['./hedder.component.css']
})
export class HedderComponent implements OnInit {
  title = 'Pic Pictre';
  panelOpenState = false;
  userName:string = ''
  private authSer: AuthService;
  currentUser: Observable<User>;
  sumOfItems: number;

  constructor(
    public dialog: MatDialog,
    public svcClinets:ClinetsService,
    authSer: AuthService,
    public buyingSvc: BuyingProcessService,
    ){

    this.authSer = authSer;
  }
  ngOnInit(): void {
    
    if(this.authSer.currentUser$){
      this.currentUser = this.authSer.currentUser$;
    }
    else{
      this.userName =  this.svcClinets.userName;
    }
    

  }

  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
