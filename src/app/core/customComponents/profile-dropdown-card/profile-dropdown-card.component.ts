import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from '../../models/user-model';
import { FirebaseService } from '../../services/firebase.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-profile-dropdown-card',
  templateUrl: './profile-dropdown-card.component.html',
  styleUrls: ['./profile-dropdown-card.component.scss']
})
export class ProfileDropdownCardComponent implements OnInit, OnChanges {

  @Input() isLoggedIn: boolean;
  user: UserModel;

  @Output() logoutEvent = new EventEmitter<string>();

  constructor(private firebaseService: FirebaseService) {
    // this.firebaseService.getCurrentUserDetails().then((user)=>{
    //   if(user){
    //     this.user = new UserModel(user.email, user.displayName, user.photoUrl);
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.isLoggedIn.currentValue){
      this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
        this.user = user;
      });
    }
  }

  ngOnInit(): void {
  }

  logout(){
    this.logoutEvent.emit("logout");
  }
}
