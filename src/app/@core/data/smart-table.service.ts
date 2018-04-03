import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class SmartTableService {


  apiRoot: string = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;

  constructor(private _http: Http) {
    this.results = [];
    this.loading = false;
  }


  getAnimals() {
    return this._http.get('http://localhost:30000/api/animal').map(res => res.json());
  }

}
