import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 
  dropDownOpen = false;
  constructor(public auth: AuthService) {
  }

  toggleDropDown(open: boolean) {
    this.dropDownOpen = open;
  }
  logOut() {
this.auth.logOut()
  }
}