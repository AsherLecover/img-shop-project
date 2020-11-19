import { Injectable } from '@angular/core';
import { ClinetModel } from '../models/clinet-model/clinetModel';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';


export interface User {
  uid?: string;
  email: string;
  display_name: string;
  image_url: string;
  roles: any;
}

@Injectable({
  providedIn: 'root',
})
export class ClinetsService {
  clinetList: ClinetModel[];
  userName: string = ' אורח';

  private _afAuth: AngularFireAuth;
  private _afStore: AngularFirestore;
  private _router: Router;
  readonly courentUser$: Observable<any>;
  username$ = new Subject();


  constructor(
    afAuth: AngularFireAuth,
    afStore: AngularFirestore,
    router: Router,
    private http: HttpClient
  ) {
    this._afAuth = afAuth;
    this._afStore = afStore;
    this._router = router;

    this.courentUser$ = this._afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this._afStore.doc(`${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  //--------from here working on nestjs side ------------

  signup(username: string, email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup`, { username,email, password })
  }

  signin(email: string, password: string) {

    let headers = new HttpHeaders()
    headers = headers.set(`Authorization`,`Bearer ${localStorage.getItem("accessToken")}` )
    
    return this.http.post<any>(`${environment.apiUrl}/auth/signin`,

    { headers , email, password }).pipe( 
      map ( (token) => {
        console.log('token yuri!!!', token);
        localStorage.setItem('accessToken', token.accessToken);
        return token
      } )
    )
  }

  getusernamePaylowdData(){
    if (
      this.getDecodedAccessToken(localStorage.getItem('accessToken')) != null
    ) {
    

      this.userName = ' ' + this.getDecodedAccessToken(localStorage.getItem('accessToken')
      ).username;
      this.username$.next(
        this.getDecodedAccessToken(
          localStorage.getItem('accessToken')
        ).username
      );
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }



  //-----------------------------------------------------

  public async signInWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this._afAuth.signInWithPopup(provider);

    const userRef: AngularFirestoreDocument = this._afStore.doc(
      `users/${credential.user.uid}/`
    );

    const userData: User = {
      uid: credential.user.uid,
      display_name: credential.user.displayName,
      email: credential.user.email,
      image_url: credential.user.photoURL,
      roles: { member: true },
    };
    console.log(userData);
    return userRef.set(userData, { merge: true });
  }

  public async signOutFromGoogle() {
    await this._afAuth.signOut();
  }
}
