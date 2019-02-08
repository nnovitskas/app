import { Component, OnInit } from '@angular/core';
import {GeneratorService} from "../generator.service";

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.sass']
})
export class HintsComponent implements OnInit {
  hints$;

  constructor (private generatorContService: GeneratorService) {}

  ngOnInit () {
    this.hints$ = this.generatorContService.getAllData('hints');
  }

}
