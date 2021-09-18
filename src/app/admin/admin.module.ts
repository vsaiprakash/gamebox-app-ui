import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGamesComponent } from './admin-games/admin-games.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';

@NgModule({
  declarations: [AdminRootComponent, AdminUsersComponent, AdminGamesComponent, AdminCategoriesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class AdminModule { }
