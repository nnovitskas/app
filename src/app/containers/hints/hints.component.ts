import { Component, OnInit } from '@angular/core';
import {GeneratorService} from "../../services/generator.service";

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.sass']
})
export class HintsComponent implements OnInit {
  hints$;
  constructor (private generatorService: GeneratorService) {}

  ngOnInit () {
    this.hints$ = this.generatorService.getDataByUniqueTypes('hints');
  }

}
