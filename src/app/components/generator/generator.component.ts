import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.sass']
})
export class GeneratorComponent {
  constructor (private httpService: HttpClient) { }
  genres: [];
  characters: [];
  hints: [];

  ngOnInit () {
    this.httpService.get('./assets/data/genres.json').subscribe(
      data => {
        this.genres = data as [];
      }
    );
    this.httpService.get('./assets/data/characters.json').subscribe(
      data => {
        this.characters = data as [];
      }
    );
    this.httpService.get('./assets/data/hints.json').subscribe(
      data => {
        this.hints = data as [];
      }
    );
  }
}
