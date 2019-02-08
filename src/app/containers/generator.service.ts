import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable()
export class GeneratorService {
  constructor(private httpService: HttpClient) {}
  getGeneralCharactersData(option, type) {
    return this.getAllData(option).pipe(map(data => data.filter(character => { return character.type === `${type}`})))
  }

  getHintsData(option) {
    return this.getAllData(option).pipe(
      map(data => { return data.map(item => { return {
      ...item, isUnique: false
    }})}))
  }

  getAllData(option) {
    return this.httpService.get<any[]>(`./assets/data/${option}.json`).pipe(
      map(data => { return data.map(item => { return {
        ...item, isSelected: true, isChosen: false
      }})})
    );
  }
}
