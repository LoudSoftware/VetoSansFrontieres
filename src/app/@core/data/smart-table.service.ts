import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


//Importing required models
import { AnimalModel } from './animal-model';


@Injectable()
export class SmartTableService {

  constructor(private _http: Http) { }


  getAnimals(): Observable<AnimalModel[]> {
    return this._http
      .get('http://localhost:30000/api/animal')
      .map(result => {
        const animal = result.json()['data'];
        console.log(animal);
        return animal.map((animal) => new AnimalModel(animal));
      });
  }

  getAnimal(id: number) {
    return this._http.get(`http://localhost:30000/api/animal/${id}`).map(res => res.json());
  }

}
