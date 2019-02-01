import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable()
export class GeneratorService {
  constructor(private httpService: HttpClient) {}
  getGeneratorData(option) {
    return this.httpService.get<any[]>(`./assets/data/${option}.json`).pipe(
      map(data => { return data.map(item => { return {
      ...item, isSelected: true, isChosen: false
    }})})
    );
  }
}
