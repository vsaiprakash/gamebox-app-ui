import { GameModel } from "src/app/core/models/game-model";
import { CategoryModel } from "src/app/core/models/category-model";
import { CarouselModel } from "src/app/core/models/carousel-model";
import * as data from './../assets/games.json';

export const CATEGORIES_LIST = [
  new CategoryModel("All","All Games","all"),
  new CategoryModel("RPG","All Role Playing Games","rpg"),
  new CategoryModel("Action","All Action Games","action"),
];

export const RATINGS = [0,1,2,3,4,5];
export const MAXRATING = 5;
export const ROOTPATH = "gamebox-app-ui-demo";

export const GAMEBOXCONFIG = {
  APPNAME: "Game Box",
  ROOTPATH: ROOTPATH,
  LANGUAGES:[
    { LANGUAGE_DISPLAYNAME: "English", LANGUAGE_VALUE: "en" },
    { LANGUAGE_DISPLAYNAME: "తెలుగు", LANGUAGE_VALUE: "te" },
  ],
  GAMES:[
    new GameModel( "assets/images/pokemon.jpeg", "Pokemon", "An RPG Pokemon Game", "pokemon", "https://jsemu2.github.io/gba/launcher.html#pokemonred", CATEGORIES_LIST[1], RATINGS[4] ),
    // new GameModel( "assets/images/mortalkombat.jpg", "Mortal Kombat", "Fighting & Action Game", "mortalkombat", "https://jsemu2.github.io/gba/launcher.html#mortal_kombat", CATEGORIES_LIST[2], RATINGS[3] ),
    new GameModel( "https://firebasestorage.googleapis.com/v0/b/gamebox-app-backend-services.appspot.com/o/GBA_Images%2Fgames%2FMortal_Kombat_Advance_Coverart.png?alt=media&token=988fa604-b1b9-475d-a8b1-680d513c37db", "Mortal Kombat", "Fighting & Action Game", "mortalkombat", "https://jsemu2.github.io/gba/launcher.html#mortal_kombat", CATEGORIES_LIST[2], RATINGS[3] ),
    // https://firebasestorage.googleapis.com/v0/b/gamebox-app-backend-services.appspot.com/o/GBA_Images%2Fgames%2FMortal_Kombat_Advance_Coverart.png?alt=media&token=988fa604-b1b9-475d-a8b1-680d513c37db
  ],
  // GAMES: data,
  CAROUSEL_LIST:[
    new CarouselModel("Pokemon", "An RPG Pokemon Game", "assets/images/pokemon-go-carousel.jpg", "pokemon"),
    new CarouselModel("Mortal Kombat", "Fighting & Action Game", "assets/images/kombat-pack-2.jpg", "mortalkombat")
  ]
};
