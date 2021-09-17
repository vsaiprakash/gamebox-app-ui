
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
        return this.firestore.collection('users').snapshotChanges().pipe(
            map(res => {
                let dataList = [];
                res.forEach(user => {
                    dataList.push(user.payload.doc.data())
                })
                return dataList;
            })
        );
    }

    //need to be used along with login
    getUser(username: string) {
        return this.getUsers().subscribe(res => {
            let userLoggedIn;
            res.forEach(user => {
                if(user.email==username){
                    userLoggedIn = user;
                }
            })
            console.log(userLoggedIn);
        })
    }

    //signup requires a user entry in db as well
    createUser(user: UserModel){
        return this.firestore.collection('users').add(user);
    }

    updateUser(user: UserModel){
        this.firestore.doc('users/' + user.userId).update(user);
    }

    deleteUser(userId: string){
        this.firestore.doc('users/' + userId).delete();
    }
}