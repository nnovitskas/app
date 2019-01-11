import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent implements OnInit {
  constructor (private httpService: HttpClient) {}

  ngOnInit () {
    // this.httpService.get('./assets/data/genres.json').subscribe(
    //   data => {
    //     this.genres = data as [];
    //     console.log(this.genres[0])
    //   }
    // );
  }
}
