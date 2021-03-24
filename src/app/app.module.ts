import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoginComponent } from './core/views/login/login.component';
import { HomeComponent } from './core/views/home/home.component';
import { CategorySelectedComponent } from './core/views/category-selected/category-selected.component';
import { GameSelectedComponent } from './core/views/game-selected/game-selected.component';
import { ScoreBoardComponent } from './core/views/score-board/score-board.component';

//Customized Components
import { GameCardComponent } from './core/customComponents/game-card/game-card.component';
import { RatingsComponent } from './core/customComponents/ratings/ratings.component';
import { CustomCarouselComponent } from './core/customComponents/custom-carousel/custom-carousel.component';

//Custom Services
import { NavigationService } from './core/services/navigation.service';

//Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    CustomCarouselComponent,
    ScoreBoardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    // Angular Material Modules
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
