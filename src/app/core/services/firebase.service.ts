import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn: boolean = false;

  constructor(private firebaseAuth: AngularFireAuth) { }

  async signIn(email: string, password: string){
    console.log("Signing In ... ");
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
              .then((res)=>{
                this.isLoggedIn = true;
                let userModel = new UserModel(res.user.email, res.user.displayName)
                localStorage.setItem("user", JSON.stringify(userModel));
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
                let userModel = new UserModel(res.user.email, res.user.displayName)
                localStorage.setItem("user", JSON.stringify(userModel));
                console.log("SignUp Successful");
              });
  }

  logout(){
    console.log("Logging Out ... ");
    localStorage.removeItem("user");
    this.firebaseAuth.signOut();
    console.log("Logged Out Successfully");
  }

  async getCurrentUserDetails(): Promise<UserModel>{
    let userModel = null;

    await this.firebaseAuth.currentUser.then((user)=>{
      userModel = new UserModel(user.email, user.displayName);
      console.log("CURRENT USER: "+JSON.stringify(userModel));
      return userModel;
    })
    .catch((reason)=>{
      console.log("No one logged In");
      return null;
    });
    return await userModel;
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
