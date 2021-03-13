import { Component, OnInit, Input } from '@angular/core';

import { CarouselModel } from 'src/app/core/models/carousel-model'

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {

  @Input() carouselslides: CarouselModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
