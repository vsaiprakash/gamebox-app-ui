import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private firebaseService: FirebaseService,
              private navigation: NavigationService,
              private router: Router) {
    this.firebaseService.getCurrentUserDetails().then((user)=>{
      if(user){
        console.log(" "+JSON.stringify(user));
        this.user = new UserModel(user.email, user.displayName, user.photoUrl);
      }
    });
  }

  ngOnInit(): void {
  }

  openLogin() {
    this.router.navigateByUrl('login');
  }

  back(){
    this.navigation.back();
  }
}
