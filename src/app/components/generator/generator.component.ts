import {Component, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.sass', './advanced.component.sass']
})
export class GeneratorComponent implements AfterViewInit {
  @Input() characters;
  @Input() hints;
  @Input() genres;
  @Input() selectedGenres;
  @Input() selectedCharacters;
  @Output() genreUnselected = new EventEmitter<any>();
  @Output() characterUnselected = new EventEmitter<any>();
  generatedGenre;

  ngAfterViewInit () {
    this.selectedCharacters = this.selectedCharacters.filter( character => { return character.type === 'general'});
  }

  unselectOption(option) {
    option.isSelected = !option.isSelected;
    this.genreUnselected.emit({...option, isSelected: option.isSelected});
    this.characterUnselected.emit({...option, isSelected: option.isSelected});
  }

  onGenerate(){
    const isAvailable = (genre) => { return genre.isSelected === true && genre.isChosen === false };
    const currentIndex = this.selectedGenres.filter(isAvailable).length;
    const randomIndex = Math.floor(Math.random() * currentIndex);
    this.generatedGenre = this.selectedGenres.filter(isAvailable)[randomIndex];
    this.selectedGenres.filter(isAvailable)[randomIndex].isSelected = false;

  }
}
