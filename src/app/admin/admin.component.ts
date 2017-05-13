import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ CharacterService ]
})
export class AdminComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  submitForm( image: string,  name: string,  role: string,  difficulty: number,  health: number,  armor: number,  shield: number,  total: number,  place: string,  info: string) {
    var newCharacter: Character = new Character(image, name, role, difficulty, health, armor, shield, total, place, info);
    this.characterService.addCharacter(newCharacter);
  }

}
