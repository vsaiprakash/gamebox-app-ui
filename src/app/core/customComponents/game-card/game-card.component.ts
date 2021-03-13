import { Component, Input, OnInit } from '@angular/core';
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

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  openGame():void{
    this.router.navigateByUrl('gameLink');
  }

}
