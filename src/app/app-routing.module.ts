import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { GamesComponent } from './pages/games/games/games.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './pages/art/art/art.component';

const routes: Routes = [
  {
    path: "characters", component: CharactersComponent
  },
  {
    path: "gestion", component: GestionComponent
  },
  {
    path: "games", component: GamesComponent
  },
  {
    path: "art", component: ArtComponent
  },
  {
    path: "", pathMatch: "full", component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
