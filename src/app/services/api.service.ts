import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(
      public http: Http
  ) { }

  getArtistsByLetter(letter) {
    console.log(letter);
    let arr = [
      {name: 'Luke ' + letter, height: 177, weight: 70},
      {name: 'Darth ' + letter, height: 200, weight: 100},
      {name: 'Han ' + letter, height: 185, weight: 85},
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(arr), 100);
    });
  }
}
