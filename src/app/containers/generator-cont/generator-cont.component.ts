import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-generator-cont',
  templateUrl: './generator-cont.component.html',
  styleUrls: ['./generator-cont.component.sass']
})
export class GeneratorContComponent implements OnInit {
  genres$;
  characters$;
  hints$;
  constructor (private generatorContService: GeneratorService) {}

  ngOnInit () {
    this.genres$ = this.generatorContService.getAllData('genres');
    this.characters$ = this.generatorContService.getGeneralCharactersData('characters', 'general');
    this.hints$ = this.generatorContService.getHintsData('hints');
  }
}
