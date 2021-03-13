import { Component, Input, OnInit } from '@angular/core';

import { GameModel } from 'src/app/core/models/game-model'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: GameModel;

  constructor() { }

  ngOnInit(): void {
  }

}
