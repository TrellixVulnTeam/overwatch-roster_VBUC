import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [ CharacterService ]
})
export class CharacterListComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;

  currentRoute: string = this.router.url;

  filterByRole: string = "all";

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  goToDetail(clickedCharacter) {
    this.router.navigate(['heroes',clickedCharacter.$key])
  }

  onChange(optionSelect) {
    this.filterByRole = optionSelect;
  }

}
