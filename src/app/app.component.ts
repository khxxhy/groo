import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor(private userService: UserService, private auth: AuthService, private router: Router) {
  auth.user$.subscribe(user => {
    if (user) {
      userService.save(user); 
      let returnUrl = localStorage.getItem('returnUrl');
      if (returnUrl) {
      this.router.navigateByUrl(returnUrl);}
    };

  });
 }
}
