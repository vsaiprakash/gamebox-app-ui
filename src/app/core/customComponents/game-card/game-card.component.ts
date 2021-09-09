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

  //when parameter is used without public or private specifier, the injected service's
  //scope is limited the constructor only so we need to keep copy that instance outside 
  //the constructor. This might cause problems like duplicate instance of injected service
  //private - makes the service accessible only in this .ts file
  //public - makes the service accessible to template view also
  //below type of injection is done just of learning purpose !!!
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  openGame():void{
    this.router.navigateByUrl("gameLink/"+this.game.game_link);
  }
}
