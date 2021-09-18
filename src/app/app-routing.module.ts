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
import { PageNotFoundComponent } from './core/views/page-not-found/page-not-found.component';
import { FavouriteGamesComponent } from './core/views/favourite-games/favourite-games.component';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const ROOTPATH: string = GAMEBOXCONFIG.ROOTPATH + "/";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gameLink/:id', component: GameSelectedComponent },
  { path: 'category/:id', component: CategorySelectedComponent },
  { path: 'scoreBoard', component: ScoreBoardComponent },
  { path: 'profilePage', component: ProfilePageComponent },
  { path: 'favouriteGames', component: FavouriteGamesComponent},
  {
    //lazy loading the admin component because it is accessible only to Admin role users
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardGuard] 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
