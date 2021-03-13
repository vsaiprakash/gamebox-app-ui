import { Component, OnInit } from '@angular/core';
import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName: string;
  languages: any[];

  constructor() { }

  ngOnInit(): void {
    this.appName = GAMEBOXCONFIG.APPNAME;
    this.languages = GAMEBOXCONFIG.LANGUAGES;
  }

}
