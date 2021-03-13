import { Component, OnInit } from '@angular/core';
import { GAMEBOXCONFIG, CATEGORIES_LIST } from 'src/assets/GAMEBOXCONFIG';
import { CategoryModel } from '../../models/category-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName: string;
  languages: any[];
  categories: CategoryModel[];

  constructor() { }

  ngOnInit(): void {
    this.appName = GAMEBOXCONFIG.APPNAME;
    this.languages = GAMEBOXCONFIG.LANGUAGES;
    this.categories = CATEGORIES_LIST;
  }

}
