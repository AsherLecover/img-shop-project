import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthService} from '../../servises/auth.service';



@Component({
  selector: 'app-aaaa',
  templateUrl: './aaaa.component.html',
  styleUrls: ['./aaaa.component.css']
})
export class AaaaComponent implements OnInit {
  
  private authSer: AuthService;
  currentUser: Observable<User>;

  constructor(authSer: AuthService) { 
  this.authSer = authSer;
  }
  ngOnInit(): void {
    this.currentUser = this.authSer.currentUser$;
  }
  signInGoogle() {
    this.authSer.signInWithGoogle();
  }
  signOut() {
    this.authSer.signOut();
  }

}