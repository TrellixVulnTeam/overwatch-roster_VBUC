import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {

  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
  }

  getCharacters() {
    return this.characters;
  }

  getCharacterById(characterId: string) {
    return this.database.object('characters/' + characterId)
  }

  addCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

  updateCharacter(character) {
    var firebaseEntry = this.getCharacterById(character.$key);
    firebaseEntry.update({
      image: character.image,
      name: character.name,
      role: character.role,
      difficulty: character.difficulty,
      health: character.health,
      armor: character.armor,
      shield: character.shield,
      total: character.total,
      place: character.place,
      info: character.info
    });
  }

  deleteCharacter(character) {
    var firebaseEntry = this.getCharacterById(character.$key);
    firebaseEntry.remove();
  }

}
