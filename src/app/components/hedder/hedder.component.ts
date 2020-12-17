import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../../servises/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { ClinetsService } from '../../servises/clinets.service';
import { BuyingProcessService } from '../../servises/buying-process.service';

import { ImgDataService } from 'src/app/servises/img-data.service';
import { CanActivate, Router } from '@angular/router';
import { SignInComponent } from '../sign-in/signin.component';
import {
  PrivateAreaService,
  UserModel,
} from 'src/app/servises/private-area.service';
import jwt_decode from 'jwt-decode';

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
  userProfileImg: string = '';
  userId: number;
  user: UserModel;

  constructor(
    public dialog: MatDialog,
    public svcClinets: ClinetsService,
    authSer: AuthService,
    public buyingSvc: BuyingProcessService,
    private imgDataService: ImgDataService,
    public managementGuardService: ManagementGuardService,
    private privateAreaService: PrivateAreaService
  ) {
    this.user = this.getDecodedAccessToken(localStorage.getItem('accessToken'));
    console.log('hhaddeerrr::', this.user);
    

    this.authSer = authSer;
    if (this.user) {
      console.log(57647457547457542675, 'dfhfdhfdshd');
      
      this.userId = this.user.id;
      this.userProfileImg = `https://picpicture.herokuapp.com/private-area/getFile/${this.user.id}`;
    }

  }
  ngOnInit(): void {

    this.svcClinets.userProfileImg$.subscribe((data: string) => {
      this.userProfileImg = data;
    });

    this.managementGuardService.canRouteToMengerPage = false;
    this.authSer.userSighnedIn.subscribe((userSighnedIn: boolean) => {
      this.userSighnedIn = userSighnedIn;
    });
    if (localStorage.getItem('accessToken') != null) {
      this.userSighnedIn = true;
    }

    // google firebase auth
    if (this.authSer.currentUser$) {
      this.currentUser = this.authSer.currentUser$;
    } else {
      this.userName = this.svcClinets.userName;
    }
    // lowd the bag length/num of items
    this.imgDataService.getPaylowdData().then((num) => {
      this.imgDataService.getBagInHomePage(num).subscribe((data: []) => {
        // this.sumOfItems = data.length;
        this.buyingSvc.sumOfItems.subscribe((num: number) => {
          this.sumOfItems = num;
        });
        // console.log('bag data in hedder', data);
      });
    });

    this.imgDataService.userRole$.subscribe((role: string) => {
      this.userRole = role;

      if (this.userRole == 'ADMIN') {
        this.managementGuardService.canRouteToMengerPage = true;
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  sighnOut() {
    localStorage.removeItem('accessToken');
    this.userSighnedIn = false;
    this.svcClinets.userName = ' אורח';
    this.buyingSvc.sumOfItems.next(0);
    this.userRole = '';
    this.svcClinets.userProfileImg$.next('');
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}

@Injectable({ providedIn: 'root' })
export class ManagementGuardService implements CanActivate {
  canRouteToMengerPage: boolean = true;
  alertMassage: boolean = false;
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (this.canRouteToMengerPage == false) {
      console.log(467647764376747);

      this.router.navigate(['/pic-sub-main-page']);
      this.alertMassage = true;
      setTimeout(() => {
        this.alertMassage = false;
      }, 5000);
      return false;
    }
    return true;
  }
}
