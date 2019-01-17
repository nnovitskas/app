import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GeneratorContService {
  constructor(private httpService: HttpClient) {}
  getGeneratorData(option) {
    return this.httpService.get(`./assets/data/${option}.json`);
  }
}
