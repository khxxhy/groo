import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }
  
login(){
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  localStorage.setItem('returnUrl', returnUrl);

  const googleLogin = new firebase.auth.GoogleAuthProvider(); 
  this.afAuth.signInWithPopup(googleLogin);
}
logOut(){
  this.afAuth.signOut();
}
}
