import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GAMEBOXCONFIG, CATEGORIES_LIST } from 'src/assets/GAMEBOXCONFIG';
import { CategoryModel } from '../../models/category-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName: string;
  languages: any[];
  categories: CategoryModel[];
  // router: Router;

  isOnline: boolean;

  loggedIn: boolean;

  constructor(private router: Router) {
    // this.router = router;
    this.isOnline = false;
    // below is required so incase the route navigates
    // is to the same url but with different :id
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.appName = GAMEBOXCONFIG.APPNAME;
    this.languages = GAMEBOXCONFIG.LANGUAGES;
    this.categories = CATEGORIES_LIST;

    this.loggedIn = true;
    this.isOnline = false;
  }

  openCategory(category_value: string): void {
    // below is required so incase the route navigates
    // is to the same url but with different :id
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("category/" + category_value);
  }

  goToHome(){
    this.router.navigateByUrl("home");
  }

  goToScoreBoard(){
    this.router.navigateByUrl("scoreBoard");
  }

  openLogin(){
    this.loggedIn = true;
    this.router.navigateByUrl('login');
  }

  logout(){
    this.loggedIn = false;
  }

}
