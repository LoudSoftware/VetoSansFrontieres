import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class SmartTableService {

  /* data = [
    {
      'animalno': 1,
      'name': 'Doggo',
      'type': 'A FUCKING It\'s a fucking dog now',
      'bdate': '2000-01-01T05:00:00.001Z',
      'inscriptiondate': '2018-03-07T10:20:04.629Z',
      'state': 'alive',
      'clinic': 1,
      'ownerno': 1,
      'clinicname': 'INEEDHEALING',
    },
  ] */
  data: any = [];

  constructor(private _http: Http) { }

  /* getData() {
    return this.data;
  } */

  getAnimals() {
    return this._http.get('http://localhost:30000/api/animal')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get('http://localhost:30000/api/animal')
        .map((res: Response) => res.json());
    });
  }
}
