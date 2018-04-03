import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class SmartTableService {

  constructor(private _http: Http) { }


  getAnimals() {
    return this._http.get('http://localhost:30000/api/animal').map(res => res.json());
  }

  getAnimal(id: number) {
    return this._http.get(`http://localhost:30000/api/animal/${id}`).map(res => res.json());
  }

}
