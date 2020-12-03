import { Component, Injectable, OnInit } from '@angular/core';
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
import { CanActivate, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  userSighnedIn: boolean = false;

  constructor(
    public dialog: MatDialog,
    public svcClinets: ClinetsService,
    authSer: AuthService,
    public buyingSvc: BuyingProcessService,
    private imgDataService: ImgDataService,
    public managementGuardService: ManagementGuardService
  ) {
    this.authSer = authSer;
  }
  ngOnInit(): void {
    this.managementGuardService.canRouteToMengerPage = false;
    this.authSer.userSighnedIn.subscribe((userSighnedIn: boolean) => {
      this.userSighnedIn = userSighnedIn;
    })
    if (localStorage.getItem("accessToken") != null) {
      this.userSighnedIn = true;
    }

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
          // console.log('bag data in hedder', data);
        }
      )
    })

    this.imgDataService.userRole$.subscribe((role: string) => {
      this.userRole = role;
      console.log('role:::', this.userRole);
      
      if(this.userRole == 'ADMIN'){
        this.managementGuardService.canRouteToMengerPage = true;
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe((result) => { });
  }

  sighnOut() {
    localStorage.removeItem('accessToken')
    this.userSighnedIn = false;
    this.svcClinets.userName = ' אורח';
    this.buyingSvc.sumOfItems.next(0)
    this.userRole = ''
  }
}

@Injectable({ providedIn: 'root' })
export class ManagementGuardService implements CanActivate {
  canRouteToMengerPage: boolean = true;
  alertMassage : boolean = false;
  constructor(public router: Router) { }

  canActivate(): boolean {
    if (this.canRouteToMengerPage == false) {
      console.log(467647764376747);
      

      this.router.navigate(['/pic-sub-main-page']);
      this.alertMassage = true;
      setTimeout( () => {
        this.alertMassage = false;
      },5000)
      return false;
    }
    return true;
  }
}
