import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserModel } from '../../models/user-model';
import { NavigationService } from './../../services/navigation.service';
import { LOCALUSERS } from 'src/assets/LOCALUSERS';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;

  hide = true;

  successfullLoginMessage: string;
  failureLoginMessage: string;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _snackBar: MatSnackBar,
              private navigation: NavigationService,
              private router: Router) {
    this.successfullLoginMessage = "Login Success";
    this.failureLoginMessage = "Login Failed";
  }

  ngOnInit(){

  }

  login(){
    // alert(this.loginForm.get('username').value);
    if( LOCALUSERS.username.includes(this.loginForm.get('username').value) &&
        LOCALUSERS.password.includes(this.loginForm.get('password').value)){
          this.onSuccessfullLogin();
          this.router.navigateByUrl("home");
    }
    else{
      this.onFailureLogin();
    }
  }

  cancel(){
    this.navigation.back();
  }

  onSuccessfullLogin(){
    this._snackBar.open(this.successfullLoginMessage, "OK", {
      duration: 2000, panelClass: ['success-snackbar']
    });
  }

  onFailureLogin(){
    this._snackBar.open(this.failureLoginMessage, "OK", {
      duration: 2000, panelClass: ['failure-snackbar']
    });
  }

}
