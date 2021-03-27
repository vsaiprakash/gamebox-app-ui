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
                sessionStorage.setItem("user", JSON.stringify(res.user));
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
                sessionStorage.setItem("user", JSON.stringify(res.user));
              });
  }

  logout(){
    this.firebaseAuth.signOut();
    sessionStorage.removeItem("user");
  }


}
