import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { log } from 'util';
import { SocialAuthService , SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { LogInComponent } from './components/log-in/log-in.component';
import { ClinetsService } from './servises/clinets.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pic Pictre';
  panelOpenState = false;
  userName:string = ''


  constructor(public dialog: MatDialog, public svcClinetsList:ClinetsService ){}

  openDialog() {
    const dialogRef = this.dialog.open(LogInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

 

 
}
