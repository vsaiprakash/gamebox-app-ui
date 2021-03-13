import { Component, OnInit } from '@angular/core';

import { GameModel } from 'src/app/core/models/game-model'
import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  games: GameModel[]  = GAMEBOXCONFIG.GAMES;

  constructor() { }

  ngOnInit(): void {
    this.games = GAMEBOXCONFIG.GAMES;
  }

}
