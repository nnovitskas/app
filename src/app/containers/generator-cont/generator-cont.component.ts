import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-generator-cont',
  templateUrl: './generator-cont.component.html',
  styleUrls: ['./generator-cont.component.sass']
})
export class GeneratorContComponent implements OnInit {
  genres$;
  characters$;
  hints$;
  selectedGenres;
  selectedCharacters;
  constructor (private generatorContService: GeneratorService) {}

  ngOnInit () {
    this.genres$ = this.generatorContService.getAllData('genres').pipe(tap(data => {this.selectedGenres = data}));
    this.characters$ = this.generatorContService.getGeneratorData('characters');
    this.hints$ = this.generatorContService.getGeneratorData('hints');
  }
}
