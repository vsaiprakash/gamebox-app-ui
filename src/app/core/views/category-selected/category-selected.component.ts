import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CATEGORIES_LIST, GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';
import { CategoryModel } from '../../models/category-model';
import { GameModel } from '../../models/game-model';
import { NavigationService } from './../../services/navigation.service';

@Component({
  selector: 'app-category-selected',
  templateUrl: './category-selected.component.html',
  styleUrls: ['./category-selected.component.scss']
})
export class CategorySelectedComponent implements OnInit {

  category: CategoryModel;
  games: GameModel[];

  // location: Location;
  // activatedRoute: ActivatedRoute;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private navigation: NavigationService) {
    // this.location = location;
    // this.activatedRoute = activatedRoute;

  }

  ngOnInit(): void {
    this.category = CATEGORIES_LIST.find((category)=>{
      if(category.category_value==this.activatedRoute.snapshot.paramMap.get('id')){
        return category;
      }
    });

    this.updateCategoryPage();
  }

  // ngOnChanges():void{
  //   this.updateCategoryPage();
  // }

  updateCategoryPage():void{
    if(CATEGORIES_LIST[0].category_value==this.activatedRoute.snapshot.paramMap.get('id')){
      //It is All Categories
      this.games = GAMEBOXCONFIG.GAMES;
    }
    else{
      this.games = GAMEBOXCONFIG.GAMES.filter((game)=>{
        if(game.game_category.category_value==this.category.category_value){
          return game;
        }
      });
    }
  }
  back(){
    this.navigation.back();
  }
}
