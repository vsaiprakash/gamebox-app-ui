import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn: boolean = false;

  constructor(private firebaseAuth: AngularFireAuth) { }

  async signIn(email: string, password: string){
    console.log("USERNAME: "+email+" PASSWORD: "+password);
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
              .then((res)=>{
                this.isLoggedIn = true;
              })
              .catch((reason)=>{
                console.log("ERROR REASON: "+JSON.stringify(reason));
              });
  }

  async signUp(email: string, password: string){
    console.log("USERNAME: "+email+" PASSWORD: "+password);
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
              .then((res)=>{
                this.isLoggedIn = true;
              });
  }

  logout(){
    this.firebaseAuth.signOut();
  }

  getCurrentUserDetails(){
    this.firebaseAuth.currentUser.then((user)=>{
      let userDetails = {
        displayName: user.displayName,
        email: user.email
        // photoUrl: user.photoURL
      }
      console.log("CURRENT USER: "+JSON.stringify(userDetails));
    })
    .catch((reason)=>{
      console.log("No one logged In, "+JSON.stringify(reason));
    })
  }

  updateCurrentUserDisplayName(displayName: string){
    this.firebaseAuth.currentUser.then((user)=>{
      user.updateProfile({
        "displayName": displayName
      })
      // this.firebaseAuth.updateCurrentUser()
    });
  }
}
