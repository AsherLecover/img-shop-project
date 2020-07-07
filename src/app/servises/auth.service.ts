import { Injectable } from '@angular/core';
import { ClinetModel } from '../models/clinet-model/clinetModel';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { User } from './clinets.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  readonly currentUser$: Observable<any>;
  private _afAuth: AngularFireAuth;
  private _afStore: AngularFirestore;
  private _router: Router;

  constructor(afAuth: AngularFireAuth, afStore: AngularFirestore, router: Router) {

    this._afAuth = afAuth;
    this._afStore = afStore;
    this._router = router;

    this.currentUser$ = this._afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this._afStore.doc(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

  }
  public async signInWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this._afAuth.signInWithPopup(provider);
    console.log("this user new ",credential);
    

    const userRef: AngularFirestoreDocument<User> = this._afStore.doc(`user/${credential.user.uid}/`);

    const userData: User = {
      uid: credential.user.uid,
      display_name: credential.user.displayName,
      email: credential.user.email,
      image_url: credential.user.photoURL,
      roles: { member: true }
    };

    return userRef.set(userData, { merge: true });
  }

  public async signOut() {
    await this._afAuth.signOut();
    await this._router.navigate(['/home'])
  }
}