import { GameModel } from "src/app/core/models/game-model";
import { CategoryModel } from "src/app/core/models/category-model";


export const CATEGORIES_LIST = [
  new CategoryModel("All","All Games","all"),
  new CategoryModel("RPG","All Role Playing Games","rpg"),
  new CategoryModel("Action","All Action Games","action"),
];

export const RATINGS = [0,1,2,3,4,5];
export const MAXRATING = 5;

export const GAMEBOXCONFIG = {
  GAMES:[
    new GameModel( "assets/images/pokemon.jpeg", "Pokemon", "An RPG Pokemon Game", "", CATEGORIES_LIST[1], RATINGS[0] ),
    new GameModel( "assets/images/mortalkombat.jpg", "Mortal Kombat", "Fighting & Action Game", "", CATEGORIES_LIST[2], RATINGS[4] ),
  ]
};
