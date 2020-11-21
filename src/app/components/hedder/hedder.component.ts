import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servises/auth.service';
import { Observable, Subject } from 'rxjs';
import { User } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { ClinetsService } from '../../servises/clinets.service';
import { BuyingProcessService } from '../../servises/buying-process.service';

import home from '@iconify/icons-mdi/home';
import accountCheck from '@iconify/icons-mdi/account-check';
import { SignupComponent } from '../sign-up/signup.component';
import { ImgDataService } from 'src/app/servises/img-data.service';
import data from '@iconify/icons-mdi/home';

@Component({
  selector: 'app-hedder',
  templateUrl: './hedder.component.html',
  styleUrls: ['./hedder.component.css'],
})
export class HedderComponent implements OnInit {
  title = 'Pic Pictre';
  panelOpenState = false;
  userName: string = null;
  private authSer: AuthService;
  currentUser: Observable<User>;
  sumOfItems: number = 0;
  userRole: string;

  constructor(
    public dialog: MatDialog,
    public svcClinets: ClinetsService,
    authSer: AuthService,
    public buyingSvc: BuyingProcessService,
    private imgDataService: ImgDataService
  ) {
    this.authSer = authSer;
  }
  ngOnInit(): void {

    // google firebase auth
    if (this.authSer.currentUser$) {
      this.currentUser = this.authSer.currentUser$;
    } else {
      this.userName = this.svcClinets.userName;
    }
    // lowd the bag length/num of items 
    this.imgDataService.getPaylowdData().then(num => {
      this.imgDataService.getBagInHomePage(num).subscribe(
        (data: []) => {
          // this.sumOfItems = data.length;
          this.buyingSvc.sumOfItems.subscribe((num: number) => { this.sumOfItems = num })
          console.log('bag data in hedder', data);
        }
      )
    })

    this.imgDataService.userRole$.subscribe( (role:string) => {
      this.userRole = role
      console.log('ttttt', role);
      
    })

    

  }

  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe((result) => { });
  }
}
