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

  successfulSignUpMessage: string;
  successfulLoginMessage: string;
  failureSignUpMessage: string;
  failureLoginMessage: string;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _snackBar: MatSnackBar,
              private navigation: NavigationService,
              private router: Router,
              private firebaseService: FirebaseService) {
    this.successfulLoginMessage = "Login Success";
    this.failureLoginMessage = "Login Failed";

    this.successfulSignUpMessage = "Sign Up Success";
    this.failureSignUpMessage = "Sign Up Failed";
  }

  ngOnInit(){

  }

  async loginWithFirebase(){
    await this.firebaseService
                .signIn(this.loginForm.get('email').value, this.loginForm.get('password').value)
                .then(()=>{
                  this.onSuccessful(this.successfulLoginMessage);
                  this.router.navigateByUrl("home");
                })
                .catch((reason)=>{
                  this.onFailure(this.failureLoginMessage);
                });
  }

  async signUpWithFirebase(){
    await this.firebaseService
                .signUp(this.signUpForm.get('email').value, this.signUpForm.get('password').value)
                .then(()=>{
                  this.onSuccessful(this.successfulSignUpMessage);
                  this.router.navigateByUrl("home");
                })
                .catch((reason)=>{
                  this.onFailure(this.failureSignUpMessage);
                });;
  }

  cancel(){
    this.navigation.back();
  }

  onSuccessful(message: string){
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
