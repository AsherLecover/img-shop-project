import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../sign-up/signup.component';

import { Observable } from 'rxjs';
import { User } from 'firebase';
import { ClinetsService } from '../../servises/clinets.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // panelOpenState = false; 
  currentUser$:  Observable<User>;

  public _authService: ClinetsService;




  constructor(public svcClinet:ClinetsService) { 
    this._authService = svcClinet;

  }

  ngOnInit(): void {
    this.currentUser$ = this._authService.courentUser$

  }

  signInWithGoogle(){
    this._authService.signInWithGoogle();
    console.log('asher')
  }

  
}


