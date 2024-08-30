import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropDownOpen = false;
  user: firebase.default.User | null = null;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user = user)
  }

  toggleDropDown(open: boolean) {
    this.dropDownOpen = open;
  }
  logOut() {
    this.afAuth.signOut();
  }
}