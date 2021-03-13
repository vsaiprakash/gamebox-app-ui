import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';
import { GameModel } from '../../models/game-model';

@Component({
  selector: 'app-game-selected',
  templateUrl: './game-selected.component.html',
  styleUrls: ['./game-selected.component.scss']
})
export class GameSelectedComponent implements OnInit {

  game: GameModel;
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    this.game = GAMEBOXCONFIG.GAMES[0];
  }

  back(){
    this.location.back();
  }

}
