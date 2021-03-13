import { Component, OnInit } from '@angular/core';
import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';
import { GameModel } from 'src/app/core/models/game-model';
import { CarouselModel } from 'src/app/core/models/carousel-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: GameModel[];
  carousel: CarouselModel[];

  constructor() {
    this.games = GAMEBOXCONFIG.GAMES;
    this.carousel = GAMEBOXCONFIG.CAROUSEL_LIST;
  }

  ngOnInit(): void {
  }

}
