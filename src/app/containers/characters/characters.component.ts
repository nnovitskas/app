import { Component, OnInit } from '@angular/core';
import {GeneratorService} from "../generator.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
  characters$;
  constructor (private generatorContService: GeneratorService) {}

  ngOnInit () {
    this.characters$ = this.generatorContService.getGeneralCharactersData('characters', 'general');
  }

}
