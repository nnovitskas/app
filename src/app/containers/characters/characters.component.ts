import { Component, OnInit } from '@angular/core';
import {GeneratorService} from "../generator.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
  characters$;
  selectedCharacters;
  constructor (private generatorContService: GeneratorService) {}

  ngOnInit () {
    this.characters$ = this.generatorContService.getGeneratorData('characters').pipe(tap(data => {this.selectedCharacters = data}));
  }

}
