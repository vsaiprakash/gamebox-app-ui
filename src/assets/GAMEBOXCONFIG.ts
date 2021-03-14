import { GameModel } from "src/app/core/models/game-model";
import { CategoryModel } from "src/app/core/models/category-model";
import { CarouselModel } from "src/app/core/models/carousel-model";


export const CATEGORIES_LIST = [
  new CategoryModel("All","All Games","all"),
  new CategoryModel("RPG","All Role Playing Games","rpg"),
  new CategoryModel("Action","All Action Games","action"),
];

export const RATINGS = [0,1,2,3,4,5];
export const MAXRATING = 5;

export const GAMEBOXCONFIG = {
  APPNAME:"Game Box",
  LANGUAGES:[
    { LANGUAGE_DISPLAYNAME: "English", LANGUAGE_VALUE: "en" }
  ],
  GAMES:[
    new GameModel( "assets/images/pokemon.jpeg", "Pokemon", "An RPG Pokemon Game", "pokemon", "https://jsemu2.github.io/gba/launcher.html#pokemonred", CATEGORIES_LIST[1], RATINGS[4] ),
    new GameModel( "assets/images/mortalkombat.jpg", "Mortal Kombat", "Fighting & Action Game", "mortalkombat", "https://jsemu2.github.io/gba/launcher.html#mortal_kombat", CATEGORIES_LIST[2], RATINGS[3] ),
  ],
  CAROUSEL_LIST:[
    new CarouselModel("Pokemon", "An RPG Pokemon Game", "assets/images/pokemon-fire-red-carousel.jpg", "pokemon"),
    new CarouselModel("Mortal Kombat", "Fighting & Action Game", "assets/images/mortalkombat-carousel.jpg", "mortalkombat")
  ]
};
