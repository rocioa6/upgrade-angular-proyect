import { ArtComponent } from './pages/art/art/art.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppPipesModule } from './app-pipes.module';
import { GamesComponent } from './pages/games/games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    HomeComponent,
    CharactersComponent,
    GestionComponent,
    GamesComponent,
    ArtComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppPipesModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
