import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
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

  constructor(private http: HttpClient) { }


  getAnimals(): Observable<AnimalModel[]> {
    return this.http
      .get<AnimalModel[]>(`${this.apiURL}/animal`)
      .map(result => result['data']);
  }

  getAnimal(id: number): Observable<AnimalModel> {
    return this.http
      .get<AnimalModel>(`${this.apiURL}/animal/${id}`)
      .map(result => result['data']);
  }

  getAnimalTypes(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiURL}/animaltypes`)
      .map(result => result['data']);
  }


  updateAnimal(animal: AnimalModel): Observable<AnimalModel> {
    return this.http
      .put<AnimalModel>(`${this.apiURL}/animal/${animal.animalno}`, animal);
  }

  getPersonnel(): Observable<PersonnelModel[]> {
    return this.http
      .get<PersonnelModel>(`${this.apiURL}/allpersonnel`)
      .map(res => res['data']);
  }


  getOwners(): Observable<OwnerModel[]> {
    return this.http
      .get<OwnerModel>(`${this.apiURL}/owner`)
      .map(res => res['data']);
  }


  getClinics(): Observable<ClinicModel[]> {
    return this.http
      .get<ClinicModel>(`${this.apiURL}/clinics`)
      .map(res => res['data']);
  }


  getAllTreatments(): Observable<TreatmentsModel[]> {
    return this.http
      .get<TreatmentsModel[]>(`${this.apiURL}/treatments`)
      .map(result => result['data']);
  }

  getTreatment(id: number): Observable<TreatmentModel[]> {
    return this.http
      .get<TreatmentModel[]>(`${this.apiURL}/treatment/${id}`)
      .map(result => result['data']);
  }

  getExamen(id: number): Observable<ExamenModel[]> {
    return this.http
      .get<ExamenModel>(`${this.apiURL}/examination/${id}`)
      .map(result => result['data']);
  }

  public removeAnimal(animal: AnimalModel): Observable<AnimalModel> {
    return this.http
      .delete<AnimalModel>(`${this.apiURL}/animal/${animal.animalno}`);
  }

  createAnimal(animal: AnimalModel) {
    return this.http
      .post<AnimalModel>(`${this.apiURL}/animal/`, animal);
  }

}
