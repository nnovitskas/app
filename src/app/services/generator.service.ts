import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable()
export class GeneratorService {
  constructor( private httpService: HttpClient ) {}

  getDataByType(option, type) {
    return this.getAllData(option).pipe(
      map(data => data.filter(character =>  character.type === `${type}`)))
  }

  getUniqueTypes(option) {
    return this.getAllData(option).pipe(
      map(data => {
        return Array.from(new Set(data.map((item => item.type))))
      }))
  }
  getDataByUniqueTypes(option) {
    return this.httpService.get<any[]>(`./assets/data/${option}.json`).pipe(
      map(data => {
        return Array.from(new Set(data.map((item => item.type)))).reduce((acc,cur) => {
          return [...acc, {key: cur, isSelected: true, options: data.filter(hint => hint.type === cur).map(option => {
            return {...option, isChosen: false}})}]
        },[])
      })
    )
  }

  getAllData(option) {
    return this.httpService.get<any[]>(`./assets/data/${option}.json`).pipe(
      map(data => { return data.map(item => {
        return {
        ...item, isSelected: true, isChosen: false
      }})})
    );
  }

}
