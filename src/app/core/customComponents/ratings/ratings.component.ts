import { Component, Input, OnInit } from '@angular/core';
import { MAXRATING } from 'src/assets/GAMEBOXCONFIG';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  maxRating: number;
  @Input() currRating: number;

  constructor() { }

  ngOnInit(): void {
    this.maxRating = MAXRATING;

  }

}
