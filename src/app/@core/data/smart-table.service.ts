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
import { ExamenModel } from './examen-model';


@Injectable()
export class SmartTableService {


  // private apiURL = "http://loud.software:3000/api/";
  private apiURL = "https://vetosansfrontieresbackend.herokuapp.com/api";

  constructor(private _http: Http) { }


  getAnimals(): Observable<AnimalModel[]> {
    return this._http
      .get(`${this.apiURL}/animal`)
      .map(result => {
        const animal = result.json()['data'];
        console.log(animal);
        return animal.map((animal) => new AnimalModel(animal));
      });
  }

  getAnimalTypes(): Observable<any[]> {
    return this._http
      .get(`${this.apiURL}/animaltypes`)
      .map(result => {
        const animaltype = result.json()['data'];
        console.log(animaltype);
        return animaltype;
      });
  }

  getAnimal(id: number): Observable<AnimalModel> {
    return this._http
      .get(`${this.apiURL}/animal/${id}`)
      .map(res => new AnimalModel(res.json()['data']));
  }

  updateAnimal(animal: AnimalModel): Observable<AnimalModel> {
    let res
    return this._http
      .put(`${this.apiURL}/animal/${animal.animalno}`, animal)
      .map(response => response.json());
  }

  getPersonnel(): Observable<PersonnelModel[]> {
    return this._http
      .get(`${this.apiURL}/allpersonnel`)
      .map(result => {
        const personnel = result.json()['data'];
        console.log(personnel);
        return personnel.map((personnel) => new PersonnelModel(personnel));
      });
  }

  getOwners(): Observable<OwnerModel[]> {
    return this._http
      .get(`${this.apiURL}/owner`)
      .map(result => {
        const owner = result.json()['data'];
        console.log(owner);
        return owner.map((owner) => new OwnerModel(owner));
      });
  }

  getClinics(): Observable<ClinicModel[]> {
    return this._http
      .get(`${this.apiURL}/clinics`)
      .map(result => {
        const clinic = result.json()['data'];
        console.log(clinic);
        return clinic.map((clinic) => new ClinicModel(clinic));
      });
  }

  getAllTreatments(): Observable<TreatmentsModel[]> {
    return this._http
      .get(`${this.apiURL}/treatments`)
      .map(result => {
        const treatments = result.json()['data'];
        console.log(treatments);
        return treatments.map((treatments) => new TreatmentsModel(treatments));
      });
  }

  getTreatment(id: number): Observable<TreatmentModel[]> {
    return this._http
      .get(`${this.apiURL}/treatment/${id}`)
      .map(result => {
        const treatments = result.json()['data'];
        console.log(treatments);
        return treatments.map((treatments) => new TreatmentModel(treatments));
      });
  }

  getExamen(id: number): Observable<ExamenModel[]> {
    return this._http
      .get(`${this.apiURL}/examination/${id}`)
      .map(result => {
        const examen = result.json()['data'];
        console.log(examen);
        return examen.map((examen) => new ExamenModel(examen));
      });
  }
  
  public removeAnimal(animal: AnimalModel): Observable<null> {
    return this._http
      .delete(`${this.apiURL}/animal/${animal.animalno}`)
      .map(response => response.json());
  }
  
  createAnimal(animal: AnimalModel) {
    return this._http
      .post(`${this.apiURL}/animal/`, animal)
      .map(response => response.json());
  }

}
