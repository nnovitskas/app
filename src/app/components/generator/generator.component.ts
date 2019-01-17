import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.sass']
})
export class GeneratorComponent {
  @Input() characters;
  @Input() hints;
  @Input() genres;

  ngOnInit () {}
}
