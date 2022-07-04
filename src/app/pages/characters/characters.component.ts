import { CharactersService } from './../../services/characters.service';
import { CharacterInterface } from './../../models/character.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public characterList: CharacterInterface[] = [];
  public filter: string;
  public filteredCharacters : CharacterInterface[];

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {
    this.filter = "";
    this.filteredCharacters = this.characterList;

  }

  ngOnInit(): void {
    this.charactersService.getCharacter().subscribe((data: any) => {
      this.characterList = data;
      this.filter = "";
      this.filteredCharacters = this.characterList;
      console.log(this.filter);

    });

  }
  public generateNumber(number: number){
    return Math.floor(Math.random() * number) + 1;
  }
  public catchCharacter(character: any) {
    this.charactersService.editItem(character);
    this.router.navigate(['/gestion']);
  }

  public onChangeFilter(filter: string){
     /* const newList: any = this.characterList.filter(character => character.name.toLowerCase().includes(filter.trim().toLowerCase())
    || character.job.toLowerCase().includes(filter.trim().toLowerCase()) || character.origin.toLowerCase().includes(filter.trim().toLowerCase()));
    this.filteredCharacters = newList; */
    const originList: any = this.characterList.filter(character => character.origin.toLowerCase().includes(filter.trim().toLowerCase()) || character.job.toLowerCase().includes(filter.trim().toLowerCase()));
    this.filteredCharacters = originList;
  }

  public originFilter(filter: string){
    const originList: any = this.characterList.filter(character => character.origin === filter);
    this.filteredCharacters = originList;
  }
}
