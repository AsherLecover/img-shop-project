import { Injectable } from '@angular/core';
import { ClinetModel } from '../models/clinet-model/clinetModel';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

interface User {
  uid?: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClinetsService {
  clinetList: ClinetModel[]
  userName: string = ' אורח';

  private _afAuth: AngularFireAuth;
  private _afStore: AngularFirestore;
  private _router: Router;

  readonly courentUser$: Observable<User>


  constructor(afAuth: AngularFireAuth, afStore: AngularFirestore, router: Router) {
    this._afAuth = afAuth;
    this._afStore = afStore;
    this._router = router
  }

  public async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this._afAuth.signInWithPopup(provider);
  }

  public async signOutFromGoogle() {
    await this._afAuth.signOut()
  }

}
