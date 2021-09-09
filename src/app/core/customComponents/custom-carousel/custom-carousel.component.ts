import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CarouselModel } from 'src/app/core/models/carousel-model'

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {

  @Input() carouselslides: CarouselModel[];

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  openGame(carouselslide: CarouselModel):void{
    this.router.navigateByUrl("gameLink/"+carouselslide.carousel_game_link);
  }

}
