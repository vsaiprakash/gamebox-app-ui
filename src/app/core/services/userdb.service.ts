
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { filter, map } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';

//based on https://www.techiediaries.com/angular-10-firebase-database-crud/
@Injectable({ providedIn: 'root' })
export class UserDBService {

    constructor(private firestore: AngularFirestore) {}

    getUsers() {
        return this.firestore.collection('users').snapshotChanges()
        .pipe(
            map(res => {
                let dataList = [];
                res.forEach(user => {
                    dataList.push(user.payload.doc.data())
                })
                return dataList;
            })
        );
    }

    getUser(email: string) {
        return this.getUsers().pipe(
            map(usersData => {
                let foundUserData;
                usersData.every(userData => {
                    if(userData.email==email){
                        foundUserData = userData;
                        console.log("User from DB "+JSON.stringify(userData));
                        return false
                    }
                    return true;
                  });

                  return foundUserData;
            })
        );
    }

    //signup requires a user entry in db as well
    createUser(user: UserModel){
        return this.firestore.collection('users').add(user);
    }

    updateUser(user: UserModel){
        //id will be the email
        this.firestore.doc('users/' + user.email).update(user);
    }

    deleteUser(email: string){
        this.firestore.doc('users/' + email).delete();
    }
}