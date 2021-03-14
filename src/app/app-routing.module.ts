import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './core/views/home/home.component';
import { GameSelectedComponent } from './core/views/game-selected/game-selected.component';
import { CategorySelectedComponent } from './core/views/category-selected/category-selected.component';
import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';

const ROOTPATH: string = GAMEBOXCONFIG.ROOTPATH + "/";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gameLink/:id', component: GameSelectedComponent },
  { path: 'category/:id', component: CategorySelectedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
