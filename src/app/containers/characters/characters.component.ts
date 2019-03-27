import { Component, OnInit } from '@angular/core';
import { GeneratorService } from "../../services/generator.service";
import { Subject} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
  optionTypes$;
  // characters$;
  // addedOptions = [];
  // arraySubject = new Subject();
  characters;
  selectedType = 'general';
  addHidden = true;
  genderUnhide = false;
  optionGender = '';
  optionName = '';

  constructor (private generatorService: GeneratorService) {}

  ngOnInit () {
    this.optionTypes$ = this.generatorService.getUniqueTypes('characters');
    this.generatorService.getDataByType('characters', this.selectedType).subscribe(data => {
      this.characters = data;
    })
    // this.characters$ = this.generatorService.getDataByType('characters', this.selectedType).pipe(
    //   switchMap(data => {
    //     console.log(data);
    //     return this.arraySubject
    //       .pipe(map(option => {
    //           console.log(option);
    //           return [...data.concat(option)]
    //         }),
    //         tap(console.log)
    //       )
    //   })
    // );
  }

  onAddOption() {
    this.addHidden = !this.addHidden;
  }
  addGeneratorItem() {
    // this.addedOptions.push({name: optionName, isSelected: true, isChosen: false});
    // this.arraySubject.next(this.addedOptions);
    if(this.selectedType === 'general') {
      this.characters.push({name: this.optionName, type: this.selectedType, isSelected: true, isChosen: false});
      this.addHidden = !this.addHidden;
      this.optionName = '';
    } else {
      this.genderUnhide = !this.genderUnhide;
    }
  }

  addGeneratorItemWithGender() {
    this.characters.push({name: this.optionName, type: this.selectedType, gender: this.optionGender, isSelected: true, isChosen: false });
    this.onDataChangeClear();
    console.log(this.characters);
  }

  onDataTypeChanged(type){
    this.selectedType = type;
    this.generatorService.getDataByType('characters', this.selectedType).subscribe(data => {
      this.characters = data;
    });
    this.onDataChangeClear();
  }

  onDataChangeClear() {
    this.addHidden = true;
    this.genderUnhide = false;
    this.optionName = '';
    this.optionGender = '';
  }

}
