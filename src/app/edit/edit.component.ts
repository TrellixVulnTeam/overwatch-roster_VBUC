import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [CharacterService]
})
export class EditComponent implements OnInit {

  @Input() selectedCharacter;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  startUpdate(character) {
    this.characterService.updateCharacter(character);
  }

}
