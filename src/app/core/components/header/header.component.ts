import { stringify } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GAMEBOXCONFIG, CATEGORIES_LIST } from 'src/assets/GAMEBOXCONFIG';
import { LOCALUSERS } from 'src/assets/LOCALUSERS';
import { CategoryModel } from '../../models/category-model';
import { UserModel } from '../../models/user-model';
import { FirebaseService } from '../../services/firebase.service';
import { GamesDataService } from '../../services/games-data.service';
import { LanguageService } from '../../services/language.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName: string;
  languages: any[];
  categories: CategoryModel[];

  isOnline: boolean;
  loggedIn: boolean;
  user: UserModel;

  constructor(private router: Router,
    private firebaseService: FirebaseService,
    private languagesService: LanguageService,
    private gamesDataService: GamesDataService) {
    this.appName = GAMEBOXCONFIG.APPNAME;
    this.languages = GAMEBOXCONFIG.LANGUAGES;
    this.categories = CATEGORIES_LIST;

    this.isOnline = false;
    this.loggedIn = false;

    // if (sessionStorage.getItem("user")) {
    //   //on reload of page, loggedin user is logged out
    //   sessionStorage.removeItem("user");
    // }

    // let timer = setInterval(() => {
    //   if(localStorage.getItem("user")){
    //     this.loggedIn = true;
    //     this.user = JSON.parse(localStorage.getItem("user"));
    //     clearInterval(timer);
    //   }
    // }, 500);
    // this.startIsLoggedInTimer();

  }

  ngOnInit(): void {
    this.gamesDataService.getGames();
    // this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
    //   if(user){
    //     this.user = user;
    //     this.loggedIn = true;
    //   }
    // });
    this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
      if(user){
        this.user = user;
        this.loggedIn = true;
      }
    });
  }

  // startIsLoggedInTimer(){
  //   let timer = setInterval(()=>{
  //     if(localStorage.getItem("user")){
  //       this.loggedIn = true;
  //       this.user = JSON.parse(localStorage.getItem("user"));
  //       this.startIsLoggedOutTimer();
  //       clearInterval(timer);
  //     }
  //   }, 500)
  // }

  // startIsLoggedOutTimer(){
  //   let timer = setInterval(()=>{
  //     if(localStorage.getItem("user")==null){
  //       this.loggedIn = false;
  //       this.user = JSON.parse(localStorage.getItem("user"));
  //       this.startIsLoggedInTimer();
  //       clearInterval(timer);
  //     }
  //   }, 500)
  // }

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

  logout() {
    this.firebaseService.logout();
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
}
