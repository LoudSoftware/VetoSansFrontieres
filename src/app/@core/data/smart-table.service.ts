import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


//Importing required models
import { AnimalModel } from './animal-model';
import { PersonnelModel } from './personnel-model';
import { OwnerModel } from './owner-model';
import { ClinicModel } from './clinic-model';
import { TreatmentModel } from './treatment-model';
import { TreatmentsModel } from './treatments-model';


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

  getAnimal(id: number): Observable<AnimalModel> {
    return this._http
      .get(`http://localhost:30000/api/animal/${id}`)
      .map(res => new AnimalModel(res.json()['data']));
  }

  updateAnimal(animal: AnimalModel): Observable<AnimalModel> {
    let res
    return this._http
      .put(`http://localhost:30000/api/animal/${animal.animalno}`, animal)
      .map(response => response.json());
  }

  getPersonnel(): Observable<PersonnelModel[]> {
    return this._http
      .get('http://localhost:30000/api/allpersonnel')
      .map(result => {
        const personnel = result.json()['data'];
        console.log(personnel);
        return personnel.map((personnel) => new PersonnelModel(personnel));
      });
  }

  getOwners(): Observable<OwnerModel[]> {
    return this._http
      .get('http://localhost:30000/api/owner')
      .map(result => {
        const owner = result.json()['data'];
        console.log(owner);
        return owner.map((owner) => new OwnerModel(owner));
      });
  }

  getClinics(): Observable<ClinicModel[]> {
    return this._http
      .get('http://localhost:30000/api/clinics')
      .map(result => {
        const clinic = result.json()['data'];
        console.log(clinic);
        return clinic.map((clinic) => new ClinicModel(clinic));
      });
  }

  getAllTreatments(): Observable<TreatmentsModel[]> {
    return this._http
      .get('http://localhost:30000/api/treatments')
      .map(result => {
        const treatments = result.json()['data'];
        console.log(treatments);
        return treatments.map((treatments) => new TreatmentsModel(treatments));
      });
  }


  getTreatment(id: number): Observable<TreatmentModel> {// TODO change this to return an array and make it work with the stuff that uses it
    return this._http
      .get(`http://localhost:30000/api/treatment/${id}`)
      .map(res => new TreatmentModel(res.json()['data']));
  }

}
