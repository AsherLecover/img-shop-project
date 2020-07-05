import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { log } from 'util';
import { SocialAuthService , SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { LogInComponent } from './components/log-in/log-in.component';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mat';
  panelOpenState = false;

  constructor(public dialog: MatDialog ){}

  openDialog() {
    const dialogRef = this.dialog.open(LogInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 

 
}
