import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core'

import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';
import { GameModel } from '../../models/game-model';


@Component({
  selector: 'app-game-selected',
  templateUrl: './game-selected.component.html',
  styleUrls: ['./game-selected.component.scss']
})
export class GameSelectedComponent implements OnInit {

  location: Location;
  activatedRoute: ActivatedRoute;
  // sanitizer: DomSanitizer;

  game: GameModel;
  iframeLink: any;

  constructor(location: Location, activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.location = location;
    this.activatedRoute = activatedRoute;
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
    this.game = GAMEBOXCONFIG.GAMES.find((game)=>{
      if(game.game_link==this.activatedRoute.snapshot.paramMap.get('id')){
        // this.iframeLink = game.game_iframelink;
        this.iframeLink = this.sanitizer.bypassSecurityTrustResourceUrl(game.game_iframelink);
        // this.iframeLink = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(game.game_iframelink));
        console.log("URL: "+game.game_iframelink+"\n SAFEURL: "+this.iframeLink);
        return game;
      }
    });

  }

  back(){
    this.location.back();
  }

}
