import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GAMEBOXCONFIG, CATEGORIES_LIST } from 'src/assets/GAMEBOXCONFIG';
import { CategoryModel } from '../../models/category-model';
import { UserModel } from '../../models/user-model';
import { FirebaseService } from '../../services/firebase.service';
import { GamesDataService } from '../../services/games-data.service';
import { LanguageService } from '../../services/language.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  appName: string;
  languages: any[];
  categories: CategoryModel[];

  isOnline: boolean;
  loggedIn: boolean;
  user: UserModel;

  userSubscription: Subscription;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private languagesService: LanguageService,
    private gamesDataService: GamesDataService,
    private loginService: LoginService) {
    this.appName = GAMEBOXCONFIG.APPNAME;
    this.languages = GAMEBOXCONFIG.LANGUAGES;
    this.categories = CATEGORIES_LIST;

    this.isOnline = false;
    this.loggedIn = false;
  }

  ngOnInit(): void {
    this.gamesDataService.getGames();
    // this.userSubscription = this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
    //   if(user){
    //     this.user = user;
    //     this.loggedIn = true;
    //   }
    // });
    this.userSubscription = this.loginService.getCurrentUserDetails().subscribe((user)=>{
      console.log("Obtained User from sub: "+JSON.stringify(user));
      if(user){
        this.user = user;
        this.loggedIn = true;
      }
    });
  }

  isAdmin(): Observable<boolean>{
    // if(this.user){
    //   return of(this.user.role=="admin");
    // }
    // return of(false);
    
    return this.loginService.getCurrentUserDetails().pipe(
      map(user => {
        if(user)
          return user.role=="admin";
        else
          return false;
      })
    )

    // if(this.user){
    //   return this.user.role=="admin";
    // }
    // return false;
  }

  openCategory(category_value: string): void {
    // below is required so incase the route navigates
    // is to the same url but with different :id
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("category/" + category_value);
  }

  goToHome() {
    this.router.navigateByUrl("home");
  }

  goToScoreBoard() {
    this.router.navigateByUrl("scoreBoard");
  }

  goToProfilePage() {
    this.router.navigateByUrl("profilePage");
  }

  openLogin() {
    this.router.navigateByUrl('login');
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  logout() {
    // this.firebaseService.logout();
    this.loginService.logout();
    this.loggedIn = false;
    this.goToHome();
  }

  selectLang(language){
    this.languagesService.setLang(language);
  }

  toggle() {
    //need to improve this later avoiding the direct DOM manipulation
    if (this.isOnline) {
      document.getElementById("online").style.color = "yellow";
      document.getElementById("offline").style.color = "white";
    }
    else {
      document.getElementById("online").style.color = "white";
      document.getElementById("offline").style.color = "yellow";
    }
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
