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
  @Output() itemUnselected = new EventEmitter<any>();
  generatedItem;
  addHidden = true;
  optionName = '';

  onAddOption() {
    this.addHidden = !this.addHidden;
  }

  addGeneratorItem(optionName) {
    this.items.push({name: optionName, isSelected: true, isChosen: false});
    this.addHidden = !this.addHidden;
    this.optionName = '';
  }

  unselectOption(option) {
    option.isSelected = !option.isSelected;
    this.itemUnselected.emit({...option, isSelected: option.isSelected});
  }

  onGenerate(){
    const isAvailable = (option) => { return option.isSelected === true && option.isChosen === false };
    const currentIndex = this.items.filter(isAvailable).length;
    const randomIndex = Math.floor(Math.random() * currentIndex);
    this.generatedItem = this.items.filter(isAvailable)[randomIndex];
    this.items.filter(isAvailable)[randomIndex].isSelected = false;

  }
}
