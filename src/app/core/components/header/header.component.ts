import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GAMEBOXCONFIG, CATEGORIES_LIST } from 'src/assets/GAMEBOXCONFIG';
import { CategoryModel } from '../../models/category-model';
import { UserModel } from '../../models/user-model';
import { FirebaseService } from '../../services/firebase.service';
import { GamesDataService } from '../../services/games-data.service';
import { LanguageService } from '../../services/language.service';

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
  }

  ngOnInit(): void {
    this.gamesDataService.getGames();
    this.firebaseService.getCurrentUserDetails().subscribe((user)=>{
      if(user){
        this.user = user;
        this.loggedIn = true;
      }
    });
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
