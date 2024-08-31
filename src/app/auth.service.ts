import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }
login(){
  const googleLogin = new firebase.auth.GoogleAuthProvider(); 
  this.afAuth.signInWithPopup(googleLogin);
}
logOut(){
  this.afAuth.signOut();
}
}
