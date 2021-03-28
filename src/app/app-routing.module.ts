import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './core/views/home/home.component';
import { LoginComponent } from './core/views/login/login.component';
import { GameSelectedComponent } from './core/views/game-selected/game-selected.component';
import { CategorySelectedComponent } from './core/views/category-selected/category-selected.component';
import { ScoreBoardComponent } from './core/views/score-board/score-board.component';

//Constants
import { GAMEBOXCONFIG } from 'src/assets/GAMEBOXCONFIG';
import { ProfilePageComponent } from './core/views/profile-page/profile-page.component';

const ROOTPATH: string = GAMEBOXCONFIG.ROOTPATH + "/";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gameLink/:id', component: GameSelectedComponent },
  { path: 'category/:id', component: CategorySelectedComponent },
  { path: 'scoreBoard', component: ScoreBoardComponent },
  { path: 'profilePage', component: ProfilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
