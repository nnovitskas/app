import { Component, OnInit } from '@angular/core';
import { GeneratorContService } from './generator-cont.service';

@Component({
  selector: 'app-generat-cont',
  templateUrl: './generator-cont.component.html',
  styleUrls: ['./generator-cont.component.sass']
})
export class GeneratorContComponent implements OnInit {
  genres$;
  characters$;
  hints$;

  constructor (private generatorContService: GeneratorContService) {}

  ngOnInit () {
    this.genres$ = this.generatorContService.getGeneratorData('genres');
    this.characters$ = this.generatorContService.getGeneratorData('characters');
    this.hints$ = this.generatorContService.getGeneratorData('hints');
  }
}
