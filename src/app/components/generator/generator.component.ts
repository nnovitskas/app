import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.sass', './advanced.component.sass']
})
export class GeneratorComponent {
  @Input() items;
  @Input() viewType;
  @Input() viewMode;
  @Output() itemUnselected = new EventEmitter<any>();
  generatedResults = [];
  resultsGotten = false;

  getOptionView(item) {
    return this.viewType === 'hints' ? item.key : item.name;
  }

  unselectOption(option) {
    option.isSelected = !option.isSelected;
    this.itemUnselected.emit({...option, isSelected: option.isSelected});
  }

  isAvailable(option) {
    return option.isSelected && !option.isChosen;
  }

  isAlreadyGenerated(option) {
    option.isSelected = option.isSelected ? option.isSelected : !option.isSelected;
  }

  onGenerate(){
    const currentIndex = this.items.filter(this.isAvailable).length;
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const randomResult = this.items.filter(this.isAvailable)[randomIndex];
    this.generatedResults.push(randomResult);
    this.resultsGotten = this.generatedResults.length > 2;
    randomResult.isSelected = false;
  }

  onGenerateAgain() {
    this.generatedResults = [];
    this.resultsGotten = !this.resultsGotten;
    this.items.filter(this.isAlreadyGenerated);
  }



}
