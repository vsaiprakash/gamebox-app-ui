import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';


import { GameModel } from 'src/app/core/models/game-model'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: GameModel;
  router: Router;

  @ViewChild('.custom-game-card')
  customGameCard: any;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  openGame():void{
    this.router.navigateByUrl("gameLink/"+this.game.game_link);
  }
}
