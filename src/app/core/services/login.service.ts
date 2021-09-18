
import { Injectable, OnDestroy } from '@angular/core';
import { UserModel } from '../models/user-model';
import { concatMap, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';
import { UserDBService } from './userdb.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService implements OnDestroy{

    isLoggedIn: boolean = false;
    loggedInUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);
    user: UserModel;

    firebaseSubscription: Subscription;
    userDBSubscription: Subscription;
    mappedSubscription: Subscription;

    constructor(
        private firebase:FirebaseService,
        private userdb: UserDBService
    ) {}

    login(email: string, password: string){
        console.log("Signing in from LoginService");
        // this.firebaseSubscription = this.firebase.signIn(email, password).subscribe(user => {
        //     console.log("User from Auth Service: "+JSON.stringify(user));
        //     this.userDBSubscription = this.userdb.getUsers().subscribe(usersData => {
        //         usersData.every(userData => {
        //           if(userData.email==user.email){
        //             this.user = userData;
        //             console.log("User from DB "+JSON.stringify(userData));
        //             return false
        //           }
        //           return true;
        //         });
        //         this.isLoggedIn = true;
        //         this.loggedInUser.next(this.user);
        //       });
        // });

        this.mappedSubscription = this.firebase.signIn(email, password).pipe(
            //need to understand which map is suitable and
            //change below code if required
            switchMap(user => {
              console.log('starting new observable')
              return this.userdb.getUser(user.email);
            })
          )
          .subscribe(userData => {
                console.log('Inner Obs value '+userData)
                this.user = userData;
                this.isLoggedIn = true;
                //announce that user is logged in
                this.loggedInUser.next(this.user);
          })
    }

    logout(){
        console.log('Logging Out')
        this.firebase.logout();
        this.isLoggedIn = false;
        this.user = null;
        //announce that user is logged out
        this.loggedInUser.next(null);
        //unsubscribe to avoid data leak (if not unsubscribed, causes relogin immediately)
        this.mappedSubscription.unsubscribe();
    }

    getCurrentUserDetails(): Observable<UserModel>{
        return this.loggedInUser.asObservable();
    }

    getCurrentUserDetailsValue(){
        return this.user;
    }

    updateUser(user: UserModel){
        this.firebase.updateCurrentUserDisplayName(user.displayName);
        this.firebase.updateCurrentUserPhotoURL(this.user.photoURL);
        this.userdb.updateUser(user);
    }

    isUserLoggedIn(){
        return this.isLoggedIn;
    }

    ngOnDestroy(): void {
        // this.userDBSubscription.unsubscribe();
        // this.firebaseSubscription.unsubscribe();
        this.mappedSubscription.unsubscribe();
    }
}