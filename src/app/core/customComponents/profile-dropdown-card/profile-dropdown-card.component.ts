import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-profile-dropdown-card',
  templateUrl: './profile-dropdown-card.component.html',
  styleUrls: ['./profile-dropdown-card.component.scss']
})
export class ProfileDropdownCardComponent implements OnInit {

  user: UserModel;

  @Output() logoutEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.user = new UserModel();
    this.user.username = "demo";
    this.user.password = "demo";
    this.user.role = "demo user";
  }

  logout(){
    this.logoutEvent.emit("logout");
  }

}
