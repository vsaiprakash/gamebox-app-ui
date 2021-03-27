import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ProfileDropdownCardComponent } from './core/customComponents/profile-dropdown-card/profile-dropdown-card.component';
import { CustomTableComponent } from './core/customComponents/custom-table/custom-table.component';

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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './core/services/firebase.service';

const firebaseConfig = {
  apiKey: "AIzaSyCzALdaNf9DVmQqEBI_wqTfFVLWfaQSuoE",
  authDomain: "gamebox-app-backend-services.firebaseapp.com",
  projectId: "gamebox-app-backend-services",
  storageBucket: "gamebox-app-backend-services.appspot.com",
  messagingSenderId: "595345511278",
  appId: "1:595345511278:web:c235a6605b20229400a77f"
};

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
    ScoreBoardComponent,
    ProfileDropdownCardComponent,
    CustomTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    //Backend Service
    AngularFireModule.initializeApp(firebaseConfig),

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
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [NavigationService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
