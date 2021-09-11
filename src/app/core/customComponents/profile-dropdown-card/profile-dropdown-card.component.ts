import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserModel } from '../../models/user-model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-profile-dropdown-card',
  templateUrl: './profile-dropdown-card.component.html',
  styleUrls: ['./profile-dropdown-card.component.scss']
})
export class ProfileDropdownCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() isLoggedIn: boolean;
  user: UserModel;
  userSubscription: Subscription;

  @Output() logoutEvent = new EventEmitter<string>();

  constructor(private firebaseService: FirebaseService) {
  }
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.isLoggedIn.currentValue){
      this.userSubscription = this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
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
