import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LOCALUSERS } from 'src/assets/LOCALUSERS';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn: boolean = false;
  loggedInUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

  constructor(private firebaseAuth: AngularFireAuth) { }

  async signIn(email: string, password: string){
    console.log("Signing In ... ");
    // For Testing without Login
    // this.loggedInUser.next(LOCALUSERS);
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
              .then((res)=>{
                this.isLoggedIn = true;
                let user = new UserModel(res.user.email, res.user.displayName, res.user.photoURL);
                this.loggedInUser.next(user);
                // this.loggedInUser = 
                console.log("Signed In Successfully");
              })
              .catch((reason)=>{
                console.log("ERROR REASON: "+JSON.stringify(reason));
              });
  }

  async signUp(email: string, password: string){
    console.log("Signing Up ... ");
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
              .then((res)=>{
                this.isLoggedIn = true;
                let userModel = new UserModel(res.user.email, res.user.email, LOCALUSERS.photoUrl)
                res.user.updateProfile({
                  displayName: res.user.email,
                  photoURL: LOCALUSERS.photoUrl
                }).then(()=>{
                  console.log("SignUp Successful");
                });
              });
  }

  logout(){
    console.log("Logging Out ... ");
    this.firebaseAuth.signOut();
    this.loggedInUser.next(null);
    console.log("Logged Out Successfully");
  }

  getCurrentUserDetails(): Observable<UserModel>{

    // For Testing without Login
    // return of(LOCALUSERS);

    return this.loggedInUser.asObservable().pipe(
      map((user)=>{
        //default photo incase not available
        if(user.photoUrl==null){
          user.photoUrl = LOCALUSERS.photoUrl;
        }
        //use email incase display name is not available
        if(user.displayName==null){
          user.displayName = user.email;
        }
        return user;
      })
    );
  }

  updateCurrentUserDisplayName(displayName: string){
    this.firebaseAuth.currentUser.then((user)=>{
      user.updateProfile({
        "displayName": displayName
      });
    });
  }

  updateCurrentUserPhotoURL(photoURL: string){
    this.firebaseAuth.currentUser.then((user)=>{
      user.updateProfile({
        "photoURL": photoURL
      });
    });
  }
}
