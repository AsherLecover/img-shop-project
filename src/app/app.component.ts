import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { log } from 'util';
import { SocialAuthService , SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { LogInComponent } from './components/log-in/log-in.component';
import { ClinetsService, User } from './servises/clinets.service';
import { AuthService } from './servises/auth.service';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Pic Pictre';

  constructor(){ }

  ngOnInit(): void {}
  
}
