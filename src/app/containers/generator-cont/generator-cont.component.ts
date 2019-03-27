import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-generator-cont',
  templateUrl: './generator-cont.component.html',
  styleUrls: ['./generator-cont.component.sass']
})
export class GeneratorContComponent implements OnInit {
  genres$;
  characters$;
  hints$;
  constructor (private generatorService: GeneratorService) {}

  ngOnInit () {
    this.genres$ = this.generatorService.getAllData('genres');
    this.characters$ = this.generatorService.getDataByType('characters', 'general');
    this.hints$ = this.generatorService.getDataByUniqueTypes('hints');

  }

}
