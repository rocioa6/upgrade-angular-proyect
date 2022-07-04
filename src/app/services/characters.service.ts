import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}
public characterData = {
  id: "",
  name: "",
  job: "",
  origin: "",
  picture: ""
}
public gameData = {
  gameId: "",
  title: "",
  picture: "",
  platform: "",
  releaseDate: "",
  description: ""
}

public clearCharacter() {
  this.characterData = {
    id: "",
    name: "",
    job: "",
    origin: "",
    picture: ""
  }
}

public editItem(item: any) {
this.characterData = item
}

  public getCharacter() {
    return this.httpClient.get("http://localhost:3000/characters");
  }

  public postCharacter(newCharacter: any) {
    return this.httpClient.post(
      "http://localhost:3000/characters",
      newCharacter
    );
  }
  public deleteCharacter(characterID: any) {
    return this.httpClient.delete("http://localhost:3000/characters/" + characterID)
  }
  public editCharacter(characterID: any, editedCharacter: any){
    return this.httpClient.put("http://localhost:3000/characters/" + characterID, editedCharacter)
  }
  public getGame() {
    return this.httpClient.get("http://localhost:3000/games");
  }

  public postGame(newGame: any) {
    return this.httpClient.post(
      "http://localhost:3000/games",
      newGame
    );
  }
  public deleteGame(gameID: any) {
    return this.httpClient.delete("http://localhost:3000/games/" + gameID)
  }
  public editGame(gameID: any, editedGame: any){
    return this.httpClient.put("http://localhost:3000/games/" + gameID, editedGame)
  }
}
