import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  activatedRoute: ActivatedRoute;

  constructor(location: Location, activatedRoute: ActivatedRoute) {
    this.location = location;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.game = GAMEBOXCONFIG.GAMES.find((game)=>{
      if(game.game_link==this.activatedRoute.snapshot.paramMap.get('id')){
        return game;
      }
    });
  }

  back(){
    this.location.back();
  }

}
