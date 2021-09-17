import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';

import { LOCALUSERS } from 'src/assets/LOCALUSERS';
import { UserModel } from '../models/user-model';
import { UserDBService } from './userdb.service';

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
                this.loggedInUser.next(this.useDefaultUserDetails(user));
                console.log("Signed In Successfully");
              })
              .catch((reason)=>{
                console.log("ERROR REASON: "+JSON.stringify(reason));
              });

  }

  async signInV2(email: string, password: string){
    console.log("Signing In ... ");
    // For Testing without Login
    // this.loggedInUser.next(LOCALUSERS);
    // let prom = (from(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(
    //   exhaustMap(value => {
    //     // console.log("exhausting value: "+JSON.stringify(value));
    //     return this.userdb.getUser(value.user.email);
    //   })
    // )).toPromise();
    // console.log("Generated promise: "+JSON.stringify(prom));
    // console.log("Before promise");
    // await prom.then((res)=>{
    //             console.log("UserModel "+JSON.stringify(res));
    //             this.isLoggedIn = true;
    //             this.loggedInUser.next(this.useDefaultUserDetails(res));
    //             // this.loggedInUser = 
    //             console.log("Signed In Successfully");
    //           },
    //           (err)=>{
    //             console.log("ERROR IN PROMISE: "+JSON.stringify(err));
    //           })
    //           .catch((reason)=>{
    //             console.log("ERROR REASON: "+JSON.stringify(reason));
    //           });

    // this.loggedInUser.next(from(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(
    //             exhaustMap(value => {
    //               // console.log("exhausting value: "+JSON.stringify(value));
    //               return this.userdb.getUser(value.user.email);
    //             })
    //           ) as any);
    
    // return from(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(
    //             exhaustMap(value => {
    //               // console.log("exhausting value: "+JSON.stringify(value));
    //               return this.userdb.getUser(value.user.email);
    //             })
    //           )
    //           .subscribe(res =>{
    //             console.log("Res: "+JSON.stringify(res));
    //             this.loggedInUser.next(res as any);
    //           })
  }

  async signUp(email: string, password: string){
    console.log("Signing Up ... ");
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
              .then((res)=>{
                this.isLoggedIn = true;
                let userModel = new UserModel(res.user.email, res.user.email, LOCALUSERS.photoURL)
                res.user.updateProfile({
                  displayName: res.user.email,
                  photoURL: LOCALUSERS.photoURL
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

    // revert to this version incase any issues in above method
    return this.loggedInUser.asObservable().pipe(
      map((user)=>{
        if(user){
          //default photo incase not available
          if (user.photoURL == null) {
            user.photoURL = LOCALUSERS.photoURL;
          }
          //use email incase display name is not available
          if (user.displayName == null) {
            user.displayName = user.email;
          }
        }
        return user;
      })
    );
  }

  // getCurrentUserPromise(){
  //   return this.firebaseAuth.currentUser.then((user)=>{
  //     this.loggedInUser.next(user);
  //   });
  // }

  useDefaultUserDetails(user: any) :UserModel{
    //default photo incase not available
    if (user.photoURL == null) {
      user.photoURL = LOCALUSERS.photoURL;
    }
    //use email incase display name is not available
    if (user.displayName == null) {
      user.displayName = user.email;
    }
    return user;
  }

  updateCurrentUserDisplayName(displayName: string){
    // this.firebaseAuth.user.subscribe((user)=>{
    //   user.updateProfile({
    //     "displayName": displayName
    //   }).then(success => {
    //     console.log("Updated user: "+JSON.stringify(success));
    //   },
    //   failure => {
    //     console.log("Failure: "+JSON.stringify(failure));
    //   });
    // })
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
