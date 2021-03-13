import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoginComponent } from './core/views/login/login.component';
import { HomeComponent } from './core/views/home/home.component';
import { CategorySelectedComponent } from './core/views/category-selected/category-selected.component';
import { GameSelectedComponent } from './core/views/game-selected/game-selected.component';
import { GameCardComponent } from './core/customComponents/game-card/game-card.component';
import { RatingsComponent } from './core/customComponents/ratings/ratings.component';
import { CustomCarouselComponent } from './core/customComponents/custom-carousel/custom-carousel.component';

//Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CategorySelectedComponent,
    GameSelectedComponent,
    GameCardComponent,
    RatingsComponent,
    CustomCarouselComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgbModule,
    // Angular Material Modules
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
