import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/core/models/user-model';
import { UserDBService } from 'src/app/core/services/userdb.service';

import * as _ from "lodash";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[];

  usersData: UserModel[];
  dataSource: MatTableDataSource<UserModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  inEditModes: any[];

  userForEdit: UserModel;

  constructor(private userdb: UserDBService) {
    this.displayedColumns = ['masterRank', 'email', 'displayName', 'username', 'role', 'photoURL', 'edit'];
    this.usersData = [];
    this.inEditModes = [];
    this.userForEdit = {
      email: "",
      displayName: "",
      photoURL: "",
      masterRank: 0,
      username: "",
      role: "sss"
    }
  }
  
  ngOnInit(): void {
    this.userdb.getUsers().subscribe(
      users => {
        this.dataSource = new MatTableDataSource<UserModel>(users);
        this.dataSource.paginator = this.paginator;

        users.forEach(user => {
          this.usersData[user.email] = user;
          this.inEditModes[user.email] = false;
        });
      }
    );
  }

  ngAfterViewInit() {
    //sort & paginator keep them in ngAfterViewInit
    // this.dataSource.paginator = this.paginator;
  }

  isInEditMode(user: UserModel){
    return this.inEditModes[user.email];
  }

  editUserRecord(user: UserModel){
    console.log("Edit: "+user.email);
    this.inEditModes[user.email] = true;
    this.userForEdit.role = user.role;
  }

  saveUserRecord(user: UserModel){
    console.log("Save: "+JSON.stringify(this.userForEdit));
    this.inEditModes[user.email] = false;
    if(_.isEqual(this.userForEdit, user)){
      //there is no update
      this.userdb.updateUser(this.userForEdit);
    }
  }

}
