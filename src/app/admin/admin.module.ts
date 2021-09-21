import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from './admin-root/admin-root.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGamesComponent } from './admin-games/admin-games.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatButtonModule } from '@angular/material/button';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json'); //during deployment in github pages this is important
  // return new TranslateHttpLoader(http); // will only work when running in local 'ng serve'
}

@NgModule({
  declarations: [
    AdminRootComponent, 
    AdminUsersComponent, 
    AdminGamesComponent, 
    AdminCategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    //Internationalized with multiple languages forChild module
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
          // defaultLanguage: 'en' 
      }
    }),
  ]
})
export class AdminModule { }
