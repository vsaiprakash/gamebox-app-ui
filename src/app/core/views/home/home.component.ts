import { Component, OnInit } from '@angular/core';
import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';
import { GameModel } from '../../models/game-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: GameModel[];

  constructor() {
    this.games = GAMEBOXCONFIG.GAMES;
  }

  ngOnInit(): void {
  }

}
