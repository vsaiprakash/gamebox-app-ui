import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserModel } from '../../models/user-model';
import { NavigationService } from './../../services/navigation.service';
import { LOCALUSERS } from 'src/assets/LOCALUSERS';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;

  hide = true;

  successfullSignUpMessage: string;
  successfullLoginMessage: string;
  failureSignUpMessage: string;
  failureLoginMessage: string;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _snackBar: MatSnackBar,
              private navigation: NavigationService,
              private router: Router,
              private firebaseService: FirebaseService) {
    this.successfullLoginMessage = "Login Success";
    this.failureLoginMessage = "Login Failed";

    this.successfullSignUpMessage = "Sign Up Success";
    this.failureSignUpMessage = "Sign Up Failed";
  }

  ngOnInit(){

  }

  async loginWithFirebase(){
    await this.firebaseService
                .signIn(this.loginForm.get('username').value, this.loginForm.get('password').value)
                .then(()=>{
                  this.onSuccessfull(this.successfullLoginMessage);
                  this.router.navigateByUrl("home");
                })
                .catch((reason)=>{
                  this.onFailure(this.failureLoginMessage);
                });
  }

  async signUpWithFirebase(){
    await this.firebaseService
                .signUp(this.signUpForm.get('username').value, this.signUpForm.get('password').value)
                .then(()=>{
                  this.onSuccessfull(this.successfullSignUpMessage);
                  this.router.navigateByUrl("home");
                })
                .catch((reason)=>{
                  this.onFailure(this.failureSignUpMessage);
                });;
  }

  login(){
    // alert(this.loginForm.get('username').value);
    if( LOCALUSERS.username.includes(this.loginForm.get('username').value) &&
        LOCALUSERS.password.includes(this.loginForm.get('password').value)){
          this.onSuccessfull(this.successfullLoginMessage);
          this.router.navigateByUrl("home");
    }
    else{
      this.onFailure(this.failureLoginMessage);
    }
  }

  cancel(){
    this.navigation.back();
  }

  onSuccessfull(message: string){
    this._snackBar.open(message, "OK", {
      duration: 2000, panelClass: ['success-snackbar']
    });
  }

  onFailure(message: string){
    this._snackBar.open(message, "OK", {
      duration: 2000, panelClass: ['failure-snackbar']
    });
  }

}
