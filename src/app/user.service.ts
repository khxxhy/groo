import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import 'firebase/auth';  // Import Firebase auth

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFireDatabase) { }

  async save(user: firebase.User): Promise<void> {
    try {
      await this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
      console.log('User data saved successfully.');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }
  
}
