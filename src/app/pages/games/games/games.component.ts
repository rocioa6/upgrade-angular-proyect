import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { GameInterface } from 'src/app/models/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public gameList: GameInterface[] = [];
  public descriptionDisplayed: boolean;
  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {
    this.descriptionDisplayed = false;
  }

  ngOnInit(): void {
    this.charactersService.getGame().subscribe((data: any) => {
      this.gameList = data;
    });
  }
  public showDescription(): void {
    if (!this.descriptionDisplayed) {
      this.descriptionDisplayed = true;
    } else this.descriptionDisplayed = false;
  }
}
