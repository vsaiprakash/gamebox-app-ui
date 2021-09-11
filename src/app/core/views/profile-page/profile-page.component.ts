import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALUSERS } from './../../../../assets/LOCALUSERS';
import { UserModel } from '../../models/user-model';
import { FirebaseService } from '../../services/firebase.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: UserModel;
  editDisplayNameFlag: boolean;
  editEmailFlag: boolean;

  constructor(private firebaseService: FirebaseService,
              private navigation: NavigationService,
              private router: Router) {
    this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.editDisplayNameFlag = false;
    this.editEmailFlag = false;
  }

  openLogin() {
    this.router.navigateByUrl('login');
  }

  back(){
    this.navigation.back();
  }

  editDisplayName(){
    this.editDisplayNameFlag = true;
  }

  saveDisplayName(){
    this.editDisplayNameFlag = false;
    this.firebaseService.updateCurrentUserDisplayName(this.user.displayName);
  }

  uploadImg(){
    //upload the image to firebase cloud
    //get image's url
    this.user.photoURL = LOCALUSERS.photoURL;
    //update the image url to user profile
    this.firebaseService.updateCurrentUserPhotoURL(this.user.photoURL);
  }
}
