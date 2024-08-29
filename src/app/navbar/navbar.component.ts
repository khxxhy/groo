import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  dropDownOpen = false;

toggleDropDown(open: boolean) {
  this.dropDownOpen = open;
}
}